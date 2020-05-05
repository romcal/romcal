import dayjs from 'dayjs';
import { RangeOfDaysOptions } from '@romcal/types/range-of-day-options.type';
import { DayOfWeek } from '@romcal/enums/day-of-week.enum';

const rangeOfDayDefaultOptions: Required<RangeOfDaysOptions> = {
  step: 1,
  exclude: [],
};

/**
 * Determines if a given date exists within a range of dates.
 * @param range The range to search against
 * @param date The date to search for in the range
 * @returns `true` if the date exists in tha range or false if otherwise
 */
export const rangeContainsDate = (range: Array<dayjs.Dayjs>, date: dayjs.Dayjs): boolean => {
  return range.map(date => date.toISOString()).includes(date.toISOString());
};

/**
 * Returns a range of dates between a given start and end date with support for excluding
 * dates from the range.
 * @param start The start date
 * @param end The end date
 * @param exclude Dates that should be excluded
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (
  start: dayjs.Dayjs,
  end: dayjs.Dayjs,
  options: RangeOfDaysOptions = rangeOfDayDefaultOptions,
): Array<dayjs.Dayjs> => {
  const days = end.diff(start, 'day');
  const range: Array<dayjs.Dayjs> = [];
  Array.from(new Array(days + 1), (x, i) => {
    const rangeDate = start.add(i * (options.step ?? rangeOfDayDefaultOptions.step), 'day');
    if (rangeDate.isAfter(end)) {
      return range;
    }
    if (!rangeContainsDate(options.exclude ?? rangeOfDayDefaultOptions.exclude, rangeDate)) {
      range.push(rangeDate);
    }
  });
  return range;
};

/**
 * Given a range of dates, extract a range of dates that matches the given day of week.
 *
 * @param range The range to operate on
 * @param dayOfWeek The day of week to look for (Day of Week (Sunday as 0, Saturday as 6)
 */
export const eachDayOfWeekInRange = (range: Array<dayjs.Dayjs>, dayOfWeek: DayOfWeek): Array<dayjs.Dayjs> => {
  const daysInInterval: Array<dayjs.Dayjs> = [];
  range.forEach(date => {
    if (date.day() === dayOfWeek) {
      daysInInterval.push(date);
    }
  });
  return daysInInterval;
};
