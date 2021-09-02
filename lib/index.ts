import { version } from '../package.json';
import { CALENDAR_SCOPES, CalendarScope, CalendarScopes } from './constants/calendar-scopes';
import { Color, COLORS, Colors, isColor } from './constants/colors';
import {
  LITURGICAL_DAY_CYCLE,
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
  InputDefinitions,
  LiturgicalDayDefinitions,
  ParticularConfig,
} from './types/calendar-def';
import { Key } from './types/common';
import { RomcalConfigInput, RomcalConfigOutput } from './types/config';
import {
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
   * Dates library
   * @param year
   */
  dates(year?: number): Dates {
    const ldConfig = new LiturgicalDayConfig(this.#config, year);
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
    options: { year?: number; computeInWholeYear?: boolean } = { computeInWholeYear: false },
  ): Promise<LiturgicalDay | null | undefined> {
    const ldConfig = new LiturgicalDayConfig(this.#config, options.year);

    return new Promise((resolve, reject) => {
      try {
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
  generateCalendar(year?: number): Promise<LiturgicalCalendar> {
    const ldConfig = new LiturgicalDayConfig(this.#config, year);
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      // Return cached data, if the calendar has been already computed
      if (this.#computedCalendars[ldConfig.year]) {
        return resolve(this.#computedCalendars[ldConfig.year]);
      }

      try {
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
   * Get all possible liturgical days from the Proper of the Time of the General
   * Roman Calendar, outside the context of a specific year.
   */
  getProperOfTimeDefinitions(): Promise<LiturgicalDayDefinitions> {
    return new Promise((resolve, reject) => {
      try {
        this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
        resolve(
          Object.values(this.#config.liturgicalDayDef)
            .filter((def) => def.fromCalendar === PROPER_OF_TIME_NAME)
            .reduce((obj: LiturgicalDayDefinitions, def) => {
              obj[def.key] = def;
              return obj;
            }, {}),
        );
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

  static CalendarScopes = CalendarScopes;
  static Colors = Colors;
  static ProperCycles = ProperCycles;
  static SundaysCycles = SundaysCycles;
  static WeekdaysCycles = WeekdaysCycles;
  static PsalterWeeksCycles = PsalterWeeksCycles;
  static CanonizationLevels = CanonizationLevels;
  static Sexes = Sexes;
  static Titles = Titles;
  static PatronTitles = PatronTitles;
  static Precedences = Precedences;
  static Ranks = Ranks;
  static Seasons = Seasons;
  static Periods = Periods;
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
}

export default Romcal;

export {
  // constants/calendar-scope.ts
  CalendarScopes,
  CALENDAR_SCOPES,
  CalendarScope,
  // constants/colors.ts
  Colors,
  COLORS,
  Color,
  isColor,
  // constants/cycles.ts
  ProperCycles,
  SundaysCycles,
  WeekdaysCycles,
  PsalterWeeksCycles,
  LITURGICAL_DAY_CYCLE,
  SUNDAYS_CYCLE,
  WEEKDAYS_CYCLE,
  PSALTER_WEEKS,
  ProperCycle,
  SundaysCycle,
  WeekdaysCycle,
  PsalterWeeksCycle,
  // constants/general-calendar-names.ts
  PROPER_OF_TIME_NAME,
  GENERAL_ROMAN_NAME,
  // constants/martyrology-metadata.ts
  CanonizationLevels,
  CANONIZATION_LEVEL,
  CanonizationLevel,
  Titles,
  TITLES,
  Title,
  isMartyr,
  PatronTitles,
  PATRON_TITLES,
  PatronTitle,
  Sexes,
  SEXES,
  Sex,
  // constants/months.ts
  Months,
  MONTHS,
  // constants/periods.ts
  Periods,
  PERIODS,
  Period,
  // constants/precedences.ts
  Precedences,
  PRECEDENCES,
  Precedence,
  // constants/ranks.ts
  Ranks,
  RANKS,
  Rank,
  RanksFromPrecedence,
  // constants/seasons.ts
  Seasons,
  SEASONS,
  Season,
  // constants/weekdays.ts
  WEEKDAYS,
  // types/bundle.ts
  RomcalBundleObject,
  // types/calendar.ts
  LiturgicalCalendar,
  // types/calendar-def.ts
  CalendarDefInputs,
  ParticularConfig,
  InputDefinitions,
  LiturgicalDayDefinitions,
  // types/common.ts
  Key,
  // types/config.ts
  RomcalConfigInput,
  RomcalConfigOutput,
  // types/liturgical-day.ts
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
  // models/*
  RomcalBundle,
  Calendar,
  CalendarDef,
  RomcalConfig,
  LiturgicalDay,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  // utils/dates.ts
  getUtcDate,
  getUtcDateFromString,
  addDays,
  subtractsDays,
  isSameDate,
  dateDifference,
  startOfWeek,
  isValidDate,
  daysInMonth,
  getWeekNumber,
  computeGregorianEasterDate,
  rangeOfDays,
  rangeContainsDate,
  Dates,
  // utils/numbers.ts
  toRomanNumber,
};
