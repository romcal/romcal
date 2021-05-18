import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: false,
  epiphanyOnSunday: false,
};

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'our_lady_mother_of_christian_unity',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_ogilvie_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-10`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    // TODO: Should this key be dropped or kept in the CzechNational Proper?
    // {
    //   key: 'adalbert_of_prague_bishop',
    //   rank: Ranks.MEMORIAL,
    //   date: dayjs.utc(`${year}-4-23`),
    //   liturgicalColors: LiturgicalColors.RED,
    //   metadata: {
    //     titles: [Titles.MARTYR],
    //   },
    // },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'catherine_of_siena_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'sigismund_of_burgundy_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'john_sarkander_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-6`),
    },
    {
      key: 'our_lady_mediatrix_of_all_grace',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-8`),
    },
    {
      key: 'john_nepomucene_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'clement_mary_hofbauer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'zdislava_of_lemberk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'vitus_of_lucania_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'john_nepomucene_neumann_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'procopius_of_sazava_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      rank: Ranks.SOLEMNITY, // TODO: Should we add `Patrons of Moravia`?
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'benedict_of_nursia_abbot_patron_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'hroznata_of_bohemia_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ceslaus_of_poland_and_hyacinth_of_poland_priests',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
    },
    {
      key: 'bridget_of_sweden_religious_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'gorazd_of_moravia_and_companions',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
    },
    {
      key: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'first_polish_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'melchior_grodziecki_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
    },
    {
      key: 'charles_spinola_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'ludmila_of_bohemia_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      // Lowered rank
      // Moved from 16 Sep
      key: 'cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'lawrence_ruiz_and_companions_martyrs',
      date: dayjs.utc(`${year}-9-28`),
      drop: true,
    },
    {
      key: 'radim_of_gniezno_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'charles_i_of_austria',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      // TODO: Deal with this solemnity for consecrated churches
      //       with known consecration date (#136)
      key: 'dedication_of_consecrated_churches',
      rank: Ranks.SOLEMNITY,
      // TODO: On 25 Oct or the following Sunday
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'wolfgang_of_regensburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
    },
    {
      key: 'agnes_of_bohemia_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'edmund_campion_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-1`),
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
