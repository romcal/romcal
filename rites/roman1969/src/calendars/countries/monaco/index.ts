import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef, Inputs, ParticularConfig } from '@internal/generator';

import { Europe } from '../../regions/europe';

// src:
// - mr_fr_2021_ed3
// - https://saintedevote.diocese.mc/annuaire_diocesain_2026_v2.pdf
export class Monaco extends CalendarDef {
  ParentCalendars = [Europe];

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
  };

  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    honoratus_of_arles_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 16 },
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://saintedevote.diocese.mc/annuaire_diocesain_2026_v2.pdf
    devota_of_corsica_virgin: {
      customLocaleId: 'devota_of_corsica_virgin_principal_patroness_of_monaco',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 1, date: 27 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
      commonsDef: Common.None,
      isHolyDayOfObligation: true,
    },

    // src: mr_fr_2021_ed3
    angela_merici_virgin: {
      dateDef: { month: 1, date: 29 },
    },

    // src: mr_fr_2021_ed3
    pontius_of_cimiez_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    hospitius_of_nice_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    // This celebration is a solemnity in the cathedral itself.
    dedication_of_the_cathedral_of_our_lady_immaculate_monaco: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 6, date: 11 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: mr_fr_2021_ed3
    barnabas_apostle: {
      dateDef: { month: 6, date: 12 },
    },

    // src: mr_fr_2021_ed3
    sixtus_ii_pope_and_companions_martyrs: {
      dateDef: { month: 8, date: 3 },
    },

    // src: mr_fr_2021_ed3
    cajetan_of_thiene_priest: {
      dateDef: { month: 8, date: 3 },
    },

    // src: mr_fr_2021_ed3
    teresa_benedicta_of_the_cross_stein_virgin: {
      dateDef: { month: 8, date: 7 },
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://diocese.mc/actualite/retour-en-images-sur-les-festivites-de-la-saint-roman
    romanus_ostiarius_martyr: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 9 },
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    aurelia_of_rome_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 11 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    clare_of_assisi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_2021_ed3
    roch_of_montpellier: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 16 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    stephen_i_of_hungary: {
      dateDef: { month: 8, date: 17 },
    },

    // src: mr_fr_2021_ed3
    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
      commonsDef: Common.None,
    },
  };
}
