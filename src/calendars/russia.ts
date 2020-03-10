import dayjs from 'dayjs';

import * as Locales from '@RomcalLib/Locales';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'blessedGeorgeMatulewiczBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedBoleslawaMariaLamentVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintAngelaMericiVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
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
      key: 'saintGeorgeMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintTheodosiusOfTheCavesAbbot',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfPerpetualHelp',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'blessedLeonidFeodorovPriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
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
      key: 'saintAnthonyOfTheCavesMonk',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintOlga',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintVladimirTheGreat',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsBorisAndGlebMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
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
      key: 'ourLadyOfCzestochowa',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'ourLadyOfVladimir',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedOleksiyZarytskyiPriestAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfTheGateOfDawn',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintRafalKalinowskiPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAndrewTheApostlePatronOfRussia',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-11-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintNicholasBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
