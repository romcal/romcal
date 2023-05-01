/**
 * Day of the week.
 */
export enum DayOfWeek {
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
}

export const DAYS_OF_WEEK = [
  DayOfWeek.Sunday,
  DayOfWeek.Monday,
  DayOfWeek.Tuesday,
  DayOfWeek.Wednesday,
  DayOfWeek.Thursday,
  DayOfWeek.Friday,
  DayOfWeek.Saturday,
] as const;

/**
 * Day of the week, starting from 0 to 6 (0 = Sunday, 6 = Saturday).
 * @pattern ^[0-6]$
 */
export type DayOfWeekIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
