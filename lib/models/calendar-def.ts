import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import {
  BaseCalendarDef,
  ICalendarDef,
  InputDefinitions,
  ParticularConfig,
} from '@romcal/types/calendar-def';
import { RomcalConfigInput } from '@romcal/types/config';
import { Key, LiturgicalDayInput } from '@romcal/types/liturgical-day';
import { Dates } from '@romcal/utils/dates';

export const CalendarDef: BaseCalendarDef = class implements ICalendarDef {
  readonly #config: RomcalConfig;
  readonly dates: typeof Dates;
  inheritFrom?: BaseCalendarDef | null;
  inheritFromInstance?: InstanceType<BaseCalendarDef>;
  readonly particularConfig?: ParticularConfig;
  definitions: InputDefinitions = {};
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
   * Recursive method that retrieve all inherited calendars definitions
   * @private
   * @param inheritedCal - The inherited calendar object.
   * @private
   */
  #retrieveInheritedCalDefinitions(inheritedCal: InstanceType<BaseCalendarDef>): void {
    if (inheritedCal.inheritFromInstance) {
      this.#retrieveInheritedCalDefinitions(inheritedCal.inheritFromInstance);
    }

    inheritedCal.buildAllDefinitions();
  }

  buildAllDefinitions(): void {
    if (this.#definitionsBuilt) return;

    const definitions = Object.keys(this.definitions);

    if (this.inheritFromInstance) {
      this.#retrieveInheritedCalDefinitions(this.inheritFromInstance);
    }

    definitions.forEach((key) => {
      const def: LiturgicalDayInput = this.definitions[key];
      this.#buildDefinition(key, def);
    });

    this.#definitionsBuilt = true;
  }

  /**
   *
   * @param key
   * @param input
   * @private
   */
  #buildDefinition(key: Key, input: LiturgicalDayInput): void {
    // Create a new LiturgicalDay object from its definition
    new LiturgicalDayDef(
      key,
      {
        dateDef: input.dateDef,
        dateExceptions: input.dateExceptions,
        precedence: input.precedence,
        customLocaleKey: input.customLocaleKey,
        isHolyDayOfObligation: !!input.isHolyDayOfObligation,
        isOptional: input.isOptional,
        liturgicalColors: input.liturgicalColors,
        martyrology: input.martyrology,
        titles: input.titles,
        properCycle: input.properCycle,
        drop: input.drop,
      },
      this.calendarName,
      this.#config,
    );
  }
};
