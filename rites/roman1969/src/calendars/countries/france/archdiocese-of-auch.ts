import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://nominis.cef.fr/contenus/Calendriersaintsgersois.pdf
// The proper also prescribes celebrations limited to Bassoues, Lectoure, Lombez, Lialores, and Eauze.
// No child calendars currently exist for these places, so their celebrations are provisionally included
// as optional memorials. This precedence is a technical fallback and is not prescribed for the rest of
// the archdiocese.
export class France_Auch extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Fris is a mandatory memorial only in Bassoues.
    // TODO: Move this celebration to a Bassoues child calendar when one is introduced.
    fris_of_bassoues_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://web.archive.org/web/20220526104623id_/https://diocese32.org/wp-content/uploads/2011/11/EQV-13_janv2018.pdf
    // This is a solemnity only in the cathedral; the archdiocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_mary_auch_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 2, date: 12 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/Calendriersaintsgersois.pdf
    // The diocesan historical overview lists 4 March; the 1974 proper and the 2025 Ordo use 5 March.
    luperc_of_eauze_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 3, date: 5 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/Calendriersaintsgersois.pdf
    // The calendar table in the 1974 proper lists 25 April, but its proper formulary and the diocesan
    // historical overview use 24 April. Neither source prescribes a rank, so an optional memorial is used.
    cerase_of_simorre_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    orens_of_auch_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 1 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Geny is a mandatory memorial only in Lectoure.
    // TODO: Move this celebration to a Lectoure child calendar when one is introduced.
    geny_of_lectoure_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Clair is a mandatory memorial only in Lectoure.
    // TODO: Move this celebration to a Lectoure child calendar when one is introduced.
    clair_of_lectoure_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Majan is a mandatory memorial only in Lombez.
    // TODO: Move this celebration to a Lombez child calendar when one is introduced.
    majan_of_lombez: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      commonsDef: Common.Saints,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    germaine_cousin_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    john_francis_regis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/12381/Bienheureux-Antoine-du-Bouzet-et-Bertrand-de-Caupenne.html
    antoine_charles_du_bouzet_bertrand_antoine_de_caupenne_priests_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 2 },
      martyrology: ['antoine_charles_du_bouzet_priest', 'bertrand_antoine_de_caupenne_priest', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Anthony is a solemnity only in Lialores.
    // TODO: Move this celebration to a Lialores child calendar when one is introduced.
    anthony_of_lialores_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 3 },
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // Saint Taurin is a mandatory memorial only in Eauze.
    // TODO: Move this celebration to an Eauze child calendar when one is introduced.
    taurin_of_eauze_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 5 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://web.archive.org/web/20230927154144id_/https://diocese32.org/wp-content/uploads/2023/09/En-sortie.pdf
    // This is a solemnity only in the cathedral; the archdiocesan calendar retains the feast prescribed
    // for the principal patroness.
    nativity_of_the_blessed_virgin_mary: {
      customLocaleId: 'nativity_of_the_blessed_virgin_mary_principal_patroness_of_the_archdiocese_of_auch',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    austinde_of_auch_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 25 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bertrand_of_comminges_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://web.archive.org/web/20240222103704id_/https://diocese32.org/wp-content/uploads/2023/12/Annuaire-2024.pdf
    leothade_of_auch_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 22 },
      commonsDef: Common.Bishops,
    },
  };
}
