import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItem } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { TypesEnum } from '@romcal/enums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
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
