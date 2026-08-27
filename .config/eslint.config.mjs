import path from 'node:path';

import babelParser from '@babel/eslint-parser';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import jsonc from 'eslint-plugin-jsonc';
import markdownlint from 'eslint-plugin-markdownlint';
import markdownlintParser from 'eslint-plugin-markdownlint/parser.js';
import perfectionist from 'eslint-plugin-perfectionist';
import unusedImports from 'eslint-plugin-unused-imports';
import yml from 'eslint-plugin-yml';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// This config lives in `.config/`, but every path below is relative to the repository root.
const tsconfigRootDir = path.resolve(import.meta.dirname, '..');

// Formatting is owned by ESLint (@stylistic for JS/TS, jsonc/yml/markdownlint for data and docs).
// These values mirror the Prettier config this repo used previously, so `--fix` output stays stable.
const stylisticOptions = {
  arrowParens: true,
  braceStyle: '1tbs',
  indent: 2,
  jsx: false,
  quoteProps: 'as-needed',
  quotes: 'single',
  semi: true,
};

// Nested conditional types (see `CamelToUpperSnakeCase`) are indented by Prettier in a way the
// `indent` rule cannot reproduce, and flattening them makes them unreadable. Extend the plugin's
// own options rather than restating them, so the remaining defaults keep tracking the plugin.
const stylisticIndentOptions = stylistic.configs.customize(stylisticOptions).rules['@stylistic/indent'][2];
const indentOptions = {
  ...stylisticIndentOptions,
  ignoredNodes: [...stylisticIndentOptions.ignoredNodes, 'TSConditionalType'],
};

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/coverage',
      '**/tmp',
      '**/__snapshots__',
      'package-lock.json',
      'docs/CHANGELOG.md',
    ],
  },
  {
    files: ['**/*.{ts,mts,cts,js,mjs,cjs}'],
    ...stylistic.configs.customize(stylisticOptions),
  },
  {
    files: ['**/*.{ts,mts,cts,js,mjs,cjs}'],
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
      // Equivalent of Prettier's `trailingComma: 'es5'`: trailing commas where ES5 allows them,
      // which excludes function parameter and argument lists.
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          enums: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
          generics: 'always-multiline',
          imports: 'always-multiline',
          objects: 'always-multiline',
          tuples: 'always-multiline',
        },
      ],
      '@stylistic/indent': ['error', stylisticOptions.indent, indentOptions],
      // Unlike `indent`, this rule has no way to exempt type-level operators, and it wants the
      // operands of a multi-line intersection type flush left where Prettier indented them.
      '@stylistic/indent-binary-ops': 'off',
      // `printWidth` has no lint equivalent: @stylistic reports long lines, it cannot reflow them.
      '@stylistic/max-len': [
        'warn',
        {
          code: 120,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
      // Prettier kept binary, assignment and intersection (`&`) operators at the end of a line, but
      // broke ternaries before `?` / `:` and multi-line union types before `|`.
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        { overrides: { ':': 'before', '?': 'before', '|': 'before' } },
      ],
      // Prettier left numeric property keys exactly as authored, quoted or not, so no single setting
      // here reproduces it: locale tables use `0:` while the Easter fixtures use `'2001':`.
      '@stylistic/quote-props': 'off',
      // Double quotes are kept where the string itself contains single quotes.
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      // `markers` keeps the `//= ===` section banners in the date helpers intact.
      '@stylistic/spaced-comment': [
        'error',
        'always',
        { line: { exceptions: ['-', '+', '='], markers: ['=', '/'] } },
      ],
      'arrow-body-style': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['__tests__/**/*', 'build/**/*', '.config/**/*'],
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
      'no-await-in-loop': 'off',
      'no-console': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'object-shorthand': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/build/**/*.mjs', 'rites/**/jest.config.mjs', 'packages/**/*.config.mjs', '.config/**/*.mjs'],
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
        tsconfigRootDir,
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
        tsconfigRootDir,
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
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
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
    files: ['**/build/**/*.ts', '.config/*.ts'],
    ignores: ['**/*.spec.ts', '**/__tests__/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./rites/roman1969/tsconfig.json', './tsconfig.base.json', './tsconfig.lint.json'],
        tsconfigRootDir,
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
  // JSON: `@eslint/json` is lint-only by design, so formatting comes from eslint-plugin-jsonc.
  ...jsonc.configs['flat/recommended-with-json'],
  {
    files: ['**/*.json'],
    rules: {
      'jsonc/array-bracket-newline': ['error', 'consistent'],
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
      'jsonc/no-octal-escape': 'error',
      'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/quote-props': ['error', 'always'],
      'jsonc/quotes': ['error', 'double'],
    },
  },
  {
    files: ['.vscode/*.json'],
    rules: {
      // VS Code config files are JSONC: comments are expected.
      'jsonc/no-comments': 'off',
    },
  },
  ...yml.configs['flat/standard'],
  {
    files: ['**/*.{yaml,yml}'],
    rules: {
      // Existing YAML uses single quotes (the old Prettier config set `singleQuote`), and
      // `plain-scalar` would strip quotes that GitHub Actions expressions rely on.
      'yml/plain-scalar': 'off',
      'yml/quotes': ['error', { avoidEscape: true, prefer: 'single' }],
      'yml/block-sequence-hyphen-indicator-newline': ['error', 'never'],
      'yml/flow-mapping-curly-spacing': ['error', 'always'],
      'yml/flow-sequence-bracket-spacing': ['error', 'never'],
      'yml/indent': ['error', 2],
      'yml/key-spacing': ['error', { afterColon: true, beforeColon: false }],
      'yml/no-tab-indent': 'error',
      'yml/spaced-comment': ['error', 'always'],
    },
  },
  // Markdown: `@eslint/markdown` provides no formatting rules, so use markdownlint's fixable set.
  {
    files: ['**/*.md'],
    languageOptions: {
      parser: markdownlintParser,
    },
    plugins: {
      markdownlint,
    },
    rules: {
      'markdownlint/md001': 'off', // generated docs jump heading levels
      'markdownlint/md013': 'off', // prose was never hard-wrapped (Prettier ran with proseWrap: preserve)
      'markdownlint/md024': 'off', // CHANGELOG repeats section headings per release
      'markdownlint/md033': 'off', // inline HTML is used for callouts
      'markdownlint/md041': 'off', // several docs open with a note before the title
    },
  },
];
