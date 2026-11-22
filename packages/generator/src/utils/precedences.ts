import type { LiturgicalDay } from '../models/liturgical-day';
import { Vocabulary } from '../types/vocabulary';

/**
 * Build the sort function ordering the liturgical days of a same date: the day that
 * takes precedence comes first.
 *
 * src: Universal Norms on the Liturgical Year and the General Roman Calendar (Normae universales de anno
 * liturgico et de calendario), nos. 59 and 60, approved by Paul VI, motu proprio Mysterii Paschalis,
 * 14 February 1969,
 * https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html
 *
 * - Optional days are sorted to the end of the list.
 * - A day is compared by its position in the rite's list of precedences.
 * - A day marked as allowing similar rank items is sorted before the others of the
 *   same rank only. It never takes precedence over a day of a higher rank
 *   (e.g. a memorial never takes precedence over a solemnity), but it does over a day of
 *   the same rank and a higher precedence: the proper memorial of Saint Aventin, kept
 *   by the Ordo of Toulouse on 13 June, is sorted before the general memorial of
 *   Saint Anthony of Padua, which may be celebrated instead.
 *
 * With `precedenceFirst` false, a day allowing similar rank items is sorted before the others whatever
 * its precedence, as the engine did before the option existed. The 1969 and 1962 rites both set it to true.
 *
 * With `precedenceFirst` true, the flag only reorders the days of one of the `similarRankItemRanks` (the memorials of
 * 1969): the days of such a rank are one block of the table, so moving one ahead of its peers cannot put it before
 * a day of another rank that the table places before its peers. For any other rank the flag has no effect, as it
 * would make the order circular: a feast of the Lord (no. 5) outranks a Sunday (no. 6), which outranks a proper
 * feast (no. 8) that, flagged, would come before the feast of the Lord.
 *
 * @param precedences The precedence values of the rite, most important first.
 * @param options.precedenceFirst Compare the precedences of days of different ranks before `allowSimilarRankItems`.
 * @param options.similarRankItemRanks The ranks whose days can allow similar rank items, when `precedenceFirst`.
 */
export const compareByPrecedence =
  <V extends Vocabulary = Vocabulary>(
    precedences: readonly V['precedence'][],
    {
      precedenceFirst,
      similarRankItemRanks = [],
    }: { precedenceFirst: boolean; similarRankItemRanks?: readonly V['rank'][] }
  ) =>
    (first: LiturgicalDay<V>, next: LiturgicalDay<V>): number => {
      if (first.isOptional !== next.isOptional) return first.isOptional ? 1 : -1;

      const similar = first.allowSimilarRankItems !== next.allowSimilarRankItems;
      const reordered = !precedenceFirst || (first.rank === next.rank && similarRankItemRanks.includes(first.rank));
      if (similar && reordered) return first.allowSimilarRankItems ? -1 : 1;

      const type1 = precedences.indexOf(first.precedence);
      const type2 = precedences.indexOf(next.precedence);
      if (type1 !== type2) return type1 < type2 ? -1 : 1;
      return 0;
    };
