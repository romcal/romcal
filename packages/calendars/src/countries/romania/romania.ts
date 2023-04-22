import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Romania: CalendarDefInput = {
  calendarId: 'romania',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    john_cassian_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 28 },
    },

    vladimir_ghika_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  },
};
