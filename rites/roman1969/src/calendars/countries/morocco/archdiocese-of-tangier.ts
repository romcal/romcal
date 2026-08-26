import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Archdiocese_of_Tangier
export class Morocco_Tangier extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {
    berard_of_carbio_and_companions_martyrs: {
      dateDef: { month: 1, date: 16 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['berard_of_carbio_priest', 'companions_martyrs'],
    },

    john_mary_vianney_priest: {
      dateDef: { month: 8, date: 3 },
    },

    our_lady_of_africa: {
      dateDef: { month: 8, date: 4 },
    },

    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleId: 'immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_archdiocese_of_tangier',
      titles: { append: [PatronTitle.PatronessOfTheArchdiocese] },
    },
  };
}
