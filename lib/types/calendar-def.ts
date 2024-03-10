import { RomcalConfig } from '../models/config';
import { LiturgicalDayDef } from '../models/liturgical-day-def';
import { Dates } from '../utils/dates';

import { Id, XOR } from './common';
import { RomcalConfigInput } from './config';
import { LiturgicalDayBundleInput, LiturgicalDayInput } from './liturgical-day';

/**
 * Specific and proper configuration of a particular calendar
 */
export type ParticularConfig = Partial<
  Pick<RomcalConfig, 'ascensionOnSunday' | 'epiphanyOnSunday' | 'corpusChristiOnSunday' | 'easterCalculationType'>
>;

/**
 * General date definition collection
 */
export type CalendarDefInputs = XOR<Inputs, BundleInputs>;
export type Inputs = Record<Id, LiturgicalDayInput | LiturgicalDayInput[]>;
export type BundleInputs = Record<Id, LiturgicalDayBundleInput[]>;
export type LiturgicalDayDefinitions = Record<Id, LiturgicalDayDef>;

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendarDef {
  ParentCalendar?: CalendarDefInstance | null;
  parentCalendarInstance?: InstanceType<CalendarDefInstance>;
  particularConfig?: ParticularConfig;
  inputs: CalendarDefInputs;
  dates: typeof Dates;
  updateConfig: (config?: RomcalConfigInput) => void;
  buildAllDefinitions: () => void;
  calendarName: Id;
}

interface IConstructor<InstanceInterface> {
  new (config: RomcalConfig, definitions?: BundleInputs): InstanceInterface;
}

export type CalendarDefInstance = IConstructor<BaseCalendarDef>;
