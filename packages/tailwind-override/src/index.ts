import { getRules } from './rules'

const defaultOptions = {
  prefix: '',
}

export type Options = { prefix?: string }

export const findTailwindProperties = (className, { prefix } = { prefix: '' }) => {
  return getRules({ prefix }).find((rule) => rule.regex.test(className))?.properties
}

const tailWindPremableEndIndex = (className) => className.lastIndexOf(':')

// Premable example: 'md:focus:'
const tailWindPremable = (className) => {
  const index = tailWindPremableEndIndex(className)
  return index === -1 ? '' : className.substring(0, index)
}

const stripTailwindPremable = (className) => {
  return className.substring(tailWindPremableEndIndex(className) + 1)
}

const isTailwindClash = (classA, classB, options) => {
  const premableA = tailWindPremable(classA)
  const premableB = tailWindPremable(classB)
  const classAProperties = findTailwindProperties(stripTailwindPremable(classA), options)
  const classBProperties = findTailwindProperties(stripTailwindPremable(classB), options)
  console.log({ classA, classB, premableA, premableB, classAProperties, classBProperties, stripped: stripTailwindPremable(classB), options })
  return classAProperties && classBProperties && premableA === premableB && classAProperties.some((property) => classBProperties.includes(property))
}

export const overrideTailwindClasses = (classNamesString: string, optionsArgs: Options = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArgs }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((resultSoFar: string[], className: string) => {
      const nonClashingClasses = resultSoFar.filter((r) => !isTailwindClash(className, r, options))
      return [...nonClashingClasses, className]
    }, [])
    .join(' ')
}
