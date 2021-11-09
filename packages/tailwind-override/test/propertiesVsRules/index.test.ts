/**
 * @group slow
 */
import { execSync } from 'child_process'
import _ from 'lodash'
import uuidv4 from 'uuid/v4'
import { findTailwindProperties } from '../../src/index'
import { cssToProperties } from './cssToProperties'

const rawTestCases = [
  { name: 'vanilla', tailwindCommandOptions: `` },
  { name: 'prefixes', tailwindCommandOptions: `-c test/propertiesVsRules/prefixConfig.js`, options: { prefix: 'my-prefix-' } },
  { name: 'extraColors', tailwindCommandOptions: `-c test/propertiesVsRules/extraColors.js` },
  { name: 'jit', tailwindCommandOptions: `--jit` },
]

const tailwindVersions = ['2.2.19', 'latest']

const testCases = rawTestCases.flatMap((testCase) => tailwindVersions.map((version) => ({ ...testCase, tailwindVersion: version })))

for (const testCase of testCases) {
  test(testCase.name, () => {
    const cssFile = `/tmp/${uuidv4()}.css`
    const generateTailwindCssFileCommand = `npx --yes tailwindcss@${testCase.tailwindVersion} build -o ${cssFile}`
    execSync(`${generateTailwindCssFileCommand} ${testCase.tailwindCommandOptions}`)
    const tailwindPropertiesJson = cssToProperties(cssFile)
    let tailwindProperties = _.map(tailwindPropertiesJson, (value, className) => ({ className, ...value }))
    tailwindProperties = _.filter(tailwindProperties, (property) => property.pseudoElements?.length === 0 && property.topLevelMediaRules.length === 0)
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
