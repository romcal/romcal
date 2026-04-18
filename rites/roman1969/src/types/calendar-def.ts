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
  /**
   * List of all parent CalendarDef definitions (excluding the general Roman calendar)
   * that serve as the base for the current calendar. The order of this list is important,
   * as it determines the priority of calendars (from the most general to the most local).
   * This hierarchy allows for proper inheritance and overriding of liturgical definitions.
   */
  ParentCalendars?: CalendarDefInstance[] | null;
  parentCalendarInstances?: InstanceType<CalendarDefInstance>[];
  /**
   * Configuration options specific to this calendar.
   * These settings can override or extend the default Romcal configuration or any parent calendar
   * configuration.
   */
  particularConfig?: ParticularConfig;
  /**
   * Collection of liturgical day definitions specific to this calendar.
   * Each entry is identified by a unique ID and describes the date, precedence, commons, and other
   * attributes. This collection may also include definitions that supplement or override those from
   * parent calendars.
   */
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
