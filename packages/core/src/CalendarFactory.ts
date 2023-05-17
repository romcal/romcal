import { AllDatesFn, isDateFn, ProperOfTimeDates } from '@romcal/proper-of-time';
import {
  addDays,
  assertIsDateDef,
  DateDef,
  DateDefExtended,
  DateDefFn,
  DateDefMonthDate,
  DayOfWeek,
  DAYS_OF_WEEK,
  daysInMonth,
  getUtcDate,
  isDateDefMonthDate,
  isDateDefMonthDowNthWeekInMonth,
  isDateDefMonthLastDowInMonth,
  isInteger,
  isSameDate,
  isValidDate,
  LiturgicalDayDef,
  LiturgicalDayId,
  Period,
  Precedence,
  PRECEDENCES,
  PROPER_OF_TIME_ID,
  Rank,
  RomcalConfig,
  subtractsDays,
} from '@romcal/shared';

import LiturgicalDay from './LiturgicalDay';

export type LiturgicalCalendar = Record<string, LiturgicalDay[]>;

/**
 * General date definition collection
 */

export type ByIds = Record<LiturgicalDayId, LiturgicalDay[]>;
export type DatesIndex = Record<string, LiturgicalDayId[]>;

export type LiturgicalBuiltData = {
  byIds: ByIds;
  datesIndex: DatesIndex;
};

export class CalendarFactory {
  readonly config: RomcalConfig;
  readonly properOfTimeDates: ProperOfTimeDates;
  readonly allDefinitions: LiturgicalDayDef[];
  // readonly #startOfSeasonsDic: Record<number, Record<Season, Date>> = {};
  // readonly #endOfSeasonsDic: Record<number, Record<Season, Date>> = {};
  // readonly #startOfLaterOrdinaryTime: Date;

  constructor(
    config: RomcalConfig,
    properOfTimeDates: ProperOfTimeDates,
    allDefinitions: LiturgicalDayDef[],
  ) {
    this.config = config;
    this.properOfTimeDates = properOfTimeDates;
    this.allDefinitions = this.compactAllDefinitions(allDefinitions);
    // this.#liturgicalDayConfig = liturgicalDayConfig;
    // this.dates = new Dates(config, liturgicalDayConfig.year);
    // this.#startOfLaterOrdinaryTime = this.dates.maryMotherOfTheChurch();
  }

  compactAllDefinitions(allDefinitions: LiturgicalDayDef[]): LiturgicalDayDef[] {
    return Object.values(
      allDefinitions.reduce<Record<string, LiturgicalDayDef>>((acc, def) => {
        if (def.liturgicalDayId in acc) {
          const updatedItem: LiturgicalDayDef = {
            liturgicalDayId: def.liturgicalDayId,
            dateDef: def.dateDef ?? acc[def.liturgicalDayId].dateDef,
            dateExceptions: def.dateExceptions ?? acc[def.liturgicalDayId].dateExceptions,
            precedence: def.precedence ?? acc[def.liturgicalDayId].precedence,
            rank: def.rank ?? acc[def.liturgicalDayId].rank,
            allowSimilarRankItems:
              def.allowSimilarRankItems ?? acc[def.liturgicalDayId].allowSimilarRankItems,
            isHolyDayOfObligation:
              def.isHolyDayOfObligation ?? acc[def.liturgicalDayId].isHolyDayOfObligation,
            properCycle: def.properCycle ?? acc[def.liturgicalDayId].properCycle,
            customLocaleKey: def.customLocaleKey ?? acc[def.liturgicalDayId].customLocaleKey,
            titles: def.titles ?? acc[def.liturgicalDayId].titles, // TODO: support prepend/append titles
            colors: def.colors ?? acc[def.liturgicalDayId].colors,
            martyrology: def.martyrology ?? acc[def.liturgicalDayId].martyrology, // TODO: support redefined martyrology
            isOptional: def.isOptional ?? acc[def.liturgicalDayId].isOptional,
            drop: def.drop ?? acc[def.liturgicalDayId].drop,
            fromCalendarId: def.fromCalendarId,
            diff: def.diff, // TODO: support diff
          };
          acc[def.liturgicalDayId] = updatedItem;
        } else {
          acc[def.liturgicalDayId] = def;
        }
        return acc;
      }, {}),
    );
  }

  /**
   * Build calendar metadata
   * @param def
   * @param date
   * @param baseData
   */
  // #buildCalendarMetadata(
  //   def: LiturgicalDayDef,
  //   date: Date,
  //   baseData: LiturgicalDay | null,
  // ): RomcalCalendarMetadata {
  //   let currentYear = this.#liturgicalDayConfig.year;

  //   if (
  //     this.config.scope === 'gregorian' &&
  //     this.#liturgicalDayConfig.dates
  //       .firstSundayOfAdvent(this.#liturgicalDayConfig.year)
  //       .getTime() <= date.getTime()
  //   ) {
  //     currentYear++;
  //   }

  //   const startOfSeasonsDic =
  //     this.#startOfSeasonsDic[currentYear] ||
  //     (this.#startOfSeasonsDic[currentYear] =
  //       this.#liturgicalDayConfig.dates.startOfSeasons(currentYear));

  //   const endOfSeasonsDic =
  //     this.#endOfSeasonsDic[currentYear] ||
  //     (this.#endOfSeasonsDic[currentYear] =
  //       this.#liturgicalDayConfig.dates.endOfSeasons(currentYear));

  //   const startOfSeason = def.seasons.length ? startOfSeasonsDic[def.seasons[0]] : undefined;
  //   const endOfSeason = def.seasons.length ? endOfSeasonsDic[def.seasons[0]] : undefined;

  //   const isLent = (baseData?.seasons ?? def.seasons).includes(Season.Lent);
  //   const isLateOrdinaryTime =
  //     (baseData?.seasons ?? def.seasons).includes(Season.OrdinaryTime) &&
  //     date.getTime() >= this.#startOfLaterOrdinaryTime.getTime();

  //   let dayOfSeason =
  //     baseData?.calendar.dayOfSeason ??
  //     def.calendarMetadata.dayOfSeason ??
  //     (startOfSeason ? dateDifference(date, startOfSeason) + 1 : NaN);

  //   // In late Ordinary Time, we need to subtract the days of Lent, Paschal Triduum and Easter Time,
  //   // from the first day of Ordinary Time (the day after the Baptism of the Lord).
  //   if (isLateOrdinaryTime) {
  //     dayOfSeason = dayOfSeason - 96;
  //   }

  //   // In the season of Lent, the first week starts from zero (week of Ash Wednesday)
  //   // then the week 1 is the week of the first Sunday of Lent.
  //   // This variable below allows shifting the right week number, if we are during Lent or not.
  //   const weekOfSeasonOffset = isLent ? -1 : 0;

  //   let weekOfSeason =
  //     baseData?.calendar.weekOfSeason ??
  //     def.calendarMetadata.weekOfSeason ??
  //     (startOfSeason
  //       ? Math.ceil((dayOfSeason + startOfSeason.getUTCDay()) / 7) + weekOfSeasonOffset
  //       : NaN);

  //   // In late Ordinary Time, we need to compute the week number from the remaining days of the liturgical year
  //   if (isLateOrdinaryTime) {
  //     weekOfSeason = endOfSeason ? Math.ceil(34 - dateDifference(date, endOfSeason) / 7) : NaN;
  //   }

  //   return {
  //     weekOfSeason,
  //     dayOfSeason,
  //     dayOfWeek: baseData?.calendar.dayOfWeek ?? def.calendarMetadata.dayOfWeek ?? date.getUTCDay(),
  //     nthDayOfWeekInMonth: Math.ceil(date.getUTCDate() / 7),
  //     startOfSeason: startOfSeason ? startOfSeason.toISOString().substr(0, 10) : '',
  //     endOfSeason: endOfSeason ? endOfSeason.toISOString().substr(0, 10) : '',
  //     startOfLiturgicalYear: startOfSeasonsDic[Season.Advent].toISOString().substr(0, 10),
  //     endOfLiturgicalYear: endOfSeasonsDic[Season.OrdinaryTime].toISOString().substr(0, 10),
  //   };
  // }

  /**
   * Build the LiturgicalDay data collection, with their dates
   * @private
   */
  #buildDatesData(): LiturgicalBuiltData {
    const builtData: LiturgicalBuiltData = {
      byIds: {} as ByIds,
      datesIndex: {} as DatesIndex,
    };

    this.allDefinitions.forEach((def) => {
      // Flag to determine if the current definition is coming from the Proper of Time.
      // Note: a Proper of Time definition can be extended in a particular calendar;
      // in this case the `fromCalendarId` is taking the name of the particular calendar,
      // so we need to check the calendar name of the first item in the `fromExtendedCalendars`.
      const isFromProperOfTime =
        def.fromCalendarId === PROPER_OF_TIME_ID ||
        (def.diff && def.diff.length > 0 && def.diff[0].fromCalendarId === PROPER_OF_TIME_ID);

      // In a Liturgical Calendar scope:
      // - Because a Liturgical Year is straddling 2 Gregorian year,
      //   we need to compute the date on the 2 Gregorian years,
      //   and then determine the one to keep between both.
      // - Note: dates from the Proper of Time are already generated within a liturgical year,
      //   so in this case we don't have to check the previously gregorian year.
      const previousYearDate =
        !isFromProperOfTime && this.config.scope === 'liturgical' ? this.buildDate(def, -1) : null;

      const currentYearDate = this.buildDate(def);

      [previousYearDate, currentYearDate]
        // Remove all dates that are null. This can occur when a liturgical day isn't celebrated
        // because of any general/particular calendar settings.
        // E.g. The 6th Thursday within the Easter Time can be not celebrated
        // because in some calendars, the Solemnity of the Ascension is taking precedence.
        .reduce<Date[]>((acc, d) => {
          if (d && isValidDate(d)) acc.push(d as Date);
          return acc;
        }, [])
        .forEach((date) => {
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
            : builtData.byIds[builtData.datesIndex[dateStr][0]]
                // Look up for the right LiturgicalDay item, according to its date.
                // Note: Two LiturgicalDay objects with the same ID can occur within the same liturgical year,
                // for example, Saint Andrew Apostle (30 November 2011 and 30 November 2012), in liturgical year 2012, which starts on 27 November 2011 and ends 1 December 2012.
                .find((d) => d.date === date.toISOString().substr(0, 10)) || null;

          // Retrieve calendar metadata from the proper of time
          // const calendar: RomcalCalendarMetadata = isFromProperOfTime
          //   ? this.#buildCalendarMetadata(def, date, baseData)
          //   : // TODO: refactor this to avoir non-null assertion
          //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          //     baseData!.calendar;

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
            baseData && [Rank.Feast, Rank.Memorial].some((r) => r === def.rank) ? baseData : null;

          // Create a new LiturgicalDay object, and add it to the builtData object.
          builtData.byIds[def.liturgicalDayId] = [
            ...(builtData.byIds[def.liturgicalDayId] ?? []),
            new LiturgicalDay({
              dayDefinition: def,
              computedDate: date,
              config: this.config,
              baseData,
              weekday,
              properOfTimeDates: this.properOfTimeDates,
            }),
          ];

          // Also add the corresponding date-ID object.
          builtData.datesIndex[dateStr] = [
            ...(builtData.datesIndex[dateStr] ?? []),
            def.liturgicalDayId,
          ];
        });
    });

    // Order data by date
    builtData.datesIndex = Object.keys(builtData.datesIndex)
      .sort()
      .reduce((obj: DatesIndex, id) => {
        obj[id] = builtData.datesIndex[id];
        return obj;
      }, {});

    return builtData;
  }

  /**
   * Get one LiturgicalDay by its ID.
   * Return undefined if not found, or null if the LiturgicalDay do not occur in the provided year.
   * Note: this function compute only one LiturgicalDay without the liturgical whole year background,
   * so some metadata may be missing, and the precedence rules between different LiturgicalDay
   * objects are ignored.
   * @param id
   */
  getOneLiturgicalDay(id: LiturgicalDayId): LiturgicalDay | null | undefined {
    const def = this.allDefinitions.find((d) => d.liturgicalDayId === id);

    // Return undefined if not found
    if (!def) return undefined;

    // Compute the date of the LiturgicalDayDef
    const date = this.buildDate(def);
    if (!date || !isValidDate(date)) return null;

    // Try to compute the calendar metadata with the data we have (without the whole year background)
    // const calendar = this.#buildCalendarMetadata(def, date, null);

    // Return the LiturgicalDay object
    return new LiturgicalDay({
      dayDefinition: def,
      computedDate: date,
      config: this.config,
      baseData: null,
      weekday: null,
      properOfTimeDates: this.properOfTimeDates,
    });
  }

  /**
   * Generate a liturgical calendar according to the precedence rules between liturgical days.
   */
  computeCalendar(): LiturgicalCalendar {
    const finalData: LiturgicalCalendar = {};

    const builtData = this.#buildDatesData();

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      // Order the LiturgicalDays objects, following the precedence rules defined in the UNLY #49.
      const dates: LiturgicalDay[] = builtData.datesIndex[dateStr]
        .reduce<LiturgicalDay[]>((acc, id) => {
          // Look up for the right LiturgicalDay item, according to its date.
          // Note: Two LiturgicalDay objects with the same ID can occur within the same liturgical year,
          // for example, Saint Andrew Apostle (30 November 2011 and 30 November 2012), in liturgical year 2012, which starts on 27 November 2011 and ends 1 December 2012.
          const item = builtData.byIds[id].find((d) => d.date === dateStr);
          if (item) acc.push(item);
          return acc;
        }, [])
        .sort(
          (
            {
              precedence: firstPrecedence,
              allowSimilarRankItems: firstAllowSimilarRankItems,
              isOptional: firstIsOptional,
            },
            {
              precedence: nextPrecedence,
              allowSimilarRankItems: nextAllowSimilarRankItems,
              isOptional: nextIsOptional,
            },
          ) => {
            if (firstIsOptional === nextIsOptional) {
              if (firstAllowSimilarRankItems === nextAllowSimilarRankItems) {
                const type1 = PRECEDENCES.indexOf(firstPrecedence);
                const type2 = PRECEDENCES.indexOf(nextPrecedence);
                if (type1 < type2) return -1;
                if (type1 > type2) return 1;
                return 0;
              }

              // Sort definitions marked as allowing similar rank items
              return firstAllowSimilarRankItems ? -1 : 1;
            }
            // Sort definitions marked as optional to the end of the list
            return firstIsOptional ? 1 : -1;
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
      if (dates[0].liturgicalDayId === 'thursday_of_the_lords_supper') {
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

      let optionalMemorials: LiturgicalDay[] = [];

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
      if (
        (defaultLiturgicalDay.precedence === Precedence.PrivilegedWeekday_9 ||
          defaultLiturgicalDay.precedence === Precedence.Weekday_13) &&
        !defaultLiturgicalDay.periods.some((p) => p.key === Period.HolyWeek)
      ) {
        optionalMemorials = optionalMemorials.concat(
          dates
            .slice(1)
            .filter(
              (d) =>
                [
                  Precedence.GeneralMemorial_10,
                  Precedence.ProperMemorial_SecondPatron_11a,
                  Precedence.ProperMemorial_11b,
                  Precedence.OptionalMemorial_12,
                ].some((p) => p === d.precedence) || d.isOptional,
            )
            .map((d) => (d.isOptional = true) && d),
        );
      }

      // If the default liturgical day is marked as allowing similar rank types (allowSimilarRankItems: true),
      // keep the next liturgical(s) day(s) from the list that have also this option enabled,
      // and finally the one that have the same rank type.
      // Note: all sibling items are already sorted by precedence (higher first),
      // so the next items have always the same or a lower precedence type.
      // e.g. The memorial of the Immaculate heart of Mary, that can falls the same day of another memorial.
      if (defaultLiturgicalDay.allowSimilarRankItems && dates.length > 1) {
        const checkNextItems = (d: LiturgicalDay): boolean =>
          d.rank === defaultLiturgicalDay.rank &&
          d.precedence !== Precedence.OptionalMemorial_12 &&
          !optionalMemorials.map((om) => om.liturgicalDayId).includes(d.liturgicalDayId);

        const nextAllowingSimilarItems = dates
          .slice(1)
          .filter((d) => d.allowSimilarRankItems && checkNextItems(d));
        optionalMemorials = [...optionalMemorials, ...nextAllowingSimilarItems];

        const nextItem = dates.slice(1).find((d) => !d.allowSimilarRankItems && checkNextItems(d));
        if (nextItem) optionalMemorials.push(nextItem);
      }

      // Also keep liturgical days marked as optional,
      // and that have a similar or higher precedence type than the default liturgical day.
      // e.g. The dedication of consecrated Churches is an optional solemnity.
      if (dates.length > 1) {
        const optionalDayIds = optionalMemorials.map((d) => d.liturgicalDayId);
        const defaultPrecedenceIndex = PRECEDENCES.indexOf(defaultLiturgicalDay.precedence);
        optionalMemorials = optionalMemorials.concat(
          dates
            .slice(1)
            .filter(
              (d) =>
                d.isOptional &&
                PRECEDENCES.indexOf(d.precedence) >= defaultPrecedenceIndex &&
                !optionalDayIds.includes(d.liturgicalDayId),
            ),
        );
      }

      finalData[dateStr] = [
        defaultLiturgicalDay,
        ...optionalMemorials,
        ...(thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : []),
      ];
    });

    return finalData;
  }

  /**
   * Get the next day of week from the provided date until the next 6 days
   * @param date
   * @param dayOfWeek
   * @private
   */
  static getNextDayOfWeek(date: Date, dayOfWeek: DayOfWeek): Date {
    return addDays(date, (7 + DAYS_OF_WEEK.indexOf(dayOfWeek) - date.getUTCDay()) % 7);
  }

  /**
   * Lookup the date of a LiturgicalDayDef object, from a defined year scope
   * @param dateDef
   * @param yearOffset
   */
  dateLookup(dateDef: DateDef | DateDefExtended, yearOffset = 0): Date | null {
    let date: Date | null = null;
    const year = this.config.year + ((dateDef as DateDefMonthDate).yearOffset ?? 0) + yearOffset;
    const dateFnName = Object.keys(dateDef).find((k) => isDateFn(k)) as
      | keyof AllDatesFn
      | undefined;

    // DateDefMonthDate
    if (isDateDefMonthDate(dateDef)) {
      date = getUtcDate(year, dateDef.month, dateDef.date);
    }

    // DateDefDateFnAddDay or DateDefDateFnSubtractDay
    else if (dateFnName) {
      // TODO: fix TS typing here
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const dateFnArgs = dateDef[dateFnName];

      date = this.properOfTimeDates[dateFnName](dateFnArgs);
      date = date && isValidDate(date) ? date : null; // TODO: probably useless

      const dayOffset = (dateDef as DateDefFn).dayOffset;
      if (date && isInteger(dayOffset)) date = addDays(date, dayOffset);
    }

    // DateDefMonthDowNthWeekInMonth
    else if (isDateDefMonthDowNthWeekInMonth(dateDef)) {
      const firstDayOf7Days = getUtcDate(year, dateDef.month, 7 * dateDef.nthWeekInMonth - 6);
      date = CalendarFactory.getNextDayOfWeek(firstDayOf7Days, dateDef.dayOfWeek);
    }

    // DateDefMonthLastDowInMonth
    else if (isDateDefMonthLastDowInMonth(dateDef)) {
      const firstDayOfMonth = getUtcDate(year, dateDef.month, 1);
      const firstDayOfLast7DaysOfMonth = subtractsDays(
        getUtcDate(year, dateDef.month, daysInMonth(firstDayOfMonth)),
        6,
      );
      date = CalendarFactory.getNextDayOfWeek(
        firstDayOfLast7DaysOfMonth,
        dateDef.lastDayOfWeekInMonth,
      );
    }

    return date;
  }

  /**
   * Lookup the date of a LiturgicalDayDef object (from a defined year scope)
   * and manage defined date exceptions
   * @param def
   * @param yearOffset
   * @private
   */
  buildDate(def: LiturgicalDayDef, yearOffset = 0): Date | null {
    assertIsDateDef(def.dateDef);
    const date = this.dateLookup(def.dateDef, yearOffset);
    if (!date) return null;
    let updatedDate: Date | null = date;

    const setDate = (dateDefExtended: DateDefExtended): void => {
      if ('dayOffset' in dateDefExtended && isInteger(dateDefExtended.dayOffset)) {
        updatedDate = addDays(date, dateDefExtended.dayOffset);
      } else {
        updatedDate = this.dateLookup(dateDefExtended, yearOffset);
      }
    };

    (def.dateExceptions ?? []).forEach((exception) => {
      // ifIsBetween
      if ('ifIsBetween' in exception && typeof exception.ifIsBetween === 'object') {
        const from = this.dateLookup(exception.ifIsBetween.from, yearOffset);
        const to = this.dateLookup(exception.ifIsBetween.to, yearOffset);
        if (from && to) {
          // From-To inclusive
          if (exception.ifIsBetween.inclusive) {
            if (date.getTime() >= from.getTime() && date.getTime() <= to.getTime()) {
              setDate(exception.setDate);
            }
          }
          // From-To exclusive
          else {
            if (date.getTime() > from.getTime() && date.getTime() < to.getTime()) {
              setDate(exception.setDate);
            }
          }
        }
      }

      // ifIsSameAsDate
      else if ('ifIsSameAsDate' in exception && typeof exception.ifIsSameAsDate === 'object') {
        const dateComparison = this.dateLookup(exception.ifIsSameAsDate, yearOffset);
        if (dateComparison && isSameDate(dateComparison, date)) {
          setDate(exception.setDate);
        }
      }

      // ifIsDayOfWeek
      else if ('ifIsDayOfWeek' in exception && Number.isInteger(exception.ifIsDayOfWeek)) {
        if (DAYS_OF_WEEK[date.getUTCDay()] === exception.ifIsDayOfWeek) {
          setDate(exception.setDate);
        }
      }
    });

    return updatedDate;
  }
}
