import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Switzerland: CalendarDefInput = {
  calendarId: 'switzerland',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    john_nepomucene_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },
  },
};
