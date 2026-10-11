import type { LiturgicalDay } from '../models/liturgical-day';
import { Vocabulary } from '../types/vocabulary';

/**
 * Build the sort function ordering the liturgical days of a same date: the day that
 * takes precedence comes first.
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
 * With `precedenceFirst` false, the order is the one the engine had before the 1969 rubrics
 * were fixed: a day allowing similar rank items is sorted before the others whatever its precedence.
 * The 1969 rite sets it to true; the 1962 rite keeps false.
 *
 * @param precedences The precedence values of the rite, most important first.
 * @param options.precedenceFirst Compare the precedences of days of different ranks before `allowSimilarRankItems`.
 */
export const compareByPrecedence =
  <V extends Vocabulary = Vocabulary>(
    precedences: readonly V['precedence'][],
    { precedenceFirst }: { precedenceFirst: boolean }
  ) =>
    (first: LiturgicalDay<V>, next: LiturgicalDay<V>): number => {
      if (first.isOptional !== next.isOptional) return first.isOptional ? 1 : -1;

      const similar = first.allowSimilarRankItems !== next.allowSimilarRankItems;
      if (similar && (!precedenceFirst || first.rank === next.rank)) return first.allowSimilarRankItems ? -1 : 1;

      const type1 = precedences.indexOf(first.precedence);
      const type2 = precedences.indexOf(next.precedence);
      if (type1 !== type2) return type1 < type2 ? -1 : 1;
      return 0;
    };
