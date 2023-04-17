import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Ukraine extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    marcelina_darowska_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 5 },
    },

    bronislaw_markiewicz_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 30 },
    },

    mary_mother_of_the_church: {
      precedence: Precedence.ProperFeast_8f,
    },

    andrew_bobola_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    john_nepomucene_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
    },

    albert_chmielowski_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 17 },
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    john_of_dukla_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
    },

    hedwig_of_poland: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    olga_of_kiev: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
    },

    our_lady_of_czestochowa: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    wladyslaw_bladzinski_priest_and_companions_martyrs: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
      martyrology: ['wladyslaw_bladzinski_priest', 'companions_martyrs'],
    },

    stanislaus_kostka_religious: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 18 },
    },

    joseph_bilczewski_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 23 },
    },
  };
}
