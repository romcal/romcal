import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';

export class Slovenia extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },
  };
}
