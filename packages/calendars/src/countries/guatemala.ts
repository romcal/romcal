import { CalendarDefInput, Precedence, ProperCycle } from '@romcal/shared';

export const Guatemala: CalendarDefInput = {
  calendarId: 'guatemala',

  basedOn: ['general-roman', 'america'],

  inputs: {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  },
};
