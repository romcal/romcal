import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Canada } from '.';

export class Canada_Quebec extends CalendarDef {
  ParentCalendars = [Canada];

  inputs: Inputs = {
    // In the Canadian province of Quebec, the proper feast celebrates Saint Anne alone
    // rather than Saint Anne and Saint Joachim together.
    // src: mr_fr_2021_ed3
    joachim_and_anne_parents_of_mary: {
      drop: true,
    },

    // src: mr_fr_2021_ed3
    anne_mother_of_mary_patroness_of_the_province_of_quebec: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 7, date: 26 },
      commonsDef: Common.None,
      martyrology: [
        {
          id: 'anne_mother_of_mary',
          titles: { append: [PatronTitle.PatronessOfTheProvinceOfQuebec] },
        },
      ],
    },
  };
}
