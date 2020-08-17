import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { BaseRomcalLiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalQueryType } from '@romcal/constants/query-options/query-types.type';
import { Dictionary } from '@romcal/utils/type-guards/type-guards';
import { LiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export interface BaseRomcalCalendar extends Array<BaseRomcalLiturgicalDay> {
  groupBy(criteria: RomcalQueryType): RomcalCalendar | Dictionary<RomcalCalendar> | Dictionary<RomcalCalendar>[];
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
  public groupBy<T extends RomcalQueryType>(
    criteria: T,
  ): T extends 'daysByMonth' | 'weeksByMonth' // does the criteria have one of these values?
    ? Dictionary<RomcalCalendar>[]
    : Dictionary<RomcalCalendar>;
  public groupBy(criteria: RomcalQueryType): Dictionary<RomcalCalendar> | Dictionary<RomcalCalendar>[] {
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

      default:
        return { undefined: liturgicalDays };
    }
  }
}
