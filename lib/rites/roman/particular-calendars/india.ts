import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class India extends CalendarDef {
  definitions: DateDefinitions = {
    kuriakose_elias_of_the_holy_family_chavara_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    joseph_vaz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-16',
    },

    john_de_britto_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-4',
    },

    gundisalvus_garcia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
    },

    mary_theresa_chiramel_mankidiyan_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-8',
    },

    thomas_apostle: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '7-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-28',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    teresa_of_calcutta_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_xavier_priest: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '12-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
