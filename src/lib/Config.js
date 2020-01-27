// @flow

import _ from 'lodash';
import Moment from "moment";
import * as Calendars from '../calendars';

/**
 * Config Class
 */
export default class Config {
  year: number;
  country: string = '';
  locale: string;
  christmastideEnds: 't' | 'o' | 'e';
  epiphanyOnJan6: boolean;
  christmastideIncludesTheSeasonOfEpiphany: boolean;
  corpusChristiOnThursday: boolean;
  ascensionOnSunday: boolean;
  type: 'calendar' | 'liturgical';
  query: {
    day: number,
    month: number,
    group: string,
    title: string
  };

  constructor(customConfig: Object) {
    customConfig = _.isPlainObject(customConfig) ? customConfig : {};

    // If a country is specified, check if exists in the romcal codebase
    customConfig.country = typeof customConfig.country === 'string' ? customConfig.country : '';
    if (customConfig.country.toLowerCase() !== 'general' && Object.prototype.hasOwnProperty.call(Calendars, _.camelCase(customConfig.country))) {
      this.country = _.camelCase(customConfig.country);
    }

    // Load default config for general and selected country,
    // and combine them with the specified custom config
    const generalConfig = Config.getConfig('general');
    const countryConfig = Config.getConfig(this.country);
    const c = {
      ...generalConfig,
      ...countryConfig,
      ...customConfig
    };

    // Map configuration
    this.christmastideEnds = Config
      .sanitize(c.christmastideEnds, ['t', 'o', 'e'])
      .default(generalConfig.christmastideEnds);
    this.epiphanyOnJan6 = Config
      .sanitize(c.epiphanyOnJan6, 'boolean')
      .default(generalConfig.epiphanyOnJan6);
    this.christmastideIncludesTheSeasonOfEpiphany = Config
      .sanitize(c.christmastideIncludesTheSeasonOfEpiphany, 'boolean')
      .default(generalConfig.christmastideIncludesTheSeasonOfEpiphany);
    this.corpusChristiOnThursday = Config
      .sanitize(c.corpusChristiOnThursday, 'boolean')
      .default(generalConfig.corpusChristiOnThursday);
    this.ascensionOnSunday = Config
      .sanitize(c.ascensionOnSunday, 'boolean')
      .default(generalConfig.ascensionOnSunday);
    this.locale = Config
      .sanitize(c.locale, 'string')
      .default(generalConfig.locale);
    this.year = Config
      .sanitize(parseInt(c.year), 'number')
      .default(Moment.utc().year());
    this.type = Config
      .sanitize(c.type, ['calendar', 'liturgical'])
      .default('calendar');

    // Sanitize optional query section
    const query = _.isPlainObject( c.query ) ? c.query : {};
    this.query = {};
    if (query.day !== undefined) this.query.day = query.day;
    if (query.month !== undefined) this.query.month = query.month;
    if (query.group !== undefined) this.query.group = query.group;
    if (query.title !== undefined) this.query.title = query.title;

    return this;
  }

  /**
   * Get the configuration from a calendar file, if defined
   */
  static getConfig(country: ?string):Calendars<{}[]> {
    if (!country) return {};
    return Calendars[country].defaultConfig || {};
  }

  /**
   * Ensure that a value correspond to a specific type or is one of the accepted options
   */
  static sanitize(value: any, acceptable: string | Array<any>):any {
    if (typeof value === acceptable &&
      acceptable === 'string' || (acceptable === 'number' && !isNaN(value))) {
      return {default: () => value};
    }
    if (acceptable === 'boolean') acceptable = [true, false];
    if (acceptable.indexOf(value) > -1) return {default: () => value};
    return {default: (d) => d};
  }
}
