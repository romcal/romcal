import { PatronTitle, Precedence, ProperCycle, Title } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

export class Australia extends CalendarDef {
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: false,
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
  };

  inputs: Inputs = {
    patrick_of_ireland_bishop: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 3, date: 17 },
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    peter_chanel_priest: {
      customLocaleId: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedence.ProperMemorial_11b,
      martyrology: ['peter_chanel_priest'],
      titles: [Title.ProtoMartyrOfOceania, PatronTitle.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 24 },
    },

    peter_to_rot_martyr: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 8 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  };
}
