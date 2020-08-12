import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'santoNinoInfantJesus',
      rank: RanksEnum.FEAST,
      date: ((): dayjs.Dayjs => {
        // Third Sunday of January: Santo Niño (Holy Child Jesus)
        const firstDay = dayjs.utc(`${year}-1-1`);
        const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
        return dayjs.utc(`${year}-1-${feastDay}`);
      })(),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'saintsPedroBautistaPaulMikiAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintPedroCalungsodMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintRoch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintEzequielMorenoBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintRoseOfLimaSecondaryPatronessOfThePhilippines',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-8`),
    },
    {
      key: 'ourLadyOfGuadalupeCelestialPatronessOfThePhilippines',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
