import dayjs from 'dayjs';

import { Locales } from '../lib';
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
      key: 'saintMargaretOfHungary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-1-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
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
      key: 'saintMatthiasTheApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
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
      key: 'saintFlorianMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedGisela',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-7`),
    },
    {
      key: 'blessedSaraSalkahaziVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedVilmosAporBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-23`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'transferOfTheRelicsOfSaintStephen',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintAgnesOfBohemiaVirgin',
      type: TypesEnum.MEMORIAL, // Memorial
      date: dayjs.utc(`${year}-6-8`), // 8th of June
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE, // What is the Liturgical color for this?
        },
      },
    },
    // Moved to the congregational calendar (Society of Saint Francis de Sales (Salesian Congregation)
    // {
    //   "key": "blessedIstvanSandorMartyr",
    //   "type": TypesEnum.OPT_MEMORIAL,
    //   "date": dayjs.utc({ year, month: 5, day: 8 }),
    //   "data": {
    //     "meta": {
    //       "titles": [
    //         TITLES.MARTYR
    //       ]
    //     }
    //   }
    // },
    {
      key: 'saintLadislaus',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-6-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
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
      key: 'saintsAndrewZorardAndBenedictHermits',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
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
      key: 'saintKingaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
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
      key: 'blessedInnocentXiPope',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'saintStephenOfHungary',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-20`),
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintGerardBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfHungary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintMaurusBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'blessedTheodoreRomzhaBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintEmeric',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-11-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'hungarianSaintsAndBlesseds',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
