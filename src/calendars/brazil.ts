import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'saintJoseDeAnchietaPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedAlbertinaBerkenbrockVirginAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPaulinaOfTheAgonizingHeartOfJesusVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedInacioDeAzevedoPriestAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintRoseOfLima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyOfAparecidaPatronessOfBrazil',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.RED,
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
