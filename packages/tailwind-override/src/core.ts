const defaultOptions = {
  prefix: '',
  tailwindProperties: {},
}

export type OptionsArg = { prefix?: string; tailwindProperties?: { [key: string]: string[] } }

const removeVariant = (className) => className.split(':').slice(-1)[0]

export const overrideTailwindClasses = (classNamesString: string, optionsArg: OptionsArg = defaultOptions) => {
  const options = { ...defaultOptions, ...optionsArg }
  const classNames = classNamesString.split(/\s+/)
  return classNames
    .reduce((result: { class: string; tailWindCssProperties: string[] }[], className: string) => {
      const classNameWithoutPrefix = className.startsWith(options.prefix) ? className.substring(options.prefix.length) : className
      const propertiesForClass = (options.tailwindProperties[removeVariant(classNameWithoutPrefix)] as string[]) || []
      const nonClashingClasses = result.filter((r) => !r.tailWindCssProperties.some((p) => propertiesForClass.includes(p)))
      return [...nonClashingClasses, { class: className, tailWindCssProperties: propertiesForClass }]
    }, [])
    .map((r) => r.class)
    .join(' ')
}
