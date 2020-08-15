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
      key: 'saintScholasticaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedAloysiusStepinacBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'blessedOsannaOfCattaroVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'blessedIvanMerz',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintLeopoldMandicPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedMaryOfJesusCrucifiedPetkovicVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
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
      key: 'ourLadyOfBistrica',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
    },
    {
      key: 'saintElijahProphet',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-20`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'saintsClementOfOhridAndGorazdBishopsAndCompanions',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
    },
    {
      key: 'blessedAugustinKazoticBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintRoch',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintMarkoKrizinPriestAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'blessedGraziaOfCattaro',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'saintNikolaTavelicPriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
