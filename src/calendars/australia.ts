import dayjs from 'dayjs';

import { Dates, Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintPatrickBishop',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-3-17`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      type: Types.MEMORIAL,
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
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'blessedPeterToRotMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintMaryOfTheCrossVirgin',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-8-8`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
