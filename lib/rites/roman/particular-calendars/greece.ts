import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { InputDefinitions } from '@roman-rite/types/calendar-def';

export class Greece extends CalendarDef {
  inheritFrom = Europe;

  definitions: InputDefinitions = {
    cyril_of_jerusalem_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-18',
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-22',
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
    },

    irene_of_macedonia: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-5',
    },

    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-27',
    },

    margaret_of_antioch_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
    },

    pantaleon_of_nicomedia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-27',
    },

    lydia_of_philippi: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-3',
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
    },

    dionysius_the_areopagite_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-3',
    },

    demetrius_of_thessaloniki_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-26',
    },

    presentation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-21',
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-6',
    },

    spyridon_of_trimythous_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-12',
    },
  };
}
