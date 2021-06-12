import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'kuriakose_elias_of_the_holy_family_chavara_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'joseph_vaz_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'john_de_britto_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gundisalvus_garcia_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'mary_theresa_chiramel_mankidiyan_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
    },
    {
      key: 'thomas_apostle',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'alphonsa_of_the_immaculate_conception_muttathupadathu_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'teresa_of_calcutta_religious',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-9-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'francis_xavier_priest',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
