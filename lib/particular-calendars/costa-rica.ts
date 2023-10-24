import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Americas } from './americas';

export class CostaRica extends CalendarDef {
  parentCalendar = Americas;

  inputs: Inputs = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },

    our_lady_of_angels: {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { month: 8, date: 2 },
    },
  };
}
