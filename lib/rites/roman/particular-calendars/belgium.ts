import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Belgium extends CalendarDef {
  definitions: DateDefinitions = {
    mutien_marie_wiaux_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
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

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    julie_billiart_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-8',
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

    damien_de_veuster_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
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

    juliana_of_liege_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-31',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-17',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_berchmans_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
