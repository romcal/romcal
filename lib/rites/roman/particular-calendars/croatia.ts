import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Croatia extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    aloysius_stepinac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-10',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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

    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-9',
    },

    our_lady_of_marija_bistrica: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-13',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    augustine_kazotic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-3',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    marko_krizin_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    nicholas_tavelic_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
