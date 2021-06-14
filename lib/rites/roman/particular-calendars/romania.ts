import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';

export class Romania extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_cassian_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-28',
    },

    vladimir_ghika_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },
  };
}
