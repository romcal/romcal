import { ScreamingSnakeCase } from '../types/common';
import { toScreamingSnakeCase } from '../utils/string';

/**
 * Liturgical Day cycle that can be used as metadata for liturgical days.
 */
export enum ProperCycles {
  ProperOfTime = 'PROPER_OF_TIME',
  ProperOfSaints = 'PROPER_OF_SAINTS',
}

/**
 * Sundays cycle that can be used as metadata for liturgical days.
 */
export enum SundaysCycles {
  YearA = 'YEAR_A',
  YearB = 'YEAR_B',
  YearC = 'YEAR_C',
}

/**
 * Weekdays cycle that can be used as metadata for liturgical days.
 */
export enum WeekdaysCycles {
  Year1 = 'YEAR_1',
  Year2 = 'YEAR_2',
}

/**
 * Psalter weeks that can be used as metadata for liturgical days.
 */
export enum PsalterWeeksCycles {
  Week1 = 'WEEK_1',
  Week2 = 'WEEK_2',
  Week3 = 'WEEK_3',
  Week4 = 'WEEK_4',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_DAY_CYCLES]]
 */
export const LITURGICAL_DAY_CYCLE = Object.keys(ProperCycles)
  .filter((key) => typeof ProperCycles[key as keyof typeof ProperCycles] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as Array<ScreamingSnakeCase<keyof typeof ProperCycles>>;

export type ProperCycle = typeof LITURGICAL_DAY_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[SUNDAY_CYCLES]]
 */
export const SUNDAYS_CYCLE = Object.keys(SundaysCycles)
  .filter((key) => typeof SundaysCycles[key as keyof typeof SundaysCycles] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as Array<ScreamingSnakeCase<keyof typeof SundaysCycles>>;

export type SundaysCycle = typeof SUNDAYS_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[WEEKDAY_CYCLES]]
 */
export const WEEKDAYS_CYCLE = Object.keys(WeekdaysCycles)
  .filter((key) => typeof WeekdaysCycles[key as keyof typeof WeekdaysCycles] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as Array<
  ScreamingSnakeCase<keyof typeof WeekdaysCycles>
>;

export type WeekdaysCycle = typeof WEEKDAYS_CYCLE[number];

/**
 * A dynamically generated constant consisting of all the enum keys in [[PSALTER_WEEKS]]
 */
export const PSALTER_WEEKS = Object.keys(PsalterWeeksCycles)
  .filter((key) => typeof PsalterWeeksCycles[key as keyof typeof PsalterWeeksCycles] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as Array<
  ScreamingSnakeCase<keyof typeof PsalterWeeksCycles>
>;

export type PsalterWeeksCycle = typeof PSALTER_WEEKS[number];
