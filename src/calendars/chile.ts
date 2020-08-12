import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedLauraVicunaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'blessedPiusIxPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
    },
    {
      key: 'ourLadyOfLourdes',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintTeresaOfLosAndesVirgin',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintHenry',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfMountCarmelMotherAndQueenOfChile',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAlbertoHurtadoPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfMercy',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
