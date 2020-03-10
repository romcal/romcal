import dayjs from 'dayjs';

import * as Locales from '@RomcalLib/Locales';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'blessedJosephVazPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'ourLadyOfLanka',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfMadhu',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
