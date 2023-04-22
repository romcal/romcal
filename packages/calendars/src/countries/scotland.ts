import { CalendarDefInput, PatronTitle, Precedence } from '@romcal/shared';

export const Scotland: CalendarDefInput = {
  calendarId: 'scotland',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    kentigern_of_scotland_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 13 },
    },

    john_ogilvie_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 3, date: 10 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 3, date: 17 },
    },

    columba_of_iona_abbot: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 6, date: 9 },
    },

    ninian_of_whithorn_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 16 },
    },

    margaret_of_scotland: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 16 },
    },

    andrew_apostle: {
      customLocaleKey: 'andrew_apostle_patron_of_scotland',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfScotland] },
    },
  },
};
