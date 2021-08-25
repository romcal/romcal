import { CalendarDef, InputDefinitions, Precedences } from '../index';
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
