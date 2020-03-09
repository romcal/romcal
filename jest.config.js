module.exports = {
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.test{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '@RomcalTypes/(.*)': '<rootDir>/src/types/$1',
    '@RomcalConstants/(.*)': '<rootDir>/src/constants/$1',
    '@RomcalEnums/(.*)': '<rootDir>/src/enums/$1',
    '@RomcalUtils/(.*)': '<rootDir>/src/utils/$1',
    '@RomcalValidators/(.*)': '<rootDir>/src/validators/$1',
    '@RomcalModels/(.*)': '<rootDir>/src/models/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: true,
    },
  },
  setupFilesAfterEnv: ['jest-extended'],
  verbose: true,
};
