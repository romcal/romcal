import { Precedence, Precedences } from '../constants/precedences';
import { Rank, Ranks } from '../constants/ranks';
import {
  BaseCalendarDef,
  BundleInputs,
  CalendarDefInputs,
  CalendarDefInstance,
  ParticularConfig,
} from '../types/calendar-def';
import { Id } from '../types/common';
import { RomcalConfigInput } from '../types/config';
import { DateDef, LiturgicalDayBundleInput } from '../types/liturgical-day';
import { Dates } from '../utils/dates';

import { RomcalConfig } from './config';
import { LiturgicalDayDef } from './liturgical-day-def';

export class CalendarDef implements BaseCalendarDef {
  readonly #config: RomcalConfig;

  readonly dates: typeof Dates;

  ParentCalendars?: CalendarDefInstance[] | null;

  parentCalendarInstances?: InstanceType<CalendarDefInstance>[];

  readonly particularConfig?: ParticularConfig;

  inputs: CalendarDefInputs = {};

  #definitionsBuilt = false;

  /**
   * Get the name of the CalendarDef class.
   */
  public get calendarName(): Id {
    if (!this.#calendarName) {
      this.#calendarName = this.constructor.name
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
    }
    return this.#calendarName;
  }

  #calendarName?: Id;

  constructor(config: RomcalConfig, inputs?: BundleInputs) {
    this.#config = config;
    this.dates = this.#config.dates;
    if (inputs) this.inputs = inputs;
  }

  /**
   * Initialize inherited calendars (the parent calendars), and update the main RomcalConfig
   * from the provided user config or from any particular config from the calendar definitions.
   * @param input - The input configuration provided by the user.
   */
  updateConfig(input?: RomcalConfigInput): void {
    // Init the parent calendar
    if (this.ParentCalendars) {
      this.parentCalendarInstances = this.ParentCalendars.map((ParentCal) => {
        const parentCalInstance = new ParentCal(this.#config);

        // Update first the configuration from the parent calendar(s)
        parentCalInstance.updateConfig(input);
        return parentCalInstance;
      });
    }

    // Combine the provided user configuration,
    // the particular configuration from this calendar,
    // and the sanitized configuration.

    this.#config.epiphanyOnSunday =
      input?.epiphanyOnSunday ?? this.particularConfig?.epiphanyOnSunday ?? this.#config.epiphanyOnSunday;

    this.#config.ascensionOnSunday =
      input?.ascensionOnSunday ?? this.particularConfig?.ascensionOnSunday ?? this.#config.ascensionOnSunday;

    this.#config.corpusChristiOnSunday =
      input?.corpusChristiOnSunday ??
      this.particularConfig?.corpusChristiOnSunday ??
      this.#config.corpusChristiOnSunday;
  }

  /**
   * Recursive method that retrieve all parent calendars definitions
   * @private
   * @param parentCal - The parent calendar object.
   * @private
   */
  #retrieveParentCalInputs(parentCal: InstanceType<CalendarDefInstance>): void {
    if (parentCal.parentCalendarInstances) {
      parentCal.parentCalendarInstances.forEach((parent) => {
        this.#retrieveParentCalInputs(parent);
      });
    }

    parentCal.buildAllDefinitions();
  }

  buildAllDefinitions(): void {
    if (this.#definitionsBuilt) return;

    const inputs = Object.keys(this.inputs);

    if (this.parentCalendarInstances) {
      this.parentCalendarInstances.forEach((parent) => {
        this.#retrieveParentCalInputs(parent);
      });
    }

    inputs.forEach((id) => {
      const inputValues: LiturgicalDayBundleInput[] = Array.isArray(this.inputs[id])
        ? (this.inputs[id] as LiturgicalDayBundleInput[])
        : [this.inputs[id] as LiturgicalDayBundleInput];
      inputValues.forEach((input) => {
        this.#buildDefinition(id, input);
        // Declarative octave: expand N additional defs shifted by +1..+N days.
        // Unused by 1969 inputs today; seam for 1962 octaves.
        if (input.octave) this.#buildOctaveDefinitions(id, input, input.octave);
      });
    });

    this.#definitionsBuilt = true;
  }

  /**
   * Expand a declarative `octave: { rank, days }` input into N additional LiturgicalDayDef
   * entries, each anchored +n days after the source input's dateDef, inheriting the octave's rank.
   * @private
   */
  #buildOctaveDefinitions(id: Id, input: LiturgicalDayBundleInput, octave: { rank: Rank; days: number }): void {
    const baseDateDef = input.dateDef;
    if (!baseDateDef) return;

    const octavePrecedence = CalendarDef.#rankToPrecedence(octave.rank);
    for (let n = 1; n <= octave.days; n += 1) {
      const octaveId = `${id}_octave_day_${n}`;
      const shiftedDateDef = { ...baseDateDef, addDay: (baseDateDef.addDay ?? 0) + n } as DateDef;
      const octaveInput: LiturgicalDayBundleInput = {
        ...input,
        dateDef: shiftedDateDef,
        precedence: octavePrecedence,
        octave: undefined,
      };
      this.#buildDefinition(octaveId, octaveInput);
    }
  }

  /**
   * Map a Rank to a representative Precedence for declarative octave expansion.
   * @private
   */
  static #rankToPrecedence(rank: Rank): Precedence {
    switch (rank) {
      case Ranks.Solemnity:
        return Precedences.ProperSolemnity_PrincipalPatron_4a;
      case Ranks.Sunday:
        return Precedences.UnprivilegedSunday_6;
      case Ranks.Feast:
        return Precedences.GeneralFeast_7;
      case Ranks.Memorial:
        return Precedences.GeneralMemorial_10;
      case Ranks.OptionalMemorial:
        return Precedences.OptionalMemorial_12;
      case Ranks.Weekday:
      default:
        return Precedences.Weekday_13;
    }
  }

  /**
   *
   * @param id
   * @param input
   * @private
   */
  #buildDefinition(id: Id, input: LiturgicalDayBundleInput): LiturgicalDayDef {
    // Create a new LiturgicalDay object from its definition
    return new LiturgicalDayDef(
      id,
      {
        dateDef: input.dateDef,
        dateExceptions: input.dateExceptions,
        alternativeTransferDateDefs: input.alternativeTransferDateDefs,
        precedence: input.precedence,
        allowSimilarRankItems: input.allowSimilarRankItems,
        customLocaleId: input.customLocaleId,
        isHolyDayOfObligation: input.isHolyDayOfObligation,
        commonsDef: input.commonsDef,
        isOptional: input.isOptional,
        colors: input.colors,
        martyrology: input.martyrology,
        titles: input.titles,
        properCycle: input.properCycle,
        drop: input.drop,
      },
      input.fromCalendarId ?? this.calendarName,
      this.#config
    );
  }
}
