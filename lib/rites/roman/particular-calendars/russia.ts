import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Russia extends CalendarDef {
  definitions: DateDefinitions = {
    george_matulaitis_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
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

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-6',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    theodosius_of_the_caves_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_perpetual_help: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
    },

    leonid_feodorov_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
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

    anthony_of_the_caves_monk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    olga_of_kiev: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-28',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    boris_of_kiev_and_gleb_of_kiev_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-5',
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

    our_lady_of_czestochowa: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    our_lady_of_vladimir: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-7',
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    oleksiy_zarytskyi_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_the_gate_of_dawn: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-16',
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-20',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    andrew_apostle_patron_of_russia: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
