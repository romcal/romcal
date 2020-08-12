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
      key: 'saintMargaretOfHungary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
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
      key: 'saintMatthiasTheApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
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
      key: 'saintFlorianMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedGisela',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-7`),
    },
    {
      key: 'blessedSaraSalkahaziVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnNepomucenePriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedVilmosAporBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-23`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'transferOfTheRelicsOfSaintStephen',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintAgnesOfBohemiaVirgin',
      rank: RanksEnum.MEMORIAL, // Memorial
      date: dayjs.utc(`${year}-6-8`), // 8th of June
      liturgicalColors: LiturgicalColorsEnum.WHITE, // What is the Liturgical color for this?
    },
    {
      key: 'saintLadislaus',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
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
      key: 'saintsAndrewZorardAndBenedictHermits',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
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
      key: 'saintKingaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
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
      key: 'blessedInnocentXiPope',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'saintStephenOfHungary',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-20`),
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintGerardBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfHungary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintMaurusBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'blessedTheodoreRomzhaBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintEmeric',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'hungarianSaintsAndBlesseds',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
