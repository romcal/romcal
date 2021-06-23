import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { Dates } from '@roman-rite/utils/dates';
import { Dayjs } from 'dayjs';

export class Denmark extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
