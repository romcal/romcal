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
      key: 'saintBarbaraVirginAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintNicholasBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-24`),
    },
    {
      key: 'saintMaroun',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
    },
    {
      key: 'saintRafqaRebeccaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintGeorgeMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyOfLebanon',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-1`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
