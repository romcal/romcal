import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'hu',

  seasons: {
    advent: {
      season: 'Adventi idő',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=29
              weekday: 'Advent {{week, romanize}}. hete $t(weekdays:{{dow}})',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-advent-ii.-hete-hetfo-80378
      sunday: 'Advent {{week, romanize}}. vasárnapja',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=30
      privileged_weekday: '$t(months:11, capitalize) {{day}}.',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-december-17.-szombat-80429
    },

    christmas_time: {
      season: 'Karácsonyi idő',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=40
      day: '$t(weekdays:{{dow}}, capitalize) karácsonyi időben',
      octave: 'Karácsony nyolcada alatti $t(ordinals:{{count}}, romanize). nap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=43
      second_sunday_after_christmas: 'Karácsony utáni II. vasárnap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=46
      before_epiphany: '$t(months:0, capitalize) {{day}}.',
      after_epiphany: '$t(weekdays:{{dow}}, capitalize) az Úrunk megjelenése után',
    },

    ordinary_time: {
      season: 'Évközi idő',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=50
      weekday: '$t(weekdays:{{dow}}, capitalize) évközi időben, {{week, romanize}}. hét',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-k-o-m-p-l-e-t-o-r-i-u-m-csutortok-evkozi-idoben-i.-het-77548
      sunday: 'Évközi {{week, romanize}}. vasárnap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=52
    },

    lent: {
      season: 'Nagyböjti idő',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=67
      weekday: '$t(weekdays:{{dow}}, capitalize) nagyböjtben, {{week, romanize}}. hét',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-pentek-nagybojtben-i.-het-70402
      sunday: 'Nagyböjt {{week, romanize}}. vasárnapja',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=70
      day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) Hamvazószerda után',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-pentek-hamvazoszerda-utan-69960
      holy_week_day: 'Nagy$t(weekdays:{{dow}}, capitalize)',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=80
    },

    paschal_triduum: {
      season: 'A Húsvéti Szent Háromnap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=82
    },

    easter_time: {
      season: 'Húsvéti idő',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=89
      weekday: '$t(weekdays:{{dow}}, capitalize) húsvét {{week, romanize}}. hetében',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-hetfo-husvet-ii.-heteben-94426
      sunday: 'Húsvét {{week, romanize}}. vasárnapja',  // src: https://kattima.hu/hu/app/pray/bences-zsolozsma-l-a-u-d-e-s-husvet-iii.-vasarnapja-94450
      octave: '$t(weekdays:{{dow}}, capitalize) húsvét nyolcadában',  // src: https://kattima.hu/hu/app/prayer-list/111?date=2023-04-11
    },
  },

  periods: {
    epiphany: 'Urunk megjelenése',  // based on: mr_hu_1991_ed2
    holy_week: 'Nagyhét',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=14
  },

  ranks: {
    solemnity: 'főünnep',  // src: mr_hu_1991_ed2
    sunday: 'vasárnap',  // src: mr_hu_1991_ed2
    feast: 'ünnep',  // src: mr_hu_1991_ed2
    memorial: 'emléknap',  // src: mr_hu_1991_ed2
    weekday: 'hétköznap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=29
  },

  cycles: {
    proper_of_time: 'temporále',  // src: http://nyilvanos.otka-palyazat.hu/index.php?menuid=930&num=109058
    proper_of_saints: 'szanktorále',  // src: http://vallastudomany.elte.hu/sites/default/files/kiadvanyok/MRH3%20BS/BS_Kutata%CC%81sto%CC%88rte%CC%81neti%20a%CC%81ttekinte%CC%81s.pdf#page=5
    sunday_year_a: 'A év',
    sunday_year_b: 'B év',
    sunday_year_c: 'C év',
    weekday_year_1: 'I. év',
    weekday_year_2: 'II. év',
    psalter_week_1: 'I. zsoltárhét',
    psalter_week_2: 'II. zsoltárhét',
    psalter_week_3: 'III. zsoltárhét',
    psalter_week_4: 'IV. zsoltárhét',
  },

  weekdays: {
    0: 'vasárnap',
    1: 'hétfő',
    2: 'kedd',
    3: 'szerda',
    4: 'csütörtök',
    5: 'péntek',
    6: 'szombat',
  },

  months: {
    0: 'január',
    1: 'február',
    2: 'március',
    3: 'április',
    4: 'május',
    5: 'június',
    6: 'július',
    7: 'augusztus',
    8: 'szeptember',
    9: 'október',
    10: 'november',
    11: 'december',
  },

  colors: {
    black: 'fekete',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=172
    gold: 'arany',
    green: 'zöld',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=135
    purple: 'viola',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=172
    red: 'piros',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=176
    rose: 'rózsaszín',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=35
    white: 'fehér',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=135
  },

  ordinals: {
    '1': 'első',
    '2': 'második',
    '3': 'harmadik',
    '4': 'negyedik',
    '5': 'ötödik',
    '6': 'hatodik',
    '7': 'hetedik',
    '8': 'nyolcadik',
    '9': 'kilencedik',
    '10': 'tizedik',
    '11': 'tizenegyedik',
    '12': 'tizenkettedik',
    '13': 'tizenharmadik',
    '14': 'tizennegyedik',
    '15': 'tizenötödik',
    '16': 'tizenhatodik',
    '17': 'tizenhetedik',
    '18': 'tizennyolcadik',
    '19': 'tizenkilencedik',
    '20': 'huszadik',
    '21': 'huszonegyedik',
    '22': 'huszonkettedik',
    '23': 'huszonharmadik',
    '24': 'huszonnegyedik',
    '25': 'huszonötödik',
    '26': 'huszonhatodik',
    '27': 'huszonhetedik',
    '28': 'huszonnyolcadik',
    '29': 'huszonkilencedik',
    '30': 'harmincadik',
    '31': 'harmincegyedik',
    '32': 'harminckettedik',
    '33': 'harmincharmadik',
    '34': 'harmincnegyedik',
  },

  names: {
    // '205_blessed_martyrs_of_japan': '205 Blessed Martyrs of Japan',
    adalbert_of_prague_bishop: 'Szent Adalbert püspök és vértanú',  // src: mr_hu_1991_ed2
    adalbert_of_prague_bishop_patron_of_poland: 'Szent Adalbert püspök és vértanú, Legyelország védőszentje',  // src: mr_hu_1991_ed2
    // adelaide_of_burgundy_empress: 'Saint Adelaide of Burgundy, Empress',
    // adelphus_of_metz_bishop: 'Saint Adelphus, Bishop',
    // adolph_kolping_priest: 'Blessed Adolph Kolping, Priest',
    // aelred_of_rievaulx_abbot: 'Saint Aelred of Rievaulx, Abbot',
    // aengus_of_tallaght_bishop: 'Saint Aengus, Bishop and Abbot',
    agatha_of_sicily_virgin: 'Szent Ágota szűz és vértanú',  // src: mr_hu_1991_ed2
    // agnes_cao_guiying_martyr: 'Saint Agnes Cao Guiying, Martyr',
    agnes_of_bohemia_virgin: 'Prágai Szent Ágnes szűz',  // src: mr_hu_1991_ed2
    agnes_of_rome_virgin: 'Szent Ágnes szűz és vértanú',  // src: mr_hu_1991_ed2
    // aidan_of_ferns_bishop: 'Saint Aidan, Bishop',
    // aidan_of_lindisfarne_bishop: 'Saint Aidan of Lindisfarne, Bishop and Missionary',
    // aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne: 'Saint Aidan, Bishop, and the Saints of Lindisfarne',
    // ailbe_of_emly_bishop: 'Saint Ailbe, Bishop',
    // alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs: 'Saints Alban, Julius and Aaron, Martyrs',
    // alban_of_britain_martyr: 'Saint Alban, Martyr',
    // alberic_crescitelli_priest: 'Saint Alberic Crescitelli, Priest and Martyr',
    // albert_chmielowski_religious: 'Saint Albert Chmielowski, Religious',
    albert_the_great_bishop: 'Nagy Szent Albert püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // albertina_berkenbrock_virgin: 'Blessed Albertina Berkenbrock, Virgin and Martyr',
    // alberto_hurtado_priest: 'Saint Alberto Hurtado, Priest',
    all_saints: 'Mindenszentek',  // src: mr_hu_1991_ed2
    // all_saints_of_ireland: 'All Saints of Ireland',
    // all_saints_of_the_archdiocese_of_paris: 'All Saints of the Archdiocese of Paris',
    // all_saints_of_the_diocese_of_saint_denis: 'All Saints of the Diocese of Saint-Denis',
    // all_saints_of_wales: 'All Saints of Wales',
    aloysius_gonzaga_religious: 'Gonzága Szent Alajos szerzetes',  // src: mr_hu_1991_ed2
    // aloysius_stepinac_bishop: 'Blessed Aloysius Stepinac, Bishop and Martyr',
    // aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs: 'Saints Aloysius Versiglia, Bishop and Callistus Caravario, Priest, Martyrs',
    // alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: 'Saint Alphonsa of the Immaculate Conception Muttathupadathu, Virgin',
    alphonsus_mary_liguori_bishop: 'Liguori Szent Alfonz Mária püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // amand_of_maastricht_bishop: 'Saint Amand, Bishop',
    // amandus_of_strasbourg_bishop: 'Saint Amandus of Strasbourg, Bishop',
    // amarin_of_alsace_abbot: 'Saint Amarin, Abbot and Martyr',
    ambrose_of_milan_bishop: 'Szent Ambrus püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // andre_bessette_religious: 'Saint André Bessette, Religious',
    // andre_grasset_priest: 'Blessed André Grasset, Priest and Martyr',
    andrew_apostle: 'Szent András apostol',  // src: mr_hu_1991_ed2
    andrew_apostle_patron_of_russia: 'Szent András apostol, Oroszország védőszentje',  // based on: mr_hu_1991_ed2
    andrew_apostle_patron_of_scotland: 'Szent András apostol, Skócia védőszentje',  // based on: mr_hu_1991_ed2
    // andrew_bobola_priest: 'Saint Andrew Bobola, Priest and Martyr',
    // andrew_de_soveral_and_ambrose_francis_ferro_priests: 'Saints Andrew de Soveral and Ambrose Francis Ferro, Priests and Martyrs',
    andrew_dung_lac_priest_and_companions_martyrs: 'Dung-lac Szent Ándrás áldozópap és társai vértanúk',  // src: mr_hu_1991_ed2
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: 'Kim Taegon Szent András áldozópap, Csong Haszang Szent Pál és társaik vértanúk',  // src: mr_hu_1991_ed2
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: 'Szent Zoerárd-András és Benedek remeték',  // src: mr_hu_1991_ed2
    angela_merici_virgin: 'Merici Szent Angéla szűz',  // src: mr_hu_1991_ed2
    // angela_salawa_virgin: 'Blessed Angela Salawa, Virgin',
    // anno_of_cologne_bishop: 'Saint Anno of Cologne, Bishop',
    annunciation_of_the_lord: 'Urunk születésének hírüladása (Gyümölcsoltó Boldogasszony)',  // based on: mr_hu_1991_ed2
    anselm_of_canterbury_bishop: 'Szent Anzelm püspök és egyháztanító',  // src: mr_hu_1991_ed2
    ansgar_of_hamburg_bishop: 'Szent Anszgár (Oszkár) püspök',  // src: mr_hu_1991_ed2
    // anthony_julian_nowowiejski_bishop_and_companions_martyrs: 'Blessed Anthony Julian Nowowiejski, Bishop, and Companions, Martyrs',
    anthony_mary_claret_bishop: 'Claret Szent Antal Mária püspök',  // src: mr_hu_1991_ed2
    anthony_of_egypt_abbot: 'Szent Antal apát',  // src: mr_hu_1991_ed2
    anthony_of_padua_priest: 'Páduai Szent Antal áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    // anthony_of_saint_anne_galvao_priest: 'Saint Anthony of Saint Anne Galvão, Priest',
    // anthony_of_the_caves_monk: 'Saint Anthony of the Caves, Monk',
    anthony_zaccaria_priest: 'Zaccaria Szent Antal Mária áldozópap',  // src: mr_hu_1991_ed2
    // apollinaris_of_ravenna_bishop: 'Saint Apollinaris, Bishop and Martyr',
    // arbogast_of_strasbourg_bishop: 'Saint Arbogast, Bishop',
    // arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg: 'Saint Arbogast, Bishop, Patron of the Archdiocese of Strasbourg',
    // asaph_of_wales_bishop: 'Saint Asaph, Bishop',
    ascension_of_the_lord: 'Urunk mennybemenetele',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=110
    ash_wednesday: 'Hamvazószerda',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=68
    // asicus_of_elphin_bishop: 'Saint Asicus, Bishop',
    assumption_of_the_blessed_virgin_mary: 'Szűz Mária mennybevétele (Nagyboldogasszony)',  // src: mr_hu_1991_ed2
    athanasius_of_alexandria_bishop: 'Szent Atanáz püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // attracta_of_killaraght_virgin: 'Saint Attracta, Virgin',
    // audoen_of_rouen_bishop: 'Saint Audoen, Bishop',
    // augustine_kazotic_bishop: 'Blessed Augustine Kažotić, Bishop and Martyr',
    augustine_of_canterbury_bishop: 'Canterburyi Szent Ágoston püspök',  // src: mr_hu_1991_ed2
    augustine_of_hippo_bishop: 'Szent Ágoston püspök és egyháztanító',  // src: mr_hu_1991_ed2
    augustine_zhao_rong_priest: 'Zhao Rong Szent Ágoston áldozópap és vértanú',  // based on: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=127
    augustine_zhao_rong_priest_and_companions_martyrs: 'Zhao Rong Szent Ágoston áldozópap és társai vértanúk',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=127, without comma before `vértanúk`
    // aurelia_of_strasbourg_virgin: 'Saint Aurelia of Strasbourg, Virgin',
    baptism_of_the_lord: 'Urunk megkeresztelkedése',  // src: mr_hu_1991_ed2
    // barbara_of_heliopolis_virgin: 'Saint Barbara, Virgin and Martyr',
    barnabas_apostle: 'Szent Barnabás apostol',  // src: mr_hu_1991_ed2
    bartholomew_apostle: 'Szent Bertalan apostol',  // src: mr_hu_1991_ed2
    // bartholomew_dias_laurel_religious: 'Blessed Bartholomew Días Laurel, Religious and Martyr',
    // bartholomew_of_the_martyrs_fernandes_bishop: 'Saint Bartholomew of the Martyrs Fernandes, Bishop',
    basil_the_great_and_gregory_nazianzen_bishops: 'Nagy Szent Vazul és Nazianzi Szent Gergely püspökök és egyháztanítók',  // src: mr_hu_1991_ed2
    // beatrice_da_silva_meneses_virgin: 'Saint Beatrice da Silva Meneses, Virgin',
    bede_the_venerable_priest: 'Tiszteletreméltó Szent Béda áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    // benedict_of_aniane_abbot: 'Saint Benedict of Aniane, Abbot',
    // benedict_of_jesus_valdivielso_saez_religious: 'Saint Benedict of Jesus Valdivielso Sáez, Religious and Martyr',
    benedict_of_nursia_abbot: 'Szent Benedek apát',  // src: mr_hu_1991_ed2
    benedict_of_nursia_abbot_patron_of_europe: 'Szent Benedek apát, Európa fővédőszentje',  // src: mr_hu_1991_ed2
    // benno_of_meissen_bishop: 'Saint Benno of Meissen, Bishop',
    bernadette_soubirous_virgin: 'Soubirous Szent Mária Bernadett szűz',  // src: mr_hu_1991_ed2
    bernard_of_clairvaux_abbot: 'Szent Bernát apát és egyháztanító',  // src: mr_hu_1991_ed2
    bernardine_of_siena_priest: 'Sienai Szent Bernardin áldozópap',  // src: mr_hu_1991_ed2
    // beuno_of_wales_abbot: 'Saint Beuno, Abbot',
    blaise_of_sebaste_bishop: 'Szent Balázs püspök és vértanú',  // src: mr_hu_1991_ed2
    // blessed_martyrs_of_paris: 'Blessed Martyrs of Paris',
    // bogumilus_of_dobrow_bishop: 'Blessed Bogumilus, Bishop',
    // boleslawa_mary_lament_virgin: 'Blessed Boleslawa Mary Lament, Virgin',
    bonaventure_of_bagnoregio_bishop: 'Szent Bonaventura püspök és egyháztanító',  // src: mr_hu_1991_ed2
    boniface_of_mainz_bishop: 'Szent Bonifác püspök és vértanú',  // src: mr_hu_1991_ed2
    // boris_of_kiev_and_gleb_of_kiev_martyrs: 'Saints Boris and Gleb, Martyrs',
    // brendan_of_clonfert_abbot: 'Saint Brendan, Abbot',
    bridget_of_sweden_religious: 'Szent Brigitta szerzetesnő',  // src: mr_hu_1991_ed2
    bridget_of_sweden_religious_copatroness_of_europe: 'Szent Brigitta szerzetesnő, a Fülöp-szigetek társpatrónája',  // based on: mr_hu_1991_ed2
    // brigid_of_kildare_virgin: 'Saint Brigid, Abbess',
    // brigid_of_kildare_virgin_copatroness_of_ireland: 'Saint Brigid, Virgin, Copatroness of Ireland',
    // bronislava_of_poland_virgin: 'Blessed Bronislava, Virgin',
    // bronislaw_markiewicz_priest: 'Blessed Bronisław Markiewicz, Priest',
    bruno_of_cologne_priest: 'Szent Brúnó áldozópap',  // src: mr_hu_1991_ed2
    // bruno_of_querfurt_bishop: 'Saint Bruno of Querfurt, Bishop And Martyr',
    // caesarius_of_arles_bishop: 'Saint Caesarius of Arles, Bishop',
    cajetan_of_thiene_priest: 'Szent Kajetán áldozópap',  // src: mr_hu_1991_ed2
    callistus_i_pope: 'Szent I. Kallixtusz pápa és vértanú',  // src: mr_hu_1991_ed2
    camillus_de_lellis_priest: 'Lellisi Szent Kamill áldozópap',  // src: mr_hu_1991_ed2
    // canice_of_kilkenny_abbot: 'Saint Canice, Abbot',
    // canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs: 'Saints Canute, Eric and Olaf, Martyrs',
    // canute_iv_of_denmark_martyr: 'Saint Canute, Martyr',
    // carlos_manuel_rodriguez_santiago: 'Blessed Carlos Manuel Rodríguez Santiago',
    // carmelites_of_compiegne_virgins_and_martyrs: 'Blessed Carmelites of Compiègne, Virgins and Martyrs',
    // caroline_kozka_virgin: 'Blessed Caroline Kózka, Virgin and Martyr',
    // carthage_of_lismore_bishop: 'Saint Carthage, Bishop',
    casimir_of_poland: 'Szent Kázmér',  // src: mr_hu_1991_ed2
    // catherine_of_alexandria_virgin: 'Saint Catherine of Alexandria, Virgin and Martyr',
    // catherine_of_saint_augustine_de_simon_de_longpre_virgin: 'Blessed Catherine of Saint Augustine, Virgin',
    catherine_of_siena_virgin: 'Sienai Szent Katalin szűz és egyháztanító',  // src: mr_hu_1991_ed2
    catherine_of_siena_virgin_copatroness_of_europe: 'Sienai Szent Katalin szűz és egyháztanító, Európa társvédőszentje',  // based on: mr_hu_1991_ed2
    catherine_of_siena_virgin_copatroness_of_italy_and_europe: 'Sienai Szent Katalin szűz és egyháztanító, Olaszország és Európa társvédőszentje',  // based on: mr_hu_1991_ed2
    // catherine_zoe_laboure_virgin: 'Saint Catherine Labouré, Virgin',
    // ceallach_of_armagh_bishop: 'Saint Ceallach, Bishop',
    cecilia_of_rome_virgin: 'Szent Cecília szűz és vértanú',  // src: mr_hu_1991_ed2
    ceferino_gimenez_malla_martyr: 'Boldog Ceferino Giménez Malla vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=101
    // ceraunus_of_paris_bishop: 'Saint Ceraunus of Paris, Bishop',
    // ceslaus_of_poland_and_hyacinth_of_poland_priests: 'Blessed Ceslaus and Saint Hyacinth, Priests',
    // ceslaus_of_poland_priest: 'Blessed Ceslaus, Priest',
    // chad_of_mercia_and_cedd_of_lastingham_bishops: 'Saints Chad and Cedd, Bishops',
    chair_of_saint_peter_the_apostle: 'Szent Péter apostol székfoglalása',  // src: mr_hu_1991_ed2
    charles_borromeo_bishop: 'Borromeo Szent Károly püspök',  // src: mr_hu_1991_ed2
    // charles_i_of_austria: 'Blessed Charles of Austria',
    charles_lwanga_and_companions_martyrs: 'Lwanga Szent Károly és társai vértanúk',  // src: mr_hu_1991_ed2
    // charles_of_jesus_de_foucauld: 'Saint Charles de Foucauld, Priest',
    // charles_spinola_and_jerome_de_angelis_priests: 'Blesseds Charles Spinola and Jerome de Angelis, Priests and Martyrs',
    // charles_spinola_priest: 'Blessed Charles Spinola, Priest and Martyr',
    christopher_magallanes_priest_and_companions_martyrs: 'Magallán Szent Kristóf áldozópap és társai vértanúk',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=107, without a comma before `vértanúk`
    // christopher_of_palestine_martyr: 'Saint Christopher, Martyr',
    // ciaran_of_clonmacnoise_abbot: 'Saint Ciaran, Abbot',
    clare_of_assisi_virgin: 'Szent Klára szűz',  // src: mr_hu_1991_ed2
    clement_i_pope: 'Szent I. Kelemen pápa és vértanú',  // src: mr_hu_1991_ed2
    // clement_mary_hofbauer_priest: 'Saint Clement Mary Hofbauer, Priest',
    // clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions: 'Saints Clement of Ohrid and Gorazd, Bishops, and Companions',
    // clotilde_of_burgundy: 'Saint Clotilde',
    // colman_of_cloyne_bishop: 'Saint Colman of Cloyne, Bishop',
    // colman_of_dromore_bishop: 'Saint Colman of Dromore, Bishop',
    // colman_of_kilmacduagh_bishop: 'Saint Colman of Kilmacduagh, Bishop',
    // columba_marmion_priest: 'Blessed Columba Marmion, Priest',
    // columba_of_iona_abbot: 'Saint Columba, Abbot',
    // columba_of_iona_abbot_copatron_of_ireland: 'Saint Columba, Abbot and Missionary, Copatron of Ireland',
    columban_of_luxeuil_abbot: 'Szent Kolumbán apát',  // src: mr_hu_1991_ed2
    // comgall_of_bangor_abbot: 'Saint Comgall, Abbot',
    commemoration_of_all_the_faithful_departed: 'Halottak napja',  // src: mr_hu_1991_ed2
    // conleth_of_kildare_bishop: 'Saint Conleth, Bishop',
    // conrad_of_constance_and_gebhard_of_constance_bishops: 'Saints Conrad and Gebhard of Constance, Bishops',
    // conrad_of_parzham_religious: 'Saint Conrad of Parzham, Religious',
    conversion_of_saint_paul_the_apostle: 'Szent Pál apostol megtérése (Pál fordulása)',  // src: mr_hu_1991_ed2
    // corbinian_of_freising_bishop: 'Saint Corbinian, Bishop',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'Szent Kornél pápa és Szent Ciprián püspök vértanúk',  // src: mr_hu_1991_ed2
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Szent Kozma és Damján vértanúk',  // src: mr_hu_1991_ed2
    // cuthbert_of_lindisfarne_bishop: 'Saint Cuthbert, Bishop',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: 'Szent Cirill szerzetes és Szent Metód puspök',  // src: mr_hu_1991_ed2
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe: 'Szent Cirill szerzetes és Szent Metód puspök, Európa társvédőszentjei',  // src: mr_hu_1991_ed2
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_slavic_missionaries_copatrons_of_europe: 'Szent Cirill szerzetes és Szent Metód puspök, Sláv apostolok, Európa társvédőszentjei',  // based on: mr_hu_1991_ed2 + https://hu.wikipedia.org/w/index.php?title=Szent_Cirill&oldid=26358926
    cyril_of_alexandria_bishop: 'Alexandriai Szent Cirill püspök és egyháztanító',  // src: mr_hu_1991_ed2
    cyril_of_jerusalem_bishop: 'Jeruzsálemi Szent Cirill püspök és egyháztanító',  // src: mr_hu_1991_ed2
    damasus_i_pope: 'Szent I. Damazusz pápa',  // src: mr_hu_1991_ed2
    // damien_de_veuster_priest: 'Saint Damien de Veuster, Priest',
    // daniel_brottier_priest: 'Blessed Daniel Brottier, Priest',
    // david_lewis_priest: 'Saint David Lewis, Priest and Martyr',
    // david_of_wales_bishop: 'Saint David, Bishop',
    // david_of_wales_bishop_patron_of_wales: 'Saint David, Bishop, Patron of Wales',
    // davnet_of_sliabh_beagh_virgin: 'Saint Davnet, Virgin',
    // declan_of_ardmore_bishop: 'Saint Declan, Bishop',
    dedication_of_consecrated_churches: 'A saját templom felszentelése (amennyiben annak napja nem ismeretes)',  // src: mr_hu_1991_ed2
    dedication_of_the_basilica_of_saint_mary_major: 'Szűz Mária római főtemplomának felszentelése (Havas Boldogasszony)',  // src: mr_hu_1991_ed2
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Szent Péter- és Szent Pál-bazilikák felszentelése',  // src: mr_hu_1991_ed2
    // dedication_of_the_cathedral_basilica_of_saint_denis_france: 'The Dedication of the Cathedral Basilica of Saint-Denis, France',
    // dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france: 'The Dedication of the Cathedral of Notre-Dame of Strasbourg',
    dedication_of_the_lateran_basilica: 'A lateráni-bazilika felszentelése',  // src: mr_hu_1991_ed2
    // dedication_of_the_notre_dame_de_paris_cathedral_paris_france: 'The Dedication of the Notre-Dame de Paris Cathedral, Paris',
    // deiniol_of_bangor_bishop: 'Saint Deiniol, Bishop',
    // demetrius_of_thessaloniki_martyr: 'Saint Demetrius of Thessaloniki, Martyr',
    denis_of_paris_bishop_and_companions_martyrs: 'Szent Dénes püspök és társai vértanúk',  // src: mr_hu_1991_ed2
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris: 'Szent Dénes püspök és társai vértanúk, a párizsi főegyházmegye védőszentjei',  // based on: mr_hu_1991_ed2
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis: 'Szent Dénes püspök és társai vértanúk, a Saint-Denis-i város és egyházmegye védőszentjei',  // based on: mr_hu_1991_ed2
    // dina_belanger_virgin: 'Blessed Dina Bélanger, Virgin',
    // dionysius_the_areopagite_bishop: 'Saint Dionysius the Areopagite, Bishop and Martyr',
    divine_mercy_sunday: 'Húsvét II. vasárnapja, az isteni irgalmasság vasárnapja',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=98
    dominic_de_guzman_priest: 'Szent Domonkos áldozópap',  // src: mr_hu_1991_ed2
    // dominic_of_the_mother_of_god_barberi_priest: 'Blessed Dominic of the Mother of God Barberi, Priest',
    // dunstan_of_canterbury_bishop: 'Saint Dunstan, Bishop',
    // dyfrig_of_wales_bishop: 'Saint Dyfrig, Bishop',
    easter_sunday: 'Húsvétvasárnap, Urunk feltámadása',
    // edmund_bojanowski: 'Blessed Edmund Bojanowski',
    // edmund_campion_priest: 'Saint Edmund Campion, Priest and Martyr',
    // edmund_ignatius_rice_religious: 'Blessed Edmund Rice, Religious',
    // edmund_of_abingdon_bishop: 'Saint Edmund of Abingdon, Bishop',
    // edward_the_confessor: 'Saint Edward the Confessor',
    // eligius_of_noyon_bishop: 'Saint Eligius, Bishop',
    // elijah_prophet: 'Saint Elijah, Prophet',
    // elizabeth_ann_seton_religious: 'Saint Elizabeth Ann Seton, Religious',
    // elizabeth_hesselblad_religious: 'Saint Elizabeth Hesselblad, Religious',
    elizabeth_of_hungary_religious: 'Árpád-házi Szent Erzsébet',  // src: mr_hu_1991_ed2
    elizabeth_of_portugal: 'Portugáliai Szent Erzsébet',  // src: mr_hu_1991_ed2
    emeric_of_hungary: 'Szent Imre herceg',  // src: mr_hu_1991_ed2
    // emilie_tavernier_gamelin_religious: 'Blessed Émilie Tavernier-Gamelin, Religious',
    // enda_of_aran_abbot: 'Saint Enda, Abbot',
    // english_martyrs: 'English Martyrs',
    // eoghan_of_ardstraw_bishop: 'Saint Eoghan, Bishop',
    ephrem_the_syrian_deacon: 'Szent Efrém diakónus és egyháztanító',  // src: mr_hu_1991_ed2
    epiphany_of_the_lord: 'Urunk megjelenése (Vízkereszt)',  // src: mr_hu_1991_ed2
    // eric_ix_of_sweden_martyr: 'Saint Eric IX of Sweden, Martyr',
    // etheldreda_of_ely_abbess: 'Saint Etheldreda, Abbess',
    // eucharius_of_trier_bishop: 'Saint Eucharius, Bishop',
    // eugene_de_mazenod_bishop: 'Saint Eugène de Mazenod, Bishop',
    // eugenia_of_alsace_and_attala_of_alsace_virgins: 'Saints Eugenia and Attala, Virgins',
    // eulalia_of_merida_virgin: 'Saint Eulalia of Merida, Virgin and Martyr',
    // eulogius_of_cordoba_bishop: 'Saint Eulogius of Córdoba, Bishop',
    eusebius_of_esztergom_priest: 'Boldog Özséb áldozópap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=53
    eusebius_of_vercelli_bishop: 'Vercelli Szent Özséb püspök',  // src: mr_hu_1991_ed2
    exaltation_of_the_holy_cross: 'A Szent Kereszt felmagasztalása',  // src: mr_hu_1991_ed2
    // eysteinn_of_nidaros_bishop: 'Saint Eysteinn of Nidaros, Bishop',
    // ezequiel_moreno_bishop: 'Saint Ezequiel Moreno, Bishop',
    fabian_i_pope: 'Szent Fábián pápa és vértanú',  // src: mr_hu_1991_ed2
    // fachanan_of_kilfenora_bishop: 'Saint Fachanan, Bishop',
    // fachtna_of_rosscarbery_bishop: 'Saint Fachtna, Bishop',
    faustina_kowalska_virgin: 'Szent Faustina Kowalska szűz',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=161
    // ferdinand_iii_of_castile: 'Saint Ferdinand III of Castile',
    // fiacre_of_breuil_monk: 'Saint Fiacre, Monk',
    fidelis_of_sigmaringen_priest: 'Sigmaringeni Szent Fidél áldozópap és vértanú',  // src: mr_hu_1991_ed2
    // finbarr_of_cork_bishop: 'Saint Finbarr, Bishop',
    // finding_of_the_holy_cross: 'Finding of the Holy Cross',
    // finnian_of_clonard_bishop: 'Saint Finian, Bishop',
    // fintan_of_clonenagh_abbot: 'Saint Fintan, Abbot',
    first_martyrs_of_the_holy_roman_church: 'A római Egyház első szent vértanúi',  // src: mr_hu_1991_ed2
    // first_polish_martyrs: 'Saints Benedict, John, Matthew, Isaac and Christian, the First Polish Martyrs',
    // five_wounds_of_the_lord: 'Five Wounds of the Lord',
    // flannan_of_killaloe_bishop: 'Saint Flannan, Bishop',
    // florentius_of_strasbourg_bishop: 'Saint Florentius, Bishop',
    florian_of_lorch_and_companions_martyrs: 'Szent Flórián és társai vértanúk',  // based on: mr_hu_1991_ed2
    florian_of_lorch_martyr: 'Szent Flórián vértanú',  // src: mr_hu_1991_ed2
    frances_of_rome_religious: 'Római Szent Franciska szerzetesnő',  // src: mr_hu_1991_ed2
    // frances_xavier_cabrini_virgin: 'Saint Frances Xavier Cabrini, Virgin',
    // francis_borgia_priest: 'Saint Francis Borgia, Priest',
    francis_de_sales_bishop: 'Szalézi Szent Ferenc püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // francis_diaz_del_rincon_priest_and_companions_martyrs: 'Saint Francis Díaz del Rincon, Priest, and Companions, Martyrs',
    // francis_ferdinand_de_capillas_priest: 'Saint Francis Ferdinand de Capillas, Priest and Martyr',*/
    francis_of_assisi: 'Assisi Szent Ferenc',  // src: mr_hu_1991_ed2
    francis_of_assisi_patron_of_italy: 'Assisi Szent Ferenc, Olaszország védőszentje',  // src: mr_hu_1991_ed2
    francis_of_paola_hermit: 'Paolai Szent Ferenc remete',  // src: mr_hu_1991_ed2
    // francis_solanus_priest: 'Saint Francis Solanus, Priest',
    francis_xavier_priest: 'Xavéri Szent Ferenc áldozópap',  // src: mr_hu_1991_ed2
    // francis_xavier_seelos_priest: 'Blessed Francis Xavier Seelos, priest',
    // francois_de_montmorency_laval_bishop: 'Saint François de Laval, Bishop',
    // frederic_janssoone_priest: 'Blessed Frédéric Janssoone, Priest',
    // frederic_ozanam_founder: 'Blessed Frédéric Ozanam, Founder',
    friday_of_the_passion_of_the_lord: 'Az Úr szenvedésének ünneplése',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=87
    // fridolin_of_sackingen_monk: 'Saint Fridolin of Säckingen, Monk',
    // fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops: 'Saints Fructuosus, Martin and Gerald of Braga, Bishops',
    // fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs: 'Saints Fructuosus, Bishop, Augurius and Eulogius, Deacons, Martyrs',
    // fursa_of_peronne_abbot: 'Saint Fursa, Abbot and Missionary',
    // gabriel_taurin_dufresse_bishop: 'Saint Gabriel-Taurin Dufresse, Bishop and Martyr',
    // gall_of_switzerland_abbot: 'Saint Gall, Abbot and Missionary',
    // genevieve_of_paris_virgin: 'Saint Genevieve, Virgin',
    // george_matulaitis_bishop: 'Blessed George Matulaitis, Bishop',
    george_of_lydda_martyr: 'Szent György vértanú',  // src: mr_hu_1991_ed2
    // george_of_lydda_martyr_patron_of_england: 'Saint George, Martyr, Patron of England',
    // george_preca_priest: 'Saint George Preca, Priest',
    gerard_of_csanad_bishop: 'Szent Gellért püspök és vértanú',  // src: mr_hu_1991_ed2
    // germain_of_paris_bishop: 'Saint Germain of Paris, Bishop',
    // germanus_of_auxerre_bishop: 'Saint Germanus of Auxerre, Bishop',
    // gertrude_of_nivelles_abbess: 'Saint Gertrude of Nivelles, Abbess',
    gertrude_the_great_virgin: 'Nagy Szent Gertrúd szűz',  // src: mr_hu_1991_ed2
    gisela_of_hungary: 'Boldog Gizella',  // src: mr_hu_1991_ed2
    // gobnait_of_ballyvourney_virgin: 'Saint Gobnait, Virgin',
    // gorazd_of_moravia_and_companions: 'Saint Gorazd and Companions',
    // gotthard_of_hildesheim_bishop: 'Saint Gotthard, Bishop',
    // gratia_of_cattaro_religious: 'Blessed Gratia of Cattaro, Religious',
    // gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs: 'Saints Gregory Grassi, Francis Fogolla and Anthony Fantosati, Bishops, and Companions, Martyrs',
    gregory_i_the_great_pope: 'Nagy Szent Gergely pápa és egyháztanító',  // src: mr_hu_1991_ed2
    // gregory_of_narek_abbot: 'Saint Gregory of Narek, Abbot and Doctor of the Church',
    gregory_vii_pope: 'Szent VII. Gergely pápa',  // src: mr_hu_1991_ed2
    guardian_angel_of_portugal: 'Portugália Őrzőangyala',
    // gundisalvus_garcia_martyr: 'Saint Gundisalvus Garcia, Martyr',
    // gundisalvus_of_amarante_priest: 'Blessed Gundisalvus of Amarante, Priest',
    // gundisalvus_of_lagos_priest: 'Blessed Gundisalvus of Lagos, Priest',
    hedwig_of_poland: 'Boldog Hedvig királyné',  // src: mr_hu_1991_ed2
    hedwig_of_silesia_religious: 'Szent Hedvig szerzetesnő',  // src: mr_hu_1991_ed2
    // helena_of_constantinople: 'Saint Helena',
    // hemma_of_gurk: 'Saint Hemma of Gurk',
    // hemming_of_turku_bishop: 'Blessed Hemming of Turku, Bishop',
    henry_ii_emperor: 'Szent Henrik',  // src: mr_hu_1991_ed2
    // henry_ii_emperor_and_cunigunde_of_luxembourg: 'Saints Henry and Cunigunde',
    // henry_of_finland_bishop: 'Saint Henry, Bishop and Martyr',
    // henry_suso_priest: 'Blessed Henry Suso, Priest',
    // hermann_joseph_of_steinfeld_priest: 'Saint Hermann Joseph, Priest',
    // hermenegild_the_visigoths_martyr: 'Saint Hermenegild, Martyr',
    hilary_of_poitiers_bishop: 'Szent Hiláriusz (Vidor) püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // hilda_of_whitby_abbess: 'Saint Hilda, Abbess',
    hildegard_of_bingen_abbess: 'Bingeni Szent Hildegárd apátnő és egyháztanító',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=154
    // holy_child_of_cebu: 'The Holy Child of Cebú',
    holy_family_of_jesus_mary_and_joseph: 'A Szent Család: Jézus, Mária és József',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=42
    holy_guardian_angels: 'Szent Őrzőangyalok',  // src: mr_hu_1991_ed2
    holy_innocents_martyrs: 'Aprószentek, vértanúk',  // src: mr_hu_1991_ed2
    holy_saturday: 'Nagyszombat/Húsvéti vigília',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=88 + https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=92
    holy_thursday: 'Nagycsütörtök',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=81
    // honorat_kozminski_priest: 'Blessed Honorat Koźmiński, Priest',
    // hosanna_of_cattaro_virgin: 'Blessed Hosanna of Cattaro, Virgin',
    // hroznata_of_bohemia_martyr: 'Blessed Hroznata, Martyr',
    // hubert_of_liege_bishop: 'Saint Hubert, Bishop',
    // hugh_of_lincoln_bishop: 'Saint Hugh of Lincoln, Bishop',
    hungarian_saints_and_blesseds: 'Magyar szentek és boldogok',  // src: mr_hu_1991_ed2
    // hyacinth_of_poland_priest: 'Saint Hyacinth, Priest',
    // ignatius_de_azevedo_priest_and_companions_martyrs: 'Blessed Ignatius de Azevedo, Priest, and Companions, Martyrs',
    // ignatius_falzon: 'Blessed Ignatius Falzon',
    ignatius_of_antioch_bishop: 'Antiochiai Szent Ignác püspök és vértanú',  // src: mr_hu_1991_ed2
    ignatius_of_loyola_priest: 'Loyolai Szent Ignác áldozópap',  // src: mr_hu_1991_ed2
    // ildephonsus_of_toledo_bishop: 'Saint Ildephonsus of Toledo, Bishop',
    // illtud_the_knight_abbot: 'Saint Illtud, Abbot',
    immaculate_conception_of_the_blessed_virgin_mary: 'A Boldogságos Szűz Mária szeplőtelen fogantatása',  // src: mr_hu_1991_ed2
    immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_philippines: 'A Boldogságos Szűz Mária szeplőtelen fogantatása, a Fülöp-szigetek védőszentje',  // based on: mr_hu_1991_ed2
    immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_usa: 'A Boldogságos Szűz Mária szeplőtelen fogantatása, az Egyesült Államok védőszentje',  // based on: mr_hu_1991_ed2
    immaculate_heart_of_mary: 'A Boldogságos Szűz Mária Szeplőtelen Szíve',  // src: mr_hu_1991_ed2
    innocent_v_pope: 'Boldog V. Ince Pápa',  // based on: mr_hu_1991_ed2
    innocent_xi_pope: 'Boldog XI. Ince Pápa',  // src: mr_hu_1991_ed2
    irenaeus_of_lyon_bishop: 'Szent Iréneusz püspök és vértanú',  // src: mr_hu_1991_ed2
    // irene_of_macedonia: 'Saint Irene',
    // irish_martyrs: 'Irish Martyrs',
    // isabelle_of_france_virgin: 'Blessed Isabelle of France, Virgin',
    isidore_of_seville_bishop: 'Szent Izidor püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // isidore_the_farmer: 'Saint Isidore',
    istvan_sandor_religious: 'Boldog Sándor István vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=115
    // ita_of_killeedy_virgin: 'Saint Ita, Virgin',
    // ivan_merz: 'Blessed Ivan Merz',
    // ivo_of_kermartin_priest: 'Saint Ivo, Priest',
    // jacinta_marto_and_francisco_marto: 'Saints Jacinta and Francisco Marto',
    james_apostle: 'Szent Jakab apostol',  // src: mr_hu_1991_ed2
    james_apostle_patron_of_spain: 'Szent Jakab apostol, Spanyolország védőszentje',  // based on: mr_hu_1991_ed2
    // james_strzemie_bishop: 'Blessed James Strzemię, Bishop',
    jane_frances_de_chantal_religious: 'Chantal Szent Johanna Franciska szerzetesnő',  // src: mr_hu_1991_ed2
    januarius_i_of_benevento_bishop: 'Szent Januáriusz püspök és vértanú',  // src: mr_hu_1991_ed2
    // jarlath_of_tuam_bishop: 'Saint Jarlath, Bishop',
    jerome_emiliani: 'Emiliáni Szent Jeromos',  // src: mr_hu_1991_ed2
    jerome_of_stridon_priest: 'Szent Jeromos áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    joachim_and_anne_parents_of_mary: 'Szent Joakim és Szent Anna, a Boldogságos Szűz Mária szülei',  // src: mr_hu_1991_ed2
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary: 'Szent Anna, Quebec tartomány védőszentje, és Szent Joakim, a Boldogságos Szűz Mária szülei',  // based on: mr_hu_1991_ed2 + https://divany.hu/kultbait/2020/06/24/keresztelo-szent-janos/
    // joachim_he_kaizhi_martyr: 'Saint Joachim He Kaizhi, Martyr',
    // joan_of_arc_virgin_copatroness_of_france: 'Saint Joan of Arc, Virgin, Copatroness of France',
    // joan_of_portugal_virgin: 'Blessed Joan of Portugal, Virgin',
    // joaquina_of_saint_francis_of_assisi_de_vedruna_religious: 'Saint Joaquina of Saint Francis of Assisi de Vedruna, Religious',
    john_apostle: 'Szent János apostol és evangélista',  // src: mr_hu_1991_ed2
    john_baptist_de_la_salle_priest: 'De la Salle Szent János áldozópap',  // src: mr_hu_1991_ed2
    // john_berchmans_religious: 'Saint John Berchmans, Religious',
    // john_beyzym_priest: 'Blessed John Beyzym, Priest',
    john_bosco_priest: 'Bosco Szent János áldozópap',  // src: mr_hu_1991_ed2
    john_brenner_priest: 'Boldog Brenner János áldozópap és vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=35
    // john_cassian_priest: 'Saint John Cassian, Priest',
    john_chrysostom_bishop: 'Aranyszájú (Krizosztomosz) Szent János püspök és egyháztanító',  // src: mr_hu_1991_ed2
    john_damascene_priest: 'Damaszkuszi Szent János áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: 'De Brébeuf Szent János és Jogues Szent Izsák áldozópapok és társaik vértanúk',  // src: mr_hu_1991_ed2
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada: 'De Brébeuf Szent János és Jogues Szent Izsák áldozópapok és társaik vértanúk, Kanada társvédőszentje',  // based on: mr_hu_1991_ed2
    // john_de_britto_priest: 'Saint John de Brito, Priest and Martyr',
    john_eudes_priest: 'Eudes Szent János áldozópap',  // src: mr_hu_1991_ed2
    john_fisher_bishop_and_thomas_more_martyrs: 'Fisher Szent János püspök és Morus Szent Tamás vértanúk',  // src: mr_hu_1991_ed2
    // john_gabriel_perboyre_priest: 'Saint John Gabriel Perboyre, Priest and Martyr',
    // john_henry_newman_priest: 'Saint John Henry Newman, Priest',
    john_i_pope: 'Szent I. János pápa és vértanú',  // src: mr_hu_1991_ed2
    // john_jones_priest: 'Saint John Jones, Priest and Martyr',
    john_leonardi_priest: 'Leonardi Szent János áldozópap',  // src: mr_hu_1991_ed2
    // john_macias_religious: 'Saint John Macías, Religious',
    // john_martin_moye_priest: 'Blessed John Martin Moye, Priest',
    john_mary_vianney_priest: 'Vianney Szent János Mária áldozópap',  // src: mr_hu_1991_ed2
    // john_nepomucene_neumann_bishop: 'Saint John Neumann, Bishop',
    john_nepomucene_priest: 'Nepomuki Szent János áldozópap és vértanú',  // src: mr_hu_1991_ed2
    john_of_avila_priest: 'De Avila Szent János áldozópap és egyháztanító',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=104
    john_of_capistrano_priest: 'Kapisztrán Szent János áldozópap',  // src: mr_hu_1991_ed2
    // john_of_dukla_priest: 'Saint John of Dukla, Priest',
    john_of_god_duarte_cidade_religious: 'Istenes Szent János szerzetes',  // src: mr_hu_1991_ed2
    john_of_kanty_priest: 'Kęty Szent János áldozópap',  // src: mr_hu_1991_ed2
    john_of_the_cross_priest: 'Keresztes Szent János áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    // john_of_triora_priest: 'Saint John of Triora, Priest and Martyr',
    // john_ogilvie_priest: 'Saint John Ogilvie, Priest and Martyr',
    john_paul_ii_pope: 'Szent II. János Pál pápa',  // based on: mr_hu_1991_ed2
    // john_roberts_priest: 'Saint John Roberts, Priest and Martyr',
    // john_sarkander_priest: 'Saint John Sarkander, Priest and Martyr',
    john_scheffler_bishop: 'Boldog Scheffler János püspök és vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=106
    john_xxiii_pope: 'Szent XXIII. János pápa',
    josaphat_kuntsevych_bishop: 'Szent Jozafát püspök és vértanú',  // src: mr_hu_1991_ed2
    // jose_maria_de_yermo_y_parres_priest: 'Saint José Maria de Yermo y Parres, Priest',
    // josemaria_escriva_de_balaguer_priest: 'Saint Josemaría Escrivá de Balaguer, Priest',
    // joseph_bilczewski_bishop: 'Saint Joseph Bilczewski, Bishop',
    // joseph_de_anchieta_priest: 'Saint Joseph de Anchieta, Priest',
    // joseph_freinademetz_priest: 'Saint Joseph Freinademetz, Priest',
    joseph_of_calasanz_priest: 'Kalazanci Szent József áldozópap',  // src: mr_hu_1991_ed2
    // joseph_sebastian_pelczar_bishop: 'Saint Joseph Sebastian Pelczar, Bishop',
    joseph_spouse_of_mary: 'Szent József, a Boldogságos Szűz Mária jegyese',  // src: mr_hu_1991_ed2
    joseph_spouse_of_mary_patron_of_canada: 'Szent József, a Boldogságos Szűz Mária jegyese, Kanada védőszentje',  // based on: mr_hu_1991_ed2
    joseph_the_worker: 'Szent József, a munkás',  // src: mr_hu_1991_ed2
    // joseph_vaz_priest: 'Saint Joseph Vaz, Priest',
    // joseph_yuan_gengyin_priest: 'Saint Joseph Yuan Gengyin, Priest and Martyr',
    // joseph_zhang_dapeng_martyr: 'Saint Joseph Zhang Dapeng, Martyr',
    josephine_bakhita_virgin: 'Bakhita Szent Jozefina szűz',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=60
    juan_diego_cuauhtlatoatzin: 'Szent Juan Diego Cuauhtlatoatzin',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=33
    // juliana_of_liege_virgin: 'Saint Juliana of Liège, Virgin',
    // julie_billiart_virgin: 'Saint Julie Billiart, Virgin',
    // junipero_serra_priest: 'Saint Junípero Serra, Priest',
    justin_martyr: 'Szent Jusztínusz vértanú',  // src: mr_hu_1991_ed2
    // kateri_tekakwitha_virgin: 'Saint Kateri Tekakwitha, Virgin',
    // katharine_drexel_virgin: 'Saint Katharine Drexel, Virgin',
    // kentigern_of_scotland_bishop: 'Saint Kentigern, Bishop',
    // kevin_of_glendalough_abbot: 'Saint Kevin, Abbot',
    // kieran_of_saigir_bishop: 'Saint Kieran, Bishop',
    // kilian_of_wurzburg_bishop: 'Saint Kilian, Bishop and Martyr',
    // kilian_of_wurzburg_bishop_and_companions_martyrs: 'Saint Kilian, Bishop, and Companions, Martyrs',
    kinga_of_poland_virgin: 'Árpád-házi Boldog Kinga szűz',  // src: mr_hu_1991_ed2
    // kuriakose_elias_of_the_holy_family_chavara_priest: 'Saint Kuriakose Elias of the Holy Family Chavara, priest',
    // ladislas_of_gielniow_priest: 'Blessed Ladislas of Gielniow, Priest',
    // ladislaus_batthyany_strattmann: 'Blessed Ladislaus Batthyány-Strattmann',
    ladislaus_i_of_hungary: 'Szent László király',  // src: mr_hu_1991_ed2
    // lambert_of_maastricht_bishop: 'Saint Lambert of Maastricht, Bishop and Martyr',
    // landry_of_paris_bishop: 'Saint Landry of Paris, Bishop',
    // laserian_of_leighlin_bishop: 'Saint Laserian, Bishop',
    // laura_vicuna_virgin: 'Blessed Laura Vicuña, Virgin',
    // laurence_otoole_bishop: 'Saint Laurence O’Toole, Bishop',
    // laurence_wang_bing_and_companions_martyrs: 'Saint Laurence Wang Bing and Companions, Martyrs',
    // lawrence_bai_xiaoman_martyr: 'Saint Lawrence Bai Xiaoman, Martyr',
    lawrence_of_brindisi_priest: 'Brindisi Szent Lőrinc áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    lawrence_of_rome_deacon: 'Szent Lőrinc diakónus és vértanú',  // src: mr_hu_1991_ed2
    lawrence_ruiz_and_companions_martyrs: 'Ruiz Szent Lőrinc és társai vértanúk',  // src: mr_hu_1991_ed2
    // leander_of_seville_bishop: 'Saint Leander of Seville, Bishop',
    // lelia_of_killeely_virgin: 'Saint Lelia, Virgin',
    leo_i_the_great_pope: 'Nagy Szent Leó pápa és egyháztanító',  // src: mr_hu_1991_ed2
    // leo_ignatius_mangin_priest_and_companions_martyrs: 'Saint Leo Ignatius Mangin, Priest, and Companions, Martyrs',
    leo_ix_pope: 'Szent IX. Leó pápa',
    // leoba_of_tauberbischofsheim_abbess: 'Saint Leoba, Abbess',
    // leodegar_of_autun_bishop: 'Saint Leodegar of Autun, Bishop and Martyr',
    // leonard_of_noblac_hermit: 'Saint Leonard of Noblac, Hermit',
    // leonid_feodorov_priest: 'Blessed Leonid Feodorov, Priest and Martyr',
    // leopold_iii_of_babenberg: 'Saint Leopold III of Babenberg',
    // leopold_mandic_priest: 'Saint Leopold Mandić, Priest',
    // louis_bertrand_priest: 'Saint Louis Bertrand, Priest',
    louis_grignion_de_montfort_priest: 'Montforti Grignion Szent Lajos Mária áldozópap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=99
    louis_ix_of_france: 'Szent Lajos',  // src: mr_hu_1991_ed2
    // louis_zephirin_moreau_bishop: 'Blessed Louis-Zéphirin Moreau, Bishop',
    // louise_de_marillac_religious: 'Saint Louise de Marillac, Religious',
    // lucius_of_chur_bishop: 'Saint Lucius of Chur, Bishop and Martyr',
    lucy_of_syracuse_virgin: 'Szent Lúcia szűz és vértanú',  // src: mr_hu_1991_ed2
    // lucy_yi_zhenmei_virgin: 'Saint Lucy Yi Zhenmei, Virgin and Martyr',
    // ludan_of_scotland_pilgrim: 'Saint Ludan, Pilgrim',
    // ludger_of_munster_bishop: 'Saint Ludger of Münster, Bishop',
    // ludmila_of_bohemia_martyr: 'Saint Ludmila, Martyr',
    // luigi_orione_priest: 'Saint Luigi Orione, Priest',
    luke_evangelist: 'Szent Lukács evangélista',  // src: mr_hu_1991_ed2
    // lydia_of_philippi: 'Saint Lydia of Philippi',
    // mac_nissi_of_connor_bishop: 'Saint Mac Nissi, Bishop',
    // macartan_of_clogher_bishop: 'Saint Macartan, Bishop',
    // madeleine_sophie_barat_virgin: 'Saint Madeleine Sophie Barat, Virgin',
    // maelruain_of_tallaght_bishop: 'Saint Maelruain, Bishop and Abbot',
    // magnus_erlendsson_martyr: 'Saint Magnus, Martyr',
    // malachy_of_armagh_bishop: 'Saint Malachy, Bishop',
    // marcel_callo_martyr: 'Blessed Marcel Callo, Martyr',
    // marcelina_darowska_religious: 'Blessed Marcelina Darowska, Religious',
    // marcellin_champagnat_priest: 'Saint Marcellin Champagnat, Priest',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Szent Marcellínusz és Szent Péter vértanúk',  // src: mr_hu_1991_ed2
    // marcellus_of_paris_bishop: 'Saint Marcellus of Paris, Bishop',
    // margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs: 'Saints Margaret Clitherow, Anne Line and Margaret Ward, Virgin, Martyrs',
    margaret_mary_alacoque_virgin: 'Alacogue Szent Margit Mária szűz',  // src: mr_hu_1991_ed2
    margaret_of_antioch_virgin: 'Antiochiai Szent Margit szűz és vértanú',
    margaret_of_hungary_religious: 'Árpád-házi Szent Margit szűz',  // src: mr_hu_1991_ed2
    margaret_of_scotland: 'Skóciai Szent Margit',  // src: mr_hu_1991_ed2
    // marguerite_bourgeoys_virgin: 'Saint Marguerite Bourgeoys, Virgin',
    // marguerite_dyouville_religious: 'Saint Marguerite d’Youville, Religious',
    maria_goretti_virgin: 'Goretti Szent Mária szűz és vértanú',  // src: mr_hu_1991_ed2
    // maria_guadalupe_garcia_zavala_virgin: 'Saint María Guadalupe García Zavala, Virgin',
    // maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: 'Saint María Micaela of the Blessed Sacrament Desmaisières, Virgin',
    // mariana_of_jesus_de_paredes_virgin: 'Saint Mariana of Jesus de Paredes, Virgin',
    // marianne_cope_virgin: 'Saint Marianne Cope, Virgin',
    // marie_anne_blondin_virgin: 'Blessed Marie-Anne Blondin, Virgin',
    // marie_eugenie_of_jesus_milleret_de_brou_virgin: 'Saint Marie-Eugénie of Jesus Milleret de Brou, Virgin and Foundress',
    // marie_leonie_paradis_virgin: 'Blessed Marie-Léonie Paradis, Virgin',
    // marie_rose_durocher_virgin: 'Blessed Marie Rose Durocher, Virgin',
    mark_evangelist: 'Szent Márk evangélista',  // src: mr_hu_1991_ed2
    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: 'Szent Márk, Szent István és Szent Menyhért áldozópapok, kassai vértanúk',  // based on: mr_hu_1991_ed2; src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=150
    marko_krizin_priest: 'Szent Márk áldozópap és vértanú',  // based on: mr_hu_1991_ed2
    // maron_of_syria_hermit: 'Saint Maroun, Hermit',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Szent Márta, Szent Mária és Szent Lázár',  // based on: mr_hu_1991_ed2, src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=134
    martin_de_porres_religious: 'Porres Szent Márton szerzetes',  // src: mr_hu_1991_ed2
    martin_i_pope: 'Szent I. Márton pápa és vértanú',  // src: mr_hu_1991_ed2
    martin_of_tours_bishop: 'Tours-i Szent Márton püspök',  // src: mr_hu_1991_ed2
    // martin_wu_xuesheng_and_companions_martyrs: 'Saint Martin Wu Xuesheng and Companions, Martyrs',
    // mary_adeodata_pisani_virgin: 'Blessed Mary Adeodata Pisani, Virgin',
    // mary_angela_truszkowska_virgin: 'Blessed Mary Angela Truszkowska, Virgin',
    // mary_assunta_pallotta_virgin: 'Blessed Mary Assunta Pallotta, Virgin',
    mary_magdalene: 'Szent Mária Magdolna',  // src: mr_hu_1991_ed2
    mary_magdalene_de_pazzi_virgin: 'Pazzi Szent Mária Magdolna szűz',  // src: mr_hu_1991_ed2
    mary_mother_of_god: 'Karácsony nyolcada (Kiskarácsony): Szűz Mária, Isten anyja (Újév)',  // src: mr_hu_1991_ed2
    mary_mother_of_the_church: 'Boldogságos Szűz Mária az Egyház anyja',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=114
    // mary_of_jesus_crucified_petkovic_virgin: 'Blessed Mary of Jesus Crucified Petković, Virgin',
    // mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: 'Saint Mary of Jesus in the Blessed Sacrament Venegas de la Torre, Virgin',
    // mary_of_jesus_the_good_shepherd_siedliska_virgin: 'Blessed Mary of Jesus the Good Shepherd Siedliska, Virgin',
    // mary_of_the_cross_mackillop_virgin: 'Saint Mary of the Cross MacKillop, Virgin',
    // mary_of_the_incarnation_barbara_acarie_religious: 'Blessed Mary of the Incarnation Barbara Acarie, Religious',
    // mary_of_the_incarnation_marie_guyart_religious: 'Saint Mary of the Incarnation Marie Guyart, Religious',
    // mary_of_the_providence_eugenie_smet_virgin: 'Blessed Mary of the Providence Eugénie Smet, Virgin',
    // mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin: 'Blessed Mary Thérèse de Soubiran La Louvière, Virgin',
    // mary_soledad_torres_acosta_virgin: 'Saint Mary Soledad Torres y Acosta, Virgin',
    // mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins: 'Blessed Mary Stella of the Blessed Sacrament Mardosewicz and Companions, Virgins and Martyrs',
    // mary_theresa_chiramel_mankidiyan_virgin: 'Saint Mary Theresa Chiramel Mankidiyan, Virgin',
    // mary_theresa_ledochowska_virgin: 'Blessed Mary Theresa Ledóchowska, Virgin',
    // mary_ursula_of_jesus_ledochowska_virgin: 'Saint Mary Ursula of Jesus Ledóchowska, Virgin',
    // marydolores_rodriguez_sopena_virgin: 'Blessed Mary Dolores Rodríguez Sopeña, Virgin',
    // maternus_of_cologne_bishop: 'Saint Maternus, Bishop',
    // maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: 'Saints Maternus, Valerius and Eucharius, Bishops',
    // matilda_of_ringelheim: 'Saint Matilda',
    matthew_apostle: 'Szent Mátyás apostol',  // src: mr_hu_1991_ed2
    matthias_apostle: 'Szent Máté apostol és evangélista',  // src: mr_hu_1991_ed2
    // maurice_of_agaunum_and_companions_martyrs: 'Saint Maurice and Companions, Martyrs',
    // maurice_tornay_priest: 'Blessed Maurice Tornay, Priest and Martyr',
    maurus_of_pecs_bishop: 'Boldog Mór püspök',  // src: mr_hu_1991_ed2
    maximilian_mary_raymund_kolbe_priest: 'Szent Maximilián Mária Kolbe áldozópap és vértanú',  // src: mr_hu_1991_ed2
    // mederic_of_autun_and_droctoveus_of_autun_abbots: 'Saints Mederic and Droctoveus, Abbots',
    // meinrad_of_einsiedeln_martyr: 'Saint Meinrad of Einsiedeln, Martyr',
    // mel_of_ardagh_bishop: 'Saint Mel, Bishop',
    // melchior_grodziecki_priest: 'Saint Melchior Grodziecki, Priest and Martyr',
    michael_gabriel_and_raphael_archangels: 'Szent Mihály, Szent Gábor és Szent Rafael főangyalok',  // src: mr_hu_1991_ed2
    // michael_kozal_bishop: 'Blessed Michael Kozal, Bishop and Martyr',
    // miguel_agustin_pro_priest: 'Blessed Miguel Agustín Pro, Priest and Martyr',
    // miguel_febres_cordero_religious: 'Saint Miguel Febres Cordero, Religious',
    // modestus_andlauer_and_andrew_bauer_martyrs: 'Saints Modestus Andlauer and Andrew Bauer, Martyrs',
    // modestus_andlauer_martyr: 'Saint Modestus Andlauer, Martyr',
    monica_of_hippo: 'Szent Mónika',  // src: mr_hu_1991_ed2
    // moninne_of_killeavy_virgin: 'Saint Moninne, Virgin',
    // morand_of_cluny_monk: 'Saint Morand, Monk',
    most_holy_body_and_blood_of_christ: 'Krisztus Szent Teste és Vére',  // src: mr_hu_1991_ed2
    most_holy_name_of_jesus: 'Jézus Szent Neve',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=46
    most_holy_name_of_mary: 'Szűz Mária szent neve',  // src: mr_hu_1991_ed2
    most_holy_trinity: 'Szentháromság vasárnapja',  // src: mr_hu_1991_ed2
    most_sacred_heart_of_jesus: 'Jézus Szent Szíve',  // src: mr_hu_1991_ed2
    // munchin_of_limerick_bishop: 'Saint Munchin, Bishop',
    // muredach_of_killala_bishop: 'Saint Muredach, Bishop',
    // mutien_marie_wiaux_religious: 'Saint Mutien-Marie Wiaux, Religious',
    nativity_of_john_the_baptist: 'Keresztelő Szent János születése',  // src: mr_hu_1991_ed2
    nativity_of_the_blessed_virgin_mary: 'Szűz Mária születése (Kisboldogasszony)',  // src: mr_hu_1991_ed2
    nativity_of_the_lord: 'Urunk születése: Karácsony',  // src: mr_hu_1991_ed2
    // nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: 'Saint Nazaria Ignacia of Saint Teresa of Jesus March Mesa, Virgin',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Szent Néreusz és Szent Achilleusz vértanúk',  // src: mr_hu_1991_ed2
    // nicholas_barre_priest: 'Blessed Nicholas Barré, Priest',
    // nicholas_of_flue_hermit: 'Saint Nicholas of Flüe, Hermit',
    nicholas_of_myra_bishop: 'Szent Miklós püspök',  // src: mr_hu_1991_ed2
    // nicholas_steno_bishop: 'Blessed Nicholas Steno, Bishop',
    // nicholas_tavelic_priest: 'Saint Nicholas Tavelić, Priest and Martyr',
    // ninian_of_whithorn_bishop: 'Saint Ninian, Bishop',
    norbert_of_xanten_bishop: 'Szent Norbert püspök',  // src: mr_hu_1991_ed2
    // nuno_of_saint_mary_pereira_religious: 'Saint Nuno of Saint Mary Pereira, Religious',
    // nykyta_budka_and_vasyl_velychkovsky_bishops: 'Blesseds Nykyta Budka and Vasyl Velychkovsky, Bishops and Martyrs',
    // odile_of_alsace_abbess: 'Saint Odile, Abbess',
    // odile_of_alsace_abbess_patroness_of_alsace: 'Saint Odile, Abbess, Patroness of Alsace',
    // odoric_of_pordenone_priest: 'Blessed Odoric of Pordenone, Priest',
    // olaf_ii_of_norway_martyr: 'Saint Olaf II, Martyr',
    // oleksiy_zarytskyi_priest: 'Blessed Oleksiy Zarytskyi, Priest and Martyr',
    // olga_of_kiev: 'Saint Olga',
    // oliver_plunket_bishop: 'Saint Oliver Plunket, Bishop and Martyr',
    // otteran_of_iona_monk: 'Saint Otteran, Monk',
    // otto_of_bamberg_bishop: 'Saint Otto of Bamberg, Bishop',
    our_lady_help_of_christians: 'Szűz Mária, a keresztények segítsége',  // src: mr_hu_1991_ed2
    // our_lady_mediatrix_of_all_grace: 'Our Lady, Mediatrix of All Grace',
    // our_lady_mother_of_christian_unity: 'Our Lady, Mother of Christian Unity',
    // our_lady_mother_of_divine_providence_patroness_of_puerto_rico: 'Our Lady, Mother of Divine Providence, Patroness of Puerto Rico',
    // our_lady_of_aparecida_patroness_of_brazil: 'Our Lady of Aparecida, Patroness of Brazil',
    // our_lady_of_bethlehem: 'Our Lady of Bethlehem',
    // our_lady_of_china: 'Our Lady of China',
    // our_lady_of_czestochowa: 'Our Lady of Częstochowa',
    our_lady_of_fatima: 'A Fatimai Boldogságos Szűz Mária',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=105
    // our_lady_of_good_counsel: 'Our Lady of Good Counsel',
    our_lady_of_guadalupe: 'A Guadalupei Boldogságos Szűz Mária',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=35
    our_lady_of_guadalupe_patroness_of_the_americas: 'A Guadalupei Boldogságos Szűz Mária, Amerikák védőszentje',  // based on: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=35
    our_lady_of_guadalupe_patroness_of_the_philippines: 'A Guadalupei Boldogságos Szűz Mária, a Fülöp-szigetek védőszentje',  // based on: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=35
    our_lady_of_hungary_patroness_of_hungary: 'Szűz Mária, Magyarok Nagyasszonya, Magyarország Főpátronája',  // src: mr_hu_1991_ed2
    // our_lady_of_itati: 'Our Lady of Itatí',
    // our_lady_of_knock: 'Our Lady of Knock',
    // our_lady_of_lanka: 'Our Lady of Lanka',
    // our_lady_of_lebanon: 'Our Lady of Lebanon',
    our_lady_of_loreto: 'A Loretói Boldogságos Szűz Mária',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=34
    our_lady_of_lourdes: 'A Lourdes-i Boldogságos Szűz Mária',  // src: mr_hu_1991_ed2
    // our_lady_of_lujan_patroness_of_argentina: 'Our Lady of Luján, Patroness of Argentina',
    // our_lady_of_madhu: 'Our Lady of Madhu',
    // our_lady_of_marija_bistrica: 'Our Lady of Marija Bistrica',
    // our_lady_of_mercy: 'Our Lady of Mercy',
    our_lady_of_mount_carmel: 'Kármel-hegyi Boldogasszony',  // src: mr_hu_1991_ed2
    our_lady_of_mount_carmel_mother_and_queen_of_chile: 'Kármel-hegyi Boldogasszony, Chile anyja és királynője',  // based on: mr_hu_1991_ed2 + http://www.archivioradiovaticana.va/storico/2018/01/16/ferenc_p%C3%A1pa_besz%C3%A9de_a_chilei_hat%C3%B3s%C3%A1g_k%C3%A9pvisel%C5%91ihez_chile_meg_tudta/hu-1359089
    // our_lady_of_perpetual_help: 'Our Lady of Perpetual Help',
    our_lady_of_sorrows: 'A Fájdalmas Szűzanya',  // src: mr_hu_1991_ed2
    our_lady_of_sorrows_patroness_of_slovakia: 'A Fájdalmas Szűzanya, Slovákia védőszentje',  // based on: mr_hu_1991_ed2
    // our_lady_of_the_discovery_of_the_hidden_christians: 'Our Lady of the Discovery of the Hidden Christians',
    // our_lady_of_the_gate_of_dawn: 'Our Lady of the Gate of Dawn',
    // our_lady_of_the_miraculous_medal: 'Our Lady of the Miraculous Medal',
    // our_lady_of_the_pillar: 'Our Lady of the Pillar',
    our_lady_of_the_rosary: 'Rózsafüzér Királynője',  // src: mr_hu_1991_ed2
    // our_lady_of_the_valley: 'Our Lady of the Valley',
    // our_lady_of_vladimir: 'Our Lady of Vladimir',
    // our_lady_of_walsingham: 'Our Lady of Walsingham',
    // our_lady_queen_of_peace: 'Our Lady of Peace',
    // our_lady_queen_of_poland: 'Our Lady, Queen of Poland',
    // our_lady_refuge_of_sinners: 'Our Lady, Refuge of Sinners',
    our_lord_jesus_christ_king_of_the_universe: 'Krisztus, a Mindenség Királya',  // src: mr_hu_1991_ed2
    our_lord_jesus_christ_the_eternal_high_priest: 'A mi Urunk, Jézus Krisztus, az Örök Főpap',  // presumably src: mr_hu_2023_ed3; actually: https://www.liturgia.hu/l/referensi-szakmai-nap-az-uj-magyar-nyelvu-romai-misekonyvrol/
    // our_lord_of_miracles: 'Our Lord of Miracles',
    palm_sunday_of_the_passion_of_the_lord: 'Urunk szenvedésének vasárnapja – Virágvasárnap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=79
    pancras_of_rome_martyr: 'Szent Pongrác vértanú',  // src: mr_hu_1991_ed2
    // pantaleon_of_nicomedia_martyr: 'Saint Pantaleon of Nicomedia, Martyr',
    // paschal_baylon_religious: 'Saint Paschal Baylón, Religious',
    passion_of_saint_john_the_baptist: 'Keresztelő Szent János vértanúsága',  // src: mr_hu_1991_ed2
    patrick_of_ireland_bishop: 'Szent Patrik püspök',  // src: mr_hu_1991_ed2
    patrick_of_ireland_bishop_patron_of_ireland: 'Szent Patrik püspök, Írország védőszentje',  // based on: mr_hu_1991_ed2 + https://hu.wikipedia.org/w/index.php?title=Szent_Patrik&oldid=26115930
    // paul_chen_changpin_and_companions_martyrs: 'Saint Paul Chen Changpin and Companions, Martyrs',
    // paul_liu_hanzuo_priest: 'Saint Paul Liu Hanzuo, Priest and Martyr',
    paul_miki_and_companions_martyrs: 'Miki Szent Pál és társai vértanúk',  // src: mr_hu_1991_ed2
    paul_of_the_cross_priest: 'Keresztes Szent Pál áldozópap',  // src: mr_hu_1991_ed2
    paul_of_thebes_hermit: 'Remete Szent Pál',  // src: mr_hu_1991_ed2
    paul_vi_pope: 'Szent VI. Pál pápa',
    // paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: 'Saint Paulina of the Agonizing Heart of Jesus Visintainer, Virgin',
    paulinus_of_nola_bishop: 'Nolai Szent Paulinusz püspök',  // src: mr_hu_1991_ed2
    // paulinus_of_trier_bishop: 'Saint Paulinus of Trier, Bishop',
    // paulinus_of_york_bishop: 'Saint Paulinus of York, Bishop',
    // pavel_peter_gojdic_bishop: 'Blessed Pavel Peter Gojdič, Bishop and Martyr',
    // pedro_calungsod_martyr: 'Saint Pedro Calungsod, Martyr',
    // pelagius_of_cordoba_martyr: 'Saint Pelagius of Córdoba, Martyr',
    pentecost_sunday: 'Pünkösdvasárnap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=113
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Szent Perpétua és Felicitász vértanúk',  // src: mr_hu_1991_ed2
    peter_and_paul_apostles: 'Szent Péter és Szent Pál apostolok',  // src: mr_hu_1991_ed2
    // peter_baptist_blasquez_paul_miki_and_companions_martyrs: 'Saints Peter Baptist Blásquez, Paul Miki and Companions, Martyrs',
    peter_canisius_priest: 'Kaníziusz Szent Péter áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    peter_chanel_priest: 'Chanel Szent Péter áldozópap és vértanú',  // src: mr_hu_1991_ed2
    peter_chanel_priest_patron_of_oceania: 'Chanel Szent Péter áldozópap és vértanú, Óceánia első vértanú, Óceánia védőszentje',  // based on: mr_hu_1991_ed2 + https://archiv.katolikus.hu/szentek2/SZENTEK/00000231.HTM
    peter_chrysologus_bishop: 'Aranyszavú (Krizológ) Szent Péter püspök és egyháztanító',  // src: mr_hu_1991_ed2
    peter_claver_priest: 'Claver Szent Péter áldozópap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=151
    peter_damian_bishop: 'Damiáni Szent Péter püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // peter_de_zuniga_and_louis_flores_priests: 'Blesseds Peter de Zúñiga and Louis Flores, Priests and Martyrs',
    // peter_julian_eymard_priest: 'Saint Peter Julian Eymard, Priest',
    // peter_kibe_priest_and_companions_martyrs: 'Blessed Peter Kibe, Priest, and Companions, Martyrs',
    // peter_liu_wenyuan_martyr: 'Saint Peter Liu Wenyuan, Martyr',
    // peter_of_alcantara_priest: 'Saint Peter of Alcántara, Priest',
    // peter_sanz_bishop: 'Saint Peter Sanz, Bishop and Martyr',
    // peter_to_rot_martyr: 'Blessed Peter To Rot, Martyr',
    // peter_wu_guosheng_martyr: 'Saint Peter Wu Guosheng, Martyr',
    philip_and_james_apostles: 'Szent Fülöp és Szent Jakab apostolok',  // src: mr_hu_1991_ed2
    // philip_evans_and_john_lloyd_priests: 'Saints Philip Evans and John Lloyd, Priests and Martyrs',
    philip_neri_priest: 'Néri Szent Fülöp áldozópap',  // src: mr_hu_1991_ed2
    // philip_of_jesus_de_las_casas_martyr: 'Saint Philip of Jesus de las Casas, Martyr',
    // philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs: 'Saints Philip of Jesus de las Casas, Paul Miki and Companions, Martyrs',
    // pirmin_of_hornbach_abbot: 'Saint Pirmin, Abbot',
    pius_francesco_forgione_priest: 'Pietrelcinai Szent Pió áldozópap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=156
    pius_ix_pope: 'Boldog IX. Piusz pápa',  // based on: mr_hu_1991_ed2
    pius_v_pope: 'Szent V. Piusz pápa',  // src: mr_hu_1991_ed2
    pius_x_pope: 'Szent X. Piusz pápa',  // src: mr_hu_1991_ed2
    polycarp_of_smyrna_bishop: 'Szent Polikárp püspök és vértanú',  // src: mr_hu_1991_ed2
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Szent Ponciánusz pápa és Szent Hippolitusz áldozópap vértanúk',  // src: mr_hu_1991_ed2
    // pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: 'Saints Pothinus, Bishop, Blandina, Virgin, and Companions, Martyrs',
    presentation_of_the_blessed_virgin_mary: 'A Boldogságos Szűz Mária bemutatása a templomban',  // src: mr_hu_1991_ed2
    presentation_of_the_lord: 'Urunk bemutatása (Gyertyaszentelő Boldogasszony)',  // src: mr_hu_1991_ed2
    // procopius_of_sazava_abbot: 'Saint Procopius of Sázava, Abbot',
    // publius_of_malta_bishop: 'Saint Publius, Bishop',
    queenship_of_the_blessed_virgin_mary: 'Boldogságos Szűz Mária Királynő',  // src: mr_hu_1991_ed2
    quirinus_of_sescia_bishop: 'Szent Quirinus püspök és vértanú',  // src: mr_hu_1991_ed2
    // rabanus_maurus_bishop: 'Saint Rabanus Maurus, Bishop',
    // radim_of_gniezno_bishop: 'Saint Radim, Bishop',
    // rafqa_pietra_choboq_ar_rayes_virgin: 'Saint Rafqa Pietra Choboq Ar-Rayès, Virgin',
    // raphael_chylinski_priest: 'Blessed Raphael Chyliński, Priest',
    // raphael_guizar_y_valencia_bishop: 'Saint Raphael Guízar y Valencia, Bishop',
    // raphael_of_saint_joseph_kalinowski_priest: 'Saint Raphael of Saint Joseph Kalinowski, Priest',
    raymond_of_penyafort_priest: 'Penyaforti Szent Rajmund áldozópap',  // src: mr_hu_1991_ed2
    // remigius_of_reims_bishop: 'Saint Remigius, Bishop',
    // richard_gwyn_martyr: 'Saint Richard Gwyn, Martyr',
    // richard_of_chichester_bishop: 'Saint Richard of Chichester, Bishop',
    // richardis_of_swabia_empress: 'Saint Richardis, Empress',
    rita_of_cascia_religious: 'Szent Rita özvegy',  // src: mr_hu_1991_ed2
    robert_bellarmine_bishop: 'Bellarmin Szent Róbert püspök és egyháztanító',  // src: mr_hu_1991_ed2
    // roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: 'Saints Roch González, Alphonsus Rodríguez and John del Castillo, Priests and Martyrs',
    // roch_of_montpellier: 'Saint Roch',
    romuald_of_ravenna_abbot: 'Szent Romuald apát',  // src: mr_hu_1991_ed2
    // rosalie_jeanne_marie_rendu_virgin: 'Blessed Rosalie Rendu, Virgin',
    rose_of_lima_virgin: 'Limai Szent Róza szűz',  // src: mr_hu_1991_ed2
    rose_of_lima_virgin_copatroness_of_the_philippines: 'Limai Szent Róza szűz, Copatroness of the Philippines',  // src: mr_hu_1991_ed2
    // rose_philippine_duchesne_virgin: 'Saint Rose Philippine Duchesne, Virgin',
    // rupert_of_salzburg_and_virgilius_of_salzburg_bishops: 'Saints Rupert and Virgilius of Salzburg, Bishops',
    // salomea_of_poland_religious: 'Blessed Salomea of Poland, Religious',
    // sancha_of_portugal_and_mafalda_of_portugal_virgins: 'Blessed Sancha and Mafalda, Virgins',
    sara_salkahazi_virgin: 'Boldog Salkaházi Sára szűz és vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=104, without a comma before the titles
    scholastica_of_nursia_virgin: 'Szent Skolasztika szűz',  // src: mr_hu_1991_ed2
    // sebastian_de_aparicio_religious: 'Blessed Sebastian de Aparicio, Religious',
    sebastian_of_milan_martyr: 'Szent Sebestyén vértanú',  // src: mr_hu_1991_ed2
    // senan_of_inis_cathaigh_bishop: 'Saint Senan, Bishop',
    seven_holy_founders_of_the_servite_order: 'A szervita rend hét szent alapítója',  // src: mr_hu_1991_ed2
    // seven_martyred_nuns_from_the_franciscan_missionaries_of_mary: 'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
    // severinus_of_noricum_monk: 'Saint Severinus of Noricum, Monk',
    sharbel_makhluf_priest: 'Szent Charbel Makhlouf áldozópap',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=134
    // shipwreck_of_saint_paul_apostle: 'Shipwreck of Saint Paul, Apostle',
    // sigismund_of_burgundy_martyr: 'Saint Sigismund, Martyr',
    // sigmund_felix_felinski_bishop: 'Saint Sigmund Felix Feliński, Bishop',
    simon_and_jude_apostles: 'Szent Simon és Szent Júdás Tádé apostolok',  // src: mr_hu_1991_ed2
    // simon_of_lipnica_priest: 'Saint Simon of Lipnica, Priest',
    // six_welsh_martyrs_and_companions: 'Six Welsh Martyrs and Companions',
    sixtus_ii_pope_and_companions_martyrs: 'Szent II. Szixtusz pápa és társai vértanúk',  // src: mr_hu_1991_ed2
    // spyridon_of_trimythous_bishop: 'Saint Spyridon, Bishop',
    // stanislaus_kazimierczyk_priest: 'Saint Stanislaus Kazimierczyk, Priest',
    // stanislaus_kostka_religious: 'Saint Stanislaus Kostka, Religious',
    stanislaus_of_szczepanow_bishop: 'Szent Szaniszló püspök és vértanú',  // src: mr_hu_1991_ed2
    stanislaus_of_szczepanow_bishop_patron_of_poland: 'Szent Szaniszló püspök és vértanú, Lengyelország védőszentje',  // based on: mr_hu_1991_ed2 + https://hu.wikipedia.org/w/index.php?title=Szent_Szaniszl%C3%B3&oldid=23069409
    stephen_i_of_hungary: 'Szent István király',  // src: mr_hu_1991_ed2
    stephen_the_first_martyr: 'Szent István első vértanú',  // src: mr_hu_1991_ed2
    sunday_of_the_word_of_god: 'Évközi III. vasárnap – Isten Igéjének vasárnapja',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=55
    // sunniva_of_norway_virgin: 'Saint Sunniva, Virgin and Martyr',
    // swithun_of_winchester_bishop: 'Saint Swithun, Bishop',
    sylvester_i_pope: 'Szent I. Szilveszter pápa',  // src: mr_hu_1991_ed2
    szilard_bogdanffy_bishop: 'Boldog Bogdánffy Szilárd püspök és vértanú',
    // teilo_of_llandaff_bishop: 'Saint Teilo, Bishop',
    teresa_benedicta_of_the_cross_stein_virgin: 'A keresztről nevezett Szent Terézia Benedikta (Edith Stein) szűz és vértanú',  // based on: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=138
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: 'A keresztről nevezett Szent Terézia Benedikta (Edith Stein) szűz és vértanú, Európa társvédőszentje',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=138
    teresa_of_calcutta_religious: 'Kalkuttai Szent Teréz',
    // teresa_of_jesus_jornet_ibars_virgin: 'Saint Teresa of Jesus Jornet Ibars, Virgin',
    teresa_of_jesus_of_avila_virgin: 'A Jézusról nevezett (Avilai) Szent Teréz szűz és egyháztanító',  // src: mr_hu_1991_ed2
    // teresa_of_jesus_of_los_andes_virgin: 'Saint Teresa of Jesus of Los Andes, Virgin',
    // teresa_of_portugal_religious: 'Blessed Teresa of Portugal, Religious',
    // theodore_of_canterbury_bishop: 'Saint Theodore of Canterbury, Bishop',
    theodore_romzha_bishop: 'Boldog Romzsa Tódor püspök és vértanú',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=171
    // theodosius_of_the_caves_abbot: 'Saint Theodosius of the Caves, Abbot',
    // theotonius_of_coimbra_priest: 'Saint Theotonius of Coimbra, Priest',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: 'A Gyermek Jézusról nevezett (Lisieux-i) Szent Teréz szűz és egyháztanító',  // src: mr_hu_1991_ed2 + `Doctor of the Church` title
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france: 'A Gyermek Jézusról nevezett (Lisieux-i) Szent Teréz szűz és egyháztanító, Franciaország társvédőszentje',  // based on: mr_hu_1991_ed2
    thomas_apostle: 'Szent Tamás apostol',  // src: mr_hu_1991_ed2
    thomas_aquinas_priest: 'Aquinói Szent Tamás áldozópap és egyháztanító',  // src: mr_hu_1991_ed2
    thomas_becket_bishop: 'Becket Szent Tamás püspök és vértanú',  // src: mr_hu_1991_ed2
    // thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs: 'Saint Thomas Hioji Rokuzayemon Nishi, Priest, and Companions, Martyrs',
    // thomas_jean_georges_rehm_priest: 'Blessed Thomas Jean-Georges Rehm, Priest and Martyr',
    // thomas_of_villanova_bishop: 'Saint Thomas of Villanova, Bishop',
    // thorfinn_of_hamar_bishop: 'Saint Thorfinn, Bishop',
    // thorlac_of_iceland_bishop: 'Saint Thorlac, Bishop',
    thursday_of_the_lords_supper: 'Az utolsó vacsora emlékére',  // src: https://tar.liturgia.hu/Naptar/DIR2022_JAV_2021-12-13.pdf#page=85
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Szent Timóteus és Szent Titusz püspökök',  // src: mr_hu_1991_ed2
    transfiguration_of_the_lord: 'Urunk színeváltozása',  // src: mr_hu_1991_ed2
    // translation_of_the_relics_of_odile_of_alsace_abbess: 'Translation of the Relics of Saint Odile',
    translation_of_the_relics_of_saint_stephen_of_hungary: 'Szent István király ereklyéinek átvitele',  // src: mr_hu_1991_ed2
    turibius_of_mogrovejo_bishop: 'Mongrovejói Szent Turibiusz püspök',  // based on: mr_hu_1991_ed2
    // ulrich_of_augsburg_bishop: 'Saint Ulrich of Augsburg, Bishop',
    // urban_i_pope: 'Saint Urban I, Pope',
    // ursula_of_cologne_and_companions_virgins: 'Saint Ursula and Companions, Virgins and Martyrs',
    // valentine_of_raetia_bishop: 'Saint Valentine of Raetia, Bishop',
    // valerius_of_trier_bishop: 'Saint Valerius, Bishop',
    vincent_de_paul_priest: 'Páli Szent Vince áldozópap',  // src: mr_hu_1991_ed2
    vincent_ferrer_priest: 'Ferrer Szent Vince áldozópap',  // src: mr_hu_1991_ed2
    // vincent_kadlubek_bishop: 'Blessed Vincent Kadłubek, Bishop',
    // vincent_lewoniuk_and_companions_martyrs: 'Blessed Vincent Lewoniuk and Companions, Martyrs',
    vincent_of_saragossa_deacon: 'Szent Vince diakónus és vértanú',  // src: mr_hu_1991_ed2
    // vincent_pallotti_priest: 'Saint Vincent Pallotti, Priest',
    // virgilius_of_salzburg_bishop: 'Saint Virgilius, Bishop and Missionary',
    visitation_of_mary: 'Szűz Mária látogatása Erzsébetnél (Sarlós Boldogasszony)',  // src: mr_hu_1991_ed2
    // vitus_of_lucania_martyr: 'Saint Vitus, Martyr',
    // vladimir_ghika_priest: 'Blessed Vladimir Ghika, Priest and Martyr',
    // vladimir_i_the_great_of_kiev: 'Saint Vladimir the Great',
    // waitangi_day: 'Waitangi Day',
    // walpurga_of_heidenheim_abbess: 'Saint Walpurga of Heidenheim, Abbess',
    wenceslaus_i_of_bohemia_martyr: 'Szent Vencel vértanú',  // src: mr_hu_1991_ed2
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation: 'Szent Vencel vértanú, a cseh nemzet védőszentje',  // based on: mr_hu_1991_ed2
    // wendelin_of_trier_hermit: 'Saint Wendelin, Hermit',
    // wilfrid_of_york_bishop: 'Saint Wilfrid, Bishop',
    william_apor_bishop: 'Boldog Apor Vilmos püspök és vértanú',
    // willibald_of_eichstatt_bishop: 'Saint Willibald, Bishop',
    // willibrord_of_utrecht_bishop: 'Saint Willibrord, Bishop',
    // winefride_of_flintshire_virgin: 'Saint Winefride, Virgin',
    // wladyslaw_bladzinski_priest_and_companions_martyrs: 'Blessed Wladyslaw Błądziński, Priest, and Companions, Martyrs',
    // wolfgang_of_regensburg_bishop: 'Saint Wolfgang of Regensburg, Bishop',
    // wulstan_of_worcester_bishop: 'Saint Wulstan, Bishop',
    yolanda_of_poland_religious: 'Árpád-házi Boldog Jolán szerzetesnő',  // src: mr_hu_1991_ed2
    // zdenka_cecilia_schelingova_virgin: 'Blessed Zdenka Cecilia Schelingová, Virgin and Martyr',
    // zdislava_of_lemberk: 'Saint Zdislava',
    // zepherin_namuncura: 'Blessed Zepherin Namuncurá',
    // zoltan_lajos_meszlenyi_bishop: 'Blessed Zoltán Lajos Meszlényi, Bishop and Martyr',
    // zygmunt_gorazdowski_priest: 'Saint Zygmunt Gorazdowski, Priest',
  },
};
