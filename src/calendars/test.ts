import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'maryMotherOfTheChurch',
      rank: Ranks.OPT_MEMORIAL,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      prioritized: true,
    },
    {
      key: 'ashWednesday',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.SUNDAY,
      date: dayjs.utc(Dates.ashWednesday(year).toISOString()),
    },
    // Test priority where saintLukeTheEvangelist is defined
    // in the "test" country as a commemoration instead of its
    // default rank, feast...
    {
      key: 'saintLukeTheEvangelist',
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

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
