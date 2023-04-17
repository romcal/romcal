import { PatronTitle, Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Russia extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    george_matulaitis_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 27 },
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    angela_merici_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    george_of_lydda_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 6 },
    },

    theodosius_of_the_caves_abbot: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    our_lady_of_perpetual_help: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    leonid_feodorov_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    anthony_of_the_caves_monk: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    olga_of_kiev: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
    },

    boris_of_kiev_and_gleb_of_kiev_martyrs: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
      martyrology: ['boris_of_kiev_martyr', 'gleb_of_kiev_martyr'],
    },

    our_lady_of_czestochowa: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    our_lady_of_vladimir: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 7 },
    },

    faustina_kowalska_virgin: {
      precedence: Precedence.ProperMemorial_11b,
    },

    oleksiy_zarytskyi_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 10, date: 30 },
    },

    our_lady_of_the_gate_of_dawn: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 20 },
    },

    andrew_apostle: {
      customLocaleId: 'andrew_apostle_patron_of_russia',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfRussia] },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 6 },
    },
  };
}
