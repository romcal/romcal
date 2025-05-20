import { calendarDefinitions } from '../calendars';
import { toPackageName } from '../utils/string';

export const CALENDAR_VAR_NAMES = Object.keys(calendarDefinitions).sort();
export const CALENDAR_PKG_NAMES = CALENDAR_VAR_NAMES.map((name) => toPackageName(name, true));

export const CALENDAR_IDS = CALENDAR_VAR_NAMES.map((name) => toPackageName(name));
