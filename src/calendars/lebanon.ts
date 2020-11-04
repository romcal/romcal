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
      key: 'barbara_of_heliopolis_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'nicholas_of_myra_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'sharbel_makhluf_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-24`),
    },
    {
      key: 'maron_of_syria_hermit',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
    },
    {
      key: 'rafqa_pietra_choboq_ar_rayes_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_lebanon',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-1`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
