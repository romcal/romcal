import { flattenCalendarChain } from '@internal/calendars';

import type { CalendarOverlay1962 } from './calendars/types';
import type { Rank1962 } from './constants/rank-1962';
import { loadCalendar1960, loadTempora } from './sanctoral/data';
import type { Color } from './sanctoral/types';

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
export interface Definition1962 {
  key: string;
  source: 'sancti' | 'tempora' | 'overlay';
  name: string;
  mmdd?: string;
  rank1962?: Rank1962;
  class1962?: 1 | 2 | 3 | 4;
  numericRank?: number;
  colors?: Color[];
}

export type Definitions1962 = Record<string, Definition1962>;

/**
 * Build a catalog of every celebration definition reachable from the
 * universal 1962 calendar plus, optionally, the overlay chain. Pure
 * over its inputs — safe to memoize at the caller.
 *
 * Resolution order: universal sancti → universal tempora → overlay
 * chain (parents-first). Later entries override earlier ones, so a
 * diocesan overlay wins against a universal-sancti of the same key.
 */
export function buildDefinitions1962(overlay?: CalendarOverlay1962): Definitions1962 {
  const defs: Definitions1962 = {};

  const cal = loadCalendar1960();
  for (const [mmdd, entries] of Object.entries(cal)) {
    for (const entry of entries) {
      if (defs[entry.fileKey]) continue;
      defs[entry.fileKey] = {
        key: entry.fileKey,
        source: 'sancti',
        name: entry.name,
        mmdd,
        rank1962: entry.rank1962,
        class1962: entry.class1962,
        numericRank: entry.numericRank,
      };
    }
  }

  const tempora = loadTempora();
  for (const [id, entry] of Object.entries(tempora)) {
    if (defs[id]) continue;
    defs[id] = {
      key: id,
      source: 'tempora',
      name: entry.officium ?? id,
      rank1962: entry.rank?.rank1962,
      class1962: entry.rank?.class1962,
      numericRank: entry.rank?.numericRank,
      colors: entry.colors,
    };
  }

  if (overlay) {
    for (const link of flattenCalendarChain(overlay)) {
      for (const entry of link.entries) {
        defs[entry.fileKey] = {
          key: entry.fileKey,
          source: 'overlay',
          name: entry.name,
          mmdd: entry.mmdd,
          rank1962: entry.rank1962,
          class1962: entry.class1962,
          numericRank: entry.numericRank,
          colors: entry.mass?.colors,
        };
      }
    }
  }

  return defs;
}
