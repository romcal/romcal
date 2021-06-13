import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Scotland extends CalendarDef {
  definitions: DateDefinitions = {
    kentigern_of_scotland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-13',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },

    john_ogilvie_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    columba_of_iona_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    bridget_of_sweden_religious_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-23',
      liturgicalColors: LiturgicalColors.WHITE,
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

    ninian_of_whithorn_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    margaret_of_scotland: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    andrew_apostle_patron_of_scotland: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
