/**
 * @group slow
 */
import { execSync } from 'child_process'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { findTailwindProperties } from '../../src/index'
import { cssToProperties } from './cssToProperties'

const getTailwindProperties = (cssFile: string) => {
  const tailwindPropertiesJson = cssToProperties(cssFile)
  const tailwindProperties = _.map(tailwindPropertiesJson, (value, className) => ({ className, ...value }))
  return _.filter(tailwindProperties, (property) => property.pseudoElements?.length === 0 && property.topLevelMediaRules.length === 0)
}
const tailwindConfigPath = (configName) => `test/propertiesVsRules/tailwindConfigs/${configName}`

const tailwindVersions = ['2.2.19', 'latest']
const rawTestCases = [
  { name: 'vanilla', tailwindCommandOptions: `` },
  { name: 'prefixes', tailwindCommandOptions: `-c ${tailwindConfigPath('prefixConfig.js')}`, options: { prefix: 'my-prefix-' } },
  { name: 'extraColors', tailwindCommandOptions: `-c ${tailwindConfigPath('extraColors.js')}` },
  { name: 'jit', tailwindCommandOptions: `--jit` },
]

const testCases = rawTestCases.flatMap((testCase) => {
  return tailwindVersions.flatMap((version) =>
    [true, false].map((jit) => ({
      ...testCase,
      options: { prefix: testCase.options?.prefix || '', jit, ruleLookupCache: true, ignoreCssVariables: false },
      tailwindVersion: version,
    })),
  )
})

for (const testCase of testCases) {
  test(testCase.name, () => {
    const cssFile = `/tmp/${uuidv4()}.css`
    const generateTailwindCssFileCommand = `npx --yes tailwindcss@${testCase.tailwindVersion} build -o ${cssFile}  ${testCase.tailwindCommandOptions}`
    execSync(generateTailwindCssFileCommand)
    const tailwindProperties = getTailwindProperties(cssFile)
    const errors = tailwindProperties.map((tailwindProperty) => {
      const properties = _.sortBy(findTailwindProperties(tailwindProperty.className, testCase.options))
      const expectedProperties = _.sortBy(tailwindProperty.properties)
      if (!_.isEqual(properties, expectedProperties)) {
        return { className: tailwindProperty.className, properties, expectedProperties }
      }
      return null
    })
    expect(_.compact(errors)).toStrictEqual([])
  })
}
