import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { InputDefinitions } from '@roman-rite/types/calendar-def';

export class Romania extends CalendarDef {
  inheritFrom = Europe;

  definitions: InputDefinitions = {
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
