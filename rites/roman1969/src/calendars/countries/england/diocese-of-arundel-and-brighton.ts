import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { England } from '.';

export class England_ArundelBrighton extends CalendarDef {
  ParentCalendars = [Europe, England];

  inputs: Inputs = {
    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    robert_southwell_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 21 },
      commonsDef: Common.Martyrs,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    carthusian_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
      commonsDef: Common.Martyrs,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    erkenwald_of_london_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 13 },
      commonsDef: Common.Bishops,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    richard_of_chichester_bishop: {
      customLocaleId: 'richard_of_chichester_bishop_secondary_patron_of_the_diocese_of_arundel_and_brighton',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
      commonsDef: Common.Bishops,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    thomas_garnet_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 23 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    // - https://www.abdiocese.org.uk/diocese/arundel-cathedral
    // This celebration is a solemnity in Arundel Cathedral.
    dedication_of_arundel_cathedral_england: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 7, date: 1 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    // Transferred from 1 July because of the anniversary of the dedication of Arundel Cathedral.
    oliver_plunket_bishop: {
      dateDef: { month: 7, date: 2 },
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    assumption_of_the_blessed_virgin_mary: {
      customLocaleId: 'assumption_of_the_blessed_virgin_mary_copatroness_of_the_diocese_of_arundel_and_brighton',
      titles: { append: [PatronTitle.CopatronessOfTheDiocese] },
    },

    // Earlier diocesan calendars observed this celebration as a memorial.
    // src:
    // - https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    // - https://arundelcathedral.uk/wp-content/uploads/2022/09/Newsletter-25-09-2022-02-10-2022.pdf
    blessed_martyrs_of_sussex: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 3 },
      commonsDef: Common.None,
    },

    // src: https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    wilfrid_of_york_bishop: {
      customLocaleId: 'wilfrid_of_york_bishop_secondary_patron_of_the_diocese_of_arundel_and_brighton',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
      commonsDef: [Common.Bishops, Common.Missionaries],
    },

    // src:
    // - https://cdn.prod.website-files.com/5ed93a8802f9816a9341c2a2/690c6cb4519d8389bb813f7f_Ordo%202026.pdf
    // - https://www.abdiocese.org.uk/diocese/arundel-cathedral
    philip_howard_martyr: {
      customLocaleId: 'philip_howard_martyr_patron_of_the_diocese_of_arundel_and_brighton',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 19 },
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
      commonsDef: Common.Martyrs,
    },
  };
}
