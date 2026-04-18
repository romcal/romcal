import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs } from '@internal/rite-roman1969';

import { GeneralRoman1962 } from '../general-roman';

/**
 * Empty European base overlay. Kept as an explicit anchor so future
 * continent-wide particular feasts (e.g. co-patrons of Europe) have a
 * defined place to land without restructuring descendants.
 *
 * Ported from legacy `calendars/regions/europe.ts`. The OOP version
 * chains directly to GeneralRoman1962 so the 1969 engine's parent
 * traversal runs the full 1962 sanctoral before Europe (and its
 * descendants) overlay on top.
 */
// Renaming this class will change the `calendarName` slug; keep as-is.

export class Europe extends CalendarDef {
  ParentCalendars = [GeneralRoman1962];

  inputs: Inputs = {};
}
