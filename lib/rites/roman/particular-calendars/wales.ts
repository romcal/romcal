import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';
import dayjs from 'dayjs';

export class Wales extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    teilo_of_llandaff_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-9',
    },

    david_of_wales_bishop: {
      customLocaleKey: 'david_of_wales_bishop_patron_of_wales',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '3-1',
      titles: (titles) => [...titles, PatronTitles.PatronOfWales],
    },

    beuno_of_wales_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-20',
    },

    asaph_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-5',
    },

    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-20',
      martyrology: [
        'alban_of_britain_martyr',
        'julius_of_caerleon_martyr',
        'aaron_of_caerleon_martyr',
      ],
    },

    john_jones_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-12',
    },

    philip_evans_and_john_lloyd_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-25',
      martyrology: ['philip_evans_priest', 'john_lloyd_priest'],
    },

    germanus_of_auxerre_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-3',
    },

    david_lewis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    deiniol_of_bangor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-11',
    },

    john_henry_newman_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-9',
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      date: '10-10',
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },

    richard_gwyn_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    six_welsh_martyrs_and_companions: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-25',
      martyrology: ['six_welsh_martyrs', { key: 'companions_martyrs', hideTitles: true }],
    },

    winefride_of_flintshire_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-3',
    },

    illtud_the_knight_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-6',
    },

    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    all_saints: {
      date: (year) => {
        const date = dayjs.utc(`${year}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${year}-11-2`);
        } else {
          return date;
        }
      },
    },

    all_souls: {
      date: (year) => {
        const date = dayjs.utc(`${year}-11-1`);
        if (date.day() === 6) {
          // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return dayjs.utc(`${year}-11-3`);
        } else {
          // Else, All Souls is the day after All Saints
          return dayjs.utc(`${year}-11-2`);
        }
      },
    },

    all_saints_of_wales: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-6',
    },

    dyfrig_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-14',
    },

    john_roberts_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-10',
    },

    // In England and Wales when this liturgical day falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    peter_and_paul_apostles: {
      date: (year) => {
        const date = dayjs.utc(`${year}-5-29`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      },
    },

    // In England and Wales when this liturgical day falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    assumption: {
      date: (year): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-8-15`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'week').startOf('week');
        } else {
          return date;
        }
      },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => this.dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
