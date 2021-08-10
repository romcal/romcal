import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { RomcalConfigInput } from '@romcal/types/config';
import { Key, LiturgicalDayInput } from '@romcal/types/liturgical-day';
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
export type LiturgicalDayDefinitions = Record<Key, LiturgicalDayDef>;

/**
 * Base [CalendarDef] interface
 */
export interface ICalendarDef {
  inheritFrom?: BaseCalendarDef | null;
  inheritFromInstance?: InstanceType<BaseCalendarDef>;
  particularConfig?: ParticularConfig;
  definitions: InputDefinitions;
  dates: typeof Dates;
  updateConfig: (config?: RomcalConfigInput) => void;
  buildAllDefinitions: () => void;
}

interface IConstructor<InstanceInterface> {
  new (config: RomcalConfig): InstanceInterface;
}

export type BaseCalendarDef = IConstructor<ICalendarDef>;
