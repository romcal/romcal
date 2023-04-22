import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Lebanon: CalendarDefInput = {
  calendarId: 'lebanon',

  basedOn: ['general-roman'],

  inputs: {
    barbara_of_heliopolis_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 6 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 12, date: 24 },
    },

    maron_of_syria_hermit: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 9 },
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 3, date: 23 },
    },

    george_of_lydda_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 4, date: 23 },
    },

    our_lady_of_lebanon: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 5, date: 1 },
    },
  },
};
