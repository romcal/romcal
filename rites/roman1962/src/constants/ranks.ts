/**
 * The ranks of the Rubricae of 1960.
 *
 * §91 reduced the older ladder of doubles, semidoubles and simples to four classes,
 * and they apply to every kind of day: a feria, a Sunday and a feast can all be II
 * class. That is why these cannot be folded into the 1969 ranks, where the name of
 * the rank also says what kind of day it is.
 *
 * A commemoration is not a class. It is what becomes of a day that yields to another,
 * kept as a collect at the Mass of the day, and it is a rank here because that is
 * what a consumer needs to display.
 */
export enum Ranks1962 {
  ClassI = 'CLASS_I',
  ClassII = 'CLASS_II',
  ClassIII = 'CLASS_III',
  ClassIV = 'CLASS_IV',
  Commemoration = 'COMMEMORATION',
}

export const RANKS_1962 = [
  Ranks1962.ClassI,
  Ranks1962.ClassII,
  Ranks1962.ClassIII,
  Ranks1962.ClassIV,
  Ranks1962.Commemoration,
] as const;

export type Rank1962 = (typeof RANKS_1962)[number];
