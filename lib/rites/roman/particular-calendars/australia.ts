import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { Dayjs } from 'dayjs';
import { PatronTitles, Titles } from '../../../constants/martyrology-metadata';
import { ProperCycles } from '../constants/cycles';

export class Australia extends CalendarDef {
  particularConfig: ParticularConfig = {
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
    epiphanyOnSunday: false,
  };

  definitions: DateDefinitions = {
    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '3-17',
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
    },

    peter_chanel_priest: {
      customLocaleKey: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['peter_chanel_priest'],
      titles: [Titles.ProtoMartyrOfOceania, PatronTitles.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-24',
    },

    peter_to_rot_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-7',
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '8-8',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
