/**
 * Module-scope side-channel for overlay per-locale display names. The
 * 1962 overlays carry `names: { la, en, de, fr, it, ... }` maps on each
 * entry; the rubrics-facing CalendarDef inputs only carry ids and
 * precedences, so the names land here for B2e to fold into i18n
 * bundles (mirroring the legacy `collectOverlayNames` helper).
 */
const NAMES: Map<string, Record<string, string>> = new Map();

export function setOverlayNames(id: string, names: Record<string, string>): void {
  NAMES.set(id, { ...names });
}

export function getOverlayNames(id: string): Record<string, string> | undefined {
  return NAMES.get(id);
}

/**
 * Drain every registered entry into a flat `{id → localised-name}` map
 * for the requested locale. Missing locales fall through; callers are
 * expected to layer an `en → la` chain on top.
 */
export function collectOverlayNamesForLocale(locale: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [id, m] of NAMES.entries()) {
    if (m[locale]) out[id] = m[locale];
  }
  return out;
}

export function clearOverlayNames(): void {
  NAMES.clear();
}
