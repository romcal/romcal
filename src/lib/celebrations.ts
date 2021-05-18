import { Dates } from './dates';
import { localize, localizeDates } from '@romcal/lib/locales';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalPeriods, LiturgicalSeasons } from '@romcal/constants/seasons-and-periods/seasons-and-periods.enum';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

/**
 * Returns various fixed liturgical days in the liturgical calendar.
 * @param year The year to calculate the liturgical days
 * @param config The configuration object to customize the date output
 */
const dates = async (year: number, config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const _dates: Array<LiturgicalDayInput> = [
    // Solemnities
    {
      key: 'immaculate_conception_of_mary',
      rank: Ranks.SOLEMNITY,
      date: Dates.immaculateConceptionOfMary(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'christmas',
      rank: Ranks.SOLEMNITY,
      date: Dates.christmas(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'mary_mother_of_god',
      rank: Ranks.SOLEMNITY,
      date: Dates.maryMotherOfGod(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'epiphany',
      rank: Ranks.SOLEMNITY,
      date: Dates.epiphany(year, config.epiphanyOnSunday),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'trinity_sunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.trinitySunday(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'corpus_christi',
      rank: Ranks.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'most_sacred_heart_of_jesus',
      rank: Ranks.SOLEMNITY,
      date: Dates.mostSacredHeartOfJesus(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'nativity_of_john_the_baptist',
      rank: Ranks.SOLEMNITY,
      date: Dates.nativityOfJohnTheBaptist(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'peter_and_paul_apostles',
      rank: Ranks.SOLEMNITY,
      date: Dates.peterAndPaulApostles(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
    },
    {
      key: 'assumption',
      rank: Ranks.SOLEMNITY,
      date: Dates.assumption(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'all_saints',
      rank: Ranks.SOLEMNITY,
      date: Dates.allSaints(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'christ_the_king_sunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.christTheKingSunday(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'joseph_spouse_of_mary',
      rank: Ranks.SOLEMNITY,
      date: Dates.josephSpouseOfMary(year),
      isHolyDayOfObligation: true,
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
      key: 'easter_sunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.easter(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM, LiturgicalSeasons.EASTERTIDE],
      seasonNames: [await localize({ key: 'paschal_triduum.season' }), await localize({ key: 'eastertide.season' })],
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'divine_mercy_sunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'ascension',
      rank: Ranks.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'pentecost_sunday',
      rank: Ranks.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ash_wednesday',
      rank: Ranks.WEEKDAY,
      date: Dates.ashWednesday(year),
      liturgicalColors: LiturgicalColors.PURPLE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'palm_sunday',
      rank: Ranks.SUNDAY,
      date: Dates.palmSunday(year),
      isHolyDayOfObligation: true,
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'holy_thursday',
      rank: Ranks.TRIDUUM,
      date: Dates.holyThursday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'good_friday',
      rank: Ranks.TRIDUUM,
      date: Dates.goodFriday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'holy_saturday',
      rank: Ranks.TRIDUUM,
      date: Dates.holySaturday(year),
      periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.TRIDUUM],
      },
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    // Feasts
    {
      key: 'holy_family',
      rank: Ranks.FEAST,
      date: Dates.holyFamily(year),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'baptism_of_the_lord',
      rank: Ranks.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'presentation_of_the_lord',
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
      key: 'exaltation_of_the_holy_cross',
      rank: Ranks.FEAST,
      date: Dates.exaltationOfTheHolyCross(year),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    // Memorials
    {
      key: 'immaculate_heart_of_mary',
      rank: Ranks.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  ];

  const localizedCelebrationDates = await localizeDates(_dates, 'celebrations');
  return await Promise.all(localizedCelebrationDates);
};

export { dates };
