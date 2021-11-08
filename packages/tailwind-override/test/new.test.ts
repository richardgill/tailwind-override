/**
 * @group unit
 */

import { overrideTailwindClasses } from '../src/index'

import { defaultTestCases } from './defaultTests'

for (const testCase of defaultTestCases) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input)).toBe(testCase.expectedOutput)
  })
}
