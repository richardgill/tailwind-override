import { getRules } from './rules'

const defaultOptions = {
  prefix: '',
  jit: true,
}

export type Options = { prefix: string; jit: boolean }

export const findTailwindProperties = (className, options: Options = { prefix: '', jit: true }) => {
  return getRules(options).find((rule) => rule.regex.test(className))?.properties
}

const tailWindPremableEndIndex = (className) => className.lastIndexOf(':')

// Premable example: 'md:focus:'
const tailWindPremable = (className) => {
  const index = tailWindPremableEndIndex(className)
  return index === -1 ? '' : className.substring(0, index)
}

const stripTailwindPremable = (className: string): string => {
  return className.substring(tailWindPremableEndIndex(className) + 1)
}

const stripTailwindImportant = (className: string): string => {
  return className.replace(/^!/g, '')
}

// Strip tailwind's /25 opacity at the end of the className
// other examples: /[0.35]
const stripTailwindOpacity = (className: string): string => {
  return className.replace(/\/(\d|\.|\[|\])+$/g, '')
}

const stripeTailwindJit = (className: string): string => {
  return stripTailwindOpacity(stripTailwindImportant(className))
}

const getTailwindClassName = (className: string, options: Options): string => {
  const strippedClassName = stripTailwindPremable(className)
  return options.jit ? stripeTailwindJit(strippedClassName) : strippedClassName
}

const isTailwindClash = (classA, classB, options) => {
  const premableA = tailWindPremable(classA)
  const premableB = tailWindPremable(classB)
  const classAProperties = findTailwindProperties(getTailwindClassName(classA, options), options)
  const classBProperties = findTailwindProperties(getTailwindClassName(classB, options), options)
  return classAProperties && classBProperties && premableA === premableB && classAProperties.some((property) => classBProperties.includes(property))
}

export const overrideTailwindClasses = (classNamesString: string, optionsArgs: Partial<Options> = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArgs }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((resultSoFar: string[], className: string) => {
      const nonClashingClasses = resultSoFar.filter((r) => !isTailwindClash(className, r, options))
      return [...nonClashingClasses, className]
    }, [])
    .join(' ')
}
