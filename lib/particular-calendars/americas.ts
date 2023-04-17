import { PatronTitle, Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Americas extends CalendarDef {
  inputs: Inputs = {
    our_lady_of_guadalupe: {
      customLocaleId: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronessOfTheAmericas] },
    },
  };
}
