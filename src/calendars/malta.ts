import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { TypesEnum } from '@romcal/enums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintPubliusBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'shipwreckOfSaintPaulApostle',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-2-10`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'blessedMariaAdeodataPisaniVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'ourLadyOfSorrows',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-15`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH, TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintPiusVPope',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintGeorgePrecaPriest',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-9`),
    },
    {
      key: 'blessedNazjuFalzon',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
