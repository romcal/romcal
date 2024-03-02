import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Italy extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    catherine_of_siena_virgin: {
      customLocaleId: 'catherine_of_siena_virgin_copatroness_of_italy_and_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: [Title.Virgin, Title.DoctorOfTheChurch, PatronTitle.CopatronessOfItalyAndEurope],
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 22 },
    },

    francis_of_assisi: {
      customLocaleId: 'francis_of_assisi_patron_of_italy',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronOfItaly] },
    },
  };
}
