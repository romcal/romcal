import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_Nitra } from './slovakia.nitra';

// Basilica of Saint Emmeram of Regensburg in Parish of Nitra – Upper Town, Nitra, Slovakia
export class Slovakia_Nitra_Nitra_UpperTown_BasilicaOfSaintEmmeramOfRegensburg extends CalendarDef {
  pareNRCalendar = Slovakia_Nitra;

  inputs: Inputs = {
    // [cathedral] 22 September [solemnity] Bishop and Martyr, Title of the Basilica
    emmeram_of_regensburg_bishop_title_of_the_basilica: {
      precedence: Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c,
    },

    // [cathedral] 20 November [solemnity]
    dedication_of_the_basilica_of_saint_emmeram_of_regensburg_nitra_slovakia: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
    },
  };
}
