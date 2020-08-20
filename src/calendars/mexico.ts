import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
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
      key: 'saintFelipeDeJesusPriestAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'sebastian_de_aparicio_religious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintMariaGuadalupeGarciaZavalaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'finding_of_the_holy_cross',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyOfPerpetualHelp',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'ourLadyOfRefuge',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintMariaDeJesusSacramentadoVenegasVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
    },
    {
      key: 'bartholomew_dias_laurel_religious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'peter_de_zuniga_and_louis_flores_priests',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'junipero_serra_priest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintJoseMariaDeYermoPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'ourLadyOfMercy',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintRafaelGuizarYValenciaBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'miguel_agustin_pro_priest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJuanDiegoCuauhtlatoatzin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'our_lady_of_guadalupe',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
