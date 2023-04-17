import { addDays } from './addDays.util';
import { subtractsDays } from './subtractsDays.util';
import { dateDifference } from './utcDateDifference.util';

/**
 * Returns a range of dates between a given start and end date included
 * @param start The start date
 * @param end The end date
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (start: Date, end: Date): Date[] => {
  const days = dateDifference(start, end, false);
  const range: Date[] = [];
  Array.from(new Array(Math.abs(days) + 1), (_x, i) => {
    range.push(days < 0 ? subtractsDays(start, i) : addDays(start, i));
  });
  return range;
};
