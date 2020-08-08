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
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintCyrilOfJerusalemBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-22`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintGeorgeMartyr',
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
      key: 'saintIrene',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfFatima',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'saintCyrilOfAlexandriaBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
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
      key: 'saintMarina',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
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
      key: 'saintPantaleon',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintLydiaOfPhilippi',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
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
      key: 'saintsCosmasAndDamianMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDionysiusTheAreopagite',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDemetrius',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'presentationOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'saintNicholasBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintSpyridon',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
