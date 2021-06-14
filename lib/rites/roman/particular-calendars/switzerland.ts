import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';

export class Switzerland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-16',
    },
  };
}
