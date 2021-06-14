import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { Dayjs } from 'dayjs';
import { Americas } from './americas';

export class Guatemala extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
