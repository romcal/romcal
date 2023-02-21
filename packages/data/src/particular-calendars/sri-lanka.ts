import { Precedences } from '../../../core/src/constants/precedences';
import { CalendarDef } from '../../../core/src/models/calendar-def';
import { Inputs } from '../../../core/src/types/calendar-def';

export class SriLanka extends CalendarDef {
  inputs: Inputs = {
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
