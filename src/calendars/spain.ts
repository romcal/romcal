import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'saintEulogiusOfCordobaBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-9`),
    },
    {
      key: 'saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintIldephonsusOfToledoBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHermenegildMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-26`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'catherine_of_siena_virgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnOfAvilaPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPaschalBaylon',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-17`),
    },
    {
      key: 'saintJoaquinaVedruna',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintFerdinand',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintMariaMicaelaOfTheBlessedSacramentVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'saintPelagiusMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'benedict_of_nursia_abbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bridget_of_sweden_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintJamesApostlePatronOfSpain',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-25`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintEzequielMorenoBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintTeresaOfJesusJornetEIbarsVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFrancisBorgiaPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'saintThomasOfVillanovaBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'saintSoledadTorresAcostaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'our_lady_of_the_pillar',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-15`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPeterOfAlcantaraPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintLeanderBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'saintEulaliaOfMeridaVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintJohnOfTheCrossPriestAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
