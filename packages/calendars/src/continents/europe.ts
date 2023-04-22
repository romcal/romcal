import { CalendarDefInput, PatronTitle, Precedence } from '@romcal/shared';

export const Europe: CalendarDefInput = {
  calendarId: 'europe',

  basedOn: ['general-roman'],

  inputs: {
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      customLocaleKey:
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronOfEurope] },
    },

    catherine_of_siena_virgin: {
      customLocaleKey: 'catherine_of_siena_virgin_copatroness_of_europe',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
    },

    benedict_of_nursia_abbot: {
      customLocaleKey: 'benedict_of_nursia_abbot_patron_of_europe',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronOfEurope] },
    },

    bridget_of_sweden_religious: {
      customLocaleKey: 'bridget_of_sweden_religious_copatroness_of_europe',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      customLocaleKey: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.CopatronessOfEurope] },
    },
  },
};
