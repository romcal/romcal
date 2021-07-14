import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { InputDefinitions } from '@roman-rite/types/calendar-def';

export class Vietnam extends CalendarDef {
  definitions: InputDefinitions = {
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-13',
    },
  };
}
