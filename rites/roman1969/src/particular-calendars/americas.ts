import { CommonDefinition as Common } from '../constants/commons';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Americas extends CalendarDef {
  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    our_lady_of_guadalupe: {
      customLocaleId: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronessOfTheAmericas] },
      commonsDef: Common.None,
    },
  };
}
