import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_Kosice_Kosice } from './slovakia.kosice.kosice';

// Cathedral of Saint Elizabeth of Hugary in the Parish of Elizabeth of Hungary in Košice, Slovakia
export class Slovakia_Kosice_Kosice_ElizabethOfHungary_CathedralOfSaintElizabethOfHungary extends CalendarDef {
  parentCalendar = Slovakia_Kosice_Kosice;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_elizabeth_of_hungary_kosice_slovakia: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
    },
  };
}
