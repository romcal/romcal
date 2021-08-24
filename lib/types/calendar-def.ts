import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { Key, XOR } from '@romcal/types/common';
import { RomcalConfigInput } from '@romcal/types/config';
import { LiturgicalDayBundleInput, LiturgicalDayInput } from '@romcal/types/liturgical-day';
import { Dates } from '@romcal/utils/dates';

/**
 * Specific and proper configuration of a particular calendar
 */
export type ParticularConfig = Partial<
  Pick<RomcalConfig, 'ascensionOnSunday' | 'epiphanyOnSunday' | 'corpusChristiOnSunday'>
>;

/**
 * General date definition collection
 */
export type CalendarDefInputs = XOR<InputDefinitions, BundleDefinitions>;
export type InputDefinitions = Record<Key, LiturgicalDayInput | LiturgicalDayInput[]>;
export type BundleDefinitions = Record<Key, LiturgicalDayBundleInput[]>;
export type LiturgicalDayDefinitions = Record<Key, LiturgicalDayDef>;

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendarDef {
  parentCalendar?: CalendarDefInstance | null;
  parentCalendarInstance?: InstanceType<CalendarDefInstance>;
  particularConfig?: ParticularConfig;
  definitions: CalendarDefInputs;
  dates: typeof Dates;
  updateConfig: (config?: RomcalConfigInput) => void;
  buildAllDefinitions: () => void;
  calendarName: string;
}

interface IConstructor<InstanceInterface> {
  new (config: RomcalConfig, definitions?: BundleDefinitions): InstanceInterface;
}

export type CalendarDefInstance = IConstructor<BaseCalendarDef>;
