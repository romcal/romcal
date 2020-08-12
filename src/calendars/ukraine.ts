import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedMarcelinaDarowskaReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
    },
    {
      key: 'blessedBronislawMarkiewiczPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'maryMotherOfTheChurch',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
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
      key: 'saintAndrewBobolaPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAlbertChmielowskiReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
    },
    {
      key: 'saintZygmuntGorazdowskiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintJohnOfDuklaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
    },
    {
      key: 'saintHedwigOfPoland',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'saintOlga',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintVladimirTheGreat',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
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
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
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
      key: 'ourLadyOfCzestochowa',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'blessedWladyslawBladzinskiPriestAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintStanislausKostkaReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJozefBilczewskiBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
