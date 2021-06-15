import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Dayjs } from 'dayjs';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Sanctorale } from './sanctorale';
import { ProperCycles } from '../constants/cycles';

export class GeneralRoman extends CalendarDef {
  inheritFrom = Sanctorale;

  particularConfig: ParticularConfig = {
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    basil_the_great_and_gregory_nazianzen_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-2',
      martyrology: ['basil_the_great_bishop', 'gregory_nazianzen_bishop'],
    },

    most_holy_name_of_jesus: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    raymond_of_penyafort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-7',
    },

    hilary_of_poitiers_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-13',
    },

    anthony_of_egypt_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-17',
    },

    fabian_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
    },

    sebastian_of_milan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
    },

    agnes_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-21',
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
    },

    francis_de_sales_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-24',
    },

    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    sunday_of_the_word_of_god: {
      precedence: Precedences.UnprivilegedSunday_6,
      date: (y: number): Dayjs =>
        Dates.baptismOfTheLord(y).add(2, 'week').startOf('week'),
      properCycle: ProperCycles.TEMPORALE,
    },

    // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
    // St. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
    // were martyrs.
    conversion_of_saint_paul_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '1-25',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    timothy_of_ephesus_and_titus_of_crete_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-26',
      martyrology: ['timothy_of_ephesus_bishop', 'titus_of_crete_bishop'],
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },

    thomas_aquinas_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-28',
    },

    john_bosco_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-31',
    },

    blaise_of_sebaste_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-3',
    },

    ansgar_of_hamburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-3',
    },

    agatha_of_sicily_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-5',
    },

    paul_miki_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-6',
      martyrology: ['paul_miki_martyr', 'companions_martyrs'],
    },

    jerome_emiliani: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-8',
    },

    josephine_bakhita_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-8',
    },

    scholastica_of_nursia_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-10',
    },

    our_lady_of_lourdes: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-11',
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-14',
      martyrology: [
        'cyril_the_philosopher_monk',
        'methodius_of_thessaloniki_bishop',
      ],
    },

    seven_holy_founders_of_the_servite_order: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-17',
    },

    peter_damian_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-21',
    },

    chair_of_saint_peter_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '2-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    polycarp_of_smyrna_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-23',
    },

    gregory_of_narek_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-27',
    },

    casimir_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-4',
    },

    perpetua_of_carthage_and_felicity_of_carthage_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '3-7',
      martyrology: [
        'perpetua_of_carthage_martyr',
        'felicity_of_carthage_martyr',
      ],
    },

    john_of_god_duarte_cidade_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-8',
    },

    frances_of_rome_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-9',
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    cyril_of_jerusalem_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-18',
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-23',
    },

    francis_of_paola_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-2',
    },

    isidore_of_seville_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-4',
    },

    vincent_ferrer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-5',
    },

    john_baptist_de_la_salle_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '4-7',
    },

    stanislaus_of_szczepanow_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '4-11',
    },

    martin_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-13',
    },

    anselm_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-21',
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
    },

    fidelis_of_sigmaringen_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
    },

    mark_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      date: '4-25',
      liturgicalColors: LiturgicalColors.RED,
    },

    peter_chanel_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-28',
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-28',
    },

    catherine_of_siena_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '4-29',
    },

    pius_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-30',
    },

    joseph_the_worker: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-1',
    },

    athanasius_of_alexandria_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '5-2',
    },

    philip_and_james_apostles: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-3',
      martyrology: ['philip_apostle', 'james_apostle'],
      liturgicalColors: LiturgicalColors.RED,
    },

    john_of_avila_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-10',
    },

    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-12',
      martyrology: [
        'nereus_of_terracina_martyr',
        'achilleus_of_terracina_martyr',
      ],
    },

    pancras_of_rome_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-12',
    },

    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-13',
    },

    matthias_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-14',
      liturgicalColors: LiturgicalColors.RED,
    },

    john_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-18',
    },

    bernardine_of_siena_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-20',
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
      martyrology: [
        'christopher_magallanes_priest',
        { key: 'companions_martyrs', count: 24 },
      ],
    },

    rita_of_cascia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-22',
    },

    bede_the_venerable_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-25',
    },

    gregory_vii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-25',
    },

    mary_magdalene_de_pazzi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-25',
    },

    philip_neri_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '5-26',
    },

    augustine_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-27',
    },

    paul_vi_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-29',
    },

    visitation_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-31',
    },

    justin_martyr: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-1',
    },

    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-2',
      martyrology: ['marcellinus_of_rome_martyr', 'peter_the_exorcist_martyr'],
    },

    charles_lwanga_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-3',
      martyrology: ['charles_lwanga_martyr', 'companions_martyrs'],
    },

    boniface_of_mainz_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-5',
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
    },

    ephrem_the_syrian_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-9',
    },

    barnabas_apostle: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-11',
      liturgicalColors: LiturgicalColors.RED,
    },

    anthony_of_padua_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-13',
    },

    romuald_of_ravenna_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-19',
    },

    aloysius_gonzaga_religious: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-21',
    },

    paulinus_of_nola_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-22',
    },

    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-22',
      martyrology: ['john_fisher_bishop', 'thomas_more_martyr'],
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
    },

    irenaeus_of_lyon_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-28',
    },

    first_martyrs_of_the_holy_roman_church: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-30',
    },

    thomas_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-3',
      liturgicalColors: LiturgicalColors.RED,
    },

    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-4',
    },

    anthony_zaccaria_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-5',
    },

    maria_goretti_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-6',
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-9',
      martyrology: ['augustine_zhao_rong_priest', 'companions_martyrs'],
    },

    benedict_of_nursia_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-11',
    },

    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-13',
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-14',
    },

    bonaventure_of_bagnoregio_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-15',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-16',
    },

    apollinaris_of_ravenna_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-20',
    },

    lawrence_of_brindisi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-21',
    },

    mary_magdalene: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-22',
    },

    mary_mother_of_the_church: {
      precedence: Precedences.GeneralMemorial_10,
      date: (y: number): Dayjs => Dates.pentecostSunday(y).add(1, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },

    bridget_of_sweden_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-23',
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    james_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-25',
      liturgicalColors: LiturgicalColors.RED,
    },

    joachim_and_anne_parents_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-26',
      martyrology: ['joachim_father_of_mary', 'anne_mother_of_mary'],
    },

    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-29',
      martyrology: [
        'martha_of_bethany',
        'mary_of_bethany',
        'lazarus_of_bethany',
      ],
    },

    peter_chrysologus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-30',
    },

    ignatius_of_loyola_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-31',
    },

    alphonsus_liguori_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-1',
    },

    eusebius_of_vercelli_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-2',
    },

    peter_julian_eymard_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-2',
    },

    john_mary_vianney_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-4',
    },

    dedication_of_the_basilica_of_saint_mary_major: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-5',
    },

    sixtus_ii_pope_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
      martyrology: ['sixtus_ii_pope', 'companions_martyrs'],
    },

    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    dominic_de_guzman_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-8',
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-9',
    },

    lawrence_of_rome_deacon: {
      precedence: Precedences.GeneralFeast_7,
      date: '8-10',
    },

    clare_of_assisi_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-11',
    },

    jane_frances_de_chantal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-12',
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-13',
      martyrology: ['pontian_i_pope', 'hippolytus_of_rome_priest'],
    },

    maximilian_kolbe_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-14',
    },

    stephen_i_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-16',
    },

    john_eudes_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-19',
    },

    bernard_of_clairvaux_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-20',
    },

    pius_x_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-21',
    },

    queenship_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-22',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-23',
    },

    bartholomew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '8-24',
      liturgicalColors: LiturgicalColors.RED,
    },

    louis_ix_of_france: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-25',
    },

    joseph_of_calasanz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-25',
    },

    monica_of_hippo: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-27',
    },

    augustine_of_hippo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-28',
    },

    passion_of_saint_john_the_baptist: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-29',
    },

    gregory_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-3',
    },

    nativity_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-8',
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
    },

    most_holy_name_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-12',
    },

    john_chrysostom_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-13',
    },

    exaltation_of_the_holy_cross: {
      precedence: Precedences.GeneralLordFeast_5,
      date: '9-14',
      liturgicalColors: LiturgicalColors.RED,
    },

    our_lady_of_sorrows: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-15',
    },

    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-16',
      martyrology: ['cornelius_i_pope', 'cyprian_of_carthage_bishop'],
    },

    hildegard_of_bingen_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
    },

    robert_bellarmine_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
    },

    januarius_i_of_benevento_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-19',
    },

    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-20',
      martyrology: [
        'andrew_kim_tae_gon_priest',
        'paul_chong_ha_sang_martyr',
        'companions_martyrs',
      ],
    },

    matthew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-21',
      liturgicalColors: LiturgicalColors.RED,
    },

    pius_of_pietrelcina_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-23',
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-26',
      martyrology: ['cosmas_of_cilicia_martyr', 'damian_of_cilicia_martyr'],
    },

    vincent_de_paul_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-27',
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-28',
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-28',
      martyrology: ['lawrence_ruiz_martyr', 'companions_martyrs'],
    },

    michael_gabriel_and_raphael_archangels: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-29',
      martyrology: [
        'michael_archangel',
        'gabriel_archangel',
        'raphael_archangel',
      ],
    },

    jerome_of_stridon_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-30',
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-1',
    },

    guardian_angels: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-2',
    },

    francis_of_assisi: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-4',
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-5',
    },

    bruno_of_cologne_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-6',
    },

    our_lady_of_the_rosary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-7',
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
      martyrology: ['denis_of_paris_bishop', 'companions_martyrs'],
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    john_xxiii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-11',
    },

    john_paul_ii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-22',
    },

    callistus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-14',
    },

    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-15',
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    ignatius_of_antioch_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-17',
    },

    luke_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      date: '10-18',
      liturgicalColors: LiturgicalColors.RED,
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-19',
      martyrology: [
        'john_de_brebeuf_priest',
        'isaac_jogues_priest',
        'companions_martyrs',
      ],
    },

    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-19',
    },

    john_of_capistrano_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-23',
    },

    anthony_mary_claret_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-24',
    },

    simon_and_jude_apostles: {
      precedence: Precedences.GeneralFeast_7,
      date: '10-28',
      martyrology: ['simon_apostle', 'jude_apostle'],
      liturgicalColors: LiturgicalColors.RED,
    },

    all_souls: {
      precedence: Precedences.GeneralSolemnity_3,
      date: '11-2',
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },

    martin_de_porres_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-3',
    },

    charles_borromeo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-4',
    },

    dedication_of_the_lateran_basilica: {
      precedence: Precedences.GeneralFeast_7,
      date: '11-9',
    },

    leo_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-10',
    },

    martin_of_tours_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-11',
    },

    josaphat_kuntsevych_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-12',
    },

    albert_the_great_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-15',
    },

    margaret_of_scotland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-16',
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-16',
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-17',
    },

    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-18',
    },

    presentation_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-21',
    },

    cecilia_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-22',
    },

    clement_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-23',
    },

    columban_of_luxeuil_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-23',
    },

    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-24',
      martyrology: ['andrew_dung_lac_priest', 'companions_martyrs'],
    },

    catherine_of_alexandria_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
    },

    andrew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '11-30',
      liturgicalColors: LiturgicalColors.RED,
    },

    francis_xavier_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-3',
    },

    john_damascene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-6',
    },

    ambrose_of_milan_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-7',
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-9',
    },

    our_lady_of_loreto: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-10',
    },

    damasus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-11',
    },

    our_lady_of_guadalupe: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-12',
    },

    lucy_of_syracuse_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-13',
    },

    john_of_the_cross_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-14',
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-21',
    },

    john_of_kanty_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-23',
    },

    stephen_the_first_martyr: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-26',
    },

    john_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    holy_innocents_martyrs: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-28',
    },

    thomas_becket_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-29',
    },

    sylvester_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-31',
    },
  };
}
