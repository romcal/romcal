import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Italy extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    // todo: this should use the catherine_of_siena_virgin_copatroness_of_europe key, but extends name only (end probably title)
    catherine_of_siena_virgin_copatroness_of_italy_and_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    // Dropping this definition, since it's already recreated under a different key, just above
    catherine_of_siena_virgin_copatroness_of_europe: {
      drop: true,
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    barnabas_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-11',
    },

    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_of_assisi_patron_of_italy: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '10-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
