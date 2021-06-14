import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';
import { Europe } from './europe';
import { PatronTitles } from '../../../constants/martyrology-metadata';

export class Spain extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    eulogius_of_cordoba_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-9',
    },

    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      {
        precedence: Precedences.OptionalMemorial_12,
        date: '1-20',
        saints: [
          'fructuosus_of_tarragona_bishop',
          'augurius_of_tarragona_deacon',
          'eulogius_of_tarragona_deacon',
        ],
      },

    vincent_of_saragossa_deacon: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-22',
    },

    ildephonsus_of_toledo_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
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
    },

    john_of_avila_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
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
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    james_apostle: {
      customLocaleKey: 'james_apostle_patron_of_spain',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: (titles) => [...titles, PatronTitles.PatronOfSpain],
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
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
