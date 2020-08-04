import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintNicholasBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-24`),
    },
    {
      key: 'saintMaroun',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
    },
    {
      key: 'saintRafqaRebeccaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintGeorgeMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfLebanon',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-1`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
