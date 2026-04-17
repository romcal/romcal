import type { Rank1962 } from '../constants/rank-1962';
import type { ProperOfTimeSeason } from '../proper-of-time';
import type { Color, SanctoralCommemoration, SanctoralPropersRef } from '../sanctoral';
import type { MassPropers, OctaveInfo, PropersBlock, RubricFlags1962 } from '../types/liturgical-day-1962';

export type Class1962 = 1 | 2 | 3 | 4;

export interface Celebration1962 {
  kind: 'tempora' | 'sancti';
  key: string;
  name: string;
  classOf1962: Class1962;
  rank1962: Rank1962;
  numericRank: number;
  precedence: number;
  properRef: { source: string; communeSlug?: string };
  rubrics: RubricFlags1962;
  colors: Color[];
  /**
   * Liturgical season of the date this celebration falls on.
   * Propagated from the tempora entry for the same date, so every
   * celebration on a given day reports the same season.
   */
  season?: ProperOfTimeSeason;
  /**
   * True when this celebration is a forward-transferred replacement
   * (Rubricae 1960: an impeded Class I feast moved onto the next
   * available open day).
   */
  isTransferredReplacement?: boolean;
  /**
   * Original date the celebration was transferred from. Only set
   * when `isTransferredReplacement` is true.
   */
  transferredFromDate?: string;
  octave?: OctaveInfo;
  vigil?: { of: string };
  inlineCommemorations?: SanctoralCommemoration[];
  propers?: MassPropers;
  extraSections?: Record<string, PropersBlock>;
}

/**
 * Resolved year = every date (YYYY-MM-DD) in the year that has at
 * least one celebration, mapped to the full precedence-ordered list
 * of celebrations for that date. Index 0 is the primary (the Mass
 * that is actually said); later entries are commemorations.
 *
 * Empty dates (no sancti, no tempora) are omitted — absence signals
 * "no celebration," as opposed to "empty array of celebrations."
 */
export type ResolvedYear1962 = Record<string, Celebration1962[]>;

export type { Color, SanctoralPropersRef };
