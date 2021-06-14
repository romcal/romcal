import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class BosniaHerzegovina extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    scholastica_of_nursia_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    aloysius_stepinac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-10',
    },

    hosanna_of_cattaro_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
    },

    ivan_merz: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    leopold_mandic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-9',
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-13',
    },

    elijah_prophet: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-20',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-27',
      martyrology: [
        'clement_of_ohrid_bishop',
        'gorazd_of_moravia_bishop',
        'companions_martyrs',
      ],
    },

    augustine_kazotic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-3',
    },

    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
    },

    marko_krizin_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-7',
      liturgicalColors: LiturgicalColors.RED,
    },

    gratia_of_cattaro_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-27',
    },

    nicholas_tavelic_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-14',
    },
  };
}
