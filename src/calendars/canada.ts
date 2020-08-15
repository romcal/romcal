import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles/titles.constant';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'saintAndreBessetteReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'saintMargueriteBourgeoysVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-3-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintKateriTekakwithaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-17`),
    },
    {
      key: 'blessedMarieAnneBlondinVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'ourLadyOfGoodCounsel',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintMarieOfTheIncarnationReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'blessedMarieLeonieParadisVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'saintFrancoisDeLavalBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
    },
    {
      key: 'blessedCatherineOfSaintAugustineVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'saintEugeneDeMazenodBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'blessedLouisZephirinMoreauBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedFredericJanssoonePriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'blessedAndreGrassetPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'blessedDinaBelangerVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'blessedEmilieTavernierGamelinReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'saintsNereusAndAchilleusMartyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'saintPancrasMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'blessedMarieRoseDurocherVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'saintMargueriteDYouvilleReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintHedwigReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
