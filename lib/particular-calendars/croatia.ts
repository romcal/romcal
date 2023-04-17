import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Croatia extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    aloysius_stepinac_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 10 },
    },

    ivan_merz: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    leopold_mandic_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 12 },
    },

    quirinus_of_sescia_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 7, date: 13 },
    },

    augustine_kazotic_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 3 },
    },

    marko_krizin_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 7 },
    },

    nicholas_tavelic_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 14 },
    },
  };
}
