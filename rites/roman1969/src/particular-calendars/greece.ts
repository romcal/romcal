import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

import { Europe } from './europe';

export class Greece extends CalendarDef {
  ParentCalendar = Europe;

  particularConfig: ParticularConfig = {
    easterCalculationType: 'julian',
  };

  inputs: Inputs = {
    louise_de_marillac_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 15 },
    },

    cyril_of_jerusalem_bishop: {
      precedence: Precedences.ProperMemorial_11b,
    },

    adalbert_of_prague_bishop: {
      dateDef: { month: 4, date: 22 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperMemorial_11b,
    },

    irene_of_macedonia: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 5 },
    },

    mary_mother_of_the_church: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 13 },
    },

    our_lady_of_fatima: {
      dateDef: { month: 5, date: 15 },
    },

    isidore_the_farmer: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    marcellin_champagnat_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    emilie_de_vialar_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 17 },
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.ProperMemorial_11b,
    },

    margaret_of_antioch_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
    },

    pantaleon_of_nicomedia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 27 },
    },

    lydia_of_philippi_the_first_christian_of_europe: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 3 },
    },

    our_lady_of_faneromeni: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
    },

    dionysius_the_areopagite_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
    },

    demetrius_of_thessaloniki_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 26 },
    },

    presentation_of_the_blessed_virgin_mary: {
      precedence: Precedences.ProperFeast_8f,
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.ProperMemorial_11b,
    },

    our_lady_of_guadalupe: {
      dateDef: { month: 12, date: 10 },
    },

    spyridon_of_trimythous_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 12, date: 12 },
    },
  };
}
