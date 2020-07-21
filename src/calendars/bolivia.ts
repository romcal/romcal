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
      key: 'saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintMarianaDeJesusDeParedesVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'blessedNazariaIgnaciaMarchReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRoseOfLima',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPeterClaverPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'saintJohnMaciasReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintLouisBertrandPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintMiguelFebresCorderoReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'saintAnthonyMaryClaretBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintMartinDePorresReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
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
    // Thursday after Pentecost
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
