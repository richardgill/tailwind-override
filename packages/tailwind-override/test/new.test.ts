/**
 * @group unit
 */

import { overrideTailwindClasses } from '../src/index'

import { defaultTestCases, ruleBasedTestCases } from './defaultTests'

for (const testCase of [...defaultTestCases, ...ruleBasedTestCases]) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, testCase.options)).toBe(testCase.expectedOutput)
  })
}
