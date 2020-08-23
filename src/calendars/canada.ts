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
      key: 'andre_bessette_religious',
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
      key: 'josephSpouseOfMaryCanada',
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
      key: 'marie_anne_blondin_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'our_lady_of_good_counsel',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintMarieOfTheIncarnationReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'marie_leonie_paradis_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'saintFrancoisDeLavalBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
    },
    {
      key: 'catherine_of_saint_augustine_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'saintEugeneDeMazenodBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'louis_zephirin_moreau_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'nykyta_budka_and_vasyl_velychkovsky_bishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'frederic_janssoone_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'andre_grasset_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'dina_belanger_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'emilie_tavernier_gamelin_religious',
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
      key: 'marie_rose_durocher_virgin',
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
      key: 'our_lady_of_guadalupe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
