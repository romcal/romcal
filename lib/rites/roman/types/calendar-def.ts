import { RomcalConfig } from '@roman-rite/models/config';
import LiturgicalDay from '@roman-rite/models/liturgical-day';
import LiturgicalDayDef from '@roman-rite/models/liturgical-day-def';
import { RomcalConfigInput } from '@roman-rite/types/config';
import { DateDefInput, RomcalCalendarMetadata } from '@roman-rite/types/liturgical-day';
import { Dates } from '@roman-rite/utils/dates';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { SaintCount } from '@romcal/types/martyrology';
import { Dayjs } from 'dayjs';

export type LiturgicalCalendar = Record<string, LiturgicalDay[]>;

export type ParticularConfig = Partial<
  Pick<RomcalConfig, 'ascensionOnSunday' | 'epiphanyOnSunday' | 'corpusChristiOnSunday'>
>;

export type ByKeys = Record<string, LiturgicalDay>;
export type DatesIndex = Record<string, string[]>;

export type LiturgicalDefBuiltData = {
  byKeys: ByKeys;
  datesIndex: DatesIndex;
};

export type TitlesDef =
  | (Titles | PatronTitles)[]
  | ((titles: (Titles | PatronTitles)[]) => (Titles | PatronTitles)[]);

export type MartyrologyItemPointer = (string | MartyrologyItemRedefined)[];
export type MartyrologyItemRedefined = {
  key: string;
  titles?: TitlesDef;
  hideTitles?: boolean;
  count?: SaintCount;
};

/**
 * General date definition collection, used in the [CalendarDef] class
 */
export type InputDefinitions = Record<string, DateDefInput>;
export type ProperOfTimeDateDefinitions = Map<string, ProperOfTimeDateDefInput>;

/**
 * Extended Date Definitions.
 */
export type ExtendedDefinitions = Record<string, LiturgicalDayDef>;

/**
 * Used specifically for the Proper of Time.
 */
export type ProperOfTimeDateDefInput = Required<
  Pick<LiturgicalDay, 'precedence' | 'seasons' | 'periods' | 'liturgicalColors' | 'name'>
> & {
  date: (year: number) => Dayjs | null;
  calendar: (date: Dayjs) => RomcalCalendarMetadata;
  isHolyDayOfObligation?: boolean;
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
  buildAllDefinitions: (byKeys: ByKeys) => ByKeys;
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
