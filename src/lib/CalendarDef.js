import YAML from 'js-yaml';
import fs from 'fs';
import path from 'path'
import _ from 'lodash';
import Moment from "moment";
import * as Dates from './Dates';
import {Utils} from "./index";
import {LiturgicalColors} from '../constants';

class Day extends Number {
  toMoment = () => Moment.utc(Day.toMilliseconds(this));
  static dateRegex = /^(\d{1,2})\/(\d{1,2})$/;
  static toMilliseconds = int => int * (60*60*24*1000);
  static toDays = int => int / (60*60*24*1000);

  constructor(str, year) {
    let dateArr = Day.dateRegex.exec(str);
    if (!dateArr || dateArr.length !== 3) {
      throw new Error(`Date must be in 'M/Y' format.`)
    }
    super(Day.toDays(Moment.utc({year: year, month: dateArr[1] - 1, day: parseInt(dateArr[2])}).valueOf()));
  }

  is = {
    sunday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 7,
    monday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 1,
    tuesday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 2,
    wednesday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 3,
    thursday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 4,
    friday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 5,
    saturday: () =>  Moment.utc(Day.toDays(this)).isoWeekday() === 6
  }
}

class YAMLCalendar {
  constructor() {}

  static import(filePath) {
    let obj = YAMLCalendar.fetchYaml(filePath);
    return YAMLCalendar.parseContent(obj);
  }

  // Get YAML document, or throw exception on error
  static fetchYaml(filePath) {
    let yamlDoc = YAML.safeLoad(fs.readFileSync(path.join(__dirname, filePath), 'utf8'));
    if (!_.isPlainObject(yamlDoc)) {
      throw new Error(`Invalid YAML syntax in calendar: ${filePath}`);
    }
    return yamlDoc;
  }

  static parseContent(obj) {
    const region = obj.name;
    const defaultConfig = {};
    const defs = Object.keys(obj.dates).map(key => {
      return {
        key: key,
        ...obj.dates[key]
      }
    });

    obj.defaultConfig.forEach(item => {
      let key = Object.keys(item)[0];
      defaultConfig[key] = item[key];
    });

    const datesFn = (year) => {
      let parsedDates = [];

      defs.map(item => {
        if (item.drop !== true) {

          // Keep the original date property
          if (!item._date) {
            item._date = item.date;
          } else {
            item.date = item._date;
          }

          if (typeof item._date === 'string') {
            item.moment = Day.dateRegex.test(item._date) ? new Day(item._date, year).toMoment() : YAMLCalendar.evalDate(item, year, region);
          }

          // Check if the 'moment' property has been instantiated and is valid
          if (!(item.moment && Moment.isMoment(item.moment)) || !item.moment.isValid()) {
            throw new Error(`\n - Calendar: ${obj.name} - DateItem: ${item.key}\nThe date property have an incorrect format.`);
          }

          item.data = {};
          item.data.meta = {};
          if (item.prioritized === true) item.data.prioritized = true;
          if (_.isArray(item.titles)) item.data.meta.titles = item.titles;
          if (item.liturgicalColor) item.data.meta.liturgicalColor = LiturgicalColors[item.liturgicalColor];
          item.date = item.moment.toISOString();
        }
        parsedDates.push(item);
      });

      return Utils.localizeDates(parsedDates);
    };

    return {
      defaultConfig: defaultConfig,
      dates: datesFn
    };
  }

  static evalDate(item, year, calendarName) {
    const day = (str) => new Day(str, year);
    let dateFn;
    let dateStr = item.date;

    // One liner date function: insert the 'return' statement
    if ((dateStr.match(/\n/g) || []).length === 0) {
      dateStr = `return ${dateStr}`;
    }

    dateStr = dateStr.replace(/\$([\w]+)/gi, `Day.toDays(Dates.$1(year))`); // Replace date tokens by Dates methods
    dateStr = dateStr.replace(/^/gm, `  `); // Add code indentation
    dateStr = `(year) => {\n${dateStr}\n}`; // Wrap the custom date code in a function

    try {
      dateFn = eval(dateStr);
    } catch (e) {
      throw new Error(`\n - Calendar: ${calendarName}\n - DateItem: ${item.key}\n - ${e}:\n\n${dateStr}\n`);
    }

    return Moment.utc(Day.toMilliseconds(dateFn(year)));
  }
}

const general = YAMLCalendar.import('../calendars/general.yml');
const france = YAMLCalendar.import('../calendars/france.yml');
const slovakia = YAMLCalendar.import('../calendars/slovakia.yml');
const wales = YAMLCalendar.import('../calendars/wales.yml');

export {
  france,
  general,
  slovakia,
  wales
};
