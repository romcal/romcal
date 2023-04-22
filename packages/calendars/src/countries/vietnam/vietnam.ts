import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Vietnam: CalendarDefInput = {
  calendarId: 'vietnam',

  basedOn: ['general-roman'],

  inputs: {
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 13 },
    },
  },
};
