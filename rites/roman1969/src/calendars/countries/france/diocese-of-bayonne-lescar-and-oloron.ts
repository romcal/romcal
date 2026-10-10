import { PatronTitle, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
// - https://diocese64.org/les-saints-du-diocese/
// The calendar source does not provide Mass formularies or references to commons,
// so no commonsDef is inferred for local celebrations.
export class France_BayonneLescarOloron extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 7 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    // The source prescribes a solemnity in the city of Bayonne only. Since no child
    // calendar exists for the city, the diocesan optional memorial is retained here.
    leon_of_bayonne_bishop_and_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 1 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    louis_edouard_cestac_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 27 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    andrew_hubert_fournet_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 13 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    michael_garicoits_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    jean_de_mayorga_religious_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
      martyrology: ['jean_de_mayorga_religious', 'companions_martyrs'],
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    galactorius_of_lescar_bishop_and_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 27 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    assumption_of_the_blessed_virgin_mary: {
      customLocaleId:
        'assumption_of_the_blessed_virgin_mary_titular_of_the_cathedral_and_patroness_of_france_and_the_diocese_of_bayonne',
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    // The source prescribes a solemnity in Lescar only. Since no child calendar exists
    // for the city, the diocesan optional memorial is retained here.
    julian_of_lescar_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 23 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    elizabeth_bichier_des_ages_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    mary_of_jesus_crucified_baouardy_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    francois_dardan_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: ['francois_dardan_priest', 'companions_martyrs'],
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    // The dedication is a solemnity in the cathedral itself and a feast throughout
    // the diocese; the diocesan rank is represented by this calendar.
    dedication_of_the_cathedral_of_saint_mary_of_bayonne_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 10 },
    },

    // src: https://diocese64.org/site/wp-content/uploads/2026/03/ANNUAIRE-DIOCESE-2025-2026-en-ligne-au-13-03-2026.pdf#page=341
    // The source prescribes a solemnity in Oloron only. Since no child calendar exists
    // for the city, the diocesan optional memorial is retained here.
    grat_of_oloron_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
    },
  };
}
