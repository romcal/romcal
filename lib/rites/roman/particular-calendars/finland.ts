import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Finland extends CalendarDef {
  definitions: DateDefinitions = {
    henry_of_finland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '1-19',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    hemming_of_turku_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-29',
    },
    elizabeth_hesselblad_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },
    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },
    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-10',
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
    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-20',
      liturgicalColors: LiturgicalColors.WHITE,
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
      precedence: Precedences.ProperMemorial_11b,
      date: '5-29',
      liturgicalColors: LiturgicalColors.RED,
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
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
    },
  };
}
