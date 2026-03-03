import babelParser from '@babel/eslint-parser';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/coverage', '**/tmp', '**/__snapshots__', '**/*.json'],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
      perfectionist,
      'unused-imports': unusedImports,
    },
    rules: {
      'arrow-body-style': 'off',
      'comma-style': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['__tests__/**/*', 'build/**/*', '.commitlintrc.ts'],
        },
      ],
      'import/no-unused-modules': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/prefer-default-export': 'off',
      'keyword-spacing': 'off',
      'max-len': 'off',
      'no-await-in-loop': 'off',
      'no-console': 'error',
      'no-mixed-spaces-and-tabs': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/build/**/*.mjs', 'rites/**/jest.config.mjs', 'packages/**/*.config.mjs', 'eslint.config.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          includeInternal: true,
        },
      ],
      'no-await-in-loop': 'off',
      'no-console': 'off',
      'no-nested-ternary': 'off',
      'no-restricted-syntax': ['error', 'ForInStatement'],
    },
    settings: {
      perfectionist: {
        locales: ['en', 'en-US'],
        newlinesInside: 0,
        order: 'asc',
        type: 'natural',
      },
    },
  },
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/__tests__/**/*.ts', '**/*.spec.ts'],
    languageOptions: {
      globals: jest.environments.globals.globals,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: [
          './tsconfig.base.json',
          './packages/easter/tsconfig.json',
          './packages/lunar-new-year/tsconfig.json',
          './rites/roman1962/tsconfig.json',
          './rites/roman1969/tsconfig.json',
        ],
      },
    },
    plugins: {
      jest,
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      // do not complain about importing dist localized calendars
      'import/no-relative-packages': 'off',
      // tests don't export
      'import/no-unused-modules': 'off',
      'jest/no-conditional-expect': 'off',
      'no-console': 'off',
    },
  }),
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/build/**/*.ts', 'src/**/*.ts', 'packages/**/*.ts', 'rites/**/*.ts'],
    ignores: ['**/*.spec.ts', '**/__tests__/*.ts'],
    languageOptions: {
      ecmaVersion: 5,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: [
          './tsconfig.base.json',
          './packages/easter/tsconfig.json',
          './packages/lunar-new-year/tsconfig.json',
          './rites/roman1962/tsconfig.json',
          './rites/roman1969/tsconfig.json',
        ],
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: true,
        },
      ],
      '@typescript-eslint/return-await': ['error', 'always'],
      'import/extensions': 'off',
      'no-return-await': 'off',
      'no-unused-vars': 'off',
    },
  }),
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/build/**/*.ts', '.*rc.ts'],
    ignores: ['**/*.spec.ts', '**/__tests__/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./rites/roman1969/tsconfig.json', './tsconfig.base.json', './tsconfig.lint.json'],
      },
    },
    rules: {
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
    },
  }),
  ...tseslint.config({
    files: ['**/locales/**/*.ts', '**/utils/**/*.ts'],
    ignores: [
      '**/utils/numbers.ts', // this file is full of objects that need to be unsorted for Roman Numerals
    ],
    rules: {
      'perfectionist/sort-objects': ['error', { order: 'asc', type: 'natural' }],
    },
  }),
  eslintPluginPrettierRecommended,
];
