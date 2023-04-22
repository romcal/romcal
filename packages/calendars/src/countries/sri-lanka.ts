import { CalendarDefInput, Precedence } from '@romcal/shared';

export const SriLanka: CalendarDefInput = {
  calendarId: 'sri-lanka',

  basedOn: ['general-roman'],

  inputs: {
    joseph_vaz_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    our_lady_of_lanka: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 2, date: 4 },
    },

    our_lady_of_madhu: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },
  },
};
