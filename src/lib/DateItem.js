// @flow

import Moment from "moment";

export opaque type ISOString: string = string;

/**
 * DateItem Class
 */
export default class DateItem {
  static latestId: number;
  _id: number;
  key: string;
  date: ISOString;
  stack: number;
  type: string;
  name: string;
  data: Object;
  moment: Moment;
  base: DateItem;

  /**
   * Get a new incremented ID that can can be assigned to a new DateItem
   */
  static incrementId(): number {
    if (isNaN(this.latestId)) this.latestId = 0;
    else this.latestId++;
    return this.latestId;
  }

  /**
   * Create a new DateItem
   */
  constructor(item: Object, baseItem: DateItem) {
    this._id = DateItem.incrementId();
    this.key = item.key;
    this.date = item.moment.toISOString();
    this.stack = item.stack;
    this.type = item.type;
    this.name = item.name;
    this.data = item.data || {};
    this.data.meta = this.data.meta || {};
    this.moment = item.moment;

    // The original default item is added to the current item as a `base` property
    if (baseItem && this._id !== baseItem._id) {
      this.base = baseItem;
      this.data = {...{
          season: baseItem.data.season,
          calendar: baseItem.data.calendar
        }, ...this.data};
      this.data.meta.psalterWeek = this.data.meta.psalterWeek || baseItem.data.meta.psalterWeek;
    }
  }
}
