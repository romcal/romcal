import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Switzerland extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },
  };
}
