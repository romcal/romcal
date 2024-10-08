import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Malta extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    publius_of_malta_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 22 },
    },

    shipwreck_of_saint_paul_apostle: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 2, date: 10 },
    },

    mary_adeodata_pisani_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
    },

    our_lady_of_sorrows: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 4, date: 15 },
    },

    pius_v_pope: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 30 },
    },

    george_preca_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 9 },
    },

    ignatius_falzon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 16 },
    },

    catherine_of_alexandria_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 25 },
    },
  };
}
