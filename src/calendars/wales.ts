import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintTeiloBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-9`),
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
      key: 'saintDavidBishop',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-3-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBeunoAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-20`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintAsaphBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintsAlbanJuliusAndAaronMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintJohnJonesPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'saintsPhilipEvansAndJohnLloydPriestsAndMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-25`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintGermanusOfAuxerreBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
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
      key: 'saintDavidLewisPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintDeiniolBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-11`),
    },
    {
      key: 'saintRichardGwynMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'theSixWelshMartyrsAndCompanions',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-25`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintWinefrideVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintIlltudAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      key: 'allSaints',
      source: 'celebrations', // Override the default locale lookup
      rank: Ranks.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${y}-11-2`);
        } else {
          return date;
        }
      })(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'allSouls',
      rank: Ranks.FEAST,
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
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
      prioritized: true,
    },
    {
      key: 'allSaintsOfWales',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'saintDubriciusBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnRobertsPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'peterAndPaulApostles',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.SOLEMNITY,
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
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'assumption',
      source: 'celebrations',
      rank: Ranks.SOLEMNITY,
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
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
