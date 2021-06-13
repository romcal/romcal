import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Norway extends CalendarDef {
  definitions: DateDefinitions = {
    thorfinn_of_hamar_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-8',
    },

    henry_of_finland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-19',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    eysteinn_of_nidaros_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-26',
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },

    magnus_erlendsson_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-16',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-18',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    sunniva_of_norway_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-8',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-10',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    swithun_of_winchester_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-15',
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-20',
    },

    bridget_of_sweden_religious_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-23',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.MARTYR],
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

    nicholas_steno_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-25',
    },
  };
}
