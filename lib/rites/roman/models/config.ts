import { CalendarDef } from '@roman-rite/models/calendar-def';
import { LiturgicalDayDefinitions } from '@roman-rite/types/calendar-def';
import { BaseRomcalConfig, IRoncalConfig, RomcalConfigInput } from '@roman-rite/types/config';
import { Dates } from '@roman-rite/utils/dates';
import { CalendarScope } from '@romcal/constants/calendar-scope';
import { locale as en } from '@romcal/locales/en';
import { Locale } from '@romcal/types/locale';
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
  readonly year: number;
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
  readonly dates: Dates;

  liturgicalDayDef: LiturgicalDayDefinitions = {};

  /**
   * Clone the RomcalConfig object
   * @param year
   */
  clone(year: number): RomcalConfig {
    return new RomcalConfig({ ...this.#input, year: year ?? this.year });
  }

  /**
   * Constructs a new [[Config]] object.
   * @param config [[RomcalConfig]] object representing all settings.
   */
  constructor(config?: RomcalConfigInput) {
    this.#input = config || {};

    this.scope = config?.scope ?? CalendarScope.Gregorian;

    this.year =
      config?.year ??
      // When year is undefined, determine the current year
      (this.scope === CalendarScope.Gregorian
        ? // Current Gregorian year
          dayjs().year()
        : // Current Liturgical year
        dayjs().isBefore(Dates.firstSundayOfAdvent(dayjs().year() + 1))
        ? // We are before the first Sunday of Advent, taking the current year
          dayjs().year()
        : // We are after the first Sunday of Advent, setting the next Gregorian year
          // hat represent the main part of this Liturgical year
          dayjs().year() + 1);

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
    this.dates = new Dates(this);
  }

  /**
   * Add ressource bundles to the i18next library
   * @param locale
   * @private
   */
  #addResourceBundles(locale: Locale): void {
    this.i18next.addResourceBundle(locale.key, 'roman_rite', locale.roman_rite);
    this.i18next.addResourceBundle(locale.key, 'weekdays', locale.weekdays);
    this.i18next.addResourceBundle(locale.key, 'months', locale.months);
    this.i18next.addResourceBundle(locale.key, 'colors', locale.colors);
    this.i18next.addResourceBundle(locale.key, 'ordinals', locale.ordinals);
    this.i18next.addResourceBundle(locale.key, 'martyrology', locale.martyrology);
  }

  /**
   * Return the config settings as an Object.
   */
  toObject(): BaseRomcalConfig {
    return {
      year: this.year,
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
