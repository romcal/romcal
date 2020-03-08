import * as Dates from './Dates';
import { localizeDates, localizeLiturgicalColor, localize } from './Locales';
import { Titles, LiturgicalColors, Types } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config from '../models/romcal-config';
import { isNil } from '../utils/type-guards';

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
      type: Types.SOLEMNITY,
      date: Dates.immaculateConception(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'christmas',
      type: Types.SOLEMNITY,
      date: Dates.christmas(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'maryMotherOfGod',
      type: Types.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'epiphany',
      type: Types.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'trinitySunday',
      type: Types.SOLEMNITY,
      date: Dates.trinitySunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'corpusChristi',
      type: Types.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'sacredHeartOfJesus',
      type: Types.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'birthOfJohnTheBaptist',
      type: Types.SOLEMNITY,
      date: Dates.birthOfJohnTheBaptist(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'peterAndPaulApostles',
      type: Types.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'assumption',
      type: Types.SOLEMNITY,
      date: Dates.assumption(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'allSaints',
      type: Types.SOLEMNITY,
      date: Dates.allSaints(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'christTheKing',
      type: Types.SOLEMNITY,
      date: Dates.christTheKing(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'josephHusbandOfMary',
      type: Types.SOLEMNITY,
      date: Dates.josephHusbandOfMary(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'annunciation',
      type: Types.SOLEMNITY,
      date: Dates.annunciation(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'easter',
      type: Types.SOLEMNITY,
      date: Dates.easter(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'divineMercySunday',
      type: Types.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'ascension',
      type: Types.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'pentecostSunday',
      type: Types.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ashWednesday',
      type: Types.FERIA,
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
          liturgicalColor: LiturgicalColors.PURPLE,
        },
      },
    },
    {
      key: 'palmSunday',
      type: Types.SUNDAY,
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
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'holyThursday',
      type: Types.TRIDUUM,
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
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.TRIDUUM],
        },
      },
    },
    {
      key: 'goodFriday',
      type: Types.TRIDUUM,
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
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.TRIDUUM],
        },
      },
    },
    {
      key: 'holySaturday',
      type: Types.TRIDUUM,
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
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.TRIDUUM],
        },
      },
    },
    // Feasts
    {
      key: 'holyFamily',
      type: Types.FEAST,
      date: Dates.holyFamily(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'baptismOfTheLord',
      type: Types.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'presentationOfTheLord',
      type: Types.FEAST,
      date: Dates.presentationOfTheLord(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'transfiguration',
      type: Types.FEAST,
      date: Dates.transfiguration(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.FEAST_OF_THE_LORD],
        },
      },
    },
    {
      key: 'theExaltationOfTheHolyCross',
      type: Types.FEAST,
      date: Dates.theExaltationOfTheHolyCross(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.FEAST_OF_THE_LORD],
        },
      },
    },
    // Memorials
    {
      key: 'immaculateHeartOfMary',
      type: Types.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
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
