import { PatronTitle, Precedence, ProperCycle } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Americas } from './americas';

export class Argentina extends CalendarDef {
  parentCalendar = Americas;

  inputs: Inputs = {
    laura_vicuna_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
    },

    our_lady_queen_of_peace: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 24 },
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 4, date: 27 },
    },

    our_lady_of_lujan: {
      customLocaleId: 'our_lady_of_lujan_patroness_of_argentina',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 8 },
      titles: { append: [PatronTitle.PatronessOfArgentina] },
    },

    isidore_the_farmer: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    luigi_orione_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    our_lady_of_itati: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 9 },
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      dateDef: { month: 7, date: 10 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 16 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 23 },
    },

    francis_solanus_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 24 },
    },

    roch_of_montpellier: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    zepherin_namuncura: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    rose_of_lima_virgin: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 8, date: 30 },
    },

    our_lady_of_mercy: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 24 },
    },

    benedict_of_jesus_valdivielso_saez_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
    },

    our_lady_of_the_pillar: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 17 },
      martyrology: ['roch_gonzalez_priest', 'alphonsus_rodriguez_priest', 'john_del_castillo_priest'],
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 18 },
    },

    our_lady_of_the_valley: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { dateFn: 'divineMercySunday', addDay: 6 },
      properCycle: ProperCycle.ProperOfTime,
    },
  };
}
