import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef = {
  ascensionOnSunday: true,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: true,
};

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'saintGenevieveVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintRemigiusBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
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
      key: 'saintBernadetteSoubirousVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-18`),
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
      key: 'saintIvoPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-19`),
    },
    {
      key: 'saintJoanOfArcVirginSecondaryPatronessOfFrance',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPothinusBishopSaintBlandinaVirginAndTheirCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
    },
    {
      key: 'saintClotilde',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-4`),
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
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
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
      key: 'saintCaesariusOfArlesBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
