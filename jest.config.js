module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest",
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    // collectCoverage: true,
    //   collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!**/node_modules/**"],
    //   coverageThreshold: {
    //     global: {
    //       branches: 80,
    //       functions: 100,
    //       lines: 100,
    //       statements: -20
    //     }
    //   },
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.test.json",
            diagnostics: true,
        },
    },
    verbose: true,
};
