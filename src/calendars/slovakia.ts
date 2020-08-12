import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: false,
};

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintGeorgeMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintFlorianMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'blessedSaraSalkahaziVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintLadislaus',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    // In Slovakia and Czech Republic, the two brothers were originally
    // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
    // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintAnthonyZaccariaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintGorazdAndCompanions',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedZdenkaSchelingovaVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHelena',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfSorrows',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-9-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintGallAbbotAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintMaurusBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'dedicationOfAParticularChurch',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-10-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'allSouls',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColorsEnum.PURPLE, LiturgicalColorsEnum.BLACK],
    },
    {
      key: 'saintEmeric',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-5`),
    },
    {
      // This key is dropped only because of adding Optional Memorial of St Barbara to the same day
      key: 'saintJohnDamascenePriestAndDoctor',
      date: dayjs.utc(`${year}-12-4`),
      drop: true,
    },
    {
      key: 'saintJohnDamascenePriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
