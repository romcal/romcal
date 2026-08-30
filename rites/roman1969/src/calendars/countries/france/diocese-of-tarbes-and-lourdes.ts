import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://catholique65.fr/les-saints-de-nos-vallees/
export class France_TarbesLourdes extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    our_lady_of_lourdes: {
      precedence: Precedences.ProperFeast_8f,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperFeast_8f,
      commonsDef: Common.None,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    orens_of_auch_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 1 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    // The 1974 proper prescribed Common V; the 2025 Ordo prescribes Common IV.
    justin_of_bigorre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 6 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.causesanti.va/it/santi-e-beati/michele-garicoits.html
    michael_garicoits_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    misselin_of_tarbes_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
      commonsDef: Common.Saints,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    sever_of_rustan_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 2 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    // This is a solemnity only in the cathedral; the diocesan calendar retains the feast prescribed for
    // the principal patroness.
    nativity_of_the_blessed_virgin_mary: {
      customLocaleId: 'nativity_of_the_blessed_virgin_mary_principal_patroness_of_the_diocese_of_tarbes_and_lourdes',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    exuperius_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    savin_of_lavedan_hermit: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 9 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    bertrand_of_comminges_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://catholique65.fr/les-saints-de-nos-vallees/
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_our_lady_of_the_sede_tarbes_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 11, date: 20 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },
  };
}
