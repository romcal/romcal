import { PatronTitles, Titles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia } from './slovakia';

// Diocese of Nitra, Slovakia
export class Slovakia_Nitra extends CalendarDef {
  pareNRCalendar = Slovakia;

  inputs: Inputs = {
    // 17 July [feast] Hermits, (Principal) Patrons of the Diocese
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      customLocaleKey: 'andrew_zorard_of_nitra_and_benedict_of_skalka_hermits_patrons_of_the_diocese',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitles.PatronOfTheDiocese] },
    },

    // 20 November [feast]
    dedication_of_the_basilica_of_saint_emmeram_of_regensburg_nitra_slovakia: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 11, date: 20 },
    },

    // 22 September [memorial] Bishop and Martyr, Title of the Basilica
    emmeram_of_regensburg_bishop_title_of_the_basilica: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 22 },
      titles: [Titles.Bishop, Titles.Martyr, PatronTitles.TitleOfTheCathedral]
    }
  };
}
