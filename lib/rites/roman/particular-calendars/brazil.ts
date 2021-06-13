import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Brazil extends CalendarDef {
  definitions: DateDefinitions = {
    joseph_de_anchieta_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    albertina_berkenbrock_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_aparecida_patroness_of_brazil: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '10-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    anthony_of_saint_anne_galvao_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-25',
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
  };
}
