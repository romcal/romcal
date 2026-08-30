import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://albi.catholique.fr/liturgie-art-et-culture/histoire-du-diocese/saints-du-diocese/
export class France_Albi extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    // This was a mandatory memorial in the 2025 Ordo.
    pierre_francois_jamet_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 12 },
      commonsDef: Common.Pastors,
    },

    // Saint Vincent is a mandatory memorial only in Castres and the Gaillacois.
    // No child calendar is currently defined for this territory, so the local rank is not represented here.

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    dedication_of_the_cathedral_of_saint_cecilia_albi_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 4, date: 23 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    raymond_cayre_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
      martyrology: ['raymond_cayre_priest', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    emilie_de_vialar_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 17 },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    theodoric_balat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
      commonsDef: Common.Martyrs,
    },

    // Saint Benedict is already a feast in the Europe calendar and is a solemnity only in Castres Cathedral.
    // No child calendar is currently defined for the cathedral, so the local rank is not represented here.

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    eugenius_of_carthage_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 13 },
      commonsDef: Common.Bishops,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    sigolena_of_albi_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
      commonsDef: Common.Religious,
    },

    // Saint Bernard is inherited unchanged from the General Roman Calendar.

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    // This was a mandatory memorial in the 2025 Ordo.
    florent_dumontet_de_cardaillac_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 5 },
      commonsDef: Common.Martyrs,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    carissima_of_albi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 7 },
      commonsDef: Common.Virgins,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    salvius_of_albi_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 10 },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    vincent_de_paul_priest: {
      customLocaleId: 'vincent_de_paul_priest_patron_of_the_priests_of_the_archdiocese_of_albi',
      titles: { append: [PatronTitle.PatronOfThePriestsOfTheArchdioceseOfAlbi] },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    jeanne_emilie_de_villeneuve_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
      commonsDef: [Common.Virgins, Common.Religious],
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    martiana_of_albi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 5 },
      commonsDef: Common.Virgins,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    joseph_louis_marcou_and_joseph_henri_chamayou_religious_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 6 },
      martyrology: ['joseph_louis_marcou_religious', 'joseph_henri_chamayou_religious'],
      commonsDef: Common.Martyrs,
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    amarand_of_albi_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 7 },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    cecilia_of_rome_virgin: {
      customLocaleId: 'cecilia_of_rome_virgin_principal_patroness_of_the_archdiocese_of_albi',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      commonsDef: Common.None,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    // Saint Alain is celebrated only in Lavaur, where he is a solemnity.
    // Since no child calendar is currently defined for Lavaur, the celebration is provisionally included here as
    // an optional memorial so that it remains available. This precedence is a technical fallback and is not
    // prescribed for the rest of the archdiocese.
    // TODO: Move this celebration to a Lavaur child calendar when one is introduced.
    alain_of_lavaur: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
    },

    // src: https://albi.catholique.fr/wp-content/uploads/sites/24/2026/04/calendrier-liturgique-propre-du-diocese-dalbi.pdf
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 29 },
    },
  };
}
