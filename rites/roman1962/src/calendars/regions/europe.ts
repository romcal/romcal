import type { CalendarOverlay1962 } from '../types';

/**
 * Empty European base overlay. Kept as an explicit anchor so future
 * continent-wide particular feasts (e.g. co-patrons of Europe) have a
 * defined place to land without restructuring descendants.
 */
export const Europe: CalendarOverlay1962 = {
  id: 'europe',
  entries: [],
};
