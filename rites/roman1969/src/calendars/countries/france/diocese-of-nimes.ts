import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1984_ed1_nimes
// - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
// - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes-uzes-et-ales/
// - https://gcatholic.org/calendar/2027/FR-nime0-fr (secondary calendar)
export class France_Nimes extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a feast in Uzès; Romcal cannot currently scope the higher rank to that city.
    ferreolus_of_uzes_bishop: {
      dateDef: { month: 1, date: 4 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // - https://www.nimes-catholique.fr/wp-content/uploads/2026/01/2026.01.feuille.paroissiale.pdf
    // - https://gcatholic.org/calendar/2027/FR-nime0-fr (secondary calendar)
    // The 1984 proper and historical diocesan page call him Saint; current diocesan usage and the
    // secondary calendar identify him as Blessed.
    // The memorial is prescribed only in Saint-Gilles; it is retained as an optional memorial elsewhere.
    peter_of_castelnau_priest: {
      dateDef: { month: 1, date: 14 },
      precedence: Precedences.OptionalMemorial_12,
      customLocaleId: 'peter_of_castelnau_martyr',
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // - https://www.vatican.va/news_services/liturgy/2022/documents/ns_lit_doc_20220515_notificazione_it.html
    // The 1984 proper calls her Blessed; Marie Rivier was canonized on May 15, 2022.
    mary_rivier_virgin: {
      dateDef: { month: 2, date: 3 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // The memorial is prescribed only in Saint-Gilles; it is retained as an optional memorial elsewhere.
    reginald_of_orleans_priest: {
      dateDef: { month: 2, date: 12 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    pons_of_villeneuve_les_avignon_abbot: {
      dateDef: { month: 3, date: 5 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes-uzes-et-ales/
    // - https://gcatholic.org/calendar/2027/FR-nime0-fr (secondary calendar)
    // The 1984 proper prescribed an optional memorial; the secondary current calendar records a memorial.
    benezet_of_avignon: {
      dateDef: { month: 4, date: 14 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a solemnity in the city of Nîmes; Romcal cannot currently scope the higher rank to that city.
    baudilus_of_nimes_martyr: {
      dateDef: { month: 5, date: 20 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    gerard_of_lunel_hermit: {
      dateDef: { month: 5, date: 24 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    john_francis_regis_priest: {
      dateDef: { month: 6, date: 16 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    peter_of_luxembourg_bishop: {
      dateDef: { month: 7, date: 2 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    blessed_religious_martyrs_of_orange: {
      dateDef: { month: 7, date: 9 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    urban_ii_pope: {
      dateDef: { month: 7, date: 28 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    assumption_of_the_blessed_virgin_mary: {
      customLocaleId: 'assumption_of_the_blessed_virgin_mary_principal_patroness_of_the_diocese_of_nimes',
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    roch_of_montpellier: {
      dateDef: { month: 8, date: 16 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // The Nîmes proper provides a complete proper Mass, replacing the common inherited from the calendar of France.
    caesarius_of_arles_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a solemnity in Saint-Gilles; Romcal cannot currently scope the higher rank to that city.
    giles_of_saint_gilles_abbot: {
      dateDef: { month: 9, date: 1 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    bertrand_of_garrigues_priest: {
      dateDef: { month: 9, date: 6 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a solemnity in the cathedral; Romcal cannot currently scope the higher rank to that church.
    castor_of_apt_bishop: {
      dateDef: { month: 9, date: 25 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a feast in Uzès; Romcal cannot currently scope the higher rank to that city.
    firminus_of_uzes_bishop: {
      dateDef: { month: 10, date: 12 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    mary_of_clopas_and_salome_disciples: {
      dateDef: { month: 10, date: 22 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['mary_of_clopas_disciple', 'salome_disciple'],
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // This is a solemnity in the cathedral; the feast prescribed elsewhere in the diocese is retained here.
    dedication_of_the_cathedral_of_our_lady_and_saint_castor_nimes_france: {
      dateDef: { month: 10, date: 26 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    urban_v_pope: {
      dateDef: { month: 11, date: 6 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes-uzes-et-ales/
    // - https://gcatholic.org/calendar/2027/FR-nime0-fr (secondary calendar)
    // The 1984 proper prescribed an optional memorial; the secondary current calendar records a memorial.
    all_saints_of_the_diocese_of_nimes: {
      dateDef: { month: 11, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    // The 1984 Nîmes proper assigns this celebration to November 14, replacing the October date used in France.
    dedication_of_consecrated_churches: {
      dateDef: { month: 11, date: 14 },
      commonsDef: Common.DedicationAnniversary_Inside,
    },

    // src:
    // - mr_fr_1984_ed1_nimes
    // - https://www.nimes-catholique.fr/saints-du-diocese-de-nimes/
    leontius_of_frejus_bishop: {
      dateDef: { month: 12, date: 1 },
      precedence: Precedences.OptionalMemorial_12,
    },
  };
}
