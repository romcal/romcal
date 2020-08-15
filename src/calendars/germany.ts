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
      key: 'saintJohnNeumannBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
    },
    {
      key: 'saintValentineOfRaetiaBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'saintSeverinusOfNoricumMonk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'saintMeinradMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'blessedHenrySusoPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintRabanusMaurusBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
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
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintWalburgaAbbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintFridolinOfSackingenMonk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-6`),
    },
    {
      key: 'saintBrunoBonifaceOfQuerfurtBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMatilda',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-14`),
    },
    {
      key: 'saintClementMaryHofbauerPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-15`),
    },
    {
      key: 'saintGertrudeOfNivellesAbbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintLudgerBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-26`),
    },
    {
      key: 'saintLeoIxPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
    },
    {
      key: 'blessedMarcelCalloMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintConradOfParzhamReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
    },
    {
      key: 'saintPeterCanisiusPriestAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
      key: 'saintFlorianAndHisCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintGotthardBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
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
      key: 'saintHermannJosephPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'saintVitusMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBennoOfMeissenBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-16`),
    },
    {
      key: 'saintHemmaOfGurk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'saintOttoOfBambergBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintUlrichOfAugsburg',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintWillibaldBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'saintKilianBishopAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintsCanuteEricAndOlafMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'saintsHenryAndCunigunde',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
    },
    {
      key: 'saintMargaretOfAntiochVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintChristopherMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      metadata: {
        titles: [Titles.MARTYR],
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
      key: 'saintPaulinusOfTrierBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'saintHildegardOfBingenAbbessAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintLambertBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMauriceAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintsRupertAndVirgiliusOfSalzburgBishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'saintNicholasOfFlueHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'saintLeobaAbbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
    },
    {
      key: 'saintGallAbbotAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintWendelinAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'saintUrsulaAndCompanionsVirginsAndMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintWolfgangOfRegensburgBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
    },
    {
      key: 'saintHubertOfLiegeBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintPirminAbbotAndBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintLeonardOfNoblacHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
    },
    {
      key: 'saintWillibrordBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintLeopoldIII',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
    },
    {
      key: 'saintGertrudeTheGreatVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintCorbinianBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
    },
    {
      key: 'saintsConradAndGebhardOfConstanceBishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
    },
    {
      key: 'saintLuciusOfChurBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'blessedAdolphKolpingPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'saintAnnoIiBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
    },
    {
      key: 'saintOdileOfAlsaceAbbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
