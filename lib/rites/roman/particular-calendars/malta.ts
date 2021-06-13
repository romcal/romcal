import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Malta extends CalendarDef {
  definitions: DateDefinitions = {
    publius_of_malta_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-22',
    },

    shipwreck_of_saint_paul_apostle: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '2-10',
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

    mary_adeodata_pisani_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-25',
    },

    our_lady_of_sorrows: {
      precedence: Precedences.ProperFeast_8f,
      date: '4-15',
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH, Titles.PATRON_OF_EUROPE],
      // },
    },

    pius_v_pope: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-30',
    },

    george_preca_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-9',
    },

    ignatius_falzon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
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

    catherine_of_alexandria_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-25',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
  };
}
