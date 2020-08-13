import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'waitangiDay',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-6`),
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPatrickBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintMarkTheEvangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'saintMarcellinChampagnatPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'saintDominicPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintSixtusIiPopeAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintCajetanPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintMaryMacKillopVirgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-8`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
