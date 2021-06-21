import { Locale } from '../types/locale';

export const locale: Locale = {
  key: 'pt-br',

  roman_rite: {
    seasons: {
      advent: {
        season: 'Advento',
        weekday:
          '{{day, capitalize}} da $t(ordinals:{{week}}, { "context": "feminine" }) semana do Advento',
        sunday: '$t(ordinals:{{week}}, capitalize) Domingo do Advento',
      },

      christmastide: {
        season: 'Natal',
        day: '{{day, capitalize}} do Tempo do Natal',
        octave: '{{count}}º dia da Oitava de Natal',
        second_sunday_after_christmas: 'Segundo Domingo do Natal',
        before_epiphany: '{{day, capitalize}} antes da Epifania do Senhor',
        after_epiphany: '{{day, capitalize}} depois da Epifania do Senhor',
      },

      ordinary_time: {
        season: 'Tempo Comum',
        weekday:
          '{{day, capitalize}} da $t(ordinals:{{week}}, { "context": "feminine" }) semana do Tempo Comum',
        sunday: '$t(ordinals:{{week}}, capitalize) Domingo do Tempo Comum',
      },

      lent: {
        season: 'Quaresma',
        weekday:
          '{{day, capitalize}} da $t(ordinals:{{week}}, { "context": "feminine" }) semana da Quaresma',
        sunday: '$t(ordinals:{{week}}, capitalize) Domingo da Quaresma',
        day_after_ash_wed:
          '{{day, capitalize}} depois da Quarta-feira de Cinzas',
        holy_week_day: '{{day, capitalize}} of Semana Santa',
      },

      paschal_triduum: {
        season: 'Tríduo Pascal',
      },

      eastertide: {
        season: 'Páscoa',
        weekday:
          '{{day, capitalize}} da $t(ordinals:{{week}}, { "context": "feminine" }) semana do Tempo Pascal',
        sunday: '$t(ordinals:{{week}}, capitalize) Domingo do Tempo Pascal',
        octave: 'Tempo Pascal {{day}}',
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

    celebrations: {
      all_saints: 'Todos os Santos',
      annunciation: 'Anunciação do Senhor',
      ascension: 'Ascensão do Senhor',
      ash_wednesday: 'Quarta-feira de Cinzas',
      assumption: 'Assunção da Bem Aventurada Virgem Maria',
      baptism_of_the_lord: 'Batismo do Senhor',
      christ_the_king_sunday: 'Cristo Rei do Universo',
      christmas: 'Natal',
      corpus_christi: 'Corpus Christi',
      divine_mercy_sunday: 'Domingo da Misericórdia',
      easter_sunday: 'Domingo da Páscoa',
      epiphany: 'Epifania do Senhor',
      exaltation_of_the_holy_cross: 'Exaltação da Santa Cruz',
      good_friday: 'Sexta-feira Santa',
      holy_family: 'Sagrada Família',
      holy_saturday: 'Sábado Santo',
      holy_thursday: 'Quinta-feira Santa',
      immaculate_conception_of_mary: 'Imaculada Conceição',
      immaculate_heart_of_mary: 'Imaculado Coração de Maria',
      joseph_spouse_of_mary: 'São José, esposo de Maria',
      mary_mother_of_god: 'Maria, Mãe de Deus',
      most_sacred_heart_of_jesus: 'Sagrado Coração de Jesus',
      nativity_of_john_the_baptist: 'Nascimento de João Batista',
      palm_sunday: 'Domingo de Ramos',
      pentecost_sunday: 'Pentecostes',
      peter_and_paul_apostles: 'São Pedro e São Paulo, Apóstolos',
      presentation_of_the_lord: 'Apresentação do Senhor',
      transfiguration: 'Transfiguração do Senhor',
      trinity_sunday: 'Santíssima Trindade',
    },
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

  martyrology: {
    gregory_of_narek_abbot: 'São Gregório de Narek, abade e doutor da Igreja',
    hildegard_of_bingen_abbess:
      'Santa Hildegarda de Bingen, virgem e doutora da Igreja',
    john_of_avila_priest: 'São João De Ávila, presbítero e doutor da Igreja',
    john_paul_ii_pope: 'Papa São João Paulo II',
    john_xxiii_pope: 'Papa São João XXIII',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'Santa Marta, Maria e Lázaro',
    our_lady_help_of_christians: 'Nossa Senhora, Auxílio dos Cristãos',
    our_lady_mediatrix_of_all_grace:
      'Nossa Senhora, Medianeira de todas as Graças',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico:
      'Nossa Senhora, Mãe da Divina Providência', // TODO: Add `Patronness of Porto Rico` title
    our_lady_of_aparecida_patroness_of_brazil: 'Nossa Senhora Aparecida', // TODO: Add `Patronness of Brazil` title
    our_lady_of_china: 'Nossa Senhora da China',
    our_lady_of_fatima: 'Nossa Senhora de Fatima',
    our_lady_of_good_counsel: 'Nossa Senhora do Bom Conselho',
    our_lady_of_guadalupe: 'Nossa Senhora de Guadalupe',
    our_lady_of_hungary_patroness_of_hungary: 'Nossa Senhora da Hungria', // TODO: Translate `Out Lady of Hungary, Patroness of Hungary`
    our_lady_of_loreto: 'Nossa Senhora de Loreto',
    our_lady_of_lourdes: 'Nossa Senhora de Lourdes',
    our_lady_of_lujan_patroness_of_argentina:
      'Nossa Senhora de Luján, padroeira da Argentina',
    our_lady_of_mount_carmel: 'Nossa Senhora do Monte Carmelo',
    our_lady_of_perpetual_help: 'Nossa Senhora do Perpétuo Socorro',
    our_lady_of_the_gate_of_dawn: 'Nossa Senhora da Porta da Aurora',
    our_lady_of_the_pillar: 'Nossa Senhora do Pilar',
    our_lady_of_the_rosary: 'Nossa Senhora do Rosário',
    our_lady_queen_of_peace: 'Nossa Senhora Rainha da Paz',
    presentation_of_mary: 'Apresentação da Virgem Maria',
    wenceslaus_i_of_bohemia_martyr: 'São Venceslau, mártir',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'São Venceslau, mártir e patrono da nação tcheca',
  },
};
