import { version } from '@romcal/package.json';
import { computeProperOfTimeCalendarDef, ProperOfTimeDates } from '@romcal/proper-of-time';
import {
  assertIsProperOfTimeDefinition,
  LiturgicalDayDef,
  LiturgicalDayId,
  RomcalConfig,
  RomcalConfigInput,
  sanitizeConfig,
} from '@romcal/shared';

import { CalendarFactory, LiturgicalCalendar } from './CalendarFactory';
import LiturgicalDay from './LiturgicalDay';

class Romcal {
  readonly config: RomcalConfig;
  readonly dates: ProperOfTimeDates;
  #computedCalendars?: LiturgicalCalendar;

  constructor(config?: RomcalConfigInput) {
    this.config = sanitizeConfig(config);
    this.dates = config?.properOfTimeDates ?? new ProperOfTimeDates(config);
  }

  /**
   * Get all possible liturgical days of the Proper of Time.
   */
  get properOfTimeDefinitions(): LiturgicalDayDef[] {
    if (this.#__properOfTimeDefinitions) {
      return this.#__properOfTimeDefinitions;
    }
    if (this.config.properOfTime) {
      assertIsProperOfTimeDefinition(this.config.properOfTime);
      return (this.#__properOfTimeDefinitions = this.config.properOfTime.definitions);
    }
    return (this.#__properOfTimeDefinitions = computeProperOfTimeCalendarDef(
      this.config.scope,
    ).definitions);
  }
  #__properOfTimeDefinitions?: LiturgicalDayDef[];

  /**
   * Get all possible liturgical days from the currently selected calendar,
   * (including all possible inherited calendars until the General Roman Calendar,
   * and the Proper of the Time), outside the context of a specific year.
   */
  get allDefinitions(): LiturgicalDayDef[] {
    const allDefinitions = [
      ...this.properOfTimeDefinitions,
      ...(this.config.calendar?.definitions ?? []),
    ];
    const compactedAllDefinition = Object.values(
      allDefinitions.reduce<Record<string, LiturgicalDayDef>>((acc, def) => {
        if (def.liturgicalDayId in acc) {
          const newDef: LiturgicalDayDef = {
            liturgicalDayId: def.liturgicalDayId,
            ...(def.dateDef && { dateDef: def.dateDef }),
            ...(def.dateExceptions && { dateExceptions: def.dateExceptions }),
            ...(def.precedence && { precedence: def.precedence }),
            ...(def.rank && { rank: def.rank }),
            ...(typeof def.allowSimilarRankItems === 'boolean' && {
              allowSimilarRankItems: def.allowSimilarRankItems,
            }),

            ...(typeof def.isHolyDayOfObligation === 'boolean' && {
              isHolyDayOfObligation: def.isHolyDayOfObligation,
            }),

            ...(def.properCycle && { properCycle: def.properCycle }),
            ...(def.customLocaleKey && { customLocaleKey: def.customLocaleKey }),
            ...(def.colors && { colors: def.colors }),
            ...(def.titles && { titles: def.titles }),
            ...(def.martyrology && { martyrology: def.martyrology }),
            ...(typeof def.isOptional === 'boolean' && {
              isOptional: def.isOptional,
            }),
            ...(typeof def.drop === 'boolean' && {
              drop: def.drop,
            }),
            fromCalendarId: def.fromCalendarId,
            ...(def.seasons && { seasons: def.seasons }),
            ...(def.periods && { periods: def.periods }),

            ...(def.i18nDef && { i18nDef: def.i18nDef }),
            ...(def.dayOfWeek && { dayOfWeek: def.dayOfWeek }),
            ...(def.diff && { diff: def.diff }),
          };
          acc[def.liturgicalDayId] = newDef;
        } else {
          acc[def.liturgicalDayId] = def;
        }
        return acc;
      }, {}),
    );

    return compactedAllDefinition;
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
    id: LiturgicalDayId,
    computeInWholeYear = false,
  ): Promise<LiturgicalDay | null | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const partialLd = new CalendarFactory(
          this.config,
          this.dates,
          this.allDefinitions,
        ).getOneLiturgicalDay(id);
        if (!computeInWholeYear) return resolve(partialLd);
        if (!partialLd) resolve(partialLd);

        return this.computeCalendar().then((value) => {
          resolve(
            Object.values(value)
              .flat()
              .find((d) => d.liturgicalDayId === id),
          );
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Generate a liturgical calendar, within a Liturgical or Gregorian scope.
   */
  computeCalendar(): Promise<LiturgicalCalendar> {
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      try {
        // Return cached data, if the calendar has been already computed
        if (this.#computedCalendars) {
          return resolve(this.#computedCalendars);
        }

        this.#computedCalendars = new CalendarFactory(
          this.config,
          this.dates,
          this.allDefinitions,
        ).computeCalendar();

        resolve(this.#computedCalendars);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Get Romcal version.
   */
  static getVersion(): string {
    return version;
  }
}

export { Romcal };
