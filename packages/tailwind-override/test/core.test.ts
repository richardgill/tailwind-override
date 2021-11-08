/**
 * @group unit
 */

import { overrideTailwindClasses } from '../src/useCssProperties/core'
import defaultTailwindcssProperties from '../src/useCssProperties/tailwindcssProperties.json'

import { defaultTestCases } from './defaultTests'

for (const testCase of defaultTestCases) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, { tailwindProperties: defaultTailwindcssProperties, ...testCase.options })).toBe(testCase.expectedOutput)
  })
}
