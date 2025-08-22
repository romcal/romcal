import { PatronTitle, Title } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://en.wikipedia.org/wiki/Roman_Catholic_Archdiocese_of_Toulouse
export class France_Toulouse extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    thomas_aquinas_priest: {
      precedence: Precedences.ProperFeast_8f,
    },

    peter_nolasco_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
    },

    erembert_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    hilarius_of_toulouse_bishop_and_sylvius_of_toulouse_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 20 },
      martyrology: ['hilarius_of_toulouse_bishop', 'sylvius_of_toulouse_bishop'],
    },

    raymond_costeran_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
      martyrology: ['raymond_costeran_martyr', 'companions_martyrs'],
    },

    aventin_of_larboust_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 13 },
    },

    germaine_cousin_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 6, date: 15 },
    },

    john_francis_regis_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 16 },
      titles: [Title.Priest],
    },

    raymond_gayrard_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 4 },
    },

    urban_ii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 28 },
    },

    louis_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
    },

    dedication_of_the_cathedral_of_saint_stephen_of_toulouse_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 8, date: 30 },
    },

    exuperius_of_toulouse_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 28 },
    },

    bertrand_of_comminges_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 16 },
    },

    urban_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    saturnin_of_toulouse_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 29 },
    },

    paul_of_narbonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 11 },
    },

    stephen_the_first_martyr: {
      customLocaleId: 'stephen_the_first_martyr_and_principal_patron_of_the_archdiocese_of_toulouse',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },
  };
}
