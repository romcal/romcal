import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';

export class Americas extends CalendarDef {
  definitions: DateDefinitions = {
    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, 'Patroness of the Americas'],
    },
  };
}
