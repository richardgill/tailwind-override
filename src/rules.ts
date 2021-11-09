const number = `(\\d|\\.|/)+`
const maybeDashZero = `($|-0)`
const maybeDashNumber = `($|-${number})`
const numbersOrLetters = `([a-zA-Z]|${number})+`
const dashNumbersOrLetters = `(-|[a-zA-Z]|${number})+`
const maybeDashNumbersOrLetters = `($|-${dashNumbersOrLetters})`

const rules = [
  {
    regex: `content-none`,
    properties: ['content'],
  },
  {
    regex: `ease-(linear|in|out|in-out)`,
    properties: ['transition-timing-function'],
  },
  {
    regex: `duration-${number}`,
    properties: ['transition-duration'],
  },
  {
    regex: `delay-${number}`,
    properties: ['transition-delay'],
  },
  {
    regex: `transition($|-all|-colors|-opacity|-shadow|-transform)`,
    properties: ['transition-duration', 'transition-property', 'transition-timing-function'],
  },
  {
    regex: `transition-none`,
    properties: ['transition-property'],
  },
  {
    regex: `backdrop-sepia${maybeDashZero}`,
    properties: ['--tw-backdrop-sepia'],
  },
  {
    regex: `backdrop-saturate-${number}`,
    properties: ['--tw-backdrop-saturate'],
  },
  {
    regex: `backdrop-opacity-${number}`,
    properties: ['--tw-backdrop-opacity'],
  },
  {
    regex: `backdrop-invert${maybeDashZero}`,
    properties: ['--tw-backdrop-invert'],
  },
  {
    regex: `-?backdrop-hue-rotate-${number}`,
    properties: ['--tw-backdrop-hue-rotate'],
  },
  {
    regex: `backdrop-grayscale${maybeDashZero}`,
    properties: ['--tw-backdrop-grayscale'],
  },
  {
    regex: `backdrop-contrast-${number}`,
    properties: ['--tw-backdrop-contrast'],
  },
  {
    regex: `backdrop-brightness-${number}`,
    properties: ['--tw-backdrop-brightness'],
  },
  {
    regex: `backdrop-blur${maybeDashNumbersOrLetters}`,
    properties: ['--tw-backdrop-blur'],
  },
  {
    regex: `backdrop-filter-none`,
    properties: ['-webkit-backdrop-filter', 'backdrop-filter'],
  },
  {
    regex: `backdrop-filter`,
    properties: [
      '--tw-backdrop-blur',
      '--tw-backdrop-brightness',
      '--tw-backdrop-contrast',
      '--tw-backdrop-grayscale',
      '--tw-backdrop-hue-rotate',
      '--tw-backdrop-invert',
      '--tw-backdrop-opacity',
      '--tw-backdrop-saturate',
      '--tw-backdrop-sepia',
      '-webkit-backdrop-filter',
      'backdrop-filter',
    ],
  },
  {
    regex: `sepia${maybeDashZero}`,
    properties: ['--tw-sepia'],
  },
  {
    regex: `saturate-${number}`,
    properties: ['--tw-saturate'],
  },
  {
    regex: `invert${maybeDashZero}`,
    properties: ['--tw-invert'],
  },
  {
    regex: `-?hue-rotate-${number}`,
    properties: ['--tw-hue-rotate'],
  },
  {
    regex: `grayscale${maybeDashZero}`,
    properties: ['--tw-grayscale'],
  },
  {
    regex: `drop-shadow${maybeDashNumbersOrLetters}`,
    properties: ['--tw-drop-shadow'],
  },
  {
    regex: `contrast-${number}`,
    properties: ['--tw-contrast'],
  },
  {
    regex: `brightness-${number}`,
    properties: ['--tw-brightness'],
  },
  {
    regex: `blur${maybeDashNumbersOrLetters}`,
    properties: ['--tw-blur'],
  },
  {
    regex: `filter-none`,
    properties: ['filter'],
  },
  {
    regex: `filter`,
    properties: ['--tw-blur', '--tw-brightness', '--tw-contrast', '--tw-drop-shadow', '--tw-grayscale', '--tw-hue-rotate', '--tw-invert', '--tw-saturate', '--tw-sepia', 'filter'],
  },
  {
    regex: `ring-offset-[A-Za-z].*`,
    properties: ['--tw-ring-offset-color'],
  },
  {
    regex: `ring${maybeDashNumber}`,
    properties: ['--tw-ring-offset-shadow', '--tw-ring-shadow', 'box-shadow'],
  },
  {
    regex: `ring-offset-${number}`,
    properties: ['--tw-ring-offset-width'],
  },
  {
    regex: `ring-opacity-${number}`,
    properties: ['--tw-ring-opacity'],
  },
  {
    regex: `ring-(transparent|current)`,
    properties: ['--tw-ring-color'],
  },
  {
    regex: `ring-inset`,
    properties: ['--tw-ring-inset'],
  },
  {
    regex: `ring-${dashNumbersOrLetters}`,
    properties: ['--tw-ring-color', '--tw-ring-opacity'],
  },
  {
    regex: `outline-(none|white|black)`,
    properties: ['outline', 'outline-offset'],
  },
  {
    regex: `shadow${maybeDashNumbersOrLetters}`,
    properties: ['--tw-shadow', 'box-shadow'],
  },
  {
    regex: `mix-blend-${dashNumbersOrLetters}`,
    properties: ['mix-blend-mode'],
  },
  {
    regex: `bg-blend-${dashNumbersOrLetters}`,
    properties: ['background-blend-mode'],
  },
  {
    regex: `opacity-${number}`,
    properties: ['opacity'],
  },
  {
    regex: `caret-${dashNumbersOrLetters}`,
    properties: ['caret-color'],
  },
  {
    regex: `(subpixel-antialiased|antialiased)`,
    properties: ['-moz-osx-font-smoothing', '-webkit-font-smoothing'],
  },
  {
    regex: `(underline|line-through|no-underline)`,
    properties: ['text-decoration'],
  },
  {
    regex: `text-opacity-${number}`,
    properties: ['--tw-text-opacity'],
  },
  {
    regex: `text-(transparent|current)`,
    properties: ['color'],
  },
  {
    regex: `text-(xs|sm|base|lg|xl|\\dxl)`,
    properties: ['font-size', 'line-height'],
  },
  {
    regex: `text-(left|center|right|justify)`,
    properties: ['text-align'],
  },
  {
    regex: `text-${dashNumbersOrLetters}`,
    properties: ['--tw-text-opacity', 'color'],
  },
  {
    regex: `tracking-${dashNumbersOrLetters}`,
    properties: ['letter-spacing'],
  },
  {
    regex: `leading-${dashNumbersOrLetters}`,
    properties: ['line-height'],
  },
  {
    regex: `(diagonal-fractions|stacked-fractions)`,
    properties: ['--tw-numeric-fraction'],
  },
  {
    regex: `(proportional-nums|tabular-nums)`,
    properties: ['--tw-numeric-spacing'],
  },
  {
    regex: `(lining-nums|oldstyle-nums)`,
    properties: ['--tw-numeric-figure'],
  },
  {
    regex: `slashed-zero`,
    properties: ['--tw-slashed-zero'],
  },
  {
    regex: `normal-nums`,
    properties: ['font-variant-numeric'],
  },
  {
    regex: `ordinal`,
    properties: ['--tw-numeric-figure', '--tw-numeric-fraction', '--tw-numeric-spacing', '--tw-ordinal', '--tw-slashed-zero', 'font-variant-numeric'],
  },
  {
    regex: `(italic|not-italic)`,
    properties: ['font-style'],
  },
  {
    regex: `(uppercase|lowercase|capitalize|normal-case)`,
    properties: ['text-transform'],
  },
  {
    regex: `font-(sans|serif|mono)`,
    properties: ['font-family'],
  },
  {
    regex: `font-${dashNumbersOrLetters}`,
    properties: ['font-weight'],
  },
  {
    regex: `align-${dashNumbersOrLetters}`,
    properties: ['vertical-align'],
  },
  {
    regex: `pl-${numbersOrLetters}`,
    properties: ['padding-left'],
  },
  {
    regex: `pb-${numbersOrLetters}`,
    properties: ['padding-bottom'],
  },
  {
    regex: `pr-${numbersOrLetters}`,
    properties: ['padding-right'],
  },
  {
    regex: `pt-${numbersOrLetters}`,
    properties: ['padding-top'],
  },
  {
    regex: `py-${numbersOrLetters}`,
    properties: ['padding-bottom', 'padding-top'],
  },
  {
    regex: `px-${numbersOrLetters}`,
    properties: ['padding-left', 'padding-right'],
  },
  {
    regex: `p-${numbersOrLetters}`,
    properties: ['padding'],
  },
  {
    regex: `object-(bottom|center|left.*|right.*|top)`,
    properties: ['-o-object-position', 'object-position'],
  },
  {
    regex: `object-(contain|cover|fill|none|scale-down)`,
    properties: ['-o-object-fit', 'object-fit'],
  },
  {
    regex: `stroke-${number}`,
    properties: ['stroke-width'],
  },
  {
    regex: `stroke-current`,
    properties: ['stroke'],
  },
  {
    regex: `fill-current`,
    properties: ['fill'],
  },
  {
    regex: `bg-origin-${dashNumbersOrLetters}`,
    properties: ['background-origin'],
  },
  {
    regex: `bg-(no-)?repeat${maybeDashNumbersOrLetters}`,
    properties: ['background-repeat'],
  },
  {
    regex: `bg-(bottom|center|left.*|right.*|top)`,
    properties: ['background-position'],
  },
  {
    regex: `bg-clip-text`,
    properties: ['-webkit-background-clip', 'background-clip'],
  },
  {
    regex: `bg-clip-(border|padding|content)`,
    properties: ['background-clip'],
  },
  {
    regex: `bg-(fixed|local|scroll)`,
    properties: ['background-attachment'],
  },
  {
    regex: `bg-(auto|cover|contain)`,
    properties: ['background-size'],
  },
  {
    regex: `decoration-(slice|clone)`,
    properties: ['-webkit-box-decoration-break', 'box-decoration-break'],
  },
  {
    regex: `to-${dashNumbersOrLetters}`,
    properties: ['--tw-gradient-to'],
  },
  {
    regex: `via-${dashNumbersOrLetters}`,
    properties: ['--tw-gradient-stops'],
  },
  {
    regex: `from-${dashNumbersOrLetters}`,
    properties: ['--tw-gradient-from', '--tw-gradient-stops'],
  },
  {
    regex: `bg-(none|gradient-to-${dashNumbersOrLetters})`,
    properties: ['background-image'],
  },
  {
    regex: `bg-opacity-${number}`,
    properties: ['--tw-bg-opacity'],
  },
  {
    regex: `bg-(transparent|current)`,
    properties: ['background-color'],
  },
  {
    regex: `bg-${dashNumbersOrLetters}`,
    properties: ['--tw-bg-opacity', 'background-color'],
  },
  {
    regex: `border-opacity-${number}`,
    properties: ['--tw-border-opacity'],
  },
  {
    regex: `border-l${maybeDashNumber}`,
    properties: ['border-left-width'],
  },
  {
    regex: `border-b${maybeDashNumber}`,
    properties: ['border-bottom-width'],
  },
  {
    regex: `border-r${maybeDashNumber}`,
    properties: ['border-right-width'],
  },
  {
    regex: `border-t${maybeDashNumber}`,
    properties: ['border-top-width'],
  },
  {
    regex: `(divide-transparent|divide-current|border-transparent|border-current)`,
    properties: ['border-color'],
  },
  {
    regex: `(divide|border)-(solid|dashed|dotted|double|none)`,
    properties: ['border-style'],
  },
  {
    regex: `border-(collapse|separate)`,
    properties: ['border-collapse'],
  },
  {
    regex: `border${maybeDashNumber}`,
    properties: ['border-width'],
  },
  {
    regex: `border-${dashNumbersOrLetters}`,
    properties: ['--tw-border-opacity', 'border-color'],
  },
  {
    regex: `rounded-bl${maybeDashNumbersOrLetters}`,
    properties: ['border-bottom-left-radius'],
  },
  {
    regex: `rounded-br${maybeDashNumbersOrLetters}`,
    properties: ['border-bottom-right-radius'],
  },
  {
    regex: `rounded-tr${maybeDashNumbersOrLetters}`,
    properties: ['border-top-right-radius'],
  },
  {
    regex: `rounded-tl${maybeDashNumbersOrLetters}`,
    properties: ['border-top-left-radius'],
  },
  {
    regex: `rounded-l${maybeDashNumbersOrLetters}`,
    properties: ['border-bottom-left-radius', 'border-top-left-radius'],
  },
  {
    regex: `rounded-b${maybeDashNumbersOrLetters}`,
    properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
  },
  {
    regex: `rounded-r${maybeDashNumbersOrLetters}`,
    properties: ['border-bottom-right-radius', 'border-top-right-radius'],
  },
  {
    regex: `rounded-t${maybeDashNumbersOrLetters}`,
    properties: ['border-top-left-radius', 'border-top-right-radius'],
  },
  {
    regex: `rounded${maybeDashNumbersOrLetters}`,
    properties: ['border-radius'],
  },
  {
    regex: `break-all`,
    properties: ['word-break'],
  },
  {
    regex: `break-words`,
    properties: ['overflow-wrap'],
  },
  {
    regex: `break-normal`,
    properties: ['overflow-wrap', 'word-break'],
  },
  {
    regex: `whitespace-(normal|nowrap|pre|pre-line|pre-wrap)`,
    properties: ['white-space'],
  },
  {
    regex: `overflow-(clip|ellipsis)`,
    properties: ['text-overflow'],
  },
  {
    regex: `truncate`,
    properties: ['overflow', 'text-overflow', 'white-space'],
  },
  {
    regex: `overscroll-x-(auto|contain|none)`,
    properties: ['overscroll-behavior-x'],
  },
  {
    regex: `overscroll-y-(auto|contain|none)`,
    properties: ['overscroll-behavior-y'],
  },
  {
    regex: `overscroll-(auto|contain|none)`,
    properties: ['-ms-scroll-chaining', 'overscroll-behavior'],
  },
  {
    regex: `overflow-y-(auto|hidden|visible|scroll)`,
    properties: ['overflow-y'],
  },
  {
    regex: `overflow-x-(auto|hidden|visible|scroll)`,
    properties: ['overflow-x'],
  },
  {
    regex: `overflow-(auto|hidden|visible|scroll)`,
    properties: ['overflow'],
  },
  {
    regex: `justify-self-(auto|start|end|center|stretch)`,
    properties: ['justify-self'],
  },
  {
    regex: `self-(auto|start|end|center|stretch|baseline)`,
    properties: ['align-self'],
  },
  {
    regex: `place-self-(auto|start|end|center|stretch)`,
    properties: ['place-self'],
  },
  {
    regex: `divide-opacity-${number}`,
    properties: ['--tw-divide-opacity'],
  },

  {
    regex: `divide-x-reverse`,
    properties: ['--tw-divide-x-reverse'],
  },
  {
    regex: `divide-y-reverse`,
    properties: ['--tw-divide-y-reverse'],
  },
  {
    regex: `divide-y${maybeDashNumber}`,
    properties: ['--tw-divide-y-reverse', 'border-bottom-width', 'border-top-width'],
  },
  {
    regex: `divide-x${maybeDashNumber}`,
    properties: ['--tw-divide-x-reverse', 'border-left-width', 'border-right-width'],
  },
  {
    regex: `divide-${dashNumbersOrLetters}`,
    properties: ['--tw-divide-opacity', 'border-color'],
  },
  {
    regex: `space-x-reverse`,
    properties: ['--tw-space-x-reverse'],
  },
  {
    regex: `space-y-reverse`,
    properties: ['--tw-space-y-reverse'],
  },
  {
    regex: `-?space-y-${numbersOrLetters}`,
    properties: ['--tw-space-y-reverse', 'margin-bottom', 'margin-top'],
  },
  {
    regex: `-?space-x-${numbersOrLetters}`,
    properties: ['--tw-space-x-reverse', 'margin-left', 'margin-right'],
  },
  {
    regex: `gap-y-${numbersOrLetters}`,
    properties: ['row-gap'],
  },
  {
    regex: `gap-x-${numbersOrLetters}`,
    properties: ['-moz-column-gap', 'column-gap'],
  },
  {
    regex: `gap-${numbersOrLetters}`,
    properties: ['gap'],
  },
  {
    regex: `justify-items-(start|end|center|stretch)`,
    properties: ['justify-items'],
  },
  {
    regex: `justify-(start|end|center|between|around|evenly)`,
    properties: ['justify-content'],
  },
  {
    regex: `items-(start|end|center|baseline|stretch)`,
    properties: ['align-items'],
  },
  {
    regex: `content-(center|start|end|between|around|evenly)`,
    properties: ['align-content'],
  },
  {
    regex: `place-items-(start|end|center|stretch)`,
    properties: ['place-items'],
  },
  {
    regex: `place-content-(center|start|end|between|around|evenly|stretch)`,
    properties: ['place-content'],
  },
  {
    regex: `flex-(wrap|wrap-reverse|nowrap)`,
    properties: ['flex-wrap'],
  },
  {
    regex: `flex-(row|row-reverse|col|col-reverse)`,
    properties: ['flex-direction'],
  },
  {
    regex: `grid-rows-${numbersOrLetters}`,
    properties: ['grid-template-rows'],
  },
  {
    regex: `grid-cols-${dashNumbersOrLetters}`,
    properties: ['grid-template-columns'],
  },
  {
    regex: `auto-rows-${dashNumbersOrLetters}`,
    properties: ['grid-auto-rows'],
  },
  {
    regex: `grid-flow-${dashNumbersOrLetters}`,
    properties: ['grid-auto-flow'],
  },
  {
    regex: `auto-cols-${dashNumbersOrLetters}`,
    properties: ['grid-auto-columns'],
  },
  {
    regex: `appearance-none`,
    properties: ['-moz-appearance', '-webkit-appearance', 'appearance'],
  },
  {
    regex: `list-(none|disc|decimal)`,
    properties: ['list-style-type'],
  },
  {
    regex: `list-(inside|outside)`,
    properties: ['list-style-position'],
  },
  {
    regex: `resize(-none|-y|-x)?`,
    properties: ['resize'],
  },
  {
    regex: `select-all`,
    properties: ['-moz-user-select', '-webkit-user-select', 'user-select'],
  },
  {
    regex: `select-(none|text|auto)`,
    properties: ['-moz-user-select', '-ms-user-select', '-webkit-user-select', 'user-select'],
  },
  {
    regex: `cursor-${dashNumbersOrLetters}`,
    properties: ['cursor'],
  },
  {
    regex: `animate-${dashNumbersOrLetters}`,
    properties: ['-webkit-animation', 'animation'],
  },
  {
    regex: `scale-y-${number}`,
    properties: ['--tw-scale-y'],
  },
  {
    regex: `scale-x-${number}`,
    properties: ['--tw-scale-x'],
  },
  {
    regex: `scale-${number}`,
    properties: ['--tw-scale-x', '--tw-scale-y'],
  },
  {
    regex: `-?skew-y-${number}`,
    properties: ['--tw-skew-y'],
  },
  {
    regex: `-?skew-x-${number}`,
    properties: ['--tw-skew-x'],
  },
  {
    regex: `-?rotate-${number}`,
    properties: ['--tw-rotate'],
  },
  {
    regex: `-?translate-y-${numbersOrLetters}`,
    properties: ['--tw-translate-y'],
  },
  {
    regex: `-?translate-x-${numbersOrLetters}`,
    properties: ['--tw-translate-x'],
  },
  {
    regex: `transform-none`,
    properties: ['transform'],
  },
  {
    regex: `transform(-gpu)?`,
    properties: ['--tw-rotate', '--tw-scale-x', '--tw-scale-y', '--tw-skew-x', '--tw-skew-y', '--tw-translate-x', '--tw-translate-y', 'transform'],
  },
  {
    regex: `origin-${dashNumbersOrLetters}`,
    properties: ['transform-origin'],
  },
  {
    regex: `table-(auto|fixed)`,
    properties: ['table-layout'],
  },
  {
    regex: `flex-grow${maybeDashZero}`,
    properties: ['flex-grow'],
  },
  {
    regex: `flex-shrink${maybeDashZero}`,
    properties: ['flex-shrink'],
  },
  {
    regex: `flex-${dashNumbersOrLetters}`,
    properties: ['flex'],
  },
  {
    regex: `max-w-${dashNumbersOrLetters}`,
    properties: ['max-width'],
  },
  {
    regex: `min-w-${dashNumbersOrLetters}`,
    properties: ['min-width'],
  },
  {
    regex: `w-${dashNumbersOrLetters}`,
    properties: ['width'],
  },
  {
    regex: `min-h-${dashNumbersOrLetters}`,
    properties: ['min-height'],
  },
  {
    regex: `max-h-${dashNumbersOrLetters}`,
    properties: ['max-height'],
  },
  {
    regex: `h-${dashNumbersOrLetters}`,
    properties: ['height'],
  },
  {
    regex: `(block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)`,
    properties: ['display'],
  },
  {
    regex: `box-(border|content)`,
    properties: ['box-sizing'],
  },
  {
    regex: `-?ml-${numbersOrLetters}`,
    properties: ['margin-left'],
  },
  {
    regex: `-?mb-${numbersOrLetters}`,
    properties: ['margin-bottom'],
  },
  {
    regex: `-?mr-${numbersOrLetters}`,
    properties: ['margin-right'],
  },
  {
    regex: `-?mt-${numbersOrLetters}`,
    properties: ['margin-top'],
  },
  {
    regex: `-?my-${numbersOrLetters}`,
    properties: ['margin-bottom', 'margin-top'],
  },
  {
    regex: `-?mx-${numbersOrLetters}`,
    properties: ['margin-left', 'margin-right'],
  },
  {
    regex: `-?m-${numbersOrLetters}`,
    properties: ['margin'],
  },
  {
    regex: `clear-(left|right|both|none)`,
    properties: ['clear'],
  },
  {
    regex: `float-(right|left|none)`,
    properties: ['float'],
  },
  {
    regex: `row-end-${numbersOrLetters}`,
    properties: ['grid-row-end'],
  },
  {
    regex: `row-start-${numbersOrLetters}`,
    properties: ['grid-row-start'],
  },
  {
    regex: `row-(auto|span-${numbersOrLetters})`,
    properties: ['grid-row'],
  },
  {
    regex: `col-end-${numbersOrLetters}`,
    properties: ['grid-column-end'],
  },
  {
    regex: `col-start-${numbersOrLetters}`,
    properties: ['grid-column-start'],
  },
  {
    regex: `col-(auto|span-${numbersOrLetters})`,
    properties: ['grid-column'],
  },
  {
    regex: `order-${numbersOrLetters}`,
    properties: ['order'],
  },
  {
    regex: `z-${numbersOrLetters}`,
    properties: ['z-index'],
  },
  {
    regex: `(isolate|isolation-auto)`,
    properties: ['isolation'],
  },
  {
    regex: `-?left-${dashNumbersOrLetters}`,
    properties: ['left'],
  },
  {
    regex: `-?bottom-${dashNumbersOrLetters}`,
    properties: ['bottom'],
  },
  {
    regex: `-?right-${dashNumbersOrLetters}`,
    properties: ['right'],
  },
  {
    regex: `-?top-${dashNumbersOrLetters}`,
    properties: ['top'],
  },
  {
    regex: `-?inset-y-${dashNumbersOrLetters}`,
    properties: ['bottom', 'top'],
  },
  {
    regex: `-?inset-x-${dashNumbersOrLetters}`,
    properties: ['left', 'right'],
  },
  {
    regex: `-?inset-${dashNumbersOrLetters}`,
    properties: ['bottom', 'left', 'right', 'top'],
  },
  {
    regex: `(static|fixed|absolute|relative|sticky)`,
    properties: ['position'],
  },
  {
    regex: `(visible|invisible)`,
    properties: ['visibility'],
  },
  {
    regex: `pointer-events-(none|auto)`,
    properties: ['pointer-events'],
  },
  {
    regex: `not-sr-only`,
    properties: ['clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
  },
  {
    regex: `sr-only`,
    properties: ['border-width', 'clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
  },
]

export const getRules = ({ prefix } = { prefix: '' }) => {
  return rules.map((rule) => ({ regex: new RegExp(`^${prefix}${rule.regex}$`), properties: rule.properties }))
}
