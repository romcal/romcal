import { PROPER_OF_TIME_ID } from '../constants';
import { CalendarDef } from '../types';

export function isProperOfTimeDefinition(maybeProperOfTime?: unknown): maybeProperOfTime is CalendarDef {
  return (
    typeof maybeProperOfTime === 'object' &&
    maybeProperOfTime !== null &&
    typeof (maybeProperOfTime as CalendarDef).calendarId === 'string' &&
    (maybeProperOfTime as CalendarDef).calendarId === PROPER_OF_TIME_ID &&
    Array.isArray((maybeProperOfTime as CalendarDef).calendarTree) &&
    typeof (maybeProperOfTime as CalendarDef).config === 'object' &&
    Array.isArray((maybeProperOfTime as CalendarDef).definitions)
  );
}
