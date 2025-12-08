import { Martyrology } from '../src/catalog/martyrology';
import { locales } from '../src/locales';
import { RomcalConfig } from '../src/models/config';
import { ProperOfTime } from '../src/proper-of-time/proper-of-time';
import { Locale } from '../src/types/locale';

/**
 * Extract all i18n keys used by the Proper of Time.
 * These come from the i18nDef property of each liturgical day definition.
 */
const extractProperOfTimeI18nKeys = (): Set<string> => {
  const allKeys = new Set<string>();
  const devLocale = { id: 'dev' };

  // Create a minimal config to build proper of time definitions
  const config = new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale);

  // Build the proper of time definitions
  const properOfTime = new ProperOfTime(config);
  properOfTime.buildAllDefinitions();

  // Extract i18nDef from all definitions
  for (const def of Object.values(config.liturgicalDayDef)) {
    if (def.i18nDef && def.i18nDef[0]) {
      // The key is the first element, e.g., 'seasons:advent.sunday'
      allKeys.add(def.i18nDef[0]);
    }
  }

  return allKeys;
};

/**
 * Parse a namespaced key and get the lookup path.
 * e.g., 'seasons:advent.sunday' -> { namespace: 'seasons', path: ['advent', 'sunday'] }
 */
const parseI18nKey = (key: string): { namespace: string; path: string[] } | null => {
  const [namespace, rest] = key.split(':');
  if (!namespace || !rest) return null;
  return {
    namespace,
    path: rest.split('.'),
  };
};

/**
 * Check if a locale has a key at the given path.
 */
const hasLocaleKey = (locale: Locale, namespace: string, path: string[]): boolean => {
  const namespaceObj = locale[namespace as keyof Locale];
  if (!namespaceObj || typeof namespaceObj !== 'object') return false;

  let current: unknown = namespaceObj;
  for (const segment of path) {
    if (current === null || typeof current !== 'object') return false;
    current = (current as Record<string, unknown>)[segment];
  }

  return current !== undefined;
};

/**
 * Find missing i18n keys in a locale.
 */
const findMissingI18nKeys = (keys: Set<string>, locale: Locale): string[] => {
  const missing: string[] = [];

  for (const key of keys) {
    const parsed = parseI18nKey(key);
    if (!parsed) continue;

    if (!hasLocaleKey(locale, parsed.namespace, parsed.path)) {
      missing.push(key);
    }
  }

  return missing.sort();
};

describe('Proper of Time Data Validation', () => {
  const allKeys = extractProperOfTimeI18nKeys();

  describe('All i18n keys used by Proper of Time must exist in en.ts', () => {
    const enLocale = locales.En;
    const missingKeys = findMissingI18nKeys(allKeys, enLocale);

    it('should have all required season keys', () => {
      const seasonKeys = missingKeys.filter((k) => k.startsWith('seasons:'));
      expect(seasonKeys).toEqual([]);
    });

    it('should have all required names keys', () => {
      const namesKeys = missingKeys.filter((k) => k.startsWith('names:'));
      expect(namesKeys).toEqual([]);
    });

    it('should have no missing i18n keys overall', () => {
      expect(missingKeys).toEqual([]);
    });
  });

  // Note: Season keys for all locales are checked in locale-data.test.ts
  // under "All locales must have required meta keys" -> seasons

  describe('Expected season keys are present in en.ts', () => {
    const expectedSeasonKeys = [
      'seasons:advent.sunday',
      'seasons:advent.weekday',
      'seasons:advent.privileged_weekday',
      'seasons:christmas_time.octave',
      'seasons:christmas_time.second_sunday_after_christmas',
      'seasons:christmas_time.before_epiphany',
      'seasons:christmas_time.after_epiphany',
      'seasons:lent.day_after_ash_wed',
      'seasons:lent.sunday',
      'seasons:lent.weekday',
      'seasons:lent.holy_week_day',
      'seasons:easter_time.octave',
      'seasons:easter_time.sunday',
      'seasons:easter_time.weekday',
      'seasons:ordinary_time.sunday',
      'seasons:ordinary_time.weekday',
    ];

    for (const key of expectedSeasonKeys) {
      it(`should have key: ${key}`, () => {
        const parsed = parseI18nKey(key);
        expect(parsed).not.toBeNull();
        expect(hasLocaleKey(locales.En, parsed!.namespace, parsed!.path)).toBe(true);
      });
    }
  });

  describe('Expected names keys from Proper of Time are present in en.ts', () => {
    const expectedNamesKeys = [
      'nativity_of_the_lord',
      'holy_family_of_jesus_mary_and_joseph',
      'mary_mother_of_god',
      'epiphany_of_the_lord',
      'baptism_of_the_lord',
      'ash_wednesday',
      'palm_sunday_of_the_passion_of_the_lord',
      'thursday_of_the_lords_supper',
      'friday_of_the_passion_of_the_lord',
      'holy_saturday',
      'easter_sunday',
      'divine_mercy_sunday',
      'ascension_of_the_lord',
      'pentecost_sunday',
      'most_holy_trinity',
      'most_holy_body_and_blood_of_christ',
      'most_sacred_heart_of_jesus',
      'sunday_of_the_word_of_god',
      'our_lord_jesus_christ_king_of_the_universe',
    ];

    for (const key of expectedNamesKeys) {
      it(`should have names:${key}`, () => {
        expect(locales.En.names?.[key]).toBeDefined();
      });
    }
  });
});
