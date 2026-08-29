import { Rank, Rubrics } from '@internal/generator';

import { PRECEDENCES_1962, Precedences1962 } from './constants/precedences';
import { Ranks1962 } from './constants/ranks';

/**
 * The Rubricae Breviarii et Missalis Romani of 1960, as used by the 1962 Missal.
 *
 * Where the 1969 map from precedence to rank has an exception per oddity, this one is
 * regular: the class is part of what the precedence means, so the mapping is a lookup
 * rather than a judgement.
 */

const RANK_BY_PRECEDENCE: Record<string, Rank> = {
  [Precedences1962.Triduum_1962_1]: Ranks1962.ClassI,
  [Precedences1962.PrivilegedSunday_1962_2]: Ranks1962.ClassI,
  [Precedences1962.LordFeast_1962_3]: Ranks1962.ClassI,
  [Precedences1962.FirstClassSunday_1962_4]: Ranks1962.ClassI,
  [Precedences1962.FirstClassFeast_1962_5]: Ranks1962.ClassI,
  [Precedences1962.FirstClassFeria_1962_6]: Ranks1962.ClassI,
  [Precedences1962.FirstClassOctaveDay_1962_7]: Ranks1962.ClassI,
  [Precedences1962.AllSouls_1962_8]: Ranks1962.ClassI,
  [Precedences1962.FirstClassVigil_1962_9]: Ranks1962.ClassI,
  [Precedences1962.SecondClassLordFeast_1962_10]: Ranks1962.ClassII,
  [Precedences1962.SecondClassSunday_1962_11]: Ranks1962.ClassII,
  [Precedences1962.SecondClassFeast_1962_12]: Ranks1962.ClassII,
  [Precedences1962.SecondClassFeria_1962_13]: Ranks1962.ClassII,
  [Precedences1962.SecondClassOctaveDay_1962_14]: Ranks1962.ClassII,
  [Precedences1962.ThirdClassFeast_1962_15]: Ranks1962.ClassIII,
  [Precedences1962.ThirdClassFeria_1962_16]: Ranks1962.ClassIII,
  [Precedences1962.ThirdClassVigil_1962_17]: Ranks1962.ClassIII,
  [Precedences1962.FourthClassFeria_1962_18]: Ranks1962.ClassIV,
  [Precedences1962.PrivilegedCommemoration_1962_19]: Ranks1962.Commemoration,
  [Precedences1962.OrdinaryCommemoration_1962_20]: Ranks1962.Commemoration,
};

export const Rubricae1960Rubrics: Rubrics = {
  precedences: PRECEDENCES_1962,
  rankOf: (precedence) => RANK_BY_PRECEDENCE[precedence],
};
