import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'laura_vicuna_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'our_lady_queen_of_peace',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
    },
    {
      key: 'turibius_of_mogrovejo_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_lujan_patroness_of_argentina',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'isidore_the_farmer',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'luigi_orione_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'our_lady_of_itati',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'augustine_zhao_rong_priest_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'sharbel_makhluf_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
    },
    {
      key: 'francis_solanus_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'roch_of_montpellier',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'zepherin_namuncura',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'rose_of_lima_virgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_mercy',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'benedict_of_jesus_valdivielso_saez_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_the_pillar',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_guadalupe_patroness_of_the_americas',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_the_valley',
      rank: Ranks.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.divineMercySunday(y).add(6, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
