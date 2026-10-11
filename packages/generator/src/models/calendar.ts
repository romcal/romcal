import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { Ranks } from '../constants/ranks';
import { BaseCalendar, ByIds, DatesIndex, LiturgicalBuiltData, LiturgicalCalendar } from '../types/calendar';
import { Id } from '../types/common';
import { DatesProvider } from '../types/dates';
import { RomcalCalendarMetadata } from '../types/liturgical-day';
import { Vocabulary } from '../types/vocabulary';
import { isValidDate } from '../utils/dates';
import { compareByPrecedence } from '../utils/precedences';

import { RomcalConfig } from './config';
import { LiturgicalDay } from './liturgical-day';
import { LiturgicalDayConfig } from './liturgical-day-config';
import { LiturgicalDayDef } from './liturgical-day-def';

/**
 * The boundary of the season a rite says its year opens or closes with.
 *
 * Looked up by name rather than by a fixed key, so the rite that declares the season
 * is the one that has to have supplied a date for it. Saying so here beats the
 * `undefined.toISOString()` a mismatch would otherwise produce four frames away.
 */
const boundary = (boundaries: Record<string, Date>, season: string): Date => {
  const date = boundaries[season];
  if (!date) throw new Error(`The rite declares the liturgical year to run to "${season}", which has no boundary.`);
  return date;
};

/**
 * Whether a definition is coming from the Proper of Time.
 *
 * Note: a Proper of Time definition can be extended in a particular calendar;
 * in this case the `fromCalendarId` is taking the name of the particular calendar,
 * so we need to check the calendar name of the first item in the `fromExtendedCalendars`.
 */
const isFromProperOfTime = <V extends Vocabulary>(def: LiturgicalDayDef<V>): boolean =>
  def.fromCalendarId === PROPER_OF_TIME_NAME ||
  (def.fromExtendedCalendars.length > 0 && def.fromExtendedCalendars[0].fromCalendarId === PROPER_OF_TIME_NAME);

export class Calendar<V extends Vocabulary = Vocabulary> implements BaseCalendar<V> {
  readonly #config: RomcalConfig<V>;

  readonly #liturgicalDayConfig: LiturgicalDayConfig<V>;

  readonly dates: DatesProvider;

  readonly #startOfSeasonsDic: Record<number, Record<string, Date>> = {};

  readonly #endOfSeasonsDic: Record<number, Record<string, Date>> = {};

  constructor(config: RomcalConfig<V>, liturgicalDayConfig: LiturgicalDayConfig<V>) {
    this.#config = config;
    this.#liturgicalDayConfig = liturgicalDayConfig;
    this.dates = new config.dates(config, liturgicalDayConfig.year);
  }

  /**
   * Build calendar metadata
   * @param def
   * @param date
   * @param baseData
   */
  #buildCalendarMetadata(
    def: LiturgicalDayDef<V>,
    date: Date,
    baseData: LiturgicalDay<V> | null
  ): RomcalCalendarMetadata<V> {
    const seasonRules = this.#config.rubrics.seasons;
    let currentYear = this.#liturgicalDayConfig.year;

    if (
      this.#config.scope === 'gregorian' &&
      this.#liturgicalDayConfig.dates.firstSundayOfAdvent(this.#liturgicalDayConfig.year).getTime() <= date.getTime()
    ) {
      currentYear += 1;
    }

    const startOfSeasonsDic =
      this.#startOfSeasonsDic[currentYear] ||
      (this.#startOfSeasonsDic[currentYear] = this.#liturgicalDayConfig.dates.startOfSeasons(currentYear));

    const endOfSeasonsDic =
      this.#endOfSeasonsDic[currentYear] ||
      (this.#endOfSeasonsDic[currentYear] = this.#liturgicalDayConfig.dates.endOfSeasons(currentYear));

    const startOfSeason = def.seasons.length ? startOfSeasonsDic[def.seasons[0]] : undefined;
    const endOfSeason = def.seasons.length ? endOfSeasonsDic[def.seasons[0]] : undefined;

    // How a season is counted is the rite's business: the seasons themselves differ,
    // and so does what a week number means within them.
    const { dayOfSeason, weekOfSeason } = seasonRules.numbering({
      date,
      dates: this.#liturgicalDayConfig.dates,
      declaredDayOfSeason: baseData?.calendar.dayOfSeason ?? def.calendarMetadata.dayOfSeason,
      declaredWeekOfSeason: baseData?.calendar.weekOfSeason ?? def.calendarMetadata.weekOfSeason,
      endOfSeason,
      seasons: baseData?.seasons ?? def.seasons,
      startOfSeason,
    });

    return {
      weekOfSeason,
      dayOfSeason,
      dayOfWeek: baseData?.calendar.dayOfWeek ?? def.calendarMetadata.dayOfWeek ?? date.getUTCDay(),
      nthDayOfWeekInMonth: Math.ceil(date.getUTCDate() / 7),
      startOfSeason: startOfSeason ? startOfSeason.toISOString().substr(0, 10) : '',
      endOfSeason: endOfSeason ? endOfSeason.toISOString().substr(0, 10) : '',
      startOfLiturgicalYear: boundary(startOfSeasonsDic, seasonRules.firstSeason).toISOString().substr(0, 10),
      endOfLiturgicalYear: boundary(endOfSeasonsDic, seasonRules.lastSeason).toISOString().substr(0, 10),
      seasons: baseData?.seasons ?? def.seasons,
    };
  }

  /**
   * Build the LiturgicalDay object of a definition, on a date.
   * @param def
   * @param date
   * @param builtData The data of the year, with at least the days of the Proper of Time on that date
   * @private
   */
  #buildDay(def: LiturgicalDayDef<V>, date: Date, builtData: LiturgicalBuiltData<V>): LiturgicalDay<V> {
    const dateStr = date.toISOString().substr(0, 10);
    const fromProperOfTime = isFromProperOfTime(def);

    // Take the first LiturgicalDay object of a specified day.
    // The first object is always a LiturgicalDay from the Proper of Time,
    // since a LiturgicalDay is generated for each day of the Liturgical Year.
    // In the case the LiturgicalDayDef is coming from the Proper of Time,
    // the baseData must be null.
    let baseData: LiturgicalDay<V> | null = null;
    if (!fromProperOfTime) {
      // Look up for the right LiturgicalDay item, according to its date.
      // Note: Two LiturgicalDay objects with the same ID can occur within the same liturgical year,
      // for example, Saint Andrew Apostle (30 November 2011 and 30 November 2012), in liturgical
      // year 2012, which starts on 27 November 2011 and ends 1 December 2012.
      baseData = builtData.byIds[builtData.datesIndex[dateStr][0]].find((d) => d.date === dateStr) || null;
    }

    // Retrieve calendar metadata from the proper of time
    const calendar: RomcalCalendarMetadata<V> = fromProperOfTime
      ? this.#buildCalendarMetadata(def, date, baseData)
      // TODO: refactor this to avoid the non-null assertion
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      : baseData!.calendar;

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
    const weekday: LiturgicalDay<V> | null =
      baseData && [Ranks.Feast, Ranks.Memorial, Ranks.OptionalMemorial].some((r) => r === def.rank)
        ? baseData
        : null;

    return new LiturgicalDay<V>(def, date, this.#liturgicalDayConfig, calendar, baseData, weekday);
  }

  /**
   * Build the LiturgicalDay data collection, with their dates
   * @private
   */
  #buildDatesData(): LiturgicalBuiltData<V> {
    const builtData: LiturgicalBuiltData<V> = {
      byIds: {} as ByIds<V>,
      datesIndex: {} as DatesIndex,
    };

    Object.values(this.#config.liturgicalDayDef).forEach((def) => {
      const fromProperOfTime = isFromProperOfTime(def);

      // In a Liturgical Calendar scope:
      // - Because a Liturgical Year is straddling 2 Gregorian year,
      //   we need to compute the date on the 2 Gregorian years,
      //   and then determine the one to keep between both.
      // - Note: dates from the Proper of Time are already generated within a liturgical year,
      //   so in this case we don't have to check the previously gregorian year.
      const previousYearDate =
        !fromProperOfTime && this.#config.scope === 'liturgical'
          ? this.#liturgicalDayConfig.buildDate(def, -1)
          : null;

      const currentYearDate = this.#liturgicalDayConfig.buildDate(def);

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
          if (!fromProperOfTime && !builtData.datesIndex[dateStr]) {
            return;
          }

          builtData.byIds[def.id] = [...(builtData.byIds[def.id] ?? []), this.#buildDay(def, date, builtData)];

          // Also add the corresponding date-ID object.
          builtData.datesIndex[dateStr] = [...(builtData.datesIndex[dateStr] ?? []), def.id];
        });
    });

    // Order data by date
    builtData.datesIndex = Object.keys(builtData.datesIndex)
      .sort()
      .reduce(
        (obj: DatesIndex, id) => ({
          ...obj,
          [id]: builtData.datesIndex[id],
        }),
        {}
      );

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
  getOneLiturgicalDay(id: Id): LiturgicalDay<V> | null | undefined {
    // Return undefined if not found
    if (!Object.prototype.hasOwnProperty.call(this.#config.liturgicalDayDef, id)) {
      return undefined;
    }

    const def = this.#config.liturgicalDayDef[id];

    // Compute the date of the LiturgicalDayDef
    const date = this.#liturgicalDayConfig.buildDate(def);
    if (!date || !isValidDate(date)) return null;

    // Try to compute the calendar metadata with the data we have (without the whole year background)
    const calendar = this.#buildCalendarMetadata(def, date, null);

    // Return the LiturgicalDay object
    return new LiturgicalDay<V>(def, date, this.#liturgicalDayConfig, calendar, null, null);
  }

  /**
   * Generate a liturgical calendar according to the precedence rules between liturgical days.
   */
  generateCalendar(): LiturgicalCalendar<V> {
    const finalData: LiturgicalCalendar<V> = {};

    const builtData = this.#buildDatesData();

    // Priority is position in the rite's precedence list, not a property of the value.
    const byPrecedence = compareByPrecedence<V>(this.#config.rubrics.precedences, {
      precedenceFirst: this.#config.rubrics.precedenceFirst,
    });

    // Days transferred onto a date not yet resolved; they take part in that date's resolution.
    const incoming: Record<string, LiturgicalDay<V>[]> = {};

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      // Order the LiturgicalDays objects, following the precedence rules defined in the UNLY #49.
      const dates: LiturgicalDay<V>[] = builtData.datesIndex[dateStr]
        .reduce<LiturgicalDay<V>[]>((acc, id) => {
          // Look up for the right LiturgicalDay item, according to its date.
          // Note: Two LiturgicalDay objects with the same ID can occur within the same liturgical year,
          // for example, Saint Andrew Apostle (30 November 2011 and 30 November 2012), in liturgical year 2012, which starts on 27 November 2011 and ends 1 December 2012.
          const item = builtData.byIds[id].find((d) => d.date === dateStr);
          if (item) acc.push(item);
          return acc;
        }, [])
        .concat(incoming[dateStr] ?? [])
        .sort(byPrecedence);

      const { onDate, transfers } = this.#config.rubrics.resolveOccurrences({ date: dateStr, days: dates });
      // A transferred day still has the date it was transferred from: build it again on its new date.
      finalData[dateStr] = onDate.map((day) =>
        day.date === dateStr ? day : this.#buildDay(day.definition, new Date(dateStr), builtData)
      );

      for (const { date, day } of transfers ?? []) {
        if (date <= dateStr) {
          throw new Error(`Transfers must move forward: "${day.id}" from ${dateStr} to ${date}.`);
        }
        // A date outside the generated range is not part of this calendar.
        if (!builtData.datesIndex[date]) continue;
        (incoming[date] ??= []).push(day);
      }
    });

    if (this.#config?.outputOptions?.calculateProperties) {
      const calculatedData: LiturgicalCalendar<V> = {};
      // run toJson on each liturgical day and set it on the map
      Object.keys(finalData).forEach((dateStr) => {
        calculatedData[dateStr] = finalData[dateStr].map((d) => d.toJson());
      });
      return calculatedData;
    }

    return finalData;
  }
}
