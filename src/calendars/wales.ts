import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintTeiloBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
      data: {},
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintDavidBishop',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-3-1`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBeunoAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-20`),
      data: {},
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintAsaphBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
      data: {},
    },
    {
      key: 'saintsAlbanJuliusAndAaronMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintJohnJonesPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintsPhilipEvansAndJohnLloydPriestsAndMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintGermanusOfAuxerreBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
      data: {},
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintDavidLewisPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintDeiniolBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-11`),
      data: {},
    },
    {
      key: 'saintRichardGwynMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'theSixWelshMartyrsAndCompanions',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintWinefrideVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      data: {},
    },
    {
      key: 'saintIlltudAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
      data: {},
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      key: 'allSaints',
      source: 'celebrations', // Override the default locale lookup
      rank: RanksEnum.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${y}-11-2`);
        } else {
          return date;
        }
      })(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'allSouls',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return dayjs.utc(`${y}-11-3`);
        } else {
          // Else, All Souls is the day after All Saints
          return dayjs.utc(`${y}-11-2`);
        }
      })(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'allSaintsOfWales',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
    {
      key: 'saintDubriciusBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnRobertsPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'peterAndPaulApostles',
      source: 'celebrations', // Override the default lookup source
      rank: RanksEnum.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-5-29`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      })(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
      prioritized: true,
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'assumption',
      source: 'celebrations',
      rank: RanksEnum.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-8-15`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'week').startOf('week');
        } else {
          return date;
        }
      })(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
      prioritized: true,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
