import { calculateGregorianEasterDate, calculateJulianEasterDateToGregorianDate } from '@internal/easter';
import { version } from '@internal/package.json';

import { CALENDAR_PKG_NAMES, CALENDAR_VAR_NAMES } from './constants/calendars';
import { COLORS, Color, Colors, isColor } from './constants/colors';
import {
  PROPER_CYCLES,
  PSALTER_WEEKS,
  ProperCycle,
  ProperCycles,
  PsalterWeekCycle,
  PsalterWeekCycles,
  SUNDAY_CYCLES,
  SundayCycle,
  SundayCycles,
  WEEKDAY_CYCLES,
  WeekdayCycle,
  WeekdayCycles,
} from './constants/cycles';
import { GENERAL_ROMAN_NAME, PROPER_OF_TIME_NAME } from './constants/general-calendar-names';
import { LOCALE_IDS, LOCALE_VAR_NAMES, LOCALES } from './constants/locales';
import {
  CANONIZATION_LEVEL,
  CanonizationLevel,
  CanonizationLevels,
  PATRON_TITLES,
  PatronTitle,
  SEXES,
  Sex,
  Sexes,
  TITLES,
  Title,
  isMartyr,
} from './constants/martyrology-metadata';
import { MONTHS, Month, MonthIndex } from './constants/months';
import { PERIODS, Period } from './constants/periods';
import { PRECEDENCES, Precedence, Precedences } from './constants/precedences';
import { RANKS, Rank, Ranks, RanksFromPrecedence } from './constants/ranks';
import { SEASONS, Season } from './constants/seasons';
import { DayOfWeek, WEEKDAYS, Weekday } from './constants/weekdays';
import { RomcalBundle } from './models/bundle';
import { Calendar } from './models/calendar';
import { CalendarDef } from './models/calendar-def';
import { RomcalConfig } from './models/config';
import { CyclesMetadata } from './models/cycles-metadata';
import { LiturgicalDay } from './models/liturgical-day';
import { LiturgicalDayConfig } from './models/liturgical-day-config';
import { LiturgicalDayDef } from './models/liturgical-day-def';
import { RomcalBundleObject } from './types/bundle';
import { LiturgicalCalendar } from './types/calendar';
import {
  BundleInputs,
  CalendarDefInputs,
  Inputs,
  LiturgicalDayDefinitions,
  ParticularConfig,
} from './types/calendar-def';
import { Id } from './types/common';
import { CalendarScope, RomcalConfigInput, RomcalConfigOutput } from './types/config';
import { BaseCyclesMetadata, PartialCyclesDef, PlainCyclesMetadata } from './types/cycles-metadata';
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
  FromCalendarId,
  LiturgicalDayInput,
  LiturgyDayDiff,
  MartyrologyItemPointer,
  MartyrologyItemRedefined,
  Rite,
  RomcalCalendarMetadata,
  RomcalTitles,
  TitlesDef,
  i18nDef,
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
import { MartyrologyCatalog, MartyrologyItem, SaintCount, SaintDate, SaintDateDef } from './types/martyrology';
import {
  Dates,
  addDays,
  dateDifference,
  dayOfWeek,
  daysInMonth,
  getUtcDate,
  getUtcDateFromString,
  getWeekNumber,
  isSameDate,
  isValidDate,
  isoDate,
  listDatesInYear,
  rangeContainsDate,
  rangeOfDays,
  startOfWeek,
  subtractsDays,
  utc,
} from './utils/dates';
import { isInteger, toRomanNumber } from './utils/numbers';

class Romcal<T extends LiturgicalDay = LiturgicalDay> {
  readonly #config: RomcalConfig;

  #computedCalendars: Record<number, LiturgicalCalendar<T>> = {};

  #dates: Record<number, Dates> = {};

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  constructor(config?: RomcalConfigInput) {
    this.#config = this.createConfig(config);
  }

  /**
   * Virtual factory returning the RomcalConfig instance. Subclasses override to
   * inject a rite-specific temporal cycle (ProperOfTimeCalendar param).
   */
  protected createConfig(input?: RomcalConfigInput): RomcalConfig {
    return new RomcalConfig(input);
  }

  /**
   * Virtual factory returning the Calendar instance used to compute a year.
   * Subclasses override to plug in a rite-specific Calendar subclass.
   */
  protected createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar<T> {
    return new Calendar<T>(config, ldConfig);
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
    if ((y !== undefined && !Number.isInteger(y)) || (isInteger(y) && (y < 0 || y > 9999))) {
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
   * Get one LiturgicalDay by its ID.
   * Return undefined if not found, or null if the LiturgicalDay do not occur in the provided year.
   * Note: this function compute only one LiturgicalDay without the liturgical whole year background,
   * so some metadata may be missing, and the precedence rules between different LiturgicalDay
   * objects are ignored.
   *
   * Optionally, you can set the `computeInWholeYear` option to `true`,
   * so all the liturgical calendar will be computed before returning the desired liturgical day.
   * With this option enabled, all the metadata and precedence rules are correctly computed.
   *
   * @param id
   * @param options
   */
  getOneLiturgicalDay(
    id: Id,
    options: { year?: number | string; computeInWholeYear?: boolean } = {
      computeInWholeYear: false,
    }
  ): Promise<T | null | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const y = Romcal.#sanitizeYear(options.year);
        const ldConfig = new LiturgicalDayConfig(this.#config, y);

        this.getAllDefinitions().then(() => {
          const partialLd = this.createCalendar(this.#config, ldConfig).getOneLiturgicalDay(id);
          if (!options.computeInWholeYear) return resolve(partialLd);

          if (!partialLd) resolve(partialLd);
          return this.generateCalendar(ldConfig.year).then((value) => {
            resolve(
              Object.values(value)
                .flat()
                .find((d) => d.id === id)
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
  generateCalendar(year?: number | string): Promise<LiturgicalCalendar<T>> {
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      try {
        const y = Romcal.#sanitizeYear(year);
        const ldConfig = new LiturgicalDayConfig(this.#config, y);

        // Return cached data, if the calendar has been already computed
        if (this.#computedCalendars[ldConfig.year]) {
          resolve(this.#computedCalendars[ldConfig.year]);
          return;
        }

        this.getAllDefinitions().then(() => {
          this.#computedCalendars[ldConfig.year] = this.createCalendar(this.#config, ldConfig).generateCalendar();
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

  static COLORS: Color[] = COLORS;

  static isColor = isColor;

  // constants/cycles.ts
  static ProperCycles = ProperCycles;

  static PROPER_CYCLE = PROPER_CYCLES;

  static SundayCycles = SundayCycles;

  static SUNDAYS_CYCLE = SUNDAY_CYCLES;

  static WeekdayCycles = WeekdayCycles;

  static WEEKDAYS_CYCLE = WEEKDAY_CYCLES;

  static PsalterWeekCycles = PsalterWeekCycles;

  static PSALTER_WEEKS = PSALTER_WEEKS;

  // constants/general-calendars.ts
  static PROPER_OF_TIME_NAME = PROPER_OF_TIME_NAME;

  static GENERAL_ROMAN_NAME = GENERAL_ROMAN_NAME;

  static CanonizationLevels = CanonizationLevels;

  static CANONIZATION_LEVEL = CANONIZATION_LEVEL;

  static Sexes = Sexes;

  static SEXES = SEXES;

  static Titles = Title;

  static TITLES = TITLES;

  static isMartyr = isMartyr;

  static PatronTitles = PatronTitle;

  static PATRON_TITLES = PATRON_TITLES;

  // constants/months.ts
  static MONTHS = MONTHS;

  // constants/periods.ts
  static Periods = Period;

  static PERIODS = PERIODS;

  // constants/precedences.ts
  static Precedences = Precedences;

  static PRECEDENCES = PRECEDENCES;

  // constants/ranks.ts
  static Ranks = Ranks;

  static RANKS = RANKS;

  static RanksFromPrecedence = RanksFromPrecedence;

  // constants/seasons.ts
  static Seasons = Season;

  static SEASONS = SEASONS;

  // constants/weekdays.ts
  static WEEKDAYS = WEEKDAYS;

  // models/*
  static RomcalBundle = RomcalBundle;

  static Calendar = Calendar;

  static CalendarDef = CalendarDef;

  static RomcalConfig = RomcalConfig;

  static CyclesMetadata = CyclesMetadata;

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

  static computeGregorianEasterDate = calculateGregorianEasterDate;

  static computeJulianEasterDate = calculateJulianEasterDateToGregorianDate;

  static computeLunarNewYear = Dates.lunarNewYear;

  static rangeContainsDate = rangeContainsDate;

  static rangeOfDays = rangeOfDays;

  // utils/numbers.ts
  static toRomanNumber = toRomanNumber;

  // generated data from build
  static CALENDAR_VAR_NAMES = CALENDAR_VAR_NAMES;

  static CALENDAR_PKG_NAMES = CALENDAR_PKG_NAMES;

  static LOCALE_VAR_NAMES = LOCALE_VAR_NAMES;

  static LOCALE_IDS = LOCALE_IDS;

  static LOCALES = LOCALES;
}

export {
  Romcal,
  Calendar,
  CalendarDef,
  CyclesMetadata,
  LiturgicalDay,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  RomcalBundle,
  RomcalConfig,
  // constants/colors.ts — value re-export for rite subclasses
  Colors,
  // constants/precedences.ts — value re-export for rite subclasses
  Precedences,
  // constants/cycles.ts — value re-export for rite subclasses
  ProperCycles,
  // constants/general-calendar-names.ts — value re-export for rite subclasses
  PROPER_OF_TIME_NAME,
  // types/cycles-metadata.ts
  BaseCyclesMetadata,
  // types/liturgical-day.ts
  BaseLiturgicalDay,
  BaseLiturgicalDayDef,
  BundleInputs,
  // types/calendar-def.ts
  CalendarDefInputs,
  CalendarMetadata,
  CalendarScope,
  // constants/martyrology-metadata.ts
  CanonizationLevel,
  // constants/colors.ts
  Color,
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
  FromCalendarId,
  i18nDef,
  // types/common.ts
  Id,
  Inputs,
  // types/calendar.ts
  LiturgicalCalendar,
  // types/liturgical-day-config.ts
  LiturgicalDayConfigOutput,
  LiturgicalDayDefinitions,
  LiturgicalDayInput,
  LiturgyDayDiff,
  // types/locale.ts
  Locale,
  LocaleColors,
  LocaleLiturgicalDayNames,
  LocaleMonths,
  LocaleOrdinals,
  LocaleWeeks,
  MartyrologyCatalog,
  MartyrologyItem,
  MartyrologyItemPointer,
  MartyrologyItemRedefined,
  // constants/months.ts
  Month,
  MonthIndex,
  PartialCyclesDef,
  ParticularConfig,
  PatronTitle,
  // constants/periods.ts
  Period,
  PlainCyclesMetadata,
  // constants/precedences.ts
  Precedence,
  // constants/cycles.ts
  ProperCycle,
  PsalterWeekCycle,
  // constants/ranks.ts
  Rank,
  Rite,
  // types/bundle.ts
  RomcalBundleObject,
  RomcalCalendarMetadata,
  // types/config.ts
  RomcalConfigInput,
  RomcalConfigOutput,
  RomcalTitles,
  // types/martyrology.ts
  SaintCount,
  SaintDate,
  SaintDateDef,
  // constants/seasons.ts
  Season,
  Sex,
  SundayCycle,
  Title,
  TitlesDef,
  // constants/Weekday.ts
  Weekday,
  WeekdayCycle,
};

// -- Exports consumed by the 1962 rite through @internal/rite-roman1969 --
//
// Upstream romcal (1969) rejected the shared-package reshape, so the
// engine bits 1962 needs live back here. 1962 imports them via the
// sibling workspace dependency.

// constants/months.ts + constants/weekdays.ts
export { MONTHS, WEEKDAYS };

// locales/index.ts — 1969 locale bundle map (seasons/ordinals/etc) used by
// 1962 i18n init to inherit nested season+ordinal data.
export { locales as LOCALES_1969 } from './locales';

// models/calendar-def-base.ts — abstract overlay base for 1962
export { CalendarDefBase, flattenCalendarChain } from './models/calendar-def-base';
export type { CalendarDefBaseConstructor } from './models/calendar-def-base';

// proper-of-time/anchors.ts — Easter-anchored date math shared across rites
export { computeAnchors } from './proper-of-time/anchors';
export type { ComputeAnchorsOptions, EasterCalculation, YearAnchors } from './proper-of-time/anchors';
export type { ProperOfTimeYear } from './proper-of-time/types';

// utils/dates.ts — date helpers used by 1962's proper-of-time + calendar-year builders
export { utc, dayOfWeek, isoDate, listDatesInYear, addDays, subtractsDays };

// utils/i18n.ts — tiny i18next helpers both rites share
export { addBundles, createI18nInstance } from './utils/i18n';
export type { NamespaceBundles, InitOptions, TFunction, i18n } from './utils/i18n';
