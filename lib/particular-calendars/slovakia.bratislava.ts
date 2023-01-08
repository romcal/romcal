import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia } from './slovakia';

// Archdiocese of Bratislava, Slovakia
export class Slovakia_Bratislava extends CalendarDef {
  parentCalendar = Slovakia;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_saint_martin_of_tours_bishop_bratislava_slovakia: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 3, date: 10 },
    },
    martin_of_tours_bishop: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 11, date: 11 },
    },
  };
}
