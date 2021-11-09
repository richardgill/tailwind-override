import tailwindPropertiesJson from './tailwindcssProperties.json'
import { overrideTailwindClasses as overrideTailwindClassesCore, TailWindCssProperties } from './core'
import type { OptionsArg } from './core'

const defaultOptions = {
  prefix: '',
  tailwindProperties: tailwindPropertiesJson as TailWindCssProperties,
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg?: OptionsArg) => {
  return overrideTailwindClassesCore(classNamesString, { ...defaultOptions, ...optionsArg })
}

export const tailwindProperties = tailwindPropertiesJson as TailWindCssProperties
