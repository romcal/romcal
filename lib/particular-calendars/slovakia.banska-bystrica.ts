import { Precedences } from '../constants/precedences';
import { PatronTitles } from '../constants/martyrology-metadata'
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia } from './slovakia';

// Diocese of Banská Bystrica, Slovakia
export class Slovakia_BanskaBystrica extends CalendarDef {
  parentCalendar = Slovakia;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_francis_xavier_banska_bystrica_slovakia: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 24 },
    },
    francis_xavier_priest: {
      customLocaleKey: 'francis_xavier_priest_patron_of_the_diocese_title_of_the_cathedral',
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      titles: { append: [PatronTitles.PatronOfTheDiocese, PatronTitles.TitleOfTheCathedral] },
    },
  };
}
