import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintBrotherMutienMarieReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAmandMissionary',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintGertrudeOfNivellesVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintJulieBilliartVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDamienDeVeusterPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJulianaOfLiegeVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyMediatrix',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-31`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintLambertBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintHubertBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnBerchmansReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
