/**
 * UTC date arithmetic shared by every rite.
 *
 * Every date romcal produces is UTC midnight. Anything that reads a local
 * component, or lets a Date drift into local time, is a bug: the same calendar
 * must come out the same in every timezone, which is why the tests pin `TZ=UTC`.
 */

const { isNaN } = Number;

export const getUtcDate = (year: number, month: number, date: number): Date => {
  return new Date(Date.UTC(year, month - 1, date, 0, 0, 0, 0));
};

export const getUtcDateFromString = (dateStr: string): Date => {
  const [year, month, date] = dateStr.split('-').map((n) => parseInt(n, 10));
  return getUtcDate(year, month, date);
};

export const addDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() + 864e5 * days); // 864e5 = 24 * 60 * 60 * 1000
};

export const subtractsDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() - 864e5 * days);
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1?.getUTCFullYear() === date2?.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  );
};

export const dateDifference = (date1: Date, date2: Date): number => {
  return Math.abs(Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
};

export const startOfWeek = (date: Date): Date => {
  return subtractsDays(date, date.getUTCDay());
};

export const isValidDate = (maybeDate: unknown): maybeDate is Date => {
  // it is a date
  if (maybeDate && Object.prototype.toString.call(maybeDate) === '[object Date]') {
    if (isNaN((maybeDate as Date).getTime())) return false; // date is not valid
    return true; // date is valid
  }
  // not a date
  return false;
};

/**
 * Get total number of days in a particular month
 *
 * @param      {Date}    date    Date of the month that should be considered
 * @return     {number}  Total number of dates in the particular month
 */
export const daysInMonth = (date: Date): number => {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
};

/**
 * For a given date, get the ISO week number
 *
 * @remarks This function was sourced from [StackOverflow](https://stackoverflow.com/a/6117889/3408342).
 *
 * @param    date - Date which should be considered
 * @returns  ISO week number of the specified date
 */
export const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  return Math.ceil(((d.getTime() - new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).getTime()) / 864e5 + 1) / 7);
};

/**
 * Returns a range of dates between a given start and end date included
 * @param start The start date
 * @param end The end date
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (start: Date, end: Date): Date[] => {
  const days = dateDifference(start, end);
  return Array.from(new Array(days + 1), (_x, i) => {
    return addDays(start, i);
  });
};

/**
 * Determines if a given date exists within a range of dates.
 * @param range The range to search against
 * @param date The date to search for in the range
 * @returns `true` if the date exists in the range or false if otherwise
 */
export const rangeContainsDate = (range: Date[], date: Date): boolean => {
  return range.map((d) => d.toISOString()).includes(date.toISOString());
};
