import {
  BaseLiturgicalDay as GenericBaseLiturgicalDay,
  BaseLiturgicalDayDef as GenericBaseLiturgicalDayDef,
  Calendar as GenericCalendar,
  CyclesMetadata as GenericCyclesMetadata,
  LiturgicalCalendar as GenericLiturgicalCalendar,
  LiturgicalDay as GenericLiturgicalDay,
  LiturgicalDayConfig as GenericLiturgicalDayConfig,
  LiturgicalDayDef as GenericLiturgicalDayDef,
  LiturgicalDayDefinitions as GenericLiturgicalDayDefinitions,
  LiturgicalDayInput as GenericLiturgicalDayInput,
  RomcalCalendarMetadata as GenericRomcalCalendarMetadata,
  RomcalConfig as GenericRomcalConfig,
} from '@internal/generator';

import { Roman1969Vocabulary } from './vocabulary';

/**
 * Engine models pinned to this rite's vocabulary.
 *
 * Instantiation expressions: same classes at runtime, but an unparameterised
 * `LiturgicalDay` (and friends) carries `Rank` / `Precedence` / `Season` /
 * `Period` instead of bare strings — matching `CalendarDef`.
 */

export const LiturgicalDay = GenericLiturgicalDay<Roman1969Vocabulary>;
export type LiturgicalDay = GenericLiturgicalDay<Roman1969Vocabulary>;

export const LiturgicalDayDef = GenericLiturgicalDayDef<Roman1969Vocabulary>;
export type LiturgicalDayDef = GenericLiturgicalDayDef<Roman1969Vocabulary>;

export const LiturgicalDayConfig = GenericLiturgicalDayConfig<Roman1969Vocabulary>;
export type LiturgicalDayConfig = GenericLiturgicalDayConfig<Roman1969Vocabulary>;

export const Calendar = GenericCalendar<Roman1969Vocabulary>;
export type Calendar = GenericCalendar<Roman1969Vocabulary>;

export const CyclesMetadata = GenericCyclesMetadata<Roman1969Vocabulary>;
export type CyclesMetadata = GenericCyclesMetadata<Roman1969Vocabulary>;

export const RomcalConfig = GenericRomcalConfig<Roman1969Vocabulary>;
export type RomcalConfig = GenericRomcalConfig<Roman1969Vocabulary>;

export type BaseLiturgicalDay = GenericBaseLiturgicalDay<Roman1969Vocabulary>;
export type BaseLiturgicalDayDef = GenericBaseLiturgicalDayDef<Roman1969Vocabulary>;
export type LiturgicalCalendar = GenericLiturgicalCalendar<Roman1969Vocabulary>;
export type LiturgicalDayDefinitions = GenericLiturgicalDayDefinitions<Roman1969Vocabulary>;
export type LiturgicalDayInput = GenericLiturgicalDayInput<Roman1969Vocabulary>;
export type RomcalCalendarMetadata = GenericRomcalCalendarMetadata<Roman1969Vocabulary>;
