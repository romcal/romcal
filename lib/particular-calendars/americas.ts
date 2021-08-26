import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { PatronTitles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';

export class Americas extends CalendarDef {
  definitions: InputDefinitions = {
    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.PatronessOfTheAmericas] },
    },
  };
}
