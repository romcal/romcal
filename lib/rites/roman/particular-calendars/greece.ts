import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'cyril_of_jerusalem_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-22`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
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
      key: 'irene_of_macedonia',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_fatima',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'cyril_of_alexandria_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
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
      key: 'margaret_of_antioch_virgin',
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
      key: 'pantaleon_of_nicomedia_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'lydia_of_philippi',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'cosmas_of_cilicia_and_damian_of_cilicia_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dionysius_the_areopagite_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'demetrius_of_thessaloniki_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'presentation_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'barbara_of_heliopolis_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'nicholas_of_myra_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'spyridon_of_trimythous_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
