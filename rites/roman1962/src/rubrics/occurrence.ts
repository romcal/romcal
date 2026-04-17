import type { Celebration1962 } from '../models/liturgical-day';

export interface OccurrenceResult {
  primary: Celebration1962;
  losers: Celebration1962[];
}

/**
 * Pick the primary celebration from a candidate pool. Ties at equal
 * precedence are broken deterministically:
 *   1. Tempora beats Sancti (Rubricae 1960 §96 — privileged Lent
 *      ferias vs Class III feasts).
 *   2. Alphabetical `name`.
 *
 * Returns the winner plus the remaining losers sorted by precedence
 * descending (for downstream commemoration selection).
 */
export function resolveOccurrence(candidates: Celebration1962[]): OccurrenceResult {
  if (candidates.length === 0) {
    throw new Error('resolveOccurrence called with empty candidate pool');
  }
  const sorted = [...candidates].sort((a, b) => {
    if (b.precedence !== a.precedence) return b.precedence - a.precedence;
    if (a.kind !== b.kind) return a.kind === 'tempora' ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  return { primary: sorted[0], losers: sorted.slice(1) };
}
