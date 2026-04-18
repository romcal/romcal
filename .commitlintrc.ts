import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { UserConfig, RuleConfigSeverity } from '@commitlint/types';

/**
 * Commitlint runs before the workspace is built in CI, so this config must be
 * self-contained. Parsing the class-name keys from the source files keeps us in
 * sync with the calendar/locale registries without dragging in `@internal/*`
 * runtime imports (which would require dist/ to exist).
 */

const __dirname = dirname(fileURLToPath(import.meta.url));

function extractObjectKeys(file: string, varName: string): string[] {
  const text = readFileSync(resolve(__dirname, file), 'utf8');
  const re = new RegExp(`${varName}[^=]*=\\s*\\{([\\s\\S]*?)\\}`);
  const match = text.match(re);
  if (!match) throw new Error(`Could not locate ${varName} in ${file}`);
  return match[1]
    .split(',')
    .map((line) => line.replace(/\/\/.*$/, '').trim())
    .filter((line) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(line));
}

const toPackageName = (name: string): string =>
  name
    .replace(/([a-z0-9]|^)([A-Z])/g, (_, m1, m2) => (m1 ? `${m1}-${m2}` : m2))
    .replace(/_/, '.')
    .toLowerCase();

const CALENDAR_IDS = extractObjectKeys('./rites/roman1969/src/calendars/index.ts', 'calendarDefinitions').map(
  toPackageName
);

const LOCALE_IDS = extractObjectKeys('./rites/roman1969/src/locales/index.ts', 'locales').map(toPackageName);

const empty = [null];
const scopes = [...CALENDAR_IDS, ...LOCALE_IDS, 'calendar', 'l10n', 'util', 'package'];
const styleScopes = ['commitlint', 'editorconfig', 'eslint', 'prettier'];

const typesEnumScoped = {
  // Changes to build scripts
  build: empty,
  // Updates to the automation or release process
  ci: empty,
  // Documentation only changes
  docs: empty,
  // Enhancing existing functionality
  enh: scopes,
  // Features, new functionality
  feat: scopes,
  // Bug fixes
  fix: scopes,
  // Performance improvements
  perf: scopes,
  // Refactoring, no behavior changes
  refactor: scopes,
  // Changes that affect style, linting, formatting and grammar
  style: [...scopes, ...styleScopes],
  // Add or correct tests
  test: scopes,
};

export default {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  helpUrl: 'https://github.com/romcal/romcal/blob/dev/docs/contribute-to-romcal.md#committing-changes',
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#'],
    },
  },
  plugins: ['selective-scope'],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Disabled] as const,
    'header-max-length': [RuleConfigSeverity.Disabled] as const,
    'scope-enum': [
      2,
      'always',
      // From `commitlint` point of view, allow all scopes regardless of the type
      [...scopes, ...styleScopes],
    ],
    // Use `selective-scope` to make sure that the scopes are only allowed when they are defined for a particular type
    'selective-scope': [2, 'always', typesEnumScoped],
    'type-enum': [2, 'always', Object.keys(typesEnumScoped)],
  },
} as UserConfig;
