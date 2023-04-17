import { getUtcDate } from './getUtcDate.util';
import { isValidDate } from './isValidDate.util';

export const getUtcDateFromString = (dateStr: string): Date => {
  const [year, month, date] = dateStr.split('-').map((n) => parseInt(n, 10));

  if (isNaN(year) || isNaN(month) || isNaN(date)) {
    throw new Error('Invalid date string');
  }

  const utcDate = getUtcDate(year, month, date);

  if (!isValidDate(utcDate)) {
    throw new Error('Invalid date string');
  }

  return getUtcDate(year, month, date);
};
