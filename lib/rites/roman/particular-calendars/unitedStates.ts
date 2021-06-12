import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import dayjs, { Dayjs } from 'dayjs';

export class UnitedStates extends CalendarDef {
  particularConfig: ParticularConfig = {
    // TODO: Ascension is celebrated on Thursday in the following ecclesiastical provinces (in all other 26 EP, it is celebrated on Sunday): Boston, Hartford, New York, Newark, Omaha, Philadelphia
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    elizabeth_ann_seton_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    john_neumann_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    andre_bessette_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-6',
    },
    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    marianne_cope_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
    },
    katharine_drexel_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-3',
    },
    damien_de_veuster_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-10',
    },
    isidore_the_farmer: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },
    junipero_serra_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },
    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-5',
    },
    kateri_tekakwitha_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-18',
    },
    peter_claver_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    francis_xavier_seelos_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-5',
    },
    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-6',
    },
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-19',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-20',
    },
    frances_xavier_cabrini_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-13',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    rose_philippine_duchesne_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-18',
    },
    miguel_agustin_pro_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-23',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    // It is a holyday of obligation unless it occurs with Sunday: then it is moved to the following Monday and while keeps its rank (solemnity), it is not a holyday of obligation
    immaculate_conception_of_mary_patroness_of_the_usa: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: (year: number): Dayjs => {
        const date = dayjs.utc(`${year}-12-8`);
        return date.day() === 0
          ? date.add(1, 'day')
          : dayjs.utc(`${year}-12-9`);
      },
    },
    our_lady_of_guadalupe_patroness_of_the_americas: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '12-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
