import { calculateGregorianEasterDate } from '@internal/easter';

import type { DayOfWeek } from './types';

export interface YearAnchors {
  year: number;
  easter: Date;
  septuagesima: Date;
  sexagesima: Date;
  quinquagesima: Date;
  ashWednesday: Date;
  lent1Sunday: Date;
  passionSunday: Date;
  palmSunday: Date;
  holyThursday: Date;
  goodFriday: Date;
  holySaturday: Date;
  lowSunday: Date;
  rogationMonday: Date;
  ascension: Date;
  sundayInAscensionOctave: Date;
  pentecostVigil: Date;
  pentecost: Date;
  trinity: Date;
  corpusChristi: Date;
  sacredHeart: Date;
  advent1Sunday: Date;
}

function utc(year: number, monthIdx0: number, day: number): Date {
  return new Date(Date.UTC(year, monthIdx0, day));
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}

function easterDate(year: number): Date {
  const { month, day } = calculateGregorianEasterDate(year);
  return utc(year, month - 1, day);
}

/**
 * First Sunday of Advent = Sunday in the range [Nov 27, Dec 3] — i.e.
 * the Sunday nearest to St Andrew (Nov 30), favouring the earlier side
 * when Nov 30 itself is a Sunday, Monday or Tuesday.
 */
function advent1SundayFor(year: number): Date {
  const andrew = utc(year, 10, 30); // Nov 30
  const andrewDow = andrew.getUTCDay(); // 0-6
  const offsetToPrevOrCurSunday = andrewDow === 0 ? 0 : -andrewDow;
  const sundayOnOrBeforeAndrew = addDays(andrew, offsetToPrevOrCurSunday);
  return addDays(sundayOnOrBeforeAndrew, andrewDow > 3 ? 7 : 0);
}

export function dayOfWeek(date: Date): DayOfWeek {
  return date.getUTCDay() as DayOfWeek;
}

export function isoDate(date: Date): string {
  const y = date.getUTCFullYear().toString().padStart(4, '0');
  const m = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const d = date.getUTCDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function computeAnchors(year: number): YearAnchors {
  const easter = easterDate(year);
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

export { addDays };
