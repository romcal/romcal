import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://gcatholic.org/calendar/2025/FR-perp0-fr
// - https://www.perpignan.catholique.fr/notre-histoire/
// The 1974 proper prescribed a mandatory memorial of Saint Bernadette Soubirous. The current secondary
// calendar observes the optional memorial inherited from the French calendar.
export class France_PerpignanElne extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-perp0-fr
    // - https://nominis.cef.fr/contenus/saint/407/Saint-Pierre-Orseolo.html
    peter_urseolus_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 10 },
      commonsDef: Common.Religious,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-perp0-fr
    // The rank is now inherited from the French calendar, but the proper provides a complete Mass formulary.
    bernadette_soubirous_virgin: {
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2027/FR-perp0-fr
    // - https://nominis.cef.fr/contenus/saint/6660/Saint-Vincent-de-Collioure.html
    vincent_of_collioure_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 19 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-perp0-fr
    // - https://cathedrale-saint-jean-baptiste-de-perpignan.culture.gouv.fr/fr/un-edifice-au-coeur-denjeux-politiques-et-religieux-au-xviie-siecle
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_john_the_baptist_perpignan_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 5, date: 16 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-perp0-fr
    // - https://www.perpignan.catholique.fr/revivez-en-video-et-en-photos-lordination-sacerdotale-de-damien-de-ricard/
    nativity_of_john_the_baptist: {
      customLocaleId: 'nativity_of_john_the_baptist_principal_patron_of_the_diocese_of_perpignan_elne',
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-perp0-fr
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-perp0-fr
    // - https://nominis.cef.fr/contenus/saint/8567/Saint-Gaud%C3%A9ric.html
    // The 1974 proper listed Saint Gauderic simply as a memorial; the current source identifies him
    // as the second patron of the diocese.
    gauderic_of_vieville: {
      customLocaleId: 'gauderic_of_vieville_second_patron_of_the_diocese_of_perpignan_elne',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 10, date: 16 },
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
      commonsDef: Common.Saints,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-perp0-fr
    // - https://www.perpignan.catholique.fr/ce-dimanche-14-decembre-a-elne-la-fete-de-sainte-eulalie-et-sainte-julie/
    eulalia_of_merida_and_julia_of_merida_virgins_and_martyrs_patronesses_of_the_diocese_of_perpignan_elne: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 12, date: 10 },
      martyrology: [
        {
          id: 'eulalia_of_merida_virgin',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
        {
          id: 'julia_of_merida_virgin',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
      ],
    },
  };
}
