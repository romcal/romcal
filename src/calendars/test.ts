import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'maryMotherOfTheChurch',
      rank: RanksEnum.OPT_MEMORIAL,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      prioritized: true,
    },
    {
      key: 'ashWednesday',
      source: 'celebrations', // Override the default lookup source
      rank: RanksEnum.SUNDAY,
      date: dayjs.utc(Dates.ashWednesday(year).toISOString()),
    },
    // Test priority where saintLukeTheEvangelist is defined
    // in the "test" country as a commemoration instead of its
    // default rank, feast...
    {
      key: 'saintLukeTheEvangelist',
      rank: RanksEnum.COMMEMORATION,
      date: dayjs.utc(`${year}-10-18`),
      prioritized: true,
    },
    {
      key: 'aSampleCelebration1',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-9`),
      prioritized: true,
    },
    {
      key: 'aSampleCelebration2',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-25`),
      prioritized: true,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
