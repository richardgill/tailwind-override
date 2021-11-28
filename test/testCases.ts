type TestCase = { input: string; expectedOutput: string; options?: Object }

export const defaultTestCases: TestCase[] = [
  { input: '', expectedOutput: '' },
  { input: 'apple oranges', expectedOutput: 'apple oranges' },
  { input: 'apple   oranges', expectedOutput: 'apple oranges' },
  { input: 'bg-yellow-600 bg-yellow-700', expectedOutput: 'bg-yellow-700' },
  { input: 'bg-yellow-600 bg-yellow-700 apple oranges banana mellon', expectedOutput: 'bg-yellow-700 apple oranges banana mellon' },
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
  { input: 'transform translate-y-0', expectedOutput: 'transform translate-y-0' },
  { input: 'text-blue-500 focus:text-red-500', expectedOutput: 'text-blue-500 focus:text-red-500' },
  { input: 'text-blue-500 focus:text-red-500 hover:text-red-500', expectedOutput: 'text-blue-500 focus:text-red-500 hover:text-red-500' },
  { input: 'hover:text-blue-500 focus:text-red-500', expectedOutput: 'hover:text-blue-500 focus:text-red-500' },
  { input: 'text-black hover:text-blue-500 focus:text-red-500', expectedOutput: 'text-black hover:text-blue-500 focus:text-red-500' },
  { input: 'sm:px-4 md:px-6 lg:px-8', expectedOutput: 'sm:px-4 md:px-6 lg:px-8' },
  { input: 'sm:px-4 sm:px-6', expectedOutput: 'sm:px-6' },
  { input: 'sm:container md:container lg:container', expectedOutput: 'sm:container md:container lg:container' },
  { input: '-inset-y-2.5 inset-y-8', expectedOutput: 'inset-y-8' },
  { input: '-inset-y-2/3 inset-y-8', expectedOutput: 'inset-y-8' },
  { input: 'text-black text-xl', expectedOutput: 'text-black text-xl' },
  { input: 'text-black text-xl text-opacity-2', expectedOutput: 'text-black text-xl text-opacity-2' },
  { input: 'text-xl text-opacity-2', expectedOutput: 'text-xl text-opacity-2' },
]

export const ruleBasedTestCases: TestCase[] = [
  // made up color
  { input: 'bg-yellow-600 bg-mud-brown-700', expectedOutput: 'bg-mud-brown-700' },
]

export const jitTestCases: TestCase[] = [
  { input: 'md:dark:disabled:focus:hover:bg-gray-400 md:dark:disabled:focus:hover:bg-gray-500', expectedOutput: 'md:dark:disabled:focus:hover:bg-gray-500' },
  { input: 'bg-gray-500 !font-medium', expectedOutput: 'bg-gray-500 !font-medium' },
  { input: 'bg-gray-500 !bg-gray-600', expectedOutput: '!bg-gray-600' },
  { input: '!bg-gray-500 !bg-gray-600', expectedOutput: '!bg-gray-600' },
  { input: 'md:!bg-gray-500 md:!bg-gray-600', expectedOutput: 'md:!bg-gray-600' },
  { input: 'bg-red-500/25 bg-red-600/25', expectedOutput: 'bg-red-600/25' },
  { input: 'sm:bg-red-500/25 sm:bg-red-600/25', expectedOutput: 'sm:bg-red-600/25' },
  { input: 'sm:bg-red-500/25 sm:bg-red-600', expectedOutput: 'sm:bg-red-600' },
  { input: 'sm:bg-red-500/25 sm:bg-red-600/[0.31]', expectedOutput: 'sm:bg-red-600/[0.31]' },
  { input: 'border-r-blue-500 border-r-pink-500', expectedOutput: 'border-r-pink-500' },
  { input: 'after:bg-pink-300 after:bg-pink-400', expectedOutput: 'after:bg-pink-400' },
  { input: 'caret-red-500 caret-red-600', expectedOutput: 'caret-red-600' },
  { input: 'w-[300px] w-[762px]', expectedOutput: 'w-[762px]' },
  { input: 'md:top-[-400px] md:top-[80px]', expectedOutput: 'md:top-[80px]' },
  // Not implemented (and other similar cases):
  // { input: 'text-[magenta] text-[32px]', expectedOutput: 'text-[magenta] text-[32px]' },
]

export const nonJitTestCases = [...defaultTestCases, ...ruleBasedTestCases].flatMap((testCase) => {
  return [false, true].map((jit) => ({
    ...testCase,
    options: {
      ...testCase.options,
      jit: jit,
    },
  }))
})

export const allTestCases = [...nonJitTestCases, ...jitTestCases]
