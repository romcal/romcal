import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Finland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    henry_of_finland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '1-19',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    hemming_of_turku_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-29',
    },

    elizabeth_hesselblad_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },

    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-20',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-29',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    nicholas_steno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
    },
  };
}
