/**
 * Lunar New Year date computation based on:
 * Jean Meeus, "Astronomical Algorithms", Willmann-Bell, 1991.
 * https://archive.org/details/astronomicalalgorithmsjeanmeeus1991
 */

export type LunarNewYearDate = { year: number; month: number; day: number };

/** Convert degrees to radians and return the sine */
const sin = (degrees: number): number => Math.sin((degrees * Math.PI) / 180);

/** Convert degrees to radians and return the cosine */
const cos = (degrees: number): number => Math.cos((degrees * Math.PI) / 180);

/** Convert a JDE to a Julian Day Number (integer date identifier) at the given UTC offset. */
const jdeToJulianDayNumber = (jde: number, utcOffset: number): number => {
  return Math.floor(jde + utcOffset / 24 + 0.5);
};

/**
 * Convert a Julian Ephemeris Day to a Gregorian calendar date at a given UTC offset.
 */
const jdeToDate = (jde: number, utcOffset: number): LunarNewYearDate => {
  // Apply UTC offset: shift JDE by the offset in days
  const adjustedJDE = jde + utcOffset / 24;

  // Algorithm to convert JDE to Gregorian calendar date
  // Meeus, Ch. 7
  const z = Math.floor(adjustedJDE + 0.5);

  let A: number;
  if (z < 2299161) {
    A = z;
  } else {
    const alpha = Math.floor((z - 1867216.25) / 36524.25);
    A = z + 1 + alpha - Math.floor(alpha / 4);
  }

  const B = A + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);

  const day = B - D - Math.floor(30.6001 * E);
  const month = E < 14 ? E - 1 : E - 13;
  const year = month > 2 ? C - 4716 : C - 4715;

  return { year, month, day };
};

/**
 * Compute the Julian Ephemeris Day of the December solstice for a given year.
 * Meeus, Ch. 26.
 */
const winterSolsticeJDE = (year: number): number => {
  const Y = (year - 2000) / 1000;

  // JDE₀ polynomial for December solstice (Table 27.A)
  const JDE0 = 2451900.05952 + 365242.74049 * Y - 0.06223 * Y * Y - 0.00823 * Y * Y * Y + 0.00032 * Y * Y * Y * Y;

  const T = (JDE0 - 2451545.0) / 36525;

  // Periodic correction terms (Table 27.C)
  const S =
    485 * cos(324.96 + 1934.136 * T) +
    203 * cos(337.23 + 32964.467 * T) +
    199 * cos(342.08 + 20.186 * T) +
    182 * cos(27.85 + 445267.112 * T) +
    156 * cos(73.14 + 45036.886 * T) +
    136 * cos(171.52 + 22518.443 * T) +
    77 * cos(222.54 + 65928.934 * T) +
    74 * cos(296.72 + 3034.906 * T) +
    70 * cos(243.58 + 9037.513 * T) +
    58 * cos(119.81 + 33718.147 * T) +
    52 * cos(297.17 + 150.678 * T) +
    50 * cos(21.02 + 2281.226 * T) +
    45 * cos(247.54 + 29929.562 * T) +
    44 * cos(325.15 + 31555.956 * T) +
    29 * cos(60.93 + 4443.417 * T) +
    18 * cos(155.12 + 67555.328 * T) +
    17 * cos(288.79 + 4562.452 * T) +
    16 * cos(198.04 + 62894.029 * T) +
    14 * cos(199.76 + 31436.921 * T) +
    12 * cos(95.39 + 14577.848 * T) +
    12 * cos(287.11 + 31931.756 * T) +
    12 * cos(320.81 + 34777.259 * T) +
    9 * cos(227.73 + 1222.114 * T) +
    8 * cos(15.45 + 16859.074 * T);

  return JDE0 + S * 0.00001;
};

/**
 * Compute the JDE of the new moon for lunation cycle k.
 * k = 0 corresponds to the new moon of 2000 Jan 6.
 * Meeus, Ch. 47.
 */
const newMoonJDE = (k: number): number => {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  // Mean phase JDE (Eq. 49.1)
  let JDE = 2451550.09766 + 29.530588861 * k + 0.00015437 * T2 - 0.00000015 * T3 + 0.00000000073 * T4;

  // Eccentricity correction factor
  const E = 1 - 0.002516 * T - 0.0000074 * T2;

  // Sun's mean anomaly (Eq. 49.4)
  const M = 2.5534 + 29.1053567 * k - 0.0000014 * T2 - 0.00000011 * T3;

  // Moon's mean anomaly (Eq. 49.5)
  const Mp = 201.5643 + 385.81693528 * k + 0.0107582 * T2 + 0.00001238 * T3 - 0.000000058 * T4;

  // Moon's argument of latitude (Eq. 49.6)
  const F = 160.7108 + 390.67050284 * k - 0.0016118 * T2 - 0.00000227 * T3 + 0.000000011 * T4;

  // Longitude of ascending node (Eq. 49.7)
  const Omega = 124.7746 - 1.56375588 * k + 0.0020672 * T2 + 0.00000215 * T3;

  // Correction terms for new moon (Table 49.A)
  const correction =
    -0.4072 * sin(Mp) +
    0.17241 * E * sin(M) +
    0.01608 * sin(2 * Mp) +
    0.01039 * sin(2 * F) +
    0.00739 * E * sin(Mp - M) +
    -0.00514 * E * sin(Mp + M) +
    0.00208 * E * E * sin(2 * M) +
    -0.00111 * sin(Mp - 2 * F) +
    -0.00057 * sin(Mp + 2 * F) +
    0.00056 * E * sin(2 * Mp + M) +
    -0.00042 * sin(3 * Mp) +
    0.00042 * E * sin(M + 2 * F) +
    0.00038 * E * sin(M - 2 * F) +
    -0.00024 * E * sin(2 * Mp - M) +
    -0.00017 * sin(Omega) +
    -0.00007 * sin(Mp + 2 * M) +
    0.00004 * sin(2 * Mp - 2 * F) +
    0.00004 * sin(3 * M) +
    0.00003 * sin(Mp + M - 2 * F) +
    0.00003 * sin(2 * Mp + 2 * F) +
    -0.00003 * sin(Mp + M + 2 * F) +
    0.00003 * sin(Mp - M + 2 * F) +
    -0.00002 * sin(Mp - M - 2 * F) +
    -0.00002 * sin(3 * Mp + M) +
    0.00002 * sin(4 * Mp);

  JDE += correction;

  // Additional corrections (Table 49.B — planetary arguments)
  const A1 = 299.77 + 132.8475848 * k - 0.009173 * T2;
  const A2 = 251.88 + 92.517136 * k;
  const A3 = 251.83 + 360.58068 * k;
  const A4 = 349.42 + 450.37168 * k;
  const A5 = 84.66 + 966.20036 * k;
  const A6 = 141.74 + 1361.55178 * k;
  const A7 = 207.14 + 1759.87848 * k;
  const A8 = 154.84 + 7.30686 * k;
  const A9 = 34.52 + 27.261239 * k;
  const A10 = 207.19 + 1154.8622 * k;
  const A11 = 291.34 + 0.09133 * k;
  const A12 = 161.72 + 31.85958 * k;
  const A13 = 239.56 + 25.13124 * k;
  const A14 = 331.55 + 481.75148 * k;

  JDE +=
    0.000325 * sin(A1) +
    0.000165 * sin(A2) +
    0.000164 * sin(A3) +
    0.000126 * sin(A4) +
    0.00011 * sin(A5) +
    0.000062 * sin(A6) +
    0.00006 * sin(A7) +
    0.000056 * sin(A8) +
    0.000047 * sin(A9) +
    0.000042 * sin(A10) +
    0.00004 * sin(A11) +
    0.000037 * sin(A12) +
    0.000035 * sin(A13) +
    0.000023 * sin(A14);

  return JDE;
};

/**
 * Calculate the date of Lunar New Year for a given Gregorian year.
 *
 * Lunar New Year falls on the 2nd new moon after the December solstice
 * of the previous year. Uses Jean Meeus's astronomical algorithms
 * ("Astronomical Algorithms", 2nd ed.) for solstice and new moon computation.
 *
 * @param year The Gregorian year of the Lunar New Year
 * @param utcOffset UTC offset in hours for the target timezone (e.g. 8 for China/HK/Taiwan, 9 for Korea/Japan, 7 for Vietnam)
 */
export const calculateLunarNewYear = (year: number, utcOffset: number): LunarNewYearDate => {
  // 1. Compute winter solstice JDE for December of (year - 1)
  const solsticeJDE = winterSolsticeJDE(year - 1);
  const solsticeDay = jdeToJulianDayNumber(solsticeJDE, utcOffset);

  // 2. Estimate lunation number k near the solstice
  const decimalYear = year - 1 + 11.5 / 12; // approximate December of previous year
  let k = Math.floor((decimalYear - 2000) * 12.3685);

  // 3. Find the new moon that starts month 11 (the month containing the solstice).
  //    In the Chinese calendar, month 11 always contains the winter solstice.
  //    We find the last new moon whose local date <= the solstice local date.
  while (jdeToJulianDayNumber(newMoonJDE(k + 1), utcOffset) <= solsticeDay) {
    k++;
  }

  // 4. CNY is the 2nd new moon after the month-11 new moon
  const lnyJDE = newMoonJDE(k + 2);

  // 5. Convert to date at the given UTC offset
  return jdeToDate(lnyJDE, utcOffset);
};
