import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Americas } from './americas';

export class Mexico extends CalendarDef {
  ParentCalendar = Americas;

  inputs: Inputs = {
    philip_of_jesus_de_las_casas_martyr: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 2, date: 5 },
    },

    sebastian_de_aparicio_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
    },

    maria_guadalupe_garcia_zavala_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    finding_of_the_holy_cross: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 3 },
    },

    philip_and_james_apostles: {
      dateDef: { month: 5, date: 4 },
    },

    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 21 },
    },

    our_lady_of_perpetual_help: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    our_lady_refuge_of_sinners: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
    },

    bartholomew_dias_laurel_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    peter_de_zuniga_and_louis_flores_priests: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
      martyrology: ['peter_de_zuniga_priest', 'louis_flores_priest'],
    },

    junipero_serra_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 30 },
    },

    jose_maria_de_yermo_y_parres_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
    },

    our_lady_of_mercy: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 24 },
    },

    raphael_guizar_y_valencia_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 24 },
    },

    miguel_agustin_pro_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 9 },
    },

    our_lady_of_guadalupe: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
