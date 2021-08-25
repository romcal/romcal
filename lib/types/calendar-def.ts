import { RomcalConfig } from '../models/config';
import LiturgicalDayDef from '../models/liturgical-day-def';
import { Dates } from '../utils/dates';
import { Key, XOR } from './common';
import { RomcalConfigInput } from './config';
import { LiturgicalDayBundleInput, LiturgicalDayInput } from './liturgical-day';

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
