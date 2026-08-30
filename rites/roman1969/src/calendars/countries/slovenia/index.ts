import { Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

export class Slovenia extends CalendarDef {
  ParentCalendars = [Europe];

  inputs: Inputs = {
    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },
  };
}
