import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';
import { PatronTitles } from '../../../constants/martyrology-metadata';

export class Scotland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    kentigern_of_scotland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-13',
    },

    john_ogilvie_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-10',
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-17',
    },

    columba_of_iona_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
    },

    ninian_of_whithorn_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-16',
    },

    margaret_of_scotland: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-16',
    },

    andrew_apostle: {
      customLocaleKey: 'andrew_apostle_patron_of_scotland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: (titles) => [...titles, PatronTitles.PatronOfScotland],
    },
  };
}
