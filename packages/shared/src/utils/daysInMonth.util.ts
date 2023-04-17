/**
 * Get total number of days in a particular month
 *
 * @param      {Date}    date    Date of the month that should be considered
 * @return     {number}  Total number of dates in the particular month
 */
export const daysInMonth = (date: Date): number => {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
};
