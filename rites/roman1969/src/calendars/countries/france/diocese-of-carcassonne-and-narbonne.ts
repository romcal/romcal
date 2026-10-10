import { CommonDefinition as Common, PatronTitle, Title, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://www.aude.catholique.fr/diocese-en-chiffres/
// - https://www.aude.catholique.fr/vivre-sa-foi/les-figures-de-la-misericorde-dans-laude/
export class France_CarcassonneNarbonne extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.newadvent.org/cathen/08556b.htm
    // The proper styles both saints as martyrs, while the historical source says that Saint Basilissa died
    // a natural death; her martyrology title therefore remains Virgin.
    julian_of_antioch_and_basilissa_of_antioch_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 9 },
      martyrology: ['julian_of_antioch_martyr', 'basilissa_of_antioch_virgin'],
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/5200/Bienheureux-Pierre-de-Castelnau.html
    peter_of_castelnau_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - https://www.aude.catholique.fr/vivre-sa-foi/les-figures-de-la-misericorde-dans-laude/louis-antoine-ormieres/
    // - https://www.causesanti.va/it/santi-e-beati/luis-antonio-rosa-ormieres.html
    // Blessed Louis-Antoine Ormières is absent from the 1974 proper because he was beatified in 2017.
    // Current sources attest his celebration on 16 January but do not specify its rank or a common.
    louis_antoine_ormieres_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    peter_nolasco_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
      commonsDef: Common.Religious,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.aude.catholique.fr/vivre-sa-foi/les-figures-de-la-misericorde-dans-laude/saint-gimer/
    gimer_of_carcassonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 13 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.aude.catholique.fr/vivre-sa-foi/les-figures-de-la-misericorde-dans-laude/saint-theodard/
    theodard_of_narbonne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 1 },
      commonsDef: Common.Bishops,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/1221/Saint-Berenger.html
    berenger_of_saint_papoul_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 27 },
      commonsDef: Common.Religious,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://saint-hilaire-aude.fr/abbaye/1000-ans-dhistoire
    hilary_of_carcassonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 4 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 7 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    germaine_cousin_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 15 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    john_francis_regis_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 16 },
      titles: [Title.Priest],
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/1582/Saints-Nazaire-et-Celse.html
    nazarius_of_milan_and_celsus_of_milan_martyrs_patrons_of_the_diocese_of_carcassonne_and_narbonne: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 28 },
      martyrology: [
        {
          id: 'nazarius_of_milan_martyr',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
        {
          id: 'celsus_of_milan_martyr',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
      ],
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://en.wikipedia.org/wiki/Justus_and_Pastor
    // The proper assigns this celebration to 7 August; other calendars commonly observe it on 6 August.
    justus_of_alcala_and_pastor_of_alcala_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
      martyrology: ['justus_of_alcala_martyr', 'pastor_of_alcala_martyr'],
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    roch_of_montpellier: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/12392/Bienheureux-Jean-Fran%C3%A7ois-Bousquet.html
    jean_francois_bousquet_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: ['jean_francois_bousquet_priest', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.aude.catholique.fr/vivre-sa-foi/monastere-invisible/septembre-michel-gabriel-raphael-archanges/
    // The 1974 proper prescribes a feast throughout the diocese. The current diocesan source identifies
    // Saint Michael as principal patron and assigns a solemnity at the cathedral. Since Romcal has no child
    // calendar for the cathedral, this calendar retains the feast inherited from the General Roman Calendar.
    michael_gabriel_and_raphael_archangels: {
      customLocaleId:
        'michael_gabriel_and_raphael_archangels_michael_principal_patron_of_the_diocese_of_carcassonne_and_narbonne',
      martyrology: [
        {
          id: 'michael_archangel',
          titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
        },
        'gabriel_archangel',
        'raphael_archangel',
      ],
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.aude.catholique.fr/vivre-sa-foi/les-figures-de-la-misericorde-dans-laude/saint-rustique/
    rusticus_of_narbonne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 26 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/181/Saint-Papoul.html
    papoul_of_lauragais_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_michael_carcassonne_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 11, date: 7 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 29 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.aude.catholique.fr/fete-de-la-saint-paul-serge/
    paul_of_narbonne_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 11 },
    },
  };
}
