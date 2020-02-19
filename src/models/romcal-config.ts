import {
    TChristmastideEndings,
    TCountryTypes,
    TCalendarTypes,
    isNil,
    isObject,
    TRomcalQuery,
    isRomcalConfig,
} from "../utils/type-guards";
import * as CountryCalendars from "../calendars";
import moment from "moment";

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
    readonly locale?: string;
    /**
     * The mode to calculate the end of Christmastide
     */
    readonly christmastideEnds?: TChristmastideEndings;
    /**
     * If true, Epiphany will be fixed to Jan 6 (defaults to false)
     */
    readonly epiphanyOnJan6?: boolean;
    /**
     * If false, excludes the season of epiphany from being included in the season of Christmas
     */
    readonly christmastideIncludesTheSeasonOfEpiphany?: boolean;
    /**
     *  If true, Corpus Christi is set to Thursday) (defaults to false)
     */
    readonly corpusChristiOnThursday?: boolean;
    /**
     * If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
     */
    readonly ascensionOnSunday?: boolean;
    /**
     * The calendar type to query for.
     */
    readonly type?: TCalendarTypes;
    /**
     * A query object to get specific data from the calendar
     */
    readonly query?: TRomcalQuery;
}

export type IRomcalDefaultConfig = Required<Omit<IRomcalConfig, "country" | "locale" | "query" | "year" | "type">>;

export default class Config {
    private _year: number;
    private _country: TCountryTypes;
    private _locale: string;
    private _christmastideEnds: TChristmastideEndings;
    private _epiphanyOnJan6: boolean;
    private _christmastideIncludesTheSeasonOfEpiphany: boolean;
    private _corpusChristiOnThursday: boolean;
    private _ascensionOnSunday: boolean;
    private _type: TCalendarTypes;
    private _query?: TRomcalQuery;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(userConfig?: IRomcalConfig) {
        let config: IRomcalConfig = Config.getConfig(); // Get the default config
        if (!isNil(userConfig)) {
            if (!isRomcalConfig(userConfig)) {
                console.warn("Will discard entire user supplied config object and use default configuration");
            } else {
                // A two step override where the base object of default configurations
                // will first be overriden by country specific if it isn't empty
                // and finally by a valid user defined configuration object
                config = {
                    ...config, // Base default config
                    ...(userConfig.country !== "general" && Config.getConfig(userConfig.country)), // Specific country configuration
                    ...userConfig, // User supplied config (will overwrite same keys before it)
                };
            }
        } else {
            console.debug("Will use default configuration to generate the calendar.");
        }

        // Sanitize and set defaults for missing configurations
        this._year = config.year ?? moment.utc().year(); // Use current year if not supplied by user
        this._country = config.country ?? "general"; // Use general as country if none supplied by user
        this._locale = config.locale ?? "en"; // Use english for localization if no lanaguage supplied]
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._christmastideEnds = config.christmastideEnds!; // Will use default if not defined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._epiphanyOnJan6 = config.epiphanyOnJan6!; // Will use default if not defined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._christmastideIncludesTheSeasonOfEpiphany = config.christmastideIncludesTheSeasonOfEpiphany!; // Will use default if not defined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._corpusChristiOnThursday = config.corpusChristiOnThursday!; // Will use default if not defined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._ascensionOnSunday = config.ascensionOnSunday!; // Will use default if not defineds
        this._type = config.type ?? "liturgical"; // Use liturgical calendar if type not specified by user
        // The only optional field is this
        if (isObject(config.query)) {
            this._query = config.query;
        }
    }

    get year(): number {
        return this._year;
    }

    get country(): TCountryTypes {
        return this._country;
    }

    get locale(): string {
        return this._locale;
    }

    get christmastideEnds(): TChristmastideEndings {
        return this._christmastideEnds;
    }

    get epiphanyOnJan6(): boolean {
        return this._epiphanyOnJan6;
    }

    get christmastideIncludesTheSeasonOfEpiphany(): boolean {
        return this._christmastideIncludesTheSeasonOfEpiphany;
    }

    get corpusChristiOnThursday(): boolean {
        return this._corpusChristiOnThursday;
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
    static getConfig(country: TCountryTypes = "general"): IRomcalDefaultConfig {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (CountryCalendars[country] as any).defaultConfig ?? CountryCalendars["general"].defaultConfig;
    }
}
