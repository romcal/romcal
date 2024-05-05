module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['esbuild-jest', { sourcemap: true }],
  },
  moduleNameMapper: {
    '@romcal/package.json': '<rootDir>/package.json',
    '@romcal/rite-([^/]*)/(.*)': '<rootDir>../../rites/$1/src/$2',
    '@romcal/([^/]*)(.*)': '<rootDir>../../packages/$1/src$2',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [],
  testRegex: '((\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', 'build/**/*.{ts,tsx,js,jsx}', '!**/types/**/*.ts', '!**/index.ts'],
  setupFilesAfterEnv: ['jest-extended/all'],
};
