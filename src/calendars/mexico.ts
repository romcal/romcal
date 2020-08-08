import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
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
      key: 'saintFelipeDeJesusPriestAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-5`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedSebastianDeAparicioReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintMariaGuadalupeGarciaZavalaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'findingOfTheHolyCross',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfPerpetualHelp',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'ourLadyOfRefuge',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintMariaDeJesusSacramentadoVenegasVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
    },
    {
      key: 'blessedBartolomeLaurelReligiousAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedJuniperoSerraPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintJoseMariaDeYermoPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'ourLadyOfMercy',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintRafaelGuizarYValenciaBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'blessedMiguelAgustinProPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJuanDiegoCuauhtlatoatzin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
