import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'elizabeth_ann_seton_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_neumann_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'andre_bessette_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-6`),
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'marianne_cope_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'katharine_drexel_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-3`),
    },
    {
      key: 'damien_de_veuster_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'isidore_the_farmer',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'junipero_serra_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'kateri_tekakwitha_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'camillus_de_lellis_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'peter_claver_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'marie_rose_durocher_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'paul_of_the_cross_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'frances_xavier_cabrini_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'rose_philippine_duchesne_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'miguel_agustin_pro_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_guadalupe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
