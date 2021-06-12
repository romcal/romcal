import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Spain extends CalendarDef {
  definitions: DateDefinitions = {
    eulogius_of_cordoba_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-9',
    },
    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      {
        precedence: Precedences.OptionalMemorial_12,
        date: '1-20',
        // metadata: {
        //   titles: [Titles.MARTYR],
        // },
      },
    vincent_of_saragossa_deacon: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-22',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    ildephonsus_of_toledo_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
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
    hermenegild_the_visigoths_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-13',
      liturgicalColors: LiturgicalColors.RED,
    },
    isidore_of_seville_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '4-26',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
    john_of_avila_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-15',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    paschal_baylon_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-17',
    },
    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-22',
    },
    ferdinand_iii_of_castile: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-15',
    },
    pelagius_of_cordoba_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
      // metadata: {
      //   titles: [Titles.MARTYR],
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
    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
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
    james_apostle_patron_of_spain: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '7-25',
    },
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },
    ezequiel_moreno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-19',
    },
    teresa_of_jesus_jornet_ibars_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    francis_borgia_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-3',
    },
    thomas_of_villanova_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },
    mary_soledad_torres_acosta_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-11',
    },
    our_lady_of_the_pillar: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-15',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    peter_of_alcantara_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-19',
    },
    leander_of_seville_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-13',
    },
    eulalia_of_merida_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-10',
    },
    john_of_the_cross_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-14',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
