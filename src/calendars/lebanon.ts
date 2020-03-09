import dayjs from 'dayjs';

import { Locales } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintBarbaraVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
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
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-24`),
    },
    {
      key: 'saintMaroun',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
    },
    {
      key: 'saintRafqaRebeccaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintGeorgeMartyr',
      type: TypesEnum.MEMORIAL,
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
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-1`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
