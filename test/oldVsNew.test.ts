/**
 * @group slow
 */
import seedrandom from 'seedrandom'
import _ from 'lodash'
import { overrideTailwindClasses, TailWindCssProperties } from '../src/useCssProperties/core'
import defaultTailwindcssProperties from '../src/useCssProperties/tailwindcssProperties.json'

seedrandom('seed')

const combinations = (array: string[]) => {
  return array.flatMap((v) =>
    _.sampleSize(array, 100).flatMap((x) => [
      [v, x],
      [x, v],
    ]),
  )
}
const testCases = combinations(_.sampleSize(Object.keys(defaultTailwindcssProperties), 3000))

for (const testCase of testCases) {
  const classes = testCase.join(' ')
  test(`overrideTailwindClassesLegacy('${classes}') returns overrideTailwindClasses('${classes}')`, () => {
    const oldResult = overrideTailwindClasses(classes, { tailwindProperties: defaultTailwindcssProperties as TailWindCssProperties })
    const newResult = overrideTailwindClasses(classes, { tailwindProperties: defaultTailwindcssProperties as TailWindCssProperties })
    expect(newResult).toBe(oldResult)
  })
}
