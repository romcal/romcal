import { Precedences } from '../../../core/src/constants/precedences';
import { CalendarDef } from '../../../core/src/models/calendar-def';
import { Inputs } from '../../../core/src/types/calendar-def';
import { PatronTitles, Titles } from '../metadata/martyrology-metadata';
import { Europe } from './europe';

export class Italy extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    catherine_of_siena_virgin: {
      customLocaleId: 'catherine_of_siena_virgin_copatroness_of_italy_and_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch, PatronTitles.CopatronessOfItalyAndEurope],
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
      titles: { append: [PatronTitles.PatronOfItaly] },
    },
  };
}
