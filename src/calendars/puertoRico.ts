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
      key: 'theMostHolyNameOfJesus',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'ourLadyOfBethlehem',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'blessedMariaDoloresRodriguezSopenaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-10`),
    },
    {
      key: 'blessedCarlosManuelRodriguez',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintTeresaOfJesusJornetEIbarsVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintSoledadTorresAcostaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'ourLadyMotherOfDivineProvidencePatronessOfPuertoRico',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
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
