import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { Precedences } from '../constants/precedences';
import { ProperCycles } from '../constants/cycles';
import { Europe } from './europe';

export class Sweden extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
    elizabeth_hesselblad_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
