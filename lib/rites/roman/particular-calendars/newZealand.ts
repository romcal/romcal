import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { PatronTitles, Titles } from '../../../constants/martyrology-metadata';

export class NewZealand extends CalendarDef {
  definitions: DateDefinitions = {
    waitangi_day: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-6',
    },

    paul_miki_and_companions_martyrs: {
      date: '2-7',
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-17',
    },

    mark_evangelist: {
      precedence: Precedences.ProperFeast_8f,
      date: '4-26',
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
    },

    peter_chanel_priest: {
      customLocaleKey: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      martyrology: ['peter_chanel_priest'],
      titles: [Titles.ProtoMartyrOfOceania, PatronTitles.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-24',
    },

    marcellin_champagnat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
    },

    dominic_de_guzman_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-8',
    },
  };
}
