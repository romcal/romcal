import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Americas } from '@roman-rite/particular-calendars/americas';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Mexico extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    philip_of_jesus_de_las_casas_martyr: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-5',
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
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-21',
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
    },

    peter_de_zuniga_and_louis_flores_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
      martyrology: ['peter_de_zuniga_priest', 'louis_flores_priest'],
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
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-9',
    },

    our_lady_of_guadalupe: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => this.dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.PROPER_OF_TIME,
    },
  };
}
