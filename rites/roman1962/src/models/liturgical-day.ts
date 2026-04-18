import type { Rank1962 } from '../constants/rank-1962';
import type { ProperOfTimeSeason } from '../proper-of-time';
import type { Color, SanctoralCommemoration, SanctoralPropersRef } from '../sanctoral';
import type { MassPropers, OctaveInfo, PropersBlock, RubricFlags1962 } from '../types/liturgical-day-1962';
import type { ILiturgicalDayRoot } from '../types/romcal-core';

export type Class1962 = 1 | 2 | 3 | 4;

/**
 * Plain-data shape used to construct a `LiturgicalDay1962`. Exists
 * separately from the class so producers (rubrics, overlay-merge,
 * builders) can build up field-sets without instantiating the class
 * until the object is ready.
 */
export interface LiturgicalDay1962Init {
  kind: 'tempora' | 'sancti';
  key: string;
  name: string;
  date: string;
  classOf1962: Class1962;
  rank1962: Rank1962;
  numericRank: number;
  precedence: number;
  properRef: { source: string; communeSlug?: string };
  rubrics: RubricFlags1962;
  colors: Color[];
  season?: ProperOfTimeSeason;
  isTransferredReplacement?: boolean;
  transferredFromDate?: string;
  octave?: OctaveInfo;
  vigil?: { of: string };
  inlineCommemorations?: SanctoralCommemoration[];
  propers?: MassPropers;
  extraSections?: Record<string, PropersBlock>;
}

/**
 * A single resolved celebration on a given date. Mirrors 1969's
 * `LiturgicalDay` class shape (constructor-built, readonly facade,
 * one instance per dated celebration). 1962-specific fields — class
 * hierarchy (`classOf1962`), octave bookkeeping, Rubricae-1960
 * transfer provenance, inline commemorations — live here.
 *
 * Construction: all fields arrive via a single init object. Layer
 * builders (rubrics, overlay-merge) assemble the init shape, then
 * wrap it in a `LiturgicalDay1962` once values are finalised.
 */
export class LiturgicalDay1962 implements ILiturgicalDayRoot {
  readonly kind: 'tempora' | 'sancti';
  readonly key: string;
  readonly name: string;

  /**
   * ISO `YYYY-MM-DD` the celebration lands on. Matches the outer
   * `LiturgicalCalendar1962` record key for primaries and
   * commemorations, and the post-transfer landing date for
   * transferred feasts.
   */
  readonly date: string;

  readonly classOf1962: Class1962;
  readonly rank1962: Rank1962;
  readonly numericRank: number;
  readonly precedence: number;
  readonly properRef: { source: string; communeSlug?: string };
  readonly rubrics: RubricFlags1962;
  readonly colors: Color[];

  /**
   * Liturgical season of the date this celebration falls on.
   * Propagated from the tempora entry for the same date, so every
   * celebration on a given day reports the same season.
   */
  readonly season?: ProperOfTimeSeason;

  /**
   * True when this celebration is a forward-transferred replacement
   * (Rubricae 1960: an impeded Class I feast moved onto the next
   * available open day).
   */
  readonly isTransferredReplacement?: boolean;

  /**
   * Original date the celebration was transferred from. Only set
   * when `isTransferredReplacement` is true.
   */
  readonly transferredFromDate?: string;

  readonly octave?: OctaveInfo;
  readonly vigil?: { of: string };
  readonly inlineCommemorations?: SanctoralCommemoration[];

  // Propers + extraSections are attached post-construction by
  // `attachPropers` (M6), not set by the rubrics engine. Keeping
  // them writable avoids a rebuild on the hot attach path.
  propers?: MassPropers;
  extraSections?: Record<string, PropersBlock>;

  constructor(init: LiturgicalDay1962Init) {
    this.kind = init.kind;
    this.key = init.key;
    this.name = init.name;
    this.date = init.date;
    this.classOf1962 = init.classOf1962;
    this.rank1962 = init.rank1962;
    this.numericRank = init.numericRank;
    this.precedence = init.precedence;
    this.properRef = init.properRef;
    this.rubrics = init.rubrics;
    this.colors = init.colors;
    this.season = init.season;
    this.isTransferredReplacement = init.isTransferredReplacement;
    this.transferredFromDate = init.transferredFromDate;
    this.octave = init.octave;
    this.vigil = init.vigil;
    this.inlineCommemorations = init.inlineCommemorations;
    this.propers = init.propers;
    this.extraSections = init.extraSections;
  }
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
export type LiturgicalCalendar1962 = Record<string, LiturgicalDay1962[]>;

export type { Color, SanctoralPropersRef };
