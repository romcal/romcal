import { particularCalendars } from '../particular-calendars';
import { toPackageName } from '../utils/string';

import { GENERAL_ROMAN_NAME } from './general-calendar-names';

export const CALENDAR_VAR_NAMES = Object.keys(particularCalendars).concat([GENERAL_ROMAN_NAME]).sort();
export const CALENDAR_PKG_NAMES = CALENDAR_VAR_NAMES.map((name) => toPackageName(name, true));

export const CALENDAR_IDS = CALENDAR_VAR_NAMES.map((name) => toPackageName(name));
