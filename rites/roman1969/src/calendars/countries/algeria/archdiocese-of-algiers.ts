import { CommonDefinition as Common, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Archdiocese_of_Algiers
export class Algeria_Algiers extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    marciana_of_mauretania_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: [Common.VirginMartyrs, Common.Virgins],
    },

    // This celebration is a solemnity in the cathedral church.
    dedication_of_the_cathedral_of_algiers_algeria: {
      dateDef: { month: 5, date: 19 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },
  };
}
