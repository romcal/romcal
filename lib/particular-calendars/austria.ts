import { CalendarDef, InputDefinitions, Precedences } from '../index';
import { Europe } from './europe';

export class Austria extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },
  };
}
