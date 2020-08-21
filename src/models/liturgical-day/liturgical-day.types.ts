import { RomcalTitle } from '@romcal/constants/titles/titles.type';
import { ISO8601DateString } from '@romcal/utils/type-guards/type-guards';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { RomcalLiturgicalColor } from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import {
  RomcalLiturgicalPeriod,
  RomcalLiturgicalSeason,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import { RomcalCyclesMetadata } from '@romcal/constants/cycles/cycles.type';
import { RomcalCalendarName } from '@romcal/constants/countries/country.type';
import { Dayjs } from 'dayjs';
import { LiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';

export type BaseLiturgicalDay = {
  key: string;
  name: string;
  date: ISO8601DateString;
  rank: Ranks;
  rankName: string;
  prioritized: boolean;
  liturgicalColors: RomcalLiturgicalColor[];
  liturgicalColorNames: string[];
  seasons: RomcalLiturgicalSeason[];
  seasonNames: string[];
  periods: RomcalLiturgicalPeriod[];
  cycles: RomcalCyclesMetadata;
  calendar: RomcalCalendarMetadata;
  fromCalendar: RomcalCalendarName;
  fromExtendedCalendars: LiturgyDayExtendedMetadata[];
  metadata: LiturgicalDayMetadata;
  base?: LiturgicalDay;
};

export type LiturgicalDayArgs = Readonly<Omit<BaseLiturgicalDay, 'date'> & Partial<LiturgicalDayMetadata>> & {
  readonly date: Dayjs;
  readonly baseItem?: LiturgicalDay;
  readonly _stack: number;
};

export type BaseLiturgicalDayInput = Pick<BaseLiturgicalDay, 'key'> &
  Partial<
    Omit<BaseLiturgicalDay, 'key' | 'date' | 'rankName' | 'liturgicalColors' | 'liturgicalColorNames' | 'cycles'>
  > & {
    date: Dayjs;
    liturgicalColors?: RomcalLiturgicalColor | RomcalLiturgicalColor[];
    cycles?: Partial<RomcalCyclesMetadata>;
    /**
     * The source of the liturgical day.
     *
     * This value is used when localizing dates so that the [[Locales.localizeDates]] function knows
     * which subtree in the locale file to look for.
     *
     * A special key, "temporal", may be used when you do not wish to specify any subtree but rather
     * provide the entire path (as a period delimited string) to the [[Locales.localizeDates]] function
     * to lookup.
     */
    source?: RomcalLiturgicalDaySources;
    drop?: boolean;
    /**
     * Allow to extend or replace properties of an already defined liturgical day (that have the same key).
     */
    extend?: boolean;
  };

export type LiturgicalDayExtendedInput = Omit<BaseLiturgicalDayInput, 'date' | 'extend'> &
  Partial<Pick<BaseLiturgicalDayInput, 'date'>> &
  Required<Pick<BaseLiturgicalDayInput, 'extend'>>;

/**
 * This type is used internally by romcal
 * during the construction of the liturgical calendar.
 * All properties except `key` and `date` are marked optional as
 * the the object is constructed in stages. This interface
 * should not be used in consumer applications.
 */
export type LiturgicalDayInput = BaseLiturgicalDayInput | LiturgicalDayExtendedInput;

export type LiturgiDayDiff = Partial<Pick<LiturgicalDayInput, 'name' | 'rank' | 'prioritized' | 'liturgicalColors'>> & {
  metadata?: Partial<LiturgicalDayMetadata>;
};

export type LiturgyDayExtendedMetadata = {
  fromCalendar: RomcalCalendarName;
  diff: LiturgiDayDiff;
};

export type RomcalCalendarMetadata = {
  totalWeeksInGregorianYear: number;
  totalWeeksInLiturgicalYear: number;
  weekOfGregorianYear: number;
  weekOfLiturgicalYear: number;
  weekOfSeason: number;
  dayOfGregorianYear: number;
  dayOfLiturgicalYear: number;
  dayOfSeason: number;
  dayOfWeek: number; // 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 is Sunday, 6 is Saturday
  dayOfWeekCountInMonth: number;
  startOfLiturgicalYear: Date | string;
  endOfLiturgicalYear: Date | string;
  easter: Date | string;
};

export type LiturgicalDayMetadata = {
  titles: RomcalTitle[];
};

/**
 * The source of the liturgical day.
 *
 * This value is used when localizing dates so that the [[Locales.localizeDates]] function knows
 * which subtree in the locale file to look for.
 *
 * A special key, "temporal", may be used when you do not wish to specify any subtree but rather
 * provide the entire path (as a period delimited string) to the [[Locales.localizeDates]] function
 * to lookup.
 */
export type RomcalLiturgicalDaySources =
  | 'temporal'
  | 'advent'
  | 'christmastide'
  | 'epiphany'
  | 'ordinary_time'
  | 'lent'
  | 'holy_week'
  | 'eastertide'
  | 'celebrations'
  | 'sanctoral';
