import dayjs, { Dayjs } from 'dayjs';

import { Dates } from '@romcal/lib/dates';
import * as Locales from '@romcal/lib/locales';
import { Seasons } from '@romcal/lib/seasons';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: true,
};

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'basil_the_great_and_gregory_nazianzen_bishops',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-2`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'most_holy_name_of_jesus',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'raymond_of_penyafort_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'hilary_of_poitiers_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-13`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'anthony_of_egypt_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'fabian_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'sebastian_of_milan_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'agnes_of_rome_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'vincent_of_saragossa_deacon',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'francis_de_sales_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    {
      key: 'sunday_of_the_word_of_god',
      rank: Ranks.SUNDAY,
      date: await (async (y: number): Promise<Dayjs> => {
        const firstDayOfOT = dayjs((await Seasons.earlyOrdinaryTime(y, config.epiphanyOnSunday))[0].date);
        return firstDayOfOT.add(2, 'week').startOf('week');
      })(year),
      liturgicalColors: LiturgicalColors.GREEN,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
    // St. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
    // were martyrs.
    {
      key: 'conversion_of_saint_paul_the_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-1-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'timothy_of_ephesus_and_titus_of_crete_bishops',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'angela_merici_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'thomas_aquinas_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-28`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'john_bosco_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blaise_of_sebaste_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'ansgar_of_hamburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'agatha_of_sicily_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'paul_miki_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'jerome_emiliani',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'josephine_bakhita_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'scholastica_of_nursia_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_lourdes',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
    },
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'seven_holy_founders_of_the_servite_order',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'peter_damian_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'chair_of_saint_peter_the_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'polycarp_of_smyrna_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'casimir_of_poland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-4`),
    },
    {
      key: 'perpetua_of_carthage_and_felicity_of_carthage_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-7`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_of_god_duarte_cidade_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'frances_of_rome_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
    },
    {
      key: 'patrick_of_ireland_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'cyril_of_jerusalem_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'turibius_of_mogrovejo_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'francis_of_paola_hermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
    },
    {
      key: 'isidore_of_seville_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-4`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'vincent_ferrer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-5`),
    },
    {
      key: 'john_baptist_de_la_salle_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'stanislaus_of_szczepanow_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-11`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'martin_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'anselm_of_canterbury_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'george_of_lydda_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'fidelis_of_sigmaringen_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'mark_evangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'peter_chanel_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'louis_grignion_de_montfort_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'catherine_of_siena_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'pius_v_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'joseph_the_worker',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-1`),
    },
    {
      key: 'athanasius_of_alexandria_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-2`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'philip_and_james_apostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'nereus_of_terracina_and_achilleus_of_terracina_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'pancras_of_rome_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_fatima',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-13`),
    },
    {
      key: 'matthias_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-18`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'bernardine_of_siena_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
    },
    {
      key: 'christopher_magallanes_priest_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'rita_of_cascia_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'bede_the_venerable_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'gregory_vii_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'mary_magdalene_de_pazzi_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'philip_neri_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'augustine_of_canterbury_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'paul_vi_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'visitation_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'justin_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-1`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'marcellinus_of_rome_and_peter_the_exorcist_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'charles_lwanga_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'boniface_of_mainz_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'norbert_of_xanten_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ephrem_the_syrian_deacon',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'barnabas_apostle',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'anthony_of_padua_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'romuald_of_ravenna_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'aloysius_gonzaga_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'paulinus_of_nola_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'john_fisher_bishop_and_thomas_more_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'cyril_of_alexandria_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'irenaeus_of_lyon_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'first_martyrs_of_the_holy_roman_church',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'thomas_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'elizabeth_of_portugal',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'anthony_zaccaria_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
    },
    {
      key: 'maria_goretti_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'augustine_zhao_rong_priest_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'benedict_of_nursia_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'henry_ii_emperor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'camillus_de_lellis_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'bonaventure_of_bagnoregio_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-15`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
    },
    {
      key: 'apollinaris_of_ravenna_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'lawrence_of_brindisi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'mary_magdalene',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_mother_of_the_church',
      rank: Ranks.MEMORIAL,
      date: ((y: number): Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'bridget_of_sweden_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'sharbel_makhluf_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'james_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'joachim_and_anne_parents_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'martha_of_bethany',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'peter_chrysologus_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'ignatius_of_loyola_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'alphonsus_liguori_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'eusebius_of_vercelli_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'peter_julian_eymard_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'john_mary_vianney_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_basilica_of_saint_mary_major',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'sixtus_ii_pope_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'cajetan_of_thiene_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'dominic_de_guzman_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'teresa_benedicta_of_the_cross_stein_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'lawrence_of_rome_deacon',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-10`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'clare_of_assisi_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'jane_frances_de_chantal_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'pontian_i_pope_and_hippolytus_of_rome_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'maximilian_kolbe_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-14`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'stephen_i_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'john_eudes_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'bernard_of_clairvaux_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-20`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'pius_x_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'queenship_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'rose_of_lima_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'bartholomew_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'louis_ix_of_france',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'joseph_of_calasanz_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'monica_of_hippo',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'augustine_of_hippo_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-28`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'passion_of_saint_john_the_baptist',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-29`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gregory_i_the_great_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-3`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'nativity_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'peter_claver_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'most_holy_name_of_mary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'john_chrysostom_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'exaltation_of_the_holy_cross',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-14`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'our_lady_of_sorrows',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'robert_bellarmine_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'januarius_i_of_benevento_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-20`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'matthew_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'pius_of_pietrelcina_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'cosmas_of_cilicia_and_damian_of_cilicia_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'vincent_de_paul_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'wenceslaus_i_of_bohemia_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'lawrence_ruiz_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'michael_gabriel_and_raphael_archangels',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'jerome_of_stridon_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-30`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'guardian_angels',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'francis_of_assisi',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'faustina_kowalska_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bruno_of_cologne_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'our_lady_of_the_rosary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'denis_of_paris_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'john_leonardi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'john_xxiii_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'john_paul_ii_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
    },
    {
      key: 'callistus_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'teresa_of_jesus_of_avila_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-15`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'hedwig_of_silesia_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'margaret_mary_alacoque_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'ignatius_of_antioch_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'luke_evangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'paul_of_the_cross_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'john_of_capistrano_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    {
      key: 'anthony_mary_claret_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'simon_and_jude_apostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'all_souls',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
      prioritized: true,
    },
    {
      key: 'martin_de_porres_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'charles_borromeo_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_lateran_basilica',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-9`),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'leo_i_the_great_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-10`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'martin_of_tours_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'josaphat_kuntsevych_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-12`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'albert_the_great_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'margaret_of_scotland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'gertrude_the_great_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_basilicas_of_saints_peter_and_paul_apostles',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'presentation_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'cecilia_of_rome_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-22`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'clement_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'columban_of_luxeuil_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'andrew_dung_lac_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'catherine_of_alexandria_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'andrew_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'francis_xavier_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_damascene_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'nicholas_of_myra_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'ambrose_of_milan_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-7`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'juan_diego_cuauhtlatoatzin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'our_lady_of_loreto',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'damasus_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-11`),
    },
    {
      key: 'our_lady_of_guadalupe',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'lucy_of_syracuse_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_of_the_cross_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'peter_canisius_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'john_of_kanty_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-23`),
    },
    {
      key: 'stephen_the_first_martyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-26`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'holy_innocents_martyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'thomas_becket_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-29`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'sylvester_i_pope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-31`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
