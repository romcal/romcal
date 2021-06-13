import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Bolivia extends CalendarDef {
  definitions: DateDefinitions = {
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    mariana_of_jesus_de_paredes_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-25',
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-12',
    },

    francis_solanus_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '7-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
    },

    john_macias_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-18',
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    martin_de_porres_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-19',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

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
