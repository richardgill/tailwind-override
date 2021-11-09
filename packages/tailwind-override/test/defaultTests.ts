type TestCase = { input: string; expectedOutput: string; options?: Object }

export const defaultTestCases: TestCase[] = [
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
  { input: 'pt-4 text-pink-200', expectedOutput: 'pt-4 text-pink-200' },
  { input: 'prefix-pt-2 apple prefix-pt-4 orange', options: { prefix: 'prefix-' }, expectedOutput: 'apple prefix-pt-4 orange' },
  { input: 'md:bg-red-500 md:bg-white', expectedOutput: 'md:bg-white' },
  { input: 'transform translate-y-0', expectedOutput: 'translate-y-0' },
  { input: 'text-blue-500 focus:text-red-500', expectedOutput: 'text-blue-500 focus:text-red-500' },
  { input: 'text-blue-500 focus:text-red-500 hover:text-red-500', expectedOutput: 'text-blue-500 focus:text-red-500 hover:text-red-500' },
  { input: 'hover:text-blue-500 focus:text-red-500', expectedOutput: 'hover:text-blue-500 focus:text-red-500' },
  { input: 'text-black hover:text-blue-500 focus:text-red-500', expectedOutput: 'text-black hover:text-blue-500 focus:text-red-500' },
  { input: 'sm:px-4 md:px-6 lg:px-8', expectedOutput: 'sm:px-4 md:px-6 lg:px-8' },
  { input: 'sm:px-4 sm:px-6', expectedOutput: 'sm:px-6' },
  { input: 'sm:container md:container lg:container', expectedOutput: 'sm:container md:container lg:container' },
  { input: '-inset-y-2.5 inset-y-8', expectedOutput: 'inset-y-8' },
]

export const ruleBasedTestCases: TestCase[] = [
  // made up color
  { input: 'bg-yellow-600 bg-mud-brown-700', expectedOutput: 'bg-mud-brown-700' },
]
