import { ProperCycles } from '../constants/cycles';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

import { Europe } from './europe';

export class CzechRepublic extends CalendarDef {
  ParentCalendar = Europe;

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: false,
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
  };

  inputs: Inputs = {
    our_lady_mother_of_christian_unity: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 18 },
    },

    john_ogilvie_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 10 },
    },

    // TODO: Should this celebration be dropped or kept in the Czech National Proper?
    // adalbert_of_prague_bishop: {
    //   precedence: Precedences.ProperMemorial_OtherProperMemorial_11b,
    // },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
    },

    sigismund_of_burgundy_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 30 },
    },

    john_sarkander_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 6 },
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 16 },
    },

    clement_mary_hofbauer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 20 },
    },

    zdislava_of_lemberk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 30 },
    },

    vitus_of_lucania_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 15 },
    },

    john_nepomucene_neumann_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 19 },
    },

    procopius_of_sazava_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      dateDef: { month: 7, date: 5 },
      // TODO: Should we add `Patrons of Moravia`?
    },

    hroznata_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    ceslaus_of_poland_and_hyacinth_of_poland_priests: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 17 },
      martyrology: ['ceslaus_of_poland_priest', 'hyacinth_of_poland_priest'],
    },

    gorazd_of_moravia_and_companions: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 27 },
      martyrology: ['gorazd_of_moravia', 'companions_martyrs'],
    },

    first_polish_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 25 },
    },

    melchior_grodziecki_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 7 },
    },

    charles_spinola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 10 },
    },

    ludmila_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 16 },
    },

    // Lowered rank
    // Moved from 16 Sep
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    wenceslaus_i_of_bohemia_martyr: {
      customLocaleId: 'wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheCzechNation] },
    },

    lawrence_ruiz_and_companions_martyrs: {
      drop: true,
    },

    radim_of_gniezno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },

    wolfgang_of_regensburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 31 },
    },

    agnes_of_bohemia_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 13 },
    },

    edmund_campion_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
