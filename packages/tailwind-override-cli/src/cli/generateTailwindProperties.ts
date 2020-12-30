#!/usr/bin/env node

import fs from 'fs'
import css from 'css'
import _ from 'lodash'
import yargs from 'yargs'

const argv = yargs.options({
  inputFile: { type: 'string', demandOption: true, alias: 'i' },
  outputFile: { type: 'string', alias: 'o', default: 'tailwindProperties.json' },
}).argv

const inputFile = argv.inputFile

const code = fs.readFileSync(inputFile, 'utf8')

const ast = css.parse(code, { source: inputFile })

const tailwindRules = _.filter(ast.stylesheet.rules, rule => {
  return rule.type === 'rule' && _.some(rule.selectors, selector => selector.startsWith('.') && !selector.includes(':'))
})

const ruleToProperty = _.chain(tailwindRules)
  .flatMap(rule =>
    rule.declarations.map(d => ({
      property: d.property,
      selector: rule.selectors[0]
        .substring(1)
        .split('\\/')
        .join('/'),
    })),
  )
  .groupBy('selector')
  .mapValues(values => {
    return _.uniq(_.map(values, 'property'))
  })
  .value()

fs.writeFileSync(argv.outputFile, JSON.stringify(ruleToProperty, null, 2))
