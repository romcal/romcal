import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Norway extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    thorfinn_of_hamar_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 8 },
    },

    henry_of_finland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 19 },
    },

    eysteinn_of_nidaros_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 26 },
    },

    magnus_erlendsson_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 16 },
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 18 },
    },

    sunniva_of_norway_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 8 },
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 10 },
    },

    swithun_of_winchester_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 15 },
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 20 },
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 29 },
    },

    nicholas_steno_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 25 },
    },
  };
}
