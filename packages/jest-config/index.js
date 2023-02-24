module.exports = {
  // testEnvironment: 'node',
  // Map workspaces to their source code so that Jest can resolve them correctly.
  moduleNameMapper: {
    '^@romcal/(.*)$': '<rootDir>/../$1',
    // '^@romcal/core': '<rootDir>/../core/src',
    // '^@romcal/data': '<rootDir>/../data/src',
  },
  // Use esbuild to transpile TypeScript files on the fly.
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['jest-extended/all'],
};
