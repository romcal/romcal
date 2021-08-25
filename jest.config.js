module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['lib/**/*.{ts,tsx,js,jsx}', '!lib/**/*.d.ts'],
  coveragePathIgnorePatterns: ['lib/bundles', 'lib/locales', 'lib/particular-calendars'],
};
