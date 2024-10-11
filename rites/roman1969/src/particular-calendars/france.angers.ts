import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { France } from './france';

// src:
// - mr_fr_2022_ed3_angers
// - https://foi.diocese49.org/IMG/pdf/2022-09-28_missel_propre_format_a5_.pdf
// - https://en.wikipedia.org/wiki/Roman_Catholic_Diocese_of_Angers
// - https://www.diocese49.org/mon-diocese/les-saints-de-lanjou/
export class France_Angers extends CalendarDef {
  ParentCalendar = France;

  inputs: Inputs = {
    // src: mr_fr_2022_ed3_angers
    maurus_of_glanfeuil_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    // src: mr_fr_2022_ed3_angers
    blessed_martyrs_of_angers: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 1 },
    },

    // src: mr_fr_2022_ed3_angers
    jean_theophane_venard_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
    },

    // src: mr_fr_2022_ed3_angers
    licinius_of_angers_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 13 },
    },

    // src: mr_fr_2022_ed3_angers
    noel_pinot_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 21 },
    },

    // src: mr_fr_2022_ed3_angers
    albinus_of_angers_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 1 },
    },

    // src: mr_fr_2022_ed3_angers
    mary_euphrasia_pelletier_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 24 },
    },

    // src: mr_fr_2022_ed3_angers
    jean_chevillard_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
      martyrology: ['jean_chevillard_martyr', 'companions_martyrs'],
    },

    // src: mr_fr_2022_ed3_angers
    holy_hermits_and_evangelists: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
    },

    // src: mr_fr_2022_ed3_angers
    jeanne_delanoue_of_the_cross_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 17 },
    },

    // src: mr_fr_2022_ed3_angers
    jean_robert_queneau_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: ['jean_robert_queneau_martyr', 'companions_martyrs'],
    },

    // src: mr_fr_2022_ed3_angers
    john_chrysostom_bishop: {
      dateDef: { month: 9, date: 12 },
    },

    // src: mr_fr_2022_ed3_angers
    maurilius_of_angers_bishop_second_patron_of_the_diocese_of_angers: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 9, date: 13 },
      martyrology: [
        {
          id: 'maurilius_of_angers_bishop',
          titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
        },
      ],
    },

    // src: mr_fr_2022_ed3_angers
    maurice_of_agaunum_and_companions_martyrs_patron_of_the_diocese_of_angers: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 9, date: 22 },
      martyrology: [
        {
          id: 'maurice_of_agaunum_martyr',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
        {
          id: 'companions_martyrs',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
      ],
    },

    // src: mr_fr_2022_ed3_angers
    florentius_of_anjou_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 25 },
    },

    // src: mr_fr_2022_ed3_angers
    rene_goupil_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 26 },
    },

    // src: mr_fr_2022_ed3_angers
    john_paul_ii_pope: {
      dateDef: { month: 10, date: 21 },
    },

    // src: mr_fr_2022_ed3_angers
    dedication_of_the_cathedral_of_saint_maurice_of_agaunum_angers_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 22 },
    },

    // src: mr_fr_2022_ed3_angers
    all_holy_bishops_of_the_diocese_of_angers: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 12 },
    },

    // src: mr_fr_2022_ed3_angers
    josaphat_kuntsevych_bishop: {
      dateDef: { month: 11, date: 13 },
    },
  };
}
