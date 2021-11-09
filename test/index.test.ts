/**
 * @group unit
 */
import { Options, overrideTailwindClasses } from '../src/index'

import { defaultTestCases, ruleBasedTestCases, jitTestCases } from './testCases'

const nonJitTestCases = [...defaultTestCases, ...ruleBasedTestCases].flatMap((testCase) => {
  return [
    {
      ...testCase,
      options: {
        ...testCase.options,
        jit: false,
      },
    },
    {
      ...testCase,
      options: {
        ...testCase.options,
        jit: true,
      },
    },
  ]
})

for (const testCase of [...nonJitTestCases, ...jitTestCases]) {
  test(`overrideTailwindClasses('${testCase.input}', ${testCase.options}) returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, testCase.options as Options)).toBe(testCase.expectedOutput)
  })
}
