import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Vietnam extends CalendarDef {
  inputs: Inputs = {
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 13 },
    },
  };
}
