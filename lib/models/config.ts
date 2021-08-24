import { CalendarScope } from '@romcal/constants/calendar-scope';
import { LiturgicalColors } from '@romcal/constants/colors';
import { LiturgicalSeasons } from '@romcal/constants/seasons';
import { GeneralRoman } from '@romcal/general-calendar/proper-of-saints';
import { ProperOfTime } from '@romcal/general-calendar/proper-of-time';
import { CalendarDef } from '@romcal/models/calendar-def';
import { RomcalBundleObject } from '@romcal/types/bundle';
import { CalendarDefInstance, LiturgicalDayDefinitions } from '@romcal/types/calendar-def';
import { IRoncalConfig, RomcalConfigInput, RomcalConfigOutput } from '@romcal/types/config';
import { Locale } from '@romcal/types/locale';
import { MartyrologyCatalog } from '@romcal/types/martyrology';
import { Dates } from '@romcal/utils/dates';
import { toRomanNumber } from '@romcal/utils/numbers';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import i18next, { i18n } from 'i18next';

dayjs.extend(updateLocale);

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
  readonly verbose: boolean;
  readonly prettyPrint: boolean;
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

    this.scope = config?.scope ?? CalendarScope.Gregorian;

    this.epiphanyOnSunday =
      config?.epiphanyOnSunday ??
      this.localizedCalendar?.particularConfig.epiphanyOnSunday ??
      false;
    this.corpusChristiOnSunday =
      config?.corpusChristiOnSunday ??
      this.localizedCalendar?.particularConfig.corpusChristiOnSunday ??
      true;
    this.ascensionOnSunday =
      config?.ascensionOnSunday ??
      this.localizedCalendar?.particularConfig.ascensionOnSunday ??
      false;

    this.verbose = config?.verbose ?? false;
    this.prettyPrint = config?.prettyPrint ?? false;

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

    /**
     * Ensure that the first day is always a Sunday in romcal & DayJS
     * Monday is the first day of the week according to the international standard ISO 8601,
     * In the US, Canada, and Japan, it's counted as the second day of the week (Sunday is the first day).
     * In Christian calendars, Sunday is always the first day of the week.
     * In other words, the romcal will use US, Canada definitions for the start of the week.
     */
    dayjs.updateLocale(this.localeKey, {
      weekStart: 0,
      week: {
        dow: 0, // US, Canada: 1st day of week is Sunday
        doy: 6, // US, Canada: 1st week of the year is the one that contains the 1st of January (7 + 0 - 1)
      },
    });

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
      this.calendarsDef.push(new CalendarDef(this, config.localizedCalendar.definitions));
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
      config?.localizedCalendar?.calendarName ??
      this.calendarsDef[this.calendarsDef.length - 1].calendarName;

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
   * @param liturgicalColors
   */
  getLiturgicalColorNames(liturgicalColors: LiturgicalColors[]): string[] {
    return liturgicalColors.map((s) => {
      const key = `colors:${(s ?? '').toLowerCase()}`;
      return this.i18next.t(key) ?? key;
    });
  }

  /**
   * Return localised season names from season keys
   * @param seasons
   */
  getSeasonNames(seasons: LiturgicalSeasons[]): string[] {
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
      verbose: this.verbose,
      prettyPrint: this.prettyPrint,
    };
  }
}
