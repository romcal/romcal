import { PRECEDENCES, Precedences } from '../constants/precedences';
import { Rank, Ranks, RanksFromPrecedence } from '../constants/ranks';
import { Rubrics } from '../types/rubrics';

/**
 * The table of precedence of the Universal Norms on the Liturgical Year, 1969.
 *
 * This is the rubric set romcal was written against, so it stays in the engine as the
 * default: a rite that supplies nothing gets it, and the 1969 calendars keep working
 * unchanged. It is expressed through the same `Rubrics` contract a second rite would
 * use, which is what makes it a seam rather than a special case.
 */

/** Easter Sunday sits under the Triduum precedence but is ranked a solemnity. */
const rankOf = (precedence: string, id: string): Rank => {
  if (precedence === Precedences.Triduum_1 && id === 'easter_sunday') return Ranks.Solemnity;
  return RanksFromPrecedence[precedence as keyof typeof RanksFromPrecedence];
};

export const Unly1969Rubrics: Rubrics = {
  precedences: PRECEDENCES,
  rankOf,
};
