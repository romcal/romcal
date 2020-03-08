import {
  TChristmastideEndings,
  TCountryTypes,
  TCalendarTypes,
  isNil,
  isObject,
  TRomcalQuery,
  isRomcalConfig,
  TLocaleTypes,
} from '../utils/type-guards';
import dayjs from 'dayjs';

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * or the [[Calendar.queryFor]] methods to retrieve an array of [[DateItems]].
 */
export interface IRomcalConfig {
  /**
   * The calendar year to obtain.
   */
  readonly year?: number;
  /**
   * The country
   */
  readonly country?: TCountryTypes;
  /**
   * The locale to be used for localizing
   */
  readonly locale?: TLocaleTypes;
  /**
   * The mode to calculate the end of Christmastide
   */
  readonly christmastideEnds?: TChristmastideEndings;
  /**
   * If `false`, fixes Epiphany on January 6th. Usually, Epiphany will be set to a
   * Sunday between the 2nd - 8th Jan based on an internal calculation.
   *
   * Defaults to `true`.
   */
  readonly epiphanyOnSunday?: boolean;
  /**
   * If false, excludes the season of epiphany from being included in the season of Christmas
   */
  readonly christmastideIncludesTheSeasonOfEpiphany?: boolean;
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
   * The calendar type to query for.
   *
   * The type can be specified either as:
   * 1. `calendar`: Civil year (January 1 to December 31); or
   * 2. `liturgical`: Religious calendar year (1st Sunday of Advent of the preceeding year to the Saturday before the 1st Sunday of Advent in the current year).
   */
  readonly type?: TCalendarTypes;
  /**
   * A query object to get specific data from the calendar
   */
  readonly query?: TRomcalQuery;
}

export type IRomcalDefaultConfig = Required<Omit<IRomcalConfig, 'country' | 'locale' | 'query' | 'year' | 'type'>>;

/**
 * A modified variant of IRomcalConfig specifically for the [[Config]] class constructor
 * where all properties except query are **required**.
 */
export type TConfigConstructorType = { query?: TRomcalQuery } & Required<Omit<IRomcalConfig, 'query'>>;

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export default class Config {
  private _year: number;
  private _country: TCountryTypes;
  private _locale: TLocaleTypes;
  private _christmastideEnds: TChristmastideEndings;
  private _epiphanyOnSunday: boolean;
  private _christmastideIncludesTheSeasonOfEpiphany: boolean;
  private _corpusChristiOnSunday: boolean;
  private _ascensionOnSunday: boolean;
  private _type: TCalendarTypes;
  private _query?: TRomcalQuery;

  /**
   * Constructs a new [[Config]] object
   * @param config [[IRomcalConfig]] object representing all settings
   */
  constructor({
    year,
    country,
    locale,
    christmastideEnds,
    epiphanyOnSunday,
    christmastideIncludesTheSeasonOfEpiphany,
    corpusChristiOnSunday,
    ascensionOnSunday,
    type,
    query,
  }: TConfigConstructorType) {
    this._year = year;
    this._country = country;
    this._locale = locale;
    this._christmastideEnds = christmastideEnds;
    this._epiphanyOnSunday = epiphanyOnSunday;
    this._christmastideIncludesTheSeasonOfEpiphany = christmastideIncludesTheSeasonOfEpiphany;
    this._corpusChristiOnSunday = corpusChristiOnSunday;
    this._ascensionOnSunday = ascensionOnSunday;
    this._type = type;
    this._query = query;
  }

  get year(): number {
    return this._year;
  }

  set year(theYear: number) {
    this._year = theYear;
  }

  get country(): TCountryTypes {
    return this._country;
  }

  get locale(): TLocaleTypes {
    return this._locale;
  }

  get christmastideEnds(): TChristmastideEndings {
    return this._christmastideEnds;
  }

  get epiphanyOnSunday(): boolean {
    return this._epiphanyOnSunday;
  }

  get christmastideIncludesTheSeasonOfEpiphany(): boolean {
    return this._christmastideIncludesTheSeasonOfEpiphany;
  }

  get corpusChristiOnSunday(): boolean {
    return this._corpusChristiOnSunday;
  }

  get ascensionOnSunday(): boolean {
    return this._ascensionOnSunday;
  }

  get type(): TCalendarTypes {
    return this._type;
  }

  get query(): TRomcalQuery | undefined {
    return this._query;
  }

  /**
   * Get default configurations for the specified country from its calendar file.
   * If the country doesn't exist, return an empty object.
   * If the country is not specified, return the configuration for the general calendar.
   * @param country The country to obtain default configurations from
   */
  static async getConfig(country: TCountryTypes = 'general'): Promise<IRomcalDefaultConfig> {
    const { defaultConfig: countrySpecificDefaultConfig } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "calendars/[request]" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      `../calendars/${country}`
    );
    if (!isNil(countrySpecificDefaultConfig) && Object.keys(countrySpecificDefaultConfig).length > 0) {
      return countrySpecificDefaultConfig;
    } else {
      const { defaultConfig: generalCalendarConfig } = await import(
        /* webpackExclude: /index\.ts/ */
        /* webpackChunkName: "calendars/[request]" */
        /* webpackMode: "lazy" */
        /* webpackPrefetch: true */
        '../calendars/general'
      );
      return generalCalendarConfig;
    }
  }

  /**
   * Resolves the full configuration
   * @param maybeConfig An optional object that may be a usable instance of [[IRomcalConfig]]
   */
  static async resolveConfig(maybeConfig?: unknown): Promise<TConfigConstructorType> {
    // Get the default config
    let config: IRomcalConfig = await Config.getConfig('general');
    // Check if the user supplied their own configuration
    if (!isNil(maybeConfig)) {
      // Check if the user configuration is valid
      if (!isRomcalConfig(maybeConfig)) {
        console.warn(
          `Will discard the entire user supplied config object and use default configuration.
                    To avoid this, ensure that all properties and values of the config object are valid.`,
        );
      } else {
        // A two step override where the base object of default configurations
        // will first be overriden by country specific if it isn't empty
        // and finally by a valid user defined configuration object
        config = {
          // Base default config (general)
          ...config,
          // Specific country config (if the user supplied a country other than "general")
          ...(maybeConfig.country !== 'general' && (await Config.getConfig(maybeConfig.country))),
          // User supplied config (will overwrite same keys before it)
          ...maybeConfig,
        };
      }
    } else {
      console.debug('Will use default configuration to generate the calendar.');
    }

    // Sanitize and set defaults for missing configurations
    return {
      year: config.year ?? dayjs.utc().year(), // Use current year if not supplied by user
      country: config.country ?? 'general', // Use general as country if none supplied by user
      locale: config.locale ?? 'en', // Use english for localization if no lanaguage supplied]
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      christmastideEnds: config.christmastideEnds!, // Will use default if not defined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      epiphanyOnSunday: config.epiphanyOnSunday!, // Will use default if not defined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      christmastideIncludesTheSeasonOfEpiphany: config.christmastideIncludesTheSeasonOfEpiphany!, // Will use default if not defined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      corpusChristiOnSunday: config.corpusChristiOnSunday!, // Will use default if not defined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ascensionOnSunday: config.ascensionOnSunday!, // Will use default if not defineds
      type: config.type ?? 'calendar', // Use value "calendar" if type not specified by user
      ...(isObject(config.query) && { query: config.query }), // Attach query if there's one
    } as TConfigConstructorType;
  }
}
