import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Russia extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    george_matulaitis_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 27 },
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 6 },
    },

    theodosius_of_the_caves_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    our_lady_of_perpetual_help: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    leonid_feodorov_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    anthony_of_the_caves_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    olga_of_kiev: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
    },

    boris_of_kiev_and_gleb_of_kiev_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
      martyrology: ['boris_of_kiev_martyr', 'gleb_of_kiev_martyr'],
    },

    our_lady_of_czestochowa: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    our_lady_of_vladimir: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 7 },
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
    },

    oleksiy_zarytskyi_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 30 },
    },

    our_lady_of_the_gate_of_dawn: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 20 },
    },

    andrew_apostle: {
      customLocaleId: 'andrew_apostle_patron_of_russia',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfRussia] },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 6 },
    },
  };
}
