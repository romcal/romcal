import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

// Note: Liturgical colors are added automatically, leaning on the martyrology catalog.
// But since Romcal can be run without a localized calendar (so without martyrology and title data),
// we must set manually the RED color on all martyrs in this General Roman Calendar,
// which is the default calendar if no options are provided.

export class GeneralRoman extends CalendarDef {
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: false,
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
  };

  inputs: Inputs = {
    basil_the_great_and_gregory_nazianzen_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 2 },
      martyrology: ['basil_the_great_bishop', 'gregory_nazianzen_bishop'],
    },

    most_holy_name_of_jesus: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    raymond_of_penyafort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 7 },
    },

    hilary_of_poitiers_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 13 },
    },

    anthony_of_egypt_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 17 },
    },

    fabian_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
      colors: Colors.Red,
    },

    sebastian_of_milan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
      colors: Colors.Red,
    },

    agnes_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 21 },
      colors: Colors.Red,
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
      colors: Colors.Red,
    },

    francis_de_sales_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 24 },
    },

    conversion_of_saint_paul_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 1, date: 25 },
      colors: Colors.White,
    },

    timothy_of_ephesus_and_titus_of_crete_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 26 },
      martyrology: ['timothy_of_ephesus_bishop', 'titus_of_crete_bishop'],
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    thomas_aquinas_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 28 },
    },

    john_bosco_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 31 },
    },

    presentation_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      // 02-02
      dateDef: { dateFn: 'presentationOfTheLord' },
      colors: Colors.White,
    },

    blaise_of_sebaste_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
      colors: Colors.Red,
    },

    ansgar_of_hamburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
    },

    agatha_of_sicily_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 5 },
      colors: Colors.Red,
    },

    paul_miki_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 6 },
      martyrology: ['paul_miki_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    jerome_emiliani: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 8 },
    },

    josephine_bakhita_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 8 },
    },

    scholastica_of_nursia_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 10 },
    },

    our_lady_of_lourdes: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 11 },
    },

    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 14 },
      martyrology: ['cyril_constantine_the_philosopher_monk', 'methodius_michael_of_thessaloniki_bishop'],
    },

    seven_holy_founders_of_the_servite_order: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 17 },
    },

    peter_damian_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 21 },
    },

    chair_of_saint_peter_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 2, date: 22 },
      colors: Colors.White,
    },

    polycarp_of_smyrna_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 23 },
      colors: Colors.Red,
    },

    gregory_of_narek_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 27 },
    },

    casimir_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 4 },
    },

    perpetua_of_carthage_and_felicity_of_carthage_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 3, date: 7 },
      martyrology: ['perpetua_of_carthage_martyr', 'felicity_of_carthage_martyr'],
      colors: Colors.Red,
    },

    john_of_god_duarte_cidade_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 8 },
    },

    frances_of_rome_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 9 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
    },

    cyril_of_jerusalem_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 18 },
    },

    joseph_spouse_of_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { month: 3, date: 19 },
      dateExceptions: [
        { ifIsDayOfWeek: 0, setDate: { addDay: 1 } },
        {
          ifIsBetween: {
            from: { dateFn: 'palmSunday' },
            to: { dateFn: 'divineMercySunday' },
            inclusive: true,
          },
          setDate: { dateFn: 'palmSunday', subtractDay: 1 },
        },
      ],
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 23 },
    },

    annunciation_of_the_lord: {
      precedence: Precedences.GeneralSolemnity_3,
      // 03-25
      dateDef: { dateFn: 'annunciation' },
      colors: Colors.White,
    },

    francis_of_paola_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 2 },
    },

    isidore_of_seville_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 4 },
    },

    vincent_ferrer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 5 },
    },

    john_baptist_de_la_salle_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 7 },
    },

    stanislaus_of_szczepanow_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 11 },
      colors: Colors.Red,
    },

    martin_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 13 },
      colors: Colors.Red,
    },

    anselm_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 21 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 23 },
      colors: Colors.Red,
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 23 },
      colors: Colors.Red,
    },

    fidelis_of_sigmaringen_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
      colors: Colors.Red,
    },

    mark_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 4, date: 25 },
      colors: Colors.Red,
    },

    peter_chanel_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 28 },
      colors: Colors.Red,
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 28 },
    },

    catherine_of_siena_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 29 },
    },

    pius_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 30 },
    },

    joseph_the_worker: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 1 },
    },

    athanasius_of_alexandria_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 5, date: 2 },
    },

    philip_and_james_apostles: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 3 },
      martyrology: ['philip_apostle', 'james_apostle'],
      colors: Colors.Red,
    },

    john_of_avila_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 10 },
    },

    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
      martyrology: ['nereus_of_terracina_martyr', 'achilleus_of_terracina_martyr'],
      colors: Colors.Red,
    },

    pancras_of_rome_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
      colors: Colors.Red,
    },

    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 13 },
    },

    matthias_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 14 },
      colors: Colors.Red,
    },

    john_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 18 },
      colors: Colors.Red,
    },

    bernardine_of_siena_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 20 },
    },

    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
      martyrology: ['christopher_magallanes_priest', { id: 'companions_martyrs', count: 24 }],
      colors: Colors.Red,
    },

    rita_of_cascia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 22 },
    },

    bede_the_venerable_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    gregory_vii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    mary_magdalene_de_pazzi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    philip_neri_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 5, date: 26 },
    },

    augustine_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 27 },
    },

    paul_vi_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
    },

    visitation_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 31 },
    },

    mary_mother_of_the_church: {
      precedence: Precedences.GeneralMemorial_10,
      // The Monday, after Pentecost Sunday
      dateDef: { dateFn: 'maryMotherOfTheChurch' },
      properCycle: ProperCycles.ProperOfTime,
    },

    immaculate_heart_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      // The Saturday, after the Solemnity of the Most Sacred Heart of Jesus
      dateDef: { dateFn: 'immaculateHeartOfMary' },
      // If this liturgical day and a memorial occur on the same day,
      // do not replace the latter, but output them both.
      allowSimilarRankItems: true,
      colors: Colors.White,
      properCycle: ProperCycles.ProperOfTime,
    },

    justin_martyr: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 1 },
      colors: Colors.Red,
    },

    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      martyrology: ['marcellinus_of_rome_martyr', 'peter_the_exorcist_martyr'],
      colors: Colors.Red,
    },

    charles_lwanga_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 3 },
      martyrology: ['charles_lwanga_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    boniface_of_mainz_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 5 },
      colors: Colors.Red,
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    ephrem_the_syrian_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 9 },
    },

    barnabas_apostle: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 11 },
      colors: Colors.Red,
    },

    anthony_of_padua_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 13 },
    },

    romuald_of_ravenna_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 19 },
    },

    aloysius_gonzaga_religious: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 21 },
    },

    paulinus_of_nola_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
    },

    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
      martyrology: ['john_fisher_bishop', 'thomas_more_martyr'],
      colors: Colors.Red,
    },

    nativity_of_john_the_baptist: {
      // Note: The title of Martyr is not indicated here, as Saint John the Baptist is not yet a Martyr at his birth.
      // Therefore, this celebration will be celebrated in white (src: GIRM, 308a).
      precedence: Precedences.GeneralSolemnity_3,
      // 06-24
      dateDef: { dateFn: 'nativityOfJohnTheBaptist' },
      colors: Colors.White,
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    irenaeus_of_lyon_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 28 },
      colors: Colors.Red,
    },

    peter_and_paul_apostles: {
      precedence: Precedences.GeneralSolemnity_3,
      // 06-29
      dateDef: { dateFn: 'peterAndPaulApostles' },
      isHolyDayOfObligation: true,
      colors: Colors.Red,
      martyrology: ['peter_apostle', 'paul_apostle'],
    },

    first_martyrs_of_the_holy_roman_church: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 30 },
      colors: Colors.Red,
    },

    thomas_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 3 },
      colors: Colors.Red,
    },

    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    anthony_zaccaria_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 5 },
    },

    maria_goretti_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 6 },
      colors: Colors.Red,
    },

    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
      martyrology: ['augustine_zhao_rong_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    benedict_of_nursia_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 11 },
    },

    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 13 },
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    bonaventure_of_bagnoregio_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 15 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 16 },
    },

    apollinaris_of_ravenna_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
      colors: Colors.Red,
    },

    lawrence_of_brindisi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 21 },
    },

    mary_magdalene: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 22 },
    },

    bridget_of_sweden_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 23 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    james_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 25 },
      colors: Colors.Red,
    },

    joachim_and_anne_parents_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 26 },
      martyrology: ['joachim_father_of_mary', 'anne_mother_of_mary'],
    },

    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 29 },
      martyrology: ['martha_of_bethany', 'mary_of_bethany', 'lazarus_of_bethany'],
    },

    peter_chrysologus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
    },

    ignatius_of_loyola_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 31 },
    },

    alphonsus_mary_liguori_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 1 },
    },

    eusebius_of_vercelli_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 2 },
    },

    peter_julian_eymard_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 2 },
    },

    john_mary_vianney_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 4 },
    },

    dedication_of_the_basilica_of_saint_mary_major: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
    },

    transfiguration_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      // 08-06
      dateDef: { dateFn: 'transfiguration' },
      colors: Colors.White,
    },

    sixtus_ii_pope_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
      martyrology: ['sixtus_ii_pope', 'companions_martyrs'],
      colors: Colors.Red,
    },

    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
    },

    dominic_de_guzman_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 8 },
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 9 },
      colors: Colors.Red,
    },

    lawrence_of_rome_deacon: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 8, date: 10 },
      colors: Colors.Red,
    },

    clare_of_assisi_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 11 },
    },

    jane_frances_de_chantal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 13 },
      martyrology: ['pontian_i_pope', 'hippolytus_of_rome_priest'],
      colors: Colors.Red,
    },

    maximilian_mary_raymund_kolbe_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 14 },
      colors: Colors.Red,
    },

    assumption_of_the_blessed_virgin_mary: {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      // 08-15
      dateDef: { dateFn: 'assumption' },
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    stephen_i_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    john_eudes_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
    },

    bernard_of_clairvaux_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 20 },
    },

    pius_x_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 21 },
    },

    queenship_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 22 },
    },

    rose_of_lima_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 23 },
    },

    bartholomew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 8, date: 24 },
      colors: Colors.Red,
    },

    louis_ix_of_france: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 25 },
    },

    joseph_of_calasanz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 25 },
    },

    monica_of_hippo: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 27 },
    },

    augustine_of_hippo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 28 },
    },

    passion_of_saint_john_the_baptist: {
      // Note: here we consider Saint John the Baptist as a martyr, although the title of Martyr is not indicated
      // in the name of this memorial. Therefore, we explicitly specify the red color, but omit the title of Martyr.
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 29 },
      colors: Colors.Red,
    },

    gregory_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 3 },
    },

    nativity_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 8 },
    },

    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
    },

    most_holy_name_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 12 },
    },

    john_chrysostom_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 13 },
    },

    exaltation_of_the_holy_cross: {
      precedence: Precedences.GeneralLordFeast_5,
      // 09-14
      dateDef: { dateFn: 'exaltationOfTheHolyCross' },
      colors: Colors.Red,
    },

    our_lady_of_sorrows: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 15 },
    },

    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 16 },
      martyrology: ['cornelius_i_pope', 'cyprian_of_carthage_bishop'],
      colors: Colors.Red,
    },

    hildegard_of_bingen_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    robert_bellarmine_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    januarius_i_of_benevento_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
      colors: Colors.Red,
    },

    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 20 },
      martyrology: ['andrew_kim_tae_gon_priest', 'paul_chong_ha_sang_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    matthew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 21 },
      colors: Colors.Red,
    },

    pius_francesco_forgione_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 23 },
    },

    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
      martyrology: ['cosmas_of_cilicia_martyr', 'damian_of_cilicia_martyr'],
      colors: Colors.Red,
    },

    vincent_de_paul_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 27 },
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
      colors: Colors.Red,
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
      martyrology: ['lawrence_ruiz_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    michael_gabriel_and_raphael_archangels: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 29 },
      martyrology: ['michael_archangel', 'gabriel_archangel', 'raphael_archangel'],
    },

    jerome_of_stridon_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 30 },
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 1 },
    },

    holy_guardian_angels: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 2 },
    },

    francis_of_assisi: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 4 },
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
    },

    bruno_of_cologne_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
    },

    our_lady_of_the_rosary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 7 },
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
      martyrology: ['denis_of_paris_bishop', 'companions_martyrs'],
      colors: Colors.Red,
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
    },

    john_xxiii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
    },

    john_paul_ii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 22 },
    },

    callistus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 14 },
      colors: Colors.Red,
    },

    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 15 },
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    ignatius_of_antioch_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 17 },
      colors: Colors.Red,
    },

    luke_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 10, date: 18 },
      colors: Colors.Red,
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
    },

    john_of_capistrano_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 23 },
    },

    anthony_mary_claret_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 24 },
    },

    dedication_of_consecrated_churches_on_october_25: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      customLocaleId: 'dedication_of_consecrated_churches',
      dateDef: { month: 10, date: 25 },
      isOptional: true,
    },

    dedication_of_consecrated_churches_on_last_sunday_of_october: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      customLocaleId: 'dedication_of_consecrated_churches',
      dateDef: { month: 10, lastDayOfWeekInMonth: 0 },
      isOptional: true,
    },

    simon_and_jude_apostles: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 10, date: 28 },
      martyrology: ['simon_apostle', 'jude_apostle'],
      colors: Colors.Red,
    },

    all_saints: {
      precedence: Precedences.GeneralSolemnity_3,
      // 11-01
      dateDef: { dateFn: 'allSaints' },
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    commemoration_of_all_the_faithful_departed: {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { month: 11, date: 2 },
      colors: [Colors.Purple, Colors.Black],
    },

    martin_de_porres_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    charles_borromeo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 4 },
    },

    dedication_of_the_lateran_basilica: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 11, date: 9 },
    },

    leo_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 10 },
    },

    martin_of_tours_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 11 },
    },

    josaphat_kuntsevych_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 12 },
      colors: Colors.Red,
    },

    albert_the_great_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 15 },
    },

    margaret_of_scotland: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 17 },
    },

    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 18 },
    },

    presentation_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 21 },
    },

    cecilia_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 22 },
      colors: Colors.Red,
    },

    clement_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
      colors: Colors.Red,
    },

    columban_of_luxeuil_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
    },

    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 24 },
      martyrology: ['andrew_dung_lac_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    catherine_of_alexandria_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
      colors: Colors.Red,
    },

    andrew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 11, date: 30 },
      colors: Colors.Red,
    },

    francis_xavier_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 3 },
    },

    john_damascene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    nicholas_of_myra_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 6 },
    },

    ambrose_of_milan_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 7 },
    },

    immaculate_conception_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      // 12-08
      dateDef: { dateFn: 'immaculateConceptionOfMary' },
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 9 },
    },

    our_lady_of_loreto: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 10 },
    },

    damasus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 11 },
    },

    our_lady_of_guadalupe: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 12 },
    },

    lucy_of_syracuse_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 13 },
      colors: Colors.Red,
    },

    john_of_the_cross_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 14 },
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 21 },
    },

    john_of_kanty_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 23 },
    },

    stephen_the_first_martyr: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 26 },
      colors: Colors.Red,
    },

    john_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 27 },
      colors: Colors.White,
    },

    holy_innocents_martyrs: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 28 },
      colors: Colors.Red,
    },

    thomas_becket_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 29 },
      colors: Colors.Red,
    },

    sylvester_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 31 },
    },
  };
}
