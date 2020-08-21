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
      key: 'philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'turibius_of_mogrovejo_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mariana_of_jesus_de_paredes_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'camillus_de_lellis_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
    },
    {
      key: 'francis_solanus_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'rose_of_lima_virgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'peter_claver_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'john_macias_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'louis_bertrand_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'miguel_febres_cordero_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'anthony_mary_claret_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'martin_de_porres_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_guadalupe_patroness_of_the_americas',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
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
