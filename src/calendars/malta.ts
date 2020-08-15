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
      key: 'saintPubliusBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'shipwreckOfSaintPaulApostle',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-2-10`),
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
      key: 'blessedMariaAdeodataPisaniVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'ourLadyOfSorrows',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-15`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintPiusVPope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintGeorgePrecaPriest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-9`),
    },
    {
      key: 'blessedNazjuFalzon',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
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
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
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
