import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: false,
  epiphanyOnSunday: false,
};

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      // TODO: When votive Masses (#110) are implemented, change this celebration into votive Mass of `cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe`
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop',
      date: dayjs.utc(`${year}-2-14`),
      drop: true,
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'catherine_of_siena_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'florian_of_lorch_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'sara_salkahazi_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_nepomucene_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ladislaus_i_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'visitation_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_slavic_missionaries',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'anthony_zaccaria_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'benedict_of_nursia_abbot_patron_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'andrew_zorard_of_nitra_and_benedict_of_skalka_hermits',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bridget_of_sweden_religious_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'gorazd_of_moravia_and_companions',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'zdenka_cecilia_schelingova_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'helena_of_constantinople',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'teresa_of_calcutta_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_sorrows_patroness_of_slovakia',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-9-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'gall_of_switzerland_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'maurus_of_pecs_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_consecrated_churches',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'all_souls',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },
    {
      key: 'emeric_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-5`),
    },
    {
      key: 'john_damascene_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'barbara_of_heliopolis_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
