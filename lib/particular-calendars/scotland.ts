import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { Europe } from '@romcal/particular-calendars/europe';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Scotland extends CalendarDef {
  parentCalendar = Europe;

  definitions: InputDefinitions = {
    kentigern_of_scotland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 13 },
    },

    john_ogilvie_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 3, date: 10 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 3, date: 17 },
    },

    columba_of_iona_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 9 },
    },

    ninian_of_whithorn_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 16 },
    },

    margaret_of_scotland: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 16 },
    },

    andrew_apostle: {
      customLocaleKey: 'andrew_apostle_patron_of_scotland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitles.PatronOfScotland] },
    },
  };
}
