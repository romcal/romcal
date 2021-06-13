import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class SriLanka extends CalendarDef {
  definitions: DateDefinitions = {
    joseph_vaz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-16',
    },

    our_lady_of_lanka: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_madhu: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
