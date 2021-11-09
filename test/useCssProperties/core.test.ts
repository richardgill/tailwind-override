/**
 * @group unit
 */
import { overrideTailwindClasses, TailWindCssProperties } from '../../src/useCssProperties/core'
import defaultTailwindcssProperties from '../../src/useCssProperties/tailwindcssProperties.json'

import { defaultTestCases } from '../testCases'

for (const testCase of defaultTestCases) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, { tailwindProperties: defaultTailwindcssProperties as TailWindCssProperties, ...testCase.options })).toBe(
      testCase.expectedOutput,
    )
  })
}
