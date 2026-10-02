import { calculateGregorianEasterDate, calculateJulianEasterDateToGregorianDate } from '@internal/easter';
import { calculateLunarNewYear } from '@internal/lunar-new-year';

import { addDays, getUtcDate, subtractsDays } from './primitives';

/**
 * The points in the year that every Roman Rite calendar is measured from.
 *
 * Anchors are pure and configuration-free: nothing here reads a rite or a
 * calendar option. Most take only the year. `easterSunday` and the Easter-derived
 * anchors also take a calculation type, and `lunarNewYear` takes a UTC offset,
 * because those parameters choose a computation rather than a rubric.
 *
 * Anything configurable stays with the rite, applied on top of the dates
 * computed here: Epiphany's movable-Sunday rule, the Ascension and Corpus
 * Christi transfers, and the `temporalOverrides` exceptions.
 */

/** Which Easter computation to use. Both rites support either. */
export type EasterCalculationType = 'gregorian' | 'julian';

/**
 * Most anchors are an offset from Easter, so the computation is memoised rather
 * than repeated once per anchor per year. The cache stores epoch millis so a
 * caller mutating a returned Date cannot poison later lookups.
 */
const easterCache: Record<string, number> = {};

export const easterSunday = (year: number, easterCalculationType: EasterCalculationType = 'gregorian'): Date => {
  const id = `${year}_${easterCalculationType}`;
  if (easterCache[id] !== undefined) return new Date(easterCache[id]);

  const { day, month } =
    easterCalculationType === 'gregorian'
      ? calculateGregorianEasterDate(year)
      : calculateJulianEasterDateToGregorianDate(year);

  easterCache[id] = getUtcDate(year, month, day).getTime();
  return new Date(easterCache[id]);
};

/**
 * ADVENT AND CHRISTMAS
 */

/** In the Roman Rite, Christmas always falls on December 25. */
export const christmas = (year: number): Date => getUtcDate(year, 12, 25);

/** The start of Advent depends on the day of the week Christmas falls on. */
export const firstSundayOfAdvent = (year: number): Date => {
  switch (christmas(year).getUTCDay()) {
    case 0: // Sunday
      return getUtcDate(year, 11, 27);
    case 1: // Monday
      return getUtcDate(year, 12, 3);
    case 2: // Tuesday
      return getUtcDate(year, 12, 2);
    case 3: // Wednesday
      return getUtcDate(year, 12, 1);
    case 4: // Thursday
      return getUtcDate(year, 11, 30);
    case 5: // Friday
      return getUtcDate(year, 11, 29);
    default:
      // Saturday
      return getUtcDate(year, 11, 28);
  }
};

/**
 * LENT, HOLY WEEK AND EASTER TIME
 *
 * Offsets from Easter. Which of these a rite observes, and under what name, is the
 * rite's business; where they fall is not.
 */

export const ashWednesday = (year: number, type?: EasterCalculationType): Date =>
  subtractsDays(easterSunday(year, type), 46);

export const palmSunday = (year: number, type?: EasterCalculationType): Date =>
  subtractsDays(easterSunday(year, type), 7);

export const holyThursday = (year: number, type?: EasterCalculationType): Date =>
  subtractsDays(easterSunday(year, type), 3);

export const goodFriday = (year: number, type?: EasterCalculationType): Date =>
  subtractsDays(easterSunday(year, type), 2);

export const holySaturday = (year: number, type?: EasterCalculationType): Date =>
  subtractsDays(easterSunday(year, type), 1);

export const pentecostSunday = (year: number, type?: EasterCalculationType): Date =>
  addDays(easterSunday(year, type), 49);

/**
 * STRUCTURAL FIXED DATES
 *
 * Other fixed GRC celebrations are `{ month, date }` on the rite. These two stay
 * because other calculations and date exceptions depend on them.
 */

export const maryMotherOfGod = (year: number): Date => getUtcDate(year, 1, 1);

/**
 * LUNAR NEW YEAR
 *
 * Used by the East and Southeast Asian calendars.
 *
 * @param utcOffset UTC offset for the target timezone (e.g. 8 for China/HK/Taiwan, 9 for Korea/Japan, 7 for Vietnam)
 */
export const lunarNewYear = (utcOffset: number, year: number): Date => {
  const { day, month } = calculateLunarNewYear(year, utcOffset);
  return getUtcDate(year, month, day);
};

/** The Sunday on or after Lunar New Year; the same day when it is already a Sunday. */
export const sundayOnOrAfterLunarNewYear = (utcOffset: number, year: number): Date => {
  const lny = lunarNewYear(utcOffset, year);
  const daysUntilSunday = (7 - lny.getUTCDay()) % 7;
  return addDays(lny, daysUntilSunday);
};
