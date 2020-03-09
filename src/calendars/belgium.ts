import dayjs from 'dayjs';

import { Locales } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintBrotherMutienMarieReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAmandMissionary',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintGertrudeOfNivellesVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintJulieBilliartVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintDamienDeVeusterPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJulianaOfLiegeVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyMediatrix',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-31`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintLambertBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintHubertBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnBerchmansReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
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
