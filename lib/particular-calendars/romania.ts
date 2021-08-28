import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { Europe } from './europe';

export class Romania extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
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
