/**
 * Celebration cycle that can be used as metadata for celebrations.
 */
export enum CelebrationsCycle {
  TEMPORALE = 'TEMPORALE',
  SANCTORALE = 'SANCTORALE',
}

/**
 * Sundays cycle that can be used as metadata for celebrations.
 */
export enum SundaysCycle {
  YEAR_A = 'YEAR_A',
  YEAR_B = 'YEAR_B',
  YEAR_C = 'YEAR_C',
}

/**
 * Weekdays cycle that can be used as metadata for celebrations.
 */
export enum WeekdaysCycle {
  YEAR_1 = 'YEAR_1',
  YEAR_2 = 'YEAR_2',
}

/**
 * Psalter weeks that can be used as metadata for celebrations.
 */
export enum PsalterWeeksCycle {
  WEEK_1 = 'WEEK_1',
  WEEK_2 = 'WEEK_2',
  WEEK_3 = 'WEEK_3',
  WEEK_4 = 'WEEK_4',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[CELEBRATION_CYCLES]]
 */
export const CELEBRATION_CYCLES = Object.keys(CelebrationsCycle).filter(
  (key) => typeof CelebrationsCycle[key as keyof typeof CelebrationsCycle] === 'string',
) as Array<keyof typeof CelebrationsCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[SUNDAY_CYCLES]]
 */
export const SUNDAY_CYCLES = Object.keys(SundaysCycle).filter(
  (key) => typeof SundaysCycle[key as keyof typeof SundaysCycle] === 'string',
) as Array<keyof typeof SundaysCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[WEEKDAY_CYCLES]]
 */
export const WEEKDAY_CYCLES = Object.keys(WeekdaysCycle).filter(
  (key) => typeof WeekdaysCycle[key as keyof typeof WeekdaysCycle] === 'string',
) as Array<keyof typeof WeekdaysCycle>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[PSALTER_WEEKS]]
 */
export const PSALTER_WEEKS = Object.keys(PsalterWeeksCycle).filter(
  (key) => typeof PsalterWeeksCycle[key as keyof typeof PsalterWeeksCycle] === 'string',
) as Array<keyof typeof PsalterWeeksCycle>;
