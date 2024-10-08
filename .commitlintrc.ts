import { UserConfig, RuleConfigSeverity } from '@commitlint/types';
import { LOCALE_IDS } from './rites/roman1969/src/constants/locales';
import { CALENDAR_IDS } from './rites/roman1969/src/constants/calendars';

const empty = [null];
const scopes = [...CALENDAR_IDS, ...LOCALE_IDS, 'calendar', 'l10n', 'util', 'package'];
const styleScopes = ['commitlint', 'editorconfig', 'eslint', 'prettier'];

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
  style: [...scopes, ...styleScopes],
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
