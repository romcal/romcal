import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Slovakia_Bratislava } from './slovakia.bratislava';

// Cathedral of Saint Martin of Tours in the parish of Martin of Tours in Bratislava, Slovakia
export class Slovakia_Bratislava_MartinOfTours_CathedralOfSaintMartinOfTours extends CalendarDef {
  parentCalendar = Slovakia_Bratislava;

  inputs: Inputs = {
    john_the_merciful_of_alexandria_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 23 },
    },
    dedication_of_the_cathedral_of_saint_martin_of_tours_bishop_bratislava_slovakia: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
    },
    martin_of_tours_bishop: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 11, date: 11 },
    },
  };
}
