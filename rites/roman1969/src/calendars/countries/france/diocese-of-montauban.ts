import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://www.diocese-montauban.fr/le-diocese/histoire-et-patrimoine/saint-theodard/
// - https://www.diocese-montauban.fr/grand-montauban/paroisses/paroisse-montauban-ville-haute/eglises-et-paroisses/cathedrale-centre-ville/
export class France_Montauban extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    // The 2025 Ordo cannot confirm this observance because April 24 fell within the Octave of Easter.
    phoebadius_of_agen_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    // The 2025 Ordo cannot confirm this observance because April 27 was the Second Sunday of Easter.
    alpinien: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
      commonsDef: Common.Saints,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.diocese-montauban.fr/le-diocese/histoire-et-patrimoine/saint-theodard/
    // This celebration is a solemnity only in the city of Montauban. Since no child calendar is currently
    // defined for the city, the diocesan calendar retains the mandatory memorial prescribed outside it.
    theodard_of_narbonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 1 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This was an optional memorial in the 1974 proper.
    germaine_cousin_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    assumption_of_the_blessed_virgin_mary: {
      customLocaleId:
        'assumption_of_the_blessed_virgin_mary_patroness_of_france_and_principal_patroness_of_the_diocese_of_montauban',
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    antonin_of_pamiers_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper called Saint John Gabriel Perboyre Blessed; he was canonized in 1996.
    john_gabriel_perboyre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 11 },
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    emilie_de_rodat_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_our_lady_of_the_assumption_montauban_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 30 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    didier_of_cahors_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 15 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 29 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    gerald_of_braga_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 5 },
      commonsDef: Common.Bishops,
    },
  };
}
