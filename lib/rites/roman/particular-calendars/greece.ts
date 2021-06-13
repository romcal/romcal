import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Greece extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    cyril_of_jerusalem_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-18',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-22',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    irene_of_macedonia: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-27',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    margaret_of_antioch_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    pantaleon_of_nicomedia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    lydia_of_philippi: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dionysius_the_areopagite_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    demetrius_of_thessaloniki_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    presentation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    spyridon_of_trimythous_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-12',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
