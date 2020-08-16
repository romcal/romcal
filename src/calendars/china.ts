import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'blessedOdoricOfPordenonePriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-14`),
    },
    {
      key: 'saintFrancisFernandezDeCapillasPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
    },
    {
      key: 'saintLawrenceBaiXiaomanMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintLaurenceWangBingAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJosephFreinademetzPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintJohnOfTrioraPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-13`),
    },
    {
      key: 'saintMartinWuXueshengAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintLucyYiZhenmeiVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-19`),
    },
    {
      key: 'saintPaulLiuHanzouPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
    },
    {
      key: 'saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'saintAgnesTsaoKouYingMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'saintJosephZhangDapengMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-12`),
    },
    {
      key: 'blessedMariaAssuntaPallottaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-8`),
    },
    {
      key: 'blessedJohnMartinMoyePriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'ourLadyOfChina',
      rank: Ranks.MEMORIAL,
      date: ((y: number): dayjs.Dayjs => {
        const firstMay = dayjs.utc(`${y}-5-1`);
        const memorialDay = firstMay;
        // determine first saturday
        memorialDay.add(6 - firstMay.day(), 'day');
        // Second saturday
        memorialDay.add(7, 'day');
        return memorialDay;
      })(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPeterLiuMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-14`),
    },
    {
      key: 'saintPeterSanzBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintJoachimHoMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
    },
    {
      key: 'saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintJosephYuanPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-23`),
    },
    {
      key: 'sevenMartyredNunsFromTheFranciscanMissionariesOfMary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-7-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintLeoManginPriestAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintAlbericCrescitelliPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintPaulChenChangpinAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedMauriceTornayPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
    },
    {
      key: 'saintJohnGabrielPerboyrePriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-11`),
    },
    {
      key: 'saintFrancisDiazPriestAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPeterWuMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintGabrieltaurinDufresseBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];
  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
