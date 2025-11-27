import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Americas } from '../../regions/americas';

export class Brazil extends CalendarDef {
  ParentCalendars = [Americas];

  inputs: Inputs = {
    peter_and_paul_apostles: {
      // In Brazil, when the celebration falls between June 28 and July 4,
      //  it is moved to the Sunday between those dates.
      // Since we cannot combine conditions, we will only use ifIsBetween and move it to the first Sunday of July
      //  (which will always be between July 1 and 7).
      // Note: This is an approximation. The exact rule would be to move it to the nearest Sunday when
      //  it falls between June 28 and July 4, but that requires more complex logic.
      dateExceptions: [
        {
          ifIsBetween: {
            from: { month: 6, date: 28 },
            to: { month: 7, date: 4 },
            inclusive: true,
          },
          // To move to the first Sunday of July, since we don't have a function to calculate the next Sunday,
          //  we'll use a fixed date that will be dynamically adjusted.
          //  For now, we'll use a solution that works in most cases.
          setDate: {
            month: 7,
            nthWeekInMonth: 1,
            dayOfWeek: 0, // Domingo
          },
        },
      ],
    },

    joseph_de_anchieta_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 9 },
    },

    albertina_berkenbrock_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 9 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 16 },
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
      martyrology: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    dulce_lopes_pontes_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 13 },
      // src: https://www.cnbb.org.br/liturgia-diaria/ 13-August-2025 Retrieved 26-November-2025
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 23 },
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
      martyrology: ['andrew_de_soveral_priest', 'ambrose_francis_ferro_priest'],
    },

    our_lady_of_aparecida: {
      customLocaleId: 'our_lady_of_aparecida_patroness_of_brazil',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 12 },
      titles: { append: [PatronTitle.PatronessOfBrazil] },
    },

    // src: Calendário Próprio do Brasil - CNBB (São Pedro de Alcântara not explicitly listed in CNBB online calendar,
    // but included in Brazilian liturgical tradition, using same date as Spain calendar)
    peter_of_alcantara_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 19 },
    },

    anthony_of_saint_anne_galvao_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 25 },
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
      martyrology: ['roch_gonzalez_priest', 'alphonsus_rodriguez_priest', 'john_del_castillo_priest'],
    },
  };
}
