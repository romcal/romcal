import { ProperCycles } from '../constants/cycles';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Americas } from './americas';

export class PuertoRico extends CalendarDef {
  ParentCalendar = Americas;

  inputs: Inputs = {
    most_holy_name_of_jesus: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    our_lady_of_bethlehem: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    marydolores_rodriguez_sopena_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 10 },
    },

    carlos_manuel_rodriguez_santiago: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 16 },
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 30 },
    },

    charles_spinola_and_jerome_de_angelis_priests: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 10 },
      martyrology: ['charles_spinola_priest', 'jerome_de_angelis_priest'],
    },

    mary_soledad_torres_acosta_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
    },

    our_lady_mother_of_divine_providence: {
      customLocaleId: 'our_lady_mother_of_divine_providence_patroness_of_puerto_rico',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 11, date: 19 },
      titles: { append: [PatronTitle.PatronessOfPuertoRico] },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
