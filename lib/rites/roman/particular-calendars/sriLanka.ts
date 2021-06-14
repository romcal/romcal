import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';

export class SriLanka extends CalendarDef {
  definitions: DateDefinitions = {
    joseph_vaz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-16',
    },

    our_lady_of_lanka: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-4',
    },

    our_lady_of_madhu: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
    },
  };
}
