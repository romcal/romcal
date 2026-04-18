import { calculateGregorianEasterDate, calculateJulianEasterDateToGregorianDate } from '@internal/easter';

import { addDays, utc } from '../utils/dates';

/**
 * All liturgical "anchor" dates for a given civil year. Everything
 * downstream (lectionary weeks, fasts, vigils, octaves) can be
 * derived by counting days from one of these anchors, so the two
 * rite packages share exactly one source of truth for the math.
 *
 * Dates are UTC midnight `Date` objects.
 */
export interface YearAnchors {
  year: number;
  /** Easter Sunday. */
  easter: Date;
  /** 9th Sunday before Easter. 1962-only pre-Lenten season. */
  septuagesima: Date;
  /** 8th Sunday before Easter. */
  sexagesima: Date;
  /** 7th Sunday before Easter. */
  quinquagesima: Date;
  /** 46 days before Easter. Start of Lent in both rites. */
  ashWednesday: Date;
  /** 1st Sunday of Lent. */
  lent1Sunday: Date;
  /** 2 weeks before Easter. 1962-only. */
  passionSunday: Date;
  /** Sunday before Easter. Start of Holy Week. */
  palmSunday: Date;
  /** Thursday of Holy Week. */
  holyThursday: Date;
  /** Friday of Holy Week. */
  goodFriday: Date;
  /** Saturday of Holy Week (Easter Vigil). */
  holySaturday: Date;
  /** 1st Sunday after Easter (a.k.a. Divine Mercy Sunday in 1969, Dominica in Albis in 1962). */
  lowSunday: Date;
  /** Monday of Rogation (36 days after Easter). 1962-only. */
  rogationMonday: Date;
  /** 39 days after Easter. */
  ascension: Date;
  /** Sunday within the Octave of the Ascension (42 days after Easter). 1962-only. */
  sundayInAscensionOctave: Date;
  /** Vigil of Pentecost (48 days after Easter). */
  pentecostVigil: Date;
  /** Pentecost Sunday (49 days after Easter). */
  pentecost: Date;
  /** Trinity Sunday (56 days after Easter). */
  trinity: Date;
  /** Corpus Christi (60 days after Easter, Thursday). */
  corpusChristi: Date;
  /** Sacred Heart of Jesus (68 days after Easter, Friday). */
  sacredHeart: Date;
  /** 1st Sunday of Advent (Sunday on or after Nov 27). */
  advent1Sunday: Date;
}

export type EasterCalculation = 'gregorian' | 'julian';

export interface ComputeAnchorsOptions {
  /**
   * Which Easter computation to use. Both rites default to Gregorian;
   * Eastern Catholic calendars can opt in to Julian.
   */
  easterCalculation?: EasterCalculation;
}

function easterFor(year: number, method: EasterCalculation): Date {
  const easter =
    method === 'julian' ? calculateJulianEasterDateToGregorianDate(year) : calculateGregorianEasterDate(year);
  return utc(year, easter.month - 1, easter.day);
}

/**
 * First Sunday of Advent = Sunday in the range [Nov 27, Dec 3] — i.e.
 * the Sunday nearest to St Andrew (Nov 30), favouring the earlier side
 * when Nov 30 itself is a Sunday, Monday or Tuesday.
 */
function advent1SundayFor(year: number): Date {
  const andrew = utc(year, 10, 30);
  const andrewDow = andrew.getUTCDay();
  const offsetToPrevOrCurSunday = andrewDow === 0 ? 0 : -andrewDow;
  const sundayOnOrBeforeAndrew = addDays(andrew, offsetToPrevOrCurSunday);
  return addDays(sundayOnOrBeforeAndrew, andrewDow > 3 ? 7 : 0);
}

/**
 * Compute every anchor date for `year`. Pure function — cacheable by
 * year at the call site if the caller wants to memoise.
 */
export function computeAnchors(year: number, options: ComputeAnchorsOptions = {}): YearAnchors {
  const easter = easterFor(year, options.easterCalculation ?? 'gregorian');
  return {
    year,
    easter,
    septuagesima: addDays(easter, -63),
    sexagesima: addDays(easter, -56),
    quinquagesima: addDays(easter, -49),
    ashWednesday: addDays(easter, -46),
    lent1Sunday: addDays(easter, -42),
    passionSunday: addDays(easter, -14),
    palmSunday: addDays(easter, -7),
    holyThursday: addDays(easter, -3),
    goodFriday: addDays(easter, -2),
    holySaturday: addDays(easter, -1),
    lowSunday: addDays(easter, 7),
    rogationMonday: addDays(easter, 36),
    ascension: addDays(easter, 39),
    sundayInAscensionOctave: addDays(easter, 42),
    pentecostVigil: addDays(easter, 48),
    pentecost: addDays(easter, 49),
    trinity: addDays(easter, 56),
    corpusChristi: addDays(easter, 60),
    sacredHeart: addDays(easter, 68),
    advent1Sunday: advent1SundayFor(year),
  };
}
