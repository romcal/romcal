import { Colors } from '../constants/colors';
import { CommonDefinition as Common } from '../constants/commons';
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
    // src: mr_la_2008_ed3
    basil_the_great_and_gregory_nazianzen_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 2 },
      commons: Common.None,
      martyrology: ['basil_the_great_bishop', 'gregory_nazianzen_bishop'],
    },

    // src: mr_la_2008_ed3
    most_holy_name_of_jesus: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    raymond_of_penyafort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 7 },
      commons: Common.Pastors,
    },

    // src: mr_la_2008_ed3
    hilary_of_poitiers_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 13 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    anthony_of_egypt_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 17 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    fabian_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
      commons: [Common.Martyrs, Common.Popes],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    sebastian_of_milan_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    agnes_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 21 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    francis_de_sales_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 24 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    conversion_of_saint_paul_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 1, date: 25 },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    timothy_of_ephesus_and_titus_of_crete_bishops: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 26 },
      commons: Common.None,
      martyrology: ['timothy_of_ephesus_bishop', 'titus_of_crete_bishop'],
    },

    // src: mr_la_2008_ed3
    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
      commons: [Common.Virgins, Common.Educators],
    },

    // src: mr_la_2008_ed3
    thomas_aquinas_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 28 },
      commons: [Common.DoctorsOfTheChurch, Common.Pastors],
    },

    // src: mr_la_2008_ed3
    john_bosco_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 1, date: 31 },
      commons: [Common.Pastors, Common.Educators],
    },

    // src: mr_la_2008_ed3
    presentation_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      // 02-02
      dateDef: { dateFn: 'presentationOfTheLord' },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    blaise_of_sebaste_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    ansgar_of_hamburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 3 },
      commons: [Common.Missionaries, Common.Bishops],
    },

    // src: mr_la_2008_ed3
    agatha_of_sicily_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 5 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    paul_miki_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 6 },
      commons: Common.Martyrs,
      martyrology: ['paul_miki_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    jerome_emiliani: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 8 },
      commons: Common.Educators,
    },

    // src: mr_la_2008_ed3
    josephine_bakhita_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 8 },
      commons: Common.Virgins,
    },

    // src: mr_la_2008_ed3
    scholastica_of_nursia_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 10 },
      commons: [Common.Virgins, Common.Nuns],
    },

    // src: mr_la_2008_ed3
    our_lady_of_lourdes: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 11 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 14 },
      commons: Common.None,
      martyrology: ['cyril_constantine_the_philosopher_monk', 'methodius_michael_of_thessaloniki_bishop'],
    },

    // src: mr_la_2008_ed3
    seven_holy_founders_of_the_servite_order: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 17 },
      commons: Common.Religious,
    },

    // src: mr_la_2008_ed3
    peter_damian_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 21 },
      commons: [Common.DoctorsOfTheChurch, Common.Bishops],
    },

    // src: mr_la_2008_ed3
    chair_of_saint_peter_the_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 2, date: 22 },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    polycarp_of_smyrna_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 2, date: 23 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // Added on 2021-01-25: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20210125_decreto-dottori_en.html
    // src: mr_fr_2021_ed3
    gregory_of_narek_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 27 },
      commons: [Common.DoctorsOfTheChurch, Common.Abbots],
    },

    // src: mr_la_2008_ed3
    casimir_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 4 },
      commons: [Common.Saints],
    },

    // src: mr_la_2008_ed3
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 3, date: 7 },
      commons: Common.None,
      martyrology: ['perpetua_of_carthage_martyr', 'felicity_of_carthage_martyr'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_of_god_duarte_cidade_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 8 },
      commons: [Common.Religious, Common.MercyWorkers],
    },

    // src: mr_la_2008_ed3
    frances_of_rome_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 9 },
      commons: [Common.HolyWomen, Common.Religious],
    },

    // src: mr_la_2008_ed3
    patrick_of_ireland_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
      commons: [Common.Missionaries, Common.Bishops],
    },

    // src: mr_la_2008_ed3
    cyril_of_jerusalem_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 18 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
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
      commons: Common.None,
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    turibius_of_mogrovejo_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 23 },
      commons: Common.Bishops,
    },

    // src: mr_la_2008_ed3
    annunciation_of_the_lord: {
      precedence: Precedences.GeneralSolemnity_3,
      // 03-25
      dateDef: { dateFn: 'annunciation' },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    francis_of_paola_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 2 },
      commons: Common.Religious,
    },

    // src: mr_la_2008_ed3
    isidore_of_seville_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 4 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    vincent_ferrer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 5 },
      commons: Common.Missionaries,
    },

    // src: mr_la_2008_ed3
    john_baptist_de_la_salle_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 7 },
      commons: [Common.Pastors, Common.Educators],
    },

    // src: mr_la_2008_ed3
    stanislaus_of_szczepanow_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 11 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    martin_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 13 },
      commons: [Common.Martyrs, Common.Popes],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    anselm_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 21 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 23 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 23 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    fidelis_of_sigmaringen_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
      commons: [Common.Martyrs, Common.Pastors],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    mark_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 4, date: 25 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    peter_chanel_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 28 },
      commons: [Common.Martyrs, Common.Missionaries],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 28 },
      commons: Common.Pastors,
    },

    // src: mr_la_2008_ed3
    catherine_of_siena_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 4, date: 29 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    pius_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 30 },
      commons: Common.Popes,
    },

    // src: mr_la_2008_ed3
    joseph_the_worker: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 1 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    athanasius_of_alexandria_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 5, date: 2 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    philip_and_james_apostles: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 3 },
      commons: Common.None,
      martyrology: ['philip_apostle', 'james_apostle'],
      colors: Colors.Red,
    },

    // Added on 2021-01-25: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20210125_decreto-dottori_en.html
    // src: mr_fr_2021_ed3
    john_of_avila_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 10 },
      commons: [Common.Pastors, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
      commons: Common.Martyrs,
      martyrology: ['nereus_of_terracina_martyr', 'achilleus_of_terracina_martyr'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    pancras_of_rome_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 12 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    our_lady_of_fatima: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 13 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    matthias_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 14 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 18 },
      commons: [Common.Martyrs, Common.Popes],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    bernardine_of_siena_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 20 },
      commons: [Common.Missionaries, Common.Religious],
    },

    // src: mr_la_2008_ed3
    christopher_magallanes_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
      commons: Common.Martyrs,
      martyrology: ['christopher_magallanes_priest', { id: 'companions_martyrs', count: 24 }],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    rita_of_cascia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 22 },
      commons: Common.Religious,
    },

    // src: mr_la_2008_ed3
    bede_the_venerable_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
      commons: [Common.DoctorsOfTheChurch, Common.Monks],
    },

    // src: mr_la_2008_ed3
    gregory_vii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
      commons: Common.Popes,
    },

    // src: mr_la_2008_ed3
    mary_magdalene_de_pazzi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
      commons: [Common.Virgins, Common.Religious],
    },

    // src: mr_la_2008_ed3
    philip_neri_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 5, date: 26 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    augustine_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 27 },
      commons: [Common.Missionaries, Common.Bishops],
    },

    // Added on 2019-01-25: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20190125_decreto-celebrazione-paolovi_en.html
    // src: mr_fr_2021_ed3, mr_it_2020_ed3
    paul_vi_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
      commons: [Common.Popes],
    },

    // src: mr_la_2008_ed3
    visitation_of_mary: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 5, date: 31 },
      commons: Common.None,
    },

    // src: mr_fr_2021_ed3, mr_it_2020_ed3
    mary_mother_of_the_church: {
      precedence: Precedences.GeneralMemorial_10,
      // The Monday, after Pentecost Sunday
      dateDef: { dateFn: 'maryMotherOfTheChurch' },
      properCycle: ProperCycles.ProperOfTime,
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    immaculate_heart_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      // The Saturday, after the Solemnity of the Most Sacred Heart of Jesus
      dateDef: { dateFn: 'immaculateHeartOfMary' },
      // If this liturgical day and a memorial occur on the same day,
      // do not replace the latter, but output them both.
      allowSimilarRankItems: true,
      colors: Colors.White,
      properCycle: ProperCycles.ProperOfTime,
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    justin_martyr: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 1 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      commons: Common.Martyrs,
      martyrology: ['marcellinus_of_rome_martyr', 'peter_the_exorcist_martyr'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    charles_lwanga_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 3 },
      commons: Common.None,
      martyrology: ['charles_lwanga_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    boniface_of_mainz_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 5 },
      commons: [Common.Martyrs, Common.Missionaries],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
      commons: [Common.Bishops, Common.Religious],
    },

    // src: mr_la_2008_ed3
    ephrem_the_syrian_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 9 },
      commons: Common.DoctorsOfTheChurch,
    },

    // src: mr_la_2008_ed3
    barnabas_apostle: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 11 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    anthony_of_padua_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 13 },
      commons: [Common.Pastors, Common.DoctorsOfTheChurch, Common.Religious],
    },

    // src: mr_la_2008_ed3
    romuald_of_ravenna_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 19 },
      commons: Common.Abbots,
    },

    // src: mr_la_2008_ed3
    aloysius_gonzaga_religious: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 21 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    paulinus_of_nola_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
      commons: Common.Bishops,
    },

    // src: mr_la_2008_ed3
    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 22 },
      commons: Common.Martyrs,
      martyrology: ['john_fisher_bishop', 'thomas_more_martyr'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    nativity_of_john_the_baptist: {
      // Note: The title of Martyr is not indicated here, as Saint John the Baptist is not yet a Martyr at his birth.
      // Therefore, this celebration will be celebrated in white (src: GIRM, 308a).
      precedence: Precedences.GeneralSolemnity_3,
      // 06-24
      dateDef: { dateFn: 'nativityOfJohnTheBaptist' },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    irenaeus_of_lyon_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 6, date: 28 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    peter_and_paul_apostles: {
      precedence: Precedences.GeneralSolemnity_3,
      // 06-29
      dateDef: { dateFn: 'peterAndPaulApostles' },
      isHolyDayOfObligation: true,
      colors: Colors.Red,
      commons: Common.None,
      martyrology: ['peter_apostle', 'paul_apostle'],
    },

    // src: mr_la_2008_ed3
    first_martyrs_of_the_holy_roman_church: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 30 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    thomas_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 3 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
      commons: Common.MercyWorkers,
    },

    // src: mr_la_2008_ed3
    anthony_zaccaria_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 5 },
      commons: [Common.Pastors, Common.Educators, Common.Religious],
    },

    // src: mr_la_2008_ed3
    maria_goretti_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 6 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    augustine_zhao_rong_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 9 },
      commons: Common.Martyrs,
      martyrology: ['augustine_zhao_rong_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    benedict_of_nursia_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 11 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 13 },
      commons: Common.Saints,
    },

    // src: mr_la_2008_ed3
    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
      commons: Common.MercyWorkers,
    },

    // src: mr_la_2008_ed3
    bonaventure_of_bagnoregio_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 15 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    our_lady_of_mount_carmel: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 16 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    apollinaris_of_ravenna_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    lawrence_of_brindisi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 21 },
      commons: [Common.Pastors, Common.DoctorsOfTheChurch, Common.Religious],
    },

    // src: mr_la_2008_ed3
    mary_magdalene: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 22 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    bridget_of_sweden_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 23 },
      commons: [Common.HolyWomen, Common.Religious],
    },

    // src: mr_la_2008_ed3
    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
      commons: [Common.Pastors, Common.Monks],
    },

    // src: mr_la_2008_ed3
    james_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 7, date: 25 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    joachim_and_anne_parents_of_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 26 },
      commons: Common.None,
      martyrology: ['joachim_father_of_mary', 'anne_mother_of_mary'],
    },

    // Modified on 2021-01-26: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20210126_decreto-santi_en.html
    // src: mr_fr_2021_ed3
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 29 },
      commons: Common.None,
      martyrology: ['martha_of_bethany', 'mary_of_bethany', 'lazarus_of_bethany'],
    },

    // src: mr_la_2008_ed3
    peter_chrysologus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    ignatius_of_loyola_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 7, date: 31 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    alphonsus_mary_liguori_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 1 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    eusebius_of_vercelli_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 2 },
      commons: Common.Bishops,
    },

    // src: mr_la_2008_ed3
    peter_julian_eymard_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 2 },
      commons: [Common.Religious, Common.Pastors],
    },

    // src: mr_la_2008_ed3
    john_mary_vianney_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 4 },
      commons: Common.Pastors,
    },

    // src: mr_la_2008_ed3
    dedication_of_the_basilica_of_saint_mary_major: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    transfiguration_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      // 08-06
      dateDef: { dateFn: 'transfiguration' },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    sixtus_ii_pope_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
      commons: Common.Martyrs,
      martyrology: ['sixtus_ii_pope', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    cajetan_of_thiene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
      commons: [Common.Pastors, Common.Religious],
    },

    // src: mr_la_2008_ed3
    dominic_de_guzman_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 8 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    teresa_benedicta_of_the_cross_stein_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 9 },
      commons: [Common.Martyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    lawrence_of_rome_deacon: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 8, date: 10 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    clare_of_assisi_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 11 },
      commons: [Common.Virgins, Common.Nuns],
    },

    // src: mr_la_2008_ed3
    jane_frances_de_chantal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
      commons: Common.Religious,
    },

    // src: mr_la_2008_ed3
    pontian_i_pope_and_hippolytus_of_rome_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 13 },
      commons: [Common.Martyrs, Common.Pastors],
      martyrology: ['pontian_i_pope', 'hippolytus_of_rome_priest'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    maximilian_mary_raymund_kolbe_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 14 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    assumption_of_the_blessed_virgin_mary: {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      // 08-15
      dateDef: { dateFn: 'assumption' },
      commons: Common.None,
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    stephen_i_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
      commons: Common.Saints,
    },

    // src: mr_la_2008_ed3
    john_eudes_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
      commons: [Common.Pastors, Common.Religious],
    },

    // src: mr_la_2008_ed3
    bernard_of_clairvaux_abbot: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 20 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    pius_x_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 21 },
      commons: [Common.Popes],
    },

    // src: mr_la_2008_ed3
    queenship_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 22 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    rose_of_lima_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 23 },
      commons: Common.Virgins,
    },

    // src: mr_la_2008_ed3
    bartholomew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 8, date: 24 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    louis_ix_of_france: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 25 },
      commons: Common.Saints,
    },

    // src: mr_la_2008_ed3
    joseph_of_calasanz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 25 },
      commons: [Common.Educators, Common.Pastors],
    },

    // src: mr_la_2008_ed3
    monica_of_hippo: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 27 },
      commons: Common.HolyWomen,
    },

    // src: mr_la_2008_ed3
    augustine_of_hippo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 28 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    passion_of_saint_john_the_baptist: {
      // Note: here we consider Saint John the Baptist as a martyr, although the title of Martyr is not indicated
      // in the name of this memorial. Therefore, we explicitly specify the red color, but omit the title of Martyr.
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 8, date: 29 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    gregory_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 3 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    nativity_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 8 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    peter_claver_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
      commons: [Common.Pastors, Common.MercyWorkers],
    },

    // src: mr_la_2008_ed3
    most_holy_name_of_mary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 12 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    john_chrysostom_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 13 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    exaltation_of_the_holy_cross: {
      precedence: Precedences.GeneralLordFeast_5,
      // 09-14
      dateDef: { dateFn: 'exaltationOfTheHolyCross' },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    our_lady_of_sorrows: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 15 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 16 },
      commons: [Common.Martyrs, Common.Pastors],
      martyrology: ['cornelius_i_pope', 'cyprian_of_carthage_bishop'],
      colors: Colors.Red,
    },

    // Added on 2021-01-25: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20210125_decreto-dottori_en.html
    // src: mr_fr_2021_ed3
    hildegard_of_bingen_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
      commons: [Common.Virgins, Common.Nuns],
    },

    // src: mr_la_2008_ed3
    robert_bellarmine_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    januarius_i_of_benevento_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 20 },
      commons: Common.None,
      martyrology: ['andrew_kim_tae_gon_priest', 'paul_chong_ha_sang_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    matthew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 21 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    pius_francesco_forgione_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 23 },
      commons: [Common.Pastors, Common.Religious],
    },

    // src: mr_la_2008_ed3
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
      commons: Common.Martyrs,
      martyrology: ['cosmas_of_cilicia_martyr', 'damian_of_cilicia_martyr'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    vincent_de_paul_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 27 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
      commons: Common.Martyrs,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
      commons: Common.Martyrs,
      martyrology: ['lawrence_ruiz_martyr', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    michael_gabriel_and_raphael_archangels: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 9, date: 29 },
      commons: Common.None,
      martyrology: ['michael_archangel', 'gabriel_archangel', 'raphael_archangel'],
    },

    // src: mr_la_2008_ed3
    jerome_of_stridon_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 9, date: 30 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 1 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    holy_guardian_angels: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 2 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    francis_of_assisi: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 4 },
      commons: Common.None,
    },

    // Added on 2020-05-18: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20200518_decreto-celebrazione-santafaustina_en.html
    // src: mr_fr_2021_ed3
    faustina_kowalska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
      commons: [Common.Virgins, Common.Nuns],
    },

    // src: mr_la_2008_ed3
    bruno_of_cologne_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
      commons: [Common.Monks, Common.Pastors],
    },

    // src: mr_la_2008_ed3
    our_lady_of_the_rosary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 7 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
      commons: Common.Martyrs,
      martyrology: ['denis_of_paris_bishop', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
      commons: [Common.Missionaries, Common.MercyWorkers],
    },

    // Added on 2014-05-29: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    // src: mr_fr_2021_ed3, mr_it_2020_ed3
    john_xxiii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
      commons: Common.Popes,
    },

    // src: mr_la_2008_ed3
    callistus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 14 },
      commons: [Common.Martyrs, Common.Popes],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 15 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    hedwig_of_silesia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
      commons: [Common.Religious, Common.HolyWomen],
    },

    // src: mr_la_2008_ed3
    margaret_mary_alacoque_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
      commons: [Common.Virgins],
    },

    // src: mr_la_2008_ed3
    ignatius_of_antioch_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 10, date: 17 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    luke_evangelist: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 10, date: 18 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
      commons: Common.MissionaryMartyrs,
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
      commons: Common.None,
    },

    // Added on 2014-05-29: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    // src: mr_fr_2021_ed3, mr_it_2020_ed3
    john_paul_ii_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 22 },
      commons: Common.Popes,
    },

    // src: mr_la_2008_ed3
    john_of_capistrano_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 23 },
      commons: [Common.Missionaries, Common.Religious],
    },

    // src: mr_la_2008_ed3
    anthony_mary_claret_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 24 },
      commons: [Common.Missionaries, Common.Bishops],
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

    // src: mr_la_2008_ed3
    simon_and_jude_apostles: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 10, date: 28 },
      commons: Common.None,
      martyrology: ['simon_apostle', 'jude_apostle'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    all_saints: {
      precedence: Precedences.GeneralSolemnity_3,
      // 11-01
      dateDef: { dateFn: 'allSaints' },
      commons: Common.None,
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    commemoration_of_all_the_faithful_departed: {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { month: 11, date: 2 },
      commons: Common.None,
      colors: [Colors.Purple, Colors.Black],
    },

    // src: mr_la_2008_ed3
    martin_de_porres_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
      commons: [Common.Religious],
    },

    // src: mr_la_2008_ed3
    charles_borromeo_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 4 },
      commons: Common.Bishops,
    },

    // src: mr_la_2008_ed3
    dedication_of_the_lateran_basilica: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 11, date: 9 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    leo_i_the_great_pope: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 10 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    martin_of_tours_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 11 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    josaphat_kuntsevych_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 12 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    albert_the_great_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 15 },
      commons: [Common.Bishops, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    margaret_of_scotland: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
      commons: Common.MercyWorkers,
    },

    // src: mr_la_2008_ed3
    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
      commons: [Common.Virgins, Common.Nuns],
    },

    // src: mr_la_2008_ed3
    elizabeth_of_hungary_religious: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 17 },
      commons: Common.MercyWorkers,
    },

    // src: mr_la_2008_ed3
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 18 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    presentation_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 21 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    cecilia_of_rome_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 22 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    clement_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
      commons: [Common.Martyrs, Common.Popes],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    columban_of_luxeuil_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
      commons: [Common.Missionaries, Common.Abbots],
    },

    // src: mr_la_2008_ed3
    andrew_dung_lac_priest_and_companions_martyrs: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 11, date: 24 },
      commons: Common.None,
      martyrology: ['andrew_dung_lac_priest', 'companions_martyrs'],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    catherine_of_alexandria_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    andrew_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 11, date: 30 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    francis_xavier_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 3 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    john_damascene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
      commons: [Common.Pastors, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    nicholas_of_myra_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 6 },
      commons: Common.Bishops,
    },

    // src: mr_la_2008_ed3
    ambrose_of_milan_bishop: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 7 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    immaculate_conception_of_the_blessed_virgin_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      // 12-08
      dateDef: { dateFn: 'immaculateConceptionOfMary' },
      commons: Common.None,
      isHolyDayOfObligation: true,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    juan_diego_cuauhtlatoatzin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 9 },
      commons: Common.Saints,
    },

    // Added on 2019-10-07: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20191007_decreto-celebrazione-verginediloreto_en.html
    // src: mr_fr_2021_ed3, mr_it_2020_ed3
    our_lady_of_loreto: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 10 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    damasus_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 11 },
      commons: Common.Popes,
    },

    // src: mr_la_2008_ed3
    our_lady_of_guadalupe: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 12 },
      commons: Common.BlessedVirginMary,
    },

    // src: mr_la_2008_ed3
    lucy_of_syracuse_virgin: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 13 },
      commons: [Common.VirginMartyrs, Common.Virgins],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_of_the_cross_priest: {
      precedence: Precedences.GeneralMemorial_10,
      dateDef: { month: 12, date: 14 },
      commons: Common.None,
    },

    // src: mr_la_2008_ed3
    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 21 },
      commons: [Common.Pastors, Common.DoctorsOfTheChurch],
    },

    // src: mr_la_2008_ed3
    john_of_kanty_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 23 },
      commons: [Common.Pastors, Common.MercyWorkers],
    },

    // src: mr_la_2008_ed3
    stephen_the_first_martyr: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 26 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    john_apostle: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 27 },
      commons: Common.None,
      colors: Colors.White,
    },

    // src: mr_la_2008_ed3
    holy_innocents_martyrs: {
      precedence: Precedences.GeneralFeast_7,
      dateDef: { month: 12, date: 28 },
      commons: Common.None,
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    thomas_becket_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 29 },
      commons: [Common.Martyrs, Common.Bishops],
      colors: Colors.Red,
    },

    // src: mr_la_2008_ed3
    sylvester_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 31 },
      commons: [Common.Popes],
    },
  };
}
