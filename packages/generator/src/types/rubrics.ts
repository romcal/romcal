import { Rank } from '../constants/ranks';

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
}
