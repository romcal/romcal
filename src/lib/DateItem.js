// @flow

import Moment from "moment";
import {Cycles, LiturgicalSeasons, Types} from "../constants";
import * as Dates from "./Dates";

export opaque type ISOString: string = string;

/**
 * DateItem Class
 */
export default class DateItem {
  key: string;
  date: ISOString;
  type: string;
  name: string;
  data: Object;
  moment: Moment;
  base: DateItem;
  _id: number;
  _stack: number;
  static latestId: number;

  /**
   * Create a new DateItem
   */
  constructor(item: Object, baseItem: DateItem) {
    this.key = item.key;
    this.date = item.moment.toISOString();
    this.type = item.type;
    this.name = item.name;
    this.data = item.data || {};
    this.data.meta = this.data.meta || {};
    this.moment = item.moment;
    this._id = DateItem._incrementId();
    this._stack = item._stack;

    // The original default item is added to the current item as a `base` property
    if (baseItem && this._id !== baseItem._id) {
      this.base = baseItem;
      this.data = {...{
          season: baseItem.data.season,
          calendar: baseItem.data.calendar
        }, ...this.data};
      this.data.meta.psalterWeek = this.data.meta.psalterWeek || baseItem.data.meta.psalterWeek;
    }

    this._adjustTypeInSeasons();
    this._addLiturgicalCycleMetadata();
  }

  /**
   * Special type management in particular seasons
   */
  _adjustTypeInSeasons() {
    // Special type management in the season of LENT
    if (this.base && this.base.data.season.key === LiturgicalSeasons.LENT) {

      // MEMORIAL or OPT_MEMORIAL that fall on a FERIA
      // in the SEASON OF LENT are reduced to a COMMEMORATION
      if (
        (this.type === Types.MEMORIAL || this.type === Types.OPT_MEMORIAL) &&
        this.base.type === Types.FERIA
      ) {
        this.type = Types.COMMEMORATION
      }

      // A FEAST occurring in the season of LENT is reduced
      // to a COMMEMORATION
      if (
        this.type === Types.FEAST
      ) {
        this.type = Types.COMMEMORATION
      }
    }
  }

  /**
   * Include liturgical cycle metadata for the DateItems in the liturgical year
   */
  _addLiturgicalCycleMetadata() {
    const year = this._getLiturgicalStartYear();

    // Formula to calculate lectionary cycle (Year A, B, C)
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);
    const thisCycle: number = (year - 1963) % 3;
    const nextCycle: number = thisCycle === 2 ? 0 : thisCycle + 1;

    // If the date is on or after the first sunday of advent
    // it is the next liturgical cycle
    if (this.moment.isSameOrAfter(firstSundayOfAdvent)) {
      this.data.meta.cycle = {
        key: nextCycle,
        value: Cycles[nextCycle]
      };
    } else {
      this.data.meta.cycle = {
        key: thisCycle,
        value: Cycles[thisCycle]
      };
    }
  }

  /**
   * Get the liturgical starting year from a DateItem
   */
  _getLiturgicalStartYear(): number {
    const currentYear = this.moment.year();
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(currentYear);
    return this.moment.isBefore(firstSundayOfAdvent) ? currentYear - 1 : currentYear;
  }

  /**
   * Get a new incremented ID that can can be assigned to a new DateItem
   */
  static _incrementId(): number {
    if (isNaN(this.latestId)) this.latestId = 0;
    else this.latestId++;
    return this.latestId;
  }
}
