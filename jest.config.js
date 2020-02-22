module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.test{ts,tsx}"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    moduleNameMapper: {
        "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
            diagnostics: true,
        },
    },
    setupFilesAfterEnv: ["jest-extended"],
    verbose: true,
};
