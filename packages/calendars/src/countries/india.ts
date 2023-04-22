import { CalendarDefInput, Precedence } from '@romcal/shared';

export const India: CalendarDefInput = {
  calendarId: 'india',

  basedOn: ['general-roman'],

  inputs: {
    kuriakose_elias_of_the_holy_family_chavara_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    joseph_vaz_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    john_de_britto_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 4 },
    },

    gundisalvus_garcia_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
    },

    mary_theresa_chiramel_mankidiyan_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 8 },
    },

    thomas_apostle: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 3 },
    },

    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
    },

    teresa_of_calcutta_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 5 },
    },

    francis_xavier_priest: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 12, date: 3 },
    },
  },
};
