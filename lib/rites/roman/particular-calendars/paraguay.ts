import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Paraguay extends CalendarDef {
  definitions: DateDefinitions = {
    our_lady_of_guadalupe_patroness_of_the_americas: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '12-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
