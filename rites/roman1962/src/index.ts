/**
 * 1962 Roman Rite — scaffolding stub.
 * Re-exports the 1969 public API verbatim so downstream code can import
 * `Romcal` from `romcal/1962`. Real 1962-specific logic lands in M2+.
 * See docs/1962/08-m1-scaffolding.md.
 */

export * from '@internal/rite-roman1969';

export { COMMONS_1962 } from './constants/common-1962';
export type { Common1962 } from './constants/common-1962';
export { OCTAVE_IDS } from './constants/octaves';
export type { OctaveDayKind, OctaveDayNumber, OctaveId, OctaveRank } from './constants/octaves';
export { PREFACE_IDS } from './constants/prefaces';
export type { PrefaceId } from './constants/prefaces';
export { buildProperOfTime1962, computeAnchors } from './proper-of-time';
export type {
  DayOfWeek,
  ProperOfTimeEntry,
  ProperOfTimeSeason,
  ProperOfTimeYear,
  TemporaSlotKind,
  YearAnchors,
} from './proper-of-time';
export { buildSanctoral1962 } from './sanctoral';
export type {
  BuildSanctoralOptions,
  Color,
  SanctoralCommemoration,
  SanctoralEntry1962,
  SanctoralPropersRef,
  Sanctoral1962Year,
} from './sanctoral';
export {
  applyOverlay,
  calendarOverlays,
  collectOverlayNames,
  Europe,
  Switzerland,
  Switzerland_Basel,
  Switzerland_Chur,
  Switzerland_Lausanne_Geneva_Fribourg,
  Switzerland_Lugano,
  Switzerland_Saint_Maurice_Abbey,
  Switzerland_Sankt_Gallen,
  Switzerland_Sion,
} from './calendars';
export type { CalendarOverlay1962, CalendarOverlayEntry, OverlayApplyResult } from './calendars';
export { buildLiturgicalYear1962 } from './calendar-year';
export type { BuildLiturgicalYearOptions, LiturgicalDay1962, LiturgicalCalendar1962 } from './calendar-year';
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
  LocaleWeekdays,
} from './types/locale';
export { attachPropers, parseRef, parseSource, resolvePropers, resolvePropersBlocks } from './propers';
export type {
  AttachPropersOptions,
  Bundle,
  ResolvedPropers,
  ResolvedPropersBlocks,
  ResolvedRef,
  ResolvePropersOptions,
} from './propers';
export { applyCommemorationCap } from './rubrics';
export type { CommemorationCapMode, CommemorationCapOptions } from './rubrics';
export { Romcal1962 } from './romcal-1962';
export type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from './romcal-1962-types';
export { buildAllDefinitions } from './definitions';
export { LiturgicalDayDef1962 } from './models/liturgical-day-def';
export type {
  LiturgicalDayDef1962Init,
  LiturgicalDayDef1962Source,
  LiturgicalDayDefinitions1962,
} from './models/liturgical-day-def';
export { COLORS_1962, Colors1962, isColor1962 } from './constants/colors-1962';
export type { Color1962 } from './constants/colors-1962';
export { RANKS_1962, Rank1962Values } from './constants/rank-1962';
export type { Rank1962 } from './constants/rank-1962';
export { SEASONS_1962, Seasons1962 } from './constants/seasons-1962';
export type { Season1962 } from './constants/seasons-1962';
export type {
  Commemoration1962,
  LiturgicalDay1962Extensions,
  LocalizedText,
  MassPropers,
  MassPropersBlocks,
  MassSectionField,
  OctaveInfo,
  PropersBlock,
  PropersBlockItem,
  ProperRef1962,
  RubricFlags1962,
  TextRole,
} from './types/liturgical-day-1962';

export type { RomcalBundle1962 } from './models/bundle';

export const RITE_ID = 'roman1962' as const;
