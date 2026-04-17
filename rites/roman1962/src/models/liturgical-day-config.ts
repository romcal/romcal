import { computeAnchors, type YearAnchors } from '@internal/proper-of-time';
import type { ILiturgicalDayConfigRoot } from '@internal/romcal-core';

import type { Romcal1962ConfigOutput } from '../romcal-1962-types';

import { Romcal1962Config } from './config';

export interface LiturgicalDayConfig1962Output extends Romcal1962ConfigOutput {
  year: number;
}

/**
 * Per-year runtime context. Bundles an immutable `Romcal1962Config`
 * (localeId, overlay, commemoration cap, …) with the scalar year and
 * the `YearAnchors` library computed once for that year.
 *
 * Parity with 1969's `LiturgicalDayConfig`: 1969 carries a rich
 * `Dates` instance with weekday iterators; 1962 has no weekday
 * helpers (Mass-only scope), so the per-year surface reduces to the
 * raw anchor set from `@internal/proper-of-time`. Consumers derive
 * everything else from anchors.
 *
 * Cached per `(config, year)` on the `Romcal1962` instance.
 */
export class LiturgicalDayConfig1962 implements ILiturgicalDayConfigRoot<Romcal1962Config> {
  readonly config: Romcal1962Config;
  readonly year: number;
  readonly anchors: YearAnchors;

  constructor(config: Romcal1962Config, year: number) {
    this.config = config;
    this.year = year;
    this.anchors = computeAnchors(year);
  }

  getConfigObject(): LiturgicalDayConfig1962Output {
    return {
      ...this.config.toObject(),
      year: this.year,
    };
  }
}
