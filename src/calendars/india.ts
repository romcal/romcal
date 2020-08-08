import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedKuriakoseEliasChavaraPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'blessedJosephVazPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'saintJohnDeBritoPriestAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintGonsaloGarciaMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedMariaTheresaChiramelVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
    },
    {
      key: 'saintThomasTheApostle',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAlphonsaOfTheImmaculateConceptionVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-9-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFrancisXavierPriest',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
