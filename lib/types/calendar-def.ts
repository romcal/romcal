import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { RomcalConfigInput } from '@romcal/types/config';
import { Key, LiturgicalDayBundleInput, LiturgicalDayInput } from '@romcal/types/liturgical-day';
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
export type InputDefinitions = Record<Key, LiturgicalDayInput>;
export type BundleDefinitions = Record<Key, LiturgicalDayBundleInput[]>;
export type LiturgicalDayDefinitions = Record<Key, LiturgicalDayDef>;

/**
 * Base [CalendarDef] interface
 */
export interface ICalendarDef {
  parentCalendar?: BaseCalendarDef | null;
  parentCalendarInstance?: InstanceType<BaseCalendarDef>;
  particularConfig?: ParticularConfig;
  definitions: InputDefinitions;
  dates: typeof Dates;
  updateConfig: (config?: RomcalConfigInput) => void;
  buildAllDefinitions: () => void;
  calendarName: string;
}

interface IConstructor<InstanceInterface> {
  new (config: RomcalConfig): InstanceInterface;
}

export type BaseCalendarDef = IConstructor<ICalendarDef>;
