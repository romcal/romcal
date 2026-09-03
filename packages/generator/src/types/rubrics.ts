import { DatesProvider } from './dates';
import { Vocabulary } from './vocabulary';

/**
 * Everything a rite needs to number a day within its season.
 *
 * The engine supplies the raw material — where the day falls, which season it is in,
 * where that season begins and ends — and anything a definition declared for itself.
 * What it cannot supply is the arithmetic, because seasons are not all counted the
 * same way even within one rite: 1969 numbers Lent from the week of Ash Wednesday
 * rather than from its first Sunday, and counts late Ordinary Time backwards from the
 * end of the year.
 */
export interface SeasonNumberingInput<V extends Vocabulary = Vocabulary> {
  readonly date: Date;
  readonly dates: DatesProvider;
  readonly endOfSeason?: Date;
  readonly seasons: readonly V['season'][];
  readonly startOfSeason?: Date;
  /** Declared on the definition or inherited from the day it is based on. */
  readonly declaredDayOfSeason?: number;
  readonly declaredWeekOfSeason?: number;
}

export interface SeasonNumbering {
  readonly dayOfSeason: number;
  readonly weekOfSeason: number;
}

/**
 * A day of the Proper of Time, and where it fell, for working out its periods.
 *
 * Periods are the stretches that cut across seasons — the octaves, the days before
 * and after the Epiphany, the two halves of Ordinary Time. Most are settled in the
 * definition itself; the ones here are not, because they depend on where a movable
 * date landed in the year being generated.
 */
export interface PeriodInput<V extends Vocabulary = Vocabulary> {
  readonly date: Date;
  readonly dates: DatesProvider;
  readonly id: string;
  readonly seasons: readonly V['season'][];
}

/** How a rite divides and counts its year. */
export interface SeasonRules<V extends Vocabulary = Vocabulary> {
  /**
   * The seasons the liturgical year opens and closes with, used for the year
   * boundaries reported on every day.
   *
   * Naming them is what lets a rite have a different set of seasons entirely: 1969
   * ends in Ordinary Time, which 1962 does not have at all, ending instead in the
   * Time after Pentecost.
   */
  readonly firstSeason: V['season'];
  readonly lastSeason: V['season'];

  /** Where the day falls within its season. */
  readonly numbering: (input: SeasonNumberingInput<V>) => SeasonNumbering;
}

/**
 * The rules of precedence a rite is celebrated under.
 *
 * The engine knows that some days outrank others and that a date can carry more than
 * one celebration. It does not know which days those are, how many classes there
 * are, or what happens to the ones that lose: those are the rubrics, and they differ
 * between the 1969 reform and the Rubricae of 1960 in ways that no single table can
 * express. A rite supplies this object; the engine asks it.
 *
 * Everything here is data or a pure function of the days on one date. Anything that
 * needs to reach across dates (1962's forward transfer) is expressed by the outcome a
 * policy returns, not by reaching into the calendar.
 */
export interface Rubrics<V extends Vocabulary = Vocabulary> {
  /**
   * The precedence values this rite uses, most important first.
   *
   * Order is the whole content: the engine compares two days by their position in
   * this list and never interprets the values themselves. 1969 has the twenty-seven
   * categories of UNLY #59; 1962 has four classes and its commemorations.
   */
  readonly precedences: readonly V['precedence'][];

  /**
   * The rank a day of this precedence carries.
   *
   * Kept separate from the ordering because rank is what gets shown and translated,
   * and the two do not run in step: a 1969 weekday of Holy Week outranks most feasts
   * while still being a weekday.
   *
   * Takes the id as well, for the exceptions every rite turns out to have.
   */
  readonly rankOf: (precedence: V['precedence'], id: string) => V['rank'];

  /** How the year is divided, and how a day is numbered within its season. */
  readonly seasons: SeasonRules<V>;

  /**
   * Periods to add to a day of the Proper of Time that can only be told from the
   * date it fell on.
   *
   * Prepended to whatever the definition already declares. A rite with no such
   * periods leaves this out.
   */
  readonly periodsOf?: (input: PeriodInput<V>) => readonly V['period'][];
}
