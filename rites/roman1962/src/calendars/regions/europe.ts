import { CalendarDefBase as CalendarDef } from '@internal/rite-roman1969';

import type { CalendarOverlayEntry } from '../types';

/**
 * Empty European base overlay. Kept as an explicit anchor so future
 * continent-wide particular feasts (e.g. co-patrons of Europe) have a
 * defined place to land without restructuring descendants.
 */
export class Europe extends CalendarDef<CalendarOverlayEntry> {
  readonly entries: readonly CalendarOverlayEntry[] = [];
}
