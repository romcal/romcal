import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';
import { PatronTitles, Titles } from '../../../constants/martyrology-metadata';

export class Italy extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    catherine_of_siena_virgin: {
      customLocaleKey:
        'catherine_of_siena_virgin_copatroness_of_italy_and_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: [
        Titles.Virgin,
        Titles.DoctorOfTheChurch,
        PatronTitles.CopatronessOfItalyAndEurope,
      ],
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
    },

    barnabas_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-11',
    },

    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-22',
    },

    francis_of_assisi: {
      customLocaleKey: 'francis_of_assisi_patron_of_italy',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.PatronOfItaly],
    },
  };
}
