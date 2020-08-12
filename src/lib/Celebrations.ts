import * as Dates from '@romcal/lib/Dates';
import { localizeDates, localize } from '@romcal/lib/Locales';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { PeriodsEnum, SeasonsEnum } from '@romcal/enums/seasons-and-periods.enum';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

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
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'christmas',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.christmas(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'maryMotherOfGod',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'epiphany',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'trinitySunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.trinitySunday(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'corpusChristi',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'sacredHeartOfJesus',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'birthOfJohnTheBaptist',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.birthOfJohnTheBaptist(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'peterAndPaulApostles',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      liturgicalColors: LiturgicalColorsEnum.RED,
      prioritized: true,
    },
    {
      key: 'assumption',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.assumption(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'allSaints',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.allSaints(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'christTheKing',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.christTheKing(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'josephHusbandOfMary',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.josephHusbandOfMary(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'annunciation',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.annunciation(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'easter',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.easter(year),
      seasons: [SeasonsEnum.PASCHAL_TRIDUUM, SeasonsEnum.EASTERTIDE],
      seasonNames: [await localize({ key: 'paschalTriduum.season' }), await localize({ key: 'eastertide.season' })],
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'divineMercySunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'ascension',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'pentecostSunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      liturgicalColors: LiturgicalColorsEnum.RED,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ashWednesday',
      rank: RanksEnum.WEEKDAY,
      date: Dates.ashWednesday(year),
      liturgicalColors: LiturgicalColorsEnum.PURPLE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'palmSunday',
      rank: RanksEnum.SUNDAY,
      date: Dates.palmSunday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.RED,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'holyThursday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holyThursday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'goodFriday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.goodFriday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'holySaturday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holySaturday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // Feasts
    {
      key: 'holyFamily',
      rank: RanksEnum.FEAST,
      date: Dates.holyFamily(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'baptismOfTheLord',
      rank: RanksEnum.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'presentationOfTheLord',
      rank: RanksEnum.FEAST,
      date: Dates.presentationOfTheLord(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'transfiguration',
      rank: RanksEnum.FEAST,
      date: Dates.transfiguration(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'theExaltationOfTheHolyCross',
      rank: RanksEnum.FEAST,
      date: Dates.theExaltationOfTheHolyCross(year),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    // Memorials
    {
      key: 'immaculateHeartOfMary',
      rank: RanksEnum.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  const localizedCelebrationDates = await localizeDates(_dates, 'celebrations');
  return await Promise.all(localizedCelebrationDates);
};

export { dates };
