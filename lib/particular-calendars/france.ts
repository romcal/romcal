import { PatronTitles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';
import { Europe } from './europe';

export class France extends CalendarDef {
  parentCalendar = Europe;

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    remigius_of_reims_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 18 },
    },

    ivo_of_kermartin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 19 },
    },

    joan_of_arc_virgin: {
      customLocaleId: 'joan_of_arc_virgin_copatroness_of_france',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 5, date: 30 },
      titles: { append: [PatronTitles.CopatronessOfFrance] },
    },

    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      martyrology: ['pothinus_of_lyon_bishop', 'blandina_of_lyon_virgin', 'companions_martyrs'],
    },

    clotilde_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    caesarius_of_arles_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      customLocaleId: 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france',
      titles: { append: [PatronTitles.CopatronessOfFrance] },
    },
  };
}
