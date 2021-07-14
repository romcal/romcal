import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Americas } from '@roman-rite/particular-calendars/americas';
import { InputDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Brazil extends CalendarDef {
  inheritFrom = Americas;

  definitions: InputDefinitions = {
    joseph_de_anchieta_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
    },

    albertina_berkenbrock_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-9',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-16',
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
      martyrology: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-23',
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
      martyrology: ['andrew_de_soveral_priest', 'ambrose_francis_ferro_priest'],
    },

    our_lady_of_aparecida: {
      customLocaleKey: 'our_lady_of_aparecida_patroness_of_brazil',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '10-12',
      titles: (titles) => [...titles, PatronTitles.PatronessOfBrazil],
    },

    anthony_of_saint_anne_galvao_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-25',
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
  };
}
