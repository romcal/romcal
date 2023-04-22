import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Belgium: CalendarDefInput = {
  calendarId: 'belgium',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    mutien_marie_wiaux_religious: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
    },

    amand_of_maastricht_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
    },

    julie_billiart_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 4, date: 8 },
    },

    damien_de_veuster_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    juliana_of_liege_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 8, date: 7 },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 8, date: 31 },
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 17 },
    },

    hubert_of_liege_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
    },

    john_berchmans_religious: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 26 },
    },
  },
};
