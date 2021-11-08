import fs from 'fs'
import _ from 'lodash'

const css = JSON.parse(fs.readFileSync('./test.json', 'utf-8'))

const result = _.reverse(css.map((x) => ({ classes: x.classes[0], properties: x.properties })))

console.log(JSON.stringify(result, null, 2))
