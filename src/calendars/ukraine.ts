import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { Dates } from '../lib/Dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedMarcelinaDarowskaReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
    },
    {
      key: 'blessedBronislawMarkiewiczPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'maryMotherOfTheChurch',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintAndrewBobolaPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintAlbertChmielowskiReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
    },
    {
      key: 'saintZygmuntGorazdowskiPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintJohnOfDuklaPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
    },
    {
      key: 'saintHedwigOfPoland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'saintOlga',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintVladimirTheGreat',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'ourLadyOfCzestochowa',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'blessedWladyslawBladzinskiPriestAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintStanislausKostkaReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJozefBilczewskiBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
