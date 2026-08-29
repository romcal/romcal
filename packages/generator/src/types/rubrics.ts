import { Rank } from '../constants/ranks';
import { Dates } from '../utils/dates';

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
export interface SeasonNumberingInput {
  readonly date: Date;
  readonly dates: Dates;
  readonly endOfSeason?: Date;
  readonly seasons: readonly string[];
  readonly startOfSeason?: Date;
  /** Declared on the definition or inherited from the day it is based on. */
  readonly declaredDayOfSeason?: number;
  readonly declaredWeekOfSeason?: number;
}

export interface SeasonNumbering {
  readonly dayOfSeason: number;
  readonly weekOfSeason: number;
}

/** How a rite divides and counts its year. */
export interface SeasonRules {
  /**
   * The seasons the liturgical year opens and closes with, used for the year
   * boundaries reported on every day.
   *
   * Naming them is what lets a rite have a different set of seasons entirely: 1969
   * ends in Ordinary Time, which 1962 does not have at all, ending instead in the
   * Time after Pentecost.
   */
  readonly firstSeason: string;
  readonly lastSeason: string;

  /** Where the day falls within its season. */
  readonly numbering: (input: SeasonNumberingInput) => SeasonNumbering;
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
export interface Rubrics {
  /**
   * The precedence values this rite uses, most important first.
   *
   * Order is the whole content: the engine compares two days by their position in
   * this list and never interprets the values themselves. 1969 has the twenty-seven
   * categories of UNLY #59; 1962 has four classes and its commemorations.
   */
  readonly precedences: readonly string[];

  /**
   * The rank a day of this precedence carries.
   *
   * Kept separate from the ordering because rank is what gets shown and translated,
   * and the two do not run in step: a 1969 weekday of Holy Week outranks most feasts
   * while still being a weekday.
   *
   * Takes the id as well, for the exceptions every rite turns out to have.
   */
  readonly rankOf: (precedence: string, id: string) => Rank;

  /** How the year is divided, and how a day is numbered within its season. */
  readonly seasons: SeasonRules;
}
