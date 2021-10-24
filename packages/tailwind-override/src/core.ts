const defaultOptions = {
  prefix: '',
  tailwindProperties: {},
}
type TailwindCssRule = { properties: string[]; pseudoElements: string[] }
type TailWindCssProperties = { [key: string]: TailwindCssRule }

export type OptionsArg = { prefix?: string; tailwindProperties?: TailWindCssProperties }

const doPseudoElementsClash = (pseudoElements1: string[], pseudoElements2: string[]) => {
  const difference = [...pseudoElements1.filter((x) => !pseudoElements2.includes(x)), ...pseudoElements2.filter((x) => !pseudoElements1.includes(x))]
  return difference.length === 0
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
          !doPseudoElementsClash(r.tailwindCssRule.pseudoElements, tailwindCssRule.pseudoElements) ||
          !r.tailwindCssRule.properties.some((p) => tailwindCssRule.properties.includes(p))
        )
      })
      return [...nonClashingClasses, { class: className, tailwindCssRule: tailwindCssRule }]
    }, [])
    .map((r) => r.class)
    .join(' ')
}
