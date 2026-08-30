import { CommonDefinition as Common, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Diocese_of_Constantine
export class Algeria_Constantine extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    james_of_lambaesis_deacon_marian_of_lambaesis_lector_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.Martyrs,
    },
  };
}
