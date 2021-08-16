import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { France } from '@romcal/particular-calendars/france';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';

export class France_SaintDenis extends CalendarDef {
  parentCalendar = France;

  definitions: InputDefinitions = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.ProperMemorial_11b,
    },

    most_holy_name_of_jesus: {
      dateDef: { month: 1, date: 4 },
    },

    mary_refuge_of_sinner: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    louise_of_marillac: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 15 },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
    },

    marie_therese_de_soubiran_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
    },

    dedication_of_the_cathedral_of_saint_denis: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 6, date: 11 },
    },

    barnabas_apostle: {
      dateDef: { month: 6, date: 12 },
    },

    ouen_bishop: {
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
      customLocaleKey: 'denis_of_paris_bishop_patron_of_the_diocese_of_saint_denis',
      dateDef: { month: 10, date: 9 },
      titles: [Titles.Bishop, Titles.Martyr, PatronTitles.PatronOfTheDiocese],
    },

    all_the_saints_of_the_diocese_of_saint_denis: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    eloi_of_noyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },
  };
}
