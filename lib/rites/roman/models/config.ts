import dayjs from 'dayjs';
import { Dates } from '../utils/dates';
import { CalendarScope } from '../../../constants/calendar-scope';
import { CalendarDef } from './calendar-def';
import i18next, { i18n } from 'i18next';
import { Locale } from '../../../models/locale';
import { locale as en } from '../../../locales/en';
import { LiturgicalSeasons } from '../constants/seasons';
import { LiturgicalColor } from '../constants/colors';
import { Ranks } from '../constants/ranks';

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * methods to retrieve an array of [[DateItems]].
 */
export interface BaseRomcalConfig {
  /**
   * The calendar year to obtain.
   */
  readonly year?: number;

  /**
   * The calendar
   */
  readonly particularCalendar?: typeof CalendarDef;

  /**
   * The locale
   */
  readonly locale?: Locale;

  /**
   * If `false`, fixes Epiphany on January 6th. Usually, Epiphany will be set to a
   * Sunday between the 2nd - 8th Jan based on an internal calculation.
   *
   * Defaults to `true`.
   */
  readonly epiphanyOnSunday?: boolean;

  /**
   * Determines if Corpus Christi should be celebrated on Sunday (63 days after Easter)
   * or on Thursday of the 7th week of Easter (60 days after Easter).
   * (Corpus Christi is celebrated on Sunday by default).
   *
   * Defaults to `true`
   */
  readonly corpusChristiOnSunday?: boolean;

  /**
   * If true, Ascension is moved to the 7th Sunday of Easter)
   *
   * (defaults to false)
   */
  readonly ascensionOnSunday?: boolean;

  /**
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. **gregorian**: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. **liturgical**: Religious calendar year (1st Sunday of Advent of the current year to the Saturday before the 1st Sunday of Advent in the next year).
   */
  readonly scope?: CalendarScope;

  /**
   * Enable logging output.
   * Logs are newline delimited JSON (NDJSON),
   * a convenient format for production usage and long-term storage.
   */
  readonly verbose?: boolean;

  /**
   * Prettify logs printed in the console, for a better experience in development environnements
   * (instead of output them in NDJSON format).
   */
  readonly prettyPrint?: boolean;
}

interface IRoncalConfig extends BaseRomcalConfig {
  readonly i18next: i18n;
}

/**
 * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
 * where all properties are **required**.
 */
export type RomcalConfigInput = Partial<BaseRomcalConfig>;

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements IRoncalConfig {
  readonly year: number;
  readonly particularCalendar?: typeof CalendarDef;
  readonly locale?: Locale;
  readonly epiphanyOnSunday: boolean;
  readonly corpusChristiOnSunday: boolean;
  readonly ascensionOnSunday: boolean;
  readonly scope: CalendarScope;
  readonly verbose: boolean;
  readonly prettyPrint: boolean;
  readonly i18next: i18n;

  /**
   * Constructs a new [[Config]] object
   * @param config [[RomcalConfig]] object representing all settings
   */
  constructor(config?: RomcalConfigInput) {
    this.scope = config?.scope ?? CalendarScope.Gregorian;

    this.year =
      config?.year ??
      // When year is undefined, determine the current year
      (this.scope === CalendarScope.Gregorian
        ? // Current Gregorian year
          dayjs().year()
        : // Current Liturgical year
        dayjs().isBefore(Dates.firstSundayOfAdvent(dayjs().year()))
        ? // We are before the first Sunday of Advent, taking the current year
          dayjs().year()
        : // We are after the first Sunday of Advent, setting the next Gregorian year
          // hat represent the main part of this Liturgical year
          dayjs().year() + 1);

    if (config?.particularCalendar)
      this.particularCalendar = config?.particularCalendar;
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
        contextSeparator: '__',
        interpolation: {
          format: function (value, format, locale) {
            if (format === 'uppercase') return value.toUpperCase();
            if (format === 'capitalize')
              return value[0].toUpperCase() + value.slice(1);
            if (dayjs.isDayjs(value))
              return value.locale(locale ?? 'en').format(format);
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
    this.i18next.addResourceBundle('en', 'roman_rite', en.roman_rite);
    this.i18next.addResourceBundle('en', 'colors', en.colors);
    this.i18next.addResourceBundle('en', 'martyrology', en.martyrology);

    // If another locale is specified, load associated ressources in the
    // i18next library.
    if (this.locale) {
      this.i18next.addResourceBundle(
        this.locale.key,
        'roman_rite',
        this.locale.roman_rite,
      );
      this.i18next.addResourceBundle(
        this.locale.key,
        'colors',
        this.locale.colors,
      );
      this.i18next.addResourceBundle(
        this.locale.key,
        'martyrology',
        this.locale.martyrology,
      );
    }

    // Set dayjs locale
    if (this.locale) {
      require(`dayjs/locale/${this.locale.key}`);
      dayjs.locale(this.locale.key);
    }
  }

  /**
   * Utility helper to translate and cache Season names.
   * @param seasonKey
   */
  toSeasonName(seasonKey: LiturgicalSeasons): string {
    if (this._seasonsNames[seasonKey]) return this._seasonsNames[seasonKey];
    this._seasonsNames[seasonKey] = this.i18next.t(
      `roman_rite:seasons.${seasonKey.toLowerCase()}.season`,
    );
    return this._seasonsNames[seasonKey];
  }
  private _seasonsNames: Record<string, string> = {};

  /**
   * Utility helper to translate and cache liturgical color names.
   * @param colorKey
   */
  toColorName(colorKey: LiturgicalColor): string {
    if (this._colorNames[colorKey]) return this._colorNames[colorKey];
    this._colorNames[colorKey] = this.i18next.t(
      `colors:${colorKey.toLowerCase()}`,
    );
    return this._colorNames[colorKey];
  }
  private _colorNames: Record<string, string> = {};

  /**
   * Utility helper to translate and cache liturgical rank names.
   * @param rankKey
   */
  toRankName(rankKey: Ranks): string {
    if (this._rankNames[rankKey]) return this._rankNames[rankKey];
    this._rankNames[rankKey] = this.i18next.t(
      `roman_rite:ranks.${rankKey.toLowerCase()}`,
    );
    return this._rankNames[rankKey];
  }
  private _rankNames: Record<string, string> = {};

  /**
   * Return the config settings as an Object
   */
  toObject(): BaseRomcalConfig {
    return {
      year: this.year,
      particularCalendar: this.particularCalendar,
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this.corpusChristiOnSunday,
      ascensionOnSunday: this.ascensionOnSunday,
      scope: this.scope,
      verbose: this.verbose,
      prettyPrint: this.prettyPrint,
    };
  }
}
