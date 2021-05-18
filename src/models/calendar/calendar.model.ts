import dayjs, { ConfigType, Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { BaseLiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.types';
import { LiturgicalDayGroupBy } from '@romcal/constants/group-by-option/group-by.type';
import { Dictionary } from '@romcal/utils/type-guards/type-guards';
import { LiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export interface BaseRomcalCalendar extends Array<BaseLiturgicalDay> {
  groupBy(criteria: LiturgicalDayGroupBy): Dictionary<RomcalCalendar> | Dictionary<RomcalCalendar>[];
  hasLiturgicalDay(dateOrKey: Date | string): boolean;
  getDate(dateOrKey: Date | string): Date | undefined;
  getDaysBefore(dateOrKey: Date | string): RomcalCalendar;
  getDaysSameOrBefore(dateOrKey: Date | string): RomcalCalendar;
  getLiturgicalDay(dateOrKey: Date | string): RomcalCalendar;
  getDaysSameOrAfter(dateOrKey: Date | string): RomcalCalendar;
  getDaysAfter(dateOrKey: Date | string): RomcalCalendar;
}

/**
 * The RomcalCalendar object which is an extended Array with additional methods
 * to filter and group liturgical days
 */
export class RomcalCalendar extends Array implements BaseRomcalCalendar {
  /**
   * Group an array og liturgical day on a provided criteria
   *
   * @param criteria The criteria to filter the dates by
   */
  public groupBy<T extends LiturgicalDayGroupBy>(
    criteria: T,
  ): T extends 'daysByMonth' | 'weeksByMonth' // when the criteria have one of these values
    ? Dictionary<RomcalCalendar>[]
    : Dictionary<RomcalCalendar>;
  public groupBy(criteria: LiturgicalDayGroupBy): Dictionary<RomcalCalendar> | Dictionary<RomcalCalendar>[] {
    const liturgicalDays = this;

    const _groupBy = (iteratee: Function) => {
      return liturgicalDays.reduce((obj: Dictionary<RomcalCalendar>, item: LiturgicalDay) => {
        const key = iteratee(item);
        (obj[key] = obj[key] || new RomcalCalendar()).push(item);
        return obj;
      }, {});
    };

    switch (criteria) {
      case 'months':
        return _groupBy((item: LiturgicalDay) => new Date(item.date).getUTCMonth());

      case 'daysByMonth':
        return liturgicalDays.reduce((obj: Dictionary<RomcalCalendar>, item) => {
          const month = new Date(item.date).getUTCMonth();
          const days = new Date(item.date).getUTCDay();
          obj[month] = obj[month] || {};
          (obj[month][days] = obj[month][days] || []).push(item);
          return obj;
        }, {});

      case 'weeksByMonth':
        return liturgicalDays.reduce((obj: Dictionary<RomcalCalendar>, item) => {
          const month = new Date(item.date).getUTCMonth();
          const week = item.calendar.weekOfGregorianYear;
          obj[month] = obj[month] || {};
          (obj[month][week] = obj[month][week] || []).push(item);
          return obj;
        }, {});

      case 'sundayCycles':
        return _groupBy((item: LiturgicalDay) => item.cycles.sundayCycle);

      case 'weekdayCycles':
        return _groupBy((item: LiturgicalDay) => item.cycles.weekdayCycle);

      case 'ranks':
        return _groupBy((item: LiturgicalDay) => item.rank);

      // Groups by the first liturgical season in the array
      case 'liturgicalSeasons':
        return _groupBy((item: LiturgicalDay) => item.seasons[0]);

      // Groups by the first liturgical color in the array
      case 'liturgicalColors':
        return _groupBy((item: LiturgicalDay) => item.liturgicalColors[0]);

      case 'psalterWeeks':
        return _groupBy((item: LiturgicalDay) => item.cycles.psalterWeek);

      case 'days':
        return _groupBy((item: LiturgicalDay) => new Date(item.date).getUTCDay());

      case 'dates':
        return _groupBy((item: LiturgicalDay) => new Date(item.date).toISOString().substr(0, 10));

      default:
        return { undefined: liturgicalDays };
    }
  }

  /**
   * Validate if the date have a matching liturgical day within a romcal calendar
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public hasLiturgicalDay(dateOrKey: Date | string): boolean {
    return !!this._getDate(dateOrKey);
  }

  /**
   * Get a validated `Date` within a romcal calendar,
   * or returns `undefined` if no matching day is found
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getDate(dateOrKey: Date | string): Date | undefined {
    const date = this._getDate(dateOrKey);
    return dayjs.isDayjs(date) ? date.toDate() : undefined;
  }

  /**
   * Get a validated date from a romcal calendar,
   * or returns undefined if the date doesn't exists in the calendar
   * @param dateOrKey A Date object, or the key of a liturgical day
   * @private
   */
  private _getDate(dateOrKey: Date | string): Dayjs | undefined {
    let matchItem: LiturgicalDay | undefined = undefined;
    if (typeof dateOrKey === 'string') {
      matchItem = this.find((item: LiturgicalDay) => item.key === dateOrKey || item.base?.key === dateOrKey);
    }
    if (typeof dateOrKey === 'object' && dayjs(dateOrKey).isValid()) {
      matchItem = this.find((item) => dayjs(item.date).isSame(dateOrKey, 'date'));
    }
    return matchItem !== undefined ? dayjs.utc(matchItem.date) : undefined;
  }

  /**
   * Get all liturgical days that are before the provided criteria
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getDaysBefore(dateOrKey: Date | string): RomcalCalendar {
    const date = this._getDate(dateOrKey);
    return date !== undefined
      ? (this.filter((item: LiturgicalDay) => dayjs(item.date).isBefore(date as ConfigType, 'date')) as RomcalCalendar)
      : new RomcalCalendar();
  }

  /**
   * Get all liturgical days that match or are before the provided criteria
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getDaysSameOrBefore(dateOrKey: Date | string): RomcalCalendar {
    const date = this._getDate(dateOrKey);
    return date !== undefined
      ? (this.filter((item: LiturgicalDay) =>
          dayjs(item.date).isSameOrBefore(date as ConfigType, 'date'),
        ) as RomcalCalendar)
      : new RomcalCalendar();
  }

  /**
   * Get the liturgical day(s) that match the provided criteria
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getLiturgicalDay(dateOrKey: Date | string): RomcalCalendar {
    const date = this._getDate(dateOrKey);
    return date !== undefined
      ? (this.filter((item: LiturgicalDay) => dayjs(item.date).isSame(date as ConfigType, 'date')) as RomcalCalendar)
      : new RomcalCalendar();
  }

  /**
   * Get all liturgical days that match or are after the provided criteria
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getDaysSameOrAfter(dateOrKey: Date | string): RomcalCalendar {
    const date = this._getDate(dateOrKey);
    return date !== undefined
      ? (this.filter((item: LiturgicalDay) =>
          dayjs(item.date).isSameOrAfter(date as ConfigType, 'date'),
        ) as RomcalCalendar)
      : new RomcalCalendar();
  }

  /**
   * Get all liturgical days that are after the provided criteria
   * @param dateOrKey A Date object, or the key of a liturgical day
   */
  public getDaysAfter(dateOrKey: Date | string): RomcalCalendar {
    const date = this._getDate(dateOrKey);
    return date !== undefined
      ? (this.filter((item: LiturgicalDay) => dayjs(item.date).isAfter(date as ConfigType, 'date')) as RomcalCalendar)
      : new RomcalCalendar();
  }
}
