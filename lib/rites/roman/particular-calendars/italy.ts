import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Italy extends CalendarDef {
  definitions: DateDefinitions = {
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },
    catherine_of_siena_virgin_copatroness_of_italy_and_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },
    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    bridget_of_sweden_religious_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-23',
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },
    francis_of_assisi_patron_of_italy: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '10-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
