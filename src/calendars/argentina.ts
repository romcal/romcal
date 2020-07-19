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
      key: 'blessedLauraVicunaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'ourLadyQueenOfPeace',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfLujanPatronessOfArgentina',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintIsidoreTheFarmer',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintLuigiOrionePriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'ourLadyOfItati',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRocco',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'blessedCeferinoNamuncura',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfMercy',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintHectorValdivielsoSaezMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfThePillar',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
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
    // Saturday of the 2nd Week of Easter
    {
      key: 'ourLadyOfTheValley',
      type: TypesEnum.MEMORIAL,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.divineMercySunday(y)
            .add(6, 'day')
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
