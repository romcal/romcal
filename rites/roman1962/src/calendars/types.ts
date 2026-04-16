import type { Rank1962 } from '../constants/rank-1962';
import type { Color } from '../sanctoral/types';

/**
 * A single overlay entry. Modes:
 *   • `'add'` (default) — append as a new candidate on the date; the
 *     occurrence resolver ranks it against the universal entry.
 *   • `'replace'` — drop every universal entry on that date before
 *     adding this one. Use sparingly (typically only when the diocese
 *     actively suppresses the universal feast).
 *   • `'raise'` — elevate an existing entry with the same `fileKey` in
 *     place (updating `class1962`, `rank1962`, `numericRank`, and
 *     `name`). Falls back to `'add'` when no match is present. This is
 *     the right mode for diocesan principal patrons whose feast is
 *     already a universal entry (e.g. St. Charles Borromeo for Lugano).
 */
export interface CalendarOverlayEntry {
  mmdd: string;
  fileKey: string;
  name: string;
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  numericRank: number;
  mode?: 'add' | 'replace' | 'raise';
  mass?: {
    colors: Color[];
    references: Record<string, string>;
    rubrics?: { gloria?: boolean; credo?: boolean };
  };
  /**
   * Per-locale display names, keyed by locale id (`la`, `de`, `en`, …).
   * The Latin entry, if present, is authoritative; other locales are
   * optional and fall through i18next's `requested → en → la` chain.
   */
  names?: Partial<Record<string, string>>;
}

export interface CalendarOverlay1962 {
  id: string;
  parents?: CalendarOverlay1962[];
  entries: CalendarOverlayEntry[];
}
