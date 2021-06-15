import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { Dayjs } from 'dayjs';
import { Americas } from './americas';
import { ProperCycles } from '../constants/cycles';

export class Peru extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    finding_of_the_holy_cross: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-3',
    },

    our_lady_help_of_christians: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-24',
    },

    mariana_of_jesus_de_paredes_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-26',
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-14',
    },

    our_lady_queen_of_peace: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-28',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '8-23',
    },

    john_macias_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-18',
    },

    our_lady_of_mercy: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-24',
    },

    our_lord_of_miracles: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-28',
    },

    martin_de_porres_religious: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-3',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
