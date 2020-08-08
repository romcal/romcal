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
      key: 'saintEulogiusOfCordobaBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-9`),
    },
    {
      key: 'saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintIldephonsusOfToledoBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHermenegildMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnOfAvilaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintIsidoreTheFarmer',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPaschalBaylon',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-17`),
    },
    {
      key: 'saintJoaquinaVedruna',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintFerdinand',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintMariaMicaelaOfTheBlessedSacramentVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'saintPelagiusMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintJamesApostlePatronOfSpain',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-25`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintEzequielMorenoBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintTeresaOfJesusJornetEIbarsVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFrancisBorgiaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'saintThomasOfVillanovaBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'saintSoledadTorresAcostaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'ourLadyOfThePillar',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPeterOfAlcantaraPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintLeanderBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'saintEulaliaOfMeridaVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintJohnOfTheCrossPriestAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
