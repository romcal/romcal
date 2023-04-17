import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Slovenia extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    john_nepomucene_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  };
}
