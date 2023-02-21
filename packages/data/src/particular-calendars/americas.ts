import { PatronTitles } from '../../../core/src/constants/martyrology-metadata';
import { Precedences } from '../../../core/src/constants/precedences';
import { CalendarDef } from '../../../core/src/models/calendar-def';
import { Inputs } from '../../../core/src/types/calendar-def';

export class Americas extends CalendarDef {
  inputs: Inputs = {
    our_lady_of_guadalupe: {
      customLocaleId: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.PatronessOfTheAmericas] },
    },
  };
}
