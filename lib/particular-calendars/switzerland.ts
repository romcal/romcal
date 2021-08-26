import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { Precedences } from '../constants/precedences';
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
