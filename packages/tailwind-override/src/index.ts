import tailwindProperties from './tailwindcssProperties.json'
import { overrideTailwindClasses as overrideTailwindClassesCore, OptionsArg } from './core'

const defaultOptions = {
  prefix: '',
  tailwindProperties,
}

export const overrideTailwindClasses = (classNamesString: string, optionsArg?: OptionsArg) => {
  return overrideTailwindClassesCore(classNamesString, { ...defaultOptions, ...optionsArg })
}
