import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Americas } from './americas';

export class Bolivia extends CalendarDef {
  ParentCalendar = Americas;

  inputs: Inputs = {
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
      martyrology: ['philip_of_jesus_de_las_casas_martyr', 'paul_miki_martyr', 'companions_martyrs'],
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 3, date: 23 },
    },

    mariana_of_jesus_de_paredes_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 3, date: 23 },
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 12 },
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 14 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 16 },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 23 },
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
    },

    john_macias_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 18 },
    },

    louis_bertrand_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
    },

    miguel_febres_cordero_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },

    anthony_mary_claret_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 24 },
    },

    martin_de_porres_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
      martyrology: ['roch_gonzalez_priest', 'alphonsus_rodriguez_priest', 'john_del_castillo_priest'],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
