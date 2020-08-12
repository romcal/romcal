import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
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
      key: 'ourLadyQueenOfPeace',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfLujanPatronessOfArgentina',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintLuigiOrionePriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'ourLadyOfItati',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintRocco',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'blessedCeferinoNamuncura',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-30`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfMercy',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintHectorValdivielsoSaezMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfThePillar',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    // Saturday of the 2nd Week of Easter
    {
      key: 'ourLadyOfTheValley',
      rank: RanksEnum.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.divineMercySunday(y).add(6, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
