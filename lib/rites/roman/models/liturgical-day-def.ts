import { LiturgicalColors } from '@roman-rite/constants/colors';
import { ProperCycles } from '@roman-rite/constants/cycles';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences } from '@roman-rite/constants/precedences';
import { Ranks, RanksFromPrecedence } from '@roman-rite/constants/ranks';
import { LiturgicalSeasons } from '@roman-rite/constants/seasons';
import { PROPER_OF_TIME_NAME } from '@roman-rite/general-calendar/proper-of-time';
import { RomcalConfig } from '@roman-rite/models/config';
import {
  BaseLiturgicalDayDef,
  DateDef,
  isLiturgicalDayProperOfTimeInput,
  Key,
  LiturgicalDayInput,
  LiturgicalDayProperOfTimeInput,
  LiturgyDayDiff,
  MartyrologyItemRedefined,
  TitlesDef,
} from '@roman-rite/types/liturgical-day';
import { Martyrology } from '@romcal/catalog/martyrology';
import { isMartyr, PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { MartyrologyItem } from '@romcal/types/martyrology';
import { StringMap } from 'i18next';

export default class LiturgicalDayDef implements BaseLiturgicalDayDef {
  readonly #config: RomcalConfig;
  readonly key: Key;
  readonly dateDef: DateDef;
  readonly precedence: Precedences;
  readonly rank: Ranks;
  readonly isHolyDayOfObligation: boolean;
  isOptional: boolean;
  readonly i18nDef: [string] | [string, StringMap | string];
  readonly seasons: LiturgicalSeasons[];
  readonly periods: LiturgicalPeriods[];
  readonly liturgicalColors: LiturgicalColors[];
  readonly martyrology: MartyrologyItem[];
  readonly titles: (Titles | PatronTitles)[];
  readonly properCycle: ProperCycles;
  readonly fromCalendar: Lowercase<string>;
  readonly fromExtendedCalendars: LiturgyDayDiff[];

  #name?: string;
  public get name(): string {
    if (this.#name !== undefined) return this.#name;
    let name: string;
    // i18nDef from the proper of time already contains the namespace key
    if (this.fromCalendar === PROPER_OF_TIME_NAME) {
      name = this.#config.i18next.t(this.i18nDef[0], this.i18nDef[1]);
    }
    // i18nDef from general or particular calendars
    else {
      name = this.#config.i18next.t('martyrology:' + this.i18nDef[0], this.i18nDef[1]);
      // If not found in the Martyrology catalog, have a look in the Roman celebrations.
      if (name === this.i18nDef[0]) {
        name = this.#config.i18next.t(
          'roman_rite:celebrations.' + this.i18nDef[0],
          this.i18nDef[1],
        );
      }
    }
    this.#name = name;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#name;
  }

  #rankName?: string;
  public get rankName(): string {
    if (this.#rankName !== undefined) return this.#rankName;
    const key = `roman_rite:ranks.${(this.rank ?? '').toLowerCase()}`;
    return (this.#rankName = this.#config.i18next.t(key) ?? key);
  }

  #seasonNames?: string[];
  public get seasonNames(): string[] {
    if (this.#seasonNames !== undefined) return this.#seasonNames;
    return (this.#seasonNames = this.seasons.map((s) => {
      const key = `roman_rite:seasons.${(s ?? '').toLowerCase()}.season`;
      return this.#config.i18next.t(key) ?? key;
    }));
  }

  #liturgicalColorNames?: string[];
  public get liturgicalColorNames(): string[] {
    if (this.#liturgicalColorNames !== undefined) return this.#liturgicalColorNames;
    return (this.#liturgicalColorNames = this.liturgicalColors.map((s) => {
      const key = `colors:${(s ?? '').toLowerCase()}`;
      return this.#config.i18next.t(key) ?? key;
    }));
  }

  constructor(
    key: Key,
    input: LiturgicalDayProperOfTimeInput | LiturgicalDayInput,
    fromCalendar: Lowercase<string>,
    config: RomcalConfig,
  ) {
    this.#config = config;

    this.key = key;

    const previousDef: LiturgicalDayDef | undefined = Object.prototype.hasOwnProperty.call(
      config.liturgicalDayDef,
      key,
    )
      ? config.liturgicalDayDef[key]
      : undefined;

    if (!input.dateDef && !previousDef) {
      throw new Error(
        `In the '${fromCalendar}' calendar, the property 'dateDef' for '${key}' must be defined.`,
      );
    }
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    this.dateDef = input.dateDef ?? previousDef!.dateDef;

    if (!input.precedence && !previousDef) {
      throw new Error(
        `In the '${fromCalendar}' calendar, the property 'precedence' for '${key}' must be defined.`,
      );
    }
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    this.precedence = input.precedence ?? previousDef!.precedence;

    this.rank = LiturgicalDayDef.precedenceToRank(this.precedence, key);

    this.isHolyDayOfObligation =
      input.isHolyDayOfObligation ?? previousDef?.isHolyDayOfObligation ?? false;

    this.isOptional = input.isOptional ?? previousDef?.isOptional ?? false;

    if (isLiturgicalDayProperOfTimeInput(input)) {
      const data = input as LiturgicalDayProperOfTimeInput;
      this.i18nDef = data.i18nDef;
    } else {
      this.i18nDef = input.customLocaleKey
        ? [input.customLocaleKey]
        : previousDef?.i18nDef || [key];
    }

    if (isLiturgicalDayProperOfTimeInput(input)) {
      const data = input as LiturgicalDayProperOfTimeInput;
      this.seasons = data.seasons ?? [];
      this.periods = data.periods ?? [];
    } else {
      this.seasons = previousDef?.seasons ?? [];
      this.periods = previousDef?.periods ?? [];
    }

    this.martyrology = this.#retrieveMartyrologyData(key, input, fromCalendar, previousDef);

    // Use a .reverse() twice to ensure that added titles on multiple martyrology items
    // are placed at the end of the array (not between the contained titles).
    this.titles = [...new Set(this.martyrology.flatMap((m) => m.titles || []).reverse())].reverse();

    this.liturgicalColors = Array.isArray(input.liturgicalColors)
      ? input.liturgicalColors
      : input.liturgicalColors
      ? [input.liturgicalColors]
      : Array.isArray(previousDef?.liturgicalColors)
      ? // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        previousDef!.liturgicalColors
      : isMartyr(this.titles)
      ? [LiturgicalColors.RED]
      : [LiturgicalColors.WHITE];

    this.properCycle =
      input.properCycle ?? previousDef?.properCycle ?? ProperCycles.PROPER_OF_SAINTS;

    this.fromCalendar = fromCalendar;

    // Check object differences between the previously inherited object
    // and the new one
    this.fromExtendedCalendars = previousDef?.fromExtendedCalendars ?? [];
    if (previousDef) {
      const diff = this.#getLiturgicalDayDiff(previousDef, this);
      // Store object diffs in the new LiturgicalDay object
      if (diff) this.fromExtendedCalendars.push(diff);
    }

    // Delete a date definition that has the `drop: true` property,
    if (input.drop) {
      if (!previousDef) {
        throw new Error(
          `In the '${fromCalendar}' calendar, trying to drop a LiturgicalDay that doesn't exists: '${key}'.`,
        );
      } else if (previousDef.fromCalendar === PROPER_OF_TIME_NAME) {
        throw new Error(
          `In the '${fromCalendar}' calendar, you can't drop a LiturgicalDay from the Proper of Time: '${key}'.`,
        );
      } else {
        delete config.liturgicalDayDef[key];
      }

      return;
    }

    // Add or combine the new definition to the collection
    config.liturgicalDayDef[key] = this;
  }

  /**
   * Return the corresponding Rank that correspond to a Precedence.
   * @private
   * @param precedence The Precedence type of the liturgical day.
   * @param key The key of the liturgical day.
   * @private
   */
  static precedenceToRank(precedence: Precedences, key: string): Ranks {
    // Easter Sunday
    if (precedence === Precedences.Triduum_1 && key === 'easter_sunday') {
      return Ranks.SOLEMNITY;
    }

    return RanksFromPrecedence[precedence];
  }

  /**
   * Retrieve the Martyrology items from the inherited LiturgicalDay object.
   * @param key The key of the LiturgicalDay to create.
   * @param input The definition of the liturgical day.
   * @param fromCalendar
   * @param previousDef
   * @private
   */
  #retrieveMartyrologyData(
    key: Key,
    input: LiturgicalDayInput,
    fromCalendar: Key,
    previousDef?: LiturgicalDayDef,
  ): MartyrologyItem[] {
    // Retrieve the Martyrology items from the inherited LiturgicalDay object,
    // or create a new empty list.
    const martyrology: MartyrologyItem[] = previousDef?.martyrology ?? [];

    // [1] Then, check if Martyrology data exists from the date definition;
    // [2] if martyrology data do not exists, but an inherited LiturgicalDay exists: do nothing more;
    // [3] if martyrology no not exists, and there is no inheritance: take the def key as the martyrology item key.
    (input.martyrology ?? (previousDef && []) ?? [key]).forEach(
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

          // Combine specific martyrology item `titles`, if provided.
          if (pointer.titles) {
            martyrologyItem.titles = this.#combineTitles(pointer.titles, pointer.key, previousDef);
          }
        }
        // If the Martyrology item is not found, it means this item is badly referenced in the date definition.
        // In this situation, romcal must report en error.
        // Note: romcal do not report an error when the liturgical day key is used to find a martyrology item,
        // because this liturgical day definition may not be related to a martyrology item.
        else if (input.martyrology) {
          throw new Error(
            `In the '${fromCalendar}' calendar, a LiturgicalDay with the key '${key}', have a badly referenced martyrology item: '${pointer.key}'.`,
          );
        }
      },
    );

    // Combine `titles` from the main date definition, if provided.
    if (input.titles) {
      martyrology.forEach((m, i) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        m.titles = this.#combineTitles(input.titles!, martyrology[i].key, previousDef);
      });
      if (martyrology.length === 0) {
        throw new Error(
          `In the '${fromCalendar}' calendar, in the LiturgicalDay with the key '${key}', you cannot add titles because there is no martyrology items associated.`,
        );
      }
    }

    return martyrology;
  }

  /**
   * Helper function to combine defined martyrology titles
   * @param titlesDef
   * @param martyrologyKey
   * @param previousDef
   */
  #combineTitles(
    titlesDef: TitlesDef,
    martyrologyKey: Key,
    previousDef?: LiturgicalDayDef,
  ): (Titles | PatronTitles)[] {
    return Array.isArray(titlesDef)
      ? titlesDef
      : typeof titlesDef === 'object'
      ? [
          // Use a [...new Set(array)] to remove duplicates in the array
          ...new Set([
            ...(titlesDef.prepend ?? []),
            ...(previousDef?.martyrology.find((m) => m.key === martyrologyKey)?.titles ??
              Martyrology.catalog[martyrologyKey].titles ??
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
        ? { name: dayA.dateDef }
        : {}),

      // precedence
      ...(dayA.precedence !== dayB.precedence ? { precedence: dayA.precedence } : {}),

      // rank
      ...(dayA.rank !== dayB.rank ? { rank: dayA.rank } : {}),

      // isHolyDayOfObligation
      ...(dayA.isHolyDayOfObligation !== dayB.isHolyDayOfObligation
        ? { isHolyDayOfObligation: dayA.isHolyDayOfObligation }
        : {}),

      // i18n
      ...(JSON.stringify(dayA.i18nDef) !== JSON.stringify(dayB.i18nDef)
        ? { i18nDef: dayA.i18nDef }
        : {}),

      // liturgicalColors
      ...(dayA.liturgicalColors
        .filter((x) => !dayB.liturgicalColors.includes(x))
        .concat(dayB.liturgicalColors.filter((x) => !dayA.liturgicalColors.includes(x))).length
        ? { liturgicalColors: dayA.liturgicalColors }
        : {}),

      // titles
      ...(JSON.stringify(dayA.titles) !== JSON.stringify(dayB.titles)
        ? { titles: dayA.titles }
        : {}),

      // cycles.properCycle
      // ...(dayA instanceof LiturgicalDay &&
      // dayB instanceof LiturgicalDay &&
      // dayA.cycles.properCycle !== dayB.cycles.properCycle
      //   ? { cycles: { properCycle: dayA.cycles.properCycle } }
      //   : {}),
    };

    return Object.keys(diff).length ? { ...diff, fromCalendar: dayA.fromCalendar } : null;
  }
}
