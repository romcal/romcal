import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'holy_child_of_cebu',
      rank: Ranks.FEAST,
      date: ((): dayjs.Dayjs => {
        // Third Sunday of January: Santo Niño (Holy Child Jesus)
        const firstDay = dayjs.utc(`${year}-1-1`);
        const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
        return dayjs.utc(`${year}-1-${feastDay}`);
      })(),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'peter_baptist_blasquez_paul_miki_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'pedro_calungsod_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'isidore_the_farmer',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'roch_of_montpellier',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'ezequiel_moreno_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'rose_of_lima_virgin_copatroness_of_the_philippines',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'lawrence_ruiz_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'immaculate_conception_of_mary_patroness_of_the_philippines',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-12-8`),
    },
    {
      key: 'our_lady_of_guadalupe_patroness_of_the_philippiness',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
