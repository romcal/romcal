import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'blessedOdoricOfPordenonePriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-14`),
    },
    {
      key: 'saintFrancisFernandezDeCapillasPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
    },
    {
      key: 'saintLawrenceBaiXiaomanMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintLaurenceWangBingAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJosephFreinademetzPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJohnOfTrioraPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-13`),
    },
    {
      key: 'saintMartinWuXueshengAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintLucyYiZhenmeiVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-19`),
    },
    {
      key: 'saintPaulLiuHanzouPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
    },
    {
      key: 'saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintAgnesTsaoKouYingMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'saintJosephZhangDapengMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-12`),
    },
    {
      key: 'blessedMariaAssuntaPallottaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
    },
    {
      key: 'blessedJohnMartinMoyePriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'ourLadyOfChina',
      rank: RanksEnum.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => {
        const firstMay = dayjs.utc(`${y}-5-1`);
        const memorialDay = firstMay;
        // determine first saturday
        memorialDay.add(6 - firstMay.day(), 'day');
        // Second saturday
        memorialDay.add(7, 'day');
        return memorialDay;
      })(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPeterLiuMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-14`),
    },
    {
      key: 'saintPeterSanzBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintJoachimHoMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
    },
    {
      key: 'saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintJosephYuanPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-23`),
    },
    {
      key: 'sevenMartyredNunsFromTheFranciscanMissionariesOfMary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintLeoManginPriestAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintAlbericCrescitelliPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintPaulChenChangpinAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedMauriceTornayPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
    },
    {
      key: 'saintJohnGabrielPerboyrePriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-11`),
    },
    {
      key: 'saintFrancisDiazPriestAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintPeterWuMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintGabrieltaurinDufresseBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];
  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
