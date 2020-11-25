import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'joseph_de_anchieta_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'albertina_berkenbrock_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ignatius_de_azevedo_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'rose_of_lima_virgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'andrew_de_soveral_and_ambrose_francis_ferro_priests',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_aparecida_patroness_of_brazil',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'anthony_of_saint_anne_galvao_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
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
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
