import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import {
  CalendarDefInstance,
  BundleDefinitions,
  CalendarDefInputs,
  BaseCalendarDef,
  ParticularConfig,
} from '@romcal/types/calendar-def';
import { Key } from '@romcal/types/common';
import { RomcalConfigInput } from '@romcal/types/config';
import { LiturgicalDayBundleInput } from '@romcal/types/liturgical-day';
import { Dates } from '@romcal/utils/dates';

export class CalendarDef implements BaseCalendarDef {
  readonly #config: RomcalConfig;
  readonly dates: typeof Dates;
  parentCalendar?: CalendarDefInstance | null;
  parentCalendarInstance?: InstanceType<CalendarDefInstance>;
  readonly particularConfig?: ParticularConfig;
  definitions: CalendarDefInputs = {};
  #definitionsBuilt = false;

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

  constructor(config: RomcalConfig, definitions?: BundleDefinitions) {
    this.#config = config;
    this.dates = this.#config.dates;
    if (definitions) this.definitions = definitions;
  }

  /**
   * Initialize inherited calendars (the parent calendars), and update the main RomcalConfig
   * from the provided user config or from any particular config from the calendar definitions.
   * @param input - The input configuration provided by the user.
   */
  updateConfig(input?: RomcalConfigInput): void {
    // Init the parent calendar
    if (this.parentCalendar) {
      this.parentCalendarInstance = new this.parentCalendar(this.#config);

      // Update first the configuration from the parent calendar(s)
      this.parentCalendarInstance.updateConfig(input);
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
   * Recursive method that retrieve all parent calendars definitions
   * @private
   * @param parentCal - The parent calendar object.
   * @private
   */
  #retrieveParentCalDefinitions(parentCal: InstanceType<CalendarDefInstance>): void {
    if (parentCal.parentCalendarInstance) {
      this.#retrieveParentCalDefinitions(parentCal.parentCalendarInstance);
    }

    parentCal.buildAllDefinitions();
  }

  buildAllDefinitions(): void {
    if (this.#definitionsBuilt) return;

    const inputs = Object.keys(this.definitions);

    if (this.parentCalendarInstance) {
      this.#retrieveParentCalDefinitions(this.parentCalendarInstance);
    }

    inputs.forEach((key) => {
      const inputValues: LiturgicalDayBundleInput[] = Array.isArray(this.definitions[key])
        ? (this.definitions[key] as LiturgicalDayBundleInput[])
        : [this.definitions[key] as LiturgicalDayBundleInput];
      inputValues.forEach((input) => this.#buildDefinition(key, input));
    });

    this.#definitionsBuilt = true;
  }

  /**
   *
   * @param key
   * @param input
   * @private
   */
  #buildDefinition(key: Key, input: LiturgicalDayBundleInput): void {
    // Create a new LiturgicalDay object from its definition
    new LiturgicalDayDef(
      key,
      {
        dateDef: input.dateDef,
        dateExceptions: input.dateExceptions,
        precedence: input.precedence,
        customLocaleKey: input.customLocaleKey,
        isHolyDayOfObligation: input.isHolyDayOfObligation,
        isOptional: input.isOptional,
        liturgicalColors: input.liturgicalColors,
        martyrology: input.martyrology,
        titles: input.titles,
        properCycle: input.properCycle,
        drop: input.drop,
      },
      input.fromCalendar ?? this.calendarName,
      this.#config,
    );
  }
}
