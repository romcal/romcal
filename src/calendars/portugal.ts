import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedGoncaloDeAmarantePriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-11`),
    },
    {
      key: 'saintJohnDeBritoPriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'theFiveWoundsOfTheLord',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-7`),
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
      key: 'saintTheotoniusPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedJacintaAndFranciscoMarto',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-20`),
    },
    {
      key: 'saintJohnOfGodReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'blessedJoanOfPortugalVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
    },
    {
      key: 'ourLadyOfFatima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'guardianAngelOfPortugal',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAnthonyOfLisbonPriestAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'blessedSanchaAndMafaldaVirgins',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'blessedTheresaOfPortugalReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintElizabethOfPortugal',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
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
      key: 'blessedInacioDeAzevedoPriestAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedBartholomewOfTheMartyrsBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintBeatriceOfSilvaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'blessedJohnNewmanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'blessedGoncaloDeLagosPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'saintNunoDeSantaMaria',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
