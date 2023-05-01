export enum Month {
  January = 'january',
  February = 'february',
  March = 'march',
  April = 'april',
  May = 'may',
  June = 'june',
  July = 'july',
  August = 'august',
  September = 'september',
  October = 'october',
  November = 'november',
  December = 'december',
}

export const MONTHS = [
  Month.January,
  Month.February,
  Month.March,
  Month.April,
  Month.May,
  Month.June,
  Month.July,
  Month.August,
  Month.September,
  Month.October,
  Month.November,
  Month.December,
] as const;

/**
 * Month index, starting from 1 to 12.
 * @pattern ^([1-9]|1[012])$
 */
export type MonthIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
