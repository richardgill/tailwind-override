# Tailwindcss Overrides

A function to remove clashing Tailwindcss classes, where the right-most one wins.

Examples:

```js
overrideTailwindClasses('pt-2 pt-4')
// => 'pt-4'

overrideTailwindClasses('text-pink-200 text-blue-200')
// => 'text-blue-200'

overrideTailwindClasses('text-pink-200 pt-2')
// => 'text-pink-200 pt-2' (don't clash)

overrideTailwindClasses('orange apple')
// => 'orange apple' (not tailwind classes)
```

This helps define React Components where tailwind classes are overrideable.

✅ No external dependencies

✅ Works with all tailwind classes

✅ Supports prefixes & variants e.g. `md:*`

✅ Small bundle size

## Usage

```
yarn add tailwind-override
```

```js
import { overrideTailwindClasses } from 'tailwind-override'
overrideTailwindClasses('pt-2 pt-4')
// => 'pt-4'
```

## React example

Problem:

```jsx
const Text = props => <p className={`text-pink-200 ${props.className}`}>{props.children}</p>

<Text className="text-blue-200">Hello</Text> // Not obvious if this will render pink or blue???
```

Solution:

```jsx
const Text = props => <p className={overrideTailwindClasses(`text-pink-200 ${props.className}`)}>{props.children}</p>

<Text className="text-blue-200">Hello</Text> // this is blue!
```

## With [classnames](https://github.com/JedWatson/classnames)

```js
import classNamesOriginal from 'classnames'
import { overrideTailwindClasses } from 'tailwind-override'

export const classNames = (...args) => overrideTailwindClasses(classNamesOriginal(...args))
```

## Prefixes

Supports Tailwinds prefix functionality.

```js
overrideTailwindClasses('prefix-pt-2 prefix-pt-4', { prefix: 'prefix-' })
// => 'prefix-pt-4'
```

## Variants

Supports Tailwinds 'variants' functionality.

```js
overrideTailwindClasses('md:bg-red-500 md:bg-white')
// => 'md:bg-white'
```

## Bundle size

tailwind-override-cli does analysis of your `.css` and generates a `.json` file.

Out of the box `tailwind-override` it comes preloaded with a file `tailwindcssProperties.json` which contains all the tailwind classes - this is ~116KB.

You can avoid adding this large `.json` file to your bundle by instead importing: `tailwind-override/lib/core` and providing your own `.json` file which you can generate from your [purged tailwind css file](https://tailwindcss.com/docs/optimizing-for-production).

### Generating your own `.json` file

Example:

```bash
yarn add --dev tailwind-override-cli
npx tailwindcss build -o myTailwind.css # to purge: NODE_ENV=production npx tailwindcss build -o myTailwind.css
node_modules/.bin/tailwind-override --inputFile myTailwind.css --outputFile tailwindProperties.json
```

You can pass `tailwindProperties.json` as an option to the function:

```js
import { overrideTailwindClasses } from 'tailwind-override/lib/core' // avoids default .json file
import tailwindProperties from './tailwindProperties.json'
overrideTailwindClasses('text-blue-700 text-blue-750', {
  tailwindProperties: tailwindProperties,
})
```
