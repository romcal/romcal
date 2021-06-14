import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import dayjs, { Dayjs } from 'dayjs';
import { Americas } from './americas';
import { PatronTitles } from '../../../constants/martyrology-metadata';

export class Argentina extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    laura_vicuna_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
    },

    our_lady_queen_of_peace: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-24',
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '4-27',
    },

    our_lady_of_lujan: {
      customLocaleKey: 'our_lady_of_lujan_patroness_of_argentina',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-8',
      titles: (titles) => [...titles, PatronTitles.PatronessOfArgentina],
    },

    isidore_the_farmer: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },

    luigi_orione_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },

    our_lady_of_itati: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-9',
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      date: '7-10',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-23',
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-24',
    },

    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
    },

    zepherin_namuncura: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-30',
    },

    our_lady_of_mercy: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-24',
    },

    benedict_of_jesus_valdivielso_saez_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    our_lady_of_the_pillar: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-12',
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-17',
      martyrology: [
        'roch_gonzalez_priest',
        'alphonsus_rodriguez_priest',
        'john_del_castillo_priest',
      ],
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-18',
    },

    our_lady_of_the_valley: {
      precedence: Precedences.ProperMemorial_11b,
      date: (year: number): Dayjs =>
        dayjs.utc(Dates.divineMercySunday(year).add(6, 'day')),
      // // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
