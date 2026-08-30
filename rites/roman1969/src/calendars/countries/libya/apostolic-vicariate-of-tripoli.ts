import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Apostolic_Vicariate_of_Tripoli
export class Libya_Tripoli extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    francis_of_assisi: {
      customLocaleId: 'francis_of_assisi_patron_of_the_apostolic_vicariate_of_tripoli',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheApostolicVicariate] },
    },

    // This celebration is a solemnity in the cathedral church.
    dedication_of_the_cathedral_of_tripoli_libya: {
      dateDef: { month: 10, date: 23 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },
  };
}
