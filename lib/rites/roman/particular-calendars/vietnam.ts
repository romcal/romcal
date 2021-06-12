import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Vietnam extends CalendarDef {
  definitions: DateDefinitions = {
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-13',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
  };
}
