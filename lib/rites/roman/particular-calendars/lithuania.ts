import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Lithuania extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    george_matulaitis_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },

    casimir_of_poland: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-4',
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-9',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    andrew_bobola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_the_gate_of_dawn: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-16',
    },

    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
    },

    hyacinth_of_poland_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-17',
    },

    nativity_of_mary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },
  };
}
