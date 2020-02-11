module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        quotes: ["error", "double"],
        "no-unused-vars": "error",
    },
};

// {
//   "parser": "babel-eslint",
//   "plugins": [
//     "node",
//     "flowtype"
//   ],
//   "extends": [
//     "eslint:recommended",
//     "plugin:flowtype/recommended"
//   ],
//   "parserOptions": {
//     "sourceType": "module"
//   },
//   "env": {
//     "node": true,
//     "es6": true,
//     "browser": true
//   },
//   "rules": {

//   },
//   "settings": {
//     "flowtype": {
//       "onlyFilesWithFlowAnnotation": true
//     }
//   }
// }
