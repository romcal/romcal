import dayjs from 'dayjs';
import { logger } from '@romcal/utils/logger/logger';
import { isNil, isRomcalConfig, isString } from '@romcal/utils/type-guards/type-guards';
import { RomcalCalendarName } from '@romcal/constants/countries/country.type';
import { RomcalLocaleKey } from '@romcal/models/locale/locale-types.type';
import { sanitizeLocale } from '@romcal/lib/locales';

/**
 * The calendar scope that can be resolved by this library.
 */
export type RomcalCalendarScope = 'gregorian' | 'liturgical';

export type BaseRomcalConfigWithoutYear = Omit<BaseRomcalConfig, 'year' | 'scope'>;

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
   * The country
   */
  readonly country?: RomcalCalendarName;
  /**
   * The locale to be used for localizing
   */
  readonly locale?: RomcalLocaleKey;
  /**
   * If `false`, fixes Epiphany on January 6th. Usually, Epiphany will be set to a
   * Sunday between the 2nd - 8th Jan based on an internal calculation.
   *
   * Defaults to `true`.
   */
  readonly epiphanyOnSunday?: boolean;
  /**
   * Determines if Corpus Christi should be celebrated on Sunday (63 days after Easter)
   * or on Thursday of the 7th week of Easter (60 days after Easter). Defaults to `true`
   * (Corpus Christi is celebrated on Sunday by default).
   */
  readonly corpusChristiOnSunday?: boolean;
  /**
   * If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
   */
  readonly ascensionOnSunday?: boolean;
  /**
   * If true, output strictly the relevant liturgical day per date.
   * Optional memorials or commemorations available for a specific day are not outputted.
   */
  readonly strictMode?: boolean;
  /**
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. `gregorian`: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. `liturgical`: Religious calendar year (1st Sunday of Advent of the current year to the Saturday before the 1st Sunday of Advent in the next year).
   */
  readonly scope?: RomcalCalendarScope;
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

export type RomcalConfigInCalendarDef = Required<
  Pick<BaseRomcalConfig, 'ascensionOnSunday' | 'corpusChristiOnSunday' | 'epiphanyOnSunday'>
>;

/**
 * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
 * where all properties are **required**.
 */
type RomcalConfigArgs = Required<BaseRomcalConfig>;

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements BaseRomcalConfig {
  private _year: number;
  private readonly _country: RomcalCalendarName;
  private readonly _locale: RomcalLocaleKey;
  private readonly _epiphanyOnSunday: boolean;
  private readonly _corpusChristiOnSunday: boolean;
  private readonly _ascensionOnSunday: boolean;
  private readonly _strictMode: boolean;
  private readonly _scope: RomcalCalendarScope;
  private readonly _verbose: boolean;
  private readonly _prettyPrint: boolean;

  /**
   * Constructs a new [[Config]] object
   * @param config [[RomcalConfig]] object representing all settings
   */
  constructor({
    year,
    country,
    locale,
    epiphanyOnSunday,
    corpusChristiOnSunday,
    ascensionOnSunday,
    strictMode,
    scope,
    verbose,
    prettyPrint,
  }: RomcalConfigArgs) {
    this._year = year;
    this._country = country;
    this._locale = locale;
    this._epiphanyOnSunday = epiphanyOnSunday;
    this._corpusChristiOnSunday = corpusChristiOnSunday;
    this._ascensionOnSunday = ascensionOnSunday;
    this._strictMode = strictMode;
    this._scope = scope;
    this._verbose = verbose;
    this._prettyPrint = prettyPrint;
  }

  get year(): number {
    return this._year;
  }

  set year(theYear: number) {
    this._year = theYear;
  }

  get country(): RomcalCalendarName {
    return this._country;
  }

  get locale(): RomcalLocaleKey {
    return this._locale;
  }

  get epiphanyOnSunday(): boolean {
    return this._epiphanyOnSunday;
  }

  get corpusChristiOnSunday(): boolean {
    return this._corpusChristiOnSunday;
  }

  get ascensionOnSunday(): boolean {
    return this._ascensionOnSunday;
  }

  get strictMode(): boolean {
    return this._strictMode;
  }

  get scope(): RomcalCalendarScope {
    return this._scope;
  }

  get verbose(): boolean {
    return this._verbose;
  }

  get prettyPrint(): boolean {
    return this._prettyPrint;
  }

  /**
   * Return the config settings as an Object
   */
  toObject(): RomcalConfigArgs {
    return {
      year: this._year,
      country: this._country,
      locale: this._locale,
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this._corpusChristiOnSunday,
      ascensionOnSunday: this._ascensionOnSunday,
      strictMode: this._strictMode,
      scope: this._scope,
      verbose: this._verbose,
      prettyPrint: this._prettyPrint,
    };
  }

  /**
   * Get default configurations for the specified country from its calendar file.
   * If the country doesn't exist, return an empty object.
   * If the country is not specified, return the configuration for the general calendar.
   * @param country The country to obtain default configurations from
   */
  static async getConfig(country: RomcalCalendarName = 'general'): Promise<RomcalConfigInCalendarDef> {
    const { defaultConfig: countrySpecificDefaultConfig } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "calendars/[request]" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      `@romcal/calendars/${country}`
    );
    if (!isNil(countrySpecificDefaultConfig) && Object.keys(countrySpecificDefaultConfig).length > 0) {
      return countrySpecificDefaultConfig;
    } else {
      const { defaultConfig: generalCalendarConfig } = await import(
        /* webpackExclude: /index\.ts/ */
        /* webpackChunkName: "calendars/[request]" */
        /* webpackMode: "lazy" */
        /* webpackPrefetch: true */
        '@romcal/calendars/general'
      );
      return generalCalendarConfig;
    }
  }

  /**
   * Resolves the full configuration
   * @param maybeConfig An optional object that may be a usable instance of [[RomcalConfig]]
   */
  static async resolveConfig(maybeConfig?: unknown): Promise<RomcalConfigArgs> {
    // Initialize config with the default config
    let config: BaseRomcalConfig = await RomcalConfig.getConfig('general');
    const defaultLocale = 'en';

    // Check if the user supplied their own configuration
    if (!isNil(maybeConfig)) {
      if (!isRomcalConfig(maybeConfig)) {
        // Check if the user configuration is valid
        logger.warn(
          `Will discard the entire user supplied config object and use default configuration.
          To avoid this, ensure that all properties and values of the config object are valid.`,
        );
      } else {
        let locale = defaultLocale;

        // Evaluate the specified locale config
        if (!isNil(maybeConfig.locale) && isString(maybeConfig.locale)) {
          locale = sanitizeLocale(maybeConfig.locale).locale;
        }

        // A two step override where the base object of default configurations
        // will first be overridden by country specific if it isn't empty
        // and finally by a valid user defined configuration object
        config = {
          // Base default config (general)
          ...config,
          // Specific country config (if the user supplied a country other than "general")
          ...(maybeConfig.country !== 'general' && (await RomcalConfig.getConfig(maybeConfig.country))),
          // User supplied config (will overwrite same keys before it)
          ...maybeConfig,
          // If the locale has been evaluated, it will be updated
          locale,
        };
      }
    } else {
      logger.debug('Will use default configuration to generate the calendar.');
    }

    // Sanitize and set defaults for missing configurations
    return {
      year: config.year ?? dayjs.utc().year(), // Use current year if not supplied by user
      country: config.country ?? 'general', // Use general as country if none supplied by user
      locale: config.locale ?? defaultLocale, // Use english for localization if no language supplied]
      epiphanyOnSunday: !!config.epiphanyOnSunday, // Will use default if not defined
      corpusChristiOnSunday: !!config.corpusChristiOnSunday, // Will use default if not defined
      ascensionOnSunday: !!config.ascensionOnSunday, // Will use default if not defined
      strictMode: !!config.strictMode,
      scope: config.scope ?? 'gregorian', // Use the default value "gregorian" if scope not specified by user
      verbose: !!config.verbose,
      prettyPrint: !!config.prettyPrint,
    } as RomcalConfigArgs;
  }
}
