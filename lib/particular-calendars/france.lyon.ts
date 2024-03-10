import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { France } from './france';

export class France_Lyon extends CalendarDef {
  ParentCalendar = France;

  inputs: Inputs = {
    // src: mr_fr_2014_ed2_lyon
    gregory_x_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 10 },
    },

    // src: mr_fr_2014_ed2_lyon
    francis_de_sales_bishop: {
      customLocaleId: 'francis_de_sales_bishop_patron_of_the_clergy_of_the_archdiocese_of_lyon',
      titles: { append: [PatronTitle.PatronOfTheClergyOfTheArchdioceseOfLyon] },
    },

    // src: mr_fr_2014_ed2_lyon
    marie_of_saint_ignatius_claudine_thevenet_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
    },

    // src: mr_fr_2014_ed2_lyon
    jean_pierre_neel_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 19 },
    },

    // src: mr_fr_2014_ed2_lyon
    baldomerus_of_lyon_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 27 },
    },

    // src: mr_fr_2014_ed2_lyon
    nicetius_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 2 },
    },

    // src: mr_fr_2014_ed2_lyon
    epipodius_of_lyon_and_alexander_of_lyon_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 22 },
      martyrology: ['epipodius_of_lyon_martyr', 'alexander_of_lyon_martyr'],
    },

    // src: mr_fr_2014_ed2_lyon
    jean_louis_bonnard_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 4 },
    },

    // src: mr_fr_2014_ed2_lyon
    our_lady_of_fourviere: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { dateFn: 'easterSunday', addDay: 13 },
    },

    // src: mr_fr_2014_ed2_lyon
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      customLocaleId: 'pothinus_of_lyon_bishop_patron_the_city_of_lyon_blandina_of_lyon_virgin_and_companions_martyrs',
      precedence: Precedences.ProperFeast_8f,
      martyrology: [
        {
          id: 'pothinus_of_lyon_bishop',
          titles: [Title.Bishop, PatronTitle.PatronOfTheCityOfLyon, Title.Martyr],
        },
        'blandina_of_lyon_virgin',
        'companions_martyrs',
      ],
    },

    // src: mr_fr_2014_ed2_lyon
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      dateDef: { month: 6, date: 4 },
    },

    // src: mr_fr_2014_ed2_lyon
    marcellin_champagnat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    // src: mr_fr_2014_ed2_lyon
    john_francis_regis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    // src: mr_fr_2014_ed2_lyon
    innocent_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
    },

    // src: mr_fr_2014_ed2_lyon
    irenaeus_of_lyon_bishop: {
      customLocaleId: 'irenaeus_of_lyon_bishop_patron_of_the_archdiocese_of_lyon_and_companions_martyrs',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      martyrology: [
        {
          id: 'irenaeus_of_lyon_bishop',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
        'companions_martyrs',
      ],
    },

    // src: mr_fr_2014_ed2_lyon
    john_mary_vianney_priest: {
      precedence: Precedences.ProperFeast_8f,
    },

    // src: mr_fr_2014_ed2_lyon
    jacques_jules_bonnaud_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 1 },
      martyrology: ['jacques_jules_bonnaud_priest', 'companions_martyrs'],
    },

    // src: mr_fr_2014_ed2_lyon
    justus_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
    },

    // src: mr_fr_2014_ed2_lyon
    frederic_ozanam_founder: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
    },

    // src: mr_fr_2014_ed2_lyon
    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
    },

    // src: mr_fr_2014_ed2_lyon
    therese_marie_victoire_couderc_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
    },

    // src: mr_fr_2014_ed2_lyon
    annemund_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
    },

    // src: mr_fr_2014_ed2_lyon
    anthony_chevrier_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
    },

    // src: mr_fr_2014_ed2_lyon
    dismas_the_good_thief: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    // src: mr_fr_2014_ed2_lyon
    viator_of_lyon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },

    // src: mr_fr_2014_ed2_lyon
    dedication_of_the_cathedral_of_saint_john_the_baptist_lyon_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 24 },
    },

    // src: mr_fr_2014_ed2_lyon
    anthony_mary_claret_bishop: {
      dateDef: { month: 10, date: 26 },
    },

    // src: mr_fr_2014_ed2_lyon
    all_holy_bishops_of_the_archdiocese_of_lyon: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 5 },
    },

    // src: mr_fr_2014_ed2_lyon
    all_saints_of_the_archdiocese_of_lyon: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    // src: mr_fr_2014_ed2_lyon
    eucherius_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },
  };
}
