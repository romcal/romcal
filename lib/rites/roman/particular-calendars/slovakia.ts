import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Slovakia extends CalendarDef {
  particularConfig: ParticularConfig = {
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
    epiphanyOnSunday: false,
  };

  definitions: DateDefinitions = {
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      // TODO: When votive Masses (#110) are implemented, change this celebration into votive Mass of `cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe`
      drop: true,
    },

    joseph_spouse_of_mary: {
      isHolyDayOfObligation: false,
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
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

    florian_of_lorch_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
      liturgicalColors: LiturgicalColors.RED,
    },

    sara_salkahazi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-11',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-16',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    ladislaus_i_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_slavic_missionaries:
      {
        precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
        date: '7-5',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },

    anthony_zaccaria_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-7',
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
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

    gorazd_of_moravia_and_companions: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    zdenka_cecilia_schelingova_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-30',
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

    helena_of_constantinople: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    teresa_of_calcutta_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-7',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_sorrows_patroness_of_slovakia: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '9-15',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    maurus_of_pecs_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-25',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      date: '10-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    all_souls: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-2',
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },

    emeric_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-5',
    },

    john_damascene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
      liturgicalColors: LiturgicalColors.RED,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
