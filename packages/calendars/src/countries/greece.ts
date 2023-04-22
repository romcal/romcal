import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Greece: CalendarDefInput = {
  calendarId: 'greece',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    cyril_of_jerusalem_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 3, date: 18 },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 22 },
    },

    george_of_lydda_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 4, date: 23 },
    },

    irene_of_macedonia: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 5 },
    },

    our_lady_of_fatima: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 6, date: 27 },
    },

    margaret_of_antioch_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
    },

    pantaleon_of_nicomedia_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 27 },
    },

    lydia_of_philippi: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 8, date: 3 },
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedence.ProperMemorial_11b,
    },

    dionysius_the_areopagite_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
    },

    demetrius_of_thessaloniki_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 10, date: 26 },
    },

    presentation_of_the_blessed_virgin_mary: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 21 },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 6 },
    },

    spyridon_of_trimythous_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 12 },
    },
  },
};
