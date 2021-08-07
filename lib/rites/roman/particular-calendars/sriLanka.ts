import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { InputDefinitions } from '@roman-rite/types/calendar-def';

export class SriLanka extends CalendarDef {
  definitions: InputDefinitions = {
    joseph_vaz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    our_lady_of_lanka: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 2, date: 4 },
    },

    our_lady_of_madhu: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },
  };
}
