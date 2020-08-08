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
      key: 'saintJoseDeAnchietaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedAlbertinaBerkenbrockVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintPaulinaOfTheAgonizingHeartOfJesusVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedInacioDeAzevedoPriestAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfAparecidaPatronessOfBrazil',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
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
