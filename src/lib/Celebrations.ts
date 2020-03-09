import * as Dates from './Dates';
import { localizeDates, localizeLiturgicalColor, localize } from './Locales';
import { TITLES } from '@RomcalConstants/titles.constant';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config from '../models/romcal-config';
import { isNil } from '../utils/type-guards';
import { TypesEnum } from '@RomcalEnums/types.enum';

/**
 * Returns various fixed celebrations in the liturgical calendar.
 * @param year The year to calculate celebrations
 * @param config The configuration object to customize the date output
 */
const dates = async (year: number, config: Config): Promise<Array<IRomcalDateItem>> => {
  const _dates: Array<IRomcalDateItem> = [
    // Solemnities
    {
      key: 'immaculateConception',
      type: TypesEnum.SOLEMNITY,
      date: Dates.immaculateConception(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'christmas',
      type: TypesEnum.SOLEMNITY,
      date: Dates.christmas(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'maryMotherOfGod',
      type: TypesEnum.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'epiphany',
      type: TypesEnum.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'trinitySunday',
      type: TypesEnum.SOLEMNITY,
      date: Dates.trinitySunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'corpusChristi',
      type: TypesEnum.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'sacredHeartOfJesus',
      type: TypesEnum.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'birthOfJohnTheBaptist',
      type: TypesEnum.SOLEMNITY,
      date: Dates.birthOfJohnTheBaptist(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'peterAndPaulApostles',
      type: TypesEnum.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'assumption',
      type: TypesEnum.SOLEMNITY,
      date: Dates.assumption(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'allSaints',
      type: TypesEnum.SOLEMNITY,
      date: Dates.allSaints(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'christTheKing',
      type: TypesEnum.SOLEMNITY,
      date: Dates.christTheKing(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'josephHusbandOfMary',
      type: TypesEnum.SOLEMNITY,
      date: Dates.josephHusbandOfMary(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'annunciation',
      type: TypesEnum.SOLEMNITY,
      date: Dates.annunciation(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'easter',
      type: TypesEnum.SOLEMNITY,
      date: Dates.easter(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'divineMercySunday',
      type: TypesEnum.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ascension',
      type: TypesEnum.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'pentecostSunday',
      type: TypesEnum.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ashWednesday',
      type: TypesEnum.FERIA,
      date: Dates.ashWednesday(year),
      data: {
        prioritized: true,
        season: [
          {
            key: 'LENT',
            value: await localize({
              key: 'lent.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.PURPLE,
        },
      },
    },
    {
      key: 'palmSunday',
      type: TypesEnum.SUNDAY,
      date: Dates.palmSunday(year),
      data: {
        prioritized: true,
        season: [
          {
            key: 'HOLY_WEEK',
            value: await localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'holyThursday',
      type: TypesEnum.TRIDUUM,
      date: Dates.holyThursday(year),
      data: {
        prioritized: true,
        season: [
          {
            key: 'HOLY_WEEK',
            value: await localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.TRIDUUM],
        },
      },
    },
    {
      key: 'goodFriday',
      type: TypesEnum.TRIDUUM,
      date: Dates.goodFriday(year),
      data: {
        prioritized: true,
        season: [
          {
            key: 'HOLY_WEEK',
            value: await localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.TRIDUUM],
        },
      },
    },
    {
      key: 'holySaturday',
      type: TypesEnum.TRIDUUM,
      date: Dates.holySaturday(year),
      data: {
        prioritized: true,
        season: [
          {
            key: 'HOLY_WEEK',
            value: await localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.TRIDUUM],
        },
      },
    },
    // Feasts
    {
      key: 'holyFamily',
      type: TypesEnum.FEAST,
      date: Dates.holyFamily(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'baptismOfTheLord',
      type: TypesEnum.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'presentationOfTheLord',
      type: TypesEnum.FEAST,
      date: Dates.presentationOfTheLord(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'transfiguration',
      type: TypesEnum.FEAST,
      date: Dates.transfiguration(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'theExaltationOfTheHolyCross',
      type: TypesEnum.FEAST,
      date: Dates.theExaltationOfTheHolyCross(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
    },
    // Memorials
    {
      key: 'immaculateHeartOfMary',
      type: TypesEnum.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
  ];

  const localizedCelebrationDates = await localizeDates(_dates, 'celebrations');
  const promises = localizedCelebrationDates.map(async date => ({
    ...date,
    data: {
      ...date.data,
      meta: {
        ...date.data?.meta,
        titles: date.data?.meta?.titles ?? [],
        ...(!isNil(date.data?.meta?.liturgicalColor) && {
          liturgicalColor: await localizeLiturgicalColor(date.data?.meta?.liturgicalColor),
        }),
      },
    },
  }));
  return await Promise.all(promises);
};

export { dates };
