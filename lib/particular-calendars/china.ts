import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

export class China extends CalendarDef {
  inputs: Inputs = {
    odoric_of_pordenone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 14 },
    },

    francis_ferdinand_de_capillas_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    lawrence_bai_xiaoman_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    augustine_zhao_rong_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    laurence_wang_bing_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
      martyrology: ['laurence_wang_bing_martyr', 'companions_martyrs'],
    },

    joseph_freinademetz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    john_of_triora_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 13 },
    },

    martin_wu_xuesheng_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 17 },
      martyrology: ['martin_wu_xuesheng_martyr', 'companions_martyrs'],
    },

    lucy_yi_zhenmei_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 19 },
    },

    paul_liu_hanzuo_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 21 },
    },

    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
      martyrology: ['aloysius_versiglia_bishop', 'callistus_caravario_priest'],
    },

    agnes_cao_guiying_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 1 },
    },

    joseph_zhang_dapeng_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 12 },
    },

    mary_assunta_pallotta_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 8 },
    },

    john_martin_moye_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    our_lady_of_china: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, dayOfWeek: 6, nthWeekInMonth: 2 },
    },

    peter_liu_wenyuan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 14 },
    },

    peter_sanz_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 27 },
    },

    joachim_he_kaizhi_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
    },

    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
      martyrology: [
        'gregory_grassi_bishop',
        'francis_fogolla_bishop',
        'anthony_fantosati_bishop',
        'companions_martyrs',
      ],
    },

    joseph_yuan_gengyin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 23 },
    },

    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },

    leo_ignatius_mangin_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
      martyrology: ['leo_ignatius_mangin_priest', 'companions_martyrs'],
    },

    alberic_crescitelli_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 21 },
    },

    paul_chen_changpin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 28 },
      martyrology: ['paul_chen_changpin_martyr', 'companions_martyrs'],
    },

    maurice_tornay_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 11 },
    },

    john_gabriel_perboyre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 11 },
    },

    francis_diaz_del_rincon_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 27 },
      martyrology: ['francis_diaz_del_rincon_priest', 'companions_martyrs'],
    },

    peter_wu_guosheng_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    gabriel_taurin_dufresse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 27 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
