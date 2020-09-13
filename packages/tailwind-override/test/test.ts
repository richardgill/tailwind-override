import { overrideTailwindClasses } from '../src/index'

const testCases = [
  { input: '', expectedOutput: '' },
  { input: 'apple oranges', expectedOutput: 'apple oranges' },
  { input: 'apple   oranges', expectedOutput: 'apple oranges' },
  { input: 'bg-yellow-600 bg-yellow-700', expectedOutput: 'bg-yellow-700' },
  { input: 'bg-yellow-600 bg-yellow-700 bg-yellow-800', expectedOutput: 'bg-yellow-800' },
  { input: 'bg-yellow-600   bg-yellow-700', expectedOutput: 'bg-yellow-700' },
  { input: 'w-1/2 w-1/3', expectedOutput: 'w-1/3' },
  { input: 'text-pink-200 text-blue-200', expectedOutput: 'text-blue-200' },
  { input: 'pt-2 pt-4', expectedOutput: 'pt-4' },
  { input: 'pt-2 apple pt-4 orange', expectedOutput: 'apple pt-4 orange' },
  { input: 'pt-2 apple pt-4 orange text-pink-200', expectedOutput: 'apple pt-4 orange text-pink-200' },
  { input: 'pt-4 text-pink-200', expectedOutput: 'pt-4 text-pink-200' },
  { input: 'prefix-pt-2 apple prefix-pt-4 orange', options: { prefix: 'prefix-' }, expectedOutput: 'apple prefix-pt-4 orange' },
]

for (const testCase of testCases) {
  test(`overrideTailwindClasses('${testCase.input}') returns '${testCase.expectedOutput}'`, () => {
    expect(overrideTailwindClasses(testCase.input, testCase.options)).toBe(testCase.expectedOutput)
  })
}
