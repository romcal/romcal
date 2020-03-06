import dayjs from 'dayjs';

import { Dates, Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig = {
  ascensionOnSunday: false,
  christmastideEnds: 'o',
  christmastideIncludesTheSeasonOfEpiphany: true,
  corpusChristiOnThursday: false,
  epiphanyOnJan6: true,
};

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintAdalbertBishopAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintGeorgeMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
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
      key: 'saintFlorianMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'blessedSaraSalkahaziVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintLadislaus',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    // In Slovakia and Czech Republic, the two brothers were originally
    // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
    // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-7-5`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintAnthonyZaccariaPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
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
      key: 'saintsAndrewZorardAndBenedictHermits',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
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
      key: 'saintGorazdAndCompanions',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedZdenkaSchelingovaVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      data: {
        meta: {
          titles: [Titles.MARTYR],
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
      key: 'saintHelena',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-18`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfSorrows',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-9-15`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintGallAbbotAndMissionary',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintMaurusBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'dedicationOfAParticularChurch',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-10-26`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'allSouls',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintEmeric',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-5`),
    },
    {
      // This key is dropped only because of adding Optional Memorial of St Barbara to the same day
      key: 'saintJohnDamascenePriestAndDoctor',
      date: dayjs.utc(`${year}-12-4`),
      drop: true,
    },
    {
      key: 'saintJohnDamascenePriestAndDoctorOrSaintBarbaraVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
