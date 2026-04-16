import type { Calendar1960, CalendarEntry, MassFileEntry, MassFileMap } from '../sanctoral/data';

import type { CalendarOverlay1962, CalendarOverlayEntry } from './types';

/**
 * Walk an overlay's parent chain breadth-first, deduplicating by id so a
 * diocese referenced through both its country and its region is applied
 * only once. Parents apply first (base), then the overlay itself — so a
 * diocese can refine what the country-level overlay established.
 */
function flattenOverlayChain(overlay: CalendarOverlay1962): CalendarOverlay1962[] {
  const seen = new Set<string>();
  const out: CalendarOverlay1962[] = [];
  const walk = (o: CalendarOverlay1962): void => {
    for (const p of o.parents ?? []) walk(p);
    if (seen.has(o.id)) return;
    seen.add(o.id);
    out.push(o);
  };
  walk(overlay);
  return out;
}

function toCalendarEntry(e: CalendarOverlayEntry): CalendarEntry {
  return {
    fileKey: e.fileKey,
    name: e.name,
    numericRank: e.numericRank,
    class1962: e.class1962,
    rank1962: e.rank1962,
  };
}

function toMassFileEntry(e: CalendarOverlayEntry): MassFileEntry | undefined {
  if (!e.mass) return undefined;
  return {
    id: `sancti/${e.fileKey}`,
    file: `overlay/${e.fileKey}`,
    source: 'sancti',
    officium: e.name,
    colors: e.mass.colors,
    rubrics: {
      gloria: e.mass.rubrics?.gloria,
      credo: e.mass.rubrics?.credo,
      raw: [],
    },
    references: e.mass.references,
    sections: {},
  };
}

export interface OverlayApplyResult {
  calendar: Calendar1960;
  sancti: MassFileMap;
}

/**
 * Apply an overlay chain to the base (universal) calendar and sancti
 * maps without mutating the inputs. Returns a shallow-cloned pair ready
 * to feed into `buildSanctoral1962`.
 */
export function applyOverlay(
  baseCalendar: Calendar1960,
  baseSancti: MassFileMap,
  overlay: CalendarOverlay1962
): OverlayApplyResult {
  const calendar: Calendar1960 = {};
  for (const [mmdd, entries] of Object.entries(baseCalendar)) {
    calendar[mmdd] = [...entries];
  }
  const sancti: MassFileMap = { ...baseSancti };

  for (const o of flattenOverlayChain(overlay)) {
    for (const entry of o.entries) {
      const calEntry = toCalendarEntry(entry);
      const existing = calendar[entry.mmdd];

      if (entry.mode === 'raise' && existing) {
        const idx = existing.findIndex((e) => e.fileKey === entry.fileKey);
        if (idx >= 0) {
          const next = [...existing];
          next[idx] = { ...next[idx], ...calEntry };
          calendar[entry.mmdd] = next;
        } else {
          calendar[entry.mmdd] = [calEntry, ...existing];
        }
      } else if (entry.mode === 'replace' || !existing) {
        calendar[entry.mmdd] = [calEntry];
      } else {
        calendar[entry.mmdd] = [calEntry, ...existing];
      }

      const mass = toMassFileEntry(entry);
      if (mass) {
        if (entry.mode === 'raise' && sancti[entry.fileKey]) {
          // Preserve the universal Mass references/sections; just bump
          // the rubrics/colors if the overlay specifies them.
          sancti[entry.fileKey] = {
            ...sancti[entry.fileKey],
            colors: mass.colors.length ? mass.colors : sancti[entry.fileKey].colors,
            rubrics: { ...sancti[entry.fileKey].rubrics, ...mass.rubrics },
          };
        } else {
          sancti[entry.fileKey] = mass;
        }
      }
    }
  }
  return { calendar, sancti };
}

/**
 * Collect per-locale `names` maps from every overlay in the chain,
 * later overlays winning. Keys are namespaced `sancti/{fileKey}` so they
 * plug into the existing i18next resource bundles directly.
 */
export function collectOverlayNames(overlay: CalendarOverlay1962): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {};
  for (const o of flattenOverlayChain(overlay)) {
    for (const entry of o.entries) {
      if (!entry.names) continue;
      for (const [lang, value] of Object.entries(entry.names)) {
        if (value === undefined) continue;
        (out[lang] ??= {})[`sancti/${entry.fileKey}`] = value;
      }
    }
  }
  return out;
}
