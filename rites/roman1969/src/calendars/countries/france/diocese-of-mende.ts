import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://gcatholic.org/calendar/2025/FR-mend1-fr
// - https://nominis.cef.fr/contenus/LessaintsdudiocesedeMende.pdf
// - https://www.diocese-mende.fr/wp-content/uploads/Annuaire-2020_Interieur_septembre2020_v2_WEB.pdf
export class France_Mende extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-mend1-fr
    firmin_of_mende_bishop_and_all_holy_bishops_of_the_diocese_of_mende: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 14 },
      martyrology: ['firmin_of_mende_bishop', 'all_holy_bishops_of_the_diocese_of_mende'],
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    bernadette_soubirous_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-mend1-fr
    // - https://nominis.cef.fr/contenus/LessaintsdudiocesedeMende.pdf
    ilpide_of_mende_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-mend1-fr
    // - https://nominis.cef.fr/contenus/LessaintsdudiocesedeMende.pdf
    // - https://www.diocese-mende.fr/lieux-daccueil-spirituel/lermitage-saint-privat/
    // The 1974 proper described Saint Privat as patron of the city of Mende and prescribed a solemnity
    // only there. Current diocesan sources identify him as patron of the city and diocese, whose calendar
    // observes his feast.
    privat_of_mende_bishop: {
      customLocaleId: 'privat_of_mende_bishop_principal_patron_of_the_diocese_of_mende',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 8, date: 21 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    // The 1974 proper limited this celebration to four churches, with different local precedences.
    // The current secondary calendar prescribes a memorial throughout the diocese.
    frezal_of_mende_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 4 },
      commonsDef: Common.Saints,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-mend1-fr
    // - https://nominis.cef.fr/contenus/LessaintsdudiocesedeMende.pdf
    // The 1974 proper did not assign a rank; the current secondary calendar prescribes a memorial and
    // incorrectly identifies the locally venerated saint as Véran of Vence. The proper and the diocesan
    // biographical source identify him as Véran of Cavaillon.
    veran_of_cavaillon_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 11 },
      commonsDef: Common.Bishops,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://nominis.cef.fr/contenus/LessaintsdudiocesedeMende.pdf
    // - https://www.diocese-mende.fr/wp-content/uploads/LVTAH00165-2025-08-PEEOrdiEpisc-Mende.pdf
    // The celebration is absent from the current secondary calendar, but the 1974 proper and current
    // diocesan sources still attest her local veneration. It is therefore retained as an optional memorial.
    enimie_of_gevaudan_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
      commonsDef: Common.Virgins,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2025/FR-mend1-fr
    // - https://www.diocese-mende.fr/jubile-des-401-ans-de-la-cathedrale/
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_our_lady_and_saint_privat_mende_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 10, date: 10 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    louvent_of_saint_privat_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 22 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    hilary_of_mende_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 25 },
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    // The 1974 proper did not assign a rank; the current secondary calendar prescribes a memorial.
    translation_of_the_relics_of_privat_of_mende_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 29 },
      martyrology: ['privat_of_mende_bishop'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_1974_ed1_region_apostolique_du_midi, https://gcatholic.org/calendar/2025/FR-mend1-fr
    // The 1974 proper prescribed a memorial; the current secondary calendar makes it optional.
    urban_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },
  };
}
