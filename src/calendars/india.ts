import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'blessedKuriakoseEliasChavaraPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'blessedJosephVazPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'saintJohnDeBritoPriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintGonsaloGarciaMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'blessedMariaTheresaChiramelVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
    },
    {
      key: 'saintThomasTheApostle',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAlphonsaOfTheImmaculateConceptionVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-9-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFrancisXavierPriest',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
