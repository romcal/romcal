/**
 * Determines if a given date exists within a range of dates.
 * @param range The range to search against
 * @param date The date to search for in the range
 * @returns `true` if the date exists in the range or false if otherwise
 */
export const arrayContainsDate = (range: Date[], date: Date): boolean => {
  return range.map((d) => d.toISOString()).includes(date.toISOString());
};
