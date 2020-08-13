import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { Dates } from '../lib/Dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedLauraVicunaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'ourLadyQueenOfPeace',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfLujanPatronessOfArgentina',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintLuigiOrionePriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'ourLadyOfItati',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRocco',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'blessedCeferinoNamuncura',
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
      key: 'ourLadyOfMercy',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintHectorValdivielsoSaezMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyOfThePillar',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    // Saturday of the 2nd Week of Easter
    {
      key: 'ourLadyOfTheValley',
      rank: Ranks.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.divineMercySunday(y).add(6, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
