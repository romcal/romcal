import { CalendarDef, InputDefinitions, Precedences } from '../index';
import { Europe } from './europe';

export class Slovenia extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  };
}
