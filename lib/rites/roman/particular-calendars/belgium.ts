import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Belgium extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    mutien_marie_wiaux_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-30',
    },

    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    julie_billiart_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-8',
    },

    damien_de_veuster_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
    },

    juliana_of_liege_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-7',
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-31',
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-17',
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
    },

    john_berchmans_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-26',
    },
  };
}
