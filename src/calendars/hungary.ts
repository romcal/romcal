import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'paul_of_thebes_hermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
    },
    {
      key: 'margaret_of_hungary_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'eusebius_of_esztergom_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
    },
    {
      key: 'ladislaus_batthyany_strattmann',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'jacinta_marto_and_francisco_marto',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-20`),
    },
    {
      key: 'matthias_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'zoltan_lajos_meszlenyi_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'bernadette_soubirous_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-16`),
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
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
      key: 'florian_of_lorch_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ceferino_gimenez_malla_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gisela_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-7`),
    },
    {
      key: 'john_of_avila_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'sara_salkahazi_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_nepomucene_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_scheffler_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-17`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'william_apor_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_help_of_christians',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'translation_of_the_relics_of_saint_stephen_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'quirinus_of_sescia_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-4`),
    },
    {
      key: 'agnes_of_bohemia_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'istvan_sandor_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'yolanda_of_poland_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'cyril_of_alexandria_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'josemaria_escriva_de_balaguer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'ladislaus_i_of_hungary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'visitation_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'andrew_zorard_of_nitra_and_benedict_of_skalka_hermits',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
    },
    {
      key: 'pavel_peter_gojdic_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'kinga_of_poland_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'sharbel_makhluf_priest',
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
      key: 'innocent_xi_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'pontian_i_pope_and_hippolytus_of_rome_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'bernard_of_clairvaux_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'stephen_i_of_hungary',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-8-20`),
    },
    {
      key: 'teresa_of_calcutta_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'most_holy_name_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'hildegard_of_bingen_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'gerard_of_csanad_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'szilard_bogdanffy_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_hungary_patroness_of_hungary',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'charles_i_of_austria',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'maurus_of_pecs_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'theodore_romzha_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'all_souls',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },
    {
      key: 'emeric_of_hungary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'hungarian_saints_and_blesseds',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'gertrude_the_great_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_brenner_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-15`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
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
