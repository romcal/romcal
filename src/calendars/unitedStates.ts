import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintElizabethAnnSetonReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJohnNeumannBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAndreBessetteReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-6`),
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMarianneCopeVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'saintKatharineDrexelVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-3`),
    },
    {
      key: 'saintDamienDeVeusterPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'blessedJuniperoSerraPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintKateriTekakwithaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'saintPeterClaverPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedMarieRoseDurocherVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintFrancesXavierCabriniVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRosePhilippineDuchesneVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'blessedMiguelAgustinProPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
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
