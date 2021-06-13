import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Belgium extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    mutien_marie_wiaux_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    julie_billiart_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    damien_de_veuster_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    juliana_of_liege_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-31',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-17',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_berchmans_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
