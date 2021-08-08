import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Americas extends CalendarDef {
  definitions: InputDefinitions = {
    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.PatronessOfTheAmericas] },
    },
  };
}
