import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { Precedences } from '../constants/precedences';
import { ProperCycles } from '../constants/cycles';
import { Americas } from './americas';

export class Panama extends CalendarDef {
  parentCalendar = Americas;

  definitions: InputDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
