/**
 * This script is used to check the consistency of the data files.
 *
 * It reports errors when:
 *   - [1] There are useless martyrology items.
 *   - [2] There are missing martyrology items.
 *   - [3] There are missing localized 'en' items (in the Romcal project,
 *         English takes precedence as the primary language, so all content
 *         should be localized in English).
 *   - [4] There are useless localized items.
 *   - [5] The martyrology items are not sorted alphabetically.
 *   - [6] The localized name items are not sorted alphabetically.
 *
 * It issues warnings when:
 *   - [7] There are missing localized items for the Proper of Time
 *         and the General Roman calendar.
 *
 * Note: in the codebase below, all *ComputedKeys variables are the keys
 * that are computed by Romcal (from the inputs and definitions),
 * to distinguish them from the keys that are directly defined in the source files.
 */

import chalk from 'chalk';
import { merge } from 'ts-deepmerge';

import { Locale } from '../lib';
import { Martyrology } from '../lib/catalog/martyrology';
import { COLORS } from '../lib/constants/colors';
import { PROPER_CYCLES, PSALTER_WEEKS, SUNDAY_CYCLES, WEEKDAY_CYCLES } from '../lib/constants/cycles';
import { MONTHS } from '../lib/constants/months';
import { RANKS } from '../lib/constants/ranks';
import { SEASONS } from '../lib/constants/seasons';
import { WEEKDAYS } from '../lib/constants/weekdays';
import { GeneralRoman } from '../lib/general-calendar/proper-of-saints';
import { locales } from '../lib/locales';
import { CalendarDef } from '../lib/models/calendar-def';
import { particularCalendars } from '../lib/particular-calendars';
import { toPackageName } from '../lib/utils/string';

import { RomcalBuilder } from './bundle';

enum LogLevel {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

type StringSetRecord = Record<string, Set<string>>;
type StringArrayRecord = Record<string, string[]>;

type CalendarData = {
  localeComputedKeys: string[];
  martyrologyComputedKeys: string[];
};

let hasErrors = false;
let hasWarnings = false;

const u = chalk.underline;
const color: Record<LogLevel, chalk.Chalk> = {
  info: chalk.greenBright,
  warn: chalk.yellowBright,
  error: chalk.redBright,
};
const bgColor: Record<LogLevel, chalk.Chalk> = {
  info: chalk.bgGreenBright.black,
  warn: chalk.bgYellow.black,
  error: chalk.bgRed.whiteBright,
};

const dasherize = (item: string): string => `       - ${item}`;

const label = (logLevel: LogLevel): string => {
  switch (logLevel) {
    case LogLevel.WARN:
      hasWarnings = true;
      return `${bgColor[logLevel].bold('\n WARN ')} `;
    case LogLevel.ERROR:
      hasErrors = true;
      return `${bgColor[logLevel].bold('\n ERR  ')} `;
    case LogLevel.INFO:
    default:
      return `${bgColor[logLevel].bold('\n  OK  ')} `;
  }
};

const list = (logLevel: LogLevel, items: string[]): string => color[logLevel](items.map(dasherize).join('\n'));

/**
 * Output log if the values are not falsy.
 */
const logIf = (logLevel: LogLevel, description: string, values: string[] | StringArrayRecord | boolean): void => {
  const loggable = (Array.isArray(values) && (values as string[]).length > 0) || Object.values(values)?.length;
  if (!loggable) return;
  const log = console[logLevel];
  log(label(logLevel) + chalk.bold(description));
  if (Array.isArray(values) && (values as string[]).length > 0) {
    log(list(logLevel, values));
  } else {
    Object.entries(values).forEach(([namespace, keys]) => {
      console[logLevel](`       ${color[logLevel].bold(`${namespace}:`)}`);
      console[logLevel](list(logLevel, keys));
    });
  }
};

const getNamespace = (key: string): string => key.split(':')[0];
const removeNamespace = (key: string): string => key.split(':')[1];

const isObject = (obj: unknown): obj is Record<string, unknown> =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj);

const getNestedPropertyNames = (obj: Record<string, unknown>, parentKey?: string): string[] => {
  const result: string[] = [];
  Object.keys(obj).forEach((key) => {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;
    const currentValue = obj[key];
    if (isObject(currentValue)) {
      result.push(...getNestedPropertyNames(currentValue, currentKey));
    } else {
      result.push(currentKey);
    }
  });
  return result;
};

const findMissingInArray = (arr1: string[] | Set<string>, arr2: string[] | Set<string>): string[] | false => {
  const missingItem = Array.from(arr1).filter((item) => !Array.from(arr2).includes(item));
  return missingItem.length ? missingItem : false;
};

const findMissingInArrayWithNamespacedLocaleKeys = (
  computedNamespacedKeys: string[],
  locale: Locale,
  option?: { reverse?: boolean; localeKeyNamesOnly?: boolean }
): StringArrayRecord | false => {
  const groupByNamespace = computedNamespacedKeys.reduce<StringSetRecord>((acc, item) => {
    const namespace = getNamespace(item);
    if (!acc[namespace]) acc[namespace] = new Set();
    acc[namespace].add(removeNamespace(item));
    return acc;
  }, {});

  return Object.entries(locale)
    .filter(([key]) => key !== 'id')
    .filter(([key]) => !option?.localeKeyNamesOnly || (option?.localeKeyNamesOnly && key === 'names'))
    .reduce<StringArrayRecord | false>((acc, [namespace, obj]) => {
      const rec = { ...(acc || {}) };
      const props = getNestedPropertyNames(obj);
      const missingItem = option?.reverse
        ? props.filter((item) => !Array.from(groupByNamespace[namespace] ?? []).includes(item))
        : Array.from(groupByNamespace[namespace] ?? []).filter((item) => !props.includes(item));
      if (missingItem.length) {
        rec[namespace] = missingItem;
      }
      return rec;
    }, false);
};

const findMissingLocalizedItems = (
  localeKey: string,
  localeComputedKeys: string[] | Set<string>,
  option?: { reverse?: boolean; localeKeyNamesOnly?: boolean }
): StringArrayRecord | false => {
  // For a region locale (XxXx), merge it with the base locale (Xx) if exists
  const locale =
    localeKey.length === 4 && Object.prototype.hasOwnProperty.call(locales, localeKey.slice(0, 2))
      ? merge(locales[localeKey.slice(0, 2)], locales[localeKey])
      : locales[localeKey];

  return findMissingInArrayWithNamespacedLocaleKeys(Array.from(localeComputedKeys), locale, option);
};

const isObjectPropsSortedAlphabetically = (obj: Record<string, unknown>): boolean => {
  const props = Object.keys(obj);
  return props.sort().join('') !== props.join('');
};

const devLocale = { id: 'dev' };
const allCalendars: (typeof CalendarDef)[] = [GeneralRoman, ...Object.values(particularCalendars)];
const allMartyrologyKeys = new Set<string>();
const allLocalesKeys = new Set<string>();
const allCalendarData: Record<string, CalendarData> = {};

const metaI18nKeys: string[] = [
  ...COLORS.map((c) => `colors:${c.toLowerCase()}`),
  ...SEASONS.map((s) => `seasons:${s.toLowerCase()}.season`),
  ...PROPER_CYCLES.map((c) => `cycles:${c.toLowerCase()}`),
  ...SUNDAY_CYCLES.map((c) => `cycles:sunday_${c.toLowerCase()}`),
  ...WEEKDAY_CYCLES.map((c) => `cycles:weekday_${c.toLowerCase()}`),
  ...PSALTER_WEEKS.map((c) => `cycles:psalter_${c.toLowerCase()}`),
  ...RANKS.map((r) => `ranks:${r.toLowerCase()}`),
  ...MONTHS.map((_m, i) => `months:${i}`),
  ...WEEKDAYS.map((_w, i) => `weekdays:${i}`),
];

/**
 * Compute data to check.
 */
for (let i = 0; i < allCalendars.length; i += 1) {
  const calendar = allCalendars[i];

  // Init config
  const isGRC = calendar.name === GeneralRoman.name;
  const builder = isGRC ? new RomcalBuilder(devLocale) : new RomcalBuilder(devLocale, calendar);

  const inputs = builder.getAllInputs();
  const definitions = builder.getAllDefinitions();

  // Retrieve martyrology computed keys from definitions
  const martyrologyComputedKeysFromDefinitions = Object.entries(definitions).reduce<StringSetRecord>(
    (acc, [key, value]) => {
      const mKeys = value.reduce<string[]>((vAcc, definition) => {
        return [
          ...vAcc,
          ...(definition.martyrology?.reduce<string[]>((mAcc, m) => {
            if (typeof m === 'string') return [...mAcc, m];
            return [...mAcc, m.id];
          }, []) ?? []),
        ];
      }, []);
      if (mKeys.length) {
        acc[key] = new Set<string>();
        mKeys.forEach((mKey) => acc[key].add(mKey));
      }
      return acc;
    },
    {}
  );

  // Now, retrieve martyrology keys evaluated from inputs, to combine them with the ones from definitions.
  // This is necessary because the inputs may have dropped some martyrology keys (when a martyrology key is not found).
  const martyrologyComputedKeys = Object.values(inputs).reduce<Set<string>>((acc, value) => {
    const mkeys = martyrologyComputedKeysFromDefinitions[value.id]
      ? martyrologyComputedKeysFromDefinitions[value.id]
      : value.martyrology?.map((m) => (typeof m === 'string' ? m : m.id));
    mkeys.forEach((mkey) => acc.add(mkey));

    return acc;
  }, new Set<string>());

  // Retrieve locale computed keys from inputs
  const localeComputedKeys = Object.values(inputs).reduce<string[]>(
    (acc, value) => [...acc, value.i18nDef[0]],
    metaI18nKeys
  );

  allCalendarData[calendar.name] = {
    localeComputedKeys,
    martyrologyComputedKeys: Array.from(martyrologyComputedKeys),
  };

  localeComputedKeys.forEach((key) => allLocalesKeys.add(key));
  martyrologyComputedKeys.forEach((key) => allMartyrologyKeys.add(key));
}

/**
 * [1] If there are useless martyrology items.
 */
const uselessMartyrologyKeys = findMissingInArray(Object.keys(Martyrology.catalog), allMartyrologyKeys);
logIf(LogLevel.ERROR, 'Useless martyrology items:', uselessMartyrologyKeys);

/**
 * [2] If there are missing martyrology items.
 */
const missingMartyrologyKeys = findMissingInArray(allMartyrologyKeys, Object.keys(Martyrology.catalog));
logIf(LogLevel.ERROR, 'Missing martyrology items:', missingMartyrologyKeys);

/**
 * [3] If there are missing localized 'en' items.
 */
const missingEnLocaleKeys = findMissingLocalizedItems('En', allLocalesKeys);
logIf(LogLevel.ERROR, `Missing localized '${u('en')}' items:`, missingEnLocaleKeys);

Object.keys(Martyrology.catalog).forEach((key) => allLocalesKeys.add(`names:${key}`));

/**
 * [4] If there are useless localized name items.
 */
Object.keys(locales).forEach((localeKey) => {
  const uselessLocalizedKeys = findMissingLocalizedItems(localeKey, allLocalesKeys, {
    reverse: true,
    localeKeyNamesOnly: true,
  });
  logIf(LogLevel.ERROR, `Useless localized '${toPackageName(localeKey)}' items:`, uselessLocalizedKeys);
});

/**
 * [5] If the martyrology items are not sorted alphabetically.
 */
const areNotSortedMartyrologyKeys = isObjectPropsSortedAlphabetically(Martyrology.catalog);
logIf(LogLevel.ERROR, 'Martyrology keys are not sorted alphabetically.', areNotSortedMartyrologyKeys);

/**
 * [6] If the localized name items are not sorted alphabetically.
 */
Object.values(locales).forEach((locale) => {
  const areNotSortedNames = isObjectPropsSortedAlphabetically(locale.names ?? {});
  logIf(LogLevel.ERROR, `Localized '${u(locale.id)}' names are not sorted alphabetically.`, areNotSortedNames);
});

/**
 * [7] If there are missing localized items for the Proper of Time and the General Roman calendar.
 */
Object.keys(locales)
  .filter((l) => l !== 'En') // Ignore English locale has it is already checked before
  .forEach((localeKey) => {
    const missingLocaleNames = findMissingLocalizedItems(localeKey, allCalendarData.GeneralRoman.localeComputedKeys);
    logIf(
      LogLevel.WARN,
      `Missing localized '${u(toPackageName(localeKey))}' items for the ${u('Proper of Time')} and the ${u(
        'General Roman Calendar'
      )}:`,
      missingLocaleNames
    );
  });

/**
 * End of checks.
 */
if (!hasErrors && !hasWarnings) console.info(label(LogLevel.INFO) + color[LogLevel.INFO]('Locale checks passed!'));
console.log(''); // Add extra line to clear results in the console
if (hasErrors) process.exit(1); // Exit with error code if there are errors
