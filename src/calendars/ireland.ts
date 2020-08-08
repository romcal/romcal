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
      key: 'saintMunchinBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintItaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFursaAbbotAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'saintAidanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
    },
    {
      key: 'saintBrigidVirgin',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-1`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintMelBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
    },
    {
      key: 'saintGobnaitVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
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
      key: 'saintFintan',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintDavidBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'saintKieranBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-5`),
    },
    {
      key: 'saintSenanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'saintAengusOengusBishopAndAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-11`),
    },
    {
      key: 'saintPatrickBishop',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-3-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintEndaAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-21`),
    },
    {
      key: 'saintMacartanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-24`),
    },
    {
      key: 'saintCeallachCelsusBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-1`),
    },
    {
      key: 'saintMolaiseLaisrenLaserianBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'saintAsicusBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'saintConlethBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'blessedEdmundIgnatiusRiceReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintComgallAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'saintCarthageBishopMochuta',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintBrendanAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'saintKevinAbbot',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJarlathBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'saintColmanOfDromoreBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-7`),
    },
    {
      key: 'saintColumbaAbbotAndMissionary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDavnetVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
    },
    {
      key: 'blessedIrishMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintOliverPlunkettBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMoninneVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
    },
    {
      key: 'saintMaelruainMaolruainVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'saintKillianBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
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
      key: 'saintDeclanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
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
      key: 'saintMuredachBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintAttractaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintLeliaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintFachtnaBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'ourLadyOfKnock',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintEugeneEoghanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintFiacreMonk',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintAidanOfLindisfarneBishopAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'saintMacNissiBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintCiaranAbbot',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAilbeBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintPioOfPietrelcinaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFinbarrBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'blessedColumbaMarmionPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'blessedJohnHenryNewmanPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintCaniceAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'saintGallAbbotAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintOtteranMonk',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'saintColmanOfKilmacduaghBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-29`),
    },
    {
      key: 'saintMalachyBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'allSaintsOfIreland',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'saintWillibrordBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintLaurenceOTooleBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
    },
    {
      key: 'saintColumbanAbbot',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintColmanOfCloyneBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'saintFergalBishopAndMissionary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'saintFinnianOfClonardBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'saintFlannanBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-18`),
    },
    {
      key: 'saintFachananOfKilfenoraBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-20`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
