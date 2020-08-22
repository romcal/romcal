import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'john_nepomucene_neumann_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-5`),
    },
    {
      key: 'valentine_of_raetia_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'severinus_of_noricum_monk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-8`),
    },
    {
      key: 'meinrad_of_einsiedeln_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'henry_suso_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'rabanus_maurus_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
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
      key: 'matthias_apostle',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'walpurga_of_heidenheim_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-25`),
    },
    {
      key: 'fridolin_of_sackingen_monk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-6`),
    },
    {
      key: 'bruno_of_querfurt_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'matilda_of_ringelheim',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-14`),
    },
    {
      key: 'clement_mary_hofbauer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-15`),
    },
    {
      key: 'gertrude_of_nivelles_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'ludger_of_munster_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-26`),
    },
    {
      key: 'leo_ix_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
    },
    {
      key: 'marcel_callo_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-19`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'conrad_of_parzham_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
    },
    {
      key: 'peter_canisius_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
      key: 'florian_of_lorch_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gotthard_of_hildesheim_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
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
      key: 'hermann_joseph_of_steinfeld_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
    },
    {
      key: 'vitus_of_lucania_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'benno_of_meissen_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-16`),
    },
    {
      key: 'hemma_of_gurk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
    },
    {
      key: 'otto_of_bamberg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'visitation_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ulrich_of_augsburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'willibald_of_eichstatt_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'kilian_of_wurzburg_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-10`),
      metadata: {
        titles: [Titles.MARTYR],
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
      key: 'henry_ii_emperor_and_cunigunde_of_luxembourg',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
    },
    {
      key: 'margaret_of_antioch_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
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
      key: 'christopher_of_palestine_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      metadata: {
        titles: [Titles.MARTYR],
      },
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
      key: 'paulinus_of_trier_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
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
      key: 'lambert_of_maastricht_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-18`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'maurice_of_agaunum_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'rupert_of_salzburg_and_virgilius_of_salzburg_bishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
    },
    {
      key: 'nicholas_of_flue_hermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'leoba_of_tauberbischofsheim_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
    },
    {
      key: 'gall_of_switzerland_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'wendelin_of_trier_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
    },
    {
      key: 'ursula_of_cologne_and_companions_virgins',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'wolfgang_of_regensburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
    },
    {
      key: 'hubert_of_liege_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'pirmin_of_hornbach_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'leonard_of_noblac_hermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
    },
    {
      key: 'willibrord_of_utrecht_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'leopold_iii_of_babenberg',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
    },
    {
      key: 'gertrude_the_great_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'corbinian_of_freising_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
    },
    {
      key: 'conrad_of_constance_and_gebhard_of_constance_bishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-26`),
    },
    {
      key: 'lucius_of_chur_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'barbara_of_heliopolis_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'adolph_kolping_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'anno_of_cologne_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
    },
    {
      key: 'odile_of_alsace_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
    },
    {
      key: 'saintStephenTheFirstMartyr',
      extend: true,
      isHolyDayOfObligation: true,
    },
    {
      key: 'easterMonday',
      extend: true,
      isHolyDayOfObligation: true,
    },
    {
      key: 'maryMotherOfTheChurch',
      extend: true,
      isHolyDayOfObligation: true,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
