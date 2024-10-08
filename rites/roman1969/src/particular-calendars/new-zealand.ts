import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class NewZealand extends CalendarDef {
  inputs: Inputs = {
    waitangi_day: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 2, date: 6 },
    },

    paul_miki_and_companions_martyrs: {
      dateDef: { month: 2, date: 7 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 3, date: 17 },
    },

    mark_evangelist: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 4, date: 26 },
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    peter_chanel_priest: {
      customLocaleId: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      martyrology: ['peter_chanel_priest'],
      titles: [Title.ProtoMartyrOfOceania, PatronTitle.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 24 },
    },

    marcellin_champagnat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    dominic_de_guzman_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
    },

    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 8 },
    },
  };
}
