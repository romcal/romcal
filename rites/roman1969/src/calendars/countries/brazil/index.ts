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
      // it is moved to the first Sunday of July, unless June 29 is already a Sunday.
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=20
      dateExceptions: [
        {
          ifIsBetween: {
            from: { month: 6, date: 28 },
            to: { month: 7, date: 4 },
            inclusive: true,
          },
          setDate: { month: 7, nthWeekInMonth: 1, dayOfWeek: 0 },
        },
        // If June 29 is already Sunday, keep it on that date
        { ifIsDayOfWeek: 0, setDate: { month: 6, date: 29 } },
      ],
    },

    ephrem_the_syrian_deacon: {
      // In Brazil, St Ephrem is transferred to June 8
      // because St Joseph de Anchieta is celebrated on June 9
      // src: `https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=79`
      dateDef: { month: 6, date: 8 },
    },

    joseph_de_anchieta_priest: {
      // src: https://diocesedeipameri.com.br/wp-content/uploads/2022/01/Direto%CC%81rio-da-Liturgia.pdf#page=43
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 9 },
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      // In Brazil, St Augustine Zhao Rong and companions are transferred to July 8
      // because St Paulina is celebrated on July 9
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=85
      dateDef: { month: 7, date: 8 },
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=85
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 9 },
    },

    our_lady_of_mount_carmel: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=86
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 16 },
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=87
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
      martyrology: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      // In Brazil, Sts Pontian and Hippolytus are transferred to August 12
      // because St Dulce Lopes Pontes is celebrated on August 13
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=92
      dateDef: { month: 8, date: 12 },
    },

    dulce_lopes_pontes_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 13 },
      // src: https://www.cnbb.org.br/liturgia-diaria/ 13-August-2025 Retrieved 26-November-2025
    },

    assumption_of_the_blessed_virgin_mary: {
      // In Brazil, the Assumption is moved to the Sunday within August 14-20,
      // unless August 15 is already a Sunday.
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=20
      dateExceptions: [
        {
          ifIsBetween: {
            from: { month: 8, date: 14 },
            to: { month: 8, date: 20 },
            inclusive: true,
          },
          setDate: { month: 8, nthWeekInMonth: 3, dayOfWeek: 0 },
        },
        // If August 15 is already Sunday, keep it on that date
        { ifIsDayOfWeek: 0, setDate: { month: 8, date: 15 } },
      ],
    },

    rose_of_lima_virgin: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=94
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 23 },
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=101
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
      martyrology: ['andrew_de_soveral_priest', 'ambrose_francis_ferro_priest'],
    },

    benedict_the_moor_religious: {
      // src: https://diocesedeipameri.com.br/wp-content/uploads/2022/01/Diretório-da-Liturgia.pdf#page=65
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 5 },
    },

    faustina_kowalska_virgin: {
      // In Brazil, St Faustina Kowalska is transferred to October 6
      // because St Benedict the Moor is celebrated on October 5
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=102
      dateDef: { month: 10, date: 6 },
    },

    our_lady_of_aparecida: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=102
      customLocaleId: 'our_lady_of_aparecida_patroness_of_brazil',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 12 },
      titles: { append: [PatronTitle.PatronessOfBrazil] },
    },

    peter_of_alcantara_priest: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=104
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
    },

    anthony_of_saint_anne_galvao_priest: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=105
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 25 },
    },

    all_saints: {
      // In Brazil, All Saints is moved to the Sunday within October 31 - November 6,
      // unless November 1 is already a Sunday.
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=20
      dateExceptions: [
        {
          ifIsBetween: {
            from: { month: 10, date: 31 },
            to: { month: 11, date: 6 },
            inclusive: true,
          },
          setDate: { month: 11, nthWeekInMonth: 1, dayOfWeek: 0 },
        },
        // If November 1 is already Sunday, keep it on that date
        { ifIsDayOfWeek: 0, setDate: { month: 11, date: 1 } },
      ],
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      // src: https://arquidiocesemilitar.org.br/wp-content/uploads/2025/01/DIRETORIO-LITURGICO-OMB-2025-1_compressed.pdf#page=110
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
      martyrology: ['roch_gonzalez_priest', 'alphonsus_rodriguez_priest', 'john_del_castillo_priest'],
    },
  };
}
