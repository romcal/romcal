import { Vocabulary } from '../types/vocabulary';

import { CalendarDef } from './calendar-def';

/**
 * The calendar every particular calendar of a rite inherits from.
 *
 * The engine has to put *some* calendar underneath a particular one when no
 * localized bundle is supplied, but which calendar that is belongs to the rite:
 * the General Roman Calendar for the 1969 rite, its own for 1962. So the rite
 * registers it as it loads, and the engine asks for it by role rather than by name.
 */

type CalendarDefConstructor<V extends Vocabulary> = typeof CalendarDef<V>;

/**
 * Held without its vocabulary: a single registry serves whichever rite is loaded, so the
 * vocabulary is known to the rite that registers the calendar and to the config that
 * later asks for it, but not to the slot in between.
 */
let baseCalendar: unknown;

export const registerBaseCalendar = <V extends Vocabulary>(calendar: CalendarDefConstructor<V>): void => {
  baseCalendar = calendar;
};

export const getBaseCalendar = <V extends Vocabulary>(): CalendarDefConstructor<V> => {
  if (!baseCalendar) {
    throw new Error(
      'No base calendar has been registered. A rite must call registerBaseCalendar() before building a calendar; ' +
        'importing the rite entry point (for example `romcal`) does this.'
    );
  }

  return baseCalendar as CalendarDefConstructor<V>;
};
