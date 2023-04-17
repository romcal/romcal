/**
 * Represent the two main cycle, that compose the liturgical year in the Roman rite.
 */
export enum ProperCycle {
  /**
   * The "Proper of Time" (or "Temporale") consists of the movable feasts,
   * most of them keyed to Easter (which falls on a different Sunday every year),
   * including Ascension, Pentecost, and so on.
   */
  ProperOfTime = 'PROPER_OF_TIME',
  /**
   * The "Proper of Saints" (or "Sanctorale") consists of the fixed feasts,
   * celebrated on the very same date each year (no matter what the day of the week),
   * including Christmas and all the saints' days.
   */
  ProperOfSaints = 'PROPER_OF_SAINTS',
}

export const PROPER_CYCLES = [ProperCycle.ProperOfTime, ProperCycle.ProperOfSaints] as const;

/**
 * A three-year cycle for Sunday Mass readings (and some solemnities), designated by A, B, or C.
 * Each cycle begins on the First Sunday of Advent of the previous civil year and ends on Saturday
 * after the Christ the King Solemnity. The cycles follow each other in alphabetical order.
 * C year is always divisible by 3, A has remainder of 1, and B remainder of 2.
 */
export enum SundayCycle {
  YearA = 'YEAR_A',
  YearB = 'YEAR_B',
  YearC = 'YEAR_C',
}

export const SUNDAY_CYCLES = [SundayCycle.YearA, SundayCycle.YearB, SundayCycle.YearC] as const;

/**
 * A two-year cycle for the weekday Mass readings (also called Cycle I and Cycle II).
 * Odd-numbered years are the Cycle I (year 1); even-numbered ones are the Cycle II (year 2).
 */
export enum WeekdayCycle {
  Year1 = 'YEAR_1',
  Year2 = 'YEAR_2',
}

export const WEEKDAY_CYCLES = [WeekdayCycle.Year1, WeekdayCycle.Year2] as const;

/**
 * [GILH §133] The four-week cycle of the psalter is coordinated with the liturgical year in such a way that
 * on the First Sunday of Advent, the First Sunday in Ordinary Time, the First Sunday of Lent,
 * and Easter Sunday the cycle is always begun again with Week 1 (others being omitted when necessary).
 */
export enum PsalterWeekCycle {
  Week1 = 'WEEK_1',
  Week2 = 'WEEK_2',
  Week3 = 'WEEK_3',
  Week4 = 'WEEK_4',
}

export const PSALTER_WEEK_CYCLES = [
  PsalterWeekCycle.Week1,
  PsalterWeekCycle.Week2,
  PsalterWeekCycle.Week3,
  PsalterWeekCycle.Week4,
] as const;
