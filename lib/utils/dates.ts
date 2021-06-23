import { Dayjs } from 'dayjs';

/**
 * This algorithm is based on the algorithm of Oudin (1940) and quoted in
 * "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
 * Seidelmann, editor.
 *
 * @param year The year on which to check when Easter falls (integer)
 */
export const computeGregorianEasterDate = (year: number): Record<string, number> => {
  const Y = year;
  const C = Math.floor(Y / 100);
  const N = Y - 19 * Math.floor(Y / 19);
  const K = Math.floor((C - 17) / 25);
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;

  I = I - 30 * Math.floor(I / 30);
  I =
    I -
    Math.floor(I / 28) *
      (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));

  let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);

  const L = I - J;
  const M = 3 + Math.floor((L + 40) / 44);
  const D = L + 28 - 31 * Math.floor(M / 4);

  return { year: Y, month: M, day: D };
};

/**
 * Returns a range of dates between a given start and end date included
 * @param start The start date
 * @param end The end date
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (start: Dayjs, end: Dayjs): Dayjs[] => {
  const days = end.diff(start, 'day');
  const range: Dayjs[] = [];
  Array.from(new Array(days + 1), (_x, i) => {
    range.push(start.add(i, 'day'));
  });
  return range;
};
