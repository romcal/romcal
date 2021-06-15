/**
 * Liturgical Day cycle that can be used as metadata for liturgical days.
 */
export enum LiturgicalDayCycles {
  TEMPORALE = 'TEMPORALE',
  SANCTORALE = 'SANCTORALE',
}

/**
 * Sundays cycle that can be used as metadata for liturgical days.
 */
export enum SundaysCycles {
  YEAR_A = 'YEAR_A',
  YEAR_B = 'YEAR_B',
  YEAR_C = 'YEAR_C',
}

/**
 * Weekdays cycle that can be used as metadata for liturgical days.
 */
export enum WeekdaysCycles {
  YEAR_1 = 'YEAR_1',
  YEAR_2 = 'YEAR_2',
}

/**
 * Psalter weeks that can be used as metadata for liturgical days.
 */
export enum PsalterWeeksCycles {
  WEEK_1 = 'WEEK_1',
  WEEK_2 = 'WEEK_2',
  WEEK_3 = 'WEEK_3',
  WEEK_4 = 'WEEK_4',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_DAY_CYCLES]]
 */
export const LITURGICAL_DAY_CYCLE = Object.keys(LiturgicalDayCycles).filter(
  (key) =>
    typeof LiturgicalDayCycles[key as keyof typeof LiturgicalDayCycles] ===
    'string',
) as Array<keyof typeof LiturgicalDayCycles>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[SUNDAY_CYCLES]]
 */
export const SUNDAYS_CYCLE = Object.keys(SundaysCycles).filter(
  (key) => typeof SundaysCycles[key as keyof typeof SundaysCycles] === 'string',
) as Array<keyof typeof SundaysCycles>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[WEEKDAY_CYCLES]]
 */
export const WEEKDAYS_CYCLE = Object.keys(WeekdaysCycles).filter(
  (key) =>
    typeof WeekdaysCycles[key as keyof typeof WeekdaysCycles] === 'string',
) as Array<keyof typeof WeekdaysCycles>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[PSALTER_WEEKS]]
 */
export const PSALTER_WEEKS = Object.keys(PsalterWeeksCycles).filter(
  (key) =>
    typeof PsalterWeeksCycles[key as keyof typeof PsalterWeeksCycles] ===
    'string',
) as Array<keyof typeof PsalterWeeksCycles>;
