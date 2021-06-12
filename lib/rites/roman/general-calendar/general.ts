import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Dayjs } from 'dayjs';

export class GeneralRoman extends CalendarDef {
  particularConfig: ParticularConfig = {
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    basil_the_great_and_gregory_nazianzen_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-2',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    anthony_of_egypt_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    fabian_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    sebastian_of_milan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    agnes_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-21',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    francis_de_sales_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-24',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    sunday_of_the_word_of_god: {
      precedence: Precedences.UnprivilegedSunday_6,
      date: (y: number): Dayjs =>
        Dates.baptismOfTheLord(y).add(2, 'week').startOf('week'),
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },

    thomas_aquinas_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-28',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    john_bosco_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '1-31',
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    paul_miki_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-6',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    our_lady_of_lourdes: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-11',
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    seven_holy_founders_of_the_servite_order: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-17',
    },

    peter_damian_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-21',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    chair_of_saint_peter_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '2-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    polycarp_of_smyrna_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '2-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    gregory_of_narek_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-27',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    casimir_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-4',
    },

    perpetua_of_carthage_and_felicity_of_carthage_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '3-7',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    vincent_ferrer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-5',
    },

    john_baptist_de_la_salle_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '4-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    stanislaus_of_szczepanow_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '4-11',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    martin_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-13',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    anselm_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-21',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-23',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    fidelis_of_sigmaringen_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    mark_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      date: '4-25',
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    philip_and_james_apostles: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_of_avila_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-10',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-12',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    pancras_of_rome_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-12',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-13',
    },

    matthias_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-14',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-18',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    bernardine_of_siena_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-20',
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    augustine_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-27',
    },

    paul_vi_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-29',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    visitation_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      date: '5-31',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    justin_martyr: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-1',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-2',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    charles_lwanga_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-3',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    boniface_of_mainz_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-5',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ephrem_the_syrian_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-9',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    barnabas_apostle: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-11',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    anthony_of_padua_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-13',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    romuald_of_ravenna_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-19',
    },

    aloysius_gonzaga_religious: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    paulinus_of_nola_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-22',
    },

    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-22',
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    irenaeus_of_lyon_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '6-28',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    first_martyrs_of_the_holy_roman_church: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-30',
    },

    thomas_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-3',
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-9',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    benedict_of_nursia_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-13',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-14',
    },

    bonaventure_of_bagnoregio_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-15',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    mary_magdalene: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    mary_mother_of_the_church: {
      precedence: Precedences.GeneralMemorial_10,
      date: (y: number): Dayjs => Dates.pentecostSunday(y).add(1, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      //prioritized: true,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },

    bridget_of_sweden_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    james_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '7-25',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    joachim_and_anne_parents_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-26',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-29',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_chrysologus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-30',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    ignatius_of_loyola_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '7-31',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    alphonsus_liguori_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-1',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dedication_of_the_basilica_of_saint_mary_major: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-5',
    },

    sixtus_ii_pope_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    dominic_de_guzman_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    lawrence_of_rome_deacon: {
      precedence: Precedences.GeneralFeast_7,
      date: '8-10',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    clare_of_assisi_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-11',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    jane_frances_de_chantal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-12',
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-13',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    maximilian_kolbe_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-14',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    pius_x_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    queenship_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    rose_of_lima_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-23',
    },

    bartholomew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '8-24',
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    augustine_of_hippo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-28',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    passion_of_saint_john_the_baptist: {
      precedence: Precedences.GeneralMemorial_10,
      date: '8-29',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    gregory_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-3',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    nativity_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    most_holy_name_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-12',
    },

    john_chrysostom_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-13',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    exaltation_of_the_holy_cross: {
      // namespace: 'celebrations', // Override the default locale namespace
      precedence: Precedences.GeneralLordFeast_5,
      date: '9-14',
      liturgicalColors: LiturgicalColors.RED,
    },

    our_lady_of_sorrows: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-15',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-16',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    hildegard_of_bingen_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    robert_bellarmine_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    januarius_i_of_benevento_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-19',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-20',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    matthew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    pius_of_pietrelcina_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-23',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-26',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    vincent_de_paul_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-28',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-28',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    michael_gabriel_and_raphael_archangels: {
      precedence: Precedences.GeneralFeast_7,
      date: '9-29',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    jerome_of_stridon_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '9-30',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-1',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    guardian_angels: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-2',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_of_assisi: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    bruno_of_cologne_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-6',
    },

    our_lady_of_the_rosary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
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
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '10-15',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    luke_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      date: '10-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-19',
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
      liturgicalColors: LiturgicalColors.WHITE,
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dedication_of_the_lateran_basilica: {
      precedence: Precedences.GeneralFeast_7,
      date: '11-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    leo_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-10',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    martin_of_tours_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-11',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    josaphat_kuntsevych_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-12',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    albert_the_great_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-15',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-18',
    },

    presentation_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-21',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cecilia_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      date: '11-22',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    catherine_of_alexandria_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    andrew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '11-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_xavier_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-3',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_damascene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-6',
    },

    ambrose_of_milan_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-7',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
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
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    john_of_the_cross_priest: {
      precedence: Precedences.GeneralMemorial_10,
      date: '12-14',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-21',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    john_of_kanty_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-23',
    },

    stephen_the_first_martyr: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-26',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    john_apostle: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    holy_innocents_martyrs: {
      precedence: Precedences.GeneralFeast_7,
      date: '12-28',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    thomas_becket_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-29',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    sylvester_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-31',
    },
  };
}
