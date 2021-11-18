/**
 * @group unit
 */
import _ from 'lodash'
import { findTailwindProperties } from '../src/index'

const testCases = [
  {
    classStartsWith: 'duration-',
    expectedProperties: ['transition-duration'],
  },
  {
    classStartsWith: 'delay-',
    expectedProperties: ['transition-delay'],
  },
  {
    classStartsWith: 'backdrop-sepia-',
    expectedProperties: ['--tw-backdrop-sepia'],
  },
  {
    classStartsWith: 'backdrop-saturate-',
    expectedProperties: ['--tw-backdrop-saturate'],
  },
  {
    classStartsWith: 'backdrop-opacity-',
    expectedProperties: ['--tw-backdrop-opacity'],
  },
  {
    classStartsWith: 'backdrop-invert-',
    expectedProperties: ['--tw-backdrop-invert'],
  },
  {
    classStartsWith: 'backdrop-hue-rotate-',
    expectedProperties: ['--tw-backdrop-hue-rotate'],
  },
  {
    classStartsWith: 'backdrop-grayscale-',
    expectedProperties: ['--tw-backdrop-grayscale'],
  },
  {
    classStartsWith: 'backdrop-contrast-',
    expectedProperties: ['--tw-backdrop-contrast'],
  },
  {
    classStartsWith: 'backdrop-brightness-',
    expectedProperties: ['--tw-backdrop-brightness'],
  },
  {
    classStartsWith: 'backdrop-blur-',
    expectedProperties: ['--tw-backdrop-blur'],
  },
  { classStartsWith: 'sepia-', expectedProperties: ['--tw-sepia'] },
  {
    classStartsWith: 'saturate-',
    expectedProperties: ['--tw-saturate'],
  },
  { classStartsWith: 'invert-', expectedProperties: ['--tw-invert'] },
  {
    classStartsWith: 'hue-rotate-',
    expectedProperties: ['--tw-hue-rotate'],
  },
  {
    classStartsWith: 'grayscale-',
    expectedProperties: ['--tw-grayscale'],
  },
  {
    classStartsWith: 'drop-shadow-',
    expectedProperties: ['--tw-drop-shadow'],
  },
  {
    classStartsWith: 'contrast-',
    expectedProperties: ['--tw-contrast'],
  },
  {
    classStartsWith: 'brightness-',
    expectedProperties: ['--tw-brightness'],
  },
  {
    classStartsWith: 'blur-',
    expectedProperties: ['--tw-blur'],
  },
  {
    classStartsWith: 'ring-',
    expectedProperties: ['--tw-ring-offset-shadow', '--tw-ring-shadow', 'box-shadow'],
  },
  {
    classStartsWith: 'ring-offset-',
    expectedProperties: ['--tw-ring-offset-width'],
  },
  {
    classStartsWith: 'ring-opacity-',
    expectedProperties: ['--tw-ring-opacity'],
  },
  {
    classStartsWith: 'shadow-',
    expectedProperties: ['--tw-shadow', 'box-shadow'],
  },
  {
    classStartsWith: 'mix-blend-',
    expectedProperties: ['mix-blend-mode'],
  },
  {
    classStartsWith: 'bg-blend-',
    expectedProperties: ['background-blend-mode'],
  },
  {
    classStartsWith: 'opacity-',
    expectedProperties: ['opacity'],
  },
  {
    classStartsWith: 'caret-',
    expectedProperties: ['caret-color'],
  },
  {
    classStartsWith: 'text-opacity-',
    expectedProperties: ['--tw-text-opacity'],
  },
  {
    classStartsWith: 'text-',
    expectedProperties: ['--tw-text-opacity', 'color'],
  },
  {
    classStartsWith: 'tracking-',
    expectedProperties: ['letter-spacing'],
  },
  {
    classStartsWith: 'leading-',
    expectedProperties: ['line-height'],
  },
  {
    classStartsWith: 'font-',
    expectedProperties: ['font-weight'],
  },
  {
    classStartsWith: 'align-',
    expectedProperties: ['vertical-align'],
  },
  {
    classStartsWith: 'pl-',
    expectedProperties: ['padding-left'],
  },
  {
    classStartsWith: 'pb-',
    expectedProperties: ['padding-bottom'],
  },
  {
    classStartsWith: 'pr-',
    expectedProperties: ['padding-right'],
  },
  {
    classStartsWith: 'pt-',
    expectedProperties: ['padding-top'],
  },
  {
    classStartsWith: 'py-',
    expectedProperties: ['padding-bottom', 'padding-top'],
  },
  {
    classStartsWith: 'px-',
    expectedProperties: ['padding-left', 'padding-right'],
  },
  {
    classStartsWith: 'p-',
    expectedProperties: ['padding'],
  },
  {
    classStartsWith: 'stroke-',
    expectedProperties: ['stroke-width'],
  },
  {
    classStartsWith: 'bg-origin-',
    expectedProperties: ['background-origin'],
  },
  {
    classStartsWith: 'bg-repeat-',
    expectedProperties: ['background-repeat'],
  },
  {
    classStartsWith: 'to-',
    expectedProperties: ['--tw-gradient-to'],
  },
  {
    classStartsWith: 'via-',
    expectedProperties: ['--tw-gradient-stops'],
  },
  {
    classStartsWith: 'from-',
    expectedProperties: ['--tw-gradient-from', '--tw-gradient-stops'],
  },
  {
    classStartsWith: 'bg-',
    expectedProperties: ['--tw-bg-opacity', 'background-color'],
  },
  {
    classStartsWith: 'bg-opacity-',
    expectedProperties: ['--tw-bg-opacity'],
  },
  {
    classStartsWith: 'bg-gradient-to-',
    expectedProperties: ['background-image'],
  },
  {
    classStartsWith: 'border-opacity-',
    expectedProperties: ['--tw-border-opacity'],
  },
  {
    classStartsWith: 'border-l-',
    expectedProperties: ['border-left-width'],
  },
  {
    classStartsWith: 'border-b-',
    expectedProperties: ['border-bottom-width'],
  },
  {
    classStartsWith: 'border-r-',
    expectedProperties: ['border-right-width'],
  },
  {
    classStartsWith: 'border-t-',
    expectedProperties: ['border-top-width'],
  },
  {
    classStartsWith: 'border-',
    expectedProperties: ['border-width'],
  },
  {
    classStartsWith: 'rounded-bl-',
    expectedProperties: ['border-bottom-left-radius'],
  },
  {
    classStartsWith: 'rounded-br-',
    expectedProperties: ['border-bottom-right-radius'],
  },
  {
    classStartsWith: 'rounded-tr-',
    expectedProperties: ['border-top-right-radius'],
  },
  {
    classStartsWith: 'rounded-tl-',
    expectedProperties: ['border-top-left-radius'],
  },
  {
    classStartsWith: 'rounded-l-',
    expectedProperties: ['border-bottom-left-radius', 'border-top-left-radius'],
  },
  {
    classStartsWith: 'rounded-b-',
    expectedProperties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
  },
  {
    classStartsWith: 'rounded-r-',
    expectedProperties: ['border-bottom-right-radius', 'border-top-right-radius'],
  },
  {
    classStartsWith: 'rounded-t-',
    expectedProperties: ['border-top-left-radius', 'border-top-right-radius'],
  },
  {
    classStartsWith: 'rounded-',
    expectedProperties: ['border-radius'],
  },
  {
    classStartsWith: 'divide-opacity-',
    expectedProperties: ['--tw-divide-opacity'],
  },
  {
    classStartsWith: 'divide-y-',
    expectedProperties: ['--tw-divide-y-reverse', 'border-bottom-width', 'border-top-width'],
  },
  {
    classStartsWith: 'divide-x-',
    expectedProperties: ['--tw-divide-x-reverse', 'border-left-width', 'border-right-width'],
  },
  {
    classStartsWith: 'divide-',
    expectedProperties: ['--tw-divide-opacity', 'border-color'],
  },
  {
    classStartsWith: 'space-y-',
    expectedProperties: ['--tw-space-y-reverse', 'margin-bottom', 'margin-top'],
  },
  {
    classStartsWith: 'space-x-',
    expectedProperties: ['--tw-space-x-reverse', 'margin-left', 'margin-right'],
  },
  {
    classStartsWith: 'gap-y-',
    expectedProperties: ['row-gap'],
  },
  {
    classStartsWith: 'gap-x-',
    expectedProperties: ['-moz-column-gap', 'column-gap'],
  },
  {
    classStartsWith: 'gap-',
    expectedProperties: ['gap'],
  },
  {
    classStartsWith: 'grid-rows-',
    expectedProperties: ['grid-template-rows'],
  },
  {
    classStartsWith: 'grid-cols-',
    expectedProperties: ['grid-template-columns'],
  },
  {
    classStartsWith: 'auto-rows-',
    expectedProperties: ['grid-auto-rows'],
  },
  {
    classStartsWith: 'grid-flow-',
    expectedProperties: ['grid-auto-flow'],
  },
  {
    classStartsWith: 'auto-cols-',
    expectedProperties: ['grid-auto-columns'],
  },
  {
    classStartsWith: 'cursor-',
    expectedProperties: ['cursor'],
  },
  {
    classStartsWith: 'animate-',
    expectedProperties: ['-webkit-animation', 'animation'],
  },
  {
    classStartsWith: 'scale-y-',
    expectedProperties: ['--tw-scale-y'],
  },
  {
    classStartsWith: 'scale-x-',
    expectedProperties: ['--tw-scale-x'],
  },
  {
    classStartsWith: 'scale-',
    expectedProperties: ['--tw-scale-x', '--tw-scale-y'],
  },
  {
    classStartsWith: 'skew-y-',
    expectedProperties: ['--tw-skew-y'],
  },
  {
    classStartsWith: 'skew-x-',
    expectedProperties: ['--tw-skew-x'],
  },
  {
    classStartsWith: 'rotate-',
    expectedProperties: ['--tw-rotate'],
  },
  {
    classStartsWith: 'translate-y-',
    expectedProperties: ['--tw-translate-y'],
  },
  {
    classStartsWith: 'translate-x-',
    expectedProperties: ['--tw-translate-x'],
  },
  {
    classStartsWith: 'origin-',
    expectedProperties: ['transform-origin'],
  },
  { classStartsWith: 'flex-grow-', expectedProperties: ['flex-grow'] },
  {
    classStartsWith: 'flex-shrink-',
    expectedProperties: ['flex-shrink'],
  },
  {
    classStartsWith: 'flex-',
    expectedProperties: ['flex'],
  },
  {
    classStartsWith: 'max-w-',
    expectedProperties: ['max-width'],
  },
  {
    classStartsWith: 'min-w-',
    expectedProperties: ['min-width'],
  },
  {
    classStartsWith: 'w-',
    expectedProperties: ['width'],
  },
  {
    classStartsWith: 'min-h-',
    expectedProperties: ['min-height'],
  },
  {
    classStartsWith: 'max-h-',
    expectedProperties: ['max-height'],
  },
  {
    classStartsWith: 'h-',
    expectedProperties: ['height'],
  },
  {
    classStartsWith: 'ml-',
    expectedProperties: ['margin-left'],
  },
  {
    classStartsWith: 'mb-',
    expectedProperties: ['margin-bottom'],
  },
  {
    classStartsWith: 'mr-',
    expectedProperties: ['margin-right'],
  },
  {
    classStartsWith: 'mt-',
    expectedProperties: ['margin-top'],
  },
  {
    classStartsWith: 'my-',
    expectedProperties: ['margin-bottom', 'margin-top'],
  },
  {
    classStartsWith: 'mx-',
    expectedProperties: ['margin-left', 'margin-right'],
  },
  {
    classStartsWith: 'm-',
    expectedProperties: ['margin'],
  },
  {
    classStartsWith: 'row-end-',
    expectedProperties: ['grid-row-end'],
  },
  {
    classStartsWith: 'row-start-',
    expectedProperties: ['grid-row-start'],
  },
  {
    classStartsWith: 'row-span-',
    expectedProperties: ['grid-row'],
  },
  {
    classStartsWith: 'col-end-',
    expectedProperties: ['grid-column-end'],
  },
  {
    classStartsWith: 'col-start-',
    expectedProperties: ['grid-column-start'],
  },
  {
    classStartsWith: 'col-span-',
    expectedProperties: ['grid-column'],
  },
  {
    classStartsWith: 'order-',
    expectedProperties: ['order'],
  },
  {
    classStartsWith: 'z-',
    expectedProperties: ['z-index'],
  },
  {
    classStartsWith: 'left-',
    expectedProperties: ['left'],
  },
  {
    classStartsWith: 'bottom-',
    expectedProperties: ['bottom'],
  },
  {
    classStartsWith: 'right-',
    expectedProperties: ['right'],
  },
  {
    classStartsWith: 'top-',
    expectedProperties: ['top'],
  },
  {
    classStartsWith: 'inset-y-',
    expectedProperties: ['bottom', 'top'],
  },
  {
    classStartsWith: 'inset-x-',
    expectedProperties: ['left', 'right'],
  },
  {
    classStartsWith: 'inset-',
    expectedProperties: ['bottom', 'left', 'right', 'top'],
  },
]

for (const testCase of testCases) {
  test(`${testCase.classStartsWith}[value] returns expectedProperties: ${testCase.expectedProperties}`, () => {
    const className = `${testCase.classStartsWith}[value]`
    const properties = _.sortBy(findTailwindProperties(className, { prefix: '', jit: true, ruleLookupCache: false }))
    const expectedProperties = _.sortBy(testCase.expectedProperties)
    expect(properties).toStrictEqual(expectedProperties)
  })
}
