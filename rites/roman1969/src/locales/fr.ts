import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'fr',

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
    solemnity: 'solennité',
    sunday: 'dimanche',
    feast: 'fête',
    memorial: 'mémoire',
    optional_memorial: 'mémoire facultative',
    weekday: 'férie',
  },

  cycles: {
    proper_of_time: 'Propre du Temps',
    proper_of_saints: 'Propre des Saints',
    sunday_year_a: 'Année A',
    sunday_year_b: 'Année B',
    sunday_year_c: 'Année C',
    weekday_year_1: 'Année impaire',
    weekday_year_2: 'Année paire',
    psalter_week_1: 'Semaine I des Psaumes',
    psalter_week_2: 'Semaine II des Psaumes',
    psalter_week_3: 'Semaine III des Psaumes',
    psalter_week_4: 'Semaine IV des Psaumes',
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

  names: {
    achard_of_saint_victor_bishop: 'Bienheureux Achard, évêque d’Avranches († 1171)', // src: mr_fr_1982_ed2_coutances
    adalbert_of_prague_bishop: 'Saint Adalbert, évêque de Prague et martyr († 997)',
    adalbert_of_prague_bishop_patron_of_poland:
      'Saint Adalbert, évêque de Prague, martyr et patron de la Pologne († 997)',
    adelaide_of_burgundy_empress: 'Sainte Adélaîde, impératrice († 999)',
    adeline_de_mortain_abbess_and_the_saints_of_savigny:
      'Sainte Adeline de Mortain († v. 1125) et les saints de Savigny', // src: mr_fr_1982_ed2_coutances
    adelphus_of_metz_bishop: 'Saint Adelphe, évêque († Vème s.)',
    agatha_of_sicily_virgin: 'Sainte Agathe, vierge et martyre en Sicile († 251)',
    agnes_of_rome_virgin: 'Sainte Agnès, vierge et martyre († v. 304)',
    albert_the_great_bishop:
      'Saint Albert le Grand, frère prêcheur, évêque de Ratisbonne, docteur de l’Église († 1280)',
    all_holy_bishops_of_the_archdiocese_of_lyon: 'Tous les Saints Évêques du diocèse de Lyon',
    all_holy_bishops_and_priests_of_the_diocese_of_coutances:
      'Tous les Saints Évêques du diocèse de Coutances et Avranches, et les prêtres, leurs coopérateurs', // src: mr_fr_1982_ed2_coutances
    all_saints: 'Tous les Saints',
    all_saints_of_the_archdiocese_of_lyon: 'Tous les Saints du diocèse de Lyon', // src: mr_fr_2014_ed2_lyon
    all_saints_of_the_archdiocese_of_paris: 'Tous les Saints du diocèse de Paris',
    all_saints_of_the_diocese_of_coutances: 'Tous les Saints du diocèse de Coutances et Avranches', // src: mr_fr_1982_ed2_coutances
    all_saints_of_the_diocese_of_saint_denis: 'Tous les Saints du diocèse de Saint-Denis',
    aloysius_gonzaga_religious: 'Saint Louis de Gonzague, religieux Jésuite († 1591)',
    alphonsus_mary_liguori_bishop: 'Saint Alphonse-Marie de Liguori, évêque et docteur de l’Église',
    amand_of_maastricht_bishop: 'Saint Amand d’Elnone, Missionnaire, évêque de Maastricht († v. 676)',
    amandus_of_strasbourg_bishop: 'Saint Amand, premier évêque de Strasbourg († v. 346)',
    amarin_of_alsace_abbot: 'Saint Amarin, abbé et martyr († 674 ou 676)',
    ambrose_of_milan_bishop: 'Saint Ambroise, évêque de Milan et docteur de l’Église († 397)',
    andre_bessette_religious: 'Saint frère André Bessette, religieux († 1937)',
    andre_grasset_priest: 'Bienheureux André Grasset, prêtre, canadien martyr de la révolution française († 1792)',
    andrew_apostle: 'Saint André, apôtre',
    andrew_apostle_patron_of_scotland: 'Saint André, apôtre et patron de l’Écosse',
    andrew_bauer_martyr: 'Saint André Bauer, martyr († 1900)',
    andrew_dung_lac_priest_and_companions_martyrs:
      'Saint André Dung Lac, prêtre, et ses compagnons, martyrs († entre 1745 et 1862)',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Saint André Kim Taegon, prêtre, et Paul Chong Ha-sang et ses compagnons, martyrs en Corée († XIXème s.)',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits:
      'Saints André Svorad († 1009) et Benoît Stojislav († 1012), ermites',
    angela_merici_virgin:
      'Sainte Angèle Mérici, religieuse, fondatrice de la Compagnie de Sainte Ursule de Brescia († 1540)',
    annemund_of_lyon_bishop: 'Saint Ennemond (Chamond), évêque et martyr († v. 658)', // src: mr_fr_2014_ed2_lyon
    annunciation_of_the_lord: 'Annonciation du Seigneur',
    anselm_of_canterbury_bishop: 'Saint Anselme de Cantorbéry, évêque, docteur de l’Église († 1109)',
    ansgar_of_hamburg_bishop: 'Saint Anschaire de Brême, évêque († 865)',
    anthony_chevrier_priest: 'Bienheureux Antoine Chevrier, prêtre († 1879)', // src: mr_fr_2014_ed2_lyon
    anthony_mary_claret_bishop: 'Saint Antoine-Marie Claret, évêque († 1870)',
    anthony_of_egypt_abbot: 'Saint Antoine le Grand, ermite en Égypte († 356)',
    anthony_of_padua_priest: 'Saint Antoine, prêtre et docteur de l’Église († 1231)',
    anthony_zaccaria_priest: 'Saint Antoine-Marie Zaccaria, prêtre († 1539)',
    apollinaris_of_ravenna_bishop: 'Saint Apollinaire, évêque et martyr († IIème s.)',
    arbogast_of_strasbourg_bishop: 'Saint Arbogast, évêque († 678)',
    arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg:
      'Saint Arbogast, évêque, patron du diocèse de Strasbourg († 678)',
    ascension_of_the_lord: 'Ascension du Seigneur',
    ash_wednesday: 'Mercredi des Cendres',
    assumption_of_the_blessed_virgin_mary: 'Assomption de la bienheureuse Vierge Marie',
    assumption_of_the_blessed_virgin_mary_patroness_of_france:
      'Assomption de la bienheureuse Vierge Marie, patronne principale de la France',
    athanasius_of_alexandria_bishop: 'Saint Athanase, évêque, docteur et père de l’Église († 373)',
    aubert_of_avranches_bishop: 'Saint Aubert, évêque († 725)', // src: mr_fr_1982_ed2_coutances
    audoen_of_rouen_bishop: 'Saint Ouen, évêque',
    audomar_of_therouanne_bishop: 'Saint Omer, évêque († 670)', // src: mr_fr_1982_ed2_coutances
    augustine_of_canterbury_bishop: 'Saint Augustin, évêque de Cantorbéry en Angleterre († 604)',
    augustine_of_hippo_bishop: 'Saint Augustin, évêque d’Hippone, docteur de l’Église († 430)',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Saints Augustin Zhao Rong et ses compagnons, martyrs en Chine († entre 1648 et 1930)',
    augustus_chapdelaine_priest: 'Saint Auguste Chapdelaine, prêtre et martyr († 1856)', // src: mr_fr_1982_ed2_coutances
    aurelia_of_strasbourg_virgin: 'Sainte Aurélie, vierge († IVème s.)',
    baldomerus_of_lyon_religious: 'Saint Galmier, religieux († v. 630)', // src: mr_fr_2014_ed2_lyon
    baptism_of_the_lord: 'Baptême du Seigneur',
    barnabas_apostle: 'Saint Barnabé, apôtre',
    bartholomew_apostle: 'Saint Barthélemy, apôtre',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Saints Basile le Grand († 379) et Grégoire de Naziance († 390), évêques et docteurs de l’Église',
    bede_the_venerable_priest: 'Saint Bède le Vénérable, prêtre et docteur de l’Église († 735)',
    benedict_of_aniane_abbot: 'Saint Benoît d’Aniane, abbé († 820)',
    benedict_of_nursia_abbot:
      'Saint Benoît de Nursie, Patriarche des moines d’Occident, fondateur de l’ordre des Bénédictins († v. 547)',
    benedict_of_nursia_abbot_patron_of_europe:
      'Saint Benoît de Nursie, Patriarche des moines d’Occident, fondateur de l’ordre des Bénédictins et patron de l’Europe († v. 547)',
    bernadette_soubirous_virgin: 'Sainte Bernadette Soubirous, vierge († 1879)',
    bernard_of_clairvaux_abbot: 'Saint Bernard de Clairvaux, abbé, docteur de l’Église († 1153)',
    bernardine_of_siena_priest: 'Saint Bernardin de Sienne, prêtre († 1444)',
    blaise_of_sebaste_bishop: 'Saint Blaise de Sébaste, évêque et martyr († 316)',
    blessed_martyrs_of_paris: 'Bienheureux martyrs de Paris († du 2 au 6 septembre 1792)',
    bonaventure_of_bagnoregio_bishop: 'Saint Bonaventure, évêque d’Albano et docteur de l’Église († 1274)',
    boniface_of_mainz_bishop: 'Saint Boniface, évêque et martyr († 754)',
    bridget_of_sweden_religious:
      'Sainte Brigitte de Suède, veuve puis religieuse, fondatrice de l’ordre du Saint-Sauveur († 1373)',
    bridget_of_sweden_religious_copatroness_of_europe:
      'Sainte Brigitte de Suède, veuve puis religieuse, fondatrice de l’ordre du Saint-Sauveur, co-patronne de l’Europe († 1373)',
    brigid_of_kildare_virgin: 'Saint Brigide, abbesse († 523)',
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Saint Brigide, abbesse et co-patronne d’Irlande († 523)',
    bruno_of_cologne_priest: 'Saint Bruno, prêtre, fondateur des Chartreux († 1101)',
    caesarius_of_arles_bishop: 'Saint Césaire d’Arles, évêque († 542)',
    cajetan_of_thiene_priest: 'Saint Gaétan de Thienne, prêtre († 1547)',
    callistus_i_pope: 'Saint Calixte Ier, pape et martyr († 222)',
    camillus_de_lellis_priest: 'Saint Camille de Lellis, prêtre († 1614)',
    canada_day: 'Fête du Canada', // src: mr_fr_2021_ed3
    carmelites_of_compiegne_virgins_and_martyrs:
      'Bienheureuses Carmélites de Compiègne : Mère Thérèse et ses 15 compagnes, martyres († guillotinées en 1794)',
    casimir_of_poland: 'Saint Casimir († 1484)',
    catherine_of_alexandria_virgin: 'Sainte Catherine d’Alexandrie, vierge et martyre († IVème s.)',
    mary_catherine_of_saint_augustine_catherine_de_simon_de_longpre_virgin:
      'Bienheureuse Catherine de Saint-Augustin, vierge († 1668)', // src: mr_fr_2021_ed3, mr_fr_1982_ed2_coutances
    catherine_of_siena_virgin: 'Sainte Catherine de Sienne, vierge et docteur de l’Église († 1380)',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Sainte Catherine de Sienne, vierge, docteur de l’Église, co-patronne de l’Europe († 1380)',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Sainte Catherine de Sienne, vierge, docteur de l’Église, co-patronne de l’Italie et de l’Europe († 1380)',
    catherine_zoe_laboure_virgin: 'Sainte Catherine Labouré, vierge († 1876)',
    cecilia_of_rome_virgin: 'Sainte Cécile, vierge et martyre à Rome († 230)',
    ceraunus_of_paris_bishop: 'Saint Céran, évêque de Paris († au 7e s.)',
    chair_of_saint_peter_the_apostle: 'Chaire de Saint Pierre, apôtre',
    charles_borromeo_bishop: 'Saint Charles Borromée, archevêque de Milan († 1584)',
    charles_lwanga_and_companions_martyrs: 'Saints Charles Lwanga et ses douze compagnons, martyrs († 618)',
    charles_of_jesus_de_foucauld: 'Saint Charles de Foucauld, prêtre, ermite et missionnaire au Sahara († 1916)',
    christopher_magallanes_priest_and_companions_martyrs:
      'Saints Cristóbal Magallanes, prêtre, et ses 24 compagnons, martyrs mexicains († 1927)',
    clair_of_normandy_priest: 'Saint Clair, prêtre et martyr († v. 884)', // src: mr_fr_1982_ed2_coutances
    clare_of_assisi_virgin: 'Sainte Claire, vierge',
    clement_i_pope: 'Saint Clément Ier, pape et martyr († 97)',
    clotilde_of_burgundy: 'Sainte Clotilde, reine des Francs († 545)',
    columba_of_iona_abbot: 'Saint Colomba, religieux († 615)',
    columba_of_iona_abbot_copatron_of_ireland: 'Saint Colomba, religieux, co-patron de l’Irlande († 615)',
    columban_of_luxeuil_abbot: 'Saint Colomban, abbé († 615)',
    commemoration_of_all_the_faithful_departed: 'Commémoration de tous les fidèles défunts',
    conversion_of_saint_paul_the_apostle: 'Conversion de Saint Paul, apôtre',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Saints martyrs Corneille, pape, et Cyprien, évêque († IIIème s.)',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Saints Côme et Damien, martyrs († IIIème s.)',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop:
      'Saints Cyrille, Moine, et Méthode, évêque, apôtres des Slaves († au IXème s.)',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe:
      'Saints Cyrille, Moine, et Méthode, évêque, apôtres des Slaves, co-patrons de l’Europe († au IXème s.)',
    cyril_of_alexandria_bishop: 'Saint Cyrille, évêque d’Alexandrie et docteur de l’Église († 444)', // src: mr_fr_2014_ed2_lyon
    cyril_of_jerusalem_bishop: 'Saint Cyrille de Jérusalem, évêque de Jérusalem, docteur de l’Église († 387)',
    damasus_i_pope: 'Saint Damase Ier, pape († 384)',
    damien_de_veuster_priest: 'Saint Père Damien, prêtre et Missionnaire Picpus († 1889)',
    daniel_brottier_priest: 'Bienheureux Daniel Brottier, prêtre, apôtre des Orphelins d’Auteuil († 1936 à Paris)',
    dedication_of_consecrated_churches:
      'Dédicace des églises consacrées dont on ne connaît pas la date de consécration', // src: mr_fr_2021_ed3
    dedication_of_the_basilica_of_saint_mary_major: 'Dédicace de la basilique Sainte-Marie Majeure',
    dedication_of_the_basilica_of_mont_saint_michel_france: 'Dédicace de la basilique du Mont-Saint-Michel', // src: mr_fr_1982_ed2_coutances
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Dédicace des basiliques de Saint Pierre et Saint Paul, apôtres, à Rome',
    dedication_of_the_cathedral_basilica_of_saint_denis_france: 'Dédicace de la cathédrale de Saint-Denis',
    dedication_of_the_cathedral_of_notre_dame_of_coutances_france: 'Dédicace de la cathédrale de Coutances', // src: mr_fr_1982_ed2_coutances
    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france: 'Dédicace de la cathédrale de Strasbourg',
    dedication_of_the_cathedral_of_saint_john_the_baptist_lyon_france: 'Dédicace de la cathédrale primatiale', // src: mr_fr_2014_ed2_lyon
    dedication_of_the_lateran_basilica: 'Dédicace de la Basilique du Latran',
    dedication_of_the_notre_dame_de_paris_cathedral_paris_france: 'Dédicace de la cathédrale de Paris',
    denis_of_paris_bishop_and_companions_martyrs:
      'Saint Denis, évêque, et ses compagnons, martyrs à Paris († IIIème s.)',
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris: 'Saint Denis, martyr, premier évêque, patron du diocèse',
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis:
      'Saint Denis, évêque et martyr, patron de la ville et du diocèse de Saint-Denis',
    dina_belanger_virgin: 'Bienheureuse Dina Bélanger, religieuse de la congrégation des Sœurs de Jésus-Marie († 1929)',
    dismas_the_good_thief: 'Saint Dismas (le Bon Larron)', // src: mr_fr_2014_ed2_lyon
    divine_mercy_sunday: 'Deuxième dimanche de Pâques ou de la Divine Miséricorde',
    dominic_de_guzman_priest: 'Saint Dominique de Guzman, prêtre, fondateur de l’Ordre des Frères prêcheurs († 1221)',
    easter_sunday: 'Dimanche de Pâques - La résurrection du Seigneur',
    eligius_of_noyon_bishop: 'Saint Éloi, évêque',
    elijah_prophet: 'Saint Élie, prophète († IXe s. av. J.-C.)',
    elizabeth_of_hungary_religious: 'Sainte Élisabeth de Hongrie († 1231)',
    elizabeth_of_portugal: 'Sainte Élisabeth du Portugal, reine († 1336)',
    emilie_tavernier_gamelin_religious:
      'Bienheureuse Émilie Tavernier-Gamelin, religieuse, fondatrice des Sœurs de la Providence de Montréal († 1851)',
    ephrem_the_syrian_deacon: 'Saint Ephrem, diacre et docteur de l’Église, († 373)',
    epiphany_of_the_lord: 'Épiphanie du Seigneur',
    epipodius_of_lyon_and_alexander_of_lyon_martyrs: 'Saints Épipode et Alexandre, martyrs († 178)', // src: mr_fr_2014_ed2_lyon
    eucharius_of_trier_bishop: 'Saint Euchaire, évêque († IVème s.)',
    eucherius_of_lyon_bishop: 'Saint Eucher, évêque († v. 449)', // src: mr_fr_2014_ed2_lyon
    eugene_de_mazenod_bishop:
      'Saint Eugène de Mazenod, fondateur des Oblats de Marie-Immaculée, évêque de Marseille († 1861)',
    eugenia_of_alsace_and_attala_of_alsace_virgins: 'Sainte Eugénie et Sainte Attale, vierges († VIIIème s.)',
    eusebius_of_vercelli_bishop: 'Saint Eusèbe de Verceil, évêque († 371)',
    exaltation_of_the_holy_cross: 'La Croix Glorieuse',
    fabian_i_pope: 'Saint Fabien, pape et martyr († 250)',
    faustina_kowalska_virgin: 'Sainte Faustina Kowalska († 1938)',
    fidelis_of_sigmaringen_priest: 'Saint Fidèle de Sigmaringen, prêtre et martyr († 1622)',
    first_martyrs_of_the_holy_roman_church: 'Premiers martyrs de l’Église de Rome († 64)',
    florentius_of_strasbourg_bishop: 'Saint Florent, évêque († VIIème s.)',
    floscellus_of_normandy_martyr: 'Saint Floscel, martyr († v. 296)', // src: mr_fr_1982_ed2_coutances
    frances_of_rome_religious: 'Sainte Françoise Romaine, religieuse († 1440)',
    francis_de_sales_bishop: 'Saint François de Sales, évêque et docteur de l’Église († 1622)',
    francis_de_sales_bishop_patron_of_the_clergy_of_the_archdiocese_of_lyon:
      'Saint François de Sales, évêque et docteur de l’Église, patron du clergé lyonnais († 1622)', // src: mr_fr_2014_ed2_lyon
    francis_of_assisi: 'Saint François d’Assise, fondateur de l’ordre des Frères mineurs († 1226)',
    francis_of_assisi_patron_of_italy:
      'Saint François d’Assise, fondateur de l’ordre des Frères mineurs, patron de l’Italie († 1226)',
    francis_of_paola_hermit: 'Saint François de Paule, ermite, fondateur de l’ordre des Minimes († 1507)',
    francis_xavier_priest: 'Saint François-Xavier, prêtre, Jésuite Missionnaire († 1552)',
    francois_de_montmorency_laval_bishop: 'Saint François de Laval, premier évêque de Québec († 1708)',
    frederic_janssoone_priest: 'Bienheureux Frédéric Janssoone, prêtre franciscain († 1916)',
    frederic_ozanam_founder: 'Bienheureux Frédéric Ozanam, fondateur de la Société de Saint-Vincent-de-Paul († 1853)',
    friday_of_the_passion_of_the_lord: 'Vendredi Saint',
    fridolin_of_sackingen_monk: 'Saint Fridolin, moine missionnaire († 540)',
    fromundus_of_coutances_bishop: 'Saint Fromond, évêque de Coutances († v. 691)', // src: mr_fr_1982_ed2_coutances
    gall_of_switzerland_abbot: 'Saint Gall, abbé et missionnaire († 641 ou 646)',
    gaud_of_evreux_bishop: 'Saint Gaud, évêque († v. 491)', // src: mr_fr_1982_ed2_coutances
    genevieve_of_paris_virgin: 'Sainte Geneviève, vierge († 500)',
    george_of_lydda_martyr: 'Saint Georges, martyr († 303)',
    george_of_lydda_martyr_patron_of_england: 'Saint Georges, martyr et patron de l’Angleterre († 303)',
    germain_of_paris_bishop: 'Saint Germain, évêque de Paris († 576)',
    germanus_of_normandy_bishop: 'Saint Germain de la Mer, évêque et martyr († 480)', // src: mr_fr_1982_ed2_coutances
    gertrude_of_nivelles_abbess: 'Sainte Gertrude de Nivelles, abbesse († 659)',
    gertrude_the_great_virgin: 'Sainte Gertrude, vierge moniale († 1301)',
    gregory_i_the_great_pope: 'Saint Grégoire le Grand, pape et docteur de l’Église († 604)',
    gregory_of_narek_abbot: 'Saint Grégoire de Narek, abbé et docteur de l’Église',
    gregory_vii_pope: 'Saint Grégoire VII, pape († 1085)',
    gregory_x_pope: 'Bienheureux Grégoire X, pape († 1276)', // src: mr_fr_2014_ed2_lyon
    hedwig_of_silesia_religious: 'Sainte Edwige de Silésie, veuve puis religieuse († 1243)',
    helier_of_jersey_martyr: 'Saint Hélier, martyr († v. 552)', // src: mr_fr_1982_ed2_coutances
    henry_ii_emperor: 'Saint Henri, empereur germanique († 1024)',
    henry_of_finland_bishop: 'Saint Henri, évêque et martyr († 1156)',
    hilary_of_poitiers_bishop: 'Saint Hilaire de Poitiers, évêque et docteur de l’Église († 367)',
    hildegard_of_bingen_abbess: 'Sainte Hildegarde de Bingen, abbesse et docteur de l’Église († 1179)',
    holy_family_of_jesus_mary_and_joseph: 'La Sainte Famille',
    holy_guardian_angels: 'Saints Anges gardiens',
    holy_innocents_martyrs: 'Saints Innocents, martyrs († Ier s.)',
    holy_saturday: 'Samedi Saint',
    holy_thursday: 'Jeudi Saint',
    hubert_of_liege_bishop: 'Saint Hubert, évêque († 727)',
    ignatius_of_antioch_bishop: 'Saint Ignace d’Antioche, évêque et martyr, père et docteur de l’Église († 115)',
    ignatius_of_loyola_priest: 'Saint Ignace de Loyola, prêtre, fondateur de la Compagnie de Jésus († 1556)',
    immaculate_conception_of_the_blessed_virgin_mary: 'Immaculée Conception de la vierge Marie',
    immaculate_heart_of_mary: 'Cœur immaculé de Marie',
    innocent_v_pope: 'Bienheureux Innocent V, pape († 1276)',
    irenaeus_of_lyon_bishop: 'Saint Irénée, évêque, martyr et docteur de l’Église († v. 201)',
    irenaeus_of_lyon_bishop_patron_of_the_archdiocese_of_lyon_and_companions_martyrs:
      'Saint Irénée, évêque et docteur de l’Église, patron principal du diocèse, et ses compagnons, martyrs († v. 201)', // src: mr_fr_2014_ed2_lyon
    isabelle_of_france_virgin: 'Bienheureuse Isabelle de France, sœur de saint Louis, vierge († 1270)',
    isidore_of_seville_bishop: 'Saint Isidore de Séville, docteur de l’Église, évêque et Confesseur († 636)',
    ivo_of_kermartin_priest: 'Saint Yves Hélory, prêtre et juge en Bretagne († 1303)',
    jacques_francois_lefranc_martyr_and_martyrs_of_the_revolution:
      'Bienheureux François Lefranc et les martyrs de la Révolution († 1792)', // src: mr_fr_1982_ed2_coutances
    jacques_jules_bonnaud_priest_and_companions_martyrs:
      'Bienheureux Jacques-Jules Bonnaud, prêtre, et ses compagnons, martyrs († 1792)', // src: mr_fr_2014_ed2_lyon
    james_apostle: 'Saint Jacques le Majeur, apôtre († 44)',
    jane_frances_de_chantal_religious: 'Sainte Jeanne-Françoise de Chantal, religieuse († 1641)',
    januarius_i_of_benevento_bishop: 'Saint Janvier, évêque de Bénévent et martyr († 305)',
    jean_louis_bonnard_priest: 'Saint Jean-Louis Bonnard, prêtre et martyr († 1841)', // src: mr_fr_2014_ed2_lyon
    jean_pierre_neel_priest: 'Saint Jean-Pierre Néel, prêtre et martyr († 1862)', // src: mr_fr_2014_ed2_lyon
    jerome_emiliani: 'Saint Jérôme Émilien, fondateur († 1537)',
    jerome_of_stridon_priest: 'Saint Jérôme, père et docteur de l’Église († 420)',
    joachim_and_anne_parents_of_mary: 'Saints Anne et Joachim, parents de la vierge Marie († Ier s.)',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'Saints Anne, patronne de la province civile de Québec, et Joachim, parents de la vierge Marie († Ier s.)',
    joan_of_arc_virgin_copatroness_of_france: 'Sainte Jeanne d’Arc, vierge, co-patronne de la France († 1431)',
    john_apostle: 'Saint Jean, apôtre et évangéliste',
    john_baptist_de_la_salle_priest:
      'Saint Jean-Baptiste de La Salle, prêtre et fondateur des Frères des Écoles Chrétiennes († 1719)',
    john_berchmans_religious: 'Saint Jean Berchmans, Jésuite Belge († 1621)',
    john_bosco_priest: 'Saint Jean Bosco, prêtre, fondateur et Éducateur († 1888)',
    john_chrysostom_bishop: 'Saint Jean Chrysostome, évêque de Constantinople et docteur de l’Église († 407)',
    john_damascene_priest: 'Saint Jean Damascène, prêtre et docteur de l’Église († 749)',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Saints Jean de Brébeuf, Isaac Jogues, prêtres Jésuites, et leurs compagnons, martyrs († XVIIème s.)',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada:
      'Saints Jean de Brébeuf, Isaac Jogues, prêtres Jésuites, et leurs compagnons, martyrs, co-patrons du Canada († XVIIème s.)',
    john_de_brebeuf_priest_and_companions_martyrs:
      'Saint Jean de Brébeuf, prêtre, et ses compagnons, martyrs († XVIIème s.)', // src: mr_fr_1982_ed2_coutances
    john_eudes_priest: 'Saint Jean Eudes, prêtre († 1680)',
    john_fisher_bishop_and_thomas_more_martyrs: 'Saints Jean Fisher, évêque, et Thomas More, martyrs († 1535)',
    john_francis_regis_priest: 'Saint Jean-François Régis, prêtre († 1640)', // src: mr_fr_2014_ed2_lyon
    john_i_pope: 'Saint Jean Ier, pape et martyr († 526)',
    john_leonardi_priest: 'Saint Jean Léonardi, prêtre († 1609)',
    john_mary_vianney_priest: 'Saint Jean-Marie Vianney, prêtre, curé d’Ars († 1859)',
    john_of_avila_priest: 'Saint Jean d’Avila, prêtre et docteur de l’Église († 1569)',
    john_of_capistrano_priest: 'Saint Jean de Capistran, prêtre de l’Ordre des Mineurs († 1456)',
    john_of_god_duarte_cidade_religious: 'Saint Jean de Dieu, religieux, fondateur des Frères de la Charité († 1550)',
    john_of_kanty_priest: 'Saint Jean de Kenty, prêtre († 1473)',
    john_of_the_cross_priest: 'Saint Jean de la Croix, prêtre et docteur de l’Église († 1591)',
    john_paul_ii_pope: 'Saint Jean-Paul II, pape († 2005)',
    john_xxiii_pope: 'Saint Jean XXIII, pape († 1963)',
    josaphat_kuntsevych_bishop: 'Saint Josaphat Kuntsevych, évêque Basilien et martyr († 1623)',
    joseph_of_calasanz_priest: 'Saint Joseph de Calasanz, prêtre († 1648)',
    joseph_spouse_of_mary: 'Saint Joseph, Époux de la vierge Marie',
    joseph_spouse_of_mary_patron_of_canada: 'Saint Joseph, Époux de la Bienheureuse vierge Marie, patron du Canada',
    joseph_the_worker: 'Saint Joseph, Artisan († Ier s.)',
    josephine_bakhita_virgin: 'Sainte Joséphine Bakhita, vierge et religieuse († 1947)',
    juan_diego_cuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin († 1548)',
    juliana_of_liege_virgin: 'Sainte Julienne de Cornillon, religieuse Augustine († 1258)',
    julie_billiart_virgin:
      'Sainte Julie Billiart, religieuse, fondatrice de l’Institut des Sœurs de Notre-Dame († 1816)',
    justin_martyr: 'Saint Justin, martyr († 165)',
    justus_of_lyon_bishop: 'Saint Just, évêque († v. 389)', // src: mr_fr_2014_ed2_lyon
    kateri_tekakwitha_virgin: 'Sainte Kateri Tekakwitha, vierge Amérindienne († 1680)',
    labor_day: 'Fête du travail', // src: mr_fr_2021_ed3
    lambert_of_maastricht_bishop: 'Saint Lambert, évêque et martyr († 705)',
    landry_of_paris_bishop: 'Saint Landry, évêque de Paris († au 7e s.)',
    laud_of_coutances_bishop: 'Saint Lô, évêque de Coutances († 566)', // src: mr_fr_1982_ed2_coutances
    laud_of_coutances_bishop_patron_of_the_diocese_of_coutances:
      'Saint Lô, évêque de Coutances, patron du diocèse († 566)', // src: mr_fr_1982_ed2_coutances
    lawrence_of_brindisi_priest: 'Saint Laurent de Brindisi, prêtre et docteur de l’Église († 1619)',
    lawrence_of_rome_deacon: 'Saint Laurent de Rome, diacre et martyr († 258)',
    lawrence_ruiz_and_companions_martyrs:
      'Saints Laurent Ruiz et ses compagnons, martyrs à Nagasaki au Japon († v. 1635)',
    leo_i_the_great_pope: 'Saint Léon le Grand, pape et docteur de l’Église',
    leo_ix_pope: 'Saint Léon IX, pape († 540)',
    leodegar_of_autun_bishop: 'Saint Léger, évêque et martyr († 679 ou 680)',
    leon_de_carentan_bishop: 'Saint Léon de Carentan, évêque et martyr († 890)', // src: mr_fr_1982_ed2_coutances
    louis_grignion_de_montfort_priest: 'Saint Louis-Marie Grignion de Montfort, prêtre († 1716)',
    louis_ix_of_france: 'Saint Louis, roi de France († 1270)',
    louis_zephirin_moreau_bishop: 'Bienheureux Louis Zéphyrin Moreau, évêque († 1901)',
    louise_de_marillac_religious: 'Sainte Louise de Marillac, religieuse († 1660)',
    lucy_of_syracuse_virgin: 'Sainte Lucie, vierge et martyre en Sicile († v. 305)',
    ludan_of_scotland_pilgrim: 'Saint Ludan, pèlerin († 1202)',
    luke_evangelist: 'Saint Luc, évangéliste',
    madeleine_sophie_barat_virgin: 'Sainte Madeleine Sophie Barat, vierge († 1865)',
    maglorius_of_dol_monk: 'Saint Magloire, moine († V-VIème s.)', // src: mr_fr_1982_ed2_coutances
    marcellin_champagnat_priest: 'Saint Marcellin Champagnat, prêtre († 1840)', // src: mr_fr_2014_ed2_lyon
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Saints Marcellin et Pierre, martyrs († 304)',
    marcellus_of_paris_bishop: 'Saint Marcel, évêque de Paris († vers 430)',
    marculf_of_normandy_abbot: 'Saint Marcouf, abbé († v. 558)', // src: mr_fr_1982_ed2_coutances
    margaret_mary_alacoque_virgin: 'Sainte Marguerite-Marie Alacoque, Visitandine à Paray-le-Monial († 1690)',
    margaret_of_scotland: 'Sainte Marguerite d’Ecosse († 1093)',
    marguerite_bourgeoys_virgin:
      'Sainte Marguerite Bourgeoys, religieuse, fondatrice de la congrégation des Sœurs de Notre-Dame († 1700)',
    marguerite_dyouville_religious:
      'Sainte Marguerite d’Youville, religieuse, fondatrice des Sœurs de la Charité de Montréal († 1771)',
    maria_goretti_virgin: 'Sainte Maria Goretti, vierge et martyre († 1902)',
    marie_anne_blondin_virgin:
      'Bienheureuse Marie-Anne Blondin, religieuse, fondatrice des Sœurs de Sainte-Anne († 1890)',
    marie_eugenie_of_jesus_milleret_de_brou_virgin:
      'Sainte Marie-Eugénie Milleret, vierge, fondatrice des Sœurs de l’Assomption († 1898 à Paris)',
    marie_leonie_paradis_virgin:
      'Bienheureuse Marie-Léonie Paradis, religieuse, fondatrice de la Congrégation des Petites Sœurs de la Sainte Famille († 1912)',
    marie_madeleine_julie_francoise_catherine_postel_virgin: 'Sainte Marie Madeleine Postel, vierge († 1846)', // src: mr_fr_1982_ed2_coutances
    marie_of_saint_ignatius_claudine_thevenet_religious: 'Sainte Claudine Thévenet, religieuse († 1837)', // src: mr_fr_2014_ed2_lyon
    marie_rose_durocher_virgin:
      'Bienheureuse Marie-Rose Durocher, religieuse, fondatrice des Sœurs des Saints Noms de Jésus et de Marie († 1849)',
    mark_evangelist: 'Saint Marc, évangéliste',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'Saints Marthe, Marie et Lazare, disciples du Christ († Ier s.)',
    marthe_aimee_adele_le_bouteiller_virgin: 'Bienheureuse Marthe Le Bouteiller, vierge († 1883)', // src: mr_fr_1982_ed2_coutances
    martin_de_porres_religious: 'Saint Martin de Porrès, religieux Dominicain à Lima († 1639)',
    martin_i_pope: 'Saint Martin Ier, pape et martyr († 656)',
    martin_of_tours_bishop: 'Saint Martin de Tours, évêque († 397)',
    mary_magdalene: 'Sainte Marie-Madeleine, disciple du Christ († Ier s.)',
    mary_magdalene_de_pazzi_virgin: 'Sainte Marie-Madeleine de Pazzi, vierge de l’Ordre du Carmel († 1607)',
    mary_mother_of_god: 'Sainte Marie, Mère de Dieu',
    mary_mother_of_the_church: 'Bienheureuse Vierge Marie, Mère de l’Église',
    mary_of_the_incarnation_barbara_acarie_religious:
      'Bienheureuse Marie de l’Incarnation, Carmélite à Pontoise († 1618)',
    mary_of_the_incarnation_marie_guyart_religious: 'Sainte Marie de l’Incarnation Guyart, Ursuline au Canada († 1672)',
    mary_of_the_providence_eugenie_smet_virgin:
      'Bienheureuse Marie de la Providence (Eugénie Smet), vierge, fondatrice de la congrégration des Auxilliatrices († 1871 à Paris)',
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin:
      'Bienheureuse Marie-Thérèse de Soubiran, vierge († 1889)',
    maternus_of_cologne_bishop: 'Saint Materne, évêque († IVème s.)',
    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops:
      'Les premiers Apôtres de l’Église en Alsace : Saints Materne, Valère et Euchaire',
    matthew_apostle: 'Saint Matthieu, apôtre et évangéliste',
    matthias_apostle: 'Saint Matthias, apôtre',
    maurice_of_agaunum_and_companions_martyrs: 'Saint Maurice et ses companions, martyrs († v. 287)', // src: mr_fr_2014_ed2_lyon
    maximilian_mary_raymund_kolbe_priest: 'Saint Maximilien-Marie Kolbe, prêtre et martyr († 1941)',
    mederic_of_autun_and_droctoveus_of_autun_abbots: 'Saint Merry et Saint Droctovée, Abbés',
    michael_gabriel_and_raphael_archangels: 'Saints Michel, Gabriel and Raphaël, archanges',
    modestus_andlauer_and_andrew_bauer_martyrs: 'Saints Modeste Andlauer et André Bauer, martyrs († 1900)',
    modestus_andlauer_martyr: 'Saint Modeste Andlauer, martyr († 1900)',
    monica_of_hippo: 'Sainte Monique, Mère de Saint Augustin d’Hippone († 387)',
    morand_of_cluny_monk: 'Saint Morand, moine († v. 1115)',
    most_holy_body_and_blood_of_christ: 'Le Saint-Sacrement du Corps et du Sang du Christ',
    most_holy_name_of_jesus: 'Saint Nom de Jésus',
    most_holy_name_of_mary: 'Le Saint Nom de Marie',
    most_holy_trinity: 'La Sainte Trinité',
    most_sacred_heart_of_jesus: 'Sacré-Cœur de Jésus',
    mutien_marie_wiaux_religious: 'Saint Mutien-Marie Wiaux, Frère des Écoles Chrétiennes († 1917)',
    nativity_of_john_the_baptist: 'Nativité de Saint Jean le Baptiste',
    nativity_of_the_blessed_virgin_mary: 'Nativité de la vierge Marie',
    nativity_of_the_lord: 'Nativité du Seigneur',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Saints Nérée et Achillée, martyrs à Rome († v. 304)',
    nicholas_barre_priest: 'Bienheureux. Nicolas Barré, prêtre († 1686 à Paris)',
    nicholas_of_myra_bishop: 'Saint Nicolas, évêque de Myre († v. 350)',
    nicetius_of_lyon_bishop: 'Saint Nizier, évêque († 573)', // src: mr_fr_2014_ed2_lyon
    norbert_of_xanten_bishop: 'Saint Norbert, évêque († 1134)',
    nykyta_budka_and_vasyl_velychkovsky_bishops:
      'Bienheureux Nicétas Budka († 1949) et Vasyl Velychkowsky († 1973), évêques et martyrs',
    odile_of_alsace_abbess: 'Sainte Odile, abbesse',
    odile_of_alsace_abbess_patroness_of_alsace: 'Sainte Odile, abbesse, patronne de l‘Alsace († v. 720)',
    ortaire_of_landelles_abbot: 'Saint Ortaire, abbé († 580)', // src: mr_fr_1982_ed2_coutances
    our_lady_mediatrix_of_all_grace: 'Marie, Médiatrice de toute grâce',
    our_lady_of_fatima: 'Notre-Dame de Fatima',
    our_lady_of_fourviere: 'Notre-Dame de Fourvière', // src: mr_fr_2014_ed2_lyon
    our_lady_of_good_counsel: 'Notre-Dame du Bon Conseil',
    our_lady_of_guadalupe: 'Notre-Dame de Guadalupé',
    our_lady_of_guadalupe_patroness_of_the_americas: 'Notre-Dame de Guadalupé, patronne des Amériques',
    our_lady_of_la_salette: 'Bienheureuse Vierge Marie de La Salette', // src: mr_fr_2021_ed3
    our_lady_of_loreto: 'Notre-Dame de Lorette',
    our_lady_of_lourdes: 'Notre-Dame de Lourdes',
    our_lady_of_mount_carmel: 'Notre-Dame du Mont-Carmel',
    our_lady_of_pontmain: 'Notre-Dame de Pontmain', // src: mr_fr_1982_ed2_coutances
    our_lady_of_sorrows: 'Notre-Dame des Douleurs',
    our_lady_of_sorrows_patroness_of_slovakia: 'Notre-Dame des Douleurs, patronne de la Slovaquie',
    our_lady_of_the_miraculous_medal: 'Notre-Dame de la Médaille miraculeuse',
    our_lady_of_the_rosary: 'Notre-Dame du Rosaire',
    our_lady_refuge_of_sinners: 'Sainte Marie, refuge des pécheurs',
    our_lord_jesus_christ_king_of_the_universe: 'Trente-quatrième et dernier dimanche - Le Christ, Roi de l’Univers',
    palm_sunday_of_the_passion_of_the_lord: 'Dimanche des Rameaux et de la Passion',
    pancras_of_rome_martyr: 'Saint Pancrace, martyr à Rome († v. 304)',
    passion_of_saint_john_the_baptist: 'martyre de Saint Jean-Baptiste',
    paternus_of_avranches_bishop_and_scubilion_abbot:
      'Saint Pair, évêque d’Avranches, et saint Scubillion, abbé († v. 565)', // src: mr_fr_1982_ed2_coutances
    patrick_of_ireland_bishop: 'Saint Patrick, évêque († 461)',
    patrick_of_ireland_bishop_patron_of_ireland: 'Saint Patrick, évêque, patron de l’Irlande († 461)',
    paul_miki_and_companions_martyrs: 'Saints Paul Miki et ses compagnons, martyrs au Japon († 1597)',
    paul_of_the_cross_priest: 'Saint Paul de la Croix, prêtre († 1776)',
    paul_vi_pope: 'Saint Paul VI, pape († 1978)',
    paulinus_of_nola_bishop: 'Saint Paulin, évêque († 431)',
    pentecost_sunday: 'Pentecôte',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Saintes Perpétue et Félicité, martyres à Carthage († 203)',
    peter_adrian_toulorge_priest: 'Bienheureux Pierre-Adrien Toulorge, prêtre et martyr († 1793)', // src: mr_fr_1982_ed2_coutances
    peter_and_paul_apostles: 'Saint Pierre et Saint Paul, apôtres',
    peter_canisius_priest: 'Saint Pierre Canisius, prêtre et docteur de l’Église († 1597)',
    peter_chanel_priest: 'Saint Pierre Chanel, prêtre et martyr († 1841)',
    peter_chrysologus_bishop: 'Saint Pierre Chrysologue, évêque de Ravenne et docteur de l’Église († 451)',
    peter_claver_priest: 'Saint Pierre Claver, prêtre Jésuite († 1654)',
    peter_damian_bishop: 'Saint Pierre Damien, évêque d’Ostie, docteur de l’Église († 1072)',
    peter_julian_eymard_priest: 'Saint Pierre-Julien Eymard, prêtre, fondateur des Pères du Saint-Sacrement († 1868)',
    philip_and_james_apostles: 'Saint Philippe et Saint Jacques le Mineur, apôtres',
    philip_neri_priest: 'Saint Philippe Néri, prêtre († 1595)',
    pirmin_of_hornbach_abbot: 'Saint Pirmin, abbé († 753)',
    pius_francesco_forgione_priest: 'Saint Pio de Pietrelcina (Padre Pio), prêtre Capucin († 1968)',
    pius_v_pope: 'Saint Pie V, pape († 1572)',
    pius_x_pope: 'Saint Pie X, pape († 1914)',
    placide_eulalie_victoire_jacqueline_viel_virgin: 'Bienheureuse Placide Viel, vierge († 1877)', // src: mr_fr_1982_ed2_coutances
    polycarp_of_smyrna_bishop: 'Saint Polycarpe, évêque et martyr († 167)',
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Saints Pontien, pape, et Hippolyte, prêtre de Rome, martyrs († 235)',
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs:
      'Saint Pothin, évêque, Sainte Blandine, vierge, et leurs compagnons, martyrs († 177)',
    pothinus_of_lyon_bishop_patron_the_city_of_lyon_blandina_of_lyon_virgin_and_companions_martyrs:
      'Saint Pothin, évêque, patron de la ville de Lyon, Sainte Blandine, vierge, et leurs compagnons, martyrs († 177)', // src: mr_fr_2014_ed2_lyon
    presentation_of_the_blessed_virgin_mary: 'Présentation de la vierge Marie',
    presentation_of_the_lord: 'Présentation du Seigneur au Temple',
    queenship_of_the_blessed_virgin_mary: 'Vierge Marie, reine',
    raymond_of_penyafort_priest: 'Saint Raymond de Peñafort, prêtre († 1275)',
    remigius_of_reims_bishop: 'Saint Remi, évêque de Reims († 530)',
    richardis_of_swabia_empress: 'Sainte Richarde, impératrice († 894 ou 896)',
    rita_of_cascia_religious: 'Sainte Rita da Cascia, veuve puis religieuse († 1456)',
    robert_bellarmine_bishop: 'Saint Robert Bellarmin, Jésuite, évêque et docteur de l’Église († 1621)',
    romuald_of_ravenna_abbot: 'Saint Romuald, anachorète et père des moines Camaldules († 1027)',
    rosalie_jeanne_marie_rendu_virgin: 'Bienheureuse Rosalie Rendu, vierge († 1856)',
    rose_of_lima_virgin: 'Sainte Rose de Lima, vierge († 1617)',
    rumpharius_of_coutances_bishop: 'Saint Romphaire, évêque de Coutance († VIème s.)', // src: mr_fr_1982_ed2_coutances
    scholastica_of_nursia_virgin: 'Sainte Scholastique, Moniale, sœur de Saint Benoît († 543)',
    sebastian_of_milan_martyr: 'Saint Sébastien, martyr († v. 284)',
    senerius_of_normandy_bishop: 'Saint Senier, évêque d’Avranches († v. 574)', // src: mr_fr_1982_ed2_coutances
    seven_holy_founders_of_the_servite_order: 'Saint Alexis Falconieri et les fondateurs des Servites († 1310)',
    severus_of_avranches_bishop: 'Saint Sever, évêque d’Avranches († 578)', // src: mr_fr_1982_ed2_coutances
    sharbel_makhluf_priest: 'Saint Charbel Makhlouf, moine prêtre Maronite († 1898)',
    simon_and_jude_apostles: 'Saint Simon (le Zélote) et Saint Jude (Thaddée), apôtres',
    sixtus_ii_pope_and_companions_martyrs: 'Saint Sixte II, pape, et ses diacres, martyrs († 258)',
    stanislaus_of_szczepanow_bishop: 'Saint Stanislas, évêque de Cracovie, martyr († 1079)',
    stanislaus_of_szczepanow_bishop_patron_of_poland:
      'Saint Stanislas, évêque de Cracovie, martyr et patron de la Pologne († 1079)',
    stephen_i_of_hungary: 'Saint Étienne, roi de Hongrie († 1038)',
    stephen_the_first_martyr: 'Saint Étienne, diacre et premier martyr († 35)',
    sunday_of_the_word_of_god: 'Troisième dimanche du Temps Ordinaire, ou Dimanche de la Parole de Dieu',
    sylvester_i_pope: 'Saint Sylvestre Ier, pape († 335)',
    teresa_benedicta_of_the_cross_stein_virgin:
      'Sainte Thérèse-Bénédicte de la Croix (Edith Stein), Carmélite, martyr en Pologne († 1942)',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Sainte Thérèse-Bénédicte de la Croix (Edith Stein), Carmélite, martyr en Pologne, co-patronne de l’Europe († 1942)',
    teresa_of_jesus_of_avila_virgin: 'Sainte Thérèse de Jésus (d’Avila), vierge et docteur de l’Église († 1582)',
    thanksgiving_day: 'Jour de l’action de grâce', // src: mr_fr_2021_ed3
    therese_marie_victoire_couderc_virgin: 'Sainte Thérèse Couderc, vierge († 1885)', // src: mr_fr_2014_ed2_lyon
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Sainte Thérèse de l’Enfant-Jésus, vierge et docteur de l’Église († 1897)',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'Sainte Thérèse de l’Enfant-Jésus, vierge, docteur de l’Église, co-patronne de la France († 1897)',
    thomas_apostle: 'Saint Thomas, apôtre',
    thomas_aquinas_priest: 'Saint Thomas d’Aquin, frère prêcheur, docteur de l’Église († 1274)',
    thomas_becket_bishop: 'Saint Thomas Becket, évêque et martyr († 1170)',
    thomas_jean_georges_rehm_priest: 'Bienheureux Jean-Georges Rehm, prêtre et martyr († 1794)',
    thomas_helye_priest: 'Bienheureux Thomas Hélye, prêtre († 1257)', // src: mr_fr_1982_ed2_coutances
    thursday_of_the_lords_supper: 'Mémoire de la Cène du Seigneur',
    timothy_of_ephesus_and_titus_of_crete_bishops:
      'Saints Timothée et Tite, évêques, disciples et compagnons de Saint Paul († Ier s.)',
    transfiguration_of_the_lord: 'Transfiguration du Seigneur',
    translation_of_the_relics_of_odile_of_alsace_abbess: 'Translation des Reliques de Sainte Odile',
    turibius_of_mogrovejo_bishop: 'Saint Alphonse Turibe de Mogrovejo, évêque de Lima († 1606)',
    ulrich_of_augsburg_bishop: 'Saint Ulrich, évêque († 973)',
    urban_i_pope: 'Saint Urbain Ier, pape († IIIème s.)',
    valerius_of_trier_bishop: 'Saint Valère, évêque († IVème s.)',
    viator_of_lyon: 'Saint Viateur († v. 389)', // src: mr_fr_2014_ed2_lyon
    vincent_de_paul_priest:
      'Saint Vincent de Paul, prêtre, fondateur de la congrégation de la Mission et des Filles de la Charité († 1660)',
    vincent_ferrer_priest: 'Saint Vincent Ferrier, prêtre de l’Ordre des Prêcheurs († 1419)',
    vincent_of_saragossa_deacon: 'Saint Vincent, diacre et martyr († 304)',
    visitation_of_mary: 'Visitation de la vierge Marie',
    vitalis_of_savigny_abbot: 'Saint Vital, abbé de Savigny († 1122)', // src: mr_fr_1982_ed2_coutances
    wenceslaus_i_of_bohemia_martyr: 'Saint Venceslas, martyr († 929)',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'Saint Venceslas, martyr et patron de la nation tchèque († 929)',
    wendelin_of_trier_hermit: 'Saint Wendelin, ermite',
    william_firmatus_abbot: 'Saint Guillaume Firmat, abbé († 1103)', // src: mr_fr_1982_ed2_coutances
  },
};
