import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Americas } from './americas';

export class Brazil extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    joseph_de_anchieta_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    albertina_berkenbrock_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
      saints: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
      saints: ['andrew_de_soveral_priest', 'ambrose_francis_ferro_priest'],
    },

    our_lady_of_aparecida: {
      customLocaleKey: 'our_lady_of_aparecida_patroness_of_brazil',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '10-12',
      liturgicalColors: LiturgicalColors.WHITE,
      titles: (titles) => [...titles, 'Patroness of Brazil'],
    },

    anthony_of_saint_anne_galvao_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-25',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-19',
      saints: [
        'roch_gonzalez_priest',
        'alphonsus_rodriguez_priest',
        'john_del_castillo_priest',
      ],
    },
  };
}
