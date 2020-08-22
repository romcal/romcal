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
      key: 'munchin_of_limerick_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'ita_of_killeedy_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'fursa_of_peronne_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-16`),
    },
    {
      key: 'aidan_of_ferns_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-30`),
    },
    {
      key: 'brigid_of_kildare_virgin_copatroness_of_ireland',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'mel_of_ardagh_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
    },
    {
      key: 'gobnait_of_ballyvourney_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
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
      key: 'fintan_of_clonenagh_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'david_of_wales_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-1`),
    },
    {
      key: 'kieran_of_saigir_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-5`),
    },
    {
      key: 'senan_of_inis_cathaigh_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'aengus_of_tallaght_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-11`),
    },
    {
      key: 'patrick_of_ireland_bishop_patron_of_ireland',
      extend: true,
      rank: Ranks.SOLEMNITY,
      isHolyDayOfObligation: true,
    },
    {
      key: 'enda_of_aran_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-21`),
    },
    {
      key: 'macartan_of_clogher_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-24`),
    },
    {
      key: 'ceallach_of_armagh_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-1`),
    },
    {
      key: 'laserian_of_leighlin_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-18`),
    },
    {
      key: 'asicus_of_elphin_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
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
      key: 'conleth_of_kildare_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
    },
    {
      key: 'edmund_ignatius_rice_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'comgall_of_bangor_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
    },
    {
      key: 'carthage_of_lismore_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
    },
    {
      key: 'brendan_of_clonfert_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
    },
    {
      key: 'kevin_of_glendalough_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'jarlath_of_tuam_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'colman_of_dromore_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-7`),
    },
    {
      key: 'columba_of_iona_abbot_copatron_of_ireland',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'davnet_of_sliabh_beagh_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
    },
    {
      key: 'irish_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'oliver_plunket_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'moninne_of_killeavy_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
    },
    {
      key: 'saintMaelruainMaolruainVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
    },
    {
      key: 'kilian_of_wurzburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
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
      key: 'bridget_of_sweden_religious_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'declan_of_ardmore_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
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
      key: 'muredach_of_killala_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'attracta_of_killaraght_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'lelia_of_killeely_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'fachtna_of_rosscarbery_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'our_lady_of_knock',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'eoghan_of_ardstraw_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'fiacre_of_breuil_monk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'aidan_of_lindisfarne_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'mac_nissi_of_connor_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'ciaran_of_clonmacnoise_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ailbe_of_emly_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'pius_of_pietrelcina_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'finbarr_of_cork_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'columba_marmion_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'john_henry_newman_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'canice_of_kilkenny_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'gall_of_switzerland_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'otteran_of_iona_monk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'colman_of_kilmacduagh_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-29`),
    },
    {
      key: 'malachy_of_armagh_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'all_saints_of_ireland',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'willibrord_of_utrecht_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'laurence_otoole_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-14`),
    },
    {
      key: 'columban_of_luxeuil_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'colman_of_cloyne_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'virgilius_of_salzburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-27`),
    },
    {
      key: 'finnian_of_clonard_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'flannan_of_killaloe_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-18`),
    },
    {
      key: 'fachanan_of_kilfenora_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-20`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
