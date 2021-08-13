import { Locale } from '@romcal/types/locale';

export const locale: Locale = {
  key: 'fr',

  roman_rite: {
    seasons: {
      advent: {
        season: 'Temps de l’Avent',
        weekday:
          '$t(weekdays:{{dow}}, capitalize) de la $t(ordinals:{{week}}, { "context": "feminine" }) semaine de l’Avent',
        sunday: '$t(ordinals:{{week}}, capitalize) dimanche de l’Avent',
        privileged_weekday: '{{day}} $t(months:11)',
      },

      christmas_time: {
        season: 'Temps de Noël',
        day: '$t(weekdays:{{dow}}, capitalize) dans le Temps de Noël',
        octave: '{{count}}ᵉ jour dans l’Octave de la Nativité',
        second_sunday_after_christmas: 'Deuxième dimanche après la Nativité',
        before_epiphany: '{{day}} $t(months:0)',
        after_epiphany: '$t(weekdays:{{dow}}, capitalize) après l’Épiphanie',
      },

      ordinary_time: {
        season: 'Temps Ordinaire',
        weekday:
          '$t(weekdays:{{dow}}, capitalize) de la $t(ordinals:{{week}}, { "context": "feminine" }) semaine du Temps Ordinaire',
        sunday: '$t(ordinals:{{week}}, capitalize) $t(weekdays:0) du Temps Ordinaire',
      },

      lent: {
        season: 'Temps du Carême',
        weekday:
          '$t(weekdays:{{dow}}, capitalize) de la $t(ordinals:{{week}}, { "context": "feminine" }) semaine de Carême',
        sunday: '$t(ordinals:{{week}}, capitalize) dimanche de Carême',
        day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) après les Cendres',
        holy_week_day: '$t(weekdays:{{dow}}, capitalize) Saint',
      },

      paschal_triduum: {
        season: 'Triduum Pascal',
      },

      easter_time: {
        season: 'Temps Pascal',
        weekday:
          '$t(weekdays:{{dow}}, capitalize) de la $t(ordinals:{{week}}, { "context": "feminine" }) semaine de Pâques',
        sunday: '$t(ordinals:{{week}}, capitalize) dimanche de Pâques',
        octave: '$t(weekdays:{{dow}}, capitalize) dans l’Octave de Pâques',
      },
    },

    periods: {
      epiphany: 'Épiphanie',
      holy_week: 'Semaine Sainte',
    },

    ranks: {
      solemnity: 'Solennité',
      sunday: 'Dimanche',
      feast: 'Fête',
      memorial: 'Mémoire',
      weekday: 'Férie',
    },

    celebrations: {
      all_saints: 'Tous les Saints',
      annunciation: 'Annonciation du Seigneur',
      ascension: 'Ascension du Seigneur',
      ash_wednesday: 'Mercredi des Cendres',
      assumption: 'Assomption de la Vierge Marie',
      baptism_of_the_lord: 'Baptême du Seigneur',
      christ_the_king_sunday: 'Trente-quatrième et dernier dimanche - Le Christ, Roi de l’Univers',
      christmas: 'Nativité du Seigneur',
      corpus_christi: 'Le Saint-Sacrement du Corps et du Sang du Christ',
      divine_mercy_sunday: 'Deuxième dimanche de Pâques ou de la Divine Miséricorde',
      easter_sunday: 'Dimanche de Pâques - La résurrection du Seigneur',
      epiphany: 'Épiphanie du Seigneur',
      exaltation_of_the_holy_cross: 'La Croix Glorieuse',
      good_friday: 'Vendredi Saint',
      holy_family: 'La Sainte Famille',
      holy_saturday: 'Samedi Saint',
      holy_thursday: 'Jeudi Saint',
      immaculate_conception_of_mary: 'Immaculée Conception de la Vierge Marie',
      immaculate_heart_of_mary: 'Cœur immaculé de Marie',
      joseph_spouse_of_mary: 'Saint Joseph, Époux de la Vierge Marie',
      mary_mother_of_god: 'Sainte Marie, Mère de Dieu',
      most_sacred_heart_of_jesus: 'Sacré-Cœur de Jésus',
      nativity_of_john_the_baptist: 'Nativité de Saint Jean le Baptiste',
      palm_sunday: 'Dimanche des Rameaux et de la Passion',
      pentecost_sunday: 'Pentecôte',
      peter_and_paul_apostles: 'Saint Pierre et Saint Paul, Apôtres',
      presentation_of_the_lord: 'Présentation du Seigneur au Temple',
      sunday_of_the_word_of_god: 'Troisième dimanche du Temps Ordinaire, ou de la Parole de Dieu',
      thursday_of_the_lord_s_supper: 'Mémoire de la Cène du Seigneur',
      transfiguration: 'Transfiguration du Seigneur',
      trinity_sunday: 'La Sainte Trinité',
    },
  },

  weekdays: {
    0: 'dimanche',
    1: 'lundi',
    2: 'mardi',
    3: 'mercredi',
    4: 'jeudi',
    5: 'vendredi',
    6: 'samedi',
  },

  months: {
    0: 'janvier',
    1: 'février',
    2: 'mars',
    3: 'avril',
    4: 'mai',
    5: 'juin',
    6: 'juillet',
    7: 'août',
    8: 'septembre',
    9: 'octobre',
    10: 'novembre',
    11: 'décembre',
  },

  colors: {
    black: 'noir',
    gold: 'doré',
    green: 'vert',
    purple: 'violet',
    red: 'rouge',
    rose: 'rose',
    white: 'blanc',
  },

  ordinals: {
    '1': 'premier',
    '1_feminine': 'première',
    '2': 'deuxième',
    '3': 'troisième',
    '4': 'quatrième',
    '5': 'cinquième',
    '6': 'sixième',
    '7': 'septième',
    '8': 'huitième',
    '9': 'neuvième',
    '10': 'dixième',
    '11': 'onzième',
    '12': 'douzième',
    '13': 'treizième',
    '14': 'quatorzième',
    '15': 'quinzième',
    '16': 'seizième',
    '17': 'dix-septième',
    '18': 'dix-huitième',
    '19': 'dix-neuvième',
    '20': 'vingtième',
    '21': 'vingt et unième',
    '22': 'vingt-deuxième',
    '23': 'vingt-troisième',
    '24': 'vingt-quatrième',
    '25': 'vingt-cinquième',
    '26': 'vingt-sixième',
    '27': 'vingt-septième',
    '28': 'vingt-huitième',
    '29': 'vingt-neuvième',
    '30': 'trentième',
    '31': 'trente et unième',
    '32': 'trente-deuxième',
    '33': 'trente-troisième',
    '34': 'trente-quatrième',
  },

  martyrology: {
    adalbert_of_prague_bishop: 'Saint Adalbert, Évêque de Prague et Martyr (✝ 997)',
    adalbert_of_prague_bishop_patron_of_poland:
      'Saint Adalbert, Évêque de Prague, Martyr et Patron de la Pologne (✝ 997)',
    agatha_of_sicily_virgin: 'Sainte Agathe, Vierge et Martyre en Sicile (✝ 251)',
    agnes_of_rome_virgin: 'Sainte Agnès, Vierge et Martyre (✝ v. 304)',
    albert_the_great_bishop:
      'Saint Albert le Grand, Frère prêcheur, Évêque de Ratisbonne, Docteur de l’Eglise (✝ 1280)',
    all_souls: 'Commémoration de tous les fidèles défunts',
    all_the_saints_of_the_diocese_of_paris: 'Tous les Saints du diocèse de Paris',
    aloysius_gonzaga_religious: 'Saint Louis de Gonzague, Religieux Jésuite (✝ 1591)',
    alphonsus_liguori_bishop: 'Saint Alphonse-Marie de Liguori, Bishop and Doctor of the Church',
    amand_of_maastricht_bishop:
      'Saint Amand d’Elnone, Missionnaire, Évêque de Maastricht (✝ v. 676)',
    ambrose_of_milan_bishop: 'Saint Ambroise, Évêque de Milan et Docteur de l’Église (✝ 397)',
    andre_bessette_religious: 'Saint Frère André Bessette, Religieux (✝ 1937)',
    andre_grasset_priest:
      'Bienheureux André Grasset, Prêtre, Canadien martyr de la Révolution française (✝ 1792)',
    andrew_apostle: 'Saint André, Apôtre',
    andrew_apostle_patron_of_scotland: 'Saint André, Apôtre et Patron de l’Écosse',
    andrew_dung_lac_priest_and_companions_martyrs:
      'Saint André Dung Lac, Prêtre, et ses compagnons, Martyrs (✝ entre 1745 et 1862)',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Saint André Kim Taegon, Prêtre, et Paul Chong Ha-sang et ses compagnons, Martyrs en Corée (XIXème s.)',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits:
      'Saints André Svorad († 1009) et Benoît Stojislav († 1012), Ermites',
    angela_merici_virgin:
      'Sainte Angèle Mérici, Religieuse, Fondatrice de la Compagnie de Sainte Ursule de Brescia (✝ 1540)',
    anselm_of_canterbury_bishop:
      'Saint Anselme de Cantorbéry, Évêque, docteur de l’Eglise (✝ 1109)',
    ansgar_of_hamburg_bishop: 'Saint Anschaire de Brême, Évêque (✝ 865)',
    anthony_mary_claret_bishop: 'Saint Antoine-Marie Claret, Évêque (✝ 1870)',
    anthony_of_egypt_abbot: 'Saint Antoine le Grand, Ermite en Égypte (✝ 356)',
    anthony_of_padua_priest: 'Saint Antoine, Prêtre et Docteur de l’Église (✝ 1231)',
    anthony_zaccaria_priest: 'Saint Antoine-Marie Zaccaria, Prêtre (✝ 1539)',
    apollinaris_of_ravenna_bishop: 'Saint Apollinaire, Évêque et Martyr (IIème s.)',
    athanasius_of_alexandria_bishop: 'Saint Athanase, Évêque, Docteur et Père de l’Église (✝ 373)',
    augustine_of_canterbury_bishop: 'Saint Augustin, Évêque de Cantorbéry en Angleterre (✝ 604)',
    augustine_of_hippo_bishop: 'Saint Augustin, Évêque d’Hippone, Docteur de l’Église (✝ 430)',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Saints Augustin Zhao Rong et ses compagnons, Martyrs en Chine (entre 1648 et 1930)',
    barnabas_apostle: 'Saint Barnabé, Apôtre',
    bartholomew_apostle: 'Saint Barthélemy, Apôtre',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Saints Basile le Grand (✝ 379) et Grégoire de Naziance (✝ 390), Évêques et Docteurs de l’Église',
    bede_the_venerable_priest: 'Saint Bède le Vénérable, Prêtre et docteur de l’Église (✝ 735)',
    benedict_of_nursia_abbot:
      'Saint Benoît de Nursie, Patriarche des moines d’Occident, Fondateur de l’ordre des Bénédictins (✝ v. 547)',
    benedict_of_nursia_abbot_patron_of_europe:
      'Saint Benoît de Nursie, Patriarche des moines d’Occident, Fondateur de l’ordre des Bénédictins et Patron de l’Europe (✝ v. 547)',
    bernadette_soubirous_virgin: 'Sainte Bernadette Soubirous, Vierge (✝ 1879)',
    bernard_of_clairvaux_abbot: 'Saint Bernard de Clairvaux, Abbé, Docteur de l’Église (✝ 1153)',
    bernardine_of_siena_priest: 'Saint Bernardin de Sienne, Prêtre (✝ 1444)',
    blaise_of_sebaste_bishop: 'Saint Blaise de Sébaste, Évêque et Martyr (✝ 316)',
    blessed_martyrs_of_paris: 'Bienheureux martyrs de Paris († du 2 au 6 septembre 1792)',
    bonaventure_of_bagnoregio_bishop:
      'Saint Bonaventure, Évêque d’Albano et Docteur de l’Église (✝ 1274)',
    boniface_of_mainz_bishop: 'Saint Boniface, Évêque et Martyr (✝ 754)',
    bridget_of_sweden_religious:
      'Sainte Brigitte de Suède, Veuve puis Religieuse, Fondatrice de l’ordre du Saint-Sauveur (✝ 1373)',
    bridget_of_sweden_religious_copatroness_of_europe:
      'Sainte Brigitte de Suède, Veuve puis Religieuse, Fondatrice de l’ordre du Saint-Sauveur, Co-Patronne de l’Europe (✝ 1373)',
    bruno_of_cologne_priest: 'Saint Bruno, Prêtre, Fondateur des Chartreux (✝ 1101)',
    caesarius_of_arles_bishop: 'Saint Césaire d’Arles, Évêque (✝ 542)',
    cajetan_of_thiene_priest: 'Saint Gaétan de Thienne, Prêtre (✝ 1547)',
    callistus_i_pope: 'Saint Calixte Ier, Pape et Martyr (✝ 222)',
    camillus_de_lellis_priest: 'Saint Camille de Lellis, Prêtre (✝ 1614)',
    carmelites_of_compiegne_virgins_and_martyrs:
      'Bienheureuses Carmélites de Compiègne : Mère Thérèse et ses 15 compagnes, Martyres (guillotinées en 1794)',
    casimir_of_poland: 'Saint Casimir (✝ 1484)',
    catherine_laboure_virgin: 'Sainte Catherine Labouré, Vierge († 1876)',
    catherine_of_alexandria_virgin: 'Sainte Catherine d’Alexandrie, Vierge et Martyre (IVème s.)',
    catherine_of_saint_augustine_de_simon_de_longpre_virgin:
      'Bienheureuse Catherine de Saint-Augustin, Religieuse hospitalière de la Miséricorde (✝ 1668)',
    catherine_of_siena_virgin: 'Sainte Catherine de Sienne, Vierge et Docteur de l’Eglise (✝ 1380)',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Sainte Catherine de Sienne, Vierge, Docteur de l’Eglise, Co-Patronne de l’Europe (✝ 1380)',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Sainte Catherine de Sienne, Vierge, Docteur de l’Eglise, Co-Patronne de l’Italie et de l’Europe (✝ 1380)',
    cecilia_of_rome_virgin: 'Sainte Cécile, Vierge et Martyre à Rome (✝ 230)',
    ceran_of_paris_bishop: 'Saint Céran, Évêque de Paris au 7e siècle',
    chair_of_saint_peter_the_apostle: 'Chaire de Saint Pierre, Apôtre',
    charles_borromeo_bishop: 'Saint Charles Borromée, Archevêque de Milan (✝ 1584)',
    charles_de_foucauld:
      'Bienheureux Charles de Foucauld, Prêtre, Ermite et Missionnaire au Sahara († 1916)',
    charles_lwanga_and_companions_martyrs:
      'Saints Charles Lwanga et ses douze compagnons, Martyrs (✝ 618)',
    christopher_magallanes_priest_and_companions_martyrs:
      'Saints Cristóbal Magallanes, Prêtre, et ses 24 compagnons, Martyrs Mexicains (✝ 1927)',
    clare_of_assisi_virgin: 'Sainte Claire, Vierge',
    clement_i_pope: 'Saint Clément Ier, Pape et Martyr (✝ 97)',
    clotilde_of_burgundy: 'Sainte Clotilde, Reine des Francs (✝ 545)',
    columba_of_iona_abbot: 'Saint Colomba, Religieux (✝ 615)',
    columba_of_iona_abbot_copatron_of_ireland:
      'Saint Colomba, Religieux, Co-Patron de l’Irlande (✝ 615)',
    conversion_of_saint_paul_the_apostle: 'Conversion de Saint Paul, Apôtre',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Saints Martyrs Corneille, Pape, et Cyprien, Évêque (IIIème s.)',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Saints Côme et Damien, Martyrs (IIIème s.)',
    cyril_of_alexandria_bishop: 'Saint Cyrille, Évêque d’Alexandrie et Docteur de l’Église (✝ 444)',
    cyril_of_jerusalem_bishop:
      'Saint Cyrille de Jérusalem, Évêque de Jérusalem, Docteur de l’Église (✝ 387)',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop:
      'Saints Cyrille, Moine, et Méthode, Évêque, Apôtres des Slaves au IXème siècle',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      'Saints Cyrille, Moine, et Méthode, Évêque, Apôtres des Slaves au IXème siècle, Co-Patrons de l’Europe',
    damasus_i_pope: 'Saint Damase Ier, Pape (✝ 384)',
    damien_de_veuster_priest: 'Saint Père Damien, Prêtre et Missionnaire Picpus (✝ 1889)',
    daniel_brottier_priest:
      'Binheureux Daniel Brottier, Prêtre, Apôtre des Orphelins d’Auteuil († 1936 à Paris)',
    dedication_of_the_basilica_of_saint_mary_major: 'Dédicace de la basilique Sainte-Marie Majeure',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Dédicace des basiliques de Saint Pierre et Saint Paul, Apôtres, à Rome',
    dedication_of_the_cathedral_of_paris: 'Dédicace de la cathédrale de Paris',
    dedication_of_the_lateran_basilica: 'Dédicace de la Basilique du Latran',
    denis_of_paris_bishop_patron_of_the_diocese_of_paris:
      'Saint Denis, Martyr, Premier évêque, Patron du diocèse',
    denis_of_paris_bishop_and_companions_martyrs:
      'Saint Denis, Évêque, et ses compagnons, martyrs à Paris (IIIème s.)',
    dina_belanger_virgin:
      'Bienheureuse Dina Bélanger, Religieuse de la congrégation des Sœurs de Jésus-Marie (✝ 1929)',
    dominic_de_guzman_priest:
      'Saint Dominique de Guzman, Prêtre, Fondateur de l’Ordre des Frères prêcheurs (✝ 1221)',
    elizabeth_of_hungary_religious: 'Sainte Élisabeth de Hongrie (✝ 1231)',
    elizabeth_of_portugal: 'Sainte Élisabeth du Portugal, Reine (✝ 1336)',
    emilie_tavernier_gamelin_religious:
      'Bienheureuse Émilie Tavernier-Gamelin, Religieuse, Fondatrice des Sœurs de la Providence de Montréal (✝ 1851)',
    ephrem_the_syrian_deacon: 'Saint Ephrem, Diacre et Docteur de l’Église, (✝ 373)',
    eugene_de_mazenod_bishop:
      'Saint Eugène de Mazenod, Fondateur des Oblats de Marie-Immaculée, Évêque de Marseille (✝ 1861)',
    eusebius_of_vercelli_bishop: 'Saint Eusèbe de Verceil, Évêque (✝ 371)',
    fabian_i_pope: 'Saint Fabien, Pape et Martyr (✝ 250)',
    faustina_kowalska_virgin: 'Sainte Faustina Kowalska (✝ 1938)',
    fidelis_of_sigmaringen_priest: 'Saint Fidèle de Sigmaringen, Prêtre et Martyr (✝ 1622)',
    first_martyrs_of_the_holy_roman_church: 'Premiers martyrs de l’Église de Rome (✝ 64)',
    frances_of_rome_religious: 'Sainte Françoise Romaine, Religieuse (✝ 1440)',
    francis_de_sales_bishop:
      'Saint François de Sales, Évêque de Genève et Docteur de l’Église (✝ 1622)',
    francis_of_assisi: 'Saint François d’Assise, Fondateur de l’ordre des Frères mineurs (✝ 1226)',
    francis_of_assisi_patron_of_italy:
      'Saint François d’Assise, Fondateur de l’ordre des Frères mineurs, Patron de l’Italie (✝ 1226)',
    francis_of_paola_hermit:
      'Saint François de Paule, Ermite, Fondateur de l’ordre des Minimes (✝ 1507)',
    francis_xavier_priest: 'Saint François-Xavier, Prêtre, Jésuite Missionnaire (✝ 1552)',
    francois_de_montmorency_laval_bishop:
      'Saint François de Laval, Premier évêque de Québec (✝ 1708)',
    frederic_janssoone_priest: 'Bienheureux Frédéric Janssoone, Prêtre franciscain (✝ 1916)',
    frederic_ozanam:
      'Bienheureux Frédéric Ozonaman, Fondateur de la Société de Saint-Vincent-de-Paul († 1853)',
    genevieve_of_paris_virgin: 'Sainte Geneviève, Vierge (✝ 500)',
    george_of_lydda_martyr: 'Saint Georges, Martyr (✝ 303)',
    george_of_lydda_martyr_patron_of_england:
      'Saint Georges, Martyr et Patron de l’Angleterre (✝ 303)',
    germain_of_paris_bishop: 'Saint Germain, Évêque de Paris († 576)',
    gertrude_of_nivelles_abbess: 'Sainte Gertrude de Nivelles, Abbesse (✝ 659)',
    gertrude_the_great_virgin: 'Sainte Gertrude, Vierge Moniale (✝ 1301)',
    gregory_i_the_great_pope: 'Saint Grégoire le Grand, Pape et Docteur de l’Église (✝ 604)',
    gregory_of_narek_abbot: 'Saint Grégoire de Narek, Abbé et Docteur de l’Église',
    gregory_vii_pope: 'Saint Grégoire VII, Pape (✝ 1085)',
    guardian_angels: 'Saints Anges gardiens',
    hedwig_of_silesia_religious: 'Sainte Edwige de Silésie, Veuve puis Religieuse (✝ 1243)',
    henry_ii_emperor: 'Saint Henri, Empereur Germanique (✝ 1024)',
    henry_of_finland_bishop: 'Saint Henri, Évêque et Martyr (✝ 1156)',
    hilary_of_poitiers_bishop: 'Saint Hilaire de Poitiers, Évêque et Docteur de l’Église (✝ 367)',
    holy_innocents_martyrs: 'Saints Innocents, Martyrs (Ier s.)',
    hubert_of_liege_bishop: 'Saint Hubert, Évêque (✝ 727)',
    ignatius_of_antioch_bishop:
      'Saint Ignace d’Antioche, Évêque et Martyr, Père et Docteur de l’Eglise (✝ 115)',
    ignatius_of_loyola_priest:
      'Saint Ignace de Loyola, Prêtre, Fondateur de la Compagnie de Jésus (✝ 1556)',
    innocent_v_pope: 'Bienheureux Innocent V, Pape († 1276)',
    irenaeus_of_lyon_bishop: 'Saint Irénée, Évêque et Martyr (✝ v. 201)',
    isabelle_of_france_virgin:
      'Bienheureuse Isabelle de France, Sœur de saint Louis, Vierge († 1270)',
    isidore_of_seville_bishop:
      'Saint Isidore de Séville, Docteur de l’Eglise, Évêque et Confesseur (✝ 636)',
    ivo_of_kermartin_priest: 'Saint Yves Hélory, Prêtre et Juge en Bretagne (✝ 1303)',
    james_apostle: 'Saint Jacques le Majeur, Apôtre (✝ 44)',
    jane_frances_de_chantal_religious: 'Sainte Jeanne-Françoise de Chantal, Religieuse (✝ 1641)',
    januarius_i_of_benevento_bishop: 'Saint Janvier, Évêque de Bénévent et Martyr (✝ 305)',
    jerome_emiliani: 'Saint Jérôme Émilien, Fondateur (✝ 1537)',
    jerome_of_stridon_priest: 'Saint Jérôme, Père et Docteur de l’Église (✝ 420)',
    joachim_and_anne_parents_of_mary:
      'Saints Anne et Joachim, Mère et Père de la Vierge Marie (Ier siècle)',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'Saints Anne, Patronne de la province civile de Québec, et Joachim, Parents de la Vierge Marie (Ier siècle)',
    joan_of_arc_virgin_copatroness_of_france:
      'Sainte Jeanne d’Arc, Vierge, Co-Patronne de la France (✝ 1431)',
    john_apostle: 'Saint Jean, Apôtre et Évangéliste',
    john_baptist_de_la_salle_priest:
      'Saint Jean-Baptiste de La Salle, Prêtre et Fondateur des Frères des Écoles Chrétiennes (✝ 1719)',
    john_berchmans_religious: 'Saint Jean Berchmans, Jésuite Belge (✝ 1621)',
    john_bosco_priest: 'Saint Jean Bosco, Prêtre, Fondateur et Éducateur (✝ 1888)',
    john_chrysostom_bishop:
      'Saint Jean Chrysostome, Évêque de Constantinople et Docteur de l’Église (✝ 407)',
    john_damascene_priest: 'Saint Jean Damascène, Prêtre et Docteur de l’Église (✝ 749)',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Saints Jean de Brébeuf, Isaac Jogues, Prêtres Jésuites, et leurs compagnons, Martyrs (XVIIème siècle)',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada:
      'Saints Jean de Brébeuf, Isaac Jogues, Prêtres Jésuites, et leurs compagnons, Martyrs, Co-Patrons du Canada (XVIIème siècle)',
    john_eudes_priest: 'Saint Jean Eudes, Prêtre (✝ 1680)',
    john_fisher_bishop_and_thomas_more_martyrs:
      'Saints Jean Fisher, Évêque, et Thomas More, Martyrs (✝ 1535)',
    john_i_pope: 'Saint Jean Ier, Pape et Martyr (✝ 526)',
    john_leonardi_priest: 'Saint Jean Léonardi, Prêtre (✝ 1609)',
    john_mary_vianney_priest: 'Saint Jean-Marie Vianney (Curé d’Ars), Prêtre (✝ 1859)',
    john_of_capistrano_priest: 'Saint Jean de Capistran, Prêtre de l’Ordre des Mineurs (✝ 1456)',
    john_of_god_duarte_cidade_religious:
      'Saint Jean de Dieu, Religieux, Fondateur des Frères de la Charité (✝ 1550)',
    john_of_kanty_priest: 'Saint Jean de Kenty, Prêtre (✝ 1473)',
    john_of_the_cross_priest: 'Saint Jean de la Croix, Prêtre et Docteur de l’Église (✝ 1591)',
    john_paul_ii_pope: 'Saint Jean-Paul II, Pape (✝ 2005)',
    john_xxiii_pope: 'Saint Jean XXIII, Pape (✝ 1963)',
    josaphat_kuntsevych_bishop: 'Saint Josaphat Kuntsevych, Évêque Basilien et Martyr (✝ 1623)',
    joseph_of_calasanz_priest: 'Saint Joseph de Calasanz, Prêtre (✝ 1648)',
    joseph_spouse_of_mary_patron_of_canada:
      'Saint Joseph, Époux de la Bienheureuse Vierge Marie, Patron du Canada',
    joseph_the_worker: 'Saint Joseph, Artisan (Ier s.)',
    josephine_bakhita_virgin: 'Sainte Joséphine Bakhita, Vierge et Religieuse (✝ 1947)',
    juan_diego_cuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin (✝ 1548)',
    juliana_of_liege_virgin: 'Sainte Julienne de Cornillon, Religieuse Augustine (✝ 1258)',
    julie_billiart_virgin:
      'Sainte Julie Billiart, Religieuse, Fondatrice de l’Institut des Sœurs de Notre-Dame (✝ 1816)',
    justin_martyr: 'Saint Justin, Martyr (✝ 165)',
    kateri_tekakwitha_virgin: 'Sainte Kateri Tekakwitha, Vierge Amérindienne (✝ 1680)',
    lambert_of_maastricht_bishop: 'Saint Lambert, Évêque et Martyr (✝ 705)',
    landry_of_paris_bishop: 'Saint Landry, Évêque de Paris au 7e siècle',
    lawrence_of_brindisi_priest:
      'Saint Laurent de Brindisi, Prêtre et Docteur de l’Église (✝ 1619)',
    lawrence_of_rome_deacon: 'Saint Laurent de Rome, Diacre et Martyr (✝ 258)',
    lawrence_ruiz_and_companions_martyrs:
      'Saints Laurent Ruiz et 15 compagnons, Martyrs à Nagasaki au Japon (✝ v. 1635)',
    leo_i_the_great_pope: 'Saint Léon le Grand, Pape et Docteur de l’Église',
    louis_grignion_de_montfort_priest: 'Saint Louis-Marie Grignion de Montfort, Prêtre (✝ 1716)',
    louis_ix_of_france: 'Saint Louis, Roi de France (✝ 1270)',
    louis_zephirin_moreau_bishop: 'Bienheureux Louis Zéphyrin Moreau, Évêque (✝ 1901)',
    louise_of_marillac: 'Sainte Louise de Marillac, Religieuse (✝ 1660)',
    lucy_of_syracuse_virgin: 'Sainte Lucie de Syracuse, Vierge et Martyre en Sicile (✝ v. 305)',
    luke_evangelist: 'Saint Luc, Évangéliste',
    madeleine_sophie_barat_virgin: 'Sainte Madeleine Sophie Barat, Vierge († 1865)',
    marcel_of_paris_bishop: 'Saint Marcel, Évêque de Paris († vers 430)',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs:
      'Saints Martyrs Marcellin, Prêtre, et Pierre, Exorciste (✝ 304)',
    margaret_mary_alacoque_virgin:
      'Sainte Marguerite-Marie Alacoque, Visitandine à Paray-le-Monial (✝ 1690)',
    margaret_of_scotland: 'Sainte Marguerite d’Ecosse (✝ 1093)',
    marguerite_bourgeoys_virgin:
      'Sainte Marguerite Bourgeoys, Religieuse, Fondatrice de la congrégation des Sœurs de Notre-Dame (✝ 1700)',
    marguerite_dyouville_religious:
      'Sainte Marguerite d’Youville, Religieuse, Fondatrice des Sœurs de la Charité de Montréal (✝ 1771)',
    maria_goretti_virgin: 'Sainte Maria Goretti, Vierge et Martyre (✝ 1902)',
    marie_anne_blondin_virgin:
      'Bienheureuse Marie-Anne Blondin, Religieuse, Fondatrice des Sœurs de Sainte-Anne (✝ 1890)',
    marie_de_la_providence_virgin:
      'Bienheureuse Marie de la Providence (Eugénie Smet), Vierge, Fondatrice de la congrégration des Auxilliatrices († 1871 à Paris)',
    marie_de_incarnation_religious:
      'Bienheureuse Marie de l‘Incarnation, Carmélite à Pontoise († 1618)',
    marie_eugenie_milleret_virgin:
      'Sainte Marie-Eugénie Milleret, Vierge, Fondatrice des Sœurs de l’Assomption († 1898 à Paris)',
    marie_leonie_paradis_virgin:
      'Bienheureuse Marie-Léonie Paradis, Religieuse, Fondatrice de la Congrégation des Petites Sœurs de la Sainte Famille (✝ 1912)',
    marie_of_the_incarnation_guyart_religious:
      'Sainte Marie de l’Incarnation Guyart, Ursuline au Canada (✝ 1672)',
    marie_rose_durocher_virgin:
      'Bienheureuse Marie-Rose Durocher, Religieuse, Fondatrice des Sœurs des Saints Noms de Jésus et de Marie (✝ 1849)',
    marie_therese_de_soubiran_virgin: 'Bienheureuse Marie-Thérèse de Soubiran, Vierge († 1889)',
    mark_evangelist: 'Saint Marc, Évangéliste',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'Saints Marthe, Marie et Lazare, Disciples du Christ (Ier s.)',
    martin_de_porres_religious: 'Saint Martin de Porrès, Religieux Dominicain à Lima (✝ 1639)',
    martin_i_pope: 'Saint Martin Ier, Pape et Martyr (✝ 656)',
    martin_of_tours_bishop: 'Saint Martin de Tours, Évêque (✝ 397)',
    mary_magdalene: 'Sainte Marie-Madeleine, Disciple du Christ (Ier s.)',
    mary_magdalene_de_pazzi_virgin:
      'Sainte Marie-Madeleine de Pazzi, Vierge de l’Ordre du Carmel (✝ 1607)',
    mary_refuge_of_sinner: 'Sainte Marie, Refuge des pécheurs',
    matthew_apostle: 'Saint Matthieu, Apôtre et Évangéliste',
    matthias_apostle: 'Saint Matthias, Apôtre',
    maximilian_kolbe_priest: 'Saint Maximilien-Marie Kolbe, Prêtre et Martyr (✝ 1941)',
    michael_gabriel_and_raphael_archangels: 'Saints Michel, Gabriel and Raphaël, Archanges',
    monica_of_hippo: 'Sainte Monique, Mère de Saint Augustin d’Hippone (✝ 387)',
    most_holy_name_of_jesus: 'Saint Nom de Jésus',
    most_holy_name_of_mary: 'Le Saint Nom de Marie',
    mutien_marie_wiaux_religious: 'Saint Mutien-Marie Wiaux, Frère des Écoles Chrétiennes (✝ 1917)',
    nativity_of_mary: 'Nativité de la Vierge Marie',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs:
      'Saints Nérée et Achillée, Martyrs à Rome (✝ v. 304)',
    nicholas_of_myra_bishop: 'Saint Nicolas, Évêque de Myre (✝ v. 350)',
    nicholas_barre: 'Bienheureux. Nicolas Barré, Prêtre († 1686 à Paris)',
    norbert_of_xanten_bishop: 'Saint Norbert, Évêque (✝ 1134)',
    nykyta_budka_and_vasyl_velychkovsky_bishops:
      'Bienheureux Nicétas Budka (✝ 1949) et Vasyl Velychkowsky (✝ 1973), Évêques et Martyrs',
    our_lady_mediatrix_of_all_grace: 'Marie, Médiatrice de toute grâce',
    our_lady_of_fatima: 'Notre-Dame de Fatima',
    our_lady_of_good_counsel: 'Notre-Dame du Bon Conseil',
    our_lady_of_guadalupe: 'Notre-Dame de Guadalupé',
    our_lady_of_guadalupe_patroness_of_the_americas:
      'Notre-Dame de Guadalupé, Patronne des Amériques',
    our_lady_of_lourdes: 'Notre-Dame de Lourdes',
    our_lady_of_mount_carmel: 'Notre-Dame du Mont-Carmel',
    our_lady_of_sorrows: 'Notre-Dame des Douleurs',
    our_lady_of_sorrows_patroness_of_slovakia: 'Notre-Dame des Douleurs, Patronne de la Slovaquie',
    our_lady_of_the_miraculous_medal: 'Notre-Dame de la Médaille miraculeuse',
    our_lady_of_the_rosary: 'Notre-Dame du Rosaire',
    pancras_of_rome_martyr: 'Saint Pancrace, Martyr à Rome (✝ v. 304)',
    passion_of_saint_john_the_baptist: 'Martyre de Saint Jean-Baptiste',
    patrick_of_ireland_bishop: 'Saint Patrick, Évêque (✝ 461)',
    patrick_of_ireland_bishop_patron_of_ireland:
      'Saint Patrick, Évêque, Patron de l’Irlande (✝ 461)',
    paul_miki_and_companions_martyrs:
      'Saints Paul Miki et ses compagnons, Martyrs au Japon (✝ 1597)',
    paul_of_the_cross_priest: 'Saint Paul de la Croix, Prêtre (✝ 1776)',
    paulinus_of_nola_bishop: 'Saint Paulin, Évêque (✝ 431)',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs:
      'Saintes Perpétue et Félicité, Martyres à Carthage (✝ 203)',
    peter_canisius_priest: 'Saint Pierre Canisius, Prêtre et Docteur de l’Église (✝ 1597)',
    peter_chanel_priest: 'Saint Pierre Chanel, Prêtre et Martyr (✝ 1841)',
    peter_chrysologus_bishop:
      'Saint Pierre Chrysologue, Évêque de Ravenne et Docteur de l’Église (✝ 451)',
    peter_claver_priest: 'Saint Pierre Claver, Prêtre Jésuite (✝ 1654)',
    peter_damian_bishop: 'Saint Pierre Damien, Évêque d’Ostie, Docteur de l’Église (✝ 1072)',
    peter_julian_eymard_priest:
      'Saint Pierre-Julien Eymard, Prêtre, Fondateur des Pères du Saint-Sacrement (✝ 1868)',
    philip_and_james_apostles: 'Saint Philippe et Saint Jacques le Mineur, Apôtres',
    philip_neri_priest: 'Saint Philippe Néri, Prêtre (✝ 1595)',
    pius_of_pietrelcina_priest: 'Saint Pio de Pietrelcina (Padre Pio), Prêtre Capucin (✝ 1968)',
    pius_v_pope: 'Saint Pie V, Pape (✝ 1572)',
    pius_x_pope: 'Saint Pie X, Pape (✝ 1914)',
    polycarp_of_smyrna_bishop: 'Saint Polycarpe, Évêque et Martyre (✝ 167)',
    pontian_i_pope_and_hippolytus_of_rome_priest:
      'Saints Pontien, Pape, et Hippolyte, Prêtre de Rome, Martyrs (✝ 235)',
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs:
      'Saint Pothin, Évêque, Sainte Blandine, Vierge, et leurs 46 compagnons, Martyrs à Lyon (✝ 177)',
    presentation_of_mary: 'Présentation de la Vierge Marie',
    queenship_of_mary: 'Vierge Marie Reine',
    raymond_of_penyafort_priest: 'Saint Raymond de Peñafort, Prêtre (✝ 1275)',
    remigius_of_reims_bishop: 'Saint Remi, Évêque de Reims (✝ 530)',
    rita_of_cascia_religious: 'Sainte Rita da Cascia, Veuve puis Religieuse (✝ 1456)',
    robert_bellarmine_bishop:
      'Saint Robert Bellarmin, Jésuite, Évêque et Docteur de l’Eglise (✝ 1621)',
    romuald_of_ravenna_abbot: 'Saint Romuald, Anachorète et Père des moines Camaldules (✝ 1027)',
    rosalie_rendu_virgin: 'Bienheureuse Rosalie Rendu, Vierge († 1856)',
    rose_of_lima_virgin: 'Sainte Rose de Lima, Vierge (✝ 1617)',
    scholastica_of_nursia_virgin: 'Sainte Scholastique, Moniale, Sœur de Saint Benoît (✝ 543)',
    sebastian_of_milan_martyr: 'Saint Sébastien, Martyr (✝ v. 284)',
    seven_holy_founders_of_the_servite_order:
      'Saint Alexis Falconieri et les fondateurs des Servites (✝ 1310)',
    sharbel_makhluf_priest: 'Saint Charbel Makhlouf, Moine Prêtre Maronite (✝ 1898)',
    simon_and_jude_apostles: 'Saint Simon (le Zélote) et Saint Jude (Thaddée), Apôtres',
    sixtus_ii_pope_and_companions_martyrs: 'Saint Sixte II, Pape, et ses Diacres, Martyrs (✝ 258)',
    stanislaus_of_szczepanow_bishop: 'Saint Stanislas, Évêque de Cracovie, Martyr (✝ 1079)',
    stanislaus_of_szczepanow_bishop_patron_of_poland:
      'Saint Stanislas, Évêque de Cracovie, Martyr et Patron de la Pologne (✝ 1079)',
    stephen_i_of_hungary: 'Saint Étienne, Roi de Hongrie (✝ 1038)',
    stephen_the_first_martyr: 'Saint Étienne, Diacre et Premier Martyr (✝ 35)',
    sylvester_i_pope: 'Saint Sylvestre Ier, Pape (✝ 335)',
    teresa_benedicta_of_the_cross_stein_virgin:
      'Sainte Thérèse-Bénédicte de la Croix (Edith Stein), Carmélite, Martyr en Pologne (✝ 1942)',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Sainte Thérèse-Bénédicte de la Croix (Edith Stein), Carmélite, Martyr en Pologne, Co-Patronne de l’Europe (✝ 1942)',
    teresa_of_jesus_of_avila_virgin:
      'Sainte Thérèse de Jésus (d’Avila), Vierge et Docteur de l’Église (✝ 1582)',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Sainte Thérèse de l’Enfant-Jésus, Vierge et Docteur de l’Église (✝ 1897)',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'Sainte Thérèse de l’Enfant-Jésus, Vierge, Docteur de l’Église, Co-Patronne de la France (✝ 1897)',
    thomas_apostle: 'Saint Thomas, Apôtre',
    thomas_aquinas_priest: 'Saint Thomas d’Aquin, Frère prêcheur, Docteur de l’Eglise (✝ 1274)',
    thomas_becket_bishop: 'Saint Thomas Becket, Évêque et Martyr (✝ 1170)',
    timothy_of_ephesus_and_titus_of_crete_bishops:
      'Saints Timothée et Tite, Évêques, Disciples et compagnons de Saint Paul (Ier s.)',
    turibius_of_mogrovejo_bishop: 'Saint Alphonse Turibe de Mogrovejo, Évêque de Lima (✝ 1606)',
    vincent_de_paul_priest:
      'Saint Vincent de Paul, Prêtre, Fondateur de la congrégation de la Mission et des Filles de la Charité (✝ 1660)',
    vincent_ferrer_priest: 'Saint Vincent Ferrier, Prêtre de l’Ordre des Prêcheurs (✝ 1419)',
    vincent_of_saragossa_deacon: 'Saint Vincent, Diacre et Martyr (✝ 304)',
    visitation_of_mary: 'Visitation de la Vierge Marie',
    wenceslaus_i_of_bohemia_martyr: 'Saint Venceslas, Martyr (✝ 929)',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'Saint Venceslas, Martyr et Patron de la nation tchèque (✝ 929)',
  },
};
