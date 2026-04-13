import type { Celebration1962, ResolvedDay1962, ResolvedYear1962 } from '../rubrics/types';

import { resolvePropers } from './resolve';
import type { AttachPropersOptions, ResolvedPropers } from './types';

function withPropers(c: Celebration1962, resolved: ResolvedPropers): Celebration1962 {
  return {
    ...c,
    propers: resolved.propers,
    extraSections: resolved.extraSections,
  };
}

/**
 * Return a new ResolvedYear1962 with `propers` + `extraSections`
 * attached to every primary celebration. Commemorations are
 * augmented too when `attachToCommemorations` is true (default
 * false — keeps the payload small).
 *
 * Uses an internal per-call cache keyed by
 * `${properRef.source}::${communeSlug ?? ''}` so feasts that share
 * a Mass pay the resolution cost once.
 */
export function attachPropers(year: ResolvedYear1962, options: AttachPropersOptions = {}): ResolvedYear1962 {
  const cache = new Map<string, ResolvedPropers>();
  const resolveCached = (c: Celebration1962): ResolvedPropers => {
    const cacheKey = `${c.properRef.source}::${c.properRef.communeSlug ?? ''}`;
    const hit = cache.get(cacheKey);
    if (hit) return hit;
    const resolved = resolvePropers(c, { locales: options.locales });
    cache.set(cacheKey, resolved);
    return resolved;
  };

  const out: ResolvedYear1962 = new Map();
  for (const [date, day] of year) {
    const primaryResolved = resolveCached(day.primary);
    const primary = withPropers(day.primary, primaryResolved);

    const commemorations = options.attachToCommemorations
      ? day.commemorations.map((c) => withPropers(c, resolveCached(c)))
      : day.commemorations;

    const newDay: ResolvedDay1962 = { ...day, primary, commemorations };
    out.set(date, newDay);
  }
  return out;
}
