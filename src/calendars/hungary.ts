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
      key: 'saintMargaretOfHungary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'saintMatthiasTheApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintFlorianMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gisela_of_hungary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-7`),
    },
    {
      key: 'sara_salkahazi_virgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'william_apor_bishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_help_of_christians',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'transferOfTheRelicsOfSaintStephen',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintAgnesOfBohemiaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'istvan_sandor_religious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCyrilOfAlexandriaBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJosemariaEscrivaDeBalaguerPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintLadislaus',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintKingaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
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
      key: 'innocent_xi_pope',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'saintsPontianPopeAndHippolytusPriestMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBernardOfClairvauxAbbotAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintStephenOfHungary',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-8-20`),
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'most_holy_name_of_mary',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintHildegardOfBingenAbbessAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintGerardBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_hungary_principal_patron_of_hungary',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-10-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'charles_i_of_austria',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'saintMaurusBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'theodore_romzha_bishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'all_souls',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColorsEnum.PURPLE, LiturgicalColorsEnum.BLACK],
    },
    {
      key: 'saintEmeric',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'hungarian_saints_and_blesseds',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'saintGertrudeTheGreatVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
