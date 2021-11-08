import fs from 'fs'
import _ from 'lodash'
import tailwindPropertiesJson from '../src/useCssProperties/tailwindcssProperties.json'

type TailwindPropertiesJson = { [key: string]: { properties: string[]; pseudoElements: string[]; topLevelMediaRules: string[] } }

let tailwindProperties = _.map(tailwindPropertiesJson as TailwindPropertiesJson, (value, className) => ({ className, ...value }))
tailwindProperties = _.filter(tailwindProperties, (property) => property.pseudoElements?.length === 0 && property.topLevelMediaRules.length === 0)

console.log(tailwindProperties)

const grouped = _.groupBy(tailwindProperties, (property) => {
  return _.orderBy(property.properties).join(',')
})
console.log(grouped)

// const commonPrefixes = (classes: string[]) => {
//   const longestClassName = (_.max(_.map(classes, (c) => c.length)) || 0) + 1
//   const possiblePrefixes = _.uniq(_.range(1, longestClassName).flatMap((index) => classes.map((c) => c.substring(0, index))))
//   const matchingPrefixes = possiblePrefixes.map((prefix) => ({ prefix, matches: classes.filter((c) => c.startsWith(prefix)) }))
//   console.log(matchingPrefixes)

//   // const prefixes = _.map(classes, (c) => c.substring(0, longestClassName))
// }

// const regexFromClasses = (classes: string[]) => {
//   commonPrefixes(classes)
//   return classes.join(',')
// }

const result = _.map(grouped, (classes, properties) => {
  return {
    properties: properties.split(','),
    classes: classes.map((c) => c.className),
  }
})

fs.writeFileSync('./test.json', JSON.stringify(result, null, 2))
