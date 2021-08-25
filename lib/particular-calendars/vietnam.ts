import { CalendarDef, InputDefinitions, Precedences } from '../index';

export class Vietnam extends CalendarDef {
  definitions: InputDefinitions = {
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 13 },
    },
  };
}
