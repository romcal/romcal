import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { TypesEnum } from '@romcal/enums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintAndreBessetteReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'saintMargueriteBourgeoysVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-3-19`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintKateriTekakwithaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-17`),
    },
    {
      key: 'blessedMarieAnneBlondinVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'ourLadyOfGoodCounsel',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintMarieOfTheIncarnationReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'blessedMarieLeonieParadisVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'saintFrancoisDeLavalBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
    },
    {
      key: 'blessedCatherineOfSaintAugustineVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'saintEugeneDeMazenodBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'blessedLouisZephirinMoreauBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedFredericJanssoonePriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'blessedAndreGrassetPriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-2`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedDinaBelangerVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'blessedEmilieTavernierGamelinReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrs',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'saintsNereusAndAchilleusMartyrs',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'saintPancrasMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'blessedMarieRoseDurocherVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'saintMargueriteDYouvilleReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintHedwigReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
