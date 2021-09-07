import i18next, { i18n } from 'i18next';
import { Color } from '../constants/colors';
import { Season } from '../constants/seasons';
import { GeneralRoman } from '../general-calendar/proper-of-saints';
import { ProperOfTime } from '../general-calendar/proper-of-time';
import { RomcalBundleObject } from '../types/bundle';
import { CalendarDefInstance, LiturgicalDayDefinitions } from '../types/calendar-def';
import { CalendarScope, IRoncalConfig, RomcalConfigInput, RomcalConfigOutput } from '../types/config';
import { Locale } from '../types/locale';
import { MartyrologyCatalog } from '../types/martyrology';
import { Dates } from '../utils/dates';
import { toRomanNumber } from '../utils/numbers';
import { CalendarDef } from './calendar-def';

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements IRoncalConfig {
  readonly #input: RomcalConfigInput;
  readonly localizedCalendar?: RomcalBundleObject;
  readonly localeKey: string;
  readonly calendarName: string;
  epiphanyOnSunday: boolean;
  corpusChristiOnSunday: boolean;
  ascensionOnSunday: boolean;
  readonly scope: CalendarScope;
  readonly i18next: i18n;
  readonly dates: typeof Dates;
  readonly martyrologyCatalog: MartyrologyCatalog;

  readonly calendarsDef: InstanceType<CalendarDefInstance>[];
  liturgicalDayDef: LiturgicalDayDefinitions = {};

  /**
   * Clone the RomcalConfig object
   */
  clone(): RomcalConfig {
    return new RomcalConfig({ ...this.#input });
  }

  /**
   * Constructs a new [[Config]] object.
   * @param config [[RomcalConfig]] object representing all settings.
   * @param martyrologyCatalog
   * @param locale
   * @param particularCalendar
   */
  constructor(
    config?: RomcalConfigInput,
    martyrologyCatalog?: MartyrologyCatalog,
    locale?: Locale,
    particularCalendar?: typeof CalendarDef,
  ) {
    this.#input = config || {};

    if (config?.localizedCalendar) {
      this.localizedCalendar = config.localizedCalendar;
    }

    this.scope = config?.scope ?? 'gregorian';

    this.epiphanyOnSunday =
      config?.epiphanyOnSunday ?? this.localizedCalendar?.particularConfig.epiphanyOnSunday ?? false;
    this.corpusChristiOnSunday =
      config?.corpusChristiOnSunday ?? this.localizedCalendar?.particularConfig.corpusChristiOnSunday ?? true;
    this.ascensionOnSunday =
      config?.ascensionOnSunday ?? this.localizedCalendar?.particularConfig.ascensionOnSunday ?? false;

    const localeObj: Locale | undefined = this.localizedCalendar?.i18n ?? locale;
    this.localeKey = localeObj?.key ?? 'dev';

    // Create an instance and set up the i18next library.
    this.i18next = i18next.createInstance(
      {
        fallbackLng: ['dev'],
        lng: this.localeKey,
        initImmediate: false,
        // contextSeparator: '__',
        interpolation: {
          format: function (value, format) {
            if (value === '') return value;
            if (format === 'romanize') return toRomanNumber(parseInt(value, 10));
            if (format === 'uppercase') return value.toUpperCase();
            if (format === 'capitalize') return value[0].toUpperCase() + value.slice(1);
            return value;
          },
        },
      },
      (err) => {
        if (err) throw new Error(err);
      },
    );

    // If another locale is specified, load associated ressources in the
    // i18next library.
    if (localeObj) this.#addResourceBundles(localeObj);

    // Initialize the Date library.
    this.dates = Dates;

    // Initiate the CalendarDef objects.
    this.calendarsDef = [];

    // Initiate the Martyrology Catalog object.
    this.martyrologyCatalog = this.localizedCalendar?.martyrology ?? martyrologyCatalog ?? {};

    // In all cases, generate the ProperOfTime calendar
    this.calendarsDef.push(new ProperOfTime(this));

    // Then, import input definitions within a new CalendarDef object
    if (config?.localizedCalendar) {
      this.calendarsDef.push(new CalendarDef(this, config.localizedCalendar.inputs));
    }
    // Otherwise, it's mean that the GRC or particular calendar must be computed from scratch,
    // probably by using the RomcalBuilder class helper, or Romcal without a specific localizedCalendar.
    else {
      this.calendarsDef.push(new GeneralRoman(this));
      if (particularCalendar) {
        this.calendarsDef.push(new particularCalendar(this));
      }
    }

    this.calendarName =
      config?.localizedCalendar?.calendarName ?? this.calendarsDef[this.calendarsDef.length - 1].calendarName;

    // Update the config by checking if a particularConfig is present in all CalendarDef objects.
    this.calendarsDef.map((cal) => cal.updateConfig(config));
  }

  /**
   * Add ressource bundles to the i18next library
   * @param locale
   * @private
   */
  #addResourceBundles(locale: Locale): void {
    this.i18next.addResourceBundle(locale.key, 'seasons', locale.seasons);
    this.i18next.addResourceBundle(locale.key, 'periods', locale.periods);
    this.i18next.addResourceBundle(locale.key, 'ranks', locale.ranks);
    this.i18next.addResourceBundle(locale.key, 'weekdays', locale.weekdays);
    this.i18next.addResourceBundle(locale.key, 'months', locale.months);
    this.i18next.addResourceBundle(locale.key, 'colors', locale.colors);
    this.i18next.addResourceBundle(locale.key, 'ordinals', locale.ordinals);
    this.i18next.addResourceBundle(locale.key, 'names', locale.names);
  }

  /**
   * Return localised liturgical colors from color keys
   * @param colors
   */
  getLiturgicalColorNames(colors: Color[]): string[] {
    return colors.map((s) => {
      const key = `colors:${(s ?? '').toLowerCase()}`;
      return this.i18next.t(key) ?? key;
    });
  }

  /**
   * Return localised season names from season keys
   * @param seasons
   */
  getSeasonNames(seasons: Season[]): string[] {
    return seasons.map((s) => {
      const key = `seasons:${(s ?? '').toLowerCase()}.season`;
      return this.i18next.t(key) ?? key;
    });
  }

  /**
   * Return the config settings as an Object.
   */
  toObject(): RomcalConfigOutput {
    return {
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this.corpusChristiOnSunday,
      ascensionOnSunday: this.ascensionOnSunday,
      localeKey: this.localeKey,
      calendarName: this.calendarName,
      scope: this.scope,
    };
  }
}
