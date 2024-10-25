import { CommonDefinition as Common } from '../constants/commons';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class Europe extends CalendarDef {
  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      customLocaleId:
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronOfEurope] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    catherine_of_siena_virgin: {
      customLocaleId: 'catherine_of_siena_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    benedict_of_nursia_abbot: {
      customLocaleId: 'benedict_of_nursia_abbot_patron_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronOfEurope] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    bridget_of_sweden_religious: {
      customLocaleId: 'bridget_of_sweden_religious_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    teresa_benedicta_of_the_cross_stein_virgin: {
      customLocaleId: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
      commonsDef: Common.None,
    },
  };
}
