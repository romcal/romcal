import type { Rank1962 } from '../constants/rank-1962';
import type { Color } from '../sanctoral/types';

/**
 * A single overlay entry. `mode: 'replace'` drops any existing universal
 * calendar entries for that `mmdd` before adding this one (used for
 * principal patrons that must occupy the day). `mode: 'add'` appends so
 * the occurrence rules can rank them against the universal feast.
 */
export interface CalendarOverlayEntry {
  mmdd: string;
  fileKey: string;
  name: string;
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  numericRank: number;
  mode?: 'add' | 'replace';
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
