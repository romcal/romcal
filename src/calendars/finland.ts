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
      key: 'henry_of_finland_bishop',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-1-19`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
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
      key: 'catherine_of_siena_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'eric_ix_of_sweden_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'hemming_of_turku_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_ursula_of_jesus_ledochowska_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
    },
    {
      key: 'elizabeth_hesselblad_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-4`),
    },
    {
      key: 'josemaria_escriva_de_balaguer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'canute_iv_of_denmark_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'thorlac_of_iceland_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
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
      key: 'olaf_ii_of_norway_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColors.RED,
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
      key: 'nicholas_steno_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
