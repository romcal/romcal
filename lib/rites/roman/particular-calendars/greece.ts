import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Greece extends CalendarDef {
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
    cyril_of_jerusalem_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-18',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-22',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
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
    irene_of_macedonia: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },
    cyril_of_alexandria_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-27',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },
    margaret_of_antioch_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
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
    pantaleon_of_nicomedia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    lydia_of_philippi: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-3',
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
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    dionysius_the_areopagite_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    demetrius_of_thessaloniki_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    presentation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },
    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    spyridon_of_trimythous_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
