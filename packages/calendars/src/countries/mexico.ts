import { CalendarDefInput, Precedence, ProperCycle } from '@romcal/shared';

export const Mexico: CalendarDefInput = {
  calendarId: 'mexico',

  basedOn: ['general-roman', 'america'],

  inputs: {
    philip_of_jesus_de_las_casas_martyr: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 2, date: 5 },
    },

    sebastian_de_aparicio_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
    },

    maria_guadalupe_garcia_zavala_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    finding_of_the_holy_cross: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 5, date: 3 },
    },

    philip_and_james_apostles: {
      dateDef: { month: 5, date: 4 },
    },

    isidore_the_farmer: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    john_nepomucene_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 21 },
    },

    our_lady_of_perpetual_help: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    our_lady_refuge_of_sinners: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
    },

    bartholomew_dias_laurel_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    peter_de_zuniga_and_louis_flores_priests: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
      martyrology: ['peter_de_zuniga_priest', 'louis_flores_priest'],
    },

    junipero_serra_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    rose_of_lima_virgin: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 8, date: 30 },
    },

    jose_maria_de_yermo_y_parres_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
    },

    our_lady_of_mercy: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 24 },
    },

    raphael_guizar_y_valencia_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 10, date: 24 },
    },

    miguel_agustin_pro_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 9 },
    },

    our_lady_of_guadalupe: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  },
};
