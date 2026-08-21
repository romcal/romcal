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
// - https://rodez.catholique.fr/diocese/presentation/historique
// The proper also prescribes the solemnity of Saint Africain only in Saint-Affrique. No child calendar
// currently exists for Saint-Affrique, so the celebration is provisionally included as an optional memorial.
// This precedence is a technical fallback and is not prescribed for the rest of the diocese.
export class France_Rodez extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/5219/Sainte-Tarcice.html
    tarcisse_of_rodez_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
      commonsDef: Common.Virgins,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/11462/Saint-Georges.html
    george_of_vabres_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 19 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/6685/Saint-Affrique.html
    // Saint Africain is celebrated as a solemnity only in Saint-Affrique.
    // TODO: Move this celebration to a Saint-Affrique child calendar when one is introduced.
    africain_of_comminges_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 30 },
      commonsDef: Common.Saints,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://rodez.catholique.fr/blog-du-synode/150-ans-du-couronnement-de-la-statue-de-ceignac-et-fete-des-vierges-couronnees-de
    // The 2025 Ordo prescribes an optional memorial for the diocese. The 2026 diocesan article describes
    // the celebration as a solemn feast at the sanctuary of Ceignac; since no child calendar currently
    // exists for Ceignac, the diocesan calendar retains the optional memorial.
    our_lady_of_ceignac: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
      commonsDef: Common.BlessedVirginMary,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_our_lady_of_the_assumption_rodez_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 6, date: 20 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // The 1974 proper did not name Blessed Claude Caïx in the Rodez celebration; the current Ordo does.
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
    emilie_de_rodat_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 19 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://abbaye-conques.org/histoire-sainte-foy
    faith_of_agen_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 6 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/7081/Saint-Gaubert.html
    gausbert_of_montsalvy_and_bernard_of_rodez_abbots: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
      martyrology: ['gausbert_of_montsalvy_abbot', 'bernard_of_rodez_abbot'],
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/8834/Saint-Amans-de-Rodez.html
    amans_of_rodez_bishop: {
      customLocaleId: 'amans_of_rodez_bishop_principal_patron_of_the_diocese_of_rodez',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 11, date: 4 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/9062/Saint-Dalmas.html
    // - https://nominis.cef.fr/contenus/saint/9132/Saint-Quintien.html
    // The 1974 proper listed Saint Quintien before Saint Dalmas; the current Ordo reverses their order.
    dalmas_of_rodez_and_quintien_of_rodez_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 13 },
      martyrology: ['dalmas_of_rodez_bishop', 'quintien_of_rodez_bishop'],
      commonsDef: Common.Bishops,
    },
  };
}
