const number = `(\\d|\\.|/)+`
const maybeDashZero = `($|-0)`
const maybeDashNumber = `($|-${number})`
const numbersOrLetters = `([a-zA-Z]|${number})+`
const dashNumbersOrLetters = `(-|[a-zA-Z]|${number})+`
const maybeDashNumbersOrLetters = `($|-${dashNumbersOrLetters})`
const maybeDashLetters = `($|-([a-zA-Z])+)`

const regExp = (pattern: string) => new RegExp(`^${pattern}$`)

export const rules = [
  {
    regex: regExp(`content-none`),
    properties: ['content'],
  },
  {
    regex: regExp(`ease-(linear|in|out|in-out)`),
    properties: ['transition-timing-function'],
  },
  {
    regex: regExp(`duration-${number}`),
    properties: ['transition-duration'],
  },
  {
    regex: regExp(`delay-${number}`),
    properties: ['transition-delay'],
  },
  {
    regex: regExp(`transition($|-all|-colors|-opacity|-shadow|-transform)`),
    properties: ['transition-duration', 'transition-property', 'transition-timing-function'],
  },
  {
    regex: regExp(`transition-none`),
    properties: ['transition-property'],
  },
  {
    regex: regExp(`backdrop-sepia${maybeDashZero}`),
    properties: ['--tw-backdrop-sepia'],
  },
  {
    regex: regExp(`backdrop-saturate-${number}`),
    properties: ['--tw-backdrop-saturate'],
  },
  {
    regex: regExp(`backdrop-opacity-${number}`),
    properties: ['--tw-backdrop-opacity'],
  },
  {
    regex: regExp(`backdrop-invert${maybeDashZero}`),
    properties: ['--tw-backdrop-invert'],
  },
  {
    regex: regExp(`-?backdrop-hue-rotate-${number}`),
    properties: ['--tw-backdrop-hue-rotate'],
  },
  {
    regex: regExp(`backdrop-grayscale${maybeDashZero}`),
    properties: ['--tw-backdrop-grayscale'],
  },
  {
    regex: regExp(`backdrop-contrast-${number}`),
    properties: ['--tw-backdrop-contrast'],
  },
  {
    regex: regExp(`backdrop-brightness-${number}`),
    properties: ['--tw-backdrop-brightness'],
  },
  {
    regex: regExp(`backdrop-blur${maybeDashNumbersOrLetters}`),
    properties: ['--tw-backdrop-blur'],
  },
  {
    regex: regExp(`backdrop-filter-none`),
    properties: ['-webkit-backdrop-filter', 'backdrop-filter'],
  },
  {
    regex: regExp(`backdrop-filter`),
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
    regex: regExp(`sepia${maybeDashZero}`),
    properties: ['--tw-sepia'],
  },
  {
    regex: regExp(`saturate-${number}`),
    properties: ['--tw-saturate'],
  },
  {
    regex: regExp(`invert${maybeDashZero}`),
    properties: ['--tw-invert'],
  },
  {
    regex: regExp(`-?hue-rotate-${number}`),
    properties: ['--tw-hue-rotate'],
  },
  {
    regex: regExp(`grayscale${maybeDashZero}`),
    properties: ['--tw-grayscale'],
  },
  {
    regex: regExp(`drop-shadow${maybeDashNumbersOrLetters}`),
    properties: ['--tw-drop-shadow'],
  },
  {
    regex: regExp(`contrast-${number}`),
    properties: ['--tw-contrast'],
  },
  {
    regex: regExp(`brightness-${number}`),
    properties: ['--tw-brightness'],
  },
  {
    regex: regExp(`blur${maybeDashNumbersOrLetters}`),
    properties: ['--tw-blur'],
  },
  {
    regex: regExp(`filter-none`),
    properties: ['filter'],
  },
  {
    regex: regExp(`filter`),
    properties: ['--tw-blur', '--tw-brightness', '--tw-contrast', '--tw-drop-shadow', '--tw-grayscale', '--tw-hue-rotate', '--tw-invert', '--tw-saturate', '--tw-sepia', 'filter'],
  },
  {
    regex: regExp(`ring-offset-[A-Za-z].*`),
    properties: ['--tw-ring-offset-color'],
  },
  {
    regex: regExp(`ring${maybeDashNumber}`),
    properties: ['--tw-ring-offset-shadow', '--tw-ring-shadow', 'box-shadow'],
  },
  {
    regex: regExp(`ring-offset-${number}`),
    properties: ['--tw-ring-offset-width'],
  },
  {
    regex: regExp(`ring-opacity-${number}`),
    properties: ['--tw-ring-opacity'],
  },
  {
    regex: regExp(`ring-(transparent|current)`),
    properties: ['--tw-ring-color'],
  },
  {
    regex: regExp(`ring-inset`),
    properties: ['--tw-ring-inset'],
  },
  {
    regex: regExp(`ring-${dashNumbersOrLetters}`),
    properties: ['--tw-ring-color', '--tw-ring-opacity'],
  },
  {
    regex: regExp(`outline-(none|white|black)`),
    properties: ['outline', 'outline-offset'],
  },
  {
    regex: regExp(`shadow${maybeDashNumbersOrLetters}`),
    properties: ['--tw-shadow', 'box-shadow'],
  },
  {
    regex: regExp(`mix-blend-${dashNumbersOrLetters}`),
    properties: ['mix-blend-mode'],
  },
  {
    regex: regExp(`bg-blend-${dashNumbersOrLetters}`),
    properties: ['background-blend-mode'],
  },
  {
    regex: regExp(`opacity-${number}`),
    properties: ['opacity'],
  },
  {
    regex: regExp(`caret-${dashNumbersOrLetters}`),
    properties: ['caret-color'],
  },
  {
    regex: regExp(`(subpixel-antialiased|antialiased)`),
    properties: ['-moz-osx-font-smoothing', '-webkit-font-smoothing'],
  },
  {
    regex: regExp(`(underline|line-through|no-underline)`),
    properties: ['text-decoration'],
  },
  {
    regex: regExp(`text-opacity-${number}`),
    properties: ['--tw-text-opacity'],
  },
  {
    regex: regExp(`text-(transparent|current)`),
    properties: ['color'],
  },
  {
    regex: regExp(`text-(xs|sm|base|lg|xl|\\dxl)`),
    properties: ['font-size', 'line-height'],
  },
  {
    regex: regExp(`text-(left|center|right|justify)`),
    properties: ['text-align'],
  },
  {
    regex: regExp(`text-${dashNumbersOrLetters}`),
    properties: ['--tw-text-opacity', 'color'],
  },
  {
    regex: regExp(`tracking-${dashNumbersOrLetters}`),
    properties: ['letter-spacing'],
  },
  {
    regex: regExp(`leading-${dashNumbersOrLetters}`),
    properties: ['line-height'],
  },
  {
    regex: regExp(`(diagonal-fractions|stacked-fractions)`),
    properties: ['--tw-numeric-fraction'],
  },
  {
    regex: regExp(`(proportional-nums|tabular-nums)`),
    properties: ['--tw-numeric-spacing'],
  },
  {
    regex: regExp(`(lining-nums|oldstyle-nums)`),
    properties: ['--tw-numeric-figure'],
  },
  {
    regex: regExp(`slashed-zero`),
    properties: ['--tw-slashed-zero'],
  },
  {
    regex: regExp(`normal-nums`),
    properties: ['font-variant-numeric'],
  },
  {
    regex: regExp(`ordinal`),
    properties: ['--tw-numeric-figure', '--tw-numeric-fraction', '--tw-numeric-spacing', '--tw-ordinal', '--tw-slashed-zero', 'font-variant-numeric'],
  },
  {
    regex: regExp(`(italic|not-italic)`),
    properties: ['font-style'],
  },
  {
    regex: regExp(`(uppercase|lowercase|capitalize|normal-case)`),
    properties: ['text-transform'],
  },
  {
    regex: regExp(`font-(sans|serif|mono)`),
    properties: ['font-family'],
  },
  {
    regex: regExp(`font-${dashNumbersOrLetters}`),
    properties: ['font-weight'],
  },
  {
    regex: regExp(`align-${dashNumbersOrLetters}`),
    properties: ['vertical-align'],
  },
  {
    regex: regExp(`pl-${numbersOrLetters}`),
    properties: ['padding-left'],
  },
  {
    regex: regExp(`pb-${numbersOrLetters}`),
    properties: ['padding-bottom'],
  },
  {
    regex: regExp(`pr-${numbersOrLetters}`),
    properties: ['padding-right'],
  },
  {
    regex: regExp(`pt-${numbersOrLetters}`),
    properties: ['padding-top'],
  },
  {
    regex: regExp(`py-${numbersOrLetters}`),
    properties: ['padding-bottom', 'padding-top'],
  },
  {
    regex: regExp(`px-${numbersOrLetters}`),
    properties: ['padding-left', 'padding-right'],
  },
  {
    regex: regExp(`p-${numbersOrLetters}`),
    properties: ['padding'],
  },
  {
    regex: regExp(`object-(bottom|center|left.*|right.*|top)`),
    properties: ['-o-object-position', 'object-position'],
  },
  {
    regex: regExp(`object-(contain|cover|fill|none|scale-down)`),
    properties: ['-o-object-fit', 'object-fit'],
  },
  {
    regex: regExp(`stroke-${number}`),
    properties: ['stroke-width'],
  },
  {
    regex: regExp(`stroke-current`),
    properties: ['stroke'],
  },
  {
    regex: regExp(`fill-current`),
    properties: ['fill'],
  },
  {
    regex: regExp(`bg-origin-${dashNumbersOrLetters}`),
    properties: ['background-origin'],
  },
  {
    regex: regExp(`bg-(no-)?repeat${maybeDashNumbersOrLetters}`),
    properties: ['background-repeat'],
  },
  {
    regex: regExp(`bg-(bottom|center|left.*|right.*|top)`),
    properties: ['background-position'],
  },
  {
    regex: regExp(`bg-clip-text`),
    properties: ['-webkit-background-clip', 'background-clip'],
  },
  {
    regex: regExp(`bg-clip-(border|padding|content)`),
    properties: ['background-clip'],
  },
  {
    regex: regExp(`bg-(fixed|local|scroll)`),
    properties: ['background-attachment'],
  },
  {
    regex: regExp(`bg-(auto|cover|contain)`),
    properties: ['background-size'],
  },
  {
    regex: regExp(`decoration-(slice|clone)`),
    properties: ['-webkit-box-decoration-break', 'box-decoration-break'],
  },
  {
    regex: regExp(`to-${dashNumbersOrLetters}`),
    properties: ['--tw-gradient-to'],
  },
  {
    regex: regExp(`via-${dashNumbersOrLetters}`),
    properties: ['--tw-gradient-stops'],
  },
  {
    regex: regExp(`from-${dashNumbersOrLetters}`),
    properties: ['--tw-gradient-from', '--tw-gradient-stops'],
  },
  {
    regex: regExp(`bg-(none|gradient-to-${dashNumbersOrLetters})`),
    properties: ['background-image'],
  },
  {
    regex: regExp(`bg-opacity-${number}`),
    properties: ['--tw-bg-opacity'],
  },
  {
    regex: regExp(`bg-(transparent|current)`),
    properties: ['background-color'],
  },
  {
    regex: regExp(`bg-${dashNumbersOrLetters}`),
    properties: ['--tw-bg-opacity', 'background-color'],
  },
  {
    regex: regExp(`border-opacity-${number}`),
    properties: ['--tw-border-opacity'],
  },
  {
    regex: regExp(`border-l${maybeDashNumber}`),
    properties: ['border-left-width'],
  },
  {
    regex: regExp(`border-b${maybeDashNumber}`),
    properties: ['border-bottom-width'],
  },
  {
    regex: regExp(`border-r${maybeDashNumber}`),
    properties: ['border-right-width'],
  },
  {
    regex: regExp(`border-t${maybeDashNumber}`),
    properties: ['border-top-width'],
  },
  {
    regex: regExp(`(divide-transparent|divide-current|border-transparent|border-current)`),
    properties: ['border-color'],
  },
  {
    regex: regExp(`(divide|border)-(solid|dashed|dotted|double|none)`),
    properties: ['border-style'],
  },
  {
    regex: regExp(`border-(collapse|separate)`),
    properties: ['border-collapse'],
  },
  {
    regex: regExp(`border${maybeDashNumber}`),
    properties: ['border-width'],
  },
  {
    regex: regExp(`border-${dashNumbersOrLetters}`),
    properties: ['--tw-border-opacity', 'border-color'],
  },
  {
    regex: regExp(`rounded-bl${maybeDashNumbersOrLetters}`),
    properties: ['border-bottom-left-radius'],
  },
  {
    regex: regExp(`rounded-br${maybeDashNumbersOrLetters}`),
    properties: ['border-bottom-right-radius'],
  },
  {
    regex: regExp(`rounded-tr${maybeDashNumbersOrLetters}`),
    properties: ['border-top-right-radius'],
  },
  {
    regex: regExp(`rounded-tl${maybeDashNumbersOrLetters}`),
    properties: ['border-top-left-radius'],
  },
  {
    regex: regExp(`rounded-l${maybeDashNumbersOrLetters}`),
    properties: ['border-bottom-left-radius', 'border-top-left-radius'],
  },
  {
    regex: regExp(`rounded-b${maybeDashNumbersOrLetters}`),
    properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
  },
  {
    regex: regExp(`rounded-r${maybeDashNumbersOrLetters}`),
    properties: ['border-bottom-right-radius', 'border-top-right-radius'],
  },
  {
    regex: regExp(`rounded-t${maybeDashNumbersOrLetters}`),
    properties: ['border-top-left-radius', 'border-top-right-radius'],
  },
  {
    regex: regExp(`rounded${maybeDashNumbersOrLetters}`),
    properties: ['border-radius'],
  },
  {
    regex: regExp(`break-all`),
    properties: ['word-break'],
  },
  {
    regex: regExp(`break-words`),
    properties: ['overflow-wrap'],
  },
  {
    regex: regExp(`break-normal`),
    properties: ['overflow-wrap', 'word-break'],
  },
  {
    regex: regExp(`whitespace-(normal|nowrap|pre|pre-line|pre-wrap)`),
    properties: ['white-space'],
  },
  {
    regex: regExp(`overflow-(clip|ellipsis)`),
    properties: ['text-overflow'],
  },
  {
    regex: regExp(`truncate`),
    properties: ['overflow', 'text-overflow', 'white-space'],
  },
  {
    regex: regExp(`overscroll-x-(auto|contain|none)`),
    properties: ['overscroll-behavior-x'],
  },
  {
    regex: regExp(`overscroll-y-(auto|contain|none)`),
    properties: ['overscroll-behavior-y'],
  },
  {
    regex: regExp(`overscroll-(auto|contain|none)`),
    properties: ['-ms-scroll-chaining', 'overscroll-behavior'],
  },
  {
    regex: regExp(`overflow-y-(auto|hidden|visible|scroll)`),
    properties: ['overflow-y'],
  },
  {
    regex: regExp(`overflow-x-(auto|hidden|visible|scroll)`),
    properties: ['overflow-x'],
  },
  {
    regex: regExp(`overflow-(auto|hidden|visible|scroll)`),
    properties: ['overflow'],
  },
  {
    regex: regExp(`justify-self-(auto|start|end|center|stretch)`),
    properties: ['justify-self'],
  },
  {
    regex: regExp(`self-(auto|start|end|center|stretch|baseline)`),
    properties: ['align-self'],
  },
  {
    regex: regExp(`place-self-(auto|start|end|center|stretch)`),
    properties: ['place-self'],
  },
  {
    regex: regExp(`divide-opacity-${number}`),
    properties: ['--tw-divide-opacity'],
  },

  {
    regex: regExp(`divide-x-reverse`),
    properties: ['--tw-divide-x-reverse'],
  },
  {
    regex: regExp(`divide-y-reverse`),
    properties: ['--tw-divide-y-reverse'],
  },
  {
    regex: regExp(`divide-y${maybeDashNumber}`),
    properties: ['--tw-divide-y-reverse', 'border-bottom-width', 'border-top-width'],
  },
  {
    regex: regExp(`divide-x${maybeDashNumber}`),
    properties: ['--tw-divide-x-reverse', 'border-left-width', 'border-right-width'],
  },
  {
    regex: regExp(`divide-${dashNumbersOrLetters}`),
    properties: ['--tw-divide-opacity', 'border-color'],
  },
  {
    regex: regExp(`space-x-reverse`),
    properties: ['--tw-space-x-reverse'],
  },
  {
    regex: regExp(`space-y-reverse`),
    properties: ['--tw-space-y-reverse'],
  },
  {
    regex: regExp(`-?space-y-${numbersOrLetters}`),
    properties: ['--tw-space-y-reverse', 'margin-bottom', 'margin-top'],
  },
  {
    regex: regExp(`-?space-x-${numbersOrLetters}`),
    properties: ['--tw-space-x-reverse', 'margin-left', 'margin-right'],
  },
  {
    regex: regExp(`gap-y-${numbersOrLetters}`),
    properties: ['row-gap'],
  },
  {
    regex: regExp(`gap-x-${numbersOrLetters}`),
    properties: ['-moz-column-gap', 'column-gap'],
  },
  {
    regex: regExp(`gap-${numbersOrLetters}`),
    properties: ['gap'],
  },
  {
    regex: regExp(`justify-items-(start|end|center|stretch)`),
    properties: ['justify-items'],
  },
  {
    regex: regExp(`justify-(start|end|center|between|around|evenly)`),
    properties: ['justify-content'],
  },
  {
    regex: regExp(`items-(start|end|center|baseline|stretch)`),
    properties: ['align-items'],
  },
  {
    regex: regExp(`content-(center|start|end|between|around|evenly)`),
    properties: ['align-content'],
  },
  {
    regex: regExp(`place-items-(start|end|center|stretch)`),
    properties: ['place-items'],
  },
  {
    regex: regExp(`place-content-(center|start|end|between|around|evenly|stretch)`),
    properties: ['place-content'],
  },
  {
    regex: regExp(`flex-(wrap|wrap-reverse|nowrap)`),
    properties: ['flex-wrap'],
  },
  {
    regex: regExp(`flex-(row|row-reverse|col|col-reverse)`),
    properties: ['flex-direction'],
  },
  {
    regex: regExp(`grid-rows-${numbersOrLetters}`),
    properties: ['grid-template-rows'],
  },
  {
    regex: regExp(`grid-cols-${dashNumbersOrLetters}`),
    properties: ['grid-template-columns'],
  },
  {
    regex: regExp(`auto-rows-${dashNumbersOrLetters}`),
    properties: ['grid-auto-rows'],
  },
  {
    regex: regExp(`grid-flow-${dashNumbersOrLetters}`),
    properties: ['grid-auto-flow'],
  },
  {
    regex: regExp(`auto-cols-${dashNumbersOrLetters}`),
    properties: ['grid-auto-columns'],
  },
  {
    regex: regExp(`appearance-none`),
    properties: ['-moz-appearance', '-webkit-appearance', 'appearance'],
  },
  {
    regex: regExp(`list-(none|disc|decimal)`),
    properties: ['list-style-type'],
  },
  {
    regex: regExp(`list-(inside|outside)`),
    properties: ['list-style-position'],
  },
  {
    regex: regExp(`resize(-none|-y|-x)?`),
    properties: ['resize'],
  },
  {
    regex: regExp(`select-all`),
    properties: ['-moz-user-select', '-webkit-user-select', 'user-select'],
  },
  {
    regex: regExp(`select-(none|text|auto)`),
    properties: ['-moz-user-select', '-ms-user-select', '-webkit-user-select', 'user-select'],
  },
  {
    regex: regExp(`cursor-${dashNumbersOrLetters}`),
    properties: ['cursor'],
  },
  {
    regex: regExp(`animate-${dashNumbersOrLetters}`),
    properties: ['-webkit-animation', 'animation'],
  },
  {
    regex: regExp(`scale-y-${number}`),
    properties: ['--tw-scale-y'],
  },
  {
    regex: regExp(`scale-x-${number}`),
    properties: ['--tw-scale-x'],
  },
  {
    regex: regExp(`scale-${number}`),
    properties: ['--tw-scale-x', '--tw-scale-y'],
  },
  {
    regex: regExp(`-?skew-y-${number}`),
    properties: ['--tw-skew-y'],
  },
  {
    regex: regExp(`-?skew-x-${number}`),
    properties: ['--tw-skew-x'],
  },
  {
    regex: regExp(`-?rotate-${number}`),
    properties: ['--tw-rotate'],
  },
  {
    regex: regExp(`-?translate-y-${numbersOrLetters}`),
    properties: ['--tw-translate-y'],
  },
  {
    regex: regExp(`-?translate-x-${numbersOrLetters}`),
    properties: ['--tw-translate-x'],
  },
  {
    regex: regExp(`transform-none`),
    properties: ['transform'],
  },
  {
    regex: regExp(`transform(-gpu)?`),
    properties: ['--tw-rotate', '--tw-scale-x', '--tw-scale-y', '--tw-skew-x', '--tw-skew-y', '--tw-translate-x', '--tw-translate-y', 'transform'],
  },
  {
    regex: regExp(`origin-${dashNumbersOrLetters}`),
    properties: ['transform-origin'],
  },

  {
    regex: regExp(`table-(auto|fixed)`),
    properties: ['table-layout'],
  },
  {
    regex: regExp(`flex-grow${maybeDashZero}`),
    properties: ['flex-grow'],
  },
  {
    regex: regExp(`flex-shrink${maybeDashZero}`),
    properties: ['flex-shrink'],
  },
  {
    regex: regExp(`flex-${dashNumbersOrLetters}`),
    properties: ['flex'],
  },
  {
    regex: regExp(`max-w-${dashNumbersOrLetters}`),
    properties: ['max-width'],
  },
  {
    regex: regExp(`min-w-${dashNumbersOrLetters}`),
    properties: ['min-width'],
  },
  {
    regex: regExp(`w-${dashNumbersOrLetters}`),
    properties: ['width'],
  },
  {
    regex: regExp(`min-h-${dashNumbersOrLetters}`),
    properties: ['min-height'],
  },
  {
    regex: regExp(`max-h-${dashNumbersOrLetters}`),
    properties: ['max-height'],
  },
  {
    regex: regExp(`h-${dashNumbersOrLetters}`),
    properties: ['height'],
  },
  {
    regex: regExp(
      `(block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)`,
    ),
    properties: ['display'],
  },
  {
    regex: regExp(`box-(border|content)`),
    properties: ['box-sizing'],
  },
  {
    regex: regExp(`-?ml-${numbersOrLetters}`),
    properties: ['margin-left'],
  },
  {
    regex: regExp(`-?mb-${numbersOrLetters}`),
    properties: ['margin-bottom'],
  },
  {
    regex: regExp(`-?mr-${numbersOrLetters}`),
    properties: ['margin-right'],
  },
  {
    regex: regExp(`-?mt-${numbersOrLetters}`),
    properties: ['margin-top'],
  },
  {
    regex: regExp(`-?my-${numbersOrLetters}`),
    properties: ['margin-bottom', 'margin-top'],
  },
  {
    regex: regExp(`-?mx-${numbersOrLetters}`),
    properties: ['margin-left', 'margin-right'],
  },
  {
    regex: regExp(`-?m-${numbersOrLetters}`),
    properties: ['margin'],
  },
  {
    regex: regExp(`clear-(left|right|both|none)`),
    properties: ['clear'],
  },
  {
    regex: regExp(`float-(right|left|none)`),
    properties: ['float'],
  },
  {
    regex: regExp(`row-end-${numbersOrLetters}`),
    properties: ['grid-row-end'],
  },
  {
    regex: regExp(`row-start-${numbersOrLetters}`),
    properties: ['grid-row-start'],
  },
  {
    regex: regExp(`row-(auto|span-${numbersOrLetters})`),
    properties: ['grid-row'],
  },
  {
    regex: regExp(`col-end-${numbersOrLetters}`),
    properties: ['grid-column-end'],
  },
  {
    regex: regExp(`col-start-${numbersOrLetters}`),
    properties: ['grid-column-start'],
  },
  {
    regex: regExp(`col-(auto|span-${numbersOrLetters})`),
    properties: ['grid-column'],
  },
  {
    regex: regExp(`order-${numbersOrLetters}`),
    properties: ['order'],
  },
  {
    regex: regExp(`z-${numbersOrLetters}`),
    properties: ['z-index'],
  },
  {
    regex: regExp(`(isolate|isolation-auto)`),
    properties: ['isolation'],
  },
  {
    regex: regExp(`-?left-${dashNumbersOrLetters}`),
    properties: ['left'],
  },
  {
    regex: regExp(`-?bottom-${dashNumbersOrLetters}`),
    properties: ['bottom'],
  },
  {
    regex: regExp(`-?right-${dashNumbersOrLetters}`),
    properties: ['right'],
  },
  {
    regex: regExp(`-?top-${dashNumbersOrLetters}`),
    properties: ['top'],
  },
  {
    regex: regExp(`-?inset-y-${dashNumbersOrLetters}`),
    properties: ['bottom', 'top'],
  },
  {
    regex: regExp(`-?inset-x-${dashNumbersOrLetters}`),
    properties: ['left', 'right'],
  },
  {
    regex: regExp(`-?inset-${dashNumbersOrLetters}`),
    properties: ['bottom', 'left', 'right', 'top'],
  },
  {
    regex: regExp(`(static|fixed|absolute|relative|sticky)`),
    properties: ['position'],
  },
  {
    regex: regExp(`(visible|invisible)`),
    properties: ['visibility'],
  },
  {
    regex: regExp(`pointer-events-(none|auto)`),
    properties: ['pointer-events'],
  },
  {
    regex: regExp(`not-sr-only`),
    properties: ['clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
  },
  {
    regex: regExp(`sr-only`),
    properties: ['border-width', 'clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
  },
]
