module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
    // collectCoverage: true,
    collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!**/node_modules/**"],
    coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/", "/src/**/*.test{ts|tsx}"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 100,
            lines: 100,
            statements: -20,
        },
    },
    moduleNameMapper: {
        "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.test.json",
            diagnostics: true,
        },
    },
    setupFilesAfterEnv: ["jest-extended"],
    verbose: true,
};
