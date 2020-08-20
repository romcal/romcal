import * as Dates from '@romcal/lib/Dates';
import { localizeDates, localize } from '@romcal/lib/Locales';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { PeriodsEnum, SeasonsEnum } from '@romcal/enums/seasons-and-periods.enum';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';

/**
 * Returns various fixed celebrations in the liturgical calendar.
 * @param year The year to calculate celebrations
 * @param config The configuration object to customize the date output
 */
const dates = async (year: number, config: Config): Promise<Array<RomcalDateItemInput>> => {
  const _dates: Array<RomcalDateItemInput> = [
    // Solemnities
    {
      key: 'immaculate_conception',
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
      key: 'mary_mother_of_god',
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
      key: 'trinity_sunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.trinitySunday(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'corpus_christi',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.corpusChristi(year, config.corpusChristiOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'sacred_heart_of_jesus',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.sacredHeartOfJesus(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'nativity_of_john_the_baptist',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.nativityOfJohnTheBaptist(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'peter_and_paul_apostles',
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
      key: 'all_saints',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.allSaints(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'christ_the_king_sunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.christTheKing(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'joseph_spouse_of_mary',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.josephSpouseOfMary(year),
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
    },
    {
      key: 'divine_mercy_sunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.divineMercySunday(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'ascension',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.ascension(year, config.ascensionOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'pentecost_sunday',
      rank: RanksEnum.SOLEMNITY,
      date: Dates.pentecostSunday(year),
      liturgicalColors: LiturgicalColorsEnum.RED,
      prioritized: true,
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ash_wednesday',
      rank: RanksEnum.FERIA,
      date: Dates.ashWednesday(year),
      liturgicalColors: LiturgicalColorsEnum.PURPLE,
      prioritized: true,
    },
    {
      key: 'palm_sunday',
      rank: RanksEnum.SUNDAY,
      date: Dates.palmSunday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.RED,
      prioritized: true,
    },
    {
      key: 'holy_thursday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holyThursday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
    },
    {
      key: 'good_friday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.goodFriday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
    },
    {
      key: 'holy_saturday',
      rank: RanksEnum.TRIDUUM,
      date: Dates.holySaturday(year),
      periods: [PeriodsEnum.HOLY_WEEK],
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.TRIDUUM],
      },
      prioritized: true,
    },
    // Feasts
    {
      key: 'holy_family',
      rank: RanksEnum.FEAST,
      date: Dates.holyFamily(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'baptism_of_the_lord',
      rank: RanksEnum.FEAST,
      date: Dates.baptismOfTheLord(year, config.epiphanyOnSunday),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    {
      key: 'presentation_of_the_lord',
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
      key: 'exaltation_of_the_holy_cross',
      rank: RanksEnum.FEAST,
      date: Dates.exaltationOfTheHolyCross(year),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.FEAST_OF_THE_LORD],
      },
      prioritized: true,
    },
    // Memorials
    {
      key: 'immaculate_heart_of_mary',
      rank: RanksEnum.FEAST,
      date: Dates.immaculateHeartOfMary(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
  ];

  const localizedCelebrationDates = await localizeDates(_dates, 'celebrations');
  return await Promise.all(localizedCelebrationDates);
};

export { dates };
