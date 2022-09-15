import { Locale } from '../types/locale';

export const locale: Locale = {
  key: 'pt-br',

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
    adelaide_of_burgundy_empress: 'Santa Adelaide de Borgonha, imperatriz',
    adelphus_of_metz_bishop: 'São Adelfus de Métis, bispo',
    all_saints: 'Todos os Santos',
    all_saints_of_the_archdiocese_of_paris: 'Todos os Santos da Arquidiocese de Paris',
    alphonsus_mary_liguori_bishop: 'Santo Afonso Maria Liguori, bispo e doutor da Igreja',
    amandus_of_strasbourg_bishop: 'São Amand de Estrasburgo, bispo',
    amarin_of_alsace_abbot: 'São Amarino, abade e mártir',
    annunciation_of_the_lord: 'Anunciação do Senhor',
    arbogast_of_strasbourg_bishop: 'São Arbogasto, bispo',
    arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg:
      'São Arbogasto, bispo e patrono da Arquidiocese de Estrasburgo',
    ascension_of_the_lord: 'Ascensão do Senhor',
    ash_wednesday: 'Quarta-feira de Cinzas',
    assumption_of_the_blessed_virgin_mary: 'Assunção da Bem Aventurada Virgem Maria',
    audoen_of_rouen_bishop: 'São Audoeno, bispo',
    aurelia_of_strasbourg_virgin: 'Santa Aurélia de Estrasburgo, virgem',
    baptism_of_the_lord: 'Batismo do Senhor',
    benedict_of_aniane_abbot: 'São Bento de Aniane, abade',
    blessed_martyrs_of_paris: 'Beatos mártires da Revolução Francesa',
    brigid_of_kildare_virgin: 'Santa Brígida de Kildare, abadessa',
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Santa Brígida de Kildare, virgem e copatrona da Irlanda',
    carmelites_of_compiegne_virgins_and_martyrs: 'Beatas Carmelitas de Compiègne, virgens e mártires',
    catherine_zoe_laboure_virgin: 'Santa Catarina Labouré, virgem',
    ceraunus_of_paris_bishop: 'São Cerauno de Paris, bispo',
    charles_of_jesus_de_foucauld: 'São Carlos de Foucauld, presbítero',
    commemoration_of_all_the_faithful_departed: 'Comemoração de Todos os Fiéis Defuntos',
    daniel_brottier_priest: 'Beato Daniel Brottier, presbítero',
    dedication_of_the_cathedral_basilica_of_saint_denis_france: 'Dedicação da Catedral Basílica de Saint-Denis, França',
    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france:
      'Dedicação da Catedral de Notre-Dame de Estrasburgo, França',
    dedication_of_the_notre_dame_de_paris_cathedral_paris_france:
      'Dedicação da Catedral de Notre-Dame de Paris, França',
    denis_of_paris_bishop_and_companions_martyrs: 'São Dionísio, bispo, e companheiros, mártires',
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris:
      'São Dionísio, bispo e mártir, patrono da Arquidiocese de Paris',
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis:
      'São Dionísio, bispo e mártir, patrono da Cidade e da Diocese de Saint-Denis',
    divine_mercy_sunday: '{{week}}º Domingo do Tempo Pascal ou Domingo da Misericórdia',
    easter_sunday: 'Domingo da Páscoa',
    eligius_of_noyon_bishop: 'Santo Elígio, bispo',
    epiphany_of_the_lord: 'Epifania do Senhor',
    eucharius_of_trier_bishop: 'Santo Eucario, bispo',
    eugenia_of_alsace_and_attala_of_alsace_virgins: 'Santas Eugenia e Attala, virgens',
    exaltation_of_the_holy_cross: 'Exaltação da Santa Cruz',
    florentius_of_strasbourg_bishop: 'São Florêncio, bispo',
    frederic_ozanam_founder: 'Beato Frederico Ozanam, fundador',
    friday_of_the_passion_of_the_lord: 'Sexta-feira Santa',
    germain_of_paris_bishop: 'São Germano, bispo',
    gregory_of_narek_abbot: 'São Gregório de Narek, abade e doutor da Igreja',
    hildegard_of_bingen_abbess: 'Santa Hildegarda de Bingen, virgem e doutora da Igreja',
    holy_family_of_jesus_mary_and_joseph: 'Sagrada Família',
    holy_saturday: 'Sábado Santo',
    holy_thursday: 'Quinta-feira Santa',
    immaculate_conception_of_the_blessed_virgin_mary: 'Imaculada Conceição',
    immaculate_heart_of_mary: 'Imaculado Coração de Maria',
    innocent_v_pope: 'Papa Beato Inocêncio V',
    isabelle_of_france_virgin: 'Beata Isabel de França, virgem',
    john_of_avila_priest: 'São João De Ávila, presbítero e doutor da Igreja',
    john_paul_ii_pope: 'Papa São João Paulo II',
    john_xxiii_pope: 'Papa São João XXIII',
    joseph_spouse_of_mary: 'São José, esposo de Maria',
    landry_of_paris_bishop: 'São Landry de Paris, bispo',
    leodegar_of_autun_bishop: 'São Leodegar de Autun, bispo e mártir',
    louise_de_marillac_religious: 'Santa Luísa de Marillac, religiosa',
    ludan_of_scotland_pilgrim: 'São Ludan, peregrino',
    madeleine_sophie_barat_virgin: 'Santa Magdalena Sofia Barat, virgem',
    marcellus_of_paris_bishop: 'São Marcelo de Paris, bispo',
    marie_eugenie_of_jesus_milleret_de_brou_virgin: 'Santa Marie-Eugénie de Jésus Milleret de Brou, virgem e fundadora',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Santa Marta, Maria e Lázaro',
    mary_mother_of_god: 'Maria, Mãe de Deus',
    mary_of_the_incarnation_barbara_acarie_religious: 'Beata Maria da Encarnação Bárbara Acarie, religiosa',
    mary_of_the_incarnation_marie_guyart_religious: 'Santa Maria da Encarnação Maria Guyart, religiosa',
    mary_of_the_providence_eugenie_smet_virgin: 'Beata Maria da Providência Eugênia Smet, virgem',
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin:
      'Beata Maria Teresa de Soubiran La Louvière, virgem',
    maternus_of_cologne_bishop: 'São Materno, bispo',
    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: 'Santos Materno, Valério e Eucário, bispos',
    maximilian_mary_raymund_kolbe_priest: 'São Maximiliano Maria Kolbe, presbítero e mártir',
    mederic_of_autun_and_droctoveus_of_autun_abbots: 'Santos Mederico e Droctoveo, abades',
    modestus_andlauer_and_andrew_bauer_martyrs: 'Santos Modesto Andlauer e André Bauer, mártires',
    modestus_andlauer_martyr: 'São Modesto Andlauer, mártir',
    morand_of_cluny_monk: 'São Morando, monge',
    most_holy_body_and_blood_of_christ: 'Corpus Christi',
    most_holy_trinity: 'Santíssima Trindade',
    most_sacred_heart_of_jesus: 'Sagrado Coração de Jesus',
    nativity_of_john_the_baptist: 'Nascimento de João Batista',
    nativity_of_the_lord: 'Natal',
    nicholas_barre_priest: 'Beato Nicolau Barré, presbítero',
    odile_of_alsace_abbess: 'Santa Odília, abadessa',
    odile_of_alsace_abbess_patroness_of_alsace: 'Santa Odília, abadessa, patrona da Alsácia',
    our_lady_help_of_christians: 'Nossa Senhora, Auxílio dos Cristãos',
    our_lady_mediatrix_of_all_grace: 'Nossa Senhora, Medianeira de todas as Graças',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico: 'Nossa Senhora, Mãe da Divina Providência',
    our_lady_of_aparecida_patroness_of_brazil: 'Nossa Senhora Aparecida',
    our_lady_of_china: 'Nossa Senhora da China',
    our_lady_of_fatima: 'Nossa Senhora de Fatima',
    our_lady_of_good_counsel: 'Nossa Senhora do Bom Conselho',
    our_lady_of_guadalupe: 'Nossa Senhora de Guadalupe',
    our_lady_of_hungary_patroness_of_hungary: 'Nossa Senhora da Hungria',
    our_lady_of_loreto: 'Nossa Senhora de Loreto',
    our_lady_of_lourdes: 'Nossa Senhora de Lourdes',
    our_lady_of_lujan_patroness_of_argentina: 'Nossa Senhora de Luján, padroeira da Argentina',
    our_lady_of_mount_carmel: 'Nossa Senhora do Monte Carmelo',
    our_lady_of_perpetual_help: 'Nossa Senhora do Perpétuo Socorro',
    our_lady_of_the_gate_of_dawn: 'Nossa Senhora da Porta da Aurora',
    our_lady_of_the_miraculous_medal: 'Nossa Senhora da Medalha Milagrosa',
    our_lady_of_the_pillar: 'Nossa Senhora do Pilar',
    our_lady_of_the_rosary: 'Nossa Senhora do Rosário',
    our_lady_queen_of_peace: 'Nossa Senhora Rainha da Paz',
    our_lady_refuge_of_sinners: 'Nossa Senhora, Refúgio dos Pecadores',
    our_lord_jesus_christ_king_of_the_universe: 'Cristo Rei do Universo',
    palm_sunday_of_the_passion_of_the_lord: 'Domingo de Ramos',
    pentecost_sunday: 'Pentecostes',
    peter_and_paul_apostles: 'São Pedro e São Paulo, Apóstolos',
    pius_francesco_forgione_priest: 'São Pio de Pietrelcina, presbítero',
    presentation_of_the_blessed_virgin_mary: 'Apresentação da Virgem Maria',
    presentation_of_the_lord: 'Apresentação do Senhor',
    richardis_of_swabia_empress: 'Santa Ricarda, imperatriz',
    rosalie_jeanne_marie_rendu_virgin: 'Beata Rosália Rendu, virgem',
    sunday_of_the_word_of_god: '{{week}}º Domingo do Tempo Comum, ou Domingo da Palavra de Deus',
    thomas_jean_georges_rehm_priest: 'Beato Tomás João Jorge Rehm, presbítero e mártir',
    thursday_of_the_lords_supper: '$(names:holy_thursday)',
    transfiguration_of_the_lord: 'Transfiguração do Senhor',
    translation_of_the_relics_of_odile_of_alsace_abbess: 'Trasladação dos restos mortais da Santa Odília',
    urban_i_pope: 'Papa São Urbano I',
    valerius_of_trier_bishop: 'São Valério, bispo',
    wenceslaus_i_of_bohemia_martyr: 'São Venceslau, mártir',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation: 'São Venceslau, mártir e patrono da nação tcheca',
    wendelin_of_trier_hermit: 'São Vendelino, eremita',
  },
};
