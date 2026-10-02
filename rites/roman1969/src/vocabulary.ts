import { Period, Precedence, Rank, Season, Vocabulary } from '@internal/generator';

/**
 * The vocabulary of the Roman Rite as reformed in 1969: the precedences, ranks, seasons
 * and periods this rite celebrates by.
 *
 * Every engine type that carries liturgical vocabulary is parameterised by it, so a
 * calendar built by this rite reports, for instance, a `rank` of `Ranks.Solemnity`
 * rather than any string.
 */
export type Roman1969Vocabulary = Vocabulary<Precedence, Rank, Season, Period>;
