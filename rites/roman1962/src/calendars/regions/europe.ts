import { CalendarDef } from '@internal/calendars';

import type { CalendarOverlayEntry } from '../types';

/**
 * Empty European base overlay. Kept as an explicit anchor so future
 * continent-wide particular feasts (e.g. co-patrons of Europe) have a
 * defined place to land without restructuring descendants.
 */
export class Europe extends CalendarDef<CalendarOverlayEntry> {
  get id(): string {
    return 'europe';
  }

  readonly entries: readonly CalendarOverlayEntry[] = [];
}
