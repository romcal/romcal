import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'mary_mother_of_the_church',
      rank: Ranks.OPT_MEMORIAL,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      prioritized: true,
    },
    {
      key: 'ash_wednesday',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.SUNDAY,
      date: dayjs.utc(Dates.ashWednesday(year).toISOString()),
    },
    // Test priority where luke_evangelist is defined
    // in the "test" country as a commemoration instead of its
    // default rank, feast...
    {
      key: 'luke_evangelist',
      rank: Ranks.COMMEMORATION,
      date: dayjs.utc(`${year}-10-18`),
      prioritized: true,
    },
    {
      key: 'aSampleCelebration1',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-9`),
      prioritized: true,
    },
    {
      key: 'aSampleCelebration2',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-12-25`),
      prioritized: true,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
