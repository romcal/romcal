import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'pt-br',

  seasons: {
    advent: {
      season: 'Advento',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Advento',
      sunday: '{{week}}º Domingo do Advento',
      privileged_weekday: '{{day}} de $t(months:11)',
    },

    christmas_time: {
      season: 'Natal',
      day: '$t(weekdays:{{dow}}, capitalize) do Tempo do Natal',
      octave: '{{count}}º dia da Oitava de Natal',
      second_sunday_after_christmas: 'Segundo Domingo do Natal',
      before_epiphany: '{{day}} de $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}, capitalize) depois da Epifania do Senhor',
    },

    ordinary_time: {
      season: 'Tempo Comum',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Tempo Comum',
      sunday: '{{week}}º Domingo do Tempo Comum',
    },

    lent: {
      season: 'Quaresma',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana da Quaresma',
      sunday: '{{week}}º Domingo da Quaresma',
      day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) depois da Quarta-feira de Cinzas',
      holy_week_day: '$t(weekdays:{{dow}}, capitalize) of Semana Santa',
    },

    paschal_triduum: {
      season: 'Tríduo Pascal',
    },

    easter_time: {
      season: 'Páscoa',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Tempo Pascal',
      sunday: '{{week}}º Domingo do Tempo Pascal',
      octave: 'Tempo Pascal $t(weekdays:{{dow}}, capitalize)',
    },
  },

  periods: {
    epiphany: 'Epifania do Senhor',
    holy_week: 'Semana Santa',
  },

  ranks: {
    solemnity: 'solenidade',
    sunday: 'domingo',
    feast: 'festa',
    memorial: 'memória',
    optional_memorial: 'memória facultativa',
    weekday: 'dia de semana',
  },

  weekdays: {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado',
  },

  months: {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro',
  },

  colors: {
    black: 'preto',
    gold: 'dourado',
    green: 'verde',
    purple: 'roxo',
    red: 'vermelho',
    rose: 'roséo',
    white: 'branco',
  },

  ordinals: {
    '1': 'primeiro',
    '1_feminine': 'primeira',
    '2': 'segundo',
    '2_feminine': 'segunda',
    '3': 'terceiro',
    '3_feminine': 'terceira',
    '4': 'quarto',
    '4_feminine': 'quarta',
    '5': 'quinto',
    '5_feminine': 'quinta',
    '6': 'sexto',
    '6_feminine': 'sexta',
    '7': 'sétimo',
    '7_feminine': 'sétima',
    '8': 'oitavo',
    '8_feminine': 'oitava',
    '9': 'nono',
    '9_feminine': 'nona',
    '10': 'décimo',
    '10_feminine': 'décima',
    '11': 'décimo primeiro',
    '11_feminine': 'décima primeira',
    '12': 'décimo segundo',
    '12_feminine': 'décima segunda',
    '13': 'décimo terceiro',
    '13_feminine': 'décima terceira',
    '14': 'décimo quarto',
    '14_feminine': 'décima quarta',
    '15': 'décimo quinto',
    '15_feminine': 'décima quinta',
    '16': 'décimo sexto',
    '16_feminine': 'décima sexta',
    '17': 'décimo sétimo',
    '17_feminine': 'décima sétima',
    '18': 'décimo oitavo',
    '18_feminine': 'décima oitava',
    '19': 'décimo nono',
    '19_feminine': 'décima nona',
    '20': 'vigésimo',
    '20_feminine': 'vigésima',
    '21': 'vigésimo primeiro',
    '21_feminine': 'vigésima primeira',
    '22': 'vigésimo segundo',
    '22_feminine': 'vigésima segunda',
    '23': 'vigésimo terceiro',
    '23_feminine': 'vigésima terceira',
    '24': 'vigésimo quarto',
    '24_feminine': 'vigésima quarta',
    '25': 'vigésimo quinto',
    '25_feminine': 'vigésima quinta',
    '26': 'vigésimo sexto',
    '26_feminine': 'vigésima sexta',
    '27': 'vigésimo sétimo',
    '27_feminine': 'vigésima sétima',
    '28': 'vigésimo oitavo',
    '28_feminine': 'vigésima oitava',
    '29': 'vigésimo nono',
    '29_feminine': 'vigésima nona',
    '30': 'trigésimo',
    '30_feminine': 'trigésima',
    '31': 'trigésimo primeiro',
    '31_feminine': 'trigésima primeira',
    '32': 'trigésimo segundo',
    '32_feminine': 'trigésima segunda',
    '33': 'trigésimo terceiro',
    '33_feminine': 'trigésima terceira',
    '34': 'trigésimo quarto',
    '34_feminine': 'trigésima quarta',
  },

  names: {
    adalbert_of_prague_bishop: 'Santo Adalberto, bispo e mártir',     // (1)
    adelaide_of_burgundy_empress: 'Santa Adelaide, imperatriz',   // (6)
    adelphus_of_metz_bishop: 'São Adelfus de Métis, bispo',       // Not mentioned in the Brazilian tradition (CNBB)
    agatha_of_sicily_virgin: 'Santa Águeda, virgem e mártir',   // (1)
    agnes_of_rome_virgin: 'Santa Inês, virgem e mártir',       // (1)
    albert_the_great_bishop: 'Santo Alberto Magno, bispo e doutor da Igreja',     // (1)
    albertina_berkenbrock_virgin: 'Beata Albertina Berkenbrock, virgem e mártir', //https://www.cnbb.org.br/albertina-uma-historia-em-longa-metragem/
    all_saints: 'TODOS OS SANTOS',           // (1)
    all_saints_of_the_archdiocese_of_paris: 'Todos os Santos da Arquidiocese de Paris', // Not mentioned in the Brazilian tradition (CNBB)
    aloysius_gonzaga_religious: 'São Luís Gonzaga, religioso',   // (1)
    alphonsus_mary_liguori_bishop: 'Santo Afonso Maria de Ligório, bispo e doutor da Igreja',     // (1)
    amandus_of_strasbourg_bishop: 'São Amand de Estrasburgo, bispo',   // Not mentioned in the Brazilian tradition (CNBB)
    amarin_of_alsace_abbot: 'São Amarino, abade e mártir',  // Not mentioned in the Brazilian tradition (CNBB)
    ambrose_of_milan_bishop: 'Santo Ambrósio, bispo e doutor da Igreja',     // (1)
    andrew_apostle: 'SANTO ANDRÉ, APÓSTOLO',     // (1)
    andrew_de_soveral_and_ambrose_francis_ferro_priests:
      'Santos André de Soveral, Ambrósio Francisco Ferro, presbíteros, Mateus Moreira, leigo, e companheiros mártires', // (4)
    andrew_dung_lac_priest_and_companions_martyrs: 'Santo André Dung-Lạc, presbítero e Companheiros, mártires',    // (1)
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Santo André Kim Taegón, presbítero, e São Paulo Chóng Hasang e seus companheiros, mártires',      // (1)
    angela_merici_virgin: 'Santa Ângela Mérici, virgem',    // (1)
    annunciation_of_the_lord: 'ANUNCIACAO DO SENHOR',     // (1)
    anselm_of_canterbury_bishop: 'Santo Anselmo, bispo e doutor da Igreja',   // (1)
    ansgar_of_hamburg_bishop: 'Santo Oscar, bispo',     // (1)
    anthony_mary_claret_bishop: 'Santo Antônio Maria Claret, bispo',       // (1)
    anthony_of_egypt_abbot: 'Santo Antão, abade',       // (1)
    anthony_of_padua_priest: 'Santo Antônio de Pádua (de Lisboa), presbítero e doutor da Igreja',      // (1)
    anthony_of_saint_anne_galvao_priest: "Santo Antônio de Sant'Anna Galvão, presbítero",     // (4)
    anthony_zaccaria_priest: 'Santo Antônio Maria Zacaria, presbítero',       // (1)
    apollinaris_of_ravenna_bishop: 'Santo Apolinário, bispo e mártir',  // https://franciscanos.org.br/vidacrista/calendario/santo-apolinario/#gsc.tab=0
    arbogast_of_strasbourg_bishop: 'São Arbogasto, bispo',      // Not mentioned in the Brazilian tradition (CNBB)
    arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg:
      'São Arbogasto, bispo e patrono da Arquidiocese de Estrasburgo',    // Not mentioned in the Brazilian tradition (CNBB)
    ascension_of_the_lord: 'Ascensão do Senhor',    // (2)
    ash_wednesday: 'Quarta-feira de Cinzas',
    assumption_of_the_blessed_virgin_mary: 'ASSUNÇÃO DE NOSSA SENHORA',     // (1)
    athanasius_of_alexandria_bishop: 'Santo Atanásio, bispo e doutor da Igreja',    // (1)
    audoen_of_rouen_bishop: 'São Audoeno, bispo',   // Not mentioned in the Brazilian tradition (CNBB)
    augustine_of_canterbury_bishop: 'Santo Agostinho de Cantuária, bispo',      // (1)
    augustine_of_hippo_bishop: 'Santo Agostinho, bispo e doutor da Igreja',     // (1)
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Santos Agostinho Zhao Rong, presbítero, e Companheiros, mártires',     // (4)
    aurelia_of_strasbourg_virgin: 'Santa Aurélia de Estrasburgo, virgem',   // Not mentioned in the Brazilian tradition (CNBB)
    baptism_of_the_lord: 'BATISMO DO SENHOR',     // (1)
    barbara_of_heliopolis_virgin: 'Santa Bárbara, virgem  e mártir',     // (6))
    barnabas_apostle: 'São Barnabé, apóstolo',    //(1)
    bartholomew_apostle: 'SÃO BARTOLOMEU, APÓSTOLO',    // (1)
    bartholomew_of_the_martyrs_fernandes_bishop: 'São Bartolomeu dos mártires, bispo',  // Not mentioned in the Brazilian tradition (CNBB)
    basil_the_great_and_gregory_nazianzen_bishops:
      'São Basílio Magno e São Gregório Nazianzeno, bispos e doutores da Igreja',   // (1)
    beatrice_da_silva_meneses_virgin: 'Santa Beatriz da Silva, virgem',  // Not mentioned in the Brazilian tradition (CNBB)
    bede_the_venerable_priest: 'São Beda, o Venerável, presbítero e doutor da Igreja', // (1)
    benedict_of_aniane_abbot: 'São Bento de Aniane, abade',   // Not mentioned in the Brazilian tradition (CNBB)
    benedict_of_nursia_abbot: 'São Bento, abade',      // (1)
    bernard_of_clairvaux_abbot: 'São Bernardo, abade e doutor da Igreja',   // (1)
    bernardine_of_siena_priest: 'São Bernardino de Sena, presbítero',   // (1)
    blaise_of_sebaste_bishop: 'São Brás, bispo e mártir',   // (1)
    blessed_martyrs_of_paris: 'Beatos mártires da Revolução Francesa',  // Not mentioned in the Brazilian tradition (CNBB)
    bonaventure_of_bagnoregio_bishop: 'São Boaventura, bispo e doutor da Igreja',    // (1)
    boniface_of_mainz_bishop: 'São Bonifácio, bispo e mártir',   // (1)
    bridget_of_sweden_religious: 'Santa Brígida, religiosa',     // (1)
    brigid_of_kildare_virgin: 'Santa Brígida de Kildare, abadessa',  // Not mentioned in the Brazilian tradition (CNBB)
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Santa Brígida de Kildare, virgem e copatrona da Irlanda',
    // Not mentioned in the Brazilian tradition (CNBB)
    bruno_of_cologne_priest: 'São Bruno, presbítero',       // (1)
    cajetan_of_thiene_priest: 'São Caetano, presbítero',     // (1)
    callistus_i_pope: 'São Calisto I, papa e mártir',   // (1)
    camillus_de_lellis_priest: 'São Camilo de Lellis, presbítero',       // (1)
    carmelites_of_compiegne_virgins_and_martyrs: 'Beatas Carmelitas de Compiègne, virgens e mártires',
     // Not mentioned in the Brazilian tradition (CNBB)
    casimir_of_poland: 'São Casimiro',         //(1)
    catherine_of_alexandria_virgin: 'Santa Catarina de Alexandria, virgem e mártir',    // (4)
    catherine_of_siena_virgin: 'Santa Catarina de Sena, virgem e doutora da Igreja',    // (1)
    catherine_zoe_laboure_virgin: 'Santa Catarina Labouré, virgem',   //https://www.cnbb.org.br/medalha-milagrosa/
    cecilia_of_rome_virgin: 'Santa Cecília, virgem e mártir',      // (1)
    ceraunus_of_paris_bishop: 'São Cerauno de Paris, bispo',     // Not mentioned in the Brazilian tradition (CNBB)
    chair_of_saint_peter_the_apostle: 'CÁTEDRA DE SÃO PEDRO, Apóstolo',
    charles_borromeo_bishop: 'São Carlos Borromeu, bispo',     // (1)
    charles_lwanga_and_companions_martyrs: 'São Carlos Lwanga e companheiros, mártires',    // (1)
    charles_of_jesus_de_foucauld: 'São Charles de Foucauld, presbítero',
    // https://www.cnbb.org.br/ano-sacerdotal-o-pe-charles-de-foucauld-ii/
    christopher_magallanes_priest_and_companions_martyrs:
      'Santos Cristóvão de Magalhães, presbítero, e Companheiros, mártires',    // (4)
    clare_of_assisi_virgin: 'Santa Clara, virgem',      // (1)
    clement_i_pope: 'São Clemente I, papa e mártir',   // (1)
    columban_of_luxeuil_abbot: 'São Columbano, abade',  // (1)
    commemoration_of_all_the_faithful_departed: 'Comemoração de todos os Fiéis Defuntos',   // (1)
    conversion_of_saint_paul_the_apostle: 'Conversão de São Paulo, Apóstolo',      // (1)
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'São Cornélio, papa, e São Cipriano, bispo, mártires',   // (1)
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'São Cosme e São Damião, mártires',    // (1)
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop:
      'São Cirilo, monge, e São Metódio, bispo',        // (1)
    cyril_of_alexandria_bishop: 'São Cirilo de Alexandria, bispo e doutor da Igreja',     // (1)
    cyril_of_jerusalem_bishop: 'São Cirilo de Jerusalém, bispo e doutor da Igreja',     // (1)
    damasus_i_pope: 'São Dâmaso I, papa',   // Not mentioned in the Brazilian tradition (CNBB)
    daniel_brottier_priest: 'Beato Daniel Brottier, presbítero',    // Not mentioned in the Brazilian tradition (CNBB)
    dedication_of_consecrated_churches: 'Dedicação de Igrejas Consagradas', // TODO: l10n to review: Dedication of Consecrated Churches Whose Date of Consecration is Unknown
    dedication_of_the_basilica_of_saint_mary_major: 'Dedicação da basílica de Santa Maria Maior', // (3)
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Dedicação das Basílicas dos Santos Pedro e Paulo, Apóstolos',    // (1)
    dedication_of_the_cathedral_basilica_of_saint_denis_france: 'Dedicação da Catedral Basílica de Saint-Denis, França',
    // Not mentioned in the Brazilian tradition (CNBB)
    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france:
      'Dedicação da Catedral de Notre-Dame de Estrasburgo, França',
    dedication_of_the_lateran_basilica: 'DEDICAÇÃO DA BASÍLICA DE LATRÃO',    // (1)
    dedication_of_the_notre_dame_de_paris_cathedral_paris_france:
      'Dedicação da Catedral de Notre-Dame de Paris, França',
    denis_of_paris_bishop_and_companions_martyrs: 'São Dionísio, bispo, e companheiros, mártires',    // (1)
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris:
      'São Dionísio, bispo e mártir, patrono da Arquidiocese de Paris',  // (1)
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis:
      'São Dionísio, bispo e mártir, patrono da Cidade e da Diocese de Saint-Denis',  // (1)
    divine_mercy_sunday: '2º Domingo do Tempo Pascal ou Domingo da Divina Misericórdia',  // (5) 2025-04-27
    dominic_de_guzman_priest: 'São Domingos, presbítero',      // (1)
    dulce_lopes_pontes_virgin: 'Santa Dulce Lopes Pontes, virgem',      // (4)
    easter_sunday: 'Domingo da Páscoa na Ressurreição do Senhor',        // (2)
    eligius_of_noyon_bishop: 'Santo Elói ou Elígio, bispo', // (6)
    elizabeth_of_hungary_religious: 'Santa Isabel da Hungria, religiosa', // Not mentioned in the Brazilian tradition (CNBB)
    elizabeth_of_portugal: 'Santa Isabel de Portugal',      // (1)
    ephrem_the_syrian_deacon: 'Santo Efrém, diácono e doutor da Igreja',        // (1)
    epiphany_of_the_lord: 'EPIFANIA DO SENHOR',        // (1)
    eucharius_of_trier_bishop: 'Santo Eucario, bispo',  // Not mentioned in the Brazilian tradition (CNBB)
    eugenia_of_alsace_and_attala_of_alsace_virgins: 'Santas Eugênia e Attala, virgens', // Not mentioned in the Brazilian tradition (CNBB)
    eusebius_of_vercelli_bishop: 'Santo Eusébio de Vercelli, bispo',        // (1)
    exaltation_of_the_holy_cross: 'EXALTAÇÃO DA SANTA CRUZ',        // (1)
    fabian_i_pope: 'São Fabiano, papa e mártir',        // (1)
    faustina_kowalska_virgin: 'Santa Faustina Kowalska, virgem',  // https://www.cnbb.org.br/segundo-domingo-da-pascoa/ (4)
    fidelis_of_sigmaringen_priest: 'São Fidélis de Sigmaringa, presbítero e mártir',    // (1)
    first_martyrs_of_the_holy_roman_church: 'Santos Protomártires da Igreja de Roma',    // (1)
    five_wounds_of_the_lord: 'As Cinco Chagas do Senhor',   // Not mentioned in the Brazilian tradition (CNBB)
    florentius_of_strasbourg_bishop: 'São Florêncio, bispo',    // Not mentioned in the Brazilian tradition (CNBB)
    frances_of_rome_religious: 'Santa Francisca Romana, religiosa',     // (1)
    francis_de_sales_bishop: 'São Francisco de Sales, bispo e doutor da Igreja',    // (1)
    francis_of_assisi: 'São Francisco de Assis',      // (1)
    francis_of_paola_hermit: 'São Francisco de Paula, eremita',     // (1)
    francis_xavier_priest: 'São Francisco Xavier, presbítero',      // (1)
    frederic_ozanam_founder: 'Beato Frederico Ozanam, fundador',
    // https://www.cnbb.org.br/conferencias-vicentinas-responsavel-mundial-destaca-necessidade-de-responder-a-novas-pobrezas/
    friday_of_the_passion_of_the_lord: 'Sexta-feira da Paixão do Senhor',     // (2)
    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops:
      'São Frutuoso de Braga, São Martinho de Braga e São Geraldo de Braga, bispos',
    // Not mentioned in the Brazilian tradition (CNBB)
    george_of_lydda_martyr: 'São Jorge, mártir',      // (1)
    germain_of_paris_bishop: 'São Germano, bispo',    // It is not São Germano de Constantinopla
    gertrude_the_great_virgin: 'Santa Gertrudes, virgem',   //https://www.cnbb.org.br/santa-gertrudes-de-helfta-ontem-e-hoje/
    gregory_i_the_great_pope: 'São Gregório Magno, papa e doutor da Igreja',    // (1)
    gregory_of_narek_abbot: 'São Gregório de Narek, abade e doutor da Igreja',    //(4)
    gregory_vii_pope: 'São Gregório VII, papa',     // (1)
    guardian_angel_of_portugal: 'Anjo da Guarda de Portugal', // Not mentioned in the Brazilian tradition (CNBB)
    gundisalvus_of_amarante_priest: 'São Gonçalo de Amarante, presbítero',
    gundisalvus_of_lagos_priest: 'São Gonçalo de Lagos, presbítero',
    hedwig_of_silesia_religious: 'Santa Edviges, religiosa',     // (1)
    henry_ii_emperor: 'Santo Henrique',      // (1)
    hilary_of_poitiers_bishop: ' Santo Hilário, bispo e doutor da Igreja',      // (1)
    hildegard_of_bingen_abbess: 'Santa Hildegarda de Bingen, virgem e doutora da Igreja',   // (4)
    holy_family_of_jesus_mary_and_joseph: 'Sagrada Família de Jesus, Maria e José',    // (2)
    holy_guardian_angels: 'Santos Anjos da Guarda',      // (1)
    holy_innocents_martyrs: 'SANTOS INOCENTES, MÁRTIRES',       // (1)
    holy_saturday: 'Sábado Santo',
    holy_thursday: 'Quinta-feira da Semana Santa',
    ignatius_de_azevedo_priest_and_companions_martyrs: 'Bv. Inácio de Azevedo, presbítero, e companheiros, mártires',    // (1)
    ignatius_of_antioch_bishop: 'Santo Inácio de Antioquia, bispo e mártir',    // (1)
    ignatius_of_loyola_priest: 'Santo Inácio de Loiola, presbítero',    // (1)
    immaculate_conception_of_the_blessed_virgin_mary: 'IMACULADA CONCEIÇÃO DE NOSSA SENHORA',     // (1)
    immaculate_heart_of_mary: 'Imaculado Coração de Maria',
    innocent_v_pope: 'Papa Beato Inocêncio V',
    irenaeus_of_lyon_bishop: 'Santo Irineu, bispo, doutor da Igreja e mártir',    // (1)
    isabelle_of_france_virgin: 'Beata Isabel de França, virgem',
    isidore_of_seville_bishop: 'Santo Isidoro, bispo e doutor da Igreja',      // (1)
    jacinta_marto_and_francisco_marto: 'Santos Francisco Marto e Jacinta Marto',
    james_apostle: 'São Tiago, Apóstolo',     // (1)
    jane_frances_de_chantal_religious: 'Santa Joana Francisca de Chantal, religiosa',    // (1)
    januarius_i_of_benevento_bishop: 'São Januário, bispo e mártir',      // (1)
    jerome_emiliani: 'São Jerônimo Emiliani',       // (1)
    jerome_of_stridon_priest: 'São Jerônimo, presbítero e doutor da Igreja',        // (1)
    joachim_and_anne_parents_of_mary: "Santos Joaquim e Sant'Ana, pais de Nossa Senhora",    // (1)
    joan_of_portugal_virgin: 'Beata Joana de Portugal, virgem',
    john_apostle: 'SÃO JOÃO, APÓSTOLO E EVANGELISTA',     // (1)
    john_baptist_de_la_salle_priest: 'São João Batista de La Salle, presbítero',      // (1)
    john_bosco_priest: 'São João Bosco, presbítero',        // (1)
    john_chrysostom_bishop: 'São João Crisóstomo, bispo e doutor da Igreja',        // (1)
    john_damascene_priest: 'São João Damasceno, presbítero e doutor da Igreja',        // (1)
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'São João de Brébeuf e Santo Isaac Jogues, presbíteros, e seus Companheiros, mártires',      // (1)
    john_de_britto_priest: 'São João de Brito, presbítero e mártir',
    john_eudes_priest: 'São João Eudes, presbítero',      // (1)
    john_fisher_bishop_and_thomas_more_martyrs: ' São João Fisher, bispo, e São Tomás Moro, mártires',      // (1)
    john_i_pope: 'São João I, papa e mártir',       // (1)
    john_leonardi_priest: 'São João Leonardi, presbítero',      // (1)
    john_mary_vianney_priest: 'São João Maria Vianney, presbítero',      // (1)
    john_of_avila_priest: 'São João De Ávila, presbítero e doutor da Igreja', //(4)
    john_of_capistrano_priest: 'São João de Capistrano, presbítero',      // (1)
    john_of_god_duarte_cidade_religious: 'São João de Deus, religioso',
    john_of_kanty_priest: 'São João Câncio, presbítero',
    john_of_the_cross_priest: 'São João da Cruz, presbítero e doutor da Igreja',        // (6)
    john_paul_ii_pope: 'São João Paulo II, papa',      // (4)
    john_xxiii_pope: 'São João XXIII, papa',      // (4)
    josaphat_kuntsevych_bishop: 'São Josafá, bispo',      // (1)
    joseph_de_anchieta_priest: 'São José de Anchieta, presbítero',      // (4)
    joseph_of_calasanz_priest: 'São José de Calasanz, presbítero',      // (1)
    joseph_spouse_of_mary: 'SÃO JOSÉ, ESPOSO DE MARIA',     //(1)
    joseph_the_worker: 'São José Operário',     // (1)
    josephine_bakhita_virgin: 'Santa Josefina Bakhita, virgem',     // (4)
    juan_diego_cuauhtlatoatzin: 'São João Diogo',     // (4)
    justin_martyr: 'São Justino, mártir',     // (1)
    landry_of_paris_bishop: 'São Landry de Paris, bispo',
    lawrence_of_brindisi_priest: 'São Lourenço de Bríndisi, presbítero e doutor da Igreja',       // (1)
    lawrence_of_rome_deacon: 'SÃO LOURENÇO, DIÁCONO E MÁRTIR',     // (1)
    lawrence_ruiz_and_companions_martyrs: 'Santos Lourenço Ruiz e Companheiros, mártires',
    leo_i_the_great_pope: 'São Leão Magno, papa e doutor da Igreja',     // (1)
    leodegar_of_autun_bishop: 'São Leodegar de Autun, bispo e mártir',
    louis_grignion_de_montfort_priest: 'São Luís Grignion, presbítero',   // (1)
    louis_ix_of_france: 'São Luís de França',     // (1)
    louise_de_marillac_religious: 'Santa Luísa de Marillac, religiosa',
    lucy_of_syracuse_virgin: 'Santa Luzia, virgem e mártir',    // (6)
    ludan_of_scotland_pilgrim: 'São Ludan, peregrino',    // Not mentioned in the Brazilian tradition (CNBB)
    luke_evangelist: 'SÃO LUCAS, evangelista',     // (1)
    madeleine_sophie_barat_virgin: 'Santa Magdalena Sofia Barat, virgem',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'São Marcelino e São Pedro, mártires',         // (1)
    marcellus_of_paris_bishop: 'São Marcelo de Paris, bispo',
    margaret_mary_alacoque_virgin: 'Santa Margarida Maria Alacoque, virgem',     // (1)
    margaret_of_scotland: 'Santa Margarida da Escócia',     // (1)
    maria_goretti_virgin: 'Santa Maria Goretti, virgem e mártir',     // (1)
    marie_eugenie_of_jesus_milleret_de_brou_virgin: 'Santa Marie-Eugénie de Jésus Milleret de Brou, virgem e fundadora',
    mark_evangelist: 'SÃO MARCOS, evangelista',     // (1)
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Santos Irmãos marta, Maria e Lázaro',     // (4)
    martin_de_porres_religious: 'São Martinho de Lima, religioso',     // (1)
    martin_i_pope: 'São Martinho I, papa e mártir',     // (1)
    martin_of_tours_bishop: 'São Martinho de Tours, bispo',     // (1)
    mary_magdalene: 'Santa Maria Madalena',     // (1)
    mary_magdalene_de_pazzi_virgin: 'Santa Maria Madalena de Pazzi, virgem',     // (1)
    mary_mother_of_god: 'SANTA MARIA, MÃE DE DEUS',     // (1)
    mary_mother_of_the_church: 'Bem-aventurada Virgem Maria, Mãe da Igreja',    // (4)
    mary_of_the_incarnation_barbara_acarie_religious: 'Beata Maria da Encarnação Bárbara Acarie, religiosa',
    mary_of_the_incarnation_marie_guyart_religious: 'Santa Maria da Encarnação Maria Guyart, religiosa',
    mary_of_the_providence_eugenie_smet_virgin: 'Beata Maria da Providência Eugênia Smet, virgem',
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin:
      'Beata Maria Teresa de Soubiran La Louvière, virgem',
    maternus_of_cologne_bishop: 'São Materno, bispo',
    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: 'Santos Materno, Valério e Eucário, bispos',
    matthew_apostle: 'SÃO MATEUS, APÓSTOLO E EVANGELISTA',     // (1)
    matthias_apostle: 'São Matias, apóstolo',       // (1)
    maximilian_mary_raymund_kolbe_priest: 'São Maximiliano Maria Kolbe, presbítero e mártir',       // (1)
    mederic_of_autun_and_droctoveus_of_autun_abbots: 'Santos Mederico e Droctoveo, abades',
    michael_gabriel_and_raphael_archangels: 'SÃO MIGUEL, SÃO GABRIEL E SÃO RAFAEL, ARCANJOS',     // (1)
    modestus_andlauer_and_andrew_bauer_martyrs: 'Santos Modesto Andlauer e André Bauer, mártires',
    modestus_andlauer_martyr: 'São Modesto Andlauer, mártir',
    monica_of_hippo: 'Santa Mônica',     // (1)
    morand_of_cluny_monk: 'São Morando, monge',
    most_holy_body_and_blood_of_christ: 'Satíssimo Corpo e Sangue de Cristo',     // (2)
    most_holy_name_of_jesus: 'Santíssimo Nome de Jesus',
    most_holy_name_of_mary: 'Santíssimo Nome da Bem-aventurada Virgem Maria',   // (4)
    most_holy_trinity: 'Santíssima Trindade',     // (2)
    most_sacred_heart_of_jesus: 'Sagrado Coração de Jesus',     // (2)
    nativity_of_john_the_baptist: 'NATIVIDADE DE SÃO JOÃO BATISTA',     // (1)
    nativity_of_the_blessed_virgin_mary: 'NATIVIDADE DE NOSSA SENHORA',     // (1)
    nativity_of_the_lord: 'NATAL DO SENHOR',     // (1)
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'São Nereu e Santo Aquiles, mártires',     // (1)
    nicholas_barre_priest: 'São Nicolau de Mira (ou de Bari), presbítero',    //  (6)
    nicholas_of_myra_bishop: 'São Nicolau, bispo',       // (1)
    norbert_of_xanten_bishop: 'São Norberto, bispo',       // (1)
    nuno_of_saint_mary_pereira_religious: 'São Nuno de Santa Maria, religioso',
    odile_of_alsace_abbess: 'Santa Odília, abadessa',
    odile_of_alsace_abbess_patroness_of_alsace: 'Santa Odília, abadessa, patrona da Alsácia',
    our_lady_help_of_christians: 'Nossa Senhora, Auxílio dos Cristãos',
    our_lady_mediatrix_of_all_grace: 'Nossa Senhora, Medianeira de todas as Graças',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico: 'Nossa Senhora, Mãe da Divina Providência',
    // https://www.cnbb.org.br/62-missionarios-de-todas-as-regioes-do-brasil-participam-do-congresso-americano-missionario-6-em-ponce-porto-rico/
    our_lady_of_aparecida: 'NOSSA SENHORA DA CONCEIÇÃO APARECIDA',     // (1)
    our_lady_of_aparecida_patroness_of_brazil: 'NOSSA SENHORA DA CONCEIÇÃO APARECIDA, padroeira do Brasil',     // (3)
    our_lady_of_china: 'Nossa Senhora da China',  // Not mentioned in the Brazilian tradition (CNBB)
    our_lady_of_fatima: 'Bem-aventurada Virgem Maria de Fátima',  // (4)
    our_lady_of_good_counsel: 'Nossa Senhora do Bom Conselho',
    our_lady_of_guadalupe: 'Nossa Senhora de Guadalupe', // https://www.cnbb.org.br/nossa-senhora-de-guadalupe-4/
    our_lady_of_hungary_patroness_of_hungary: 'Nossa Senhora da Hungria',
    our_lady_of_loreto: 'Bem-aventurada Virgem Maria de Loreto',      // (4)
    our_lady_of_lourdes: 'Nossa Senhora de Lourdes',      // (1)
    our_lady_of_lujan_patroness_of_argentina: 'Nossa Senhora de Luján, padroeira da Argentina',
    our_lady_of_mount_carmel: 'Nossa Senhora do Carmo',      // (1)
    our_lady_of_perpetual_help: 'Nossa Senhora do Perpétuo Socorro',
    our_lady_of_sorrows: 'Nossa Senhora das Dores',       // (1)
    our_lady_of_the_gate_of_dawn: 'Nossa Senhora da Porta da Aurora',
    our_lady_of_the_miraculous_medal: 'Nossa Senhora da Medalha Milagrosa',
    our_lady_of_the_pillar: 'Nossa Senhora do Pilar',
    our_lady_of_the_rosary: 'Nossa Senhora do Rosário',      // (1)
    our_lady_queen_of_peace: 'Nossa Senhora Rainha da Paz',
    our_lady_refuge_of_sinners: 'Nossa Senhora, Refúgio dos Pecadores',
    our_lord_jesus_christ_king_of_the_universe: 'Nosso Senhor Jesus Cristo, Rei do Universo',     // (2)
    palm_sunday_of_the_passion_of_the_lord: 'Domingo de Ramos da Paixão do Senhor',     // (2)
    pancras_of_rome_martyr: 'São Pancrácio',         // (1)
    passion_of_saint_john_the_baptist: 'Martírio de São João Batista',    // (1)
    patrick_of_ireland_bishop: 'São Patrício, bispo',        //(1)
    paul_miki_and_companions_martyrs: 'Santos Paulo Miki e Companheiros, mártires',   // (1)
    paul_of_the_cross_priest: 'São Paulo da Cruz, presbítero',        // (1)
    paul_vi_pope: 'São Paulo VI, papa',      //(4)
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin:
      'Santa Paulina do Coração Agonizante de Jesus, virgem',     // (3) (4)
    paulinus_of_nola_bishop: 'São Paulino de Nola, bispo',        // (1)
    pentecost_sunday: 'Domingo de Pentecostes',         // (2)
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Santa Perpétua e Santa Felicidade, mártires',        // (1)
    peter_and_paul_apostles: 'SÃO PEDRO E SAO PAULO, APÓSTOLOS',        // (1)
    peter_canisius_priest: 'São Pedro Canísio, presbítero e doutor da Igreja',        // (1)
    peter_chanel_priest: 'São Pedro Chanel, presbítero e mártir',
    peter_chrysologus_bishop: 'São Pedro Crisólogo, bispo e doutor da Igreja',        // (1)
    peter_claver_priest: 'São Pedro Claver, presbítero',        // (1)
    peter_damian_bishop: 'São Pedro Damião, bispo e doutor da Igreja',        // (1)
    peter_julian_eymard_priest: 'São Pedro Juliano Eymard, presbítero',        // (1)
    peter_of_alcantara_priest: 'São Pedro de Alcântara, presbítero',        // (4)
    philip_and_james_apostles: 'São Filipe e São Tiago, apóstolos',        // (1)
    philip_neri_priest: 'São Filipe Néri, presbítero',    //  (1)
    pius_francesco_forgione_priest: 'São Pio de Pietrelcina, presbítero',   // (4)
    pius_v_pope: 'São Pio V, papa',       // (1)
    pius_x_pope: 'São Pio X, papa',       // (1)
    polycarp_of_smyrna_bishop: 'São Policarpo, bispo e mártir',     // (1)
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Santos Ponciano, papa, e Santo Hipólito, presbítero',     // (1)
    presentation_of_the_blessed_virgin_mary: 'Apresentação de Nossa Senhora',     // (1)
    presentation_of_the_lord: 'APRESENTAÇÃO DO SENHOR',     // (1)
    queenship_of_the_blessed_virgin_mary: 'Nossa Senhora, Rainha',     // (1)
    raymond_of_penyafort_priest: 'São Raimundo de Penyafort, presbítero',     // (1)
    richardis_of_swabia_empress: 'Santa Ricarda, imperatriz',
    rita_of_cascia_religious: 'Santa Rita de Cássia, religiosa',        // (4)
    robert_bellarmine_bishop: 'São Roberto Belarmino, bispo e doutor da Igreja',        // (1)
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests:
      'São Roque González, São Afonso Rodríguez e São João del Castillo, presbíteros e mártires',      // (1)
    romuald_of_ravenna_abbot: 'São Romualdo, abade',      // (1)
    rosalie_jeanne_marie_rendu_virgin: 'Beata Rosália Rendu, virgem',
    rose_of_lima_virgin: 'SANTA ROSA DE LIMA, VIGEM',    // (1)
    sancha_of_portugal_and_mafalda_of_portugal_virgins: 'Beatas Sancha e Mafalda, virgens, e Teresa, religiosa',
    scholastica_of_nursia_virgin: 'Santa Escolástica, virgem',      // (1)
    sebastian_of_milan_martyr: 'São Sebastião, mártir',     //(1)
    seven_holy_founders_of_the_servite_order: 'Santos Sete Fundadores dos Servitas',    // (1)
    sharbel_makhluf_priest: 'São Charbel Makhluf, presbítero',
    simon_and_jude_apostles: 'SÃO SIMÃO E SAO JUDAS, APÓSTOLOS',        // (1)
    sixtus_ii_pope_and_companions_martyrs: 'São Sisto II, papa, e seus companheiros, mártires',      // (1)
    stanislaus_of_szczepanow_bishop: 'Santo Estanislau, bispo e mártir',      // (1)
    stephen_i_of_hungary: 'Santo Estêvão da Hungria',      // (1)
    stephen_the_first_martyr: 'SANTO ESTEVÃO, PRIMEIRO MÁRTIR',      // (1)
    sunday_of_the_word_of_god: '3º Domingo do Tempo Comum, ou Domingo da Palavra de Deus',
    sylvester_i_pope: 'São Silvestre I, papa',      // (1)
    teresa_benedicta_of_the_cross_stein_virgin: 'Santa Teresa Benedita da Cruz, virgem e mártir',
    // src: https://www.cnbb.org.br/liturgia-diaria/ 15-Oct-2025 (Retrieved 24-Jun-2025)
    teresa_of_jesus_of_avila_virgin: 'Santa Teresa de Jesus, virgem e doutora da Igreja',    // (1)
    teresa_of_portugal_religious: 'Beata Teresa de Portugal, religiosa',
    theotonius_of_coimbra_priest: 'Santo Teotónio, presbítero',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Santa Teresa do Menino Jesus, virgem',      // (1)
    thomas_apostle: 'São Tomé, apóstolo',      // (1)
    thomas_aquinas_priest: 'Santo Tomás de Aquino, presbítero e doutor da Igreja',    // (1)
    thomas_becket_bishop: 'São Tomás Becket, bispo e mártir',      // (1)
    thomas_jean_georges_rehm_priest: 'Beato Tomás João Jorge Rehm, presbítero e mártir',
    thursday_of_the_lords_supper: 'Ceia do Senhor',
    timothy_of_ephesus_and_titus_of_crete_bishops: 'São Timóteo e São Tito, bispos',    // (1)
    transfiguration_of_the_lord: 'TRANSFIGURAÇÃO DO SENHOR',      // (1)
    translation_of_the_relics_of_odile_of_alsace_abbess: 'Trasladação dos restos mortais da Santa Odília',
    turibius_of_mogrovejo_bishop: 'São Turíbio de Mongrovejo, bispo',     // (1)
    urban_i_pope: 'Papa São Urbano I',
    valerius_of_trier_bishop: 'São Valério, bispo',
    vincent_de_paul_priest: 'São Vicente de Paulo, presbítero',      // (1)
    vincent_ferrer_priest: 'São Vicente Ferrer, presbítero',      // (1)
    vincent_of_saragossa_deacon: 'São Vicente, diácono e mártir',     // (1)
    visitation_of_mary: 'VISITAÇÃO DE NOSSA SENHORA',      // (1)
    wenceslaus_i_of_bohemia_martyr: 'São Venceslau, mártir',    // (1)
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation: 'São Venceslau, mártir e patrono da nação tcheca',
    wendelin_of_trier_hermit: 'São Vendelino, eremita',
  },
};
/*
 Sources (revision on 2025, jun):
  (1) Palavra do Senhor III - Lecionário para as missas dos Santos, dos comuns,
      para diversas necessidades e votivas - Ed. Paulus (Lectionary for the Masses of Saints)
      Respecting Upper and LowerCase (https://archive.org/details/lecionario-santoral-indice)
  (2) Palavra do Senhor I - Lecionário Dominical A-B-C - Ed. Paulus (Lectionary for the Masses - Sunday)
      Respecting Upper and LowerCase (https://archive.org/details/lecionario-dominical-indice)
  (3) Diretório Da Liturgia Da Igreja No Brasil (Vários Anos) - Edições CNBB - (Liturgical
      directory from several years - By CNBB -The National Conference of Bishops of Brazil)
      eBook on Google Play (Not free)
  (4) Calendário Próprio do Brasil - CNBB (https://www.cnbb.org.br/missal-romano-calendario-proprio-dos-santos-brasil/)
  (5) https://www.cnbb.org.br/liturgia-diaria/
  (6) https://www.cnbb.org.br/pascom-brasil-da-dicas-de-criacao-de-conteudo/
*/
