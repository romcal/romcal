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
      key: 'saintBrotherMutienMarieReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAmandMissionary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintGertrudeOfNivellesVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintJulieBilliartVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintDamienDeVeusterPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJulianaOfLiegeVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyMediatrix',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintLambertBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintHubertBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJohnBerchmansReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
