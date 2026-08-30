import { PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

export class Switzerland extends CalendarDef {
  ParentCalendars = [Europe];

  inputs: Inputs = {
    // src:
    // - mr_fr_2021_ed3
    // - https://www.bischoefe.ch/st-nikolaus-von-fluee-schutzpatron-der-sbk/
    nicholas_of_flue_hermit: {
      customLocaleId: 'nicholas_of_flue_hermit_patron_of_switzerland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 9, date: 25 },
      titles: { append: [PatronTitle.PatronOfSwitzerland] },
    },
  };
}
