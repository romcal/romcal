/**
 * This script is used to check the consistency of the data files.
 *
 * It reports errors when:
 *   - [1] There are missing martyrology items.
 *   - [2] There are missing localized 'en' items (in the Romcal project,
 *         English takes precedence as the primary language, so all content
 *         should be localized in English).
 *   - [3] There are useless localized items.
 *   - [4] The martyrology items are not sorted alphabetically.
 *   - [5] The localized name items are not sorted alphabetically.
 *
 * It issues warnings when:
 *   - [6] There are missing localized items for the Proper of Time
 *         and the General Roman calendar.
 *
 * It provides informational messages when:
 *   - [7] There are martyrology items not yet used by any calendar
 *         (valid entries reserved for future use).
 *
 * Note: in the codebase below, all *ComputedKeys variables are the keys
 * that are computed by Romcal (from the inputs and definitions),
 * to distinguish them from the keys that are directly defined in the source files.
 */

import {
  COLORS,
  CalendarDef,
  Locale,
  MONTHS,
  PROPER_CYCLES,
  PSALTER_WEEKS,
  RANKS,
  SEASONS,
  SUNDAY_CYCLES,
  WEEKDAYS,
  WEEKDAY_CYCLES,
  registerBaseCalendar,
  toPackageName,
} from '@internal/generator';
import { colors } from 'consola/utils';
import { merge } from 'ts-deepmerge';

import { ResolvedOptions } from '../types';
import { Logger } from '../utils/logger';

import { RomcalBuilder } from './bundle';

type LogLevel = 'info' | 'warn' | 'error';

type StringSetRecord = Record<string, Set<string>>;
type StringArrayRecord = Record<string, string[]>;

type CalendarData = {
  localeComputedKeys: string[];
  martyrologyComputedKeys: string[];
};

const u = colors.underline;

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

const isObjectPropsSortedAlphabetically = (obj: Record<string, unknown>): boolean => {
  const props = Object.keys(obj);
  return props.sort().join('') !== props.join('');
};

/**
 * Consistency checks over a rite's data: martyrology entries a calendar refers to but
 * does not define, localisations that are missing or no longer used, and keys left
 * unsorted. Errors fail the command; warnings and the unused-entry list do not.
 */
export const runCheck = (options: ResolvedOptions, log: Logger): void => {
  const { locales, martyrology, calendars, baseCalendar } = options.manifest;

  registerBaseCalendar(baseCalendar);

  let hasErrors = false;
  let hasWarnings = false;

  const dasherize = (item: string): string => `- ${item}`;

  /**
   * Report `values` under `description`, unless there is nothing to report.
   *
   * Whether the run failed is decided here rather than by a formatting helper, which
   * is how the previous version of this script tracked it.
   */
  const logIf = (level: LogLevel, description: string, values: string[] | StringArrayRecord | boolean): void => {
    const loggable = (Array.isArray(values) && (values as string[]).length > 0) || Object.values(values)?.length;
    if (!loggable) return;

    if (level === 'error') hasErrors = true;
    if (level === 'warn') hasWarnings = true;

    log[level](description);
    if (Array.isArray(values) && (values as string[]).length > 0) {
      values.map(dasherize).forEach((item) => log.detail(item));
    } else {
      Object.entries(values as StringArrayRecord).forEach(([namespace, keys]) => {
        log.detail(`${namespace}:`);
        keys.map(dasherize).forEach((item) => log.detail(`  ${item}`));
      });
    }
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

  const devLocale = { id: 'dev' };
  const allCalendars: (typeof CalendarDef)[] = Object.values(calendars);
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
    const isBase = calendar.name === baseCalendar.name;
    const builder = isBase
      ? new RomcalBuilder(martyrology, devLocale)
      : new RomcalBuilder(martyrology, devLocale, calendar);

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
   * [1] If there are missing martyrology items.
   */
  const missingMartyrologyKeys = findMissingInArray(allMartyrologyKeys, Object.keys(martyrology));
  logIf('error', 'Missing martyrology items:', missingMartyrologyKeys);

  /**
   * [2] If there are missing localized 'en' items.
   */
  const missingEnLocaleKeys = findMissingLocalizedItems('En', allLocalesKeys);
  logIf('error', `Missing localized '${u('en')}' items:`, missingEnLocaleKeys);

  Object.keys(martyrology).forEach((key) => allLocalesKeys.add(`names:${key}`));

  /**
   * [3] If there are useless localized name items.
   */
  Object.keys(locales).forEach((localeKey) => {
    const uselessLocalizedKeys = findMissingLocalizedItems(localeKey, allLocalesKeys, {
      reverse: true,
      localeKeyNamesOnly: true,
    });
    logIf('error', `Useless localized '${toPackageName(localeKey)}' items:`, uselessLocalizedKeys);
  });

  /**
   * [4] If the martyrology items are not sorted alphabetically.
   */
  const areNotSortedMartyrologyKeys = isObjectPropsSortedAlphabetically(martyrology);
  logIf('error', 'Martyrology keys are not sorted alphabetically.', areNotSortedMartyrologyKeys);

  /**
   * [5] If the localized name items are not sorted alphabetically.
   */
  Object.values(locales).forEach((locale) => {
    const areNotSortedNames = isObjectPropsSortedAlphabetically(locale.names ?? {});
    logIf('error', `Localized '${u(locale.id)}' names are not sorted alphabetically.`, areNotSortedNames);
  });

  /**
   * [6] If there are missing localized items for the Proper of Time and the General Roman calendar.
   */
  Object.keys(locales)
    .filter((l) => l !== 'En') // Ignore English locale has it is already checked before
    .forEach((localeKey) => {
      const baseKeys = allCalendarData[baseCalendar.name].localeComputedKeys;
      const missingLocaleNames = findMissingLocalizedItems(localeKey, baseKeys);
      logIf(
        'warn',
        `Missing localized '${u(toPackageName(localeKey))}' items for the ${u('Proper of Time')} and the ${u(
          'General Roman Calendar'
        )}:`,
        missingLocaleNames
      );
    });

  /**
   * [7] If there are martyrology items not yet used by any calendar.
   */
  const unusedMartyrologyKeys = findMissingInArray(Object.keys(martyrology), allMartyrologyKeys);
  logIf(
    'info',
    'Martyrology items not yet used by any calendar (reserved for future use):',
    unusedMartyrologyKeys
  );

  /**
   * End of checks.
   */
  if (!hasErrors && !hasWarnings) log.success('Locale checks passed!');
  if (hasErrors) process.exit(1); // Exit with error code if there are errors
};
