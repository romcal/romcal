import { Dates } from './Dates';
import { localizeDates, localize } from '@romcal/lib/Locales';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalPeriods, LiturgicalSeasons } from '@romcal/constants/seasons-and-periods/seasons-and-periods.enum';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

/**
 * Returns various fixed celebrations in the liturgical calendar.
 * @param year The year to calculate celebrations
 * @param config The configuration object to customize the date output
 */
const dates = async (year: number, config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const _dates: Array<RomcalDateItemInput> = [
    // Solemnities
    {
      key: 'immaculateConception',
      rank: Ranks.SOLEMNITY,
      date: Dates.immaculateConception(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'christmas',
      rank: Ranks.SOLEMNITY,
      date: Dates.christmas(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'maryMotherOfGod',
      rank: Ranks.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'epiphany',
      rank: Ranks.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'trinitySunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.trinitySunday(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'corpusChristi',
      rank: Ranks.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'sacredHeartOfJesus',
      rank: Ranks.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'birthOfJohnTheBaptist',
      rank: Ranks.SOLEMNITY,
      date: Dates.birthOfJohnTheBaptist(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'peterAndPaulApostles',
      rank: Ranks.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
    },
    {
      key: 'assumption',
      rank: Ranks.SOLEMNITY,
      date: Dates.assumption(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'allSaints',
      rank: Ranks.SOLEMNITY,
      date: Dates.allSaints(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'christTheKing',
      rank: Ranks.SOLEMNITY,
      date: Dates.christTheKing(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'josephHusbandOfMary',
      rank: Ranks.SOLEMNITY,
      date: Dates.josephHusbandOfMary(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'annunciation',
      rank: Ranks.SOLEMNITY,
      date: Dates.annunciation(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'easter',
      rank: Ranks.SOLEMNITY,
      date: Dates.easter(year),
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM, LiturgicalSeasons.EASTERTIDE],
      seasonNames: [await localize({ key: 'paschalTriduum.season' }), await localize({ key: 'eastertide.season' })],
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'divineMercySunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'ascension',
      rank: Ranks.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'pentecostSunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ashWednesday',
      rank: Ranks.WEEKDAY,
      date: Dates.ashWednesday(year),
      liturgicalColors: LiturgicalColors.PURPLE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'palmSunday',
      rank: Ranks.SUNDAY,
      date: Dates.palmSunday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'holyThursday',
      rank: Ranks.TRIDUUM,
      date: Dates.holyThursday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'goodFriday',
      rank: Ranks.TRIDUUM,
      date: Dates.goodFriday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'holySaturday',
      rank: Ranks.TRIDUUM,
      date: Dates.holySaturday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // Feasts
    {
      key: 'holyFamily',
      rank: Ranks.FEAST,
      date: Dates.holyFamily(year),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'baptismOfTheLord',
      rank: Ranks.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'presentationOfTheLord',
      rank: Ranks.FEAST,
      date: Dates.presentationOfTheLord(year),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'transfiguration',
      rank: Ranks.FEAST,
      date: Dates.transfiguration(year),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'theExaltationOfTheHolyCross',
      rank: Ranks.FEAST,
      date: Dates.theExaltationOfTheHolyCross(year),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    // Memorials
    {
      key: 'immaculateHeartOfMary',
      rank: Ranks.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  const localizedCelebrationDates = await localizeDates(_dates, 'celebrations');
  return await Promise.all(localizedCelebrationDates);
};

export { dates };
