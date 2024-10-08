import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Portugal extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    gundisalvus_of_amarante_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 11 },
    },

    john_de_britto_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 4 },
    },

    five_wounds_of_the_lord: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 2, date: 7 },
    },

    theotonius_of_coimbra_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 18 },
    },

    jacinta_marto_and_francisco_marto: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 20 },
      martyrology: ['jacinta_marto', 'francisco_marto'],
    },

    john_of_god_duarte_cidade_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 3, date: 8 },
    },

    joan_of_portugal_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
    },

    our_lady_of_fatima: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 13 },
    },

    guardian_angel_of_portugal: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 10 },
    },

    anthony_of_padua_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 6, date: 13 },
    },

    sancha_of_portugal_and_mafalda_of_portugal_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
      martyrology: ['sancha_of_portugal_virgin', 'mafalda_of_portugal_virgin'],
    },

    teresa_of_portugal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
    },

    elizabeth_of_portugal: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 4 },
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },

      martyrology: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    bartholomew_of_the_martyrs_fernandes_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 18 },
    },

    beatrice_da_silva_meneses_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 1 },
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
    },

    gundisalvus_of_lagos_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 27 },
    },

    nuno_of_saint_mary_pereira_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 6 },
    },

    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 5 },

      martyrology: ['fructuosus_of_braga_bishop', 'martin_of_braga_bishop', 'gerald_of_braga_bishop'],
    },
  };
}
