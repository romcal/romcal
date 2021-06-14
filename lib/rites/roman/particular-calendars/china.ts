import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import dayjs, { Dayjs } from 'dayjs';

export class China extends CalendarDef {
  definitions: DateDefinitions = {
    odoric_of_pordenone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-14',
    },

    francis_ferdinand_de_capillas_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-15',
    },

    lawrence_bai_xiaoman_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
    },

    augustine_zhao_rong_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },

    laurence_wang_bing_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
      saints: ['laurence_wang_bing_martyr', 'companions_martyrs'],
    },

    joseph_freinademetz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
    },

    john_of_triora_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-13',
    },

    martin_wu_xuesheng_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-17',
      saints: ['martin_wu_xuesheng_martyr', 'companions_martyrs'],
    },

    lucy_yi_zhenmei_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-19',
    },

    paul_liu_hanzuo_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-21',
    },

    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-25',
    },

    agnes_cao_guiying_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-1',
    },

    joseph_zhang_dapeng_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-12',
    },

    mary_assunta_pallotta_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-8',
    },

    john_martin_moye_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    our_lady_of_china: {
      precedence: Precedences.ProperMemorial_11b,
      date: (year: number): Dayjs => {
        const firstMay = dayjs.utc(`${year}-5-1`);
        const memorialDay = firstMay;
        // determine first saturday
        memorialDay.add(6 - firstMay.day(), 'day');
        // Second saturday
        memorialDay.add(7, 'day');
        return memorialDay;
      },

      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_liu_wenyuan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-14',
    },

    peter_sanz_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-27',
    },

    joachim_he_kaizhi_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-29',
    },

    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs:
      {
        precedence: Precedences.OptionalMemorial_12,
        date: '6-20',
        saints: [
          'gregory_grassi_bishop',
          'rancis_fogolla_bishop',
          'anthony_fantosati_bishop',
          'companions_martyrs',
        ],
      },

    joseph_yuan_gengyin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-23',
    },

    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-8',
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
    },

    leo_ignatius_mangin_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-20',
      saints: ['leo_ignatius_mangin_priest', 'companions_martyrs'],
    },

    alberic_crescitelli_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-21',
    },

    paul_chen_changpin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-28',
      saints: ['paul_chen_changpin_martyr', 'companions_martyrs'],
    },

    maurice_tornay_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-11',
    },

    john_gabriel_perboyre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-11',
    },

    francis_diaz_del_rincon_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-27',
      saints: ['francis_diaz_del_rincon_priest', 'companions_martyrs'],
    },

    peter_wu_guosheng_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-7',
    },

    gabriel_taurin_dufresse_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-27',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
