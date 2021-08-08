import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { RomcalConfigInput } from '@romcal/types/config';
import { BaseLiturgicalDay, Key, LiturgicalDayInput } from '@romcal/types/liturgical-day';
import { Dates } from '@romcal/utils/dates';

/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
export type LiturgicalCalendar = Record<string, BaseLiturgicalDay[]>;

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

export type ByKeys = Record<Key, BaseLiturgicalDay>;
export type DatesIndex = Record<string, Key[]>;

export type LiturgicalDefBuiltData = {
  byKeys: ByKeys;
  datesIndex: DatesIndex;
};

/**
 * Root interface for Constructor Interfaces. This is a workaround for
 * TypeScript's lack of "static" methods for classes.
 *
 * Based on StackOverflow user chris's solution. See
 * - https://stackoverflow.com/a/43484801/1037165
 * - https://pastebin.com/v8Rf6g6Y
 *
 * @interface IConstructor
 * @template InstanceInterface
 */
interface IConstructor<InstanceInterface> {
  /**
   * Explicitly typed constructor is required, so make an extremely permissive
   * declaration that can be refined in subclasses.
   *
   * @constructor
   */
  new (config: RomcalConfig): InstanceInterface;
}

/**
 * Base [CalendarDef] interface
 */
export interface ICalendarDef {
  inheritFrom?: BaseCalendarDef | null;
  inheritFromInstance?: InstanceType<BaseCalendarDef>;
  particularConfig?: ParticularConfig;
  definitions: InputDefinitions;
  dates: Dates;
  updateConfig: (config?: RomcalConfigInput) => void;
  buildAllDates: (builtData: LiturgicalDefBuiltData) => LiturgicalDefBuiltData;
  buildAllDefinitions: () => void;
}

/**
 * Create a Constructor Interface by extending IConstructor and
 * specifying [ICalendarDef].
 * This allows to define static methods from [ICalendarDef]
 */
interface StaticCalendarComputing<T extends ICalendarDef> extends IConstructor<T> {
  generateCalendar: (builtData: LiturgicalDefBuiltData) => LiturgicalCalendar;
}

export type BaseCalendarDef = StaticCalendarComputing<ICalendarDef>;
