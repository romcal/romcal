import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://ariege-catholique.fr/event/fete-de-saint-raymond-de-durban/
// - https://nominis.cef.fr/contenus/SaintsPamiers.pdf
// The proper also prescribes celebrations limited to Pamiers, Lézat and Escosse, Saint-Girons,
// Ax-les-Thermes, Saint-Ybars, and Mirepoix. No child calendars currently exist for these places,
// so their celebrations are provisionally included as optional memorials. This precedence is a
// technical fallback and is not prescribed for the rest of the diocese.
export class France_Pamiers extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://www.ariegepyrenees.com/patrimoine-culturel/cathedrale-saint-antonin/
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_antonin_pamiers_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 1, date: 9 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://ariege-catholique.fr/blog/2026/fete-de-saint-volusien-dimanche-18-janvier-2026/
    volusian_of_tours_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 18 },
      commonsDef: Common.Bishops,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/SaintsPamiers.pdf
    // Saint Sebastian is celebrated as a solemnity only in the city of Pamiers, of which he is patron.
    // TODO: Move this celebration to a Pamiers child calendar when one is introduced.
    sebastian_of_milan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/SaintsPamiers.pdf
    // Saint Arnère is a mandatory memorial only in Lézat and Escosse.
    // TODO: Move this celebration to Lézat and Escosse child calendars when they are introduced.
    arnere_of_lezat_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 16 },
      commonsDef: Common.Religious,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/6796/Saint-Girons.html
    // Saint Girons is celebrated as a solemnity only in Saint-Girons.
    // TODO: Move this celebration to a Saint-Girons child calendar when one is introduced.
    girons_of_hagetmau_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
      commonsDef: Common.Saints,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/12350/Saint-Udault.html
    // Saint Udault is a mandatory memorial only in Ax-les-Thermes.
    // TODO: Move this celebration to an Ax-les-Thermes child calendar when one is introduced.
    udault_of_ax_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 11 },
      commonsDef: Common.Martyrs,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    // This was an optional memorial in the 1974 proper.
    germaine_cousin_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    john_francis_regis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://ariege-catholique.fr/event/fete-de-saint-raymond-de-durban/
    raymond_of_barbastro_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    louis_of_toulouse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
      commonsDef: Common.Bishops,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    valier_of_couserans_and_lizier_of_couserans_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 26 },
      martyrology: ['valier_of_couserans_bishop', 'lizier_of_couserans_bishop'],
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/1784/Bienheureux-Martyrs-des-Carmes.html
    // eslint-disable-next-line @stylistic/max-len -- calendar id cannot be reflowed
    jean_marie_du_lau_bishop_jean_francois_bonnel_de_pradal_francois_urbain_salins_de_niart_priests_and_companions_martyrs:
      {
        precedence: Precedences.OptionalMemorial_12,
        dateDef: { month: 9, date: 1 },
        martyrology: [
          'jean_marie_du_lau_bishop',
          'jean_francois_bonnel_de_pradal_priest',
          'francois_urbain_salins_de_niart_priest',
          'companions_martyrs',
        ],
        commonsDef: Common.Martyrs,
      },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://ariege-catholique.fr/blog/2019/saint-antonin-ses-conseils-pour-aujourdhui/
    // This is a solemnity only in the cathedral; the diocesan calendar retains the feast prescribed for
    // the principal patron.
    antonin_of_pamiers_martyr: {
      customLocaleId: 'antonin_of_pamiers_martyr_principal_patron_of_the_diocese_of_pamiers',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 9, date: 2 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/SaintsPamiers.pdf
    // Saint Cibar is celebrated as a solemnity only in Saint-Ybars.
    // TODO: Move this celebration to a Saint-Ybars child calendar when one is introduced.
    cibar_of_saint_ybars_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 16 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/SaintsPamiers.pdf
    // Saint Maurice and his companions are celebrated as a solemnity only in Mirepoix, of which Saint
    // Maurice is patron.
    // TODO: Move this celebration to a Mirepoix child calendar when one is introduced.
    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/1911/Saint-Ysarn.html
    ysarn_of_saint_victor_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/10532/Saint-Anastase.html
    anastasius_the_venetian_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
      commonsDef: Common.Religious,
    },

    // src:
    // - ordo_fr_2025_province_ecclesiastique_de_toulouse
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/saint/8567/Saint-Gaud%C3%A9ric.html
    gauderic_of_vieville: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
      commonsDef: Common.Saints,
    },

    // src: ordo_fr_2025_province_ecclesiastique_de_toulouse, mr_fr_1974_ed1_region_apostolique_du_midi
    saturnin_of_toulouse_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 29 },
    },
  };
}
