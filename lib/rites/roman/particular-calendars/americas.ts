import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Americas extends CalendarDef {
  definitions: DateDefinitions = {
    our_lady_of_guadalupe_patroness_of_the_americas: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '12-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
