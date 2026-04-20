/**
 * Public API of the 1962 Roman Rite (Missale Romanum 1962, Rubricae 1960).
 *
 * The 1962 calendar is implemented as a `Romcal` subclass over the shared
 * 1969 engine (`@internal/rite-roman1969`): `Romcal1962 extends
 * Romcal<LiturgicalDay1962>`, with `Calendar1962` / `LiturgicalDay1962` /
 * `GeneralRoman1962` / `ProperOfTime1962` overriding the engine seams
 * (`createCalendar`, `resolveOccurrence`, `postReduceDay`, etc.) that the
 * generic `Romcal<T>` exposes for rite variants.
 *
 * Only a curated surface is re-exported from `@internal/rite-roman1969`;
 * consumers needing the full 1969 API should import from that package
 * directly.
 */

// -- Shared engine (curated re-exports from the 1969 package) ---------------
export { CalendarDef, LiturgicalDay, Romcal } from '@internal/rite-roman1969';
export type {
  CalendarMetadata,
  Inputs,
  LiturgicalCalendar,
  LiturgicalDayInput,
  MonthIndex,
  ParticularConfig,
  Precedence,
  Rank,
  RomcalCalendarMetadata,
  RomcalConfig,
  RomcalConfigInput,
} from '@internal/rite-roman1969';

// -- 1962 rite ----------------------------------------------------------------
export { Calendar1962 } from './calendar';
export { LiturgicalDay1962 } from './liturgical-day';
export type { LiturgicalDay1962Extras, LiturgicalDayCommemoration, OctaveOf } from './liturgical-day';
export { Romcal1962 } from './romcal-1962';
export type { Romcal1962ConfigInput } from './romcal-1962';
export { RomcalConfig1962 } from './config-1962';
export type { CommemorationCapMode, RomcalConfig1962Input } from './config-1962';
export { ProperOfTime1962 } from './proper-of-time-def';
export { GeneralRoman1962, buildGeneralRoman1962Inputs } from './calendars/general-roman';
export {
  Europe,
  Overlays1962,
  Switzerland,
  Switzerland_Basel,
  Switzerland_Chur,
  Switzerland_Lausanne_Geneva_Fribourg,
  Switzerland_Lugano,
  Switzerland_Saint_Maurice_Abbey,
  Switzerland_Sankt_Gallen,
  Switzerland_Sion,
} from './calendars';
export type { Overlay1962Name } from './calendars';

// -- Constants + 1962-flavoured value/type sets -----------------------------
export { COMMONS_1962 } from './constants/common-1962';
export type { Common1962 } from './constants/common-1962';
export { OCTAVE_IDS } from './constants/octaves';
export type { OctaveDayKind, OctaveDayNumber, OctaveId, OctaveRank } from './constants/octaves';
export { PREFACE_IDS } from './constants/prefaces';
export type { PrefaceId } from './constants/prefaces';
export { COLORS_1962, Colors1962, isColor1962 } from './constants/colors-1962';
export type { Color1962 } from './constants/colors-1962';
export { RANKS_1962, Rank1962Values } from './constants/rank-1962';
export type { Rank1962 } from './constants/rank-1962';
export { PRECEDENCES_1962, Precedences1962 } from './constants/precedences-1962';
export type { Precedence1962 } from './constants/precedences-1962';
export {
  Class1962,
  Class1962FromPrecedence1962,
  Rank1962FromPrecedence1962,
  RanksFromPrecedence1962,
} from './constants/ranks-1962';
export { SEASONS_1962, Seasons1962 } from './constants/seasons-1962';
export type { Season1962 } from './constants/seasons-1962';

// -- Proper of Time (legacy functional builder kept for imports/tests) ------
export { buildProperOfTime1962, computeAnchors } from './proper-of-time';
export type {
  DayOfWeek,
  ProperOfTimeEntry,
  ProperOfTimeSeason,
  ProperOfTimeYear,
  TemporaSlotKind,
  YearAnchors,
} from './proper-of-time';

// -- i18n + locales ---------------------------------------------------------
export { createI18n1962, createNameTranslator } from './i18n/init';
export type { NameTranslator } from './i18n/init';
export { locales as locales1962, localeIds as localeIds1962 } from './locales';
export type {
  Locale1962,
  LocaleColors,
  LocaleId,
  LocaleMonths,
  LocaleNames,
  LocaleRanks,
  LocaleSeasons,
  LocaleStationChurches,
  LocaleWeekdays,
} from './types/locale';

// -- Bundle type ------------------------------------------------------------
export type { RomcalBundle1962 } from './types/bundle';

export const RITE_ID = 'roman1962' as const;
