import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://cahors.catholique.fr/eglise-pratique/services-et-mouvements/services-diocesains/service-des-vocations/article/les-saints-du-lot
export class France_Cahors extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse
    // This celebration was not included in the 1974 proper.
    alain_de_solminihac_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 3 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bertrand_of_aquileia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
      // The 1974 proper prescribed Common III; the 2025 Ordo prescribes Common IV.
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    florent_of_cahors_alithe_of_cahors_urcisse_of_cahors_bishops_and_all_holy_bishops_of_the_diocese_of_cahors: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 4 },
      martyrology: [
        'florent_of_cahors_bishop',
        'alithe_of_cahors_bishop',
        'urcisse_of_cahors_bishop',
        'all_holy_bishops_of_the_diocese_of_cahors',
      ],
      commonsDef: Common.Bishops,
    },

    // src:
    // - https://cahors.catholique.fr/sanctuaires-et-pelerinages/saints-saintes-martyrs-papes/sainte-marie-annette-pelras/article/17-juillet-fete-de-la-sainte
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper and the 2025 Ordo called Annette Pelras and her companions Blessed; the sixteen
    // Carmelites of Compiègne were canonized on December 18, 2024.
    annette_pelras_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 17 },
      martyrology: ['annette_pelras_virgin', { id: 'companions_martyrs', count: 15 }],
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    ours_of_cahors_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 28 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - https://cahors.catholique.fr/sanctuaires-et-pelerinages/saints-saintes-martyrs-papes/Antoine-Auriel-Constant/Bienheureux-Antoine-Auriel
    // This celebration was not included in the 1974 proper.
    antoine_auriel_constant_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 18 },
      martyrology: ['antoine_auriel_constant_priest', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper named only Blessed Claude Caïx and his companions.
    claude_caix_charles_carnus_jean_lacan_jean_antoine_segonds_pierre_jean_garrigues_priests_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: [
        'claude_caix_priest',
        'charles_carnus_priest',
        'jean_lacan_priest',
        'jean_antoine_segonds_priest',
        'pierre_jean_garrigues_priest',
        'companions_martyrs',
      ],
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_stephen_cahors_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 10 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper called Saint John Gabriel Perboyre Blessed; he was canonized in 1996.
    john_gabriel_perboyre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 11 },
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    fleur_of_issendolus_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
      commonsDef: Common.Virgins,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper called Christopher of Romandiola Saint; the current Ordo calls him Blessed.
    christopher_of_romandiola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 31 },
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 2025 Ordo prescribes Common IV and corrects the 1974 proper, which called Saint Namphaise a martyr.
    namphaise_of_cahors_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 13 },
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    didier_of_cahors_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 15 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 29 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    gerald_of_braga_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 5 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The Ordo prescribes a solemnity only in the cathedral. The diocesan feast and title as principal patron
    // come from the 1974 proper.
    stephen_the_first_martyr: {
      customLocaleId: 'stephen_the_first_martyr_and_principal_patron_of_the_diocese_of_cahors',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },
  };
}
