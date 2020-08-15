import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'blessedLauraVicunaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'blessedPiusIxPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
    },
    {
      key: 'ourLadyOfLourdes',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintTeresaOfLosAndesVirgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintHenry',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfMountCarmelMotherAndQueenOfChile',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAlbertoHurtadoPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRoseOfLima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfMercy',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
