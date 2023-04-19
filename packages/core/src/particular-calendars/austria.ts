import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Austria extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    john_nepomucene_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    charles_i_of_austria: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },
  };
}
