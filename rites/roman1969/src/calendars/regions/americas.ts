import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

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
