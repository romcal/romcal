import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Norway extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    thorfinn_of_hamar_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-8',
    },

    henry_of_finland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-19',
    },

    eysteinn_of_nidaros_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-26',
    },

    magnus_erlendsson_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-16',
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-18',
    },

    sunniva_of_norway_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-8',
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-10',
    },

    swithun_of_winchester_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-15',
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-20',
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-29',
    },

    nicholas_steno_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-25',
    },
  };
}
