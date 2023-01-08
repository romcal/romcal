import { PatronTitles, Titles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_Nitra } from './slovakia.nitra';

// City of Nitra, Slovakia
export class Slovakia_Nitra_Nitra extends CalendarDef {
  pareNRCalendar = Slovakia_Nitra;

  inputs: Inputs = {
    // 17 July [solemnity] Hermit, Patron of the Town
    andrew_zorard_of_nitra_hermit_patron_of_the_town: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: [Titles.Hermit, PatronTitles.PatronOfTheCity],
    },
  };
}
