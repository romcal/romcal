import type { ResolvedDay1962, ResolvedYear1962 } from './types';

export type CommemorationCapMode = 'solemn' | 'private' | 'all';

export interface CommemorationCapOptions {
  mode?: CommemorationCapMode;
}

const LIMITS: Record<CommemorationCapMode, number> = {
  solemn: 3,
  private: 1,
  all: Infinity,
};

/**
 * Apply the 1960 commemoration count caps from §111–113 to every
 * day in the year. The `commemorations` array is already sorted
 * precedence-desc by `selectCommemorations`, so this is a simple
 * head-of-array slice.
 *
 * - `solemn` (sung Mass with Gloria/Credo): max 3.
 * - `private` (low Mass): max 1.
 * - `all` (default): no cap; every eligible commemoration kept.
 *
 * Returns a new map; input is not mutated.
 */
export function applyCommemorationCap(year: ResolvedYear1962, options: CommemorationCapOptions = {}): ResolvedYear1962 {
  const mode = options.mode ?? 'all';
  const limit = LIMITS[mode];
  if (!Number.isFinite(limit)) return year;

  const out: ResolvedYear1962 = new Map();
  for (const [date, day] of year) {
    const capped = day.commemorations.slice(0, limit);
    if (capped.length === day.commemorations.length) {
      out.set(date, day);
      continue;
    }
    const newDay: ResolvedDay1962 = { ...day, commemorations: capped };
    out.set(date, newDay);
  }
  return out;
}
