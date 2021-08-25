import { CalendarDef, InputDefinitions, Precedences } from '../index';
import { Europe } from './europe';

export class Switzerland extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },
  };
}
