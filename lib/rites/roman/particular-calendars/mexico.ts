import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';

export class Mexico extends CalendarDef {
  definitions: DateDefinitions = {
    philip_of_jesus_de_las_casas_martyr: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-5',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    sebastian_de_aparicio_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-25',
    },

    maria_guadalupe_garcia_zavala_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
    },

    finding_of_the_holy_cross: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-3',
    },

    philip_and_james_apostles: {
      date: '5-4',
    },

    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-15',
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-21',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_perpetual_help: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
    },

    our_lady_of_refuge: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-4',
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-30',
    },

    bartholomew_dias_laurel_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    peter_de_zuniga_and_louis_flores_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    junipero_serra_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-30',
    },

    jose_maria_de_yermo_y_parres_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-19',
    },

    our_lady_of_mercy: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-24',
    },

    raphael_guizar_y_valencia_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-24',
    },

    miguel_agustin_pro_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-23',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-9',
    },

    our_lady_of_guadalupe_patroness_of_the_americas: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '12-12',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
