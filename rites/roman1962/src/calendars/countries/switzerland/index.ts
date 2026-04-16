import { Europe } from '../../regions/europe';
import type { CalendarOverlay1962 } from '../../types';

/**
 * National-level Swiss overlay. Empty for now; diocesan calendars such
 * as Chur inherit from it, so any future nationwide proper (e.g.
 * Brother Klaus) lands here and propagates to every diocese.
 */
export const Switzerland: CalendarOverlay1962 = {
  id: 'switzerland',
  parents: [Europe],
  entries: [],
};
