import dayjs from 'dayjs';

import logger from '@romcal/utils/logger/logger';
import { isNil, isObject, isRomcalConfig, isString } from '@romcal/utils/type-guards/type-guards';
import { RomcalCalendarScope } from '@romcal/models/romcal-config/calendar-scope.type';
import { RomcalCountry } from '@romcal/constants/countries/country.type';
import { RomcalLocaleKey } from '@romcal/models/romcal-locale/locale-types.type';
import { RomcalQuery } from '@romcal/constants/query-options/query-types.type';
import { sanitizeLocale } from '@romcal/lib/Locales';

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * or the [[Calendar.queryFor]] methods to retrieve an array of [[DateItems]].
 */
export interface RomcalConfigModel {
  /**
   * The calendar year to obtain.
   */
  readonly year?: number;
  /**
   * The country
   */
  readonly country?: RomcalCountry;
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
   * If true, available optional memorials or commemorations are also outputted,
   * in addition to the weekday.
   */
  readonly outputOptionalMemorials?: boolean;
  /**
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. `gregorian`: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. `liturgical`: Religious calendar year (1st Sunday of Advent of the preceding year to the Saturday before the 1st Sunday of Advent in the current year).
   */
  readonly scope?: RomcalCalendarScope;
  /**
   * A query object to get specific data from the calendar
   */
  readonly query?: RomcalQuery;
}

export type RomcalConfigInCalendarDef = Required<
  Omit<RomcalConfigModel, 'country' | 'locale' | 'query' | 'year' | 'scope' | 'outputOptionalMemorials'>
>;

/**
 * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
 * where all properties except query are **required**.
 */
type ConfigConstructorType = { query?: RomcalQuery } & Required<Omit<RomcalConfigModel, 'query'>>;

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export default class RomcalConfig {
  private _year: number;
  private readonly _country: RomcalCountry;
  private readonly _locale: RomcalLocaleKey;
  private readonly _epiphanyOnSunday: boolean;
  private readonly _corpusChristiOnSunday: boolean;
  private readonly _ascensionOnSunday: boolean;
  private readonly _outputOptionalMemorials: boolean;
  private readonly _scope: RomcalCalendarScope;
  private readonly _query?: RomcalQuery;

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
    outputOptionalMemorials,
    scope,
    query,
  }: ConfigConstructorType) {
    this._year = year;
    this._country = country;
    this._locale = locale;
    this._epiphanyOnSunday = epiphanyOnSunday;
    this._corpusChristiOnSunday = corpusChristiOnSunday;
    this._ascensionOnSunday = ascensionOnSunday;
    this._outputOptionalMemorials = outputOptionalMemorials;
    this._scope = scope;
    this._query = query;
  }

  get year(): number {
    return this._year;
  }

  set year(theYear: number) {
    this._year = theYear;
  }

  get country(): RomcalCountry {
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

  get outputOptionalMemorials(): boolean {
    return this._outputOptionalMemorials;
  }

  get scope(): RomcalCalendarScope {
    return this._scope;
  }

  get query(): RomcalQuery | undefined {
    return this._query;
  }

  /**
   * Get default configurations for the specified country from its calendar file.
   * If the country doesn't exist, return an empty object.
   * If the country is not specified, return the configuration for the general calendar.
   * @param country The country to obtain default configurations from
   */
  static async getConfig(country: RomcalCountry = 'general'): Promise<RomcalConfigInCalendarDef> {
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
  static async resolveConfig(maybeConfig?: unknown): Promise<ConfigConstructorType> {
    // Initialize config with the default config
    let config: RomcalConfigModel = await RomcalConfig.getConfig('general');
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
      outputOptionalMemorials: !!config.outputOptionalMemorials,
      scope: config.scope ?? 'gregorian', // Use the default value "gregorian" if scope not specified by user
      ...(isObject(config.query) && { query: config.query }), // Attach query if there's one
    } as ConfigConstructorType;
  }
}
