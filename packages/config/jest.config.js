module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['esbuild-jest', { sourcemap: true }],
  },
  moduleNameMapper: {
    '@internal/package.json': '<rootDir>/package.json',
    '@internal/rite-([^/]*)/(.*)': '<rootDir>../../rites/$1/src/$2',
    '@internal/([^/]*)(.*)': '<rootDir>../../packages/$1/src$2',
    '@dist/rite-([^/]*)/(.*)': '<rootDir>../../rites/$1/dist/$2',
    '@src/rite-([^/]*)': '<rootDir>../../rites/$1/src',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [],
  testRegex: '((\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', 'build/**/*.{ts,tsx,js,jsx}', '!**/types/**/*.ts', '!**/index.ts'],
  setupFilesAfterEnv: ['jest-extended/all'],
};
