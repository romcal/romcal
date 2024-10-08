import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Japan extends CalendarDef {
  inputs: Inputs = {
    paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperFeast_8f,
    },

    our_lady_of_the_discovery_of_the_hidden_christians: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
    },

    peter_kibe_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 1 },
      martyrology: ['peter_kibe_priest', 'companions_martyrs'],
    },

    '205_blessed_martyrs_of_japan': {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 10 },
    },

    thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 28 },
      martyrology: ['thomas_hioji_rokuzayemon_nishi_priest', 'companions_martyrs'],
    },

    francis_xavier_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 12, date: 3 },
    },
  };
}
