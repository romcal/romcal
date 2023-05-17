import {
  Color,
  isMartyr,
  MartyrologyItem,
  Period,
  Precedence,
  PROPER_OF_TIME_ID,
  ProperCycle,
  Rank,
  RanksFromPrecedence,
  Season,
} from '@romcal/shared';
import arrify from 'arrify';

import { Id } from '../types/common';
import { PartialCyclesDef } from '../types/cycles-metadata';
import {
  BaseLiturgicalDayDef,
  CalendarMetadata,
  DateDef,
  DateDefException,
  FromCalendarId,
  i18nDef,
  isLiturgicalDayProperOfTimeInput,
  LiturgicalDayBundleInput,
  LiturgicalDayInput,
  LiturgicalDayProperOfTimeInput,
  LiturgyDayDiff,
  MartyrologyItemRedefined,
  RomcalTitles,
  TitlesDef,
} from '../types/liturgical-day';
import { RomcalConfig } from './config';

export default class LiturgicalDayDef implements BaseLiturgicalDayDef {
  readonly #config: RomcalConfig;
  readonly id: Id;
  readonly dateDef: DateDef;
  readonly dateExceptions: DateDefException[];
  readonly precedence: Precedence;
  readonly rank: Rank;
  readonly isHolyDayOfObligation: boolean;
  readonly allowSimilarRankItems: boolean;
  readonly isOptional: boolean;
  readonly i18nDef: i18nDef;
  readonly seasons: Season[];
  readonly periods: Period[];
  readonly calendarMetadata: CalendarMetadata;
  readonly colors: Color[];
  readonly martyrology: MartyrologyItem[];
  readonly titles: RomcalTitles;
  readonly cycles: PartialCyclesDef;
  readonly fromCalendarId: FromCalendarId;
  readonly fromExtendedCalendars: LiturgyDayDiff[];
  readonly input: LiturgicalDayBundleInput[];

  #name?: string;
  public get name(): string {
    if (this.#name !== undefined) return this.#name;
    let name: string;
    // i18nDef from the proper of time already contains the ID
    if (this.fromCalendarId === PROPER_OF_TIME_ID) {
      name = this.#config.i18next.t(this.i18nDef[0], this.i18nDef[1]);
    }
    // i18nDef from general or particular calendars
    else {
      name = this.#config.i18next.t(this.i18nDef[0], this.i18nDef[1]);
    }
    this.#name = name;

    return this.#name;
  }

  #rankName?: string;
  public get rankName(): string {
    if (this.#rankName !== undefined) return this.#rankName;
    const id = `ranks:${(this.rank ?? '').toLowerCase()}`;
    return (this.#rankName = this.#config.i18next.t(id) ?? id);
  }

  #seasonNames?: string[];
  public get seasonNames(): string[] {
    if (this.#seasonNames !== undefined) return this.#seasonNames;
    return (this.#seasonNames = this.#config.getSeasonNames(this.seasons));
  }

  #colorNames?: string[];
  public get colorNames(): string[] {
    if (this.#colorNames !== undefined) return this.#colorNames;
    return (this.#colorNames = this.#config.getLiturgicalColorNames(this.colors));
  }

  constructor(
    id: Id,
    input: LiturgicalDayProperOfTimeInput | LiturgicalDayInput | LiturgicalDayBundleInput,
    fromCalendarId: FromCalendarId,
    config: RomcalConfig,
  ) {
    this.#config = config;

    this.id = id;

    const previousDef: LiturgicalDayDef | undefined = Object.prototype.hasOwnProperty.call(
      config.liturgicalDayDef,
      id,
    )
      ? config.liturgicalDayDef[id]
      : undefined;

    if (!input.dateDef && !previousDef) {
      throw new Error(
        `In the '${fromCalendarId}' calendar, the property 'dateDef' for '${id}' must be defined.`,
      );
    }
    // TODO: refactor this to avoid non-null assertion
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.dateDef = input.dateDef ?? previousDef!.dateDef;

    this.dateExceptions = Array.isArray(input.dateExceptions)
      ? input.dateExceptions
      : input.dateExceptions
      ? [input.dateExceptions]
      : previousDef
      ? previousDef.dateExceptions
      : [];

    if (!input.precedence && !previousDef) {
      throw new Error(
        `In the '${fromCalendarId}' calendar, the property 'precedence' for '${id}' must be defined.`,
      );
    }
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    this.precedence = input.precedence ?? previousDef!.precedence;

    this.rank = LiturgicalDayDef.precedenceToRank(this.precedence, id);

    this.allowSimilarRankItems =
      input.allowSimilarRankItems ?? previousDef?.allowSimilarRankItems ?? false;

    this.isHolyDayOfObligation =
      input.isHolyDayOfObligation ?? previousDef?.isHolyDayOfObligation ?? false;

    this.isOptional = input.isOptional ?? previousDef?.isOptional ?? false;

    if (isLiturgicalDayProperOfTimeInput(input)) {
      const data = input as LiturgicalDayProperOfTimeInput;
      this.i18nDef = data.i18nDef;
    } else {
      this.i18nDef = input.customLocaleId
        ? [`names:${input.customLocaleId}`]
        : previousDef?.i18nDef || [`names:${id}`];
    }

    if (isLiturgicalDayProperOfTimeInput(input)) {
      const data = input as LiturgicalDayProperOfTimeInput;
      this.seasons = data.seasons ?? [];
      this.periods = data.periods ?? [];
    } else {
      this.seasons = previousDef?.seasons ?? [];
      this.periods = previousDef?.periods ?? [];
    }

    if (isLiturgicalDayProperOfTimeInput(input)) {
      const data = input as LiturgicalDayProperOfTimeInput;
      this.calendarMetadata = data.calendarMetadata;
    } else {
      this.calendarMetadata = {};
    }

    this.martyrology = this.#retrieveMartyrologyData(id, input, fromCalendarId, previousDef);

    // Use a .reverse() twice to ensure that added titles on multiple martyrology items
    // are placed at the end of the array (not between the contained titles).
    this.titles = [...new Set(this.martyrology.flatMap((m) => m.titles || []).reverse())].reverse();

    this.colors = input.colors
      ? (arrify(input.colors) as Color[])
      : previousDef
      ? (arrify(previousDef.colors) as Color[])
      : (arrify(this.titles.some((t) => isMartyr(t)) ? Color.Red : Color.White) as Color[]);

    this.cycles = {
      properCycle:
        input.properCycle ?? previousDef?.cycles.properCycle ?? ProperCycle.ProperOfSaints,
    };

    this.fromCalendarId = fromCalendarId;

    // Check object differences between the previously inherited object
    // and the new one
    this.fromExtendedCalendars = previousDef?.fromExtendedCalendars ?? [];
    if (previousDef) {
      const diff = this.#getLiturgicalDayDiff(previousDef, this);
      // Store object diffs in the new LiturgicalDay object
      if (diff) this.fromExtendedCalendars.push(diff);
    }

    // Store input object, that will be required to generate a calendar bundle.
    this.input = [...(previousDef?.input || []), { ...input, fromCalendarId }];

    // Delete a date definition that has the `drop: true` property,
    if (input.drop) {
      if (!previousDef) {
        throw new Error(
          `In the '${fromCalendarId}' calendar, trying to drop a LiturgicalDay that doesn't exists: '${id}'.`,
        );
      } else if (previousDef.fromCalendarId === PROPER_OF_TIME_ID) {
        throw new Error(
          `In the '${fromCalendarId}' calendar, you can't drop a LiturgicalDay from the Proper of Time: '${id}'.`,
        );
      } else {
        delete config.liturgicalDayDef[id];
      }

      return;
    }

    // Add or combine the new definition to the collection
    config.liturgicalDayDef[id] = this;
  }

  /**
   * Return the corresponding Rank that correspond to a Precedence.
   * @private
   * @param precedence The Precedence type of the liturgical day.
   * @param id ID of the liturgical day.
   * @private
   */
  static precedenceToRank(precedence: Precedence, id: string): Rank {
    // Easter Sunday
    if (precedence === Precedence.Triduum_1 && id === 'easter_sunday') {
      return Rank.Solemnity;
    }

    return RanksFromPrecedence[precedence];
  }

  /**
   * Retrieve the Martyrology items from the inherited LiturgicalDay object.
   * @param id ID of the LiturgicalDay to create.
   * @param input The definition of the liturgical day.
   * @param fromCalendarId
   * @param previousDef
   * @private
   */
  #retrieveMartyrologyData(
    id: Id,
    input: LiturgicalDayInput,
    fromCalendarId: Id,
    previousDef?: LiturgicalDayDef,
  ): MartyrologyItem[] {
    // Retrieve the Martyrology items from the inherited LiturgicalDay object,
    // or create a new empty list.
    const martyrology: MartyrologyItem[] = previousDef?.martyrology ?? [];

    // [1] Then, check if Martyrology data exists from the date definition;
    // [2] if martyrology data do not exist, but an inherited LiturgicalDay exists: do nothing more;
    // [3] if martyrology no not exists, and there is no inheritance: take the def ID as the martyrology item ID.
    (input.martyrology ?? (previousDef && []) ?? [id]).forEach(
      (martyrologyId: string | MartyrologyItemRedefined) => {
        const pointer = typeof martyrologyId === 'string' ? { id: martyrologyId } : martyrologyId;

        // Add the matching Martyrology item in the Martyrology list defined above this forEach loop.
        if (this.#config.martyrologyCatalog[pointer.id]) {
          // Check if the matching Martyrology item already exists
          let martyrologyItem = martyrology.find((item) => item.martyrologyId === pointer.id);

          // Otherwise, add it.
          if (!martyrologyItem) {
            martyrology.push(
              (martyrologyItem = {
                martyrologyId: pointer.id,
                ...this.#config.martyrologyCatalog[pointer.id],
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

          // Combine specific martyrology item `titles`, if provided.
          if (pointer.titles) {
            martyrologyItem.titles = this.#combineTitles(pointer.titles, pointer.id, previousDef);
          }
        }
        // If the Martyrology item is not found, it means this item is badly referenced in the date definition.
        // In this situation, romcal must report en error.
        // Note: romcal do not report an error when the liturgical day ID is used to find a martyrology item,
        // because this liturgical day definition may not be related to a martyrology item.
        else if (input.martyrology) {
          // If the martyrology catalog as 0 items, we take the assumption that a new romcal instance
          // has been created, without a specified localized calendar. In this case romcal compute the
          // General Roman Calendar without localization and martyrology data.

          // TODO: refactor this to have always martyrology data, even for the General Roman Calendar.
          if (
            Object.keys(this.#config.martyrologyCatalog).length > 0 &&
            this.#config.calendarName === 'general-roman'
          ) {
            throw new Error(
              `In the '${fromCalendarId}' calendar, a LiturgicalDay with the ID '${martyrologyId}', have a badly referenced martyrology item: '${pointer.id}'.`,
            );
          }
        }
      },
    );

    // Combine `titles` from the main date definition, if provided.
    if (input.titles) {
      martyrology.forEach((m, i) => {
        // TODO: refactor this to avoid non-null assertion
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        m.titles = this.#combineTitles(input.titles!, martyrology[i].martyrologyId, previousDef);
      });
      if (martyrology.length === 0) {
        throw new Error(
          `In the '${fromCalendarId}' calendar, in the LiturgicalDay with the ID '${id}', you cannot add titles because there is no martyrology items associated.`,
        );
      }
    }

    return martyrology;
  }

  /**
   * Helper function to combine defined martyrology titles
   * @param titlesDef
   * @param martyrologyId
   * @param previousDef
   */
  #combineTitles(
    titlesDef: TitlesDef,
    martyrologyId: Id,
    previousDef?: LiturgicalDayDef,
  ): RomcalTitles {
    return Array.isArray(titlesDef)
      ? titlesDef
      : typeof titlesDef === 'object'
      ? [
          // Use a [...new Set(array)] to remove duplicates in the array
          ...new Set([
            ...(titlesDef.prepend ?? []),
            ...(previousDef?.martyrology.find((m) => m.martyrologyId === martyrologyId)?.titles ??
              this.#config.martyrologyCatalog[martyrologyId].titles ??
              []),
            ...(titlesDef.append ?? []),
          ]),
        ]
      : [];
  }

  /**
   * Get a partial LiturgicalDay object containing the difference
   * between 2 LiturgicalDay objects that have the same date.
   * @private
   * @param dayA
   * @param dayB
   */
  #getLiturgicalDayDiff(dayA: LiturgicalDayDef, dayB: LiturgicalDayDef): LiturgyDayDiff | null {
    const diff = {
      // date
      // ...(dayA instanceof LiturgicalDay && dayB instanceof LiturgicalDay && dayA.date !== dayB.date
      //   ? { date: dayA.date }
      //   : {}),

      // dateDef
      ...(JSON.stringify(dayA.dateDef) !== JSON.stringify(dayB.dateDef)
        ? { dateDef: dayA.dateDef }
        : {}),

      // dateExceptions
      ...(JSON.stringify(dayA.dateExceptions) !== JSON.stringify(dayB.dateExceptions)
        ? { dateExceptions: dayA.dateExceptions }
        : {}),

      // precedence
      ...(dayA.precedence !== dayB.precedence ? { precedence: dayA.precedence } : {}),

      // rank
      ...(dayA.rank !== dayB.rank ? { rank: dayA.rank } : {}),

      // isHolyDayOfObligation
      ...(dayA.isHolyDayOfObligation !== dayB.isHolyDayOfObligation
        ? { isHolyDayOfObligation: dayA.isHolyDayOfObligation }
        : {}),

      // isOptional
      ...(dayA.isOptional !== dayB.isOptional ? { isOptional: dayA.isOptional } : {}),

      // i18n
      ...(JSON.stringify(dayA.i18nDef) !== JSON.stringify(dayB.i18nDef)
        ? { i18nDef: dayA.i18nDef }
        : {}),

      // colors
      ...(dayA.colors
        .filter((x) => !dayB.colors.includes(x))
        .concat(dayB.colors.filter((x) => !dayA.colors.includes(x))).length
        ? { colors: dayA.colors }
        : {}),

      // titles
      ...(JSON.stringify(dayA.titles) !== JSON.stringify(dayB.titles)
        ? { titles: dayA.titles }
        : {}),

      // martyrology
      ...(JSON.stringify(dayA.martyrology) !== JSON.stringify(dayB.martyrology)
        ? { martyrology: dayA.martyrology.map((m) => m.martyrologyId) }
        : {}),

      // cycles.properCycle
      ...(dayA.cycles.properCycle !== dayB.cycles.properCycle
        ? { cycles: { properCycle: dayA.cycles.properCycle } }
        : {}),
    };

    return Object.keys(diff).length ? { ...diff, fromCalendarId: dayA.fromCalendarId } : null;
  }
}
