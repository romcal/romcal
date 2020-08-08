import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'findingOfTheHolyCross',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
    },
    {
      key: 'ourLadyHelpOfChristians',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'saintMarianaDeJesusDeParedesVirgin',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-26`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfPeace',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintJohnMaciasReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-18`),
    },
    {
      key: 'ourLadyOfMercy',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'ourLordOfMiracles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-28`),
    },
    {
      key: 'saintMartinDePorresReligious',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.FEAST,
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
