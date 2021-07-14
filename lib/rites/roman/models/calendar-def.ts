import { ProperCycles } from '@roman-rite/constants/cycles';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences, PRECEDENCES } from '@roman-rite/constants/precedences';
import { Ranks } from '@roman-rite/constants/ranks';
import { PROPER_OF_TIME_NAME } from '@roman-rite/general-calendar/proper-of-time';
import { RomcalConfig } from '@roman-rite/models/config';
import LiturgicalDay from '@roman-rite/models/liturgical-day';
import LiturgicalDayDef from '@roman-rite/models/liturgical-day-def';
import {
  BaseCalendarDef,
  ByKeys,
  DatesIndex,
  ExtendedDefinitions,
  ICalendarDef,
  InputDefinitions,
  LiturgicalCalendar,
  LiturgicalDefBuiltData,
  MartyrologyItemRedefined,
  ParticularConfig,
} from '@roman-rite/types/calendar-def';
import { RomcalConfigInput } from '@roman-rite/types/config';
import { DateDefInput, LiturgyDayDiff } from '@roman-rite/types/liturgical-day';
import { Dates } from '@roman-rite/utils/dates';
import { Martyrology } from '@romcal/catalog/martyrology';
import { CalendarScope } from '@romcal/constants/calendar-scope';
import { MartyrologyItem } from '@romcal/types/martyrology';
import dayjs, { Dayjs } from 'dayjs';

export const CalendarDef: BaseCalendarDef = class implements ICalendarDef {
  readonly #config: RomcalConfig;
  readonly dates: Dates;
  inheritFrom?: BaseCalendarDef | null;
  inheritFromInstance?: InstanceType<BaseCalendarDef>;
  readonly particularConfig?: ParticularConfig;
  definitions: InputDefinitions = {};
  #extendedDefinitions: ExtendedDefinitions = {};

  /**
   * Get the name of the CalendarDef class.
   */
  public get calendarName(): string {
    if (!this.#calendarName) {
      this.#calendarName = this.constructor.name
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
    }
    return this.#calendarName;
  }
  #calendarName?: string;

  constructor(config: RomcalConfig) {
    this.#config = config;
    this.dates = this.#config.dates;
  }

  /**
   * Initialize inherited calendars, and update the main RomcalConfig
   * from the provided user config or from any particular config from
   * the calendar definitions.
   * @param input - The input configuration provided by the user.
   */
  updateConfig(input?: RomcalConfigInput): void {
    // Init the inherited calendar
    if (this.inheritFrom) {
      this.inheritFromInstance = new this.inheritFrom(this.#config);

      // Update first the configuration form inherited calendars
      this.inheritFromInstance.updateConfig(input);
    }

    // Combine the provided user configuration,
    // the particular configuration from this calendar,
    // and the sanitized configuration.

    this.#config.epiphanyOnSunday =
      input?.epiphanyOnSunday ??
      this.particularConfig?.epiphanyOnSunday ??
      this.#config.epiphanyOnSunday;

    this.#config.ascensionOnSunday =
      input?.ascensionOnSunday ??
      this.particularConfig?.ascensionOnSunday ??
      this.#config.ascensionOnSunday;

    this.#config.corpusChristiOnSunday =
      input?.corpusChristiOnSunday ??
      this.particularConfig?.corpusChristiOnSunday ??
      this.#config.corpusChristiOnSunday;
  }

  /**
   * Recursive method that retrieve all inherited calendars
   * @private
   * @param inheritedCal - The inherited calendar object.
   * @param builtData - The already build data that will extend the inherited data.
   * @private
   */
  #retrieveInheritedCal(
    inheritedCal: InstanceType<BaseCalendarDef>,
    builtData: LiturgicalDefBuiltData,
  ): void {
    if (inheritedCal.inheritFromInstance) {
      this.#retrieveInheritedCal(inheritedCal.inheritFromInstance, builtData);
    }

    inheritedCal.buildAllDates(builtData);
  }

  /**
   * Recursive method that retrieve all inherited calendars definitions
   * @private
   * @param inheritedCal - The inherited calendar object.
   * @param byKeys - The already build data that will extend the inherited data.
   * @private
   */
  #retrieveInheritedCalDefinitions(
    inheritedCal: InstanceType<BaseCalendarDef>,
    byKeys: ByKeys,
  ): void {
    if (inheritedCal.inheritFromInstance) {
      this.#retrieveInheritedCalDefinitions(inheritedCal.inheritFromInstance, byKeys);
    }

    inheritedCal.buildAllDefinitions(byKeys);
  }

  /**
   * Build LiturgicalDay objects from the date defined in this calendar,
   * and extend the already built data with these new objects.
   * @param builtData - The already build data, that will be extended in this method.
   */
  buildAllDates(builtData: LiturgicalDefBuiltData): LiturgicalDefBuiltData {
    const definitions = Object.keys(this.definitions);

    if (this.inheritFromInstance) {
      this.#retrieveInheritedCal(this.inheritFromInstance, builtData);
    }

    definitions.forEach((key) => {
      const def: DateDefInput = this.definitions[key];
      this.#datesLookup(builtData, def).forEach((dateInput) =>
        this.#buildDate(builtData, key, def, dateInput),
      );
    });

    return builtData;
  }

  buildAllDefinitions(byKeys: ByKeys): ByKeys {
    const definitions = Object.keys(this.definitions);

    if (this.inheritFromInstance) {
      this.#retrieveInheritedCalDefinitions(this.inheritFromInstance, byKeys);
    }

    definitions.forEach((key) => {
      const def: DateDefInput = this.definitions[key];
      this.#buildDefinition(byKeys, key, def);
    });

    return byKeys;
  }

  /**
   * Build a LiturgicalDay object from a date definition, defined in this calendar,
   * and extend the already built data with this new objects.
   * @private
   * @param builtData The already build data that will extend the inherited data.
   * @param key The key of the LiturgicalDay to create.
   * @param def The definition of the liturgical day.
   * @param dateInput The matching date of the liturgical day definition.
   */
  #buildDate(
    builtData: LiturgicalDefBuiltData,
    key: Lowercase<string>,
    def: DateDefInput,
    dateInput: Dayjs | null | undefined,
  ): void {
    const dateStr = (dateInput ?? dayjs(builtData.byKeys[key].date)).format('YYYY-MM-DD');

    // Delete a date definition that has the `drop: true` property.
    if (this.#deleteIfDropProperty(builtData.byKeys, key, def, builtData.datesIndex, dateStr))
      return;

    // If no date is defined, and no inherited LiturgicalDay exists,
    // romcal must throw an error.
    if (!builtData.byKeys[key] && !dateInput) {
      throw new Error(
        `In the '${this.calendarName}' calendar, DateDefInput with key '${key}' must have a 'date' defined.`,
      );
    }

    // If no precedence type is set, and no inherited LiturgicalDay exists,
    // romcal must throw an error.
    this.#checkPrecedenceProperty(builtData.byKeys, key, def);

    // Retrieve the Martyrology items from the inherited LiturgicalDay object.
    const martyrology = this.#retrieveMartyrologyData(builtData.byKeys, key, def);

    // Take the first LiturgicalDay object of a specified day.
    // The first object is always a LiturgicalDay from the Proper of Time,
    // since a LiturgicalDay is generated for each day of the Liturgical Year.
    const baseData: LiturgicalDay = builtData.byKeys[builtData.datesIndex[dateStr][0]];

    // Retrieve and clone existing cycle data,
    // from the inherited LiturgicalDay object (if exists),
    // of from the base data (e.i. the LiturgicalDay object from the Proper of Time)
    const cycles = { ...(builtData.byKeys[key]?.cycles ?? baseData.cycles) };

    // Apply the newly defined proper cycle
    if (def.properCycle) cycles.properCycle = def.properCycle;
    // Or set PROPER_OF_SAINTS if no one is already defined
    else if (!builtData.byKeys[key]) {
      cycles.properCycle = ProperCycles.PROPER_OF_SAINTS;
    }

    // Compute the localized name of the liturgical day.
    const name = this.#retrieveLiturgicalDayName(builtData.byKeys, key, def);

    // Create a new LiturgicalDay from existing and new data
    const liturgicalDay = new LiturgicalDay(
      {
        // Import the base liturgical day, but exclude its name & liturgical color
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ...(({ name, liturgicalColors, ...o }) => o)(baseData),

        // Import the inherited liturgical day to extend
        ...(builtData.byKeys[key] ?? {}),

        // Set new object data
        key,
        name,
        ...(dateInput ? { date: dateInput } : {}),
        ...(def.precedence ? { precedence: def.precedence } : {}),
        ...(def.liturgicalColors
          ? {
              liturgicalColors: Array.isArray(def.liturgicalColors)
                ? def.liturgicalColors
                : [def.liturgicalColors],
            }
          : {}),
        isHolyDayOfObligation: !!def.isHolyDayOfObligation,
        cycles,
        martyrology,
        fromCalendar: this.calendarName,
      },
      this.#config,
    );

    // Check object differences between the previously inherited object
    // and the new one
    if (builtData.byKeys[key]) {
      const diff = this.#getLiturgicalDayDiff(builtData.byKeys[key], liturgicalDay);
      // Store object diffs in the new LiturgicalDay object
      if (diff) liturgicalDay.fromExtendedCalendars.push(diff);
    }

    // Create or overwrite the new or updated LiturgicalDay
    builtData.byKeys[key] = liturgicalDay;

    /**
     * For Memorial and Feast celebrations only, the weekday property is added
     * containing the LiturgicalDay object of the base weekday.
     * Otherwise, this object is removed.
     *
     * - Memorials: their observance is integrated into the celebration of the occurring weekday
     *   in accordance with the norms set forth in the General Instruction of the Roman
     *   Missal and of the Liturgy of the Hours. (UNLY #14)
     * - Liturgy of the hours: // todo: cite precise sources from the General Instructions of the Liturgy of the hours
     *    - Memorials: the liturgy of the hour remain the one of the weekday.
     *    - Feasts: small hours are taken from the weekday.
     */
    if (
      [Ranks.FEAST, Ranks.MEMORIAL].includes(builtData.byKeys[key].rank) &&
      // below, this test prevents adding the weekday property on a base Proper of Time object,
      // especially on all the weekdays during the Easter octave (since all theses days are Solemnities).
      baseData.key !== key
    ) {
      builtData.byKeys[key].weekday = baseData;
    } else {
      delete builtData.byKeys[key].weekday;
    }

    // Now update the datesIndex object if it not already contains the matching key
    builtData.datesIndex[dateStr].indexOf(key) === -1 && builtData.datesIndex[dateStr].unshift(key);
  }

  #buildDefinition(byKeys: ByKeys, key: Lowercase<string>, def: DateDefInput): void {
    // Delete a date definition that has the `drop: true` property.
    if (this.#deleteIfDropProperty(byKeys, key, def)) return;

    // If no precedence type is set, and no inherited LiturgicalDay exists,
    // romcal must throw an error.
    this.#checkPrecedenceProperty(byKeys, key, def);

    // Retrieve the Martyrology items from the inherited LiturgicalDay object.
    const martyrology = this.#retrieveMartyrologyData(byKeys, key, def);

    // Compute the localized name of the liturgical day.
    const name = this.#retrieveLiturgicalDayName(byKeys, key, def);

    // Create a new LiturgicalDay from existing and new data

    const liturgicalDef = new LiturgicalDayDef(
      {
        // Import the inherited liturgical day to extend
        ...(byKeys[key] ?? {}),

        // Set new object data
        key,
        name,
        date: def.date ?? byKeys[key].date,
        precedence: def.precedence ?? byKeys[key].precedence,

        customLocaleKey: def.customLocaleKey,
        drop: def.drop,
        fromCalendar: this.calendarName,
        // fromExtendedCalendars: [],
        isHolyDayOfObligation: !!def.isHolyDayOfObligation,
        // isOptional: def.isOptional,

        ...(def.liturgicalColors
          ? {
              liturgicalColors: Array.isArray(def.liturgicalColors)
                ? def.liturgicalColors
                : [def.liturgicalColors],
            }
          : {}),

        martyrology,
        periods: byKeys[key].periods || [],
        properCycle: def.properCycle ?? byKeys[key].cycles.properCycle,
      },
      this.#config,
    );

    // Check object differences between the previously inherited object
    // and the new one
    if (byKeys[key]) {
      const diff = this.#getLiturgicalDayDiff(byKeys[key], liturgicalDef);
      // Store object diffs in the new LiturgicalDay object
      if (diff) liturgicalDef.fromExtendedCalendars.push(diff);
    }

    // Create or overwrite the new or updated LiturgicalDay
    this.#extendedDefinitions[key] = liturgicalDef;
  }

  /**
   * Lookup for Gregorian dates from the date definitions.
   * @private
   * @param builtData The already build data that will extend the inherited data.
   * @param def The definition of the liturgical day.
   */
  #datesLookup(builtData: LiturgicalDefBuiltData, def: DateDefInput): (Dayjs | null | undefined)[] {
    // Because a Liturgical Year is straddling 2 Gregorian year,
    // we need to compute the date on the 2 Gregorian years,
    // and then determine the one to keep between both.
    let dateInputPreviousYear;
    let dateInputCurrentYear;
    const datesInput: (Dayjs | null | undefined)[] = [];

    // If a date definition is defined,
    // it should be a string or a function.
    if (def.date) {
      if (this.#config.scope === CalendarScope.Liturgical) {
        dateInputPreviousYear =
          typeof def.date === 'string'
            ? dayjs.utc(`${this.#config.year - 1}-${def.date}`)
            : def.date(this.#config.year - 1);
      }

      dateInputCurrentYear =
        typeof def.date === 'string'
          ? dayjs.utc(`${this.#config.year}-${def.date}`)
          : def.date(this.#config.year);

      const dateInputPreviousYearStr = dateInputPreviousYear?.format('YYYY-MM-DD');
      const dateInputCurrentYearStr = dateInputCurrentYear?.format('YYYY-MM-DD');

      // Lookup for a matching date object, to keep the relevant date
      if (
        dateInputPreviousYearStr &&
        Array.isArray(builtData.datesIndex[dateInputPreviousYearStr])
      ) {
        datesInput.push(dateInputPreviousYear);
      } else if (
        dateInputCurrentYearStr &&
        Array.isArray(builtData.datesIndex[dateInputCurrentYearStr])
      ) {
        datesInput.push(dateInputCurrentYear);
      }

      // Some liturgical days may be celebrated twice within the same Liturgical year.
      // E.g., Saint Andrew, the Apostle, is celebrated November 30.
      // This celebration can be both at the beginning of Advent (if it starts before November 30),
      // and at the end of the Ordinary Time (if it end the or after November 30).
      if (
        dateInputPreviousYearStr &&
        Array.isArray(builtData.datesIndex[dateInputPreviousYearStr]) &&
        dateInputCurrentYearStr &&
        Array.isArray(builtData.datesIndex[dateInputCurrentYearStr])
      ) {
        datesInput.push(dateInputCurrentYear);
      }
    }

    return datesInput;
  }

  /**
   * Delete a date definition that has the `drop: true` property,
   * or that have a `date` function returning `null`.
   * @private
   * @param byKeys The keys of the already build data that will extend the inherited data.
   * @param key The key of the LiturgicalDay to create.
   * @param def The definition of the liturgical day.
   * @param datesIndex The dateIndex of the already build data that will extend the inherited data.
   * @param dateStr The matching date of the liturgical day definition.
   */
  #deleteIfDropProperty(
    byKeys: ByKeys | ExtendedDefinitions,
    key: Lowercase<string>,
    def: DateDefInput,
    datesIndex?: DatesIndex,
    dateStr?: string,
  ): boolean {
    // Delete a date definition that has the `drop: true` property.
    if (def.drop) {
      if (!byKeys[key]) {
        throw new Error(
          `In the '${this.calendarName}' calendar, trying to drop a LiturgicalDay that doesn't exists: '${key}'.`,
        );
      } else if (byKeys[key].fromCalendar === PROPER_OF_TIME_NAME) {
        throw new Error(
          `In the '${this.calendarName}' calendar, you can't drop a LiturgicalDay from the Proper of Time: '${key}'.`,
        );
      } else {
        delete byKeys[key];
        if (datesIndex && dateStr) {
          datesIndex[dateStr] = datesIndex[dateStr].filter((k) => k !== key);
        }
      }
      return true;
    }

    // Delete a date definition that have a `date` function returning `null`.
    if (
      datesIndex &&
      dateStr &&
      typeof def.date === 'function' &&
      def.date(this.#config.year) === null
    ) {
      delete byKeys[key];
      datesIndex[dateStr] = datesIndex[dateStr].filter((k) => k !== key);
      return true;
    }

    return false;
  }

  /**
   * If no precedence type is set, and no inherited LiturgicalDay exists,
   * romcal must throw an error.
   * @private
   * @param byKeys The keys of the already build data that will extend the inherited data.
   * @param key The key of the LiturgicalDay to create.
   * @param def The definition of the liturgical day.
   */
  #checkPrecedenceProperty(
    byKeys: ByKeys | ExtendedDefinitions,
    key: Lowercase<string>,
    def: DateDefInput,
  ): void {
    // If no precedence type is set, and no inherited LiturgicalDay exists,
    // romcal must throw an error.
    if (!byKeys[key] && !def.precedence) {
      throw new Error(
        `In the '${this.calendarName}' calendar, DateDefInput with key '${key}' must have a 'precedence' defined.`,
      );
    }
  }

  /**
   * Retrieve the Martyrology items from the inherited LiturgicalDay object.
   * @param byKeys The keys of the already build data that will extend the inherited data.
   * @param key The key of the LiturgicalDay to create.
   * @param def The definition of the liturgical day.
   * @private
   */
  #retrieveMartyrologyData(
    byKeys: ByKeys | ExtendedDefinitions,
    key: Lowercase<string>,
    def: DateDefInput,
  ): MartyrologyItem[] {
    // Retrieve the Martyrology items from the inherited LiturgicalDay object,
    // or create a new empty list.
    const martyrology: MartyrologyItem[] = byKeys[key]?.martyrology ?? [];

    // [1] Then, check if Martyrology data exists from the date definition;
    // [2] if martyrology data do not exists, but an inherited LiturgicalDay exists: do nothing more;
    // [3] if martyrology no not exists, and there is no inheritance: take the def key as the martyrology item key.
    (def.martyrology ?? (byKeys[key] && []) ?? [key]).forEach(
      (id: string | MartyrologyItemRedefined) => {
        const pointer = typeof id === 'string' ? { key: id } : id;

        // Add the matching Martyrology item in the Martyrology list defined above this forEach loop.
        if (Martyrology.catalog[pointer.key]) {
          // Check if the matching Martyrology item already exists
          let martyrologyItem = martyrology.find((item) => item.key === pointer.key);

          // Otherwise, add it.
          if (!martyrologyItem) {
            martyrology.push(
              (martyrologyItem = {
                key: pointer.key,
                ...Martyrology.catalog[pointer.key],
              }),
            );
          }

          // Combine `hideTitles` if provided.
          if (typeof pointer.hideTitles === 'boolean') {
            martyrologyItem.hideTitles = pointer.hideTitles;
          }

          // Combine `count` if provided.
          if (typeof pointer.count === 'number' || pointer.count === 'many') {
            martyrologyItem.count = pointer.count;
          }

          // Combine `titles` if provided.
          if (pointer.titles) {
            martyrologyItem.titles =
              typeof pointer.titles === 'function'
                ? pointer.titles(Martyrology.catalog[pointer.key].titles || [])
                : pointer.titles;
          }

          // Combine `titles` from the main date definition, if provided.
          if (def?.titles) {
            martyrologyItem.titles =
              typeof def?.titles === 'function'
                ? def?.titles(martyrologyItem.titles || [])
                : def?.titles;
          }
        }
        // If the Martyrology item is not found, it means this item is badly referenced in the date definition.
        // In this situation, romcal must report en error.
        else {
          throw new Error(
            `In the '${this.calendarName}' calendar, a LiturgicalDay with the key '${key}', have a badly referenced martyrology item: '${pointer.key}'.`,
          );
        }
      },
    );

    return martyrology;
  }

  /**
   * Compute the localized name of the liturgical day.
   * @private
   * @param byKeys The keys of the already build data that will extend the inherited data.
   * @param key The key of the LiturgicalDay to create.
   * @param def The definition of the liturgical day.
   */
  #retrieveLiturgicalDayName(
    byKeys: ByKeys | ExtendedDefinitions,
    key: Lowercase<string>,
    def: DateDefInput,
  ): string {
    let name =
      byKeys[key]?.name ?? this.#config.i18next.t('martyrology:' + (def.customLocaleKey ?? key));
    // If not found in the Martyrology catalog, have a look in the Roman celebrations.
    if (name === (def.customLocaleKey ?? key)) {
      name = this.#config.i18next.t('roman_rite:celebrations.' + (def.customLocaleKey ?? key));
    }
    // Finally, if there is no localization, romcal must throw an error,
    // because it should have at least a localization in English.
    if (name === `celebrations.${key}`) {
      throw new Error(`Locale key '${key}' is missing.`);
    }
    return name;
  }

  /**
   * Get a partial LiturgicalDay object containing the difference
   * between 2 LiturgicalDay objects that have the same date.
   * @private
   * @param dayA
   * @param dayB
   */
  #getLiturgicalDayDiff(
    dayA: LiturgicalDay | LiturgicalDayDef,
    dayB: LiturgicalDay | LiturgicalDayDef,
  ): LiturgyDayDiff | null {
    const diff = {
      // date
      ...(dayA instanceof LiturgicalDay && dayB instanceof LiturgicalDay && dayA.date !== dayB.date
        ? { date: dayA.date }
        : {}),

      // precedence
      ...(dayA.precedence !== dayB.precedence ? { precedence: dayA.precedence } : {}),

      // rank
      ...(dayA.rank !== dayB.rank ? { rank: dayA.rank } : {}),

      // isHolyDayOfObligation
      ...(dayA.isHolyDayOfObligation !== dayB.isHolyDayOfObligation
        ? { isHolyDayOfObligation: dayA.isHolyDayOfObligation }
        : {}),

      // name
      ...(dayA.name !== dayB.name ? { name: dayA.name } : {}),

      // liturgicalColors
      ...(dayA.liturgicalColors
        .filter((x) => !dayB.liturgicalColors.includes(x))
        .concat(dayB.liturgicalColors.filter((x) => !dayA.liturgicalColors.includes(x))).length
        ? { liturgicalColors: dayA.liturgicalColors }
        : {}),

      // cycles.properCycle
      ...(dayA instanceof LiturgicalDay &&
      dayB instanceof LiturgicalDay &&
      dayA.cycles.properCycle !== dayB.cycles.properCycle
        ? { cycles: { properCycle: dayA.cycles.properCycle } }
        : {}),
    };

    return Object.keys(diff).length ? { ...diff, fromCalendar: dayA.fromCalendar } : null;
  }

  /**
   * Generate a liturgical calendar according to the precedence rules between liturgical days.
   * @param builtData - The already build data, that will use to generate a calendar.
   */
  static generateCalendar(builtData: LiturgicalDefBuiltData): LiturgicalCalendar {
    const finalData: LiturgicalCalendar = {};

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      // Order the LiturgicalDays objects, following the precedence rules defined in the UNLY #49.
      const dates: LiturgicalDay[] = builtData.datesIndex[dateStr]
        .map((key) => builtData.byKeys[key])
        .sort(({ precedence: firstPrecedence }, { precedence: nextPrecedence }) => {
          const type1 = PRECEDENCES.indexOf(firstPrecedence);
          const type2 = PRECEDENCES.indexOf(nextPrecedence);
          if (type1 < type2) return -1;
          if (type1 > type2) return 1;
          return 0;
        });

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
          .filter((d) => d.precedence === Precedences.OptionalMemorial_12)
          .map((d) => (d.isOptional = true) && d);
      }

      finalData[dateStr] = [
        defaultLiturgicalDay,
        ...optionalMemorials,
        ...(thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : []),
      ];
    });

    return finalData;
  }
};
