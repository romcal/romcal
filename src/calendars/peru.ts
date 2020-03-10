import dayjs from 'dayjs';

import * as Locales from '@RomcalLib/Locales';
import * as Dates from '@RomcalLib/Dates';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'findingOfTheHolyCross',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'saintMarianaDeJesusDeParedesVirgin',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-26`),
    },
    {
      key: 'saintFrancisSolanusPriest',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfPeace',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'saintRoseOfLima',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintJohnMaciasReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-18`),
    },
    {
      key: 'ourLadyOfMercy',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'ourLordOfMiracles',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-28`),
    },
    {
      key: 'saintMartinDePorresReligious',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: TypesEnum.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
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
