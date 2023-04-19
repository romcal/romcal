import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Romania extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    john_cassian_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 28 },
    },

    vladimir_ghika_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  };
}
