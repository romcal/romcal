import { PatronTitles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';

export class Europe extends CalendarDef {
  definitions: InputDefinitions = {
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      customLocaleKey:
        'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      martyrology: ['cyril_the_philosopher_monk', 'methodius_of_thessaloniki_bishop'],
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.CopatronOfEurope] },
    },

    catherine_of_siena_virgin: {
      customLocaleKey: 'catherine_of_siena_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.CopatronessOfEurope] },
    },

    benedict_of_nursia_abbot: {
      customLocaleKey: 'benedict_of_nursia_abbot_patron_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.PatronOfEurope] },
    },

    bridget_of_sweden_religious: {
      customLocaleKey: 'bridget_of_sweden_religious_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.CopatronessOfEurope] },
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      customLocaleKey: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitles.CopatronessOfEurope] },
    },
  };
}
