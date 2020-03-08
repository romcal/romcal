import dayjs from 'dayjs';

import { Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig = {
  ascensionOnSunday: true,
  christmastideEnds: 'o',
  christmastideIncludesTheSeasonOfEpiphany: true,
  corpusChristiOnSunday: true,
  epiphanyOnJan6: false,
};

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintGenevieveVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintRemigiusBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintBernadetteSoubirousVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-18`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintIvoPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-19`),
    },
    {
      key: 'saintJoanOfArcVirginSecondaryPatronessOfFrance',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintPothinusBishopSaintBlAndinaVirginAndTheirCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
    },
    {
      key: 'saintClotilde',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-4`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintCaesariusOfArlesBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
