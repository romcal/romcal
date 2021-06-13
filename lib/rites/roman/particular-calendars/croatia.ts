import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Croatia extends CalendarDef {
  definitions: DateDefinitions = {
    aloysius_stepinac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-10',
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

    ivan_merz: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    leopold_mandic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-9',
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-13',
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

    augustine_kazotic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-3',
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

    marko_krizin_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    nicholas_tavelic_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
