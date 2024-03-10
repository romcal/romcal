import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Finland extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    henry_of_finland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 1, date: 19 },
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 18 },
    },

    hemming_of_turku_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 22 },
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
    },

    elizabeth_hesselblad_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 10 },
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 20 },
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 29 },
    },

    nicholas_steno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
    },
  };
}
