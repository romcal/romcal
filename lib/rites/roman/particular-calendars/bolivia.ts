import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Americas } from '@roman-rite/particular-calendars/americas';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { Dates } from '@roman-rite/utils/dates';
import { Dayjs } from 'dayjs';

export class Bolivia extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
      martyrology: [
        'philip_of_jesus_de_las_casas_martyr',
        'paul_miki_martyr',
        'companions_martyrs',
      ],
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-23',
    },

    mariana_of_jesus_de_paredes_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-25',
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-23',
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-12',
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-14',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '7-16',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-23',
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
    },

    john_macias_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-18',
    },

    louis_bertrand_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    miguel_febres_cordero_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
    },

    anthony_mary_claret_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-24',
    },

    martin_de_porres_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-19',
      martyrology: [
        'roch_gonzalez_priest',
        'alphonsus_rodriguez_priest',
        'john_del_castillo_priest',
      ],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => this.dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
