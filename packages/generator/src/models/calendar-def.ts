import {
  BaseCalendarDef,
  BundleInputs,
  CalendarDefInputs,
  CalendarDefInstance,
  ParticularConfig,
} from '../types/calendar-def';
import { Id } from '../types/common';
import { RomcalConfigInput } from '../types/config';
import { DatesConstructor } from '../types/dates';
import { LiturgicalDayBundleInput } from '../types/liturgical-day';
import { Vocabulary } from '../types/vocabulary';
import { cloneTemporalOverrides, omitTemporalOverrideAnchor } from '../utils/temporal-overrides';

import { RomcalConfig } from './config';
import { LiturgicalDayDef } from './liturgical-day-def';

export class CalendarDef<V extends Vocabulary = Vocabulary> implements BaseCalendarDef<V> {
  readonly #config: RomcalConfig<V>;

  readonly dates: DatesConstructor<V>;

  ParentCalendars?: CalendarDefInstance<V>[] | null;

  parentCalendarInstances?: InstanceType<CalendarDefInstance<V>>[];

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

  constructor(config: RomcalConfig<V>, inputs?: BundleInputs) {
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

    if (input?.temporalOverrides !== undefined) {
      this.#config.temporalOverrides = cloneTemporalOverrides(input.temporalOverrides);
    } else if (input?.epiphanyOnSunday !== undefined) {
      this.#config.temporalOverrides = omitTemporalOverrideAnchor(
        this.particularConfig?.temporalOverrides ?? this.#config.temporalOverrides,
        'epiphany'
      );
    } else if (this.particularConfig?.temporalOverrides !== undefined) {
      this.#config.temporalOverrides = cloneTemporalOverrides(this.particularConfig.temporalOverrides);
    }

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
  #retrieveParentCalInputs(parentCal: InstanceType<CalendarDefInstance<V>>): void {
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
  #buildDefinition(id: Id, input: LiturgicalDayBundleInput): LiturgicalDayDef<V> {
    // Create a new LiturgicalDay object from its definition
    return new LiturgicalDayDef<V>(
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
