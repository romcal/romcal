import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Ukraine extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    marcelina_darowska_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 5 },
    },

    bronislaw_markiewicz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 30 },
    },

    mary_mother_of_the_church: {
      precedence: Precedences.ProperFeast_8f,
    },

    andrew_bobola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
    },

    albert_chmielowski_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 17 },
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    john_of_dukla_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
    },

    hedwig_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    olga_of_kiev: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
    },

    our_lady_of_czestochowa: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    wladyslaw_bladzinski_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
      martyrology: ['wladyslaw_bladzinski_priest', 'companions_martyrs'],
    },

    stanislaus_kostka_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 18 },
    },

    joseph_bilczewski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 23 },
    },
  };
}
