import _ from 'lodash'

const defaultOptions = {
  prefix: '',
  tailwindProperties: {},
}
type TailwindCssRule = { properties: string[]; pseudoElements: string[]; topLevelMediaRules: string[] }
export type TailWindCssProperties = { [key: string]: TailwindCssRule }

export type OptionsArg = { prefix?: string; tailwindProperties?: TailWindCssProperties }

const isEqualsSorted = (x: string[], y: string[]) => {
  return _.isEqual(_.sortBy(x), _.sortBy(y))
}

const doMediaRulesClash = (mediaRule1: string[], mediaRule2: string[]) => {
  return isEqualsSorted(mediaRule1, mediaRule2)
}

const doPseudoElementsClash = (pseudoElements1: string[], pseudoElements2: string[]) => {
  return isEqualsSorted(pseudoElements1, pseudoElements2)
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg: OptionsArg = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArg }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((resultSoFar: { class: string; tailwindCssRule: TailwindCssRule }[], className: string) => {
      const classNameWithoutPrefix = className.startsWith(options.prefix) ? className.substring(options.prefix.length) : className
      const tailwindCssRule = options.tailwindProperties[classNameWithoutPrefix] || { properties: [], pseudoElements: [] }
      const nonClashingClasses = resultSoFar.filter((r) => {
        return (
          !doMediaRulesClash(r.tailwindCssRule.topLevelMediaRules, tailwindCssRule.topLevelMediaRules) ||
          !doPseudoElementsClash(r.tailwindCssRule.pseudoElements, tailwindCssRule.pseudoElements) ||
          !r.tailwindCssRule.properties.some((p) => tailwindCssRule.properties.includes(p))
        )
      })
      return [...nonClashingClasses, { class: className, tailwindCssRule: tailwindCssRule }]
    }, [])
    .map((r) => r.class)
    .join(' ')
}
