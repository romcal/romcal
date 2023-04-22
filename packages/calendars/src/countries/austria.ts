import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Austria: CalendarDefInput = {
  calendarId: 'austria',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    john_nepomucene_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    charles_i_of_austria: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },
  },
};
