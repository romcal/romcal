module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['lib/**/*.{ts,tsx,js,jsx}', '!lib/**/*.d.ts','!dist/**'],
  coveragePathIgnorePatterns: ['lib/locales', 'lib/particular-calendars'],
  globalSetup: '<rootDir>/dotenv/dotenv.jest.js',
  setupFilesAfterEnv: ['jest-extended/all'],
};
