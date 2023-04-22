import { CalendarDefInput, Precedence, ProperCycle, Title } from '@romcal/shared';

export const Chile: CalendarDefInput = {
  calendarId: 'chile',

  basedOn: ['general-roman', 'america'],

  inputs: {
    laura_vicuna_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
    },

    pius_ix_pope: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
    },

    our_lady_of_lourdes: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 2, date: 11 },
    },

    philip_and_james_apostles: {
      dateDef: { month: 5, date: 4 },
    },

    teresa_of_jesus_of_los_andes_virgin: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 7, date: 13 },
    },

    camillus_de_lellis_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    henry_ii_emperor: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    our_lady_of_mount_carmel: {
      customLocaleKey: 'our_lady_of_mount_carmel_mother_and_queen_of_chile',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 16 },
      titles: { append: [Title.MotherAndQueenOfChile] },
    },

    alberto_hurtado_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 8, date: 18 },
    },

    rose_of_lima_virgin: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 8, date: 30 },
    },

    our_lady_of_mercy: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  },
};
