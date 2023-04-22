import { CalendarDefInput, PatronTitle, Precedence } from '@romcal/shared';

export const America: CalendarDefInput = {
  calendarId: 'america',

  basedOn: ['general-roman'],

  inputs: {
    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_americas',
      precedence: Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: { append: [PatronTitle.PatronessOfTheAmericas] },
    },
  },
};
