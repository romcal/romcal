export type EasterDate = {
  year: number;
  month: number;
  day: number;
};

const GREGORIAN_EPOCH = 1721425.5;

/**
 * This algorithm is based on the algorithm of Oudin (1940) and quoted in
 * "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
 * Seidelmann, editor.
 *
 * @param year The year on which to check when Easter falls (integer)
 */
export const calculateGregorianEasterDate = (year: number): EasterDate => {
  const Y = year;
  const C = Math.floor(Y / 100);
  const N = Y - 19 * Math.floor(Y / 19);
  const K = Math.floor((C - 17) / 25);
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;

  I -= 30 * Math.floor(I / 30);
  I -= Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));

  let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J -= 7 * Math.floor(J / 7);

  const L = I - J;
  const M = 3 + Math.floor((L + 40) / 44);
  const D = L + 28 - 31 * Math.floor(M / 4);

  return { year: Y, month: M, day: D };
};

const mod = (a: number, b: number): number => {
  return a - b * Math.floor(a / b);
};

/**
 * Is a given year in the Gregorian calendar a leap year?
 *
 * @param {Number} year Year
 * @returns true if the given year is a leap year
 */
export const isLeapGregorianYear = (year: number): boolean => {
  return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
};

const leapDay = (year: number, month: number): number => {
  const leapOffset = isLeapGregorianYear(year) ? -1 : -2;
  return month <= 2 ? 0 : leapOffset;
};

export const gregorianToJulianDay = (year: number, month: number, day: number): number => {
  return (
    GREGORIAN_EPOCH -
    1 +
    365 * (year - 1) +
    Math.floor((year - 1) / 4) +
    -Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400) +
    Math.floor((367 * month - 362) / 12 + leapDay(year, month) + day)
  );
};

/**
 * Calculates Julian day number from Julian calendar date.
 *
 * @param {Date} date Julian calendar date
 * @returns Julian day number
 */
export const julianToJulianDay = (date: Date): number => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  const day = date.getDate();

  // Adjust negative common era years to the zero-based notation we use.
  if (year < 1) year += 1;

  // Algorithm as given in Meeus, Astronomical Algorithms.
  if (month <= 2) {
    year -= 1;
    month += 12;
  }

  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day - 1524.5;
};

/**
 * Calculates Gregorian calendar date from Julian day.
 *
 * @param {Number} julianDay Julian day
 * @returns Gregorian calendar date
 */
export const julianDayToGregorian = (julianDay: number): Date => {
  const wjd = Math.floor(julianDay - 0.5) + 0.5;
  const depoch = wjd - GREGORIAN_EPOCH;
  const quadricent = Math.floor(depoch / 146097);
  const dqc = mod(depoch, 146097);
  const cent = Math.floor(dqc / 36524);
  const dcent = mod(dqc, 36524);
  const quad = Math.floor(dcent / 1461);
  const dquad = mod(dcent, 1461);
  const yindex = Math.floor(dquad / 365);

  let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
  if (!(cent === 4 || yindex === 4)) {
    year += 1;
  }

  const yearday = wjd - gregorianToJulianDay(year, 1, 1);
  const leapdayOffset = isLeapGregorianYear(year) ? 1 : 2;
  const leapadj = wjd < gregorianToJulianDay(year, 3, 1) ? 0 : leapdayOffset;
  const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
  const day = wjd - gregorianToJulianDay(year, month, 1) + 1;

  return new Date(Date.UTC(year, month - 1, day));
};

/**
 * Converts date in Julian calendar to a date in Gregorian calendar.
 *
 * @param {Date} date Julian calendar date.
 * @returns Gregorian calendar date.
 */
export const julianToGregorian = (date: Date): Date => {
  return julianDayToGregorian(julianToJulianDay(date));
};

export const calculateJulianEasterDate = (year: number): Date => {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;

  return new Date(Date.UTC(year, month - 1, day));
};

/**
 * Calculate the Julian Easter date to a date in the Gregorian calendar.
 *
 * Calculation is performed according to Meeus's Julian algorithm
 * and converts it to Gregorian calendar.
 * @see {@link https://en.wikipedia.org/wiki/Date_of_Easter#Meeus's_Julian_algorithm}
 * @param year
 */
export const calculateJulianEasterDateToGregorianDate = (year: number): EasterDate => {
  if (year < 326) {
    throw new Error('Easter date calculation within the Julian calendar is not valid for years before 326 AD');
  }

  const date = julianToGregorian(calculateJulianEasterDate(year));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
};
