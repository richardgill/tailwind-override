import tailwindProperties from './tailwindcssProperties.json'

const defaultOptions = {
  prefix: '',
  tailwindProperties,
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg: { prefix?: string; tailwindProperties?: { [key: string]: string[] } } = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArg }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((result: { class: string; tailWindCssProperties: string[] }[], className: string) => {
      const classNameWithoutPrefix = className.startsWith(options.prefix) ? className.substring(options.prefix.length) : className
      const propertiesForClass = (options.tailwindProperties[classNameWithoutPrefix] as string[]) || []
      const nonClashingClasses = result.filter(r => !r.tailWindCssProperties.some(p => propertiesForClass.includes(p)))
      return [...nonClashingClasses, { class: className, tailWindCssProperties: propertiesForClass }]
    }, [])
    .map(r => r.class)
    .join(' ')
}
