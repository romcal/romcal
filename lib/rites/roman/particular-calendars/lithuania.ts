import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Lithuania extends CalendarDef {
  definitions: DateDefinitions = {
    george_matulaitis_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },
    casimir_of_poland: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-4',
    },
    bruno_of_querfurt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-9',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
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
    andrew_bobola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    our_lady_of_the_gate_of_dawn: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-16',
    },
    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
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
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
    },
    hyacinth_of_poland_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-17',
    },
    nativity_of_mary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },
  };
}
