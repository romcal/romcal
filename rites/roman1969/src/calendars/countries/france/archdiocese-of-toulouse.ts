import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle, Title } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://en.wikipedia.org/wiki/Roman_Catholic_Archdiocese_of_Toulouse
export class France_Toulouse extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    thomas_aquinas_priest: {
      precedence: Precedences.ProperFeast_8f,
      commonsDef: Common.None,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    peter_nolasco_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    erembert_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse
    germier_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    hilarius_of_toulouse_bishop_and_sylvius_of_toulouse_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 20 },
      martyrology: ['hilarius_of_toulouse_bishop', 'sylvius_of_toulouse_bishop'],
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This was an optional memorial in the 1975 proper.
    raymond_costeran_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 29 },
      martyrology: ['raymond_costeran_martyr', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This was an optional memorial in the 1975 proper.
    aventin_of_larboust_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 13 },
      commonsDef: Common.Martyrs,
      // The Ordo allows Saint Anthony of Padua to be celebrated instead.
      allowSimilarRankItems: true,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    germaine_cousin_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 6, date: 15 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    john_francis_regis_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 16 },
      titles: [Title.Priest],
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse
    joseph_marie_cassant_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 17 },
      commonsDef: Common.Religious,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    raymond_gayrard_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 4 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper supplied a complete formulary; the 2025 Ordo prescribes Common IV.
    urban_ii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 28 },
      commonsDef: Common.Religious,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    louis_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    dedication_of_the_cathedral_of_saint_stephen_of_toulouse_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 8, date: 30 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    exuperius_of_toulouse_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 28 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    bertrand_of_comminges_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 16 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    urban_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 29 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    paul_of_narbonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 11 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    stephen_the_first_martyr: {
      customLocaleId: 'stephen_the_first_martyr_and_principal_patron_of_the_archdiocese_of_toulouse',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },
  };
}
