import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Hungary extends CalendarDef {
  definitions: DateDefinitions = {
    paul_of_thebes_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-15',
    },
    margaret_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '1-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    eusebius_of_esztergom_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
    },
    ladislaus_batthyany_strattmann: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
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
    jacinta_marto_and_francisco_marto: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-20',
    },
    matthias_apostle: {
      date: '2-24',
    },
    zoltan_lajos_meszlenyi_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-4',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-16',
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
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    ceferino_gimenez_malla_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    gisela_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-7',
    },
    sara_salkahazi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-11',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    john_scheffler_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-17',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    william_apor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-23',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-24',
    },
    translation_of_the_relics_of_saint_stephen_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },
    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },
    agnes_of_bohemia_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    istvan_sandor_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-8',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    yolanda_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
    },
    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },
    ladislaus_i_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      date: '6-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
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
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-17',
    },
    pavel_peter_gojdic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-17',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
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
    kinga_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-24',
    },
    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-27',
    },
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },
    innocent_xi_pope: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-13',
    },
    pontian_i_pope_and_hippolytus_of_rome_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    bernard_of_clairvaux_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-19',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    stephen_i_of_hungary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '8-20',
    },
    teresa_of_calcutta_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-5',
    },
    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    most_holy_name_of_mary: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-12',
    },
    gerard_of_csanad_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-24',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    szilard_bogdanffy_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-3',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    our_lady_of_hungary_patroness_of_hungary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '10-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
    },
    maurus_of_pecs_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-25',
    },
    theodore_romzha_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-31',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    all_souls: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-2',
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },
    emeric_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    hungarian_saints_and_blesseds: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-13',
    },
    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },
    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-19',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    john_brenner_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-15',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    stephen_the_first_martyr: {
      isHolyDayOfObligation: true,
    },
    easter_monday: {
      isHolyDayOfObligation: true,
    },
    mary_mother_of_the_church: {
      isHolyDayOfObligation: true,
    },
  };
}
