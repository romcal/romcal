import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class France extends CalendarDef {
  particularConfig: ParticularConfig = {
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    remigius_of_reims_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-15',
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

    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-18',
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    ivo_of_kermartin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-19',
    },

    joan_of_arc_virgin_copatroness_of_france: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      date: '5-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-2',
    },

    clotilde_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
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

    caesarius_of_arles_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      {
        precedence: Precedences.ProperMemorial_11b,
        date: '10-1',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
        // },
      },
  };
}
