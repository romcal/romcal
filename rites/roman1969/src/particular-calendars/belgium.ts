import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Belgium extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    mutien_marie_wiaux_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
    },

    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
    },

    julie_billiart_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 8 },
    },

    damien_de_veuster_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    juliana_of_liege_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 7 },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 31 },
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 17 },
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      alternativeTransferDateDefs: [{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }],
      isOptional: true,
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
    },

    john_berchmans_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 26 },
    },
  };
}
