import { PatronTitles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_Kosice } from './slovakia.kosice';

// City of Košice
export class Slovakia_Kosice_Kosice extends CalendarDef {
  parentCalendar = Slovakia_Kosice;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_elizabeth_of_hungary_kosice_slovakia: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 9, date: 6 },
    },
    elizabeth_of_hungary_religious: {
      customLocaleKey: 'elizabeth_of_hungary_religious_title_of_the_cathedral_and_patroness_of_the_city',
      precedence: Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c,
      titles: { append: [PatronTitles.PatronOfTheCity] },
    },
  };
}
