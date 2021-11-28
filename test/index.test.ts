/**
 * @group unit
 */
import { Options, overrideTailwindClasses } from '../src/index'

import { allTestCases } from './testCases'

for (const testCase of allTestCases) {
  test(`overrideTailwindClasses('${testCase.input}', ${JSON.stringify(testCase.options)}) returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, testCase.options as Options)).toBe(testCase.expectedOutput)
  })
}
