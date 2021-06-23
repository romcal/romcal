import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Lebanon extends CalendarDef {
  definitions: DateDefinitions = {
    barbara_of_heliopolis_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-4',
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-6',
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-24',
    },

    maron_of_syria_hermit: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-9',
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-23',
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
    },

    our_lady_of_lebanon: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-1',
    },
  };
}
