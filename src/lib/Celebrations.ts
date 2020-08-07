import * as Dates from '@romcal/lib/Dates';
import { localizeDates, localizeLiturgicalColor, localize } from '@romcal/lib/Locales';
import { TITLES } from '@romcal/constants/titles.constant';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config from '@romcal/models/romcal-config';
import { isNil } from '@romcal/utils/type-guards';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { PeriodsEnum, SeasonsEnum } from '@romcal/enums/seasons-and-periods.enum';

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
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'christmas',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.christmas(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'maryMotherOfGod',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'epiphany',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'trinitySunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.trinitySunday(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'corpusChristi',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'sacredHeartOfJesus',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'birthOfJohnTheBaptist',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.birthOfJohnTheBaptist(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'peterAndPaulApostles',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
      prioritized: true,
    },
    {
      key: 'assumption',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.assumption(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'allSaints',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.allSaints(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'christTheKing',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.christTheKing(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'josephHusbandOfMary',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.josephHusbandOfMary(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'annunciation',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.annunciation(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'easter',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.easter(year),
      seasons: [SeasonsEnum.PASCHAL_TRIDUUM, SeasonsEnum.EASTERTIDE],
      seasonNames: [await localize({ key: 'paschalTriduum.season' }), await localize({ key: 'eastertide.season' })],
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'divineMercySunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'ascension',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'pentecostSunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
      prioritized: true,
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ashWednesday',
      rank: RanksEnum.FERIA,
      date: Dates.ashWednesday(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.PURPLE,
        },
      },
      prioritized: true,
    },
    {
      key: 'palmSunday',
      rank: RanksEnum.SUNDAY,
      date: Dates.palmSunday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
      prioritized: true,
    },
    {
      key: 'holyThursday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holyThursday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.TRIDUUM],
        },
      },
      prioritized: true,
    },
    {
      key: 'goodFriday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.goodFriday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.TRIDUUM],
        },
      },
      prioritized: true,
    },
    {
      key: 'holySaturday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holySaturday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.TRIDUUM],
        },
      },
      prioritized: true,
    },
    // Feasts
    {
      key: 'holyFamily',
      rank: RanksEnum.FEAST,
      date: Dates.holyFamily(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
      prioritized: true,
    },
    {
      key: 'baptismOfTheLord',
      rank: RanksEnum.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
      prioritized: true,
    },
    {
      key: 'presentationOfTheLord',
      rank: RanksEnum.FEAST,
      date: Dates.presentationOfTheLord(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
      prioritized: true,
    },
    {
      key: 'transfiguration',
      rank: RanksEnum.FEAST,
      date: Dates.transfiguration(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
      prioritized: true,
    },
    {
      key: 'theExaltationOfTheHolyCross',
      rank: RanksEnum.FEAST,
      date: Dates.theExaltationOfTheHolyCross(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.FEAST_OF_THE_LORD],
        },
      },
      prioritized: true,
    },
    // Memorials
    {
      key: 'immaculateHeartOfMary',
      rank: RanksEnum.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
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
