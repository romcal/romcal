import {
  CelebrationsCycle,
  PsalterWeeksCycle,
  SundaysCycle,
  WeekdaysCycle,
} from '@romcal/constants/cycles/cycles.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[CELEBRATION_CYCLES]]
 */
export const CELEBRATIONS_CYCLE = Object.keys(CelebrationsCycle).filter(
  (key) => typeof CelebrationsCycle[key as keyof typeof CelebrationsCycle] === 'string',
) as Array<keyof typeof CelebrationsCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[SUNDAY_CYCLES]]
 */
export const SUNDAYS_CYCLE = Object.keys(SundaysCycle).filter(
  (key) => typeof SundaysCycle[key as keyof typeof SundaysCycle] === 'string',
) as Array<keyof typeof SundaysCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[WEEKDAY_CYCLES]]
 */
export const WEEKDAYS_CYCLE = Object.keys(WeekdaysCycle).filter(
  (key) => typeof WeekdaysCycle[key as keyof typeof WeekdaysCycle] === 'string',
) as Array<keyof typeof WeekdaysCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[PSALTER_WEEKS]]
 */
export const PSALTER_WEEKS = Object.keys(PsalterWeeksCycle).filter(
  (key) => typeof PsalterWeeksCycle[key as keyof typeof PsalterWeeksCycle] === 'string',
) as Array<keyof typeof PsalterWeeksCycle>;
