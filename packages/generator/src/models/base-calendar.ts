import { CalendarDef } from './calendar-def';

/**
 * The calendar every particular calendar of a rite inherits from.
 *
 * The engine has to put *some* calendar underneath a particular one when no
 * localized bundle is supplied, but which calendar that is belongs to the rite:
 * the General Roman Calendar for the 1969 rite, its own for 1962. So the rite
 * registers it as it loads, and the engine asks for it by role rather than by name.
 */

type CalendarDefConstructor = typeof CalendarDef;

let baseCalendar: CalendarDefConstructor | undefined;

export const registerBaseCalendar = (calendar: CalendarDefConstructor): void => {
  baseCalendar = calendar;
};

export const getBaseCalendar = (): CalendarDefConstructor => {
  if (!baseCalendar) {
    throw new Error(
      'No base calendar has been registered. A rite must call registerBaseCalendar() before building a calendar; ' +
        'importing the rite entry point (for example `romcal`) does this.'
    );
  }

  return baseCalendar;
};
