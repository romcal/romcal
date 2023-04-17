import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class SriLanka extends CalendarDef {
  inputs: Inputs = {
    joseph_vaz_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    our_lady_of_lanka: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 2, date: 4 },
    },

    our_lady_of_madhu: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },
  };
}
