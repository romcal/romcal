import { calendarDefinitions } from '../src/calendars';
import { GeneralRoman } from '../src/calendars/general-roman';
import { Martyrology } from '../src/catalog/martyrology';
import { locales } from '../src/locales';
import { RomcalConfig } from '../src/models/config';

import { findMissingInArray } from './util/findMissingInArray';
import { isObjectPropsSortedAlphabetically } from './util/isObjectPropsSortedAlphabetically';

/**
 * Extract all martyrology keys used across all calendar definitions.
 * This includes:
 * - Keys from the `martyrology` array property (string or object with `id`)
 * - The celebration key itself if it exists in the martyrology catalog
 */
const extractAllMartyrologyKeys = (): Set<string> => {
  const allMartyrologyKeys = new Set<string>();
  const catalogKeys = new Set(Object.keys(Martyrology.catalog));
  const devLocale = { id: 'dev' };

  for (const CalendarDefClass of Object.values(calendarDefinitions)) {
    // Create a config to build the calendar definitions
    const isGRC = CalendarDefClass.name === GeneralRoman.name;
    const config = isGRC
      ? new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale)
      : new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale, CalendarDefClass);

    // Build definitions
    config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());

    // Extract martyrology keys from all definitions
    for (const def of Object.values(config.liturgicalDayDef)) {
      // Get martyrology keys from the input definitions
      for (const input of def.input) {
        if (input.martyrology) {
          for (const m of input.martyrology) {
            const key = typeof m === 'string' ? m : m.id;
            allMartyrologyKeys.add(key);
          }
        }
      }

      // If the celebration key itself exists in the catalog, it's also considered "used"
      if (catalogKeys.has(def.id)) {
        allMartyrologyKeys.add(def.id);
      }
    }
  }

  return allMartyrologyKeys;
};

describe('Martyrology Data Validation', () => {
  describe('All martyrology keys used in calendars must exist in Martyrology.catalog', () => {
    const allUsedKeys = extractAllMartyrologyKeys();
    const catalogKeys = Object.keys(Martyrology.catalog);
    const missingKeys = findMissingInArray(allUsedKeys, catalogKeys);

    it('should have no missing martyrology entries', () => {
      expect(missingKeys).toEqual([]);
    });
  });

  describe('All martyrology entries referenced in LiturgicalDays must have translations', () => {
    const allUsedKeys = extractAllMartyrologyKeys();
    const enNamesKeys = Object.keys(locales.En.names ?? {});
    const missingTranslations = findMissingInArray(allUsedKeys, enNamesKeys);

    it('should have translations in en.ts for all used martyrology keys', () => {
      expect(missingTranslations).toEqual([]);
    });
  });

  describe('Martyrology.catalog keys must be sorted alphabetically', () => {
    it('should have alphabetically sorted keys', () => {
      expect(isObjectPropsSortedAlphabetically(Martyrology.catalog)).toBe(true);
    });
  });
});
