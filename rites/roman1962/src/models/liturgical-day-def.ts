import type { Rank1962 } from '../constants/rank-1962';
import type { Color } from '../sanctoral/types';
import type { ILiturgicalDayDefRoot } from '../types/romcal-core';

import type { Class1962 } from './liturgical-day';

export type LiturgicalDayDef1962Source = 'sancti' | 'tempora' | 'overlay';

export interface LiturgicalDayDef1962Init {
  key: string;
  source: LiturgicalDayDef1962Source;
  name: string;
  mmdd?: string;
  rank1962?: Rank1962;
  class1962?: Class1962;
  numericRank?: number;
  colors?: Color[];
}

/**
 * Year-agnostic metadata for a single celebration key. Parity with
 * 1969's `LiturgicalDayDef`, but reduced to what the 1962 pipeline
 * exposes without running a year computation: the key, its origin,
 * a Latin display name (from the mass-file officium or the calendar
 * entry), and rank info when known.
 *
 * Tempora entries omit `mmdd` — they move with Easter/Advent. Sancti
 * and overlay entries carry their fixed `mmdd` (the first one found
 * for sancti reached through multiple dates, e.g. octave days).
 */
export class LiturgicalDayDef1962 implements ILiturgicalDayDefRoot {
  readonly key: string;
  readonly source: LiturgicalDayDef1962Source;
  readonly name: string;
  readonly mmdd?: string;
  readonly rank1962?: Rank1962;
  readonly class1962?: Class1962;
  readonly numericRank?: number;
  readonly colors?: Color[];

  constructor(init: LiturgicalDayDef1962Init) {
    this.key = init.key;
    this.source = init.source;
    this.name = init.name;
    this.mmdd = init.mmdd;
    this.rank1962 = init.rank1962;
    this.class1962 = init.class1962;
    this.numericRank = init.numericRank;
    this.colors = init.colors;
  }
}

export type LiturgicalDayDefinitions1962 = Record<string, LiturgicalDayDef1962>;
