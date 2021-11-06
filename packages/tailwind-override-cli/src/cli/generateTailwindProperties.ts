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

const pseudoElementStartIndex = (selector: string) => {
  const match = /\w(:)/gm.exec(selector)
  return match ? match.index + 1 : selector.length
}

const pseudoElements = (selector: string) => {
  return selector
    .substring(pseudoElementStartIndex(selector))
    .split(':')
    .filter(pe => pe !== '')
}

const removePseudoClass = (selector: string) => {
  return selector.substring(0, pseudoElementStartIndex(selector))
}

const removeGreaterThan = (selector: string) => {
  const matchIndex = selector.indexOf(' >')
  if (matchIndex === -1) {
    return selector
  }
  return selector.substring(0, matchIndex)
}

const formatCssRule = (selector: string) => {
  return removeGreaterThan(removePseudoClass(selector))
    .replace(/\\:/g, ':')
    .replace(/\\/g, '')
    .substring(1)
}

const flattenRules = inputRules => {
  const rules = [...inputRules]
  const flattenedRules: any[] = []
  while (rules.length > 0) {
    const rule = rules[0]
    if (rule.type === 'media') {
      const rulesToAdd = _.map(rule.rules, r => {
        const newRule = { media: rule.media, children: [] }
        const parentMediaRules = rule.parentMediaRules ? { ...rule.parentMediaRules, children: [...rule.parentMediaRules.children, newRule] } : newRule
        return {
          ...r,
          parentMediaRules,
        }
      })
      rules.push(...rulesToAdd)
    }
    if (rule.type === 'rule') {
      flattenedRules.push(rule)
    }
    rules.shift()
  }
  return flattenedRules
}
type TailwindRule = { selectors: string[]; declarations: { property: string }[]; parentMediaRules: string[] }
const tailwindRules: TailwindRule[] = flattenRules(ast.stylesheet.rules).filter(rule => {
  return rule.type === 'rule' && _.some(rule.selectors, selector => selector.startsWith('.'))
})

const ruleToProperty = _.chain(tailwindRules)
  .flatMap(rule =>
    rule.declarations.map(d => {
      return {
        property: d.property,
        selector: formatCssRule(rule.selectors[0]),
        pseudoElements: pseudoElements(rule.selectors[0]),
        parentMediaRules: rule.parentMediaRules,
      }
    }),
  )
  .groupBy(r => r.selector)
  .mapValues(values => {
    return {
      properties: _.uniq(_.map(values, 'property')),
      pseudoElements: _.uniqWith(_.flatMap(values, 'pseudoElements'), _.isEqual),
      topLevelMediaRules: _.uniq(_.compact(_.flatMap(values, 'parentMediaRules.media'))),
    }
  })
  .value()

fs.writeFileSync(argv.outputFile, JSON.stringify(ruleToProperty, null, 2))
