# Tailwindcss Overrides

A function to remove clashing Tailwindcss classes, where the right-most one wins.

Examples:

```js
import { overrideTailwindClasses } from 'tailwind-override'

overrideTailwindClasses('pt-2 pt-4')
// => 'pt-4'

overrideTailwindClasses('text-pink-200 text-blue-200')
// => 'text-blue-200'

overrideTailwindClasses('text-pink-200 pt-2')
// => 'text-pink-200 pt-2' (don't clash)

overrideTailwindClasses('orange apple')
// => 'orange apple' (not tailwind classes)

overrideTailwindClasses('dark:md:text-pink-200 dark:md:text-blue-200')
// => 'md:text-pink-200 md:text-blue-200'

overrideTailwindClasses('text-pink-500 !text-[#ffaa11]/25')
// => '!text-[#ffaa11]/25'
```

This helps define React Components where tailwind classes are overrideable.

✅ No external dependencies

✅ Works with all tailwind classes

✅ Supports prefixes & variants e.g. `md:*`

✅ Supports tailwind's jit syntax e.g: `text-[#ffaa11]`

✅ Small bundle size (~31KB out the box)

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
const Text = (props) => {
  return <p className={`text-pink-200 ${props.className}`}>{props.children}</p>
}

<Text className="text-blue-200">Hello</Text> // Not obvious if this will render pink or blue???
```

Solution:

```jsx
const Text = (props) => {
  return <p className={overrideTailwindClasses(`text-pink-200 ${props.className}`)}>{props.children}</p>
}

<Text className="text-blue-200">Hello</Text> // this is blue!
```

## With [classnames](https://github.com/JedWatson/classnames)

```js
import classNamesOriginal from 'classnames'
import { overrideTailwindClasses } from 'tailwind-override'

export const classNames = (...args) => overrideTailwindClasses(classNamesOriginal(...args))
```

## Options


### Prefix

Defaults to `''`

Supports Tailwind's prefix functionality.

```js
overrideTailwindClasses('prefix-pt-2 prefix-pt-4', { prefix: 'prefix-' })
// => 'prefix-pt-4'
```

### Jit

Defaults to `true`

Supportss Tailwind's jit syntax.

```js
overrideTailwindClasses('!text-[#aabbcc]/5 !text-[#ffaa11]/25', { jit: true })
// => '!text-[#ffaa11]/25'
```

```js
overrideTailwindClasses('!text-[#aabbcc]/5 !text-[#ffaa11]/25', { jit: false })
// => '!text-[#aabbcc]/5 !text-[#ffaa11]/25'
```

### Cache rule look ups

Defaults to: `true`

If set to true the library caches lookups for the same class e.g. `text-pink-200`, so next time it will not need to look up the rule again.

```js
overrideTailwindClasses('text-pink-200 text-pink-300', { ruleLookupCache: true })
// => 'text-pink-200' and 'text-pink-300' rules now cached, won't be looked up again
```
