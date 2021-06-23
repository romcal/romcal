import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Switzerland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-16',
    },
  };
}
