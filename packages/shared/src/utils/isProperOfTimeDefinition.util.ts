import { PROPER_OF_TIME_ID } from '../constants';
import { CalendarDef } from '../types';

export function isProperOfTimeDefinition(
  maybeProperOfTime?: unknown,
): maybeProperOfTime is CalendarDef {
  return (
    typeof maybeProperOfTime === 'object' &&
    maybeProperOfTime !== null &&
    typeof (maybeProperOfTime as CalendarDef).calendarId === 'string' &&
    (maybeProperOfTime as CalendarDef).calendarId === PROPER_OF_TIME_ID &&
    Array.isArray((maybeProperOfTime as CalendarDef).calendarTree) &&
    typeof (maybeProperOfTime as CalendarDef).config === 'object' &&
    Array.isArray((maybeProperOfTime as CalendarDef).definitions) &&
    (maybeProperOfTime as CalendarDef).calendarId === PROPER_OF_TIME_ID
  );
}

export function assertIsProperOfTimeDefinition(
  maybeProperOfTime?: unknown,
): asserts maybeProperOfTime is CalendarDef {
  if (!isProperOfTimeDefinition(maybeProperOfTime)) {
    throw new Error('The provided element is not a proper of time definition.');
  }
}
