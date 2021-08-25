import { CalendarDef, InputDefinitions, Precedences, ProperCycles } from '../index';
import { Americas } from './americas';

export class Venezuela extends CalendarDef {
  parentCalendar = Americas;

  definitions: InputDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
