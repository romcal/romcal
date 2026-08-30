import { PatronTitle, CalendarDef, Inputs } from '@internal/generator';

import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Apostolic_Vicariate_of_Benghazi
export class Libya_Benghazi extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleId:
        'immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_apostolic_vicariate_of_benghazi',
      titles: { append: [PatronTitle.PatronessOfTheApostolicVicariate] },
    },
  };
}
