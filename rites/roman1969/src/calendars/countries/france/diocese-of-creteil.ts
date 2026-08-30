import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
// - https://catholiques-val-de-marne.cef.fr/diocese/grandes-figures-diocese/
// - https://eglise.catholique.fr/actualites/404329-a-creteil-la-cathedrale-fait-signe-dans-la-ville/
// - https://dioceseparis.fr/homelie-du-cardinal-andre-vingt-37359.html
export class France_Creteil extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    genevieve_of_paris_virgin: {
      customLocaleId: 'genevieve_of_paris_virgin_second_patroness_of_the_diocese_of_creteil',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    most_holy_name_of_jesus: {
      dateDef: { month: 1, date: 4 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    joan_of_france_foundress: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 4 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    isabelle_of_france_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 24 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    madeleine_sophie_barat_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    agoard_of_creteil_and_aglibert_of_creteil_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
      martyrology: ['agoard_of_creteil_martyr', 'aglibert_of_creteil_martyr'],
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    louis_ix_of_france: {
      customLocaleId: 'louis_ix_of_france_patron_of_the_diocese_of_creteil',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    blessed_martyrs_of_paris: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      commonsDef: Common.Martyrs,
    },

    // The 2009 proper celebrated the former cathedral dedication on September 22
    // (the dedication took place on September 21, 2003). The current date follows
    // the dedication of the redeveloped cathedral on September 20, 2015.
    // src:
    // - mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    // - https://eglise.catholique.fr/actualites/404329-a-creteil-la-cathedrale-fait-signe-dans-la-ville/
    // - https://dioceseparis.fr/homelie-du-cardinal-andre-vingt-37359.html
    dedication_of_the_cathedral_of_notre_dame_of_creteil_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 20 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    denis_of_paris_bishop: {
      customLocaleId: 'denis_of_paris_bishop_second_patron_of_the_diocese_of_creteil',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 10, date: 9 },
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    denis_of_paris_bishop_and_companions_martyrs: {
      drop: true,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    all_saints_of_the_diocese_of_creteil: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },
  };
}
