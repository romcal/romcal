import dayjs from 'dayjs';

import { Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintScholasticaVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedAloysiusStepinacBishopAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
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
      key: 'blessedOsannaOfCattaroVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'blessedIvanMerz',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintLeopoldMandicPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedMaryOfJesusCrucifiedPetkovicVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
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
      key: 'ourLadyOfBistrica',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
    },
    {
      key: 'saintElijahProphet',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-20`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
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
      key: 'saintClementOfOhridAndGorazdBishopsAndCompanions',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
    },
    {
      key: 'blessedAugustinKazoticBishopAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintRoch',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintMarkoKrizinPriestAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'blessedGraziaOfCattaro',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'saintNikolaTavelicPriestAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
