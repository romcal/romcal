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
export { buildProperOfTime1962 } from './proper-of-time';
export type {
  DayOfWeek,
  ProperOfTimeEntry,
  ProperOfTimeSeason,
  ProperOfTimeYear,
  TemporaSlotKind,
} from './proper-of-time';
export { buildSanctoral1962 } from './sanctoral';
export type {
  Color,
  SanctoralCommemoration,
  SanctoralEntry1962,
  SanctoralPropersRef,
  Sanctoral1962Year,
} from './sanctoral';
export { buildLiturgicalYear1962 } from './calendar-year';
export type { Celebration1962, ResolvedDay1962, ResolvedYear1962 } from './calendar-year';
export { attachPropers, resolvePropers } from './propers';
export type { AttachPropersOptions, ResolvedPropers, ResolvePropersOptions } from './propers';
export { applyCommemorationCap } from './rubrics';
export type { CommemorationCapMode, CommemorationCapOptions } from './rubrics';
export { Romcal1962 } from './romcal-1962';
export type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from './romcal-1962-types';
export { RANKS_1962, Rank1962Values } from './constants/rank-1962';
export type { Rank1962 } from './constants/rank-1962';
export type {
  Commemoration1962,
  LiturgicalDay1962Extensions,
  LocalizedText,
  MassPropers,
  OctaveInfo,
  PropersBlock,
  ProperRef1962,
  RubricFlags1962,
} from './types/liturgical-day-1962';

export const RITE_ID = 'roman1962' as const;
