import {
  dateDifference,
  OccurrenceInput,
  OccurrenceOutcome,
  Rubrics,
  SeasonNumbering,
  SeasonNumberingInput,
} from '@internal/generator';

import { PRECEDENCES_1962, Precedence1962, Precedences1962 } from './constants/precedences';
import { Rank1962, Ranks1962 } from './constants/ranks';
import { Season1962 } from './constants/seasons';
import { Roman1962Vocabulary } from './vocabulary';

/**
 * The Rubricae Breviarii et Missalis Romani of 1960, as used by the 1962 Missal.
 *
 * Where the 1969 map from precedence to rank has an exception per oddity, this one is
 * regular: the class is part of what the precedence means, so the mapping is a lookup
 * rather than a judgement.
 */

const RANK_BY_PRECEDENCE: Record<Precedence1962, Rank1962> = {
  [Precedences1962.PrivilegedFeastWithOctave_1962_1]: Ranks1962.ClassI,
  [Precedences1962.Triduum_1962_2]: Ranks1962.ClassI,
  [Precedences1962.LordFeast_1962_3]: Ranks1962.ClassI,
  [Precedences1962.PrivilegedMaryFeast_1962_4]: Ranks1962.ClassI,
  [Precedences1962.ChristmasVigilOrOctaveDay_1962_5]: Ranks1962.ClassI,
  [Precedences1962.FirstClassSunday_1962_6]: Ranks1962.ClassI,
  [Precedences1962.FirstClassFeria_1962_7]: Ranks1962.ClassI,
  [Precedences1962.AllSouls_1962_8]: Ranks1962.ClassI,
  [Precedences1962.PentecostVigil_1962_9]: Ranks1962.ClassI,
  [Precedences1962.FirstClassOctaveDay_1962_10]: Ranks1962.ClassI,
  [Precedences1962.UniversalFirstClassFeast_1962_11]: Ranks1962.ClassI,
  [Precedences1962.ProperFirstClassFeast_1962_12]: Ranks1962.ClassI,
  [Precedences1962.IndultFirstClassFeast_1962_13]: Ranks1962.ClassI,
  [Precedences1962.SecondClassLordFeast_1962_14]: Ranks1962.ClassII,
  [Precedences1962.SecondClassSunday_1962_15]: Ranks1962.ClassII,
  [Precedences1962.UniversalSecondClassFeast_1962_16]: Ranks1962.ClassII,
  [Precedences1962.ChristmasOctaveDay_1962_17]: Ranks1962.ClassII,
  [Precedences1962.SecondClassFeria_1962_18]: Ranks1962.ClassII,
  [Precedences1962.ProperSecondClassFeast_1962_19]: Ranks1962.ClassII,
  [Precedences1962.IndultSecondClassFeast_1962_20]: Ranks1962.ClassII,
  [Precedences1962.SecondClassVigil_1962_21]: Ranks1962.ClassII,
  [Precedences1962.LentenFeria_1962_22]: Ranks1962.ClassIII,
  [Precedences1962.ParticularThirdClassFeast_1962_23]: Ranks1962.ClassIII,
  [Precedences1962.UniversalThirdClassFeast_1962_24]: Ranks1962.ClassIII,
  [Precedences1962.AdventFeria_1962_25]: Ranks1962.ClassIII,
  [Precedences1962.ThirdClassVigil_1962_26]: Ranks1962.ClassIII,
  [Precedences1962.SaturdayOfficeBVM_1962_27]: Ranks1962.ClassIV,
  [Precedences1962.FourthClassFeria_1962_28]: Ranks1962.ClassIV,
  [Precedences1962.PrivilegedCommemoration_1962_29]: Ranks1962.Commemoration,
  [Precedences1962.OrdinaryCommemoration_1962_30]: Ranks1962.Commemoration,
};

/**
 * Where a day falls in its season, under the 1962 numbering.
 *
 * `weekOfSeason` is the chronological week counted from `startOfSeason` (Sunday-bounded
 * weeks via the same ceil formula 1969 uses), not the Missal's Sunday-series ordinal.
 * When Time after Epiphany starts on 14 January, the second Sunday after Epiphany is
 * week 1 if that Sunday is 14 January itself (2024), and week 2 if it falls later in
 * the first partial week (2025). Lent alone shifts by −1 so Ash Wednesday–Saturday sit
 * in week 0 and the first Sunday of Lent opens week I.
 *
 * Seasons that begin on a Sunday (Septuagesima, Time after Pentecost, …) therefore
 * match the Missal's Sunday count; seasons that begin mid-week do not.
 */
const numbering = ({
  date,
  declaredDayOfSeason,
  declaredWeekOfSeason,
  seasons,
  startOfSeason,
}: SeasonNumberingInput<Roman1962Vocabulary>): SeasonNumbering => {
  const dayOfSeason = declaredDayOfSeason ?? (startOfSeason ? dateDifference(date, startOfSeason) + 1 : NaN);

  const weekOfSeasonOffset = seasons.includes(Season1962.Lent) ? -1 : 0;
  const weekOfSeason =
    declaredWeekOfSeason ??
    (startOfSeason ? Math.ceil((dayOfSeason + startOfSeason.getUTCDay()) / 7) + weekOfSeasonOffset : NaN);

  return { dayOfSeason, weekOfSeason };
};

/**
 * Placeholder until the 1960 occurrence policy lands (commemorations §106–114 and
 * forward transfer of feasts that lose a date). For now the winner alone is kept —
 * the same drop behaviour the engine used before rites owned this function.
 */
const resolveOccurrences = ({
  days,
}: OccurrenceInput<Roman1962Vocabulary>): OccurrenceOutcome<Roman1962Vocabulary> => ({
  onDate: days[0] ? [days[0]] : [],
  transfers: [],
});

export const Rubricae1960Rubrics: Rubrics<Roman1962Vocabulary> = {
  source: {
    title: 'Rubrics of the Roman Breviary and Missal',
    titleLatin: 'Rubricae Breviarii et Missalis Romani',
    year: 1960,
    promulgatedBy: 'John XXIII, motu proprio Rubricarum instructum',
    abbreviation: 'Rubricae',
    primaryLocus: '§91',
  },
  precedences: PRECEDENCES_1962,
  rankOf: (precedence) => RANK_BY_PRECEDENCE[precedence],
  resolveOccurrences,
  seasons: {
    firstSeason: Season1962.Advent,
    lastSeason: Season1962.TimeAfterPentecost,
    numbering,
  },
};
