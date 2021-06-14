import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Austria extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-16',
      liturgicalColors: LiturgicalColors.RED,
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
    },
  };
}
