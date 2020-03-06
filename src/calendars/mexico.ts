import dayjs from 'dayjs';

import { Dates, Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintFelipeDeJesusPriestAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-1-22`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'blessedSebastianDeAparicioReligious',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintMariaDeJesusSacramentadoVenegasVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
    },
    {
      key: 'blessedBartolomeLaurelReligiousAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'blessedJuniperoSerraPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintJoseMariaDeYermoPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'saintRafaelGuizarYValenciaBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'blessedMiguelAgustinProPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintJuanDiego',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
