import { CommonDefinition as Common } from '../../../constants/commons';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Roman_Catholic_Diocese_of_Oran
export class Algeria_Oran extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    longinus_of_pomaria_eugenius_of_carthage_and_vindemialis_of_capsa_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.Bishops,
    },

    // This celebration is a solemnity in the cathedral church.
    dedication_of_the_cathedral_of_oran_algeria: {
      dateDef: { month: 4, date: 3 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },
  };
}
