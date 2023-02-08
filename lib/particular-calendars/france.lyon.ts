import { PatronTitles, Titles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { France } from './france';

export class France_Lyon extends CalendarDef {
  parentCalendar = France;

  inputs: Inputs = {
    gregory_x_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 10 },
    },

    francis_de_sales_bishop: {
      customLocaleId: 'francis_de_sales_bishop_patron_of_lyon_clergy',
      titles: { append: [PatronTitles.PatronOfTheLyonClergy] },
    },

    claudine_thevenet_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
    },

    jean_pierre_neel_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 19 },
    },

    baldomerus_of_lyon_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 27 },
    },

    nicetius_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 2 },
    },

    epipodius_and_alexander_of_lyon_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 22 },
      martyrology: ['epipodius_of_lyon_martyr', 'alexander_of_lyon_martyr'],
    },

    jean_louis_bonnard_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 4 },
    },

    our_lady_of_fourviere: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { dateFn: 'easterSunday', addDay: 13 },
    },

    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      customLocaleId: 'pothinus_of_lyon_bishop_patron_the_city_of_lyon_blandina_of_lyon_virgin_and_companions_martyrs',
      precedence: Precedences.ProperFeast_8f,
      martyrology: [
        {
          id: 'pothinus_of_lyon_bishop',
          titles: [Titles.Bishop, PatronTitles.PatronOfTheCityOfLyon, Titles.Martyr],
        },
        'blandina_of_lyon_virgin',
        'companions_martyrs',
      ],
    },

    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      dateDef: { month: 6, date: 4 },
    },

    marcellin_champagnat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    john_francis_regis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    innocent_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
    },

    irenaeus_of_lyon_bishop: {
      customLocaleId: 'irenaeus_of_lyon_bishop_patron_of_diocese_of_lyon_and_companions_martyrs',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      martyrology: [
        {
          id: 'irenaeus_of_lyon_bishop',
          titles: { append: [PatronTitles.PatronOfTheDiocese] },
        },
        'companions_martyrs',
      ],
    },

    john_mary_vianney_priest: {
      precedence: Precedences.ProperFeast_8f,
    },

    jacques_jules_bonnaud_martyr_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 1 },
      martyrology: ['jacques_jules_bonnaud_martyr', 'companions_martyrs'],
    },

    justus_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
    },

    frederic_ozanam_founder: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
    },

    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
    },

    therese_couderc_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
    },

    annemund_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
    },

    antoine_chevrier_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
    },

    the_penitent_thief: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    viator_of_lyon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },

    dedication_of_the_cathedral_saint_john_of_lyon_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 24 },
    },

    anthony_mary_claret_bishop: {
      dateDef: { month: 10, date: 26 },
    },

    all_the_holy_bishops_of_the_archdiocese_of_lyon: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 5 },
    },

    all_saints_of_the_archdiocese_of_lyon: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    eucherius_of_lyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },
  };
}
