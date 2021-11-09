/**
 * @group unit
 */

import { overrideTailwindClasses } from '../src/useCssProperties/index'

import { defaultTestCases } from './defaultTests'

for (const testCase of defaultTestCases) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, testCase.options)).toBe(testCase.expectedOutput)
  })
}
