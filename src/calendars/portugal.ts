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
      key: 'blessedGoncaloDeAmarantePriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-11`),
    },
    {
      key: 'saintJohnDeBritoPriestAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'theFiveWoundsOfTheLord',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-7`),
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
      key: 'saintTheotoniusPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedJacintaAndFranciscoMarto',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-20`),
    },
    {
      key: 'saintJohnOfGodReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
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
      key: 'blessedJoanOfPortugalVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
    },
    {
      key: 'ourLadyOfFatima',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'guardianAngelOfPortugal',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAnthonyOfLisbonPriestAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'blessedSanchaAndMafaldaVirgins',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'blessedTheresaOfPortugalReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintElizabethOfPortugal',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
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
      key: 'blessedInacioDeAzevedoPriestAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedBartholomewOfTheMartyrsBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
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
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintBeatriceOfSilvaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'blessedJohnNewmanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'blessedGoncaloDeLagosPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'saintNunoDeSantaMaria',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
