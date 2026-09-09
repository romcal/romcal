import { PatronTitle, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';

export class HongKong extends CalendarDef {
  particularConfig = {
    ascensionOnSunday: true,
    epiphanyOnSunday: true,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // src: http://catholic-dlc.org.hk/st/bydate.htm#:~:text=God-,%2A%E9%81%87%E4%B8%8A,%E7%B5%90%E6%9D%9F
    mary_mother_of_god: {
      isHolyDayOfObligation: false,
    },

    // src: http://catholic-dlc.org.hk/English_Liturgy.htm#:~:text=29,Memorial
    joseph_freinademetz_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 29 },
    },

    // src: http://catholic-dlc.org.hk/viewer.htm?doc=0130_Blessed_Gabriele_Maria_Allegra.docx
    gabriele_maria_allegra_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 30 },
    },

    // src: http://catholic-dlc.org.hk/sup_massindex.htm#:~:text=%E8%81%96%E9%9B%B7%E9%B3%B4%E9%81%93%E4%B8%BB%E6%95%99%E5%8F%8A%E8%81%96%E9%AB%98%E6%83%A0%E9%BB%8E%E5%8F%B8%E9%90%B8%EF%BC%88Ss%2E%20Louis%20Versiglia%20%26%20Callistus%20Caravario%20%EF%BC%89
    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
      martyrology: ['aloysius_versiglia_bishop', 'callistus_caravario_priest'],
    },

    // src: http://catholic-dlc.org.hk/viewer.htm?doc=our_lady_of_china.doc
    our_lady_of_china: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, dayOfWeek: 6, nthWeekInMonth: 2 },
    },

    // src: http://catholic-dlc.org.hk/viewer.htm?doc=0524e.doc
    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 24 },
    },

    // src: http://catholic-dlc.org.hk/st/Jul/9/9.htm
    holy_martyrs_and_blesseds_of_china: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 9 },
    },

    // src: http://catholic-dlc.org.hk/10-01Saint_The%CC%81re%CC%80se_of_the_Child_Jesus.doc
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 1 },
    },

    // src: http://catholic-dlc.org.hk/1203-Francis_Xavier.pdf
    francis_xavier_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 12, date: 3 },
    },

    // src: http://catholic-dlc.org.hk/2023_%E6%95%99%E5%8D%80%E4%B8%BB%E4%BF%9D_%E8%8B%B1.pdf
    immaculate_conception_of_the_blessed_virgin_mary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: http://catholic-dlc.org.hk/1209_Dedication_of_the_Cathedral-enA5.pdf
    dedication_of_the_cathedral_of_the_immaculate_conception_hong_kong: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      isOptional: true,
      dateDef: { month: 12, date: 9 },
    },

    // Lunar New Year celebrations
    // src: http://catholic-dlc.org.hk/English_Liturgy.htm#:~:text=LUNAR,%20lunar

    // Thanksgiving Mass on Lunar New Year Eve (day before Lunar New Year)
    thanksgiving_mass_on_lunar_new_year_eve: {
      precedence: Precedences.OptionalMemorial_12,
      allowSimilarRankItems: true,
      isOptional: true,
      dateDef: {
        dateFn: 'lunarNewYear',
        dateArgs: [8], // UTC+8 for Hong Kong
        subtractDay: 1,
      },
    },

    // Eucharistic Celebration on Lunar New Year Day
    eucharistic_celebration_on_lunar_new_year_day: {
      precedence: Precedences.OptionalMemorial_12,
      allowSimilarRankItems: true,
      isOptional: true,
      dateDef: {
        dateFn: 'lunarNewYear',
        dateArgs: [8], // UTC+8 for Hong Kong
      },
    },

    // Sunday after Lunar New Year's Day
    // If Lunar New Year is Sunday, this falls on the same day
    sunday_after_lunar_new_years_day: {
      precedence: Precedences.OptionalMemorial_12,
      allowSimilarRankItems: true,
      isOptional: true,
      dateDef: {
        dateFn: 'sundayOnOrAfterLunarNewYear',
        dateArgs: [8], // UTC+8 for Hong Kong
      },
    },
  };
}
