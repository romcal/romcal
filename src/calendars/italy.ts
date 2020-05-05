import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItem } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { TypesEnum } from '@romcal/enums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
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
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintNorbertBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBarnabasTheApostle',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-11`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintMaryMagdalene',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
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
      key: 'saintFrancisOfAssisi',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'popeSaintJohnXXIII',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'popeSaintJohnPaulII',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
    },
    {
      key: 'maryMotherOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
