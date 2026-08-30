import { CommonDefinition as Common, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Archdiocese_of_Tunis
export class Tunisia_Tunis extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    // This celebration is a solemnity in the cathedral church.
    dedication_of_the_cathedral_of_tunis_tunisia: {
      dateDef: { month: 5, date: 23 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    our_lady_of_carthage: {
      dateDef: { month: 5, date: 24 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // Saint Roch is a solemnity in the city of Tunis on June 18.
  };
}
