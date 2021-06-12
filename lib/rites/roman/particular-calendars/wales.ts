import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import dayjs, { Dayjs } from 'dayjs';

export class Wales extends CalendarDef {
  definitions: DateDefinitions = {
    teilo_of_llandaff_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-9',
    },
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },
    david_of_wales_bishop_patron_of_wales: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '3-1',
      liturgicalColors: LiturgicalColors.WHITE,
    },
    beuno_of_wales_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-20',
    },
    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },
    asaph_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-5',
    },
    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-20',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },
    john_jones_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-12',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    bridget_of_sweden_religious_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-23',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },
    philip_evans_and_john_lloyd_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-25',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    germanus_of_auxerre_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-3',
    },
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },
    david_lewis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },
    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },
    richard_gwyn_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    six_welsh_martyrs_and_companions: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-25',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      date: (year: number): Dayjs => {
        const date = dayjs.utc(`${year}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${year}-11-2`);
        } else {
          return date;
        }
      },
    },
    all_souls: {
      date: (year: number): Dayjs => {
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
      liturgicalColors: LiturgicalColors.WHITE,
    },
    dyfrig_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-14',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    john_roberts_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-10',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    // In England and Wales when this liturgical day falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    peter_and_paul_apostles: {
      date: (year: number): Dayjs => {
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
      date: (year: number): dayjs.Dayjs => {
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
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
