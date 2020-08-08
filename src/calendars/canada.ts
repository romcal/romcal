import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintAndreBessetteReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'saintMargueriteBourgeoysVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-3-19`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintKateriTekakwithaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-17`),
    },
    {
      key: 'blessedMarieAnneBlondinVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'ourLadyOfGoodCounsel',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintMarieOfTheIncarnationReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'blessedMarieLeonieParadisVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'saintFrancoisDeLavalBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
    },
    {
      key: 'blessedCatherineOfSaintAugustineVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'saintEugeneDeMazenodBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'blessedLouisZephirinMoreauBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedFredericJanssoonePriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'blessedAndreGrassetPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-2`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedDinaBelangerVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'blessedEmilieTavernierGamelinReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'saintsNereusAndAchilleusMartyrs',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'saintPancrasMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'blessedMarieRoseDurocherVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'saintMargueriteDYouvilleReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintHedwigReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
