import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { France } from './france';

export class France_SaintDenis extends CalendarDef {
  ParentCalendar = France;

  inputs: Inputs = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.ProperMemorial_11b,
    },

    most_holy_name_of_jesus: {
      dateDef: { month: 1, date: 4 },
    },

    our_lady_refuge_of_sinners: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    louise_de_marillac_religious: {
      dateDef: { month: 3, date: 15 },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
    },

    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
    },

    dedication_of_the_cathedral_basilica_of_saint_denis_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 6, date: 11 },
    },

    barnabas_apostle: {
      dateDef: { month: 6, date: 12 },
    },

    audoen_of_rouen_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 23 },
    },

    louis_ix_of_france: {
      precedence: Precedences.ProperMemorial_11b,
    },

    joseph_of_calasanz_priest: {
      dateDef: { month: 8, date: 26 },
    },

    blessed_martyrs_of_paris: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
    },

    denis_of_paris_bishop: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleId: 'denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis',
      dateDef: { month: 10, date: 9 },
      titles: [Title.Bishop, Title.Martyr, PatronTitle.PatronOfTheDiocese],
    },

    all_saints_of_the_diocese_of_saint_denis: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    eligius_of_noyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },
  };
}
