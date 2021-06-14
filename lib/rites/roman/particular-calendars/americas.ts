import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { PatronTitles } from '../../../constants/martyrology-metadata';

export class Americas extends CalendarDef {
  definitions: DateDefinitions = {
    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.PatronessOfTheAmericas],
    },
  };
}
