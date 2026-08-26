import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import type { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { England } from '.';

export class England_Westminster extends CalendarDef {
  ParentCalendars = [Europe, England];

  inputs: Inputs = {
    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    laurence_of_canterbury_dunstan_of_canterbury_and_theodore_of_canterbury_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 3 },
      martyrology: ['laurence_of_canterbury_bishop', 'dunstan_of_canterbury_bishop', 'theodore_of_canterbury_bishop'],
      commonsDef: Common.None,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    joseph_spouse_of_mary: {
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src:
    // - https://rcdow.org.uk/liturgy/
    // - https://rcdow.org.uk/wp-content/uploads/2025/03/april-19th-st-alphege.pdf
    alphege_of_canterbury_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 19 },
      commonsDef: Common.None,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    erkenwald_of_london_and_mellitus_of_canterbury_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 24 },
      martyrology: ['erkenwald_of_london_bishop', 'mellitus_of_canterbury_bishop'],
      commonsDef: Common.None,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    // Saint Dunstan is celebrated with Saints Laurence and Theodore on 3 February.
    dunstan_of_canterbury_bishop: {
      drop: true,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    alban_of_britain_martyr: {
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    // This celebration is a solemnity in Westminster Cathedral.
    john_southworth_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 27 },
      commonsDef: Common.None,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    // This celebration is a solemnity in Westminster Cathedral.
    dedication_of_westminster_cathedral_england: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 7, date: 1 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    // Saint Theodore is celebrated with Saints Laurence and Dunstan on 3 February.
    theodore_of_canterbury_bishop: {
      drop: true,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    // This celebration is a solemnity in the City of Westminster.
    edward_the_confessor: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    blessed_martyrs_of_douai: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 29 },
      commonsDef: Common.None,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    edmund_of_abingdon_bishop: {
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: https://rcdow.org.uk/wp-content/uploads/2026/05/Ordo-2026.pdf
    immaculate_conception_of_the_blessed_virgin_mary: {
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },
  };
}
