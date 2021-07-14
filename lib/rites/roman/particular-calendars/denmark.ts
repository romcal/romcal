import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { InputDefinitions } from '@roman-rite/types/calendar-def';

export class Denmark extends CalendarDef {
  inheritFrom = Europe;

  definitions: InputDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => this.dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
