import {
  CalendarDef,
  CalendarScope,
  DEFAULT_CALENDAR_CONFIG,
  PROPER_OF_TIME_ID,
} from '@romcal/shared';

import {
  advent,
  christmasTime,
  earlyChristmasTime,
  easterTime,
  lateChristmasTime,
  lent,
  ordinaryTime,
  paschalTriduum,
} from './seasons';

export const computeProperOfTimeCalendarDef = (scope: CalendarScope): CalendarDef => {
  return {
    calendarId: PROPER_OF_TIME_ID,
    calendarTree: [],
    config: DEFAULT_CALENDAR_CONFIG,
    definitions:
      scope === CalendarScope.Gregorian
        ? [
            ...lateChristmasTime(),
            ...lent(),
            ...paschalTriduum(),
            ...easterTime(),
            ...ordinaryTime(),
            ...advent(+1),
            ...earlyChristmasTime(+1),
          ]
        : [
            ...advent(),
            ...christmasTime(),
            ...lent(),
            ...paschalTriduum(),
            ...easterTime(),
            ...ordinaryTime(),
          ],
  };
};
