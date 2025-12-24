import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';

export class HongKong extends CalendarDef {
  particularConfig = {
    ascensionOnSunday: true,
    epiphanyOnSunday: true,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // src: http://catholic-dlc.org.hk/English_Liturgy.htm
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

    // src: http://catholic-dlc.org.hk/sup_massindex.htm
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

    // src: http://catholic-dlc.org.hk/English_Liturgy.htm
    holy_martyrs_and_blesseds_of_china: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 7, date: 9 },
    },

    // src: http://catholic-dlc.org.hk/10-01Saint_The%CC%81re%CC%80se_of_the_Child_Jesus.doc
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 1 },
    },

    // src: http://catholic-dlc.org.hk/English_Liturgy.htm
    francis_xavier_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 12, date: 3 },
    },

    // src: http://catholic-dlc.org.hk/2023_%E6%95%99%E5%8D%80%E4%B8%BB%E4%BF%9D_%E8%8B%B1.pdf
    immaculate_conception_of_the_blessed_virgin_mary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 12, date: 8 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src: http://catholic-dlc.org.hk/English_Liturgy.htm
    dedication_of_the_cathedral_of_the_immaculate_conception_hong_kong: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 12, date: 9 },
    },
  };
}
