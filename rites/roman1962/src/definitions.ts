import { flattenCalendarChain } from '@internal/rite-roman1969';

import type { CalendarOverlay1962 } from './calendars/types';
import { LiturgicalDayDef1962, type LiturgicalDayDefinitions1962 } from './models/liturgical-day-def';
import { loadCalendar1960, loadTempora } from './sanctoral/data';

/**
 * Build a catalog of every `LiturgicalDayDef1962` reachable from the
 * universal 1962 calendar plus, optionally, the overlay chain. Pure
 * over its inputs — safe to memoize at the caller.
 *
 * Resolution order: universal sancti → universal tempora → overlay
 * chain (parents-first). Later entries override earlier ones, so a
 * diocesan overlay wins against a universal-sancti of the same key.
 *
 * Parity with 1969's `CalendarDef#buildAllDefinitions()`. Kept as a
 * free-standing function because 1962 has no `CalendarDef1962` class
 * yet — when the orchestrator lands (Phase D4e), this moves to a
 * method there.
 */
export function buildAllDefinitions(overlay?: CalendarOverlay1962): LiturgicalDayDefinitions1962 {
  const defs: LiturgicalDayDefinitions1962 = {};

  const cal = loadCalendar1960();
  for (const [mmdd, entries] of Object.entries(cal)) {
    for (const entry of entries) {
      if (defs[entry.fileKey]) continue;
      defs[entry.fileKey] = new LiturgicalDayDef1962({
        key: entry.fileKey,
        source: 'sancti',
        name: entry.name,
        mmdd,
        rank1962: entry.rank1962,
        class1962: entry.class1962,
        numericRank: entry.numericRank,
      });
    }
  }

  const tempora = loadTempora();
  for (const [id, entry] of Object.entries(tempora)) {
    if (defs[id]) continue;
    defs[id] = new LiturgicalDayDef1962({
      key: id,
      source: 'tempora',
      name: entry.officium ?? id,
      rank1962: entry.rank?.rank1962,
      class1962: entry.rank?.class1962,
      numericRank: entry.rank?.numericRank,
      colors: entry.colors,
    });
  }

  if (overlay) {
    for (const link of flattenCalendarChain(overlay)) {
      for (const entry of link.entries) {
        defs[entry.fileKey] = new LiturgicalDayDef1962({
          key: entry.fileKey,
          source: 'overlay',
          name: entry.name,
          mmdd: entry.mmdd,
          rank1962: entry.rank1962,
          class1962: entry.class1962,
          numericRank: entry.numericRank,
          colors: entry.mass?.colors,
        });
      }
    }
  }

  return defs;
}
