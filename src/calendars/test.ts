import dayjs from 'dayjs';

import * as Locales from '@RomcalLib/Locales';
import * as Dates from '@RomcalLib/Dates';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'maryMotherOfTheChurch',
      type: TypesEnum.OPT_MEMORIAL,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      data: {
        prioritized: true,
      },
    },
    {
      key: 'ashWednesday',
      source: 'celebrations', // Override the default lookup source
      type: TypesEnum.SUNDAY,
      date: dayjs.utc(Dates.ashWednesday(year).toISOString()),
    },
    // Test priority where saintLukeTheEvangelist is defined
    // in the "test" country as a commemoration instead of its
    // default type, feast...
    {
      key: 'saintLukeTheEvangelist',
      type: TypesEnum.COMMEMORATION,
      date: dayjs.utc(`${year}-10-18`),
      data: {
        prioritized: true,
      },
    },
    {
      key: 'aSampleCelebration1',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-9`),
      data: {
        prioritized: true,
      },
    },
    {
      key: 'aSampleCelebration2',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-25`),
      data: {
        prioritized: true,
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
