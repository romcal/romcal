import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'blessedGeorgeMatulewiczBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedBoleslawaMariaLamentVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintAngelaMericiVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
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
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintGeorgeMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintTheodosiusOfTheCavesAbbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfPerpetualHelp',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'blessedLeonidFeodorovPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
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
      key: 'saintAnthonyOfTheCavesMonk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
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
      key: 'saintsBorisAndGlebMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
      metadata: {
        titles: [Titles.MARTYR],
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
      key: 'ourLadyOfVladimir',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedOleksiyZarytskyiPriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfTheGateOfDawn',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintRafalKalinowskiPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAndrewTheApostlePatronOfRussia',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintNicholasBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
