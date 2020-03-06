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
      key: 'vietnameseMartyrs',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-11-13`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
