import { PatronTitles, Titles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia } from './slovakia';

// Archdiocese of Košice
export class Slovakia_Kosice extends CalendarDef {
  parentCalendar = Slovakia;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_elizabeth_of_hungary_kosice_slovakia: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 6 },
    },
    elizabeth_of_hungary_religious: {
      customLocaleKey: 'elizabeth_of_hungary_religious_title_of_the_cathedral',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitles.TitleOfTheCathedral] },
    },
    anna_kolesarova_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 20 },
      titles: [Titles.Virgin, Titles.Martyr]
    },
    andrew_apostle: {
      customLocaleKey: 'andrew_apostle_patron_of_the_archdiocese',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitles.PatronOfTheDiocese] },
    },
  };
}
