/**
 * @group slow
 */
import fs from 'fs'
import { execSync } from 'child_process'
import _ from 'lodash'
import { findTailwindProperties } from '../src/index'
type TailwindPropertiesJson = { [key: string]: { properties: string[]; pseudoElements: string[]; topLevelMediaRules: string[] } }

const cssFile = `/tmp/tailwindtest.css`
const tailwindPropertiesFile = `/tmp/tailwindProperties.json`
const generateTailwindCssFileCommand = `npx --yes tailwindcss-cli@latest -o ${cssFile}`
const generateTailwindPropertiesFileCommand = `ts-node ../tailwind-override-cli/src/cli/generateTailwindProperties.ts --inputFile ${cssFile} --outputFile ${tailwindPropertiesFile}`
test(`x`, () => {
  execSync(generateTailwindCssFileCommand)
  execSync(generateTailwindPropertiesFileCommand)
  const tailwindPropertiesJson = JSON.parse(fs.readFileSync(tailwindPropertiesFile, 'utf8'))
  let tailwindProperties = _.map(tailwindPropertiesJson as TailwindPropertiesJson, (value, className) => ({ className, ...value }))
  tailwindProperties = _.filter(tailwindProperties, (property) => property.pseudoElements?.length === 0 && property.topLevelMediaRules.length === 0)
  console.log(tailwindProperties)
  const errors = tailwindProperties.map((tailwindProperty) => {
    const properties = _.sortBy(findTailwindProperties(tailwindProperty.className))
    const expectedProperties = _.sortBy(tailwindProperty.properties)
    if (!_.isEqual(properties, expectedProperties)) {
      return { className: tailwindProperty.className, properties, expectedProperties }
    }
    return null
  })
  expect(_.compact(errors)).toStrictEqual([])
})
