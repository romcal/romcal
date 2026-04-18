import type { CommemorationCapMode } from './config-1962';
import type { LiturgicalDay1962 } from './liturgical-day';

/**
 * Per Rubricae 1960 §50: a day is a valid forward-transfer target if its
 * current primary is NOT Class I or II — i.e. a Class III Sancti or any
 * Class IV. The transferred feast (Class I) displaces the current primary,
 * which then becomes a commemoration (if eligible).
 *
 * Ported verbatim from legacy `src/rubrics/transfer.ts`; the `?? 4`
 * fallback mirrors how `Calendar1962#resolveOccurrence` treats missing
 * metadata (i.e. as Class IV).
 */
export function isTransferTarget(primary: LiturgicalDay1962): boolean {
  return (primary.classOf1962 ?? 4) >= 3;
}

/**
 * Filter the losers list down to those eligible to be commemorated
 * (Rubricae 1960 §111–113): Class IV tempora ferials are not
 * commemorated; everything else survives. Mirrors
 * `src/rubrics/commemoration.ts#selectCommemorations` in the legacy
 * tree, factored here so `Calendar1962#postReduceDay` and
 * `generateCalendar` share a single source of truth.
 */
export function filterCommemorations(losers: LiturgicalDay1962[]): LiturgicalDay1962[] {
  return losers.filter((loser) => !((loser.kind1962 ?? 'sancti') === 'tempora' && (loser.classOf1962 ?? 4) === 4));
}

export const CAP_LIMITS: Record<CommemorationCapMode, number> = {
  solemn: 3,
  private: 1,
  all: Infinity,
};

/**
 * Apply the §111–113 numerical cap to an already-filtered list.
 */
export function applyCap(eligible: LiturgicalDay1962[], mode: CommemorationCapMode): LiturgicalDay1962[] {
  const limit = CAP_LIMITS[mode];
  return Number.isFinite(limit) ? eligible.slice(0, limit) : eligible;
}
