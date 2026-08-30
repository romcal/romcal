import { CommonDefinition as Common, ProperCycles, PatronTitle, Precedences, CalendarDef } from '@internal/generator';
import type { Inputs, ParticularConfig } from '@internal/generator';

import { Europe } from '../../regions/europe';

export class Luxembourg extends CalendarDef {
  ParentCalendars = [Europe];

  particularConfig: ParticularConfig = {
    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    epiphanyOnSunday: true,
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    irmina_of_oeren_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
      commonsDef: Common.Nuns,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    our_lady_comforter_of_the_afflicted: {
      customLocaleId: 'our_lady_comforter_of_the_afflicted_principal_patroness_of_luxembourg',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { dateFn: 'easterSunday', addDay: 27 },
      titles: { append: [PatronTitle.PrincipalPatronessOfLuxembourg] },
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    henry_ii_emperor_and_cunigunde_of_luxembourg: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 13 },
      commonsDef: Common.Saints,
      martyrology: ['henry_ii_emperor', 'cunigunde_of_luxembourg'],
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    schetzel_of_grunewald_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 11 },
      commonsDef: Common.Religious,
    },

    // In the General Roman Calendar, this celebration is an obligatory memorial. The current
    // Luxembourg Ordo gives it as an optional memorial alongside Blessed Schetzel.
    // src: https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    clare_of_assisi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    dedication_of_notre_dame_cathedral_luxembourg: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 8, date: 29 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // The 2021 French proper transferred this memorial to 30 August. The 2025-2026 Ordo states that
    // it is no longer celebrated in the Archdiocese of Luxembourg.
    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    passion_of_saint_john_the_baptist: {
      drop: true,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 18 },
      commonsDef: [Common.Martyrs, Common.Bishops],
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      alternativeTransferDateDefs: [{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }],
      isOptional: true,
      commonsDef: Common.DedicationAnniversary_Inside,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    hubert_of_liege_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
      commonsDef: Common.Bishops,
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.cathol.lu/fileadmin/user_upload/DOCUMENTS/ORDO/ORDO_2025-2026_WEB.pdf
    willibrord_of_utrecht_bishop: {
      customLocaleId: 'willibrord_of_utrecht_bishop_secondary_patron_of_luxembourg',
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 7 },
      titles: { append: [PatronTitle.SecondPatronOfLuxembourg] },
    },
  };
}
