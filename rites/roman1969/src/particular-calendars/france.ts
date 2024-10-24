import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

import { Europe } from './europe';

export class France extends CalendarDef {
  ParentCalendar = Europe;

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    genevieve_of_paris_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    // src: mr_fr_2021_ed3
    remigius_of_reims_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    // src: mr_fr_2021_ed3
    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 18 },
    },

    // src: mr_fr_2021_ed3
    louise_de_marillac_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 9 },
    },

    // src: mr_fr_2021_ed3
    ivo_of_kermartin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 19 },
    },

    // src: mr_fr_2021_ed3
    joan_of_arc_virgin: {
      customLocaleId: 'joan_of_arc_virgin_copatroness_of_france',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 5, date: 30 },
      titles: { append: [PatronTitle.CopatronessOfFrance] },
    },

    // src: mr_fr_2021_ed3
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      martyrology: ['pothinus_of_lyon_bishop', 'blandina_of_lyon_virgin', 'companions_martyrs'],
    },

    // src: mr_fr_2021_ed3
    clotilde_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    // src: mr_fr_2021_ed3
    louis_ix_of_france: {
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_2021_ed3
    joseph_of_calasanz_priest: {
      dateDef: { month: 8, date: 26 },
    },

    // src: mr_fr_2021_ed3
    caesarius_of_arles_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    // src: mr_fr_2021_ed3
    our_lady_of_la_salette: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
    },

    // src: mr_fr_2021_ed3
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      customLocaleId: 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france',
      titles: { append: [PatronTitle.CopatronessOfFrance] },
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      alternativeTransferDateDefs: [{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }],
      isOptional: true,
    },
  };
}
