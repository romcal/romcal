import { CalendarScope } from '@romcal/constants/calendar-scope';
import { LiturgicalColors } from '@romcal/constants/colors';
import { locale as en } from '@romcal/locales/en';
import { CalendarDef } from '@romcal/models/calendar-def';
import { LiturgicalDayDefinitions } from '@romcal/types/calendar-def';
import { IRoncalConfig, RomcalConfigInput, RomcalConfigOutput } from '@romcal/types/config';
import { Locale } from '@romcal/types/locale';
import { Dates } from '@romcal/utils/dates';
import { toRomanNumber } from '@romcal/utils/numbers';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import i18next, { i18n } from 'i18next';
import { LiturgicalSeasons } from '@romcal/constants/seasons';

dayjs.extend(updateLocale);

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements IRoncalConfig {
  readonly #input: RomcalConfigInput;
  readonly particularCalendar?: typeof CalendarDef;
  readonly locale?: Locale;
  readonly localeKey: string;
  epiphanyOnSunday: boolean;
  corpusChristiOnSunday: boolean;
  ascensionOnSunday: boolean;
  readonly scope: CalendarScope;
  readonly verbose: boolean;
  readonly prettyPrint: boolean;
  readonly i18next: i18n;
  readonly dates: typeof Dates;

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
   */
  constructor(config?: RomcalConfigInput) {
    this.#input = config || {};

    this.scope = config?.scope ?? CalendarScope.Gregorian;

    if (config?.particularCalendar) this.particularCalendar = config?.particularCalendar;

    this.epiphanyOnSunday = config?.epiphanyOnSunday ?? false;
    this.corpusChristiOnSunday = config?.corpusChristiOnSunday ?? true;
    this.ascensionOnSunday = config?.ascensionOnSunday ?? false;
    this.verbose = config?.verbose ?? false;
    this.prettyPrint = config?.prettyPrint ?? false;

    if (config?.locale) this.locale = config.locale;

    // Create an instance and set up the i18next library.
    this.i18next = i18next.createInstance(
      {
        fallbackLng: ['en', 'dev'],
        lng: this.locale ? this.locale.key : 'en',
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

    // English is the default locale, used when a localized key is missing in
    // another specified locale
    this.#addResourceBundles(en);

    // If another locale is specified, load associated ressources in the
    // i18next library.
    if (this.locale) this.#addResourceBundles(this.locale);

    this.localeKey = config?.locale?.key ?? 'en';

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
      particularCalendar: this.particularCalendar,
      locale: this.locale,
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this.corpusChristiOnSunday,
      ascensionOnSunday: this.ascensionOnSunday,
      scope: this.scope,
      verbose: this.verbose,
      prettyPrint: this.prettyPrint,
    };
  }
}
