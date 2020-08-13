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
      key: 'saintMunchinBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintItaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFursaAbbotAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'saintAidanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
    },
    {
      key: 'saintBrigidVirgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintMelBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
    },
    {
      key: 'saintGobnaitVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
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
      key: 'saintFintan',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintDavidBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'saintKieranBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-5`),
    },
    {
      key: 'saintSenanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'saintAengusOengusBishopAndAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-11`),
    },
    {
      key: 'saintPatrickBishop',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-3-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintEndaAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-21`),
    },
    {
      key: 'saintMacartanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-24`),
    },
    {
      key: 'saintCeallachCelsusBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-1`),
    },
    {
      key: 'saintMolaiseLaisrenLaserianBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'saintAsicusBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'saintConlethBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'blessedEdmundIgnatiusRiceReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintComgallAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'saintCarthageBishopMochuta',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintBrendanAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'saintKevinAbbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJarlathBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'saintColmanOfDromoreBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-7`),
    },
    {
      key: 'saintColumbaAbbotAndMissionary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintDavnetVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
    },
    {
      key: 'blessedIrishMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintOliverPlunkettBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMoninneVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
    },
    {
      key: 'saintMaelruainMaolruainVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'saintKillianBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
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
      key: 'saintDeclanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
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
      key: 'saintMuredachBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintAttractaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintLeliaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintFachtnaBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'ourLadyOfKnock',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintEugeneEoghanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintFiacreMonk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintAidanOfLindisfarneBishopAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'saintMacNissiBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintCiaranAbbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAilbeBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintPioOfPietrelcinaPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFinbarrBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'blessedColumbaMarmionPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'blessedJohnHenryNewmanPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintCaniceAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'saintGallAbbotAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintOtteranMonk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'saintColmanOfKilmacduaghBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-29`),
    },
    {
      key: 'saintMalachyBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'allSaintsOfIreland',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'saintWillibrordBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintLaurenceOTooleBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
    },
    {
      key: 'saintColumbanAbbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintColmanOfCloyneBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'saintFergalBishopAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'saintFinnianOfClonardBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'saintFlannanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-18`),
    },
    {
      key: 'saintFachananOfKilfenoraBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-20`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
