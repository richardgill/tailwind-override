import tailwindPropertiesJson from './tailwindcssProperties.json'
import { overrideTailwindClasses as overrideTailwindClassesCore } from './core'
import type { OptionsArg } from './core'

const defaultOptions = {
  prefix: '',
  tailwindProperties: tailwindPropertiesJson,
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg?: OptionsArg) => {
  return overrideTailwindClassesCore(classNamesString, { ...defaultOptions, ...optionsArg })
}

export const tailwindProperties = tailwindPropertiesJson
