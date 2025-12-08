import { merge } from 'ts-deepmerge';

import { calendarDefinitions } from '../src/calendars';
import { GeneralRoman } from '../src/calendars/general-roman';
import { Martyrology } from '../src/catalog/martyrology';
import { SEASONS } from '../src/constants/seasons';
import { locales } from '../src/locales';
import { RomcalConfig } from '../src/models/config';
import { ProperOfTime } from '../src/proper-of-time/proper-of-time';
import { Locale } from '../src/types/locale';
import { toPackageName } from '../src/utils/string';

import { getNestedPropertyNames } from './util/getNestedPropertyNames';
import { isObjectPropsSortedAlphabetically } from './util/isObjectPropsSortedAlphabetically';

/**
 * Extract all season keys used by Proper of Time dynamically.
 * Returns keys like 'advent.sunday', 'lent.weekday', etc.
 */
const extractProperOfTimeSeasonKeys = (): string[] => {
  const seasonKeys = new Set<string>();
  const devLocale = { id: 'dev' };

  const config = new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale);
  const properOfTime = new ProperOfTime(config);
  properOfTime.buildAllDefinitions();

  for (const def of Object.values(config.liturgicalDayDef)) {
    if (def.i18nDef && def.i18nDef[0]?.startsWith('seasons:')) {
      // Extract path after 'seasons:', e.g., 'advent.sunday'
      const path = def.i18nDef[0].replace('seasons:', '');
      seasonKeys.add(path);
    }
  }

  // Also add season names (*.season)
  SEASONS.forEach((s) => seasonKeys.add(`${s.toLowerCase()}.season`));

  return Array.from(seasonKeys).sort();
};

/**
 * Extract ordinal base numbers from en.ts (the reference locale).
 * Returns ['1', '2', ...] without gender suffixes.
 */
const extractOrdinalKeys = (): string[] => {
  const enOrdinals = locales.En.ordinals;
  if (!enOrdinals) return [];

  // Get unique base numbers (strip _masculine, _feminine suffixes)
  const baseNumbers = new Set<string>();
  for (const key of Object.keys(enOrdinals)) {
    const baseNum = key.split('_')[0];
    baseNumbers.add(baseNum);
  }

  return Array.from(baseNumbers).sort((a, b) => Number(a) - Number(b));
};

/**
 * Extract keys from en.ts for a specific namespace.
 */
const extractKeysFromEnLocale = (namespace: keyof Locale): string[] => {
  const obj = locales.En[namespace];
  if (!obj || typeof obj !== 'object') return [];
  return Object.keys(obj);
};

/**
 * Meta locale keys that must exist in ALL locales.
 * Derived dynamically from en.ts (reference locale) and Proper of Time.
 */
const REQUIRED_META_KEYS = {
  colors: extractKeysFromEnLocale('colors'),
  ranks: extractKeysFromEnLocale('ranks'),
  cycles: extractKeysFromEnLocale('cycles'),
  weekdays: extractKeysFromEnLocale('weekdays'),
  months: extractKeysFromEnLocale('months'),
  ordinals: extractOrdinalKeys(),
  seasons: extractProperOfTimeSeasonKeys(),
  periods: extractKeysFromEnLocale('periods'),
};

/**
 * Map of locale IDs to their associated calendar names.
 * A locale must have all keys required by these calendars.
 */
const localeToCalendarsMap: Record<string, string[]> = {
  En: ['GeneralRoman', 'England', 'Scotland', 'Wales', 'Ireland', 'UnitedStates', 'Canada', 'Australia', 'NewZealand'],
  EnGb: ['England', 'Scotland', 'Wales'],
  EnIe: ['Ireland'],
  PtBr: ['Brazil'],
  Fr: [
    'France',
    'France_Angers',
    'France_Coutances',
    'France_Lyon',
    'France_Paris',
    'France_SaintDenis',
    'France_Strasbourg',
    'France_Toulouse',
  ],
  De: ['Germany', 'Austria', 'Switzerland'],
  Es: [
    'Spain',
    'Mexico',
    'Argentina',
    'Chile',
    'Bolivia',
    'CostaRica',
    'Guatemala',
    'Panama',
    'Paraguay',
    'Peru',
    'Uruguay',
    'Venezuela',
    'PuertoRico',
  ],
  It: ['Italy'],
  Pl: ['Poland'],
  Cs: ['CzechRepublic'],
  Sk: ['Slovakia'],
  La: ['GeneralRoman'],
  Ta: ['India'],
};

/**
 * Meta i18n keys required by all locales (derived from REQUIRED_META_KEYS).
 * Used for building calendar locale key sets.
 */
const metaI18nKeys: string[] = [
  ...REQUIRED_META_KEYS.colors.map((c) => `colors:${c}`),
  ...REQUIRED_META_KEYS.ranks.map((r) => `ranks:${r}`),
  ...REQUIRED_META_KEYS.cycles.map((c) => `cycles:${c}`),
  ...REQUIRED_META_KEYS.weekdays.map((w) => `weekdays:${w}`),
  ...REQUIRED_META_KEYS.months.map((m) => `months:${m}`),
  ...REQUIRED_META_KEYS.seasons.map((s) => `seasons:${s}`),
  ...REQUIRED_META_KEYS.periods.map((p) => `periods:${p}`),
];

/**
 * Extract all locale keys (i18n keys) used across specified calendar definitions.
 * Also includes customLocaleId values when celebrations define them.
 */
const extractLocaleKeysForCalendars = (calendarNames: string[]): Set<string> => {
  const allLocaleKeys = new Set<string>(metaI18nKeys);
  const devLocale = { id: 'dev' };

  for (const calendarName of calendarNames) {
    const CalendarDefClass = calendarDefinitions[calendarName];
    if (!CalendarDefClass) continue;

    const isGRC = CalendarDefClass.name === GeneralRoman.name;
    const config = isGRC
      ? new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale)
      : new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale, CalendarDefClass);

    config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());

    for (const def of Object.values(config.liturgicalDayDef)) {
      // Add the i18nDef key
      if (def.i18nDef && def.i18nDef[0]) {
        allLocaleKeys.add(def.i18nDef[0]);
      }

      // Also check for customLocaleId in input definitions
      for (const input of def.input) {
        if (input.customLocaleId) {
          allLocaleKeys.add(`names:${input.customLocaleId}`);
        }
      }
    }
  }

  return allLocaleKeys;
};

/**
 * Extract locale keys used across ALL calendar definitions (without martyrology keys).
 * Used for checking required keys in en.ts.
 */
const extractAllLocaleKeysFromCalendars = (): Set<string> => {
  const allCalendarNames = Object.keys(calendarDefinitions);
  return extractLocaleKeysForCalendars(allCalendarNames);
};

/**
 * Get namespace from a namespaced key (e.g., 'names:all_saints' -> 'names')
 */
const getNamespace = (key: string): string => key.split(':')[0];

/**
 * Remove namespace from a key (e.g., 'names:all_saints' -> 'all_saints')
 */
const removeNamespace = (key: string): string => key.split(':')[1] ?? key;

/**
 * Group keys by namespace.
 */
const groupKeysByNamespace = (keys: string[]): Record<string, Set<string>> => {
  return keys.reduce<Record<string, Set<string>>>((acc, key) => {
    const namespace = getNamespace(key);
    if (!acc[namespace]) acc[namespace] = new Set();
    acc[namespace].add(removeNamespace(key));
    return acc;
  }, {});
};

/**
 * Find missing localized items by comparing computed keys against a locale object.
 */
const findMissingInLocale = (
  computedKeys: string[],
  locale: Locale,
  options?: { reverse?: boolean; localeKeyNamesOnly?: boolean }
): Record<string, string[]> => {
  const groupedKeys = groupKeysByNamespace(computedKeys);
  const result: Record<string, string[]> = {};

  for (const [namespace, obj] of Object.entries(locale)) {
    if (namespace === 'id') continue;
    if (options?.localeKeyNamesOnly && namespace !== 'names') continue;
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) continue;

    const localeProps = getNestedPropertyNames(obj as Record<string, unknown>);
    const computedProps = groupedKeys[namespace] ?? new Set();

    const missingItems = options?.reverse
      ? localeProps.filter((item) => !computedProps.has(item))
      : Array.from(computedProps).filter((item) => !localeProps.includes(item));

    if (missingItems.length > 0) {
      result[namespace] = missingItems;
    }
  }

  return result;
};

/**
 * Merge a region locale with its base locale if applicable.
 */
const mergeLocaleWithBase = (localeKey: string): Locale => {
  if (localeKey.length === 4 && locales[localeKey.slice(0, 2)]) {
    return merge(locales[localeKey.slice(0, 2)], locales[localeKey]) as Locale;
  }
  return locales[localeKey];
};

/**
 * Format locale key for display (e.g., 'En' -> 'English locale (en.ts)')
 */
const formatLocaleKey = (localeKey: string): string => {
  return `${toPackageName(localeKey)}.ts`;
};

/**
 * Check if a locale has a nested key.
 * e.g., hasNestedKey(locale, 'seasons', 'advent.season') checks locale.seasons.advent.season
 */
const hasNestedKey = (locale: Locale, namespace: keyof Locale, path: string): boolean => {
  const obj = locale[namespace];
  if (!obj || typeof obj !== 'object') return false;

  const parts = path.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || typeof current !== 'object') return false;
    current = (current as Record<string, unknown>)[part];
  }

  return current !== undefined;
};

/**
 * Check if a locale has an ordinal for a given number.
 * Ordinals can be: '1', '1_masculine', '1_feminine', etc.
 */
const hasOrdinalForNumber = (locale: Locale, num: string): boolean => {
  const ordinals = locale.ordinals;
  if (!ordinals || typeof ordinals !== 'object') return false;

  // Check for exact match or gendered forms
  const keys = Object.keys(ordinals);
  return keys.some((key) => key === num || key.startsWith(`${num}_`));
};

/**
 * Find missing meta keys in a locale for a specific namespace.
 */
const findMissingMetaKeys = (locale: Locale, namespace: keyof typeof REQUIRED_META_KEYS): string[] => {
  const requiredKeys = REQUIRED_META_KEYS[namespace];
  const missing: string[] = [];

  for (const key of requiredKeys) {
    // Special handling for ordinals - they can have gendered forms
    if (namespace === 'ordinals') {
      if (!hasOrdinalForNumber(locale, key)) {
        missing.push(key);
      }
    } else if (!hasNestedKey(locale, namespace as keyof Locale, key)) {
      missing.push(key);
    }
  }

  return missing;
};

describe('Locale Data Validation', () => {
  describe('English locale (en.ts) must have all required keys', () => {
    const allLocaleKeys = extractAllLocaleKeysFromCalendars();
    const enLocale = locales.En;
    const missingKeys = findMissingInLocale(Array.from(allLocaleKeys), enLocale);

    it('should have all required name keys', () => {
      expect(missingKeys.names ?? []).toEqual([]);
    });

    it('should have all required color keys', () => {
      expect(missingKeys.colors ?? []).toEqual([]);
    });

    it('should have all required rank keys', () => {
      expect(missingKeys.ranks ?? []).toEqual([]);
    });

    it('should have all required season keys', () => {
      expect(missingKeys.seasons ?? []).toEqual([]);
    });
  });

  describe('Each locale names must be sorted alphabetically', () => {
    for (const [localeKey, locale] of Object.entries(locales)) {
      it(`${formatLocaleKey(localeKey)} names should be sorted alphabetically`, () => {
        if (!locale.names) {
          expect(true).toBe(true);
          return;
        }
        expect(isObjectPropsSortedAlphabetically(locale.names)).toBe(true);
      });
    }
  });

  describe('Each locale must have all keys for GRC and associated country calendars', () => {
    const grcKeys = extractLocaleKeysForCalendars(['GeneralRoman']);

    for (const [localeKey, calendarNames] of Object.entries(localeToCalendarsMap)) {
      const locale = locales[localeKey];
      if (!locale) continue;

      it(`${formatLocaleKey(localeKey)} should have all GRC keys`, () => {
        const mergedLocale = mergeLocaleWithBase(localeKey);
        const missingKeys = findMissingInLocale(Array.from(grcKeys), mergedLocale);
        expect(missingKeys.names ?? []).toEqual([]);
      });

      it(`${formatLocaleKey(localeKey)} should have all keys for associated calendars (${calendarNames.join(', ')})`, () => {
        const calendarKeys = extractLocaleKeysForCalendars(calendarNames);
        const mergedLocale = mergeLocaleWithBase(localeKey);
        const missingKeys = findMissingInLocale(Array.from(calendarKeys), mergedLocale);
        expect(missingKeys.names ?? []).toEqual([]);
      });
    }
  });

  describe('All locales must have required meta keys', () => {
    const metaNamespaces: (keyof typeof REQUIRED_META_KEYS)[] = [
      'colors',
      'ranks',
      'cycles',
      'weekdays',
      'months',
      'ordinals',
      'seasons',
      'periods',
    ];

    for (const localeKey of Object.keys(locales)) {
      describe(`${formatLocaleKey(localeKey)}`, () => {
        const mergedLocale = mergeLocaleWithBase(localeKey);

        for (const namespace of metaNamespaces) {
          it(`should have all required ${namespace} keys`, () => {
            const missingKeys = findMissingMetaKeys(mergedLocale, namespace);
            expect(missingKeys).toEqual([]);
          });
        }
      });
    }
  });
});
