import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Americas } from './americas';

export class Peru extends CalendarDef {
  ParentCalendar = Americas;

  inputs: Inputs = {
    finding_of_the_holy_cross: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 3 },
    },

    our_lady_help_of_christians: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
    },

    mariana_of_jesus_de_paredes_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 26 },
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 14 },
    },

    our_lady_queen_of_peace: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 28 },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 23 },
    },

    john_macias_religious: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 18 },
    },

    our_lady_of_mercy: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
    },

    our_lord_of_miracles: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 28 },
    },

    martin_de_porres_religious: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 11, date: 3 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
