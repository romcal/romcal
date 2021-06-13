import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import {
  RomcalConfig,
  RomcalConfigInCalendarDef,
} from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Precedences } from '../constants/precedences';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (
  config: RomcalConfig,
): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'mary_mother_of_the_church',
      precedence: Precedences.OptionalMemorial_12,
      date: ((y: number): dayjs.Dayjs =>
        Dates.pentecostSunday(y).add(1, 'day'))(year),
      prioritized: true,
    },

    {
      key: 'ash_wednesday',
      rank: Ranks.SUNDAY,
      date: dayjs.utc(Dates.ashWednesday(year)),
    },

    // Test priority where luke_evangelist is defined
    // in the "test" country as a commemoration instead of its
    // default rank, feast...
    {
      key: 'luke_evangelist',
      rank: Ranks.COMMEMORATION,
      date: '10-18',
      prioritized: true,
    },

    {
      key: 'aSampleCelebration1',
      precedence: Precedences.ProperMemorial_OtherProperMemorial_11b,
      date: '11-9',
      prioritized: true,
    },

    {
      key: 'aSampleCelebration2',
      rank: Ranks.SOLEMNITY,
      date: '12-25',
      prioritized: true,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
