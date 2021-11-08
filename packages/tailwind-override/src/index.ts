import { rules } from './rules'

const defaultOptions = {
  prefix: '',
  variantPrefixes: ['sm', 'md', 'xl', 'hover', 'focus'],
}

export type OptionsArg = { prefix?: string; variantPrefixes: string[] }

export const findTailwindProperties = (className) => {
  return rules.find((rule) => rule.regex.test(className))?.properties
}

const isTailwindClash = (classA, classB) => {
  return false
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg: OptionsArg = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArg }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((resultSoFar: string[], className: string) => {
      const classNameWithoutPrefix = className.startsWith(options.prefix) ? className.substring(options.prefix.length) : className
      const nonClashingClasses = resultSoFar.filter((r) => !isTailwindClash(className, r))
      return [...nonClashingClasses, className]
    }, [])
    .join(' ')
}
