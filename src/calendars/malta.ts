import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintPubliusBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'shipwreckOfSaintPaulApostle',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-2-10`),
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
      key: 'blessedMariaAdeodataPisaniVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'ourLadyOfSorrows',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-15`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintPiusVPope',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintGeorgePrecaPriest',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-9`),
    },
    {
      key: 'blessedNazjuFalzon',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
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
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
