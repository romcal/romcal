import { calendarDefinitions } from '../src/calendars';
import { GeneralRoman } from '../src/calendars/general-roman';
import { Martyrology } from '../src/catalog/martyrology';
import { locales } from '../src/locales';
import { RomcalConfig } from '../src/models/config';
import { CalendarDefInstance, Inputs } from '../src/types/calendar-def';
import { DateDef } from '../src/types/liturgical-day';

import { findMissingInArray } from './util/findMissingInArray';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Map of dateFn names to their fixed date equivalents (month, date).
 * These functions always return the same date regardless of year.
 */
const FIXED_DATE_FN_MAP: Record<string, { month: number; date: number }> = {
  peterAndPaulApostles: { month: 6, date: 29 },
  assumption: { month: 8, date: 15 },
  allSaints: { month: 11, date: 1 },
  christmas: { month: 12, date: 25 },
  maryMotherOfGod: { month: 1, date: 1 },
  epiphany: { month: 1, date: 6 },
  immaculateConceptionOfMary: { month: 12, date: 8 },
};

/**
 * Extract all celebration locale keys (names keys) used across all calendar definitions.
 * This includes:
 * - The celebration ID itself if it's in the names object
 * - The customLocaleId if defined
 */
const extractAllCelebrationLocaleKeys = (): Set<string> => {
  const allKeys = new Set<string>();
  const devLocale = { id: 'dev' };

  for (const CalendarDefClass of Object.values(calendarDefinitions)) {
    const isGRC = CalendarDefClass.name === GeneralRoman.name;
    const config = isGRC
      ? new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale)
      : new RomcalConfig({ scope: 'liturgical' }, Martyrology.catalog, devLocale, CalendarDefClass);

    config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());

    for (const def of Object.values(config.liturgicalDayDef)) {
      // The i18nDef typically starts with 'names:' for celebration names
      if (def.i18nDef && def.i18nDef[0]?.startsWith('names:')) {
        const nameKey = def.i18nDef[0].replace('names:', '');
        allKeys.add(nameKey);
      }

      // Check for customLocaleId in inputs
      for (const input of def.input) {
        if (input.customLocaleId) {
          allKeys.add(input.customLocaleId);
        }
      }
    }
  }

  return allKeys;
};

/**
 * Get the inputs from a calendar class.
 */
const getCalendarInputs = (CalendarClass: CalendarDefInstance): Inputs => {
  const instance = new (CalendarClass as unknown as new (cfg: unknown) => { inputs?: Inputs })({
    calendarsDef: [],
    liturgicalDayDef: {},
  });
  return instance.inputs || {};
};

/**
 * Get the parent calendars from a calendar class.
 */
const getParentCalendars = (CalendarClass: CalendarDefInstance): CalendarDefInstance[] => {
  const proto = (
    CalendarClass as unknown as {
      prototype?: { constructor?: { prototype?: { ParentCalendars?: CalendarDefInstance[] } } };
    }
  ).prototype;
  return proto?.constructor?.prototype?.ParentCalendars || [];
};

/**
 * Build the full inheritance chain for a calendar (from most specific to GeneralRoman).
 * Returns an array of calendar classes, starting with the current calendar.
 */
const buildInheritanceChain = (CalendarClass: CalendarDefInstance): CalendarDefInstance[] => {
  const chain: CalendarDefInstance[] = [CalendarClass];

  if (CalendarClass === GeneralRoman) {
    return chain;
  }

  const parents = getParentCalendars(CalendarClass);

  if (parents.length === 0) {
    // No explicit parents means implicit inheritance from GeneralRoman
    chain.push(GeneralRoman);
  } else {
    // Traverse parent chain
    for (const parent of parents) {
      chain.push(...buildInheritanceChain(parent));
    }
    // Ensure GeneralRoman is at the end if not already included
    if (!chain.includes(GeneralRoman)) {
      chain.push(GeneralRoman);
    }
  }

  return chain;
};

/**
 * Find the dateDef for a celebration ID by traversing the inheritance chain.
 * Continues searching up the chain even if an entry exists without dateDef.
 */
const findDateDefInChain = (celebrationId: string, chain: CalendarDefInstance[]): DateDef | undefined => {
  for (const CalendarClass of chain) {
    const inputs = getCalendarInputs(CalendarClass);
    const input = inputs[celebrationId];

    if (input) {
      // Handle both single input and array of inputs
      const inputObj = Array.isArray(input) ? input[0] : input;
      if (inputObj.dateDef) {
        return inputObj.dateDef as DateDef;
      }
      // Continue searching - entry exists but has no dateDef (only dateExceptions, etc.)
    }
  }
  return undefined;
};

/**
 * Format a DateDef into a human-readable string.
 */
const formatDateDef = (dateDef: DateDef | undefined): string => {
  if (!dateDef) return 'unknown';

  // Fixed date: month and date specified
  if ('month' in dateDef && 'date' in dateDef) {
    return `${MONTH_NAMES[dateDef.month - 1]} ${dateDef.date}`;
  }

  // Fixed date with nthWeekInMonth
  if ('month' in dateDef && 'nthWeekInMonth' in dateDef) {
    const ordinal = ['1st', '2nd', '3rd', '4th', '5th'][dateDef.nthWeekInMonth! - 1] || `${dateDef.nthWeekInMonth}th`;
    return `${ordinal} week of ${MONTH_NAMES[dateDef.month - 1]}`;
  }

  // Fixed date with lastDayOfWeekInMonth
  if ('month' in dateDef && 'lastDayOfWeekInMonth' in dateDef) {
    return `last week of ${MONTH_NAMES[dateDef.month - 1]}`;
  }

  // Movable feast (dateFn-based)
  if ('dateFn' in dateDef) {
    // Check if this dateFn maps to a fixed date
    const fixedDate = FIXED_DATE_FN_MAP[dateDef.dateFn];
    if (fixedDate) {
      return `${MONTH_NAMES[fixedDate.month - 1]} ${fixedDate.date}`;
    }

    let result = dateDef.dateFn;
    if ('addDay' in dateDef && dateDef.addDay) {
      result += ` +${dateDef.addDay} days`;
    }
    if ('subtractDay' in dateDef && dateDef.subtractDay) {
      result += ` -${dateDef.subtractDay} days`;
    }
    return result;
  }

  return 'unknown';
};

/**
 * Get a sortable date value from a DateDef.
 * Fixed dates return month * 100 + date (e.g., Jan 15 = 115, Dec 25 = 1225)
 * Movable dates (dateFn-based) return a large number so they sort after fixed dates.
 */
const getDateSortValue = (dateDef: DateDef | undefined): number => {
  if (!dateDef) return 99999;

  // Fixed date: month and date specified
  if ('month' in dateDef && 'date' in dateDef) {
    return dateDef.month * 100 + dateDef.date;
  }

  // Fixed date with nthWeekInMonth (e.g., first Monday of September)
  // Use day 1 of that week range as the sort value
  if ('month' in dateDef && 'nthWeekInMonth' in dateDef) {
    // nthWeekInMonth=1 means days 1-7, so use day 1 + (nthWeek-1)*7
    const approximateDay = 1 + ((dateDef.nthWeekInMonth ?? 1) - 1) * 7;
    return dateDef.month * 100 + approximateDay;
  }

  // Fixed date with lastDayOfWeekInMonth
  if ('month' in dateDef && 'lastDayOfWeekInMonth' in dateDef) {
    // Approximate: last week of month, so around day 22-28
    return dateDef.month * 100 + 22;
  }

  // Movable feast (dateFn-based)
  if ('dateFn' in dateDef) {
    // Check if this dateFn maps to a fixed date
    const fixedDate = FIXED_DATE_FN_MAP[dateDef.dateFn];
    if (fixedDate) {
      return fixedDate.month * 100 + fixedDate.date;
    }

    // True movable feasts (Easter-dependent) sort after all fixed dates
    const addDay = 'addDay' in dateDef ? (dateDef.addDay ?? 0) : 0;
    const subtractDay = 'subtractDay' in dateDef ? (dateDef.subtractDay ?? 0) : 0;
    return 90000 + addDay - subtractDay;
  }

  return 99999;
};

type SortingIssue = {
  key: string;
  keyDate: string;
  prevKey: string;
  prevKeyDate: string;
};

/**
 * Check if a calendar's inputs are sorted chronologically.
 * Uses inheritance chain to resolve dates.
 */
const checkCalendarSorting = (CalendarClass: CalendarDefInstance): SortingIssue[] => {
  const inputs = getCalendarInputs(CalendarClass);
  const inputKeys = Object.keys(inputs);

  if (inputKeys.length === 0) {
    return [];
  }

  const chain = buildInheritanceChain(CalendarClass);
  const issues: SortingIssue[] = [];

  let prevSortValue = -Infinity;
  let prevKey = '';
  let prevDateDef: DateDef | undefined;

  for (const key of inputKeys) {
    const dateDef = findDateDefInChain(key, chain);
    const sortValue = getDateSortValue(dateDef);

    // Allow same date (multiple celebrations on same day)
    if (sortValue < prevSortValue) {
      issues.push({
        key,
        keyDate: formatDateDef(dateDef),
        prevKey,
        prevKeyDate: formatDateDef(prevDateDef),
      });
    }

    prevSortValue = sortValue;
    prevKey = key;
    prevDateDef = dateDef;
  }

  return issues;
};

describe('Calendar Data Validation', () => {
  describe('All celebration keys used in calendars must exist in en.ts names', () => {
    const allCelebrationKeys = extractAllCelebrationLocaleKeys();
    const enNamesKeys = Object.keys(locales.En.names ?? {});
    const missingKeys = findMissingInArray(allCelebrationKeys, enNamesKeys);

    it('should have all celebration names in en.ts', () => {
      expect(missingKeys).toEqual([]);
    });
  });

  describe('Calendar celebrations should be sorted chronologically', () => {
    for (const [calendarName, CalendarDefClass] of Object.entries(calendarDefinitions)) {
      const inputs = getCalendarInputs(CalendarDefClass);

      // Skip calendars with no inputs
      if (Object.keys(inputs).length === 0) {
        continue;
      }

      it(`${calendarName} celebrations should be sorted chronologically`, () => {
        expect(checkCalendarSorting(CalendarDefClass)).toEqual([]);
      });
    }
  });
});
