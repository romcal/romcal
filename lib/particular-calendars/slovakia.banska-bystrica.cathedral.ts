import { PatronTitles } from '../constants/martyrology-metadata'
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_BanskaBystrica } from './slovakia.banska-bystrica'

// Parish of Banská Bystrica – Cathedral, Banská Bystrica, Slovakia
export class Slovakia_BanskaBystrica_Cathedral extends CalendarDef {
  parentCalendar = Slovakia_BanskaBystrica;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_francis_xavier_banska_bystrica_slovakia: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 9, date: 24 },
    },
    francis_xavier_priest: {
      customLocaleKey: 'francis_xavier_priest_patron_of_the_diocese_title_of_the_cathedral',
      precedence: Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c,
      titles: { append: [PatronTitles.PatronOfTheDiocese, PatronTitles.TitleOfTheCathedral] },
    },
  };
}
