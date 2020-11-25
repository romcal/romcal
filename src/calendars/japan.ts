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
      key: 'paul_miki_and_companions_martyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_the_discovery_of_the_hidden_christians',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'peter_kibe_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: '205_blessed_martyrs_of_japan',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'francis_xavier_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
