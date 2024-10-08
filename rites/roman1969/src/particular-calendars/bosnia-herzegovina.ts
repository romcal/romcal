import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class BosniaHerzegovina extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    scholastica_of_nursia_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 9 },
    },

    aloysius_stepinac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 10 },
    },

    hosanna_of_cattaro_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    ivan_merz: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    leopold_mandic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 12 },
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 13 },
    },

    elijah_prophet: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 20 },
    },

    clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 27 },
      martyrology: ['clement_of_ohrid_bishop', 'gorazd_of_moravia_bishop', 'companions_martyrs'],
    },

    augustine_kazotic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 3 },
    },

    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    marko_krizin_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 7 },
    },

    gratia_of_cattaro_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 27 },
    },

    nicholas_tavelic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 14 },
    },
  };
}
