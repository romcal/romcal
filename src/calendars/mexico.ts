import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { TypesEnum } from '@romcal/enums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintFelipeDeJesusPriestAndMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedSebastianDeAparicioReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintMariaGuadalupeGarciaZavalaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'findingOfTheHolyCross',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintIsidoreTheFarmer',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfPerpetualHelp',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'ourLadyOfRefuge',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintMariaDeJesusSacramentadoVenegasVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
    },
    {
      key: 'blessedBartolomeLaurelReligiousAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedJuniperoSerraPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintJoseMariaDeYermoPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'ourLadyOfMercy',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintRafaelGuizarYValenciaBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-24`),
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
      key: 'saintJuanDiegoCuauhtlatoatzin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: TypesEnum.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
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
