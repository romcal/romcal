import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

import { Europe } from './europe';

export class Slovakia extends CalendarDef {
  ParentCalendar = Europe;

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: false,
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
  };

  inputs: Inputs = {
    // TODO: When votive Masses (#110) are implemented, on '2-14', add a votive Mass for `cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop`

    joseph_spouse_of_mary: {
      isHolyDayOfObligation: false,
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 23 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
    },

    florian_of_lorch_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    sara_salkahazi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 11 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 16 },
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },

    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      customLocaleId:
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_slavic_missionaries_copatrons_of_europe',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 5 },
      titles: [Title.SlavicMissionary],
    },

    anthony_zaccaria_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
      martyrology: ['andrew_zorard_of_nitra_hermit', 'benedict_of_skalka_hermit'],
    },

    gorazd_of_moravia_and_companions: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 27 },
      martyrology: ['gorazd_of_moravia', 'companions_martyrs'],
    },

    zdenka_cecilia_schelingova_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
    },

    helena_of_constantinople: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 18 },
    },

    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 7 },
      martyrology: ['marko_krizin_priest', 'melchior_grodziecki_priest', 'stephen_pongracz_priest'],
    },

    our_lady_of_sorrows: {
      customLocaleId: 'our_lady_of_sorrows_patroness_of_slovakia',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronessOfSlovakia] },
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    maurus_of_pecs_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 25 },
    },

    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 26 },
      isOptional: true,
    },

    commemoration_of_all_the_faithful_departed: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 2 },
      colors: [Colors.Purple, Colors.Black],
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
