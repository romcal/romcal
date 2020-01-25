// @flow

import {Moment} from "moment";

export default class DateItem {
  static latestId: number;
  id: number;
  key: string;
  date: string;
  stack: number;
  type: string;
  name: string;
  data: Object;
  moment: Moment;
  base: DateItem;

  static incrementId(): number {
    if (isNaN(this.latestId)) this.latestId = 0;
    else this.latestId++;
    return this.latestId;
  }

  constructor(item: Object, baseItem: DateItem) {
    this.id = DateItem.incrementId();
    this.key = item.key;
    this.date = item.moment.toISOString();
    this.stack = item.stack;
    this.type = item.type;
    this.name = item.name;
    this.data = item.data || {};
    this.data.meta = this.data.meta || {};
    this.moment = item.moment;

    // The original default item is added to the current item as a `base ` property
    if (baseItem && this.id !== baseItem.id) {
      this.base = baseItem;
      this.data = {...{
          season: baseItem.data.season,
          calendar: baseItem.data.calendar
        }, ...this.data};
      this.data.meta.psalterWeek = this.data.meta.psalterWeek || baseItem.data.meta.psalterWeek;
    }
  }
}
