import dayjs from 'dayjs';

import { Dates, Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'blessedOdoricOfPordenonePriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-14`),
    },
    {
      key: 'saintFrancisFernandezDeCapillasPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
    },
    {
      key: 'saintLawrenceBaiXiaomanMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintLaurenceWangBingAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJosephFreinademetzPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJohnOfTrioraPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-13`),
    },
    {
      key: 'saintMartinWuXueshengAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintLucyYiZhenmeiVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-19`),
    },
    {
      key: 'saintPaulLiuHanzouPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
    },
    {
      key: 'saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintAgnesTsaoKouYingMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'saintJosephZhangDapengMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-12`),
    },
    {
      key: 'blessedMariaAssuntaPallottaVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
    },
    {
      key: 'blessedJohnMartinMoyePriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'ourLadyOfChina',
      type: Types.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => {
        const firstMay = dayjs.utc(`${y}-5-1`);
        const memorialDay = firstMay;
        // determine first saturday
        memorialDay.add(6 - firstMay.day(), 'day');
        // Second saturday
        memorialDay.add(7, 'day');
        return memorialDay;
      })(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintPeterLiuMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-14`),
    },
    {
      key: 'saintPeterSanzBishopAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintJoachimHoMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
    },
    {
      key: 'saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintJosephYuanPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-23`),
    },
    {
      key: 'sevenMartyredNunsFromTheFranciscanMissionariesOfMary',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-7-9`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintLeoManginPriestAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintAlbericCrescitelliPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintPaulChenChangpinAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedMauriceTornayPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
    },
    {
      key: 'saintJohnGabrielPerboyrePriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-11`),
    },
    {
      key: 'saintFrancisDiazPriestAndCompanionsMartyrs',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintPeterWuMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintGabrieltaurinDufresseBishopAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
  ];
  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
