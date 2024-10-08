/**
 * Represent the two main cycle, that compose the liturgical year in the Roman rite.
 */
export const ProperCycles = {
  /**
   * The "Proper of Time" (or "Temporale") consists of the movable feasts,
   * most of them keyed to Easter (which falls on a different Sunday every year),
   * including Ascension, Pentecost, and so on.
   */
  ProperOfTime: 'PROPER_OF_TIME',
  /**
   * The "Proper of Saints" (or "Sanctorale") consists of the fixed feasts,
   * celebrated on the very same date each year (no matter what the day of the week),
   * including Christmas and all the saints' days.
   */
  ProperOfSaints: 'PROPER_OF_SAINTS',
} as const;

/**
 * A dynamically generated array from {@link ProperCycles} that contains all possible proper cycles,
 * that compose the liturgical year in the Roman rite.
 */
export const PROPER_CYCLES = Object.values(ProperCycles);

/**
 * Represent one of the two main cycles (available from {@link ProperCycles}),
 * that compose the liturgical year in the Roman rite.
 */
export type ProperCycle = (typeof PROPER_CYCLES)[number];

/**
 * A three-year cycle for Sunday Mass readings (and some solemnities), designated by A, B, or C.
 * Each cycle begins on the First Sunday of Advent of the previous civil year and ends on Saturday
 * after the Christ the King Solemnity. The cycles follow each other in alphabetical order.
 * C year is always divisible by 3, A has remainder of 1, and B remainder of 2.
 */
export const SundayCycles = {
  YearA: 'YEAR_A',
  YearB: 'YEAR_B',
  YearC: 'YEAR_C',
} as const;

/**
 * A dynamically generated array from {@link SundayCycles} that contains all possible
 * three-year Sunday cycles.
 */
export const SUNDAY_CYCLES = Object.values(SundayCycles);

/**
 * Represent one of the three-year Sunday cycle (available from {@link SundayCycles}).
 */
export type SundayCycle = (typeof SUNDAY_CYCLES)[number];

/**
 * A two-year cycle for the weekday Mass readings (also called Cycle I and Cycle II).
 * Odd-numbered years are the Cycle I (year 1); even-numbered ones are the Cycle II (year 2).
 */
export const WeekdayCycles = {
  Cycle1: 'CYCLE_1',
  Cycle2: 'CYCLE_2',
} as const;

/**
 * A dynamically generated array from {@link WeekdayCycles} that contains all possible
 * two-year weekday cycles.
 */
export const WEEKDAY_CYCLES = Object.values(WeekdayCycles);

/**
 * Represent one of the two-year weekday cycle (available from {@link WeekdayCycles}).
 */
export type WeekdayCycle = (typeof WEEKDAY_CYCLES)[number];

/**
 * [GILH §133] The four-week cycle of the psalter is coordinated with the liturgical year in such a way that
 * on the First Sunday of Advent, the First Sunday in Ordinary Time, the First Sunday of Lent,
 * and Easter Sunday the cycle is always begun again with Week 1 (others being omitted when necessary).
 */
export const PsalterWeekCycles = {
  Week1: 'WEEK_1',
  Week2: 'WEEK_2',
  Week3: 'WEEK_3',
  Week4: 'WEEK_4',
} as const;

/**
 * A dynamically generated array from {@link PsalterWeekCycles} that contains all possible
 * psalter week cycles.
 */
export const PSALTER_WEEKS = Object.values(PsalterWeekCycles);

/**
 * Represent one of the four-week psalter cycle (available from {@link PsalterWeekCycles}).
 */
export type PsalterWeekCycle = (typeof PSALTER_WEEKS)[number];
