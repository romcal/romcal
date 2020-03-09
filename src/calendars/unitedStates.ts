import dayjs from 'dayjs';

import { Locales } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'saintElizabethAnnSetonReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnNeumannBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAndreBessetteReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-6`),
      data: {},
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintMarianneCopeVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'saintKatharineDrexelVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-3`),
      data: {},
    },
    {
      key: 'saintDamienDeVeusterPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      data: {},
    },
    {
      key: 'saintIsidoreTheFarmer',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
      data: {},
    },
    {
      key: 'blessedJuniperoSerraPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
      data: {},
    },
    {
      key: 'saintKateriTekakwithaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
      data: {},
    },
    {
      key: 'saintPeterClaverPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedMarieRoseDurocherVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
      data: {},
    },
    {
      key: 'saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
      data: {},
    },
    {
      key: 'saintFrancesXavierCabriniVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRosePhilippineDuchesneVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      data: {},
    },
    {
      key: 'blessedMiguelAgustinProPriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
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
