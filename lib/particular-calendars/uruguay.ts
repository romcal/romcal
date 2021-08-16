import { ProperCycles } from '@romcal/constants/cycles';
import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { Americas } from '@romcal/particular-calendars/americas';
import { InputDefinitions } from '@romcal/types/calendar-def';

export class Uruguay extends CalendarDef {
  parentCalendar = Americas;

  definitions: InputDefinitions = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
