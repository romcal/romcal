import {
  BaseCalendarDef,
  BundleInputs,
  CalendarDefInputs,
  CalendarDefInstance,
  ParticularConfig,
} from '../types/calendar-def';
import { Id } from '../types/common';
import { RomcalConfigInput } from '../types/config';
import { LiturgicalDayBundleInput } from '../types/liturgical-day';
import { Dates } from '../utils/dates';

import { RomcalConfig } from './config';
import { LiturgicalDayDef } from './liturgical-day-def';

export class CalendarDef implements BaseCalendarDef {
  readonly #config: RomcalConfig;

  readonly dates: typeof Dates;

  ParentCalendar?: CalendarDefInstance | null;

  parentCalendarInstance?: InstanceType<CalendarDefInstance>;

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
    if (this.ParentCalendar) {
      this.parentCalendarInstance = new this.ParentCalendar(this.#config);

      // Update first the configuration from the parent calendar(s)
      this.parentCalendarInstance.updateConfig(input);
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
    if (parentCal.parentCalendarInstance) {
      this.#retrieveParentCalInputs(parentCal.parentCalendarInstance);
    }

    parentCal.buildAllDefinitions();
  }

  buildAllDefinitions(): void {
    if (this.#definitionsBuilt) return;

    const inputs = Object.keys(this.inputs);

    if (this.parentCalendarInstance) {
      this.#retrieveParentCalInputs(this.parentCalendarInstance);
    }

    inputs.forEach((id) => {
      const inputValues: LiturgicalDayBundleInput[] = Array.isArray(this.inputs[id])
        ? (this.inputs[id] as LiturgicalDayBundleInput[])
        : [this.inputs[id] as LiturgicalDayBundleInput];
      inputValues.forEach((input) => this.#buildDefinition(id, input));
    });

    this.#definitionsBuilt = true;
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
