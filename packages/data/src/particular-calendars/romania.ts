import { Precedences } from '../../../core/src/constants/precedences';
import { CalendarDef } from '../../../core/src/models/calendar-def';
import { Inputs } from '../../../core/src/types/calendar-def';
import { Europe } from './europe';

export class Romania extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    john_cassian_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 28 },
    },

    vladimir_ghika_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  };
}
