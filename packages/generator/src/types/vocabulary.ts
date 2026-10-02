/**
 * The names a rite gives the four things the engine only ever compares, orders or
 * passes through.
 *
 * The engine has no opinion about any of them. It knows that days have a precedence
 * and that one can outrank another, that a day carries a rank worth showing, that the
 * year is divided into seasons and cut across by periods — but not what those are
 * called or how many there are. 1969 has twenty-seven precedence categories and
 * Ordinary Time; 1962 has four classes and the Time after Pentecost. Neither list
 * belongs here.
 *
 * Written as a utility type rather than a plain interface so a rite can name only the
 * vocabularies it has settled on and leave the rest as `string`:
 *
 * ```ts
 * type Roman1969 = Vocabulary<Precedence, Rank, Season, Period>;
 * type Draft = Vocabulary<Precedence1962>; // ranks, seasons and periods still open
 * ```
 *
 * Collapsing the four into one object is what keeps it threadable: every contract
 * below takes a single type argument, passes it down unchanged, and reads the piece it
 * needs off it. A table that maps one rite's precedence to another's rank fails the
 * build rather than at generation time.
 */
export type Vocabulary<
  Precedence extends string = string,
  Rank extends string = string,
  Season extends string = string,
  Period extends string = string,
> = {
  readonly period: Period;
  readonly precedence: Precedence;
  readonly rank: Rank;
  readonly season: Season;
};

/**
 * The vocabulary the engine's own code is written against: any string in any of the
 * four positions.
 *
 * The default type argument throughout, so engine internals and anything that does not
 * care which rite it is handling stay unparameterised.
 */
export type AnyVocabulary = Vocabulary;
