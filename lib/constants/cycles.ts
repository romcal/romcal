/**
 * Liturgical Day cycles that can be used as metadata for liturgical days.
 */
export const ProperCycles = {
  ProperOfTime: 'PROPER_OF_TIME',
  ProperOfSaints: 'PROPER_OF_SAINTS',
} as const;

/**
 * Sundays cycle that can be used as metadata for liturgical days.
 */
export const SundayCycles = {
  YearA: 'YEAR_A',
  YearB: 'YEAR_B',
  YearC: 'YEAR_C',
} as const;

/**
 * Weekdays cycle that can be used as metadata for liturgical days.
 */
export const WeekdayCycles = {
  Year1: 'YEAR_1',
  Year2: 'YEAR_2',
} as const;

/**
 * Psalter weeks that can be used as metadata for liturgical days.
 */
export const PsalterWeekCycles = {
  Week1: 'WEEK_1',
  Week2: 'WEEK_2',
  Week3: 'WEEK_3',
  Week4: 'WEEK_4',
} as const;

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_DAY_CYCLES]]
 */
export const PROPER_CYCLE = Object.values(ProperCycles);
export type ProperCycle = typeof PROPER_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[SUNDAY_CYCLES]]
 */
export const SUNDAYS_CYCLE = Object.values(SundayCycles);
export type SundayCycle = typeof SUNDAYS_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[WEEKDAY_CYCLES]]
 */
export const WEEKDAYS_CYCLE = Object.values(WeekdayCycles);
export type WeekdayCycle = typeof WEEKDAYS_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[PSALTER_WEEKS]]
 */
export const PSALTER_WEEKS = Object.values(PsalterWeekCycles);
export type PsalterWeekCycle = typeof PSALTER_WEEKS[number];
