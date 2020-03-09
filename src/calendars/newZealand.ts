import dayjs from 'dayjs';

import { Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'waitangiDay',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-2-6`),
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintPatrickBishop',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintMarkTheEvangelist',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-4-28`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'saintMarcellinChampagnatPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'saintDominicPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintSixtusIiPopeAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintCajetanPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintMaryMacKillopVirgin',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-8-8`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
