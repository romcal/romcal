import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Ukraine extends CalendarDef {
  definitions: DateDefinitions = {
    marcelina_darowska_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-5',
    },

    bronislaw_markiewicz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-30',
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

    mary_mother_of_the_church: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(1, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
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

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    albert_chmielowski_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-17',
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    john_of_dukla_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-8',
    },

    hedwig_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-18',
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

    our_lady_of_czestochowa: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    wladyslaw_bladzinski_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    stanislaus_kostka_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    joseph_bilczewski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-23',
    },
  };
}
