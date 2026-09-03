/**
 * The calendar engine shared by every Roman Rite.
 *
 * A rite supplies data and rules: its calendars, locales, martyrology and the
 * particular configuration that shapes them. This package supplies everything
 * else, and knows about no rite in particular:
 *
 * - the contracts a calendar definition is written against (`CalendarDef`, the
 *   date-definition and liturgical-day types, `Precedences`, `Ranks`, `Commons`)
 * - the pipeline that turns those definitions into a year (`RomcalConfig`,
 *   `LiturgicalDayConfig`, `Calendar`, `LiturgicalDayDef`, `LiturgicalDay`)
 * - the Proper of Time, and the cycle framework it is measured against
 *
 * The rite-neutral date arithmetic sits one layer further down, in
 * `@internal/calendar-dates`.
 *
 * What stays with a rite is the data and the tables that data is indexed by: the
 * calendar and locale id lists, the martyrology catalogue, and the cycle tables
 * that map a year onto the framework declared here.
 */

export * from './constants/colors';
export * from './constants/commons';
export * from './constants/cycles';
export * from './constants/general-calendar-names';
export * from './constants/martyrology-metadata';
export * from './constants/months';
export * from './constants/periods';
export * from './constants/precedences';
export * from './constants/ranks';
export * from './constants/seasons';
export * from './constants/weekdays';
export * from './models/base-calendar';
export * from './models/bundle';
export * from './models/calendar';
export * from './models/calendar-def';
export * from './models/config';
export * from './default-rite';
export * from './models/cycles-metadata';
export * from './models/liturgical-day';
export * from './models/liturgical-day-config';
export * from './models/liturgical-day-def';
export * from './proper-of-time/proper-of-time';
export * from './rubrics/unly-1969';
export * from './types/bundle';
export * from './types/calendar';
export * from './types/calendar-def';
export * from './types/common';
export * from './types/config';
export * from './types/cycles-metadata';
export * from './types/dates';
export * from './types/liturgical-day';
export * from './types/liturgical-day-config';
export * from './types/locale';
export * from './types/martyrology';
export * from './types/rite';
export * from './types/rubrics';
export * from './types/vocabulary';
export * from './utils/arrays';
export * from './utils/dates';
export * from './utils/numbers';
export * from './utils/string';
export * from './utils/temporal-overrides';
