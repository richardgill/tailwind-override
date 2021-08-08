import tailwindProperties from './tailwindcssProperties.json'
import { overrideTailwindClasses as overrideTailwindClassesCore } from './core'
import type { OptionsArg } from './core'

const defaultOptions = {
  prefix: '',
  tailwindProperties,
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg?: OptionsArg) => {
  return overrideTailwindClassesCore(classNamesString, { ...defaultOptions, ...optionsArg })
}
