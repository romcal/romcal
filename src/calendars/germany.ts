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
      key: 'saintJohnNeumannBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
    },
    {
      key: 'saintValentineOfRaetiaBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'saintSeverinusOfNoricumMonk',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'saintMeinradMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedHenrySusoPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintRabanusMaurusBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
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
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintWalburgaAbbess',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintFridolinOfSackingenMonk',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-6`),
    },
    {
      key: 'saintBrunoBonifaceOfQuerfurtBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMatilda',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-14`),
    },
    {
      key: 'saintClementMaryHofbauerPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-15`),
    },
    {
      key: 'saintGertrudeOfNivellesAbbess',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintLudgerBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-26`),
    },
    {
      key: 'saintLeoIxPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
    },
    {
      key: 'blessedMarcelCalloMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintConradOfParzhamReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
    },
    {
      key: 'saintPeterCanisiusPriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'saintFlorianAndHisCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintGotthardBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
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
      key: 'saintHermannJosephPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'saintVitusMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBennoOfMeissenBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-16`),
    },
    {
      key: 'saintHemmaOfGurk',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'saintOttoOfBambergBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintUlrichOfAugsburg',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintWillibaldBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'saintKilianBishopAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintsCanuteEricAndOlafMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
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
      key: 'saintsHenryAndCunigunde',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
    },
    {
      key: 'saintMargaretOfAntiochVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintChristopherMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      metadata: {
        titles: [TITLES.MARTYR],
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
      key: 'saintPaulinusOfTrierBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
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
      key: 'saintLambertBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMauriceAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-22`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintsRupertAndVirgiliusOfSalzburgBishops',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintNicholasOfFlueHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'saintLeobaAbbess',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
    },
    {
      key: 'saintGallAbbotAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintWendelinAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintUrsulaAndCompanionsVirginsAndMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintWolfgangOfRegensburgBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
    },
    {
      key: 'saintHubertOfLiegeBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintPirminAbbotAndBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintLeonardOfNoblacHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
    },
    {
      key: 'saintWillibrordBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintLeopoldIII',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
    },
    {
      key: 'saintGertrudeTheGreatVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCorbinianBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
    },
    {
      key: 'saintsConradAndGebhardOfConstanceBishops',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
    },
    {
      key: 'saintLuciusOfChurBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'blessedAdolphKolpingPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'saintAnnoIiBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
    },
    {
      key: 'saintOdileOfAlsaceAbbess',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
