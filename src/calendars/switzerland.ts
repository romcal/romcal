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
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'bridget_of_sweden_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
