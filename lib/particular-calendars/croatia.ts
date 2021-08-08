import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { Europe } from '@romcal/particular-calendars/europe';
import { InputDefinitions } from '@romcal/types/calendar-def';

export class Croatia extends CalendarDef {
  inheritFrom = Europe;

  definitions: InputDefinitions = {
    aloysius_stepinac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 10 },
    },

    ivan_merz: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    leopold_mandic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 12 },
    },

    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 13 },
    },

    augustine_kazotic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 3 },
    },

    marko_krizin_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 7 },
    },

    nicholas_tavelic_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 14 },
    },
  };
}
