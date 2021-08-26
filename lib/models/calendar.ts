import { CalendarScope } from '../constants/calendar-scope';
import {
  ProperCycles,
  PSALTER_WEEKS,
  PsalterWeeksCycles,
  SUNDAYS_CYCLE,
  SundaysCycles,
  WEEKDAYS_CYCLE,
  WeekdaysCycles,
} from '../constants/cycles';
import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { LiturgicalPeriods } from '../constants/periods';
import { Precedences, PRECEDENCES } from '../constants/precedences';
import { Ranks } from '../constants/ranks';
import { LiturgicalSeasons } from '../constants/seasons';
import {
  BaseCalendar,
  DatesIndex,
  LiturgicalBuiltData,
  LiturgicalCalendar,
} from '../types/calendar';
import { Key } from '../types/common';
import { RomcalCalendarMetadata, RomcalCyclesMetadata } from '../types/liturgical-day';
import { dateDifference, Dates, getUtcDateFromString, isValidDate } from '../utils/dates';
import { RomcalConfig } from './config';
import LiturgicalDay from './liturgical-day';
import { LiturgicalDayConfig } from './liturgical-day-config';
import LiturgicalDayDef from './liturgical-day-def';

export class Calendar implements BaseCalendar {
  readonly #config: RomcalConfig;
  readonly #liturgicalDayConfig: LiturgicalDayConfig;
  readonly dates: Dates;
  readonly #startOfSeasonsDic: Record<number, Record<LiturgicalSeasons, Date>> = {};
  readonly #endOfSeasonsDic: Record<number, Record<LiturgicalSeasons, Date>> = {};
  readonly #cyclesCache: Record<
    number,
    Pick<RomcalCyclesMetadata, 'sundayCycle' | 'weekdayCycle'>
  > = {};

  constructor(config: RomcalConfig, liturgicalDayConfig: LiturgicalDayConfig) {
    this.#config = config;
    this.#liturgicalDayConfig = liturgicalDayConfig;
    this.dates = new Dates(config, liturgicalDayConfig.year);
  }

  /**
   * Build calendar metadata
   * @param def
   * @param date
   * @param baseData
   */
  #buildCalendarMetadata(
    def: LiturgicalDayDef,
    date: Date,
    baseData: LiturgicalDay | null,
  ): RomcalCalendarMetadata {
    let currentYear = this.#liturgicalDayConfig.year;

    if (
      this.#config.scope === CalendarScope.Gregorian &&
      this.#liturgicalDayConfig.dates
        .firstSundayOfAdvent(this.#liturgicalDayConfig.year)
        .getTime() <= date.getTime()
    ) {
      currentYear++;
    }

    const startOfSeasonsDic =
      this.#startOfSeasonsDic[currentYear] ||
      (this.#startOfSeasonsDic[currentYear] =
        this.#liturgicalDayConfig.dates.startOfSeasons(currentYear));

    const endOfSeasonsDic =
      this.#endOfSeasonsDic[currentYear] ||
      (this.#endOfSeasonsDic[currentYear] =
        this.#liturgicalDayConfig.dates.endOfSeasons(currentYear));

    const startOfSeason = def.seasons.length ? startOfSeasonsDic[def.seasons[0]] : undefined;
    const endOfSeason = def.seasons.length ? endOfSeasonsDic[def.seasons[0]] : undefined;
    const dayOfSeason =
      baseData?.calendar.dayOfSeason ??
      def.calendarMetadata.dayOfSeason ??
      (startOfSeason ? dateDifference(date, startOfSeason) + 2 : NaN);

    return {
      weekOfSeason:
        baseData?.calendar.weekOfSeason ??
        def.calendarMetadata.weekOfSeason ??
        (Number.isNaN(dayOfSeason) ? NaN : Math.ceil(dayOfSeason / 7)),
      dayOfSeason,
      dayOfWeek: baseData?.calendar.dayOfWeek ?? def.calendarMetadata.dayOfWeek ?? date.getDay(),
      nthDayOfWeekInMonth: Math.ceil(date.getDate() / 7),
      startOfSeason: startOfSeason ? startOfSeason.toISOString().substr(0, 10) : '',
      endOfSeason: endOfSeason ? endOfSeason.toISOString().substr(0, 10) : '',
      startOfLiturgicalYear: startOfSeasonsDic[LiturgicalSeasons.ADVENT]
        .toISOString()
        .substr(0, 10),
      endOfLiturgicalYear: endOfSeasonsDic[LiturgicalSeasons.ORDINARY_TIME]
        .toISOString()
        .substr(0, 10),
    };
  }

  /**
   * Build cycle metadata of the liturgical year.
   * @param date The date object
   * @param calendar The calendar metadata
   * @param properCycle
   * @private
   */
  #buildLiturgicalCycleMetadata(
    date: Date,
    calendar: RomcalCalendarMetadata,
    properCycle: ProperCycles,
  ): RomcalCyclesMetadata {
    const year = parseInt(calendar.startOfLiturgicalYear, 10);

    // Compute cycle of the liturgical year,
    // and cache the data since they are the same for every days of the year
    if (!this.#cyclesCache[year]) {
      const firstSundayOfAdvent = getUtcDateFromString(calendar.startOfLiturgicalYear);

      let sundayCycle: SundaysCycles;
      let weekdayCycle: WeekdaysCycles;

      // Formula to calculate Sunday cycle (Year A, B, C)
      const thisSundayCycleIndex: number = (year - 1963) % 3;
      const nextSundayCycleIndex: number =
        thisSundayCycleIndex === 2 ? 0 : thisSundayCycleIndex + 1;

      // If the date is on or after the First Sunday of Advent,
      // it is the next liturgical cycle
      if (date.getTime() >= firstSundayOfAdvent.getTime()) {
        sundayCycle = SundaysCycles[SUNDAYS_CYCLE[nextSundayCycleIndex]];
        weekdayCycle = WeekdaysCycles[WEEKDAYS_CYCLE[year % 2]];
      } else {
        sundayCycle = SundaysCycles[SUNDAYS_CYCLE[thisSundayCycleIndex]];
        weekdayCycle = WeekdaysCycles[WEEKDAYS_CYCLE[(year + 1) % 2]];
      }

      this.#cyclesCache[year] = {
        sundayCycle,
        weekdayCycle,
      };
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek = PsalterWeeksCycles[PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3]];

    return { properCycle, ...this.#cyclesCache[year], psalterWeek };
  }

  /**
   * Build the LiturgicalDay data collection, with their dates
   * @private
   */
  #buildDatesData(): LiturgicalBuiltData {
    const builtData: LiturgicalBuiltData = {
      byKeys: {},
      datesIndex: {},
    };

    Object.values(this.#config.liturgicalDayDef).forEach((def) => {
      // Flag to determine if the current definition is coming from the Proper of Time.
      // Note: a Proper of Time definition can be extended in a particular calendar;
      // in this case the `fromCalendar` is taking the name of the particular calendar,
      // so we need to check the calendar name of the first item in the `fromExtendedCalendars`.
      const isFromProperOfTime =
        def.fromCalendar === PROPER_OF_TIME_NAME ||
        (def.fromExtendedCalendars.length > 0 &&
          def.fromExtendedCalendars[0].fromCalendar === PROPER_OF_TIME_NAME);

      // In a Liturgical Calendar scope:
      // - Because a Liturgical Year is straddling 2 Gregorian year,
      //   we need to compute the date on the 2 Gregorian years,
      //   and then determine the one to keep between both.
      // - Note: dates from the Proper of Time are already generated within a liturgical year,
      //   so in this case we don't have to check the previously gregorian year.
      const previousYearDate =
        !isFromProperOfTime && this.#config.scope === CalendarScope.Liturgical
          ? this.#liturgicalDayConfig.buildDate(def, -1)
          : null;

      const currentYearDate = this.#liturgicalDayConfig.buildDate(def);

      [previousYearDate, currentYearDate]
        // Remove all dates that are null. This can occur when a liturgical day isn't celebrated
        // because of any general/particular calendar settings.
        // E.g. The 6th Thursday within the Easter Time can be not celebrated
        // because in some calendars, the Solemnity of the Ascension is taking precedence.
        .filter((d) => d && isValidDate(d))
        .forEach((date) => {
          // Typing: the nullable dates have been removed in the filter above,
          // so we redefine the date object as a non-nullable Date object
          date = date as Date;

          const dateStr = date.toISOString().substr(0, 10);

          // All the dates of the whole year (gregorian or liturgical) are already generated
          // from the Proper of Time.
          // Then, all dates from the general/particular calendar(s) that don't match
          // an existing date from the Proper of Time must be ignored,
          // because they falls outside the year scope defined by the Proper of Time.
          if (!isFromProperOfTime && !builtData.datesIndex[dateStr]) {
            return;
          }

          // Take the first LiturgicalDay object of a specified day.
          // The first object is always a LiturgicalDay from the Proper of Time,
          // since a LiturgicalDay is generated for each day of the Liturgical Year.
          // In the case the LiturgicalDayDef is coming from the Proper of Time,
          // the baseData must be null.
          const baseData: LiturgicalDay | null = isFromProperOfTime
            ? null
            : builtData.byKeys[builtData.datesIndex[dateStr][0]];

          // Retrieve calendar metadata from the proper of time
          const calendar: RomcalCalendarMetadata = isFromProperOfTime
            ? this.#buildCalendarMetadata(def, date, baseData)
            : baseData!.calendar;

          // Retrieve cycles metadata from the proper of time
          const cycles: RomcalCyclesMetadata = this.#buildLiturgicalCycleMetadata(
            date,
            calendar,
            def.cycles.properCycle,
          );

          /**
           * For Memorial and Feast celebrations only, the weekday property is added
           * containing the LiturgicalDay object of the base weekday.
           *
           * - Memorials: their observance is integrated into the celebration of the occurring weekday
           *   in accordance with the norms set forth in the General Instruction of the Roman
           *   Missal and of the Liturgy of the Hours. (UNLY #14)
           * - Liturgy of the hours: // todo: cite precise sources from the General Instructions of the Liturgy of the hours
           *    - Memorials: the liturgy of the hour remain the one of the weekday.
           *    - Feasts: small hours are taken from the weekday.
           */
          const weekday: LiturgicalDay | null =
            baseData && [Ranks.FEAST, Ranks.MEMORIAL].includes(def.rank) ? baseData : null;

          // Create a new LiturgicalDay object, and add it to the builtData object.
          builtData.byKeys[def.key] = new LiturgicalDay(
            def,
            date,
            this.#liturgicalDayConfig,
            calendar,
            cycles,
            baseData,
            weekday,
          );

          // Also add the corresponding date-key object.
          builtData.datesIndex[dateStr] = [...(builtData.datesIndex[dateStr] ?? []), def.key];
        });
    });

    // Order data by date
    builtData.datesIndex = Object.keys(builtData.datesIndex)
      .sort()
      .reduce((obj: DatesIndex, key) => {
        obj[key] = builtData.datesIndex[key];
        return obj;
      }, {});

    return builtData;
  }

  /**
   * Get one LiturgicalDay by its key.
   * Return undefined if not found, or null if the LiturgicalDay do not occur in the provided year.
   * Note: this function compute only one LiturgicalDay without the liturgical whole year background,
   * so some metadata may be missing, and the precedence rules between different LiturgicalDay
   * objects are ignored.
   * @param key
   */
  getOneLiturgicalDay(key: Key): LiturgicalDay | null | undefined {
    // Return undefined if not found
    if (!Object.prototype.hasOwnProperty.call(this.#config.liturgicalDayDef, key)) {
      return undefined;
    }

    const def = this.#config.liturgicalDayDef[key];

    // Compute the date of the LiturgicalDayDef
    const date = this.#liturgicalDayConfig.buildDate(def);
    if (!date || !isValidDate(date)) return null;

    // Try to compute the calendar metadata with the data we have (without the whole year background)
    const calendar = this.#buildCalendarMetadata(def, date, null);

    // Compute the cycle metadata
    const cycles = this.#buildLiturgicalCycleMetadata(date, calendar, def.cycles.properCycle);

    // Return the LiturgicalDay object
    return new LiturgicalDay(def, date, this.#liturgicalDayConfig, calendar, cycles, null, null);
  }

  /**
   * Generate a liturgical calendar according to the precedence rules between liturgical days.
   */
  generateCalendar(): LiturgicalCalendar {
    const finalData: LiturgicalCalendar = {};

    const builtData = this.#buildDatesData();

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      // Order the LiturgicalDays objects, following the precedence rules defined in the UNLY #49.
      const dates: LiturgicalDay[] = builtData.datesIndex[dateStr]
        .map((key) => builtData.byKeys[key])
        .sort(
          (
            { precedence: firstPrecedence, isOptional: firstOptional },
            { precedence: nextPrecedence, isOptional: nextOptional },
          ) => {
            if (firstOptional === nextOptional) {
              const type1 = PRECEDENCES.indexOf(firstPrecedence);
              const type2 = PRECEDENCES.indexOf(nextPrecedence);
              if (type1 < type2) return -1;
              if (type1 > type2) return 1;
              return 0;
            }
            // Sort definitions marked as optional to the end of the list
            return firstOptional ? 1 : -1;
          },
        );

      // Exception the Thursday within the Holy Week, this day contain 2 liturgical days, i.e.:
      //
      // - The weekday of Holy Thursday and the season of Lent is finishing just before the
      //   mass of the Lord’s Supper memorial.
      //   UNLY #28. The forty days of Lent run from Ash Wednesday up to but excluding the Mass of
      //   the Lord’s Supper exclusive.
      //
      // - The Paschal Triduum starts from the mass of the Lord’s Supper memorial.
      //   UNLY #19. The Paschal Triduum of the Passion and Resurrection of the Lord begins with the
      //   evening Mass of the Lord’s Supper, has its centre in the Easter Vigil, and closes with
      //   Vespers (Evening Prayer) of the Sunday of the Resurrection.
      //
      // These 2 liturgical day entities needs to be separated, because they do not have the same
      // metadata: different liturgical colors, seasons, rank, precedence...
      // The mass (Chrismal Mass on Holy Thursday, and the Mass the Lord’s Supper the evening), as
      // well as the liturgy of the hours are also different.
      let thursdayOfTheLordsSupper: LiturgicalDay | null = null;
      if (dates[0].key === 'thursday_of_the_lord_s_supper') {
        thursdayOfTheLordsSupper = dates[0];
        dates.shift();
      }

      // - The first item in the array correspond to the Liturgical Day that take precedence.
      // - When multiple LiturgicalDay objects are output the same day, it means that all other
      //   object after the first LiturgicalDay object in the array are optionals.
      //
      // UNLY #14:
      // Memorials are either obligatory or optional; their observance is integrated into the celebration
      // of the occurring weekday in accordance with the norms set forth in the General Instruction of the Roman
      // Missal and of the Liturgy of the Hours.
      // Obligatory Memorials which fall on weekdays of Lent may only be celebrated as Optional
      // Memorials.
      // If several Optional Memorials are inscribed in the Calendar on the same day, only one may be
      // celebrated, the others being omitted.
      const defaultLiturgicalDay = dates[0];

      // If the current day is:
      //
      // - a privileged weekday (UNLY #59 9):
      //     - a weekdays of Advent from December 17 up to and including December 24;
      //     - a days within the Octave of Christmas;
      //     - a weekdays of Lent (except Ash Wednesday and all weekdays of the Holy Week, UNLY #16 a).
      //
      // - a weekday (UNLY #59 13).
      //
      // [1] Output Optional Memorials, which, however, may be celebrated, in the special manner
      //     described in the General Instruction of the Roman Missal (see below, GIRM #355)
      //     and of the Liturgy of the Hours, even on the days listed in UNLY #59 9.
      //
      // [2] If the current day is a privileged weekday (UNLY #59 9),
      //       todo: set a "massIsCelebrated: false" flag on available memorial LiturgicalDay objects.
      //     According to the GIRM #355 (see below), the mass of the optional memorials are not celebrated.
      //     However the memorial can be commemorate, and the Collect may be taken.
      //
      // On Optional Memorials: (GIRM #355)
      // a. On the weekdays of Advent from 17 December to 24 December, on days within
      //    the Octave of the Nativity of the Lord, and on the weekdays of Lent, except Ash
      //    Wednesday and during Holy Week, the Mass texts for the current liturgical day
      //    are used; but the Collect may be taken from a Memorial which happens to be
      //    inscribed in the General Calendar for that day, except on Ash Wednesday and
      //    during Holy Week. On weekdays of Easter Time, Memorials of Saints may rightly
      //    be celebrated in full.
      // b. On weekdays of Advent before 17 December, on weekdays of Christmas Time
      //    from 2 January, and on weekdays of Easter Time, one of the following may be
      //    chosen: either the Mass of the weekday, or the Mass of the Saint or of one of the
      //    Saints whose Memorial is observed, or the Mass of any Saint inscribed in the
      //    Martyrology for that day.
      // c. On weekdays in Ordinary Time, there may be chosen either the Mass of the
      //    weekday, or the Mass of an Optional Memorial which happens to occur on that
      //    day, or the Mass of any Saint inscribed in the Martyrology for that day, or a Mass
      //    for Various Needs, or a Votive Mass.
      let optionalMemorials: LiturgicalDay[] = [];
      if (
        (defaultLiturgicalDay.precedence === Precedences.PrivilegedWeekday_9 ||
          defaultLiturgicalDay.precedence === Precedences.Weekday_13) &&
        !defaultLiturgicalDay.periods.includes(LiturgicalPeriods.HOLY_WEEK)
      ) {
        optionalMemorials = dates
          .slice(1)
          .filter(
            (d) =>
              [
                Precedences.GeneralMemorial_10,
                Precedences.ProperMemorial_SecondPatron_11a,
                Precedences.ProperMemorial_11b,
                Precedences.OptionalMemorial_12,
              ].includes(d.precedence) || d.isOptional,
          )
          .map((d) => (d.isOptional = true) && d);
      }
      // Also keep liturgical days marked as optional.
      // e.g. The dedication of consecrated Churches is an optional solemnity.
      else if (dates.length > 1) {
        const optionalDayKeys = dates
          .slice(1)
          .filter((d) => d.isOptional)
          .map((d) => d.key);
        if (optionalDayKeys.length) {
          optionalMemorials = dates.filter((d) => optionalDayKeys.includes(d.key));
        }
      }

      finalData[dateStr] = [
        defaultLiturgicalDay,
        ...optionalMemorials,
        ...(thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : []),
      ];
    });

    return finalData;
  }
}
