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
      key: 'ourLadyMotherOfChristianUnity',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyMediatrixOfAllGrace',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'saintSigismundMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintClementMaryHofbauerPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintZdislava',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintVitusMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'saintJohnNeumannBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'saintProcopiusAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    // In Slovakia and Czech Republic, the two brothers were originally
    // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
    // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
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
      key: 'blessedHroznataMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'blessedCeslausAndSaintHyacinthPriests',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
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
      key: 'saintsBenedyktJanMateuszIsaakAndKrystynMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'saintMelchiorGrodzieckiPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
    },
    {
      key: 'blessedCharlesSpinolaPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintLudmilaMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRadimBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'blessedKarlOfAustria',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'saintWolfgangBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
    },
    {
      key: 'saintAgnesOfBohemiaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintEdmundCampionPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-1`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
