import { version } from '../package.json';
import { CALENDAR_PKG_NAMES, CALENDAR_VAR_NAMES } from '../tmp/constants/calendars';
import { LOCALE_KEYS, LOCALE_VAR_NAMES } from '../tmp/constants/locales';
import { Color, COLORS, Colors, isColor } from './constants/colors';
import {
  PROPER_CYCLE,
  ProperCycle,
  ProperCycles,
  PSALTER_WEEKS,
  PsalterWeeksCycle,
  PsalterWeeksCycles,
  SUNDAYS_CYCLE,
  SundaysCycle,
  SundaysCycles,
  WEEKDAYS_CYCLE,
  WeekdaysCycle,
  WeekdaysCycles,
} from './constants/cycles';
import { GENERAL_ROMAN_NAME, PROPER_OF_TIME_NAME } from './constants/general-calendar-names';
import {
  CANONIZATION_LEVEL,
  CanonizationLevel,
  CanonizationLevels,
  isMartyr,
  PATRON_TITLES,
  PatronTitle,
  PatronTitles,
  Sex,
  SEXES,
  Sexes,
  Title,
  TITLES,
  Titles,
} from './constants/martyrology-metadata';
import { Months, MONTHS } from './constants/months';
import { Period, PERIODS, Periods } from './constants/periods';
import { Precedence, PRECEDENCES, Precedences } from './constants/precedences';
import { Rank, RANKS, Ranks, RanksFromPrecedence } from './constants/ranks';
import { Season, SEASONS, Seasons } from './constants/seasons';
import { WEEKDAYS } from './constants/weekdays';
import { RomcalBundle } from './models/bundle';
import { Calendar } from './models/calendar';
import { CalendarDef } from './models/calendar-def';
import { RomcalConfig } from './models/config';
import LiturgicalDay from './models/liturgical-day';
import { LiturgicalDayConfig } from './models/liturgical-day-config';
import LiturgicalDayDef from './models/liturgical-day-def';
import { RomcalBundleObject } from './types/bundle';
import { LiturgicalCalendar } from './types/calendar';
import {
  CalendarDefInputs,
  Inputs,
  LiturgicalDayDefinitions,
  ParticularConfig,
} from './types/calendar-def';
import { Key } from './types/common';
import { CalendarScope, RomcalConfigInput, RomcalConfigOutput } from './types/config';
import {
  BaseLiturgicalDay,
  BaseLiturgicalDayDef,
  CalendarMetadata,
  DateDef,
  DateDefAddDay,
  DateDefDateFnAddDay,
  DateDefDateFnSubtractDay,
  DateDefException,
  DateDefExtended,
  DateDefMonthDate,
  DateDefMonthDowNthWeekInMonth,
  DateDefMonthLastDowInMonth,
  DateDefSubtractDay,
  DayOfWeek,
  LiturgicalDayInput,
  LiturgyDayDiff,
  MartyrologyItemPointer,
  MartyrologyItemRedefined,
  Month,
  PartialCyclesDef,
  RomcalCalendarMetadata,
  RomcalCyclesMetadata,
  TitlesDef,
} from './types/liturgical-day';
import { LiturgicalDayConfigOutput } from './types/liturgical-day-config';
import {
  Locale,
  LocaleColors,
  LocaleLiturgicalDayNames,
  LocaleMonths,
  LocaleOrdinals,
  LocaleWeeks,
} from './types/locale';
import {
  MartyrologyCatalog,
  MartyrologyItem,
  SaintCount,
  SaintDate,
  SaintDateDef,
} from './types/martyrology';
import {
  addDays,
  computeGregorianEasterDate,
  dateDifference,
  Dates,
  daysInMonth,
  getUtcDate,
  getUtcDateFromString,
  getWeekNumber,
  isSameDate,
  isValidDate,
  rangeContainsDate,
  rangeOfDays,
  startOfWeek,
  subtractsDays,
} from './utils/dates';
import { toRomanNumber } from './utils/numbers';

class Romcal {
  readonly #config: RomcalConfig;
  #computedCalendars: Record<number, LiturgicalCalendar> = {};
  #dates: Record<number, Dates> = {};

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  constructor(config?: RomcalConfigInput) {
    this.#config = new RomcalConfig(config);
  }

  /**
   * Get the complete configuration, used to create and generate a calendar.
   */
  public get config(): RomcalConfigOutput {
    return this.#config.toObject();
  }

  /**
   * Sanitize the provided year
   * @param year
   * @private
   */
  static #sanitizeYear(year?: number | string): number | undefined {
    const y: number | undefined = typeof year === 'string' ? parseInt(year, 10) : year;
    if (
      (y !== undefined && !Number.isInteger(y)) ||
      (Number.isInteger(y) && (y! < 0 || y! > 9999))
    ) {
      throw new Error('The provided year is incorrect');
    }
    return y;
  }

  /**
   * Dates library
   * @param year
   */
  dates(year?: number | string): Dates {
    const y = Romcal.#sanitizeYear(year);
    const ldConfig = new LiturgicalDayConfig(this.#config, y);
    if (this.#dates[ldConfig.year]) return this.#dates[ldConfig.year];
    return (this.#dates[ldConfig.year] = ldConfig.dates);
  }

  /**
   * Get one LiturgicalDay by its key.
   * Return undefined if not found, or null if the LiturgicalDay do not occur in the provided year.
   * Note: this function compute only one LiturgicalDay without the liturgical whole year background,
   * so some metadata may be missing, and the precedence rules between different LiturgicalDay
   * objects are ignored.
   *
   * Optionally, you can set the `computeInWholeYear` option to `true`,
   * so all the liturgical calendar will be computed before returning the desired liturgical day.
   * With this option enabled, all the metadata and precedence rules are correctly computed.
   *
   * @param key
   * @param options
   */
  getOneLiturgicalDay(
    key: Key,
    options: { year?: number | string; computeInWholeYear?: boolean } = {
      computeInWholeYear: false,
    },
  ): Promise<LiturgicalDay | null | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const y = Romcal.#sanitizeYear(options.year);
        const ldConfig = new LiturgicalDayConfig(this.#config, y);

        this.getAllDefinitions().then(() => {
          const partialLd = new Calendar(this.#config, ldConfig).getOneLiturgicalDay(key);
          if (!options.computeInWholeYear) return resolve(partialLd);

          if (!partialLd) resolve(partialLd);
          return this.generateCalendar(ldConfig.year).then((value) => {
            resolve(
              Object.values(value)
                .flat()
                .find((d) => d.key === key),
            );
          });
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Generate a liturgical calendar, within a Liturgical or Gregorian scope.
   */
  generateCalendar(year?: number | string): Promise<LiturgicalCalendar> {
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      try {
        const y = Romcal.#sanitizeYear(year);
        const ldConfig = new LiturgicalDayConfig(this.#config, y);

        // Return cached data, if the calendar has been already computed
        if (this.#computedCalendars[ldConfig.year]) {
          return resolve(this.#computedCalendars[ldConfig.year]);
        }

        this.getAllDefinitions().then(() => {
          this.#computedCalendars[ldConfig.year] = new Calendar(
            this.#config,
            ldConfig,
          ).generateCalendar();
          resolve(this.#computedCalendars[ldConfig.year]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Get all possible liturgical days from the currently selected calendar,
   * (including all possible inherited calendars until the General Roman Calendar,
   * and the Proper of the Time), outside the context of a specific year.
   */
  getAllDefinitions(): Promise<LiturgicalDayDefinitions> {
    return new Promise((resolve, reject) => {
      try {
        this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
        resolve(this.#config.liturgicalDayDef);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Get Romcal version
   */
  getVersion(): string {
    return Romcal.getVersion();
  }

  /**
   * Get Romcal version
   */
  static getVersion(): string {
    return version;
  }

  // constants/colors.ts
  static Colors = Colors;
  static COLORS = COLORS;
  static isColor = isColor;
  // constants/cycles.ts
  static ProperCycles = ProperCycles;
  static PROPER_CYCLE = PROPER_CYCLE;
  static SundaysCycles = SundaysCycles;
  static SUNDAYS_CYCLE = SUNDAYS_CYCLE;
  static WeekdaysCycles = WeekdaysCycles;
  static WEEKDAYS_CYCLE = WEEKDAYS_CYCLE;
  static PsalterWeeksCycles = PsalterWeeksCycles;
  static PSALTER_WEEKS = PSALTER_WEEKS;
  // constants/general-calendar-names.ts
  static PROPER_OF_TIME_NAME = PROPER_OF_TIME_NAME;
  static GENERAL_ROMAN_NAME = GENERAL_ROMAN_NAME;
  static CanonizationLevels = CanonizationLevels;
  static CANONIZATION_LEVEL = CANONIZATION_LEVEL;
  static Sexes = Sexes;
  static SEXES = SEXES;
  static Titles = Titles;
  static TITLES = TITLES;
  static isMartyr = isMartyr;
  static PatronTitles = PatronTitles;
  static PATRON_TITLES = PATRON_TITLES;
  // constants/months.ts
  static MONTHS = MONTHS;
  // constants/periods.ts
  static Periods = Periods;
  static PERIODS = PERIODS;
  // constants/precedences.ts
  static Precedences = Precedences;
  static PRECEDENCES = PRECEDENCES;
  // constants/ranks.ts
  static Ranks = Ranks;
  static RANKS = RANKS;
  static RanksFromPrecedence = RanksFromPrecedence;
  // constants/seasons.ts
  static Seasons = Seasons;
  static SEASONS = SEASONS;
  // constants/weekdays.ts
  static WEEKDAYS = WEEKDAYS;
  // models/*
  static RomcalBundle = RomcalBundle;
  static Calendar = Calendar;
  static CalendarDef = CalendarDef;
  static RomcalConfig = RomcalConfig;
  static LiturgicalDay = LiturgicalDay;
  static LiturgicalDayConfig = LiturgicalDayConfig;
  static LiturgicalDayDef = LiturgicalDayDef;
  // utils/dates.ts
  static getUtcDate = getUtcDate;
  static getUtcDateFromString = getUtcDateFromString;
  static addDays = addDays;
  static subtractsDays = subtractsDays;
  static isSameDate = isSameDate;
  static dateDifference = dateDifference;
  static startOfWeek = startOfWeek;
  static isValidDate = isValidDate;
  static daysInMonth = daysInMonth;
  static getWeekNumber = getWeekNumber;
  static computeGregorianEasterDate = computeGregorianEasterDate;
  static rangeContainsDate = rangeContainsDate;
  static rangeOfDays = rangeOfDays;
  // utils/numbers.ts
  static toRomanNumber = toRomanNumber;
  // generated data from build
  static CALENDAR_VAR_NAMES = CALENDAR_VAR_NAMES;
  static CALENDAR_PKG_NAMES = CALENDAR_PKG_NAMES;
  static LOCALE_VAR_NAMES = LOCALE_VAR_NAMES;
  static LOCALE_KEYS = LOCALE_KEYS;
}

export default Romcal;

export {
  // constants/colors.ts
  Color,
  // constants/cycles.ts
  ProperCycle,
  SundaysCycle,
  WeekdaysCycle,
  PsalterWeeksCycle,
  // constants/martyrology-metadata.ts
  CanonizationLevel,
  Title,
  PatronTitle,
  Sex,
  // constants/months.ts
  Months,
  // constants/periods.ts
  Period,
  // constants/precedences.ts
  Precedence,
  // constants/ranks.ts
  Rank,
  // constants/seasons.ts
  Season,
  // types/bundle.ts
  RomcalBundleObject,
  // types/calendar.ts
  LiturgicalCalendar,
  // types/calendar-def.ts
  CalendarDefInputs,
  ParticularConfig,
  Inputs,
  LiturgicalDayDefinitions,
  // types/common.ts
  Key,
  // types/config.ts
  RomcalConfigInput,
  RomcalConfigOutput,
  CalendarScope,
  // types/liturgical-day.ts
  BaseLiturgicalDay,
  BaseLiturgicalDayDef,
  DateDef,
  Month,
  DayOfWeek,
  DateDefMonthDate,
  DateDefDateFnAddDay,
  DateDefDateFnSubtractDay,
  DateDefMonthDowNthWeekInMonth,
  DateDefMonthLastDowInMonth,
  DateDefExtended,
  DateDefAddDay,
  DateDefSubtractDay,
  DateDefException,
  CalendarMetadata,
  RomcalCyclesMetadata,
  PartialCyclesDef,
  RomcalCalendarMetadata,
  TitlesDef,
  MartyrologyItemPointer,
  MartyrologyItemRedefined,
  LiturgicalDayInput,
  LiturgyDayDiff,
  // types/liturgical-day-config.ts
  LiturgicalDayConfigOutput,
  // types/locale.ts
  Locale,
  LocaleOrdinals,
  LocaleWeeks,
  LocaleMonths,
  LocaleColors,
  LocaleLiturgicalDayNames,
  // types/martyrology.ts
  SaintCount,
  SaintDate,
  SaintDateDef,
  MartyrologyCatalog,
  MartyrologyItem,
};
