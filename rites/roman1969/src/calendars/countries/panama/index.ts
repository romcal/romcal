import { ProperCycles, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Americas } from '../../regions/americas';

export class Panama extends CalendarDef {
  ParentCalendars = [Americas];

  inputs: Inputs = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
