import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { PatronTitle } from '../constants/martyrology-metadata';

import { Americas } from './americas';

export class CostaRica extends CalendarDef {
  ParentCalendar = Americas;

  inputs: Inputs = {
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },

    our_lady_of_angels: {
      precedence: Precedences.GeneralSolemnity_3,
      /*
       * Ordo Temporis 2023-2024
       * src: https://lacecor-my.sharepoint.com/:b:/g/personal/repositorioweb_iglesiacr_org/Ee_y58b67V1EinO2QLxwS8gBb3zFtlgpRFG0_KBU9l_kCQ?e=TVe9YR
       * page: 96
       */
      dateDef: { month: 8, date: 2 },
      titles: { append: [PatronTitle.PatronessOfCostaRica] },
      customLocaleId: 'our_lady_of_angels_patroness_of_costa_rica',
    },
  };
}
