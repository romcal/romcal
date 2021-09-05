import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Lebanon extends CalendarDef {
  inputs: Inputs = {
    barbara_of_heliopolis_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 6 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 24 },
    },

    maron_of_syria_hermit: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 9 },
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 3, date: 23 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 23 },
    },

    our_lady_of_lebanon: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 1 },
    },
  };
}
