import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Americas } from '../../regions/americas';

export class Brazil extends CalendarDef {
  ParentCalendars = [Americas];

  inputs: Inputs = {
    peter_and_paul_apostles: {
      // No Brasil, quando a celebração cai entre 28 de junho e 4 de julho,
      // é transferida para o domingo entre essas datas.
      // Como não podemos combinar condições, vamos usar apenas ifIsBetween
      // e transferir para o primeiro domingo de julho (que sempre será entre 1 e 7 de julho).
      // Nota: Esta é uma aproximação. A regra exata seria transferir para o domingo
      // mais próximo quando cair entre 28 jun e 4 jul, mas isso requer lógica mais complexa.
      dateExceptions: [
        {
          ifIsBetween: {
            from: { month: 6, date: 28 },
            to: { month: 7, date: 4 },
            inclusive: true,
          },
          // Transferir para o primeiro domingo de julho
          // Como não temos uma função para calcular o próximo domingo,
          // vamos usar uma data fixa que será ajustada dinamicamente.
          // Por enquanto, vamos usar uma solução que funciona na maioria dos casos.
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
