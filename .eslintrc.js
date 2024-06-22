module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['unused-imports'],
  rules: {
    // disable conflicting prettier-adjacent rules
    'max-len': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'keyword-spacing': 'off',
    'comma-style': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',

    // imports, sort and group
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'error',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tests/**/*', 'scripts/**/*'],
      },
    ],
    'import/prefer-default-export': 'off',

    // TODO: remove, especially if you wanna watch it go boom!
    'import/no-cycle': 'off',

    'no-console': 'error',
    'object-shorthand': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-return-assign': ['error', 'except-parens'],

    // gotta do it sometimes
    'no-await-in-loop': 'off',
  },
  // override specific to test files
  overrides: [
    {
      files: ['scripts/**/*.ts', 'lib/**/*.ts', 'tests/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      extends: ['airbnb-typescript/base'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],

        // disable overlapping non-typescript rules
        'no-return-await': 'off',
        'no-unused-vars': 'off',

        // oddly failing only on ci...?
        'import/extensions': 'off',

        // overlapping typescript-only format rules
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-shadow': ['error'],

        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      },
      // i know the nesting is weird, but this keeps all the tests inheriting ts base configs
      overrides: [
        {
          files: ['scripts/**/*.ts', 'lib/types/**/*.ts', 'lib/utils/**/*.ts', 'lib/constants/**/*.ts'],
          rules: {
            // scripts don't export, and utils are always needed!
            // turn this off to see if there's anything unused worth removing
            'import/no-unused-modules': 'off',
            'no-console': 'off',
            'no-restricted-syntax': 'off',
            'import/no-extraneous-dependencies': 'off',
          },
        },
        {
          files: ['lib/particular-calendars/*.ts'],
          rules: {
            '@typescript-eslint/naming-convention': [
              'error',
              {
                selector: 'class',
                format: null,
                custom: {
                  regex: '^([A-Z][a-z]+)+(?:_([A-Z][a-z]+)+)*$',
                  match: true,
                },
              },
            ],
          },
        },
        {
          files: ['tests/**/*.ts', '**/*.spec.ts'],
          extends: ['plugin:jest/recommended'],
          plugins: ['jest'],
          rules: {
            // tests don't export
            'import/no-unused-modules': 'off',
          },
        },
      ],
    },
    {
      files: ['*.mjs', '*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
      plugins: ['unused-imports'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        requireConfigFile: false,
      },
      rules: {
        'no-console': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        'no-await-in-loop': 'off',
        'no-nested-ternary': 'off',
      },
    },
  ],
};
