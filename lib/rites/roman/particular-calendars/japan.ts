import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Japan extends CalendarDef {
  definitions: DateDefinitions = {
    paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-6',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_the_discovery_of_the_hidden_christians: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    peter_kibe_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-1',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    '205_blessed_martyrs_of_japan': {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-28',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_xavier_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '12-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
