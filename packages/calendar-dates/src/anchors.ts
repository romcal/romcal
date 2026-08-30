import { calculateGregorianEasterDate, calculateJulianEasterDateToGregorianDate } from '@internal/easter';
import { calculateLunarNewYear } from '@internal/lunar-new-year';

import { addDays, getUtcDate, subtractsDays } from './primitives';

/**
 * The points in the year that every Roman Rite calendar is measured from.
 *
 * Each anchor is a pure `(year: number) => Date`. Nothing here reads configuration,
 * because anything configurable is by definition rite-shaped: Epiphany's
 * movable-Sunday rule, the Ascension and Corpus Christi transfers, and the
 * `temporalOverrides` exceptions all stay with the rite, applied on top of the
 * dates computed here.
 */

/** Which Easter computation to use. Both rites support either. */
export type EasterCalculationType = 'gregorian' | 'julian';

/**
 * Most anchors are an offset from Easter, so the computation is memoised rather
 * than repeated once per anchor per year.
 */
const easterCache: Record<string, Date> = {};

export const easterSunday = (year: number, easterCalculationType: EasterCalculationType = 'gregorian'): Date => {
  const id = `${year}_${easterCalculationType}`;
  if (easterCache[id]) return easterCache[id];

  const { day, month } =
    easterCalculationType === 'gregorian'
      ? calculateGregorianEasterDate(year)
      : calculateJulianEasterDateToGregorianDate(year);

  return (easterCache[id] = getUtcDate(year, month, day));
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
 * FIXED SOLEMNITIES AND FEASTS
 */

export const maryMotherOfGod = (year: number): Date => getUtcDate(year, 1, 1);

export const presentationOfTheLord = (year: number): Date => getUtcDate(year, 2, 2);

export const nativityOfJohnTheBaptist = (year: number): Date => getUtcDate(year, 6, 24);

export const peterAndPaulApostles = (year: number): Date => getUtcDate(year, 6, 29);

export const transfiguration = (year: number): Date => getUtcDate(year, 8, 6);

export const assumption = (year: number): Date => getUtcDate(year, 8, 15);

export const exaltationOfTheHolyCross = (year: number): Date => getUtcDate(year, 9, 14);

export const allSaints = (year: number): Date => getUtcDate(year, 11, 1);

/**
 * March 25, moved to the Monday after the Octave of Easter when it would otherwise
 * fall in Holy Week or the Octave.
 */
export const annunciation = (year: number, type?: EasterCalculationType): Date => {
  const date = getUtcDate(year, 3, 25);
  const easter = easterSunday(year, type);
  const octaveEnds = addDays(easter, 7);

  if (date.getTime() >= subtractsDays(easter, 7).getTime() && date.getTime() <= octaveEnds.getTime()) {
    return addDays(octaveEnds, 1);
  }

  return date;
};

/** December 8, moved to the following Monday when it falls on a Sunday. */
export const immaculateConceptionOfMary = (year: number): Date => {
  const date = getUtcDate(year, 12, 8);
  return date.getUTCDay() === 0 ? addDays(date, 1) : date;
};

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
