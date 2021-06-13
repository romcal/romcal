import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Malta extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    publius_of_malta_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-22',
    },

    shipwreck_of_saint_paul_apostle: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '2-10',
    },

    mary_adeodata_pisani_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-25',
    },

    our_lady_of_sorrows: {
      precedence: Precedences.ProperFeast_8f,
      date: '4-15',
    },

    pius_v_pope: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-30',
    },

    george_preca_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-9',
    },

    ignatius_falzon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
    },

    catherine_of_alexandria_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-25',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
  };
}
