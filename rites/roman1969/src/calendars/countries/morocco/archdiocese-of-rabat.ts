import { PatronTitle, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Archdiocese_of_Rabat
export class Morocco_Rabat extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    berard_of_carbio_and_companions_martyrs: {
      customLocaleId: 'berard_of_carbio_and_companions_martyrs_patrons_of_the_archdiocese_of_rabat',
      dateDef: { month: 1, date: 16 },
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      martyrology: ['berard_of_carbio_priest', 'companions_martyrs'],
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },
  };
}
