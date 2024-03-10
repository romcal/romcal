import { ProperCycles } from '../constants/cycles';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Wales extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    teilo_of_llandaff_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 9 },
    },

    david_of_wales_bishop: {
      customLocaleId: 'david_of_wales_bishop_patron_of_wales',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 3, date: 1 },
      titles: { append: [PatronTitle.PatronOfWales] },
    },

    beuno_of_wales_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 20 },
    },

    asaph_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
    },

    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
      martyrology: ['alban_of_britain_martyr', 'julius_of_caerleon_martyr', 'aaron_of_caerleon_martyr'],
    },

    john_jones_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 12 },
    },

    philip_evans_and_john_lloyd_priests: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 25 },
      martyrology: ['philip_evans_priest', 'john_lloyd_priest'],
    },

    germanus_of_auxerre_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 3 },
    },

    david_lewis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    deiniol_of_bangor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 11 },
    },

    john_henry_newman_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 9 },
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      dateDef: { month: 10, date: 10 },
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 10 },
    },

    richard_gwyn_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    six_welsh_martyrs_and_companions: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 25 },
      martyrology: ['six_welsh_martyrs', { id: 'companions_martyrs', hideTitles: true }],
    },

    winefride_of_flintshire_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    illtud_the_knight_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 6 },
    },

    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    all_saints: {
      dateDef: { month: 11, date: 1 },
      dateExceptions: {
        ifIsDayOfWeek: 6, // if is a Saturday
        setDate: { addDay: 1 },
      },
    },

    commemoration_of_all_the_faithful_departed: {
      dateDef: { month: 11, date: 2 },
      dateExceptions: {
        ifIsDayOfWeek: 0, // if is a Sunday
        setDate: { addDay: 1 },
      },
    },

    all_saints_of_wales: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 6 },
    },

    dyfrig_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 14 },
    },

    john_roberts_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 10 },
    },

    peter_and_paul_apostles: {
      // In England and Wales when the celebration falls on either a
      // Saturday or a Monday it is transferred to the Sunday.
      dateExceptions: [
        {
          ifIsDayOfWeek: 1, // if is a Monday
          setDate: { subtractDay: 1 },
        },
        {
          ifIsDayOfWeek: 6, // if is a Saturday
          setDate: { addDay: 1 },
        },
      ],
    },

    assumption_of_the_blessed_virgin_mary: {
      dateDef: { month: 8, date: 15 },
      // In England and Wales when the celebration falls on either a
      // Saturday or a Monday it is transferred to the Sunday.
      dateExceptions: [
        {
          ifIsDayOfWeek: 1, // if is Monday
          setDate: { subtractDay: 1 },
        },
        {
          ifIsDayOfWeek: 6, // if is Saturday
          setDate: { addDay: 1 },
        },
      ],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
