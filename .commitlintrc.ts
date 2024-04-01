import { UserConfig } from '@commitlint/types';
import { LOCALE_IDS } from './lib/constants/locales';
import { CALENDAR_IDS } from './lib/constants/calendars';

const empty = [null];
const scopes = [...CALENDAR_IDS, ...LOCALE_IDS, 'l10n', 'calendar'];

const typesEnumScoped = {
  // Updates to the automation or release process
  ci: empty,
  // Changes to build scripts
  build: empty,
  // Documentation only changes
  docs: empty,
  // Features, new functionality
  feat: scopes,
  // Enhancing existing functionality
  enh: scopes,
  // Bug fixes
  fix: scopes,
  // Refactoring, no behavior changes
  refactor: scopes,
  // Performance improvements
  perf: scopes,
  // Add or correct tests
  test: scopes,
  // Changes that affect style, linting, formatting and grammar
  style: scopes,
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
    'scope-enum': [
      2,
      'always',
      // From `commitlint` point of view, allow all scopes regardless of the type
      scopes,
    ],
    // Use `selective-scope` to make sure that the scopes are only allowed when they are defined for a particular type
    'selective-scope': [2, 'always', typesEnumScoped],
    'type-enum': [2, 'always', Object.keys(typesEnumScoped)],
  },
} as UserConfig;
