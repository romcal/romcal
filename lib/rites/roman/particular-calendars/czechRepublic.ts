import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { Dayjs } from 'dayjs';
import { Europe } from './europe';
import { PatronTitles } from '../../../constants/martyrology-metadata';
import { ProperCycles } from '../constants/cycles';

export class CzechRepublic extends CalendarDef {
  inheritFrom = Europe;

  particularConfig: ParticularConfig = {
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
    epiphanyOnSunday: false,
  };

  definitions: DateDefinitions = {
    our_lady_mother_of_christian_unity: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-18',
    },

    john_ogilvie_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-10',
    },

    // TODO: Should this key be dropped or kept in the CzechNational Proper?
    // {
    //   key: 'adalbert_of_prague_bishop',
    //   precedence: Precedences.ProperMemorial_OtherProperMemorial_11b,
    //   date: '4-23',
    // },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
    },

    sigismund_of_burgundy_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-30',
    },

    john_sarkander_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-6',
    },

    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-8',
    },

    john_nepomucene_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-16',
    },

    clement_mary_hofbauer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-20',
    },

    zdislava_of_lemberk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },

    vitus_of_lucania_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-15',
    },

    john_nepomucene_neumann_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-19',
    },

    procopius_of_sazava_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-4',
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      date: '7-5',
      // TODO: Should we add `Patrons of Moravia`?
    },

    hroznata_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-14',
    },

    ceslaus_of_poland_and_hyacinth_of_poland_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-17',
      martyrology: ['ceslaus_of_poland_priest', 'hyacinth_of_poland_priest'],
    },

    gorazd_of_moravia_and_companions: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-27',
      martyrology: ['gorazd_of_moravia', 'companions_martyrs'],
    },

    first_polish_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-25',
    },

    melchior_grodziecki_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-7',
    },

    charles_spinola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-10',
    },

    ludmila_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-16',
    },

    // Lowered rank
    // Moved from 16 Sep
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
    },

    wenceslaus_i_of_bohemia_martyr: {
      customLocaleKey:
        'wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: (titles) => [...titles, PatronTitles.PatronOfTheCzechNation],
    },

    lawrence_ruiz_and_companions_martyrs: {
      drop: true,
    },

    radim_of_gniezno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-12',
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
    },

    // TODO: Deal with this solemnity for consecrated churches
    //       with known consecration date (#136)
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      // TODO: On 25 Oct or the following Sunday
      date: '10-25',
    },

    wolfgang_of_regensburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-31',
    },

    agnes_of_bohemia_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-13',
    },

    edmund_campion_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-1',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
