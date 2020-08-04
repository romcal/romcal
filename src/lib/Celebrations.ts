import * as Dates from '@romcal/lib/Dates';
import { localizeDates, localizeLiturgicalColor, localize } from '@romcal/lib/Locales';
import { TITLES } from '@romcal/constants/titles.constant';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config from '@romcal/models/romcal-config';
import { isNil } from '@romcal/utils/type-guards';
import { RanksEnum } from '@romcal/enums/ranks.enum';

/**
 * Returns various fixed celebrations in the liturgical calendar.
 * @param year The year to calculate celebrations
 * @param config The configuration object to customize the date output
 */
const dates = async (year: number, config: Config): Promise<Array<RomcalDateItemInput>> => {
  const _dates: Array<RomcalDateItemInput> = [
    // Solemnities
    {
      key: 'immaculateConception',
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.SOLEMNITY,
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
      rank: RanksEnum.FERIA,
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
      rank: RanksEnum.SUNDAY,
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
      rank: RanksEnum.TRIDUUM,
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
      rank: RanksEnum.TRIDUUM,
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
      rank: RanksEnum.TRIDUUM,
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
      rank: RanksEnum.FEAST,
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
      rank: RanksEnum.FEAST,
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
      rank: RanksEnum.FEAST,
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
      rank: RanksEnum.FEAST,
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
      rank: RanksEnum.FEAST,
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
      rank: RanksEnum.FEAST,
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
