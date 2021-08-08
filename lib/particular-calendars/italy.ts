import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { Europe } from '@romcal/particular-calendars/europe';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';

export class Italy extends CalendarDef {
  inheritFrom = Europe;

  definitions: InputDefinitions = {
    catherine_of_siena_virgin: {
      customLocaleKey: 'catherine_of_siena_virgin_copatroness_of_italy_and_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch, PatronTitles.CopatronessOfItalyAndEurope],
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    barnabas_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 11 },
    },

    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 22 },
    },

    francis_of_assisi: {
      customLocaleKey: 'francis_of_assisi_patron_of_italy',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.PatronOfItaly] },
    },
  };
}
