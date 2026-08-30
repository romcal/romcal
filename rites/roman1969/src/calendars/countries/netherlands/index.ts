import { ProperCycles, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

export class Netherlands extends CalendarDef {
  ParentCalendars = [Europe];

  inputs: Inputs = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
