import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'es',

  seasons: {
    advent: {
      season: 'Adviento',
      weekday: '$t(weekdays:{{dow}}, capitalize) de la {{week}}ª semana de Adviento',
      sunday: '{{week}}º domingo de Adviento',
      privileged_weekday: '{{day}} de $t(months:11)',
    },

    christmas_time: {
      season: 'Navidad',
      day: '$t(weekdays:{{dow}}, capitalize) de Navidad',
      octave: '{{count}}º día de la Octava de Navidad',
      second_sunday_after_christmas: '2º domingo de Navidad',
      before_epiphany: '{{day}} de $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}, capitalize) después de la Epifanía',
    },

    ordinary_time: {
      season: 'Tiempo Ordinario',
      weekday: '$t(weekdays:{{dow}}, capitalize) de la {{week}}ª semana del Tiempo Ordinario',
      sunday: '{{week}}º domingo del Tiempo Ordinario',
    },

    lent: {
      season: 'Cuaresma',
      weekday: '$t(weekdays:{{dow}}, capitalize) de la {{week}}ª semana de Cuaresma',
      sunday: '{{week}}º domingo de Cuaresma',
      day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) después de Miércoles de Ceniza',
      holy_week_day: '$t(weekdays:{{dow}}, capitalize) de Semana Santa',
    },

    paschal_triduum: {
      season: 'Triduo Pascual',
    },

    easter_time: {
      season: 'Pascua',
      weekday: '$t(weekdays:{{dow}}, capitalize) de la {{week}}ª semana de Pascua',
      sunday: '{{week}}º domingo de Pascua',
      octave: '$t(weekdays:{{dow}}, capitalize) día de la Octava de Pascua',
    },
  },

  periods: {
    epiphany: 'Epifanía',
    holy_week: 'Semana Santa',
  },

  ranks: {
    solemnity: 'solemnidades',
    sunday: 'Domingo',
    feast: 'fiesta',
    memorial: 'memoria',
    optional_memorial: 'memoria opcional',
    weekday: 'ferial',
  },

  colors: {
    black: 'negro', // src: GIRM, 346e (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
    gold: 'dorado', // src: GIRM, 346g (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
    green: 'verde', // src: GIRM, 346c (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
    purple: 'morado', // src: GIRM, 346d (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
    red: 'rojo', // src: GIRM, 346b (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
    rose: 'rosa', // src: GIRM, 346f (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htf)
    white: 'blanco', // src: GIRM, 346a (https://www.santaclaradeestella.es/BIBLIOTECA/ENCICLICAS/INSTRUCCI%C3%93N_GENERAL_DEL_MISAL_ROMANO.htm)
  },

  weekdays: {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
  },

  months: {
    0: 'enero',
    1: 'febrero',
    2: 'marzo',
    3: 'abril',
    4: 'mayo',
    5: 'junio',
    6: 'julio',
    7: 'agosto',
    8: 'septiembre',
    9: 'octubre',
    10: 'noviembre',
    11: 'diciembre',
  },

  ordinals: {
    '1': 'primero',
    '1_feminine': 'primera',
    '2': 'segundo',
    '2_feminine': 'segunda',
    '3': 'tercer',
    '3_feminine': 'tercera',
    '4': 'cuarto',
    '4_feminine': 'cuarta',
    '5': 'quinto',
    '5_feminine': 'quinta',
    '6': 'sexto',
    '6_feminine': 'sexta',
    '7': 'séptimo',
    '7_feminine': 'séptima',
    '8': 'octavo',
    '8_feminine': 'octava',
    '9': 'noveno',
    '9_feminine': 'novena',
    '10': 'décimo',
    '10_feminine': 'décima',
    '11': 'undécimo',
    '11_feminine': 'undécima',
    '12': 'duodécimo',
    '12_feminine': 'duodécima',
    '13': 'decimotercer',
    '13_feminine': 'decimotercera',
    '14': 'decimocuarto',
    '14_feminine': 'decimocuarta',
    '15': 'decimoquinto',
    '15_feminine': 'decimoquinta',
    '16': 'decimosexto',
    '16_feminine': 'decimosexta',
    '17': 'decimoséptimo',
    '17_feminine': 'decimoséptima',
    '18': 'decimoctavo',
    '18_feminine': 'decimoctava',
    '19': 'decimonoveno',
    '19_feminine': 'decimonovena',
    '20': 'vigésimo',
    '20_feminine': 'vigésima',
    '21': 'vigésimo primero',
    '21_feminine': 'vigésima primera',
    '22': 'vigésimo segundo',
    '22_feminine': 'vigésima segunda',
    '23': 'vigésimo tercer',
    '23_feminine': 'vigésima tercera',
    '24': 'vigésimo cuarto',
    '24_feminine': 'vigésima cuarta',
    '25': 'vigésimo quinto',
    '25_feminine': 'vigésima quinta',
    '26': 'vigésimo sexto',
    '26_feminine': 'vigésima sexta',
    '27': 'vigésimo séptimo',
    '27_feminine': 'vigésima séptima',
    '28': 'vigésimo octavo',
    '28_feminine': 'vigésima octava',
    '29': 'vigésimo noveno',
    '29_feminine': 'vigésima novena',
    '30': 'trigésimo',
    '30_feminine': 'trigésima',
    '31': 'trigésimo primero',
    '31_feminine': 'trigésima primera',
    '32': 'trigésimo segundo',
    '32_feminine': 'trigésima segunda',
    '33': 'trigésimo tercer',
    '33_feminine': 'trigésima tercera',
    '34': 'trigésima cuarto',
    '34_feminine': 'trigésima cuarta',
  },

  names: {
    '205_blessed_martyrs_of_japan': '205 Beatos y mártires de Japón',
    adalbert_of_prague_bishop: 'San Adalberto, obispo y mártir',
    adelaide_of_burgundy_empress: 'Santa Adelaida de Borgoña, Emperatriz',
    adelphus_of_metz_bishop: 'San Adelfus de Métis, obispo',
    agatha_of_sicily_virgin: 'Santa Águeda, virgen y mártir', // src: https://liturgiapapal.org/attachments/article/1093/PROPIO%20DE%20LOS%20SANTOS.pdf#page=4
    agnes_of_rome_virgin: 'Santa Inés, virgen y mártir', // src: https://liturgiapapal.org/attachments/article/1093/PROPIO%20DE%20LOS%20SANTOS.pdf#page=3
    alban_of_britain_martyr: 'San Albano, mártir',
    albert_the_great_bishop: 'San Alberto Magno, obispo y doctor de la Iglesia',
    alberto_hurtado_priest: 'San Alberto Hurtado, presbítero',
    all_saints: 'Todos los Santos',
    all_saints_of_ireland: 'Todos los Santos de Irlanda',
    all_saints_of_the_archdiocese_of_paris: 'Todos los Santos de la Arquidiócesis de París',
    all_saints_of_the_diocese_of_saint_denis: 'Todos los Santos de la Diócesis de Saint-Denis',
    all_saints_of_wales: 'Todos los santos de Gales',
    aloysius_gonzaga_religious: 'San Luis Gonzaga, religioso',
    alphonsus_mary_liguori_bishop: 'San Alfonso María de Ligorio, obispo y doctor de la Iglesia',
    amandus_of_strasbourg_bishop: 'San Amand de Estrasburgo, obispo',
    amarin_of_alsace_abbot: 'San Amarino, Abad y mártir',
    ambrose_of_milan_bishop: 'San Ambrosio, obispo y doctor de la Iglesia',
    andrew_apostle: 'San Andrés, apóstol',
    andrew_apostle_patron_of_scotland: 'San Andrés, apóstol y Patrono de Escocia',
    andrew_dung_lac_priest_and_companions_martyrs: 'Santos Andrés Dung-Lac, presbítero, y compañeros, mártires',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Santos Andrés Kim Taegon, presbítero, Pablo Chong Hasang y compañeros, mártires',
    angela_merici_virgin: 'Santa Ángela Merici, virgen',
    annunciation_of_the_lord: 'Anunciación',
    anselm_of_canterbury_bishop: 'San Anselmo de Canterbury, obispo y doctor de la Iglesia',
    ansgar_of_hamburg_bishop: 'San Ascario, obispo',
    anthony_mary_claret_bishop: 'San Antonio María Claret, obispo',
    anthony_of_egypt_abbot: 'San Antonio de Egipto, Abad',
    anthony_of_padua_priest: 'San Antonio de Padua, presbítero y doctor de la Iglesia',
    anthony_zaccaria_priest: 'San Antonio María Zaccaría, presbítero',
    apollinaris_of_ravenna_bishop: 'San Apolinar, obispo y mártir',
    arbogast_of_strasbourg_bishop: 'San Arbogast, obispo',
    arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg:
      'San Arbogast, obispo y Patrono de la Arquidiócesis de Estrasburgo',
    ascension_of_the_lord: 'Ascensión del Señor',
    ash_wednesday: 'Miércoles de Ceniza',
    assumption_of_the_blessed_virgin_mary: 'La Asunción de la Santísima Virgen María',
    athanasius_of_alexandria_bishop: 'San Atanasio de Alejandría, obispo y doctor de la Iglesia',
    audoen_of_rouen_bishop: 'San Audoeno, obispo',
    augustine_of_canterbury_bishop: 'San Agustín de Canterbury, obispo',
    augustine_of_hippo_bishop: 'San Agustín de Hipona, obispo y doctor de la Iglesia',
    augustine_zhao_rong_priest_and_companions_martyrs: 'San Agustín Zhao Rong, presbítero, y compañeros, mártires',
    aurelia_of_strasbourg_virgin: 'Santa Aurelia de Estrasburgo, virgen',
    baptism_of_the_lord: 'Bautismo del Señor',
    barbara_of_heliopolis_virgin: 'Santa Bárbara, virgen y mártir',
    barnabas_apostle: 'San Bernabé, apóstol',
    bartholomew_apostle: 'San Bartolomé, apóstol',
    bartholomew_dias_laurel_religious: 'Beato Bartolomé Laurel, religioso y mártir',
    basil_the_great_and_gregory_nazianzen_bishops:
      'San Basilio Magno y San Gregorio Nacianceno, obispos y doctores de la Iglesia',
    beatrice_da_silva_meneses_virgin: 'Santa Beatriz da Silva, virgen',
    bede_the_venerable_priest: 'San Beda el Venerable, presbítero y doctor de la Iglesia',
    benedict_of_aniane_abbot: 'San Benito de Aniano, Abad',
    benedict_of_jesus_valdivielso_saez_religious: 'San Héctor Valdivielso Sáez, mártir',
    benedict_of_nursia_abbot: 'San Benito, abad, patrono de Europa,',
    bernard_of_clairvaux_abbot: 'San Bernardo de Clairvaux, Abad y doctor de la Iglesia',
    bernardine_of_siena_priest: 'San Bernardino de Siena, presbítero',
    beuno_of_wales_abbot: 'San Beuno, Abad',
    blaise_of_sebaste_bishop: 'San Blás, obispo y mártir',
    blessed_martyrs_of_paris: 'Beatos mártires de París en la Revolución Francesa',
    bonaventure_of_bagnoregio_bishop: 'San Buenaventura, obispo y doctor de la Iglesia',
    boniface_of_mainz_bishop: 'San Bonifacio, obispo y mártir',
    bridget_of_sweden_religious: 'Santa Brígida, religiosa',
    brigid_of_kildare_virgin: 'Santa Brígida de Kildare, Abadesa',
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Santa Brígida de Kildare, virgen y Patrona Secundaria de Irlanda',
    bruno_of_cologne_priest: 'San Bruno, presbítero',
    cajetan_of_thiene_priest: 'San Cayetano de Thiene, presbítero',
    callistus_i_pope: 'San Calixto I, papa y mártir',
    camillus_de_lellis_priest: 'San Camilo de Lelis, presbítero',
    carlos_manuel_rodriguez_santiago: 'Beato Carlos Manuel Rodriguez',
    carmelites_of_compiegne_virgins_and_martyrs: 'Beatas Carmelitas de Compiègne, vírgenes y mártires',
    casimir_of_poland: 'San Casimiro',
    catherine_of_alexandria_virgin: 'Santa Catalina de Alexandria, virgen y mártir',
    catherine_of_saint_augustine_de_simon_de_longpre_virgin: 'Beata María Catalina de San Agustín, virgen',
    catherine_of_siena_virgin: 'Santa Catalina de Siena, virgen y doctora de la Iglesia',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Santa Catalina de Siena, virgen, doctora de la Iglesia y Patrona Secundaria de Europa',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Santa Catalina de Siena, virgen, doctora de la Iglesia y Patrona Secundaria de Italia y Europa',
    catherine_zoe_laboure_virgin: 'Santa Catalina Labouré, virgen',
    cecilia_of_rome_virgin: 'Santa Cecilia, virgen y mártir',
    ceraunus_of_paris_bishop: 'San Cerauno de París, obispo',
    chair_of_saint_peter_the_apostle: 'Cátedra de San Pedro, apóstol',
    charles_borromeo_bishop: 'San Carlos Borromeo, obispo',
    charles_lwanga_and_companions_martyrs: 'Santos Carlos Luanga y compañeros, mártires',
    charles_of_jesus_de_foucauld: 'Santos Carlos de Foucauld, presbítero',
    christopher_magallanes_priest_and_companions_martyrs: 'San Cristóbal Magallanes, presbítero y Compañeros, mártires',
    christopher_of_palestine_martyr: 'San Cristóbal, mártir',
    clare_of_assisi_virgin: 'Santa Clara, virgen',
    clement_i_pope: 'San Clemente I, papa y mártir',
    clotilde_of_burgundy: 'Santa Clotilde',
    columban_of_luxeuil_abbot: 'San Columbano, Abad',
    commemoration_of_all_the_faithful_departed: 'Conmemoración de todos los fieles difuntos', // src: https://www.conferenciaepiscopal.es/wp-content/uploads/2022/11/CLP-y-salmos-responsoriales-2022-2023_internet.pdf#page=342
    conversion_of_saint_paul_the_apostle: 'Conversión de San Pablo, apóstol',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'San Cornelio, papa, y Cipriano, obispo, mártires',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Santos Cosme y Damián, mártires',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop:
      'Santos Cirilo, monje, y Metodio, obispo',
    cyril_of_alexandria_bishop: 'San Cirilio de Alexandria, obispo y doctor de la Iglesia',
    cyril_of_jerusalem_bishop: 'San Cirilio de Jerusalén, obispo y doctor de la Iglesia',
    damasus_i_pope: 'San Dámaso I, papa',
    daniel_brottier_priest: 'Beato Daniel Brottier, presbítero',
    david_of_wales_bishop: 'San David, obispo',
    david_of_wales_bishop_patron_of_wales: 'San David, obispo y Patrono de Gales',
    dedication_of_consecrated_churches: 'Dedicación de iglesias consagradas cuya fecha de Consagración se desconoce', // TODO: l10n to review: Dedication of Consecrated Churches Whose Date of Consecration is Unknown
    dedication_of_the_basilica_of_saint_mary_major: 'Dedicación de la Basílica de Santa María Mayor',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Dedicación de las Basílicas de San Pedro y San Pablo, apóstoles',
    dedication_of_the_cathedral_basilica_of_saint_denis_france:
      'Dedicación de la Catedral Basílica de Saint-Denis, Francia',
    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france:
      'Dedicación de la Catedral de Notre-Dame de Strasbourg, Francia',
    dedication_of_the_lateran_basilica: 'Dedicación de la basílica de Letrán',
    dedication_of_the_notre_dame_de_paris_cathedral_paris_france:
      'Dedicación de la catedral de Notre-Dame de París, Francia',
    denis_of_paris_bishop_and_companions_martyrs: 'Santos Dionisio, obispo, y compañeros, mártires',
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris:
      'San Dionisio, obispo y mártir, Patrono de la Arquidiócesis de París',
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis:
      'San Dionisio, obispo y mártir, Patrono de la ciudad y de la Diócesis de Saint-Denis',
    divine_mercy_sunday: '2º domingo de Pascua o Domingo de la Divina Misericordia',
    dominic_de_guzman_priest: 'Santo Domingo de Guzmán, presbítero',
    easter_sunday: 'Domingo de Pascua',
    eligius_of_noyon_bishop: 'San Eligio, obispo',
    elijah_prophet: 'San Elías, profeta',
    elizabeth_of_hungary_religious: 'Santa Isabel de Hungría, religiosa',
    elizabeth_of_portugal: 'Santa Isabel de Portugal',
    ephrem_the_syrian_deacon: 'San Efrén de Siria, Diácono y doctor de la Iglesia',
    epiphany_of_the_lord: 'Epifanía',
    eucharius_of_trier_bishop: 'San Euchario, obispo',
    eugenia_of_alsace_and_attala_of_alsace_virgins: 'Santas Eugènia y Attala, vírgenes',
    eulalia_of_merida_virgin: 'Santa Eulalia de Mérida, virgen y mártir',
    eulogius_of_cordoba_bishop: 'San Eulogio de Córdoba, obispo',
    eusebius_of_vercelli_bishop: 'San Eusebio de Vercelli, obispo',
    exaltation_of_the_holy_cross: 'Exaltación de la Santa Cruz',
    ezequiel_moreno_bishop: 'San Ezequiel Moreno, obispo',
    fabian_i_pope: 'San Fabiano, papa y mártir',
    faustina_kowalska_virgin: 'Santa Faustina Kowalska, virgen',
    ferdinand_iii_of_castile: 'San Fernando',
    fidelis_of_sigmaringen_priest: 'San Fidel de Sigmaringa, presbítero y mártir',
    finding_of_the_holy_cross: 'Invención de la Santa Cruz',
    first_martyrs_of_the_holy_roman_church: 'Primeros mártires de la Iglesia de Roma',
    florentius_of_strasbourg_bishop: 'San Florencio, obispo',
    frances_of_rome_religious: 'Santa Francisca Romana, religiosa',
    francis_borgia_priest: 'San Francisco de Borja, presbítero',
    francis_de_sales_bishop: 'San Francisco de Sales, obispo y doctor de la Iglesia',
    francis_diaz_del_rincon_priest_and_companions_martyrs: 'San Francisco Díaz, presbítero y Compañeros, mártires',
    francis_ferdinand_de_capillas_priest: 'San Francisco Fernández de Capillas, presbítero y mártir',
    francis_of_assisi: 'San Francisco de Asís',
    francis_of_assisi_patron_of_italy: 'San Francisco de Asís, Patrono de Italia',
    francis_of_paola_hermit: 'San Francisco de Paula, ermitaño',
    francis_solanus_priest: 'San Francisco Solano, presbítero',
    francis_xavier_priest: 'San Francisco Javier, presbítero',
    frederic_ozanam_founder: 'Beato Federico Ozanam, fundador',
    friday_of_the_passion_of_the_lord: 'Viernes Santo',
    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      'Santos Fructuoso, obispo, y Augurio y Eulogio, diáconos, mártires',
    george_of_lydda_martyr: 'San Jorge, mártir',
    george_of_lydda_martyr_patron_of_england: 'San Jorge, mártir y Patrono de Inglaterra',
    gerard_of_csanad_bishop: 'San Gerardo, obispo',
    germain_of_paris_bishop: 'San Germán, obispo',
    gertrude_of_nivelles_abbess: 'Santa Gertrudis de Nivelles, religiosa',
    gertrude_the_great_virgin: 'Santa Gertrudis la Grande, virgen',
    gregory_i_the_great_pope: 'San Gregorio Magno, papa y doctor de la Iglesia',
    gregory_of_narek_abbot: 'San Gregorio de Narek, Abad y doctor de la Iglesia',
    gregory_vii_pope: 'San Gregorio VII, papa',
    gundisalvus_garcia_martyr: 'San Gonsalo Garcia, mártir',
    hedwig_of_silesia_religious: 'Santa Eduviges, religiosa',
    helena_of_constantinople: 'Santa Elena',
    henry_ii_emperor: 'San Enrique',
    hermenegild_the_visigoths_martyr: 'San Hermenegildo, mártir',
    hilary_of_poitiers_bishop: 'San Hilario de Poitiers, obispo y doctor de la Iglesia',
    hildegard_of_bingen_abbess: 'Santa Hildegarda de Bingen, abadesa y doctora de la Iglesia',
    holy_child_of_cebu: 'Divino Niño',
    holy_family_of_jesus_mary_and_joseph: 'Sagrada Familia',
    holy_guardian_angels: 'Santos Ángeles Custodios',
    holy_innocents_martyrs: 'Santos Inocentes, mártires',
    holy_saturday: 'Sábado Santo',
    holy_thursday: 'Jueves Santo',
    ignatius_of_antioch_bishop: 'San Ignacio de Antioquía, obispo y mártir',
    ignatius_of_loyola_priest: 'San Ignacio de Loyola, presbítero',
    ildephonsus_of_toledo_bishop: 'San Ildefonso, obispo de Toledo',
    immaculate_conception_of_the_blessed_virgin_mary: 'Inmaculada Concepción de María',
    immaculate_heart_of_mary: 'Inmaculado Corazón de María',
    innocent_v_pope: 'Beato Inocencio V, papa',
    innocent_xi_pope: 'Beato Inocencio XI, papa',
    irenaeus_of_lyon_bishop: 'San Ireneo de Lyon, obispo, mártir y doctor de la Iglesia',
    isabelle_of_france_virgin: 'Beata Isabel de Francia, virgen',
    isidore_of_seville_bishop: 'San Isidoro, obispo y doctor de la Iglesia', // src: https://liturgiapapal.org/attachments/article/1093/PROPIO%20DE%20LOS%20SANTOS.pdf#page=5
    isidore_the_farmer: 'San Isidro Labrador',
    jacinta_marto_and_francisco_marto: 'Beatos Jacinta y Francisco Marto',
    james_apostle: 'Santiago, apóstol',
    james_apostle_patron_of_spain: 'Santiago, apóstol, Patrono de España',
    jane_frances_de_chantal_religious: 'Santa Juana Francisca de Chantal, religiosa',
    januarius_i_of_benevento_bishop: 'San Jenaro, obispo y mártir',
    jerome_emiliani: 'San Jerónimo Emiliani',
    jerome_of_stridon_priest: 'San Jerónimo, presbítero y doctor de la Iglesia',
    joachim_and_anne_parents_of_mary: 'San Joaquín y Santa Ana',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'Santa Ana, Patrona de Quebec, y San Joaquín, Padres de la Santísima Virgen María',
    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: 'Santa Joaquina de Vedruna, religiosa',
    john_apostle: 'San Juan, apóstol y evangelista',
    john_baptist_de_la_salle_priest: 'San Juan Bautista de la Salle, presbítero',
    john_bosco_priest: 'San Juan Bosco, presbítero',
    john_chrysostom_bishop: 'San Juan Crisóstomo, obispo y doctor de la Iglesia',
    john_damascene_priest: 'San Juan Damasceno, presbítero y doctor de la Iglesia',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Santos Juan de Brébeuf e Isaac Jogues, presbíteros, y compañeros, mártires',
    john_eudes_priest: 'San Juan Eudes, presbítero',
    john_fisher_bishop_and_thomas_more_martyrs: 'Santos Juan Fisher, obispo, y Tomás Moro, mártires',
    john_i_pope: 'San Juan I, papa y mártir',
    john_leonardi_priest: 'San Juan Leonardi, presbítero',
    john_mary_vianney_priest: 'San Juan María Vianney, presbítero',
    john_of_avila_priest: 'San Juan de Ávila, presbítero y doctor de la Iglesia',
    john_of_capistrano_priest: 'San Juan de Capistrano, presbítero',
    john_of_god_duarte_cidade_religious: 'San Juan de Dios, religioso',
    john_of_kanty_priest: 'San Juan Kety, presbítero',
    john_of_the_cross_priest: 'San Juan de la Cruz, presbítero y doctor de la Iglesia',
    john_paul_ii_pope: 'papa San Juan Pablo II',
    john_xxiii_pope: 'papa San Juan XXIII',
    josaphat_kuntsevych_bishop: 'San Josafat Kuncewicz, obispo y mártir',
    jose_maria_de_yermo_y_parres_priest: 'San José Maria de Yermo, presbítero',
    josemaria_escriva_de_balaguer_priest: 'San Josemaría Escrivá de Balaguer, presbítero',
    joseph_de_anchieta_priest: 'San José de Anchieta, presbítero',
    joseph_of_calasanz_priest: 'San José de Calasanz, presbítero',
    joseph_spouse_of_mary: 'José, Esposo de María',
    joseph_spouse_of_mary_patron_of_canada: 'San José, Esposo de la Santísima Virgen María, Patrono de Canadá',
    joseph_the_worker: 'San José Obrero',
    josephine_bakhita_virgin: 'Santa Josefina Bakhita, virgen',
    juan_diego_cuauhtlatoatzin: 'San Juan Diego Cuauhtlatoatzin',
    junipero_serra_priest: 'San Junípero Serra, presbítero',
    justin_martyr: 'San Justino, mártir',
    landry_of_paris_bishop: 'San Landerico de París, obispo',
    laura_vicuna_virgin: 'Beata Laura Vicuna, virgen',
    lawrence_of_brindisi_priest: 'San Lorenzo de Brindis, presbítero y doctor de la Iglesia',
    lawrence_of_rome_deacon: 'San Lorenzo, diácono y mártir',
    lawrence_ruiz_and_companions_martyrs: 'San Lorenzo Ruiz y Compañeros, mártires',
    leander_of_seville_bishop: 'San Leandro de Sevilla, obispo',
    leo_i_the_great_pope: 'San León Magno, papa y doctor de la Iglesia',
    leodegar_of_autun_bishop: 'San Leodegario de Autun, obispo y mártir',
    louis_grignion_de_montfort_priest: 'San Luis María Grignion de Montfort, presbítero',
    louis_ix_of_france: 'San Luis',
    louise_de_marillac_religious: 'Santa Luisa de Marillac, religiosa',
    lucy_of_syracuse_virgin: 'Santa Lucía, virgen y mártir',
    ludan_of_scotland_pilgrim: 'San Ludano, peregrino',
    luigi_orione_priest: 'San Luis Orione, presbítero',
    luke_evangelist: 'San Lucas, evangelista',
    madeleine_sophie_barat_virgin: 'Santa Magdalena Sofía Barat, virgen',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Santos Marcelino y Pedro, mártires',
    marcellus_of_paris_bishop: 'San Marcelo de París, obispo',
    margaret_mary_alacoque_virgin: 'Santa Margarita María de Alacoque',
    margaret_of_antioch_virgin: 'Sant Margarita de Antioquía, virgen y mártir',
    margaret_of_scotland: 'Santa Margarita de Escocia',
    maria_goretti_virgin: 'Santa María Goretti, virgen y mártir',
    maria_guadalupe_garcia_zavala_virgin: 'Santa María Guadalupe García Zavala, virgen',
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: 'Santa María Micaela del Santísimo Sacramento, virgen',
    mariana_of_jesus_de_paredes_virgin: 'Santa Mariana de Jesús de Paredes, virgen',
    marie_eugenie_of_jesus_milleret_de_brou_virgin:
      'Santa María Eugenia de Jesús Milleret de Brou, virgen y Fundatrice',
    mark_evangelist: 'San Marcos, evangelista',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Santa Marta, María y Lázaro',
    martin_de_porres_religious: 'San Martín de Porres, religioso',
    martin_i_pope: 'San Martín I, papa y mártir',
    martin_of_tours_bishop: 'San Martín de Tours, obispo',
    mary_magdalene: 'Santa María Magdalena',
    mary_magdalene_de_pazzi_virgin: 'Santa María Magdalena de Pazzi, virgen',
    mary_mother_of_god: 'María, Madre de Dios',
    mary_mother_of_the_church: 'María, Madre de la Iglesia',
    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin:
      'Santa Maria de Jesús Sacramentado Venegas de la Torre, virgen',
    mary_of_the_cross_mackillop_virgin: 'Santa María de la Cruz MacKillop, virgen',
    mary_of_the_incarnation_barbara_acarie_religious: 'Beata María de la Encarnación Bárbara Acarie, religiosa',
    mary_of_the_incarnation_marie_guyart_religious: 'Santa María de la Encarnación María Guyart, religiosa',
    mary_of_the_providence_eugenie_smet_virgin: 'Beata María de la Providencia Eugenia Smet, virgen',
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin:
      'Beata María Teresa de Soubiran La Louvière, virgen',
    mary_soledad_torres_acosta_virgin: 'Santa María Soledad Torres Acosta, virgen',
    marydolores_rodriguez_sopena_virgin: 'Beata Maria Dolores Rodriguez Sopena, virgen',
    maternus_of_cologne_bishop: 'San Materno, obispo',
    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: 'Santos Materno, Valerio y Eucario, obispos',
    matilda_of_ringelheim: 'Santa Matilda',
    matthew_apostle: 'San Mateo, apóstol y evangelista',
    matthias_apostle: 'San Matías, apóstol',
    maximilian_mary_raymund_kolbe_priest: 'San Maximiliano María Kolbe, presbítero y mártir',
    mederic_of_autun_and_droctoveus_of_autun_abbots: 'Santos Mederico y Droctoveo, Abades',
    michael_gabriel_and_raphael_archangels: 'Santos Arcángeles Miguel, Gabriel y Rafael',
    miguel_agustin_pro_priest: 'Beato Miguel Agustín Pro, presbítero y mártir',
    miguel_febres_cordero_religious: 'San Miguel Febres Cordero, religioso',
    modestus_andlauer_and_andrew_bauer_martyrs: 'San Modesto Andlauer y Andrés Bauer, mártires',
    modestus_andlauer_martyr: 'San Modesto Andlauer, mártir',
    monica_of_hippo: 'Santa Mónica',
    morand_of_cluny_monk: 'San Morando, monje',
    most_holy_body_and_blood_of_christ: 'Corpus Christi',
    most_holy_name_of_jesus: 'Santísimo Nombre de Jesús',
    most_holy_name_of_mary: 'Santo Nombre de la Santísima Virgen María',
    most_holy_trinity: 'Domingo de la Santísima Trinidad',
    most_sacred_heart_of_jesus: 'Sagrado Corazón de Jesús',
    nativity_of_john_the_baptist: 'Nacimiento de Juan Bautista',
    nativity_of_the_blessed_virgin_mary: 'Nacimiento de la Santísima Virgen María',
    nativity_of_the_lord: 'Navidad',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Santos Nereo y Aquileo, mártires',
    nicholas_barre_priest: 'Beato Nicolás Barré, presbítero',
    nicholas_of_myra_bishop: 'San Nicolás, obispo',
    norbert_of_xanten_bishop: 'San Norberto, obispo',
    odile_of_alsace_abbess: 'Santa Odilia, abadesa',
    odile_of_alsace_abbess_patroness_of_alsace: 'Santa Odilia, abadesa, Patrona de Alsacia',
    olga_of_kiev: 'Santa Olga',
    our_lady_help_of_christians: 'Nuestra Señora, Auxilio de los Cristianos',
    our_lady_of_aparecida_patroness_of_brazil: 'Nuestra Señora de Aparecida, Patrona de Brasil',
    our_lady_of_bethlehem: 'Nuestra Señora de Belén',
    our_lady_of_fatima: 'Nuestra Señora de Fátima',
    our_lady_of_good_counsel: 'Nuestra Señora del Buen Consejo',
    our_lady_of_guadalupe: 'Nuestra Señora de Guadalupe',
    our_lady_of_guadalupe_patroness_of_the_americas: 'Nuestra Señora de Guadalupe, Patrona de América',
    our_lady_of_itati: 'Nuestra Señora de Itatí',
    our_lady_of_loreto: 'Nuestra Señora de Loreto',
    our_lady_of_lourdes: 'Nuestra Señora de Lourdes',
    our_lady_of_lujan: 'Nuestra Señora de Luján',
    our_lady_of_lujan_patroness_of_argentina: 'Nuestra Señora de Luján, Patrona de Argentina',
    our_lady_of_mercy: 'Nuestra Señora de la Misericordia',
    our_lady_of_mount_carmel: 'Nuestra Señora del Monte Carmelo',
    our_lady_of_mount_carmel_mother_and_queen_of_chile: 'Nuestra Señora del Monte Carmelo, Madre y Reina de Chile',
    our_lady_of_perpetual_help: 'Nuestra Señora del Perpetuo Socorro',
    our_lady_of_sorrows: 'Bienaventurada Virgen María de los dolores',
    our_lady_of_sorrows_patroness_of_slovakia: 'Nuestra Señora del Socorro, Patrona de Eslovaquia',
    our_lady_of_the_gate_of_dawn: 'Nuestra Señora de la Puerta del Aurora',
    our_lady_of_the_miraculous_medal: 'Nuestra Señora de la Medalla Milagrosa',
    our_lady_of_the_pillar: 'Nuestra Señora del Pilar',
    our_lady_of_the_rosary: 'Bienaventurada Virgen María del Rosario',
    our_lady_of_the_valley: 'Nuestra Señora del Valle',
    our_lady_queen_of_peace: 'Nuestra Señora, Reina de la Paz',
    our_lady_refuge_of_sinners: 'Nuestra Señora, refugio de los pecadores',
    our_lord_jesus_christ_king_of_the_universe: 'Jesucristo, Rey del Universo', // src: https://textosparalaliturgia.blogspot.com/2014/09/misal-romano-jesucristo-rey-del-universo.html
    our_lord_jesus_christ_the_eternal_high_priest: 'Jesucristo, Sumo y Eterno Sacerdote', // src: https://textosparalaliturgia.blogspot.com/2014/05/misal-romano-jesucristo-sumo-y-eterno.html
    our_lord_of_miracles: 'Nuestro Señor de los Milagros',
    palm_sunday_of_the_passion_of_the_lord: 'Domingo de Ramos',
    pancras_of_rome_martyr: 'San Pancracio, mártir',
    paschal_baylon_religious: 'San Pascual Bailón, religioso',
    passion_of_saint_john_the_baptist: 'Martirio de San Juan Bautista',
    patrick_of_ireland_bishop: 'San Patricio, obispo',
    paul_miki_and_companions_martyrs: 'Santos Pablo Miki y compañeros, mártires',
    paul_of_the_cross_priest: 'San Pablo de la Cruz, presbítero',
    paul_vi_pope: 'San Pablo VI, papa',
    paulinus_of_nola_bishop: 'San Paulino de Nola, obispo',
    pelagius_of_cordoba_martyr: 'San Pelayo, mártir',
    pentecost_sunday: 'Pentecostés',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Santas Perpetua y Felicidad, mártires',
    peter_and_paul_apostles: 'San Pedro y San Pablo, apóstoles',
    peter_canisius_priest: 'San Pedro Canisio, presbítero y doctor de la Iglesia',
    peter_chanel_priest: 'San Pedro Chanel, presbítero y mártir',
    peter_chrysologus_bishop: 'San Pedro Crisólogo, obispo y doctor de la Iglesia',
    peter_claver_priest: 'San Pedro Claver, presbítero',
    peter_damian_bishop: 'San Pedro Damián, obispo y doctor de la Iglesia',
    peter_de_zuniga_and_louis_flores_priests: 'Beatos Pedro Zuniga y Luis Flores, presbíteros y mártires',
    peter_julian_eymard_priest: 'San Pedro Julián Eymard, presbítero',
    peter_of_alcantara_priest: 'San Pedro de Alcántara, presbítero',
    philip_and_james_apostles: 'Santos Felipe y Santiago, apóstoles',
    philip_neri_priest: 'San Felipe Neri, presbítero',
    philip_of_jesus_de_las_casas_martyr: 'San Felipe de Jesús de las Casas, mártir',
    pius_francesco_forgione_priest: 'San Pío de Pietrelcina, presbítero',
    pius_ix_pope: 'Beato Pío IX, papa',
    pius_v_pope: 'San Pío V, papa',
    pius_x_pope: 'San Pío X, papa',
    polycarp_of_smyrna_bishop: 'San Policarpo, obispo y mártir',
    pontian_i_pope_and_hippolytus_of_rome_priest: 'San Ponciano, papa y San Hipólito, presbítero, mártires,',
    presentation_of_the_blessed_virgin_mary: 'Presentación de la Santísima Virgen María',
    presentation_of_the_lord: 'Presentación de Jesús en el Templo',
    queenship_of_the_blessed_virgin_mary: 'Santísima Virgen María, Reina del Cielo',
    raphael_guizar_y_valencia_bishop: 'San Rafael Guízar y Valencia, obispo',
    raymond_of_penyafort_priest: 'San Raimundo de Peñafort, presbítero',
    richardis_of_swabia_empress: 'Santa Ricarda, Emperatriz',
    rita_of_cascia_religious: 'Santa Rita de Cascia',
    robert_bellarmine_bishop: 'San Roberto Bearmino, obispo y doctor de la Iglesia',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests:
      'Santos Roque González, Alfonso Rodríguez Olmedo y Juan del Castillo, presbíteros y mártires',
    roch_of_montpellier: 'San Roque',
    romuald_of_ravenna_abbot: 'San Romualdo, Abad',
    rosalie_jeanne_marie_rendu_virgin: 'Beata Rosalía Rendu, virgen',
    rose_of_lima_virgin: 'Santa Rosa de Lima, virgen',
    scholastica_of_nursia_virgin: 'Santa Escolástica, virgen',
    sebastian_de_aparicio_religious: 'Beato Sebastián de Aparicio, religioso',
    sebastian_of_milan_martyr: 'San Sebastián, mártir',
    seven_holy_founders_of_the_servite_order: 'Los Santos Siete Fundadores de la Orden de los Servitas',
    sharbel_makhluf_priest: 'San Sarbelio Makhluf, presbítero y eremita',
    simon_and_jude_apostles: 'Santos Simón y Judas, apóstoles',
    sixtus_ii_pope_and_companions_martyrs: 'Santos Sixto II, papa, y compañeros, mártires',
    stanislaus_of_szczepanow_bishop: 'San Estanislao de Cracovia, obispo y mártir',
    stephen_i_of_hungary: 'San Esteban de Hungría',
    stephen_the_first_martyr: 'San Esteban, Primer mártir',
    sunday_of_the_word_of_god: '3º domingo del Tiempo Ordinario, o domingo de la Palabra de Dios',
    sylvester_i_pope: 'San Silvestre I, papa',
    teresa_benedicta_of_the_cross_stein_virgin: 'Santa Teresa Benedicta de la Cruz (Edith Stein), virgen y mártir',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Santa Teresa Benedicta de la Cruz (Edith Stein), virgen, mártir y Patrona Secundaria de Europa',
    teresa_of_calcutta_religious: 'Santa Teresa de Calcuta, religiosa',
    teresa_of_jesus_jornet_ibars_virgin: 'Santa Teresa de Jesús Jornet e Ibars, virgen',
    teresa_of_jesus_of_avila_virgin: 'Santa Teresa de Jesús, virgen y doctora de la Iglesia',
    teresa_of_jesus_of_los_andes_virgin: 'Santa Teresa de Los Andes, virgen',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Santa Teresita del Niño Jesús, virgen y doctora de la Iglesia',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'Santa Teresita del Niño Jesús, virgen y doctora, Patrona Secundaria de Francia',
    thomas_apostle: 'Santo Tomás, apóstol',
    thomas_aquinas_priest: 'Santo Tomás de Aquino, obispo y doctor de la Iglesia',
    thomas_becket_bishop: 'San Tomás Becket, obispo y mártir',
    thomas_jean_georges_rehm_priest: 'Beato Tomás Juan Jorge Rehm, presbítero y mártir',
    thomas_of_villanova_bishop: 'Santo Tomás de Villanueva, obispo',
    thursday_of_the_lords_supper: '$(names:holy_thursday)',
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Santos Timoteo y Tito, obispos',
    transfiguration_of_the_lord: 'Transfiguración',
    translation_of_the_relics_of_odile_of_alsace_abbess: 'Traslado de los restos de santa Odilia',
    turibius_of_mogrovejo_bishop: 'Santo Toribio de Mogrovejo, obispo',
    urban_i_pope: 'San Urbano I, papa',
    valerius_of_trier_bishop: 'San Valerio, obispo',
    vincent_de_paul_priest: 'San Vicente de Paúl, obispo',
    vincent_ferrer_priest: 'San Vicente Ferrer, presbítero',
    vincent_of_saragossa_deacon: 'San Vicente de Zaragoza, diácono y mártir',
    visitation_of_mary: 'Visitación de la Santísima Virgen María',
    wenceslaus_i_of_bohemia_martyr: 'San Wenceslao de Bohemia, mártir',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'San Wenceslao de Bohemia, mártir y Patrono de la nación checa',
    wendelin_of_trier_hermit: 'San Vendelino, Ermitaño',
    zepherin_namuncura: 'Beato Ceferino Namuncurá',
  },
};
