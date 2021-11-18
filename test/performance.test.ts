/**
 * @group performance
 */
import _ from 'lodash'
import { performance } from 'perf_hooks'
import { Options, overrideTailwindClasses } from '../src/index'

import { allTestCases } from './testCases'

test(`overrideTailwindClasses performance`, () => {
  const start = performance.now()
  for (const testCase of allTestCases) {
    overrideTailwindClasses(testCase.input, { ...testCase.options, ruleLookupCache: false } as Options)
  }
  const end = performance.now()
  expect(end - start).toBeLessThan(300)
})

const duplicatedTestCases = _.times(1000).flatMap(() => allTestCases)

test(`overrideTailwindClasses performance`, () => {
  const start = performance.now()
  for (const testCase of duplicatedTestCases) {
    overrideTailwindClasses(testCase.input, testCase.options as Options)
  }
  const end = performance.now()
  expect(end - start).toBeLessThan(3000)
})
