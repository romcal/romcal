/**
 * For a given date, get the ISO week number
 *
 * @remarks This function was sourced from [StackOverflow](https://stackoverflow.com/a/6117889/3408342).
 *
 * @param    date - Date which should be considered
 * @returns  ISO week number of the specified date
 */
export const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  return Math.ceil(
    ((d.getTime() - new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).getTime()) / 864e5 + 1) / 7,
  );
};
