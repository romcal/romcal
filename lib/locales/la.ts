import { Locale } from '@romcal/types/locale';

export const locale: Locale = {
  key: 'la',

  roman_rite: {
    seasons: {
      advent: {
        season: 'Adventus',
        weekday:
          '{{day, capitalize}}, hebdomada $t(ordinals:{{week}}) Adventus',
        sunday: 'Dominica $t(ordinals:{{week}}) Adventus',
      },

      christmas_time: {
        season: 'Nativitatis',
        day: '{{day, capitalize}} temporis Nativitatis',
        octave: 'De die {{count}} infra octavam Nativitatis',
        second_sunday_after_christmas: 'Dominica Secundi post Nativitatem',
        before_epiphany: '{{day, capitalize}} post octavam Nativitatis',
        after_epiphany: '{{day, capitalize}} post Epiphaniam',
      },

      ordinary_time: {
        season: 'Per annum',
        weekday:
          '{{day, capitalize}}, hebdomada $t(ordinals:{{week}}) per annum',
        sunday: 'Dominica $t(ordinals:{{week}}) per annum',
      },

      lent: {
        season: 'Quadragesimæ',
        weekday:
          '{{day, capitalize}}, hebdomada $t(ordinals:{{week}}) Quadragesimæ',
        sunday: 'Dominica $t(ordinals:{{week}}) Quadragesimæ',
        day_after_ash_wed: '{{day, capitalize}} post Cineres',
        holy_week_day: '{{day, capitalize}} Hebdomadæ Sanctæ',
      },

      paschal_triduum: {
        season: 'Triduum paschale',
      },

      easter_time: {
        season: 'Paschæ',
        weekday:
          '{{day, capitalize}}, hebdomada $t(ordinals:{{week}}) temporis paschalis',
        sunday: 'Dominica $t(ordinals:{{week}}) Paschæ',
        octave: 'De die {{day}} infra octavam Paschæ',
      },
    },

    periods: {
      epiphany: 'Epiphaniæ',
      holy_week: 'Hebdomadæ Sanctæ',
    },

    ranks: {
      solemnity: 'sollemnitas',
      sunday: 'dominica',
      feast: 'festum',
      memorial: 'memoria',
      weekday: 'feria',
    },

    celebrations: {
      all_saints: 'Omnium Sanctorum',
      annunciation: 'In Annuntiatione Domini',
      ascension: 'In Ascensione Domini',
      ash_wednesday: 'Feria IV Cinerum',
      assumption: 'In Assumptione Beatæ Mariæ Virginis',
      baptism_of_the_lord: 'In Baptismate Domini',
      christ_the_king_sunday: 'D. N. I. C. universorum regis',
      christmas: 'In Nativitate Domini',
      corpus_christi: 'Ss.mi Corporis et Sanguinis Christi',
      divine_mercy_sunday:
        'Dominica in octava Paschæ seu de Divina Misericordia',
      easter_sunday: 'Dominica Paschæ in Resurrectione Domini',
      epiphany: 'In Epiphania Domini',
      exaltation_of_the_holy_cross: 'In Exaltatione Sanctæ Crucis',
      good_friday: 'Feria VI in Passione Domini',
      holy_family: 'Sanctæ Familiæ Iesu, Mariæ et Ioseph',
      holy_saturday: 'Sabbato Sancto/Vigilia paschalis',
      holy_thursday: 'Feria V Hebdomadæ Sanctæ',
      immaculate_conception_of_mary:
        'In Conceptione Immaculata Beatæ Mariæ Virginis',
      immaculate_heart_of_mary: 'Immaculati Cordis B. Mariæ Virginis',
      joseph_spouse_of_mary: 'S. Iosephi, Sponsi B. M. V.',
      mary_mother_of_god:
        'In octava Nativitatis Domini, Sollemnitas Sanctæ Dei Genetricis Mariæ',
      most_sacred_heart_of_jesus: 'Sacratissimi Cordis Iesu',
      nativity_of_john_the_baptist: 'In Nativitate S. Ioannis Baptistæ',
      palm_sunday: 'Dominica in Palmis de Passione Domini',
      pentecost_sunday: 'Dominica Pentecostes',
      peter_and_paul_apostles: 'Ss. Petri et Pauli, apostolorum',
      presentation_of_the_lord: 'In Præsentatione Domini',
      transfiguration: 'In Transfiguratione Domini',
      trinity_sunday: 'Ss.mæ Trinitatis',
    },
  },

  colors: {
    black: 'niger',
    gold: 'auri',
    green: 'viridis',
    purple: 'violaceus',
    red: 'ruber',
    rose: 'rosaceus',
    white: 'albus',
  },

  martyrology: {
    '205_blessed_martyrs_of_japan': 'B. Martyres Iaponici CCV',
    adalbert_of_prague_bishop: 'S. Adalberti, episcopi et martyris',
    adalbert_of_prague_bishop_patron_of_poland:
      'S. Adalberti, episcopi, martyris et patroni Poloniæ',
    adolph_kolping_priest: 'B. Adolphi Kolping, presbyteri',
    aelred_of_rievaulx_abbot: 'S. Ælredi Riævallensis, abbatis',
    aengus_of_tallaght_bishop: 'S. Ængi, episcopi et abbatis',
    agatha_of_sicily_virgin: 'S. Agathæ, virginis et martyris',
    agnes_cao_guiying_martyr: 'S. Agnetis Cao Guiying, martyris',
    agnes_of_bohemia_virgin: 'S. Agnetis de Bohemia, virginis',
    agnes_of_rome_virgin: 'S. Agnetis, virginis et martyris',
    aidan_of_ferns_bishop: 'S. Ædani Lindisfarnensis, episcopi',
    aidan_of_lindisfarne_bishop: 'S. Ædani Lindisfarnensis, episcopi',
    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne:
      'Ss. Ædani, episcopi et Sanctorum Lindisfarnensis',
    ailbe_of_emly_bishop: 'S. Albei, episcopi',
    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs:
      'Ss. Albani, Iulii et Aaron, martyrum',
    alban_of_britain_martyr: 'S. Albani, martyris',
    alberic_crescitelli_priest:
      'S. Alberici Crescitelli, presbyteri et martyris',
    albert_chmielowski_religious: 'S. Alberti Chmielowski, religiosi',
    albert_the_great_bishop: 'S. Alberti Magni, episcopi',
    albertina_berkenbrock_virgin: 'B. Albertinæ Berinche, virginis et martyris',
    alberto_hurtado_priest: 'S. Alberti Hurtado, presbyteri',
    all_saints_of_ireland: 'Omnium Sanctorum Hiberniæ',
    all_saints_of_wales: 'Omnium Sanctorum Cambriæ',
    all_souls: 'In Commemoratione omnium fidelium defunctorum',
    aloysius_gonzaga_religious: 'S. Aloisii Gonzaga, religiosi',
    aloysius_stepinac_bishop: 'B. Aloisii Stepinac, episcopi et martyris',
    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs:
      'Ss. Aloisii Versiglia, episcopi, et Callisti Caravario, presbyteri, martyrum',
    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin:
      'S. Alfonsæ ab Immaculata Conceptione Muttathupadathu, virginis',
    alphonsus_liguori_bishop:
      'S. Alfonsi Mariæ de’ Liguori, episcopi et Ecclesiæ doctoris',
    amand_of_maastricht_bishop: 'S. Amandi, episcopi',
    ambrose_of_milan_bishop: 'S. Ambrosii, episcopi et Ecclesiæ doctoris',
    andre_bessette_religious: 'S. Andreæ Bessette, religiosi',
    andre_grasset_priest: 'B. Andreæ Grasset, presbyteri et martyris',
    andrew_apostle: 'S. Andreæ, apostoli',
    andrew_apostle_patron_of_russia: 'S. Andreæ, apostoli et patroni Russiæ',
    andrew_apostle_patron_of_scotland: 'S. Andreæ, apostoli et patroni Scotiæ',
    andrew_bobola_priest: 'S. Andreæ Bobola, presbyteri et martyris',
    andrew_de_soveral_and_ambrose_francis_ferro_priests:
      'Ss. Andreæ de Soveral et Ambrosii Francisci Ferro, presbyterorum et martyrum',
    andrew_dung_lac_priest_and_companions_martyrs:
      'Ss. Andreæ Dũng Lạc, presbyteri, et sociorum, martyrum',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Ss. Andreæ Kim Tae-gŏn, presbyteri, Pauli Chŏng Ha-sang et sociorum, martyrum',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits:
      'Ss. Andreæ Zœrardi et Benedicti, eremitarum',
    angela_merici_virgin: 'S. Angelæ Merici, virginis',
    angela_salawa_virgin: 'B. Angelæ Salawa, virginis',
    anno_of_cologne_bishop: 'S. Annonis Coloniensis, episcopi',
    anselm_of_canterbury_bishop: 'S. Anselmi, episcopi et Ecclesiæ doctoris',
    ansgar_of_hamburg_bishop: 'S. Ansgarii, episcopi',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs:
      'Bb. Antonii Iuliani Nowowiejski, episcopi, et sociorum, martyrum',
    anthony_mary_claret_bishop: 'S. Antonii Mariæ Claret, episcopi',
    anthony_of_egypt_abbot: 'S. Antonii, abbatis',
    anthony_of_padua_priest:
      'S. Antonii de Padova, presbyteri et Ecclesiæ doctoris',
    anthony_of_saint_anne_galvao_priest:
      'S. Antonii a Sancta Anna Galvão, presbyteri',
    anthony_of_the_caves_monk: 'S. Antonii Kioviensis, monachi',
    anthony_zaccaria_priest: 'S. Antonii Mariæ Zaccaria, presbyteri',
    apollinaris_of_ravenna_bishop: 'S. Apollinaris, episcopi et martyris',
    asaph_of_wales_bishop: 'S. Asaphi, episcopi',
    asicus_of_elphin_bishop: 'S. Assici, episcopi',
    athanasius_of_alexandria_bishop:
      'S. Athanasii, episcopi et Ecclesiæ doctoris',
    attracta_of_killaraght_virgin: 'S. Attractæ, virginis',
    augustine_kazotic_bishop: 'B. Augustini Gazothus, episcopi et martyris',
    augustine_of_canterbury_bishop: 'S. Augustini Cantuariensis, episcopi',
    augustine_of_hippo_bishop: 'S. Augustini, episcopi et Ecclesiæ doctoris',
    augustine_zhao_rong_priest:
      'S. Augustini Zhao Rong, presbyteri et martyris',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Ss. Augustini Zhao Rong, presbyteri, et sociorum, martyrum',
    barbara_of_heliopolis_virgin: 'S. Barbaræ, virginis et martyris',
    barnabas_apostle: 'S. Barnabæ, apostoli',
    bartholomew_apostle: 'S. Bartholomæi, apostoli',
    bartholomew_dias_laurel_religious:
      'B. Bartholomæi Días Laurel, religiosi et martyris',
    bartholomew_of_the_martyrs_fernandes_bishop:
      'B. Bartholomæi de Martyribus Fernandes, episcopi',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Ss. Basilii Magni et Gregorii Nazianzeni, episcoporum et Ecclesiæ doctorum',
    beatrice_da_silva_meneses_virgin: 'S. Beatricis de Silva, virginis',
    bede_the_venerable_priest:
      'S. Bedæ Venerabilis, presbyteri et Ecclesiæ doctoris',
    benedict_of_jesus_valdivielso_saez_religious:
      'S. Benedicti a Iesu Valdivielso Sáez, religiosi et martyris',
    benedict_of_nursia_abbot: 'S. Benedicti, abbatis',
    benedict_of_nursia_abbot_patron_of_europe:
      'S. Benedicti, abbatis et patroni Europæ',
    benno_of_meissen_bishop: 'S. Bennonis Misnensis, episcopi',
    bernadette_soubirous_virgin: 'S. Bernardæ Soubirous, virginis',
    bernard_of_clairvaux_abbot: 'S. Bernardi, abbatis et Ecclesiæ doctoris',
    bernardine_of_siena_priest: 'S. Bernardini Senensis, presbyteri',
    beuno_of_wales_abbot: 'S. Boni, abbatis',
    blaise_of_sebaste_bishop: 'S. Blasii, episcopi et martyris',
    bogumilus_of_dobrow_bishop: 'B. Bogumili, episcopi',
    boleslawa_mary_lament_virgin: 'B. Boleslavæ Mariæ Lament, virginis',
    bonaventure_of_bagnoregio_bishop:
      'S. Bonaventuræ, episcopi et Ecclesiæ doctoris',
    boniface_of_mainz_bishop: 'S. Bonifatii, episcopi et martyris',
    boris_of_kiev_and_gleb_of_kiev_martyrs: 'Ss. Borisi et Hlibi, martyrum',
    brendan_of_clonfert_abbot: 'S. Brendani, abbatis',
    bridget_of_sweden_religious: 'S. Birgittæ, religiosæ',
    bridget_of_sweden_religious_copatroness_of_europe:
      'S. Birgittæ, religiosæ et patronæ secundariæ Europæ',
    brigid_of_kildare_virgin_copatroness_of_ireland:
      'S. Brigidæ, virginis et patronæ secundariæ Hiberniæ',
    bronislava_of_poland_virgin: 'B. Bronislavæ, virginis',
    bronislaw_markiewicz_priest: 'B. Bronislawi Markiewicz, presbyteri',
    bruno_of_cologne_priest: 'S. Brunonis, presbyteri',
    bruno_of_querfurt_bishop: 'S. Brunonis a Querfurt, episcopi et martyris',
    caesarius_of_arles_bishop: 'S. Cæsarii Arelatensis, episcopi',
    cajetan_of_thiene_priest: 'S. Caietani, presbyteri',
    callistus_i_pope: 'S. Callisti I, papæ et martyris',
    camillus_de_lellis_priest: 'S. Camilli de Lellis, presbyteri',
    canice_of_kilkenny_abbot: 'S. Canici, abbatis',
    canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs:
      'Ss. Canuti, Erici et Olavi, martyrum',
    canute_iv_of_denmark_martyr: 'S. Canuti, martyris',
    carlos_manuel_rodriguez_santiago: 'B. Caroli Emmanueli Rodriguez Santiago',
    caroline_kozka_virgin: 'B. Carolinæ Kózka, virginis et martyris',
    carthage_of_lismore_bishop: 'S. Carthagi, episcopi',
    casimir_of_poland: 'S. Casimiri',
    catherine_of_alexandria_virgin:
      'S. Catharinæ Alexandrinæ, virginis et martyris',
    catherine_of_saint_augustine_de_simon_de_longpre_virgin:
      'B. Mariæ Catharinæ a S. Augustino de Simon de Longpré, virginis',
    catherine_of_siena_virgin:
      'S. Catharinæ Senensis, virginis et Ecclesiæ doctoris',
    catherine_of_siena_virgin_copatroness_of_europe:
      'S. Catharinæ Senensis, virginis, Ecclesiæ doctoris et patronæ secundariæ Europæ',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'S. Catharinæ Senensis, virginis, Ecclesiæ doctoris et patronæ secundariæ Italiæ et Europæ',
    ceallach_of_armagh_bishop: 'S. Celsi, episcopi',
    cecilia_of_rome_virgin: 'S. Cæciliæ, virginis et martyris',
    ceferino_gimenez_malla_martyr: 'B. Zephyrini Giménez Malla, martyrum',
    ceslaus_of_poland_and_hyacinth_of_poland_priests:
      'B. Ceslai et S. Hyacinthi, presbyterorum',
    ceslaus_of_poland_priest: 'B. Ceslai, presbyteri',
    chad_of_mercia_and_cedd_of_lastingham_bishops:
      'Ss. Ceddi et Ceaddæ, episcoporum',
    chair_of_saint_peter_the_apostle: 'Cathedræ S. Petri, apostoli',
    charles_borromeo_bishop: 'S. Caroli Borromeo, episcopi',
    charles_i_of_austria: 'B. Caroli Austriæ',
    charles_lwanga_and_companions_martyrs:
      'Ss. Caroli Lwanga et sociorum, martyrum',
    charles_spinola_and_jerome_de_angelis_priests:
      'Bb. Caroli Spinola et Hieronymi de Angelis, presbyterorum et martyrum',
    charles_spinola_priest: 'B. Caroli Spinola, presbyteri et martyris',
    christopher_magallanes_priest_and_companions_martyrs:
      'Ss. Christophori Magallanes, presbyteri, et sociorum, martyrum',
    christopher_of_palestine_martyr: 'S. Christophori, martyris',
    ciaran_of_clonmacnoise_abbot: 'S. Ciarani Cluanensis, abbatis',
    clare_of_assisi_virgin: 'S. Claræ, virginis',
    clement_i_pope: 'S. Clementis I, papæ et martyris',
    clement_mary_hofbauer_priest: 'S. Clementis Mariæ Hofbauer, presbyteri',
    clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions:
      'Ss. Clementis Achridensis et Gorazdi, episcoporum, et sociorum',
    clotilde_of_burgundy: 'S. Clotildis',
    colman_of_cloyne_bishop: 'S. Colmani Cloynensis, episcopi',
    colman_of_dromore_bishop: 'S. Colmani Dromorensis, episcopi',
    colman_of_kilmacduagh_bishop: 'S. Colmani Duaci, episcopi',
    columba_marmion_priest: 'B. Columbæ Marmion, presbyteri',
    columba_of_iona_abbot: 'S. Columbæ Hiensis, abbatis',
    columba_of_iona_abbot_copatron_of_ireland:
      'S. Columbæ Hiensis, abbatis et patroni secundarii Hiberniæ',
    columban_of_luxeuil_abbot: 'S. Columbani, abbatis',
    comgall_of_bangor_abbot: 'S. Comgalli, abbatis',
    conleth_of_kildare_bishop: 'S. Conlethi, episcopi',
    conrad_of_constance_and_gebhard_of_constance_bishops:
      'Ss. Conradi et Gebhardi Constantiensis, episcoporum',
    conrad_of_parzham_religious: 'S. Conradi  a  Parzham, religiosi',
    conversion_of_saint_paul_the_apostle: 'In conversione S. Pauli, apostoli',
    corbinian_of_freising_bishop: 'S. Corbiniani, episcopi',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Ss. Cornelii, papæ, et Cypriani, episcopi, martyrum',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs:
      'Ss. Cosmæ et Damiani, martyrum',
    cuthbert_of_lindisfarne_bishop: 'S. Cuthberti, episcopi',
    cyril_of_alexandria_bishop:
      'S. Cyrilli Alexandrini, episcopi et Ecclesiæ doctoris',
    cyril_of_jerusalem_bishop:
      'S. Cyrilli Hierosolymitani, episcopi et Ecclesiæ doctoris',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop:
      'Ss. Cyrilli, monachi, et Methodii, episcopi',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      'Ss. Cyrilli, monachi, et Methodii, episcopi, patronorum secundariorum Europæ',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_slavic_missionaries:
      'Ss. Cyrilli et Methodii, missionariorum Slavorum',
    damasus_i_pope: 'S. Damasi I, papæ',
    damien_de_veuster_priest: 'S. Damiani de Veuster, presbyteri',
    david_lewis_priest: 'S. Davidi Lewis, presbyteri et martyris',
    david_of_wales_bishop: 'S. Davidis, episcopis',
    david_of_wales_bishop_patron_of_wales:
      'S. Davidis, episcopis et patroni Cambriæ',
    davnet_of_sliabh_beagh_virgin: 'S. Dymphnæ, virginis',
    declan_of_ardmore_bishop: 'S. Declani, episcopi',
    dedication_of_consecrated_churches:
      'In Dedicatione Ecclesiæ, cuius dies consecrationis ignotus est',
    dedication_of_the_basilica_of_saint_mary_major:
      'In Dedicatione basilicæ S. Mariæ',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'In Dedicatione basilicarum Ss. Petri et Pauli, apostolorum',
    dedication_of_the_lateran_basilica: 'In Dedicatione basilicæ Lateranensis',
    deiniol_of_bangor_bishop: 'S. Dainioli, episcopi',
    demetrius_of_thessaloniki_martyr: 'S. Demetrii Thessalonicensis, martyris',
    denis_of_paris_bishop_and_companions_martyrs:
      'Ss. Dionysii, episcopi, et sociorum, martyrum',
    dina_belanger_virgin: 'B. Dinæ Bélanger, virginis',
    dionysius_the_areopagite_bishop: 'S. Dionysii Areopagitæ',
    dominic_de_guzman_priest: 'S. Dominici, presbyteri',
    dominic_of_the_mother_of_god_barberi_priest:
      'B. Dominici Barberi a Matre Dei Barberi, presbyteri',
    dunstan_of_canterbury_bishop: 'S. Dunstani Cantuariensis, episcopi',
    dyfrig_of_wales_bishop: 'S. Dubricii, episcopi',
    edmund_bojanowski: 'B. Edmundi Bojanowski',
    edmund_campion_priest: 'S. Edmundi Campion, presbyteri et martyris',
    edmund_ignatius_rice_religious: 'B. Edmundi Ignatii Rice, religiosi',
    edmund_of_abingdon_bishop: 'S. Edmundi Abindoniensis. episcopi',
    edward_the_confessor: 'S. Eduardi Confessoris',
    elijah_prophet: 'S. Eliæ, prophetæ',
    elizabeth_ann_seton_religious: 'S. Elisabeth Annæ Seton, religiosæ',
    elizabeth_hesselblad_religious: 'S. Mariæ Elisabeth Hesselblad, virginis',
    elizabeth_of_hungary_religious: 'S. Elisabeth Hungariæ, religiosæ',
    elizabeth_of_portugal: 'S. Elisabeth Lusitaniæ',
    emeric_of_hungary: 'S. Emerici',
    emilie_tavernier_gamelin_religious:
      'B. Æmilia Tavernier Gamelin, religiosæ',
    enda_of_aran_abbot: 'S. Endei, abbatis',
    english_martyrs: 'Ss. Martyrum Angliæ',
    eoghan_of_ardstraw_bishop: 'S. Eugenii, episcopi',
    ephrem_the_syrian_deacon: 'S. Ephræm, diaconi et Ecclesiæ doctoris',
    eric_ix_of_sweden_martyr: 'S. Erici regis Sueciæ, martyris',
    etheldreda_of_ely_abbess: 'S. Æthelthrythæ, abatissæ',
    eugene_de_mazenod_bishop: 'S. Caroli Iosephi Eugenii de Mazenod, episcopi',
    eulalia_of_merida_virgin: 'S. Eulaliæ Emeritensis, virginis et martyris',
    eulogius_of_cordoba_bishop: 'S. Eulogii Cordubensis, episcopi',
    eusebius_of_esztergom_priest: 'B. Eusebii Strigoniensis, presbyteri',
    eusebius_of_vercelli_bishop: 'S. Eusebii Vercellensis, episcopi',
    eysteinn_of_nidaros_bishop: 'S. Augustini Nidrosiensis, episcopi',
    ezequiel_moreno_bishop: 'S. Ezechielis Moreno, episcopi',
    fabian_i_pope: 'S. Fabiani, papæ et martyris',
    fachanan_of_kilfenora_bishop: 'S. Fachanani Finaborensis, episcopi',
    fachtna_of_rosscarbery_bishop: 'S. Fachanani, episcopi',
    faustina_kowalska_virgin: 'S. Faustinæ Kowalska, virginis',
    ferdinand_iii_of_castile: 'S. Ferdinandi',
    fiacre_of_breuil_monk: 'S. Fiacrii, monachi',
    fidelis_of_sigmaringen_priest:
      'S. Fidelis a Sigmaringen, presbyteri et martyris',
    finbarr_of_cork_bishop: 'S. Barri Corcagie, episcopi',
    finding_of_the_holy_cross: 'In Inventione Sanctae Crucis',
    finnian_of_clonard_bishop: 'S. Finniani Clonardensis, episcopi',
    fintan_of_clonenagh_abbot: 'S. Fintani, abbatis',
    first_martyrs_of_the_holy_roman_church:
      'Ss. Protomartyrum S. Romanæ Ecclesiæ',
    first_polish_martyrs:
      'Ss. Benedicti, Ioannis, Matthæi, Isaac, Christiani, martyrum',
    five_wounds_of_the_lord: 'Ss.mi D. N. I. C. quinque vulneribus',
    flannan_of_killaloe_bishop: 'S. Flannani, episcopi',
    florian_of_lorch_and_companions_martyrs:
      'Ss. Floriani et sociorum, martyrum',
    florian_of_lorch_martyr: 'S. Floriani, martyris',
    frances_of_rome_religious: 'S. Franciscæ Romanæ, religiosæ',
    frances_xavier_cabrini_virgin: 'S. Franciscæ Xaveriæ Cabrini, virginis',
    francis_borgia_priest: 'S. Francisci Borgia, presbyteri',
    francis_de_sales_bishop:
      'S. Francisci de Sales, episcopi et Ecclesiæ doctoris',
    francis_diaz_del_rincon_priest_and_companions_martyrs:
      'Ss. Francisci Diaz, presbyteri, et sociorum, martyrum',
    francis_ferdinand_de_capillas_priest:
      'S. Francisci Fernández de Capillas, presbyteri et martyris',
    francis_of_assisi: 'S. Francisci Assisiensis',
    francis_of_assisi_patron_of_italy:
      'S. Francisci Assisiensis, patroni Italiæ',
    francis_of_paola_hermit: 'S. Francisci de Paola, eremitæ',
    francis_solanus_priest: 'S. Francisci Solani, presbyteri',
    francis_xavier_priest: 'S. Francisci Xavier, presbyteri',
    francis_xavier_seelos_priest: 'B. Francisci Xaverii Seelos, presbyteri',
    francois_de_montmorency_laval_bishop:
      'S. Francisci de Montmorency-Laval, episcopi',
    frederic_janssoone_priest: 'B. Friderici Janssoone, presbyteri',
    fridolin_of_sackingen_monk: 'S. Fridolini, monachi',
    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops:
      'Ss. Fructuosi, Martini et Geraldi Bracarensis, episcoporum',
    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      'Ss. Fructuosi, episcopi, Augurii et Eulogii, diaconorum, martyrum',
    fursa_of_peronne_abbot: 'S. Fursei, abbatis',
    gabriel_taurin_dufresse_bishop:
      'S. Ioannis Gabrielis Taurin Dufresse, episcopi et martyris',
    gall_of_switzerland_abbot: 'S. Galli, abbatis',
    genevieve_of_paris_virgin: 'S. Genovefæ, virginis',
    george_matulaitis_bishop: 'B. Georgii Matulaitis, episcopi',
    george_of_lydda_martyr: 'S. Georgii, martyris',
    george_of_lydda_martyr_patron_of_england:
      'S. Georgii, martyris et patroni Angliæ',
    george_preca_priest: 'S. Georgii Preca, presbyteri',
    gerard_of_csanad_bishop: 'S. Gerardi, episcopi et martyris',
    germanus_of_auxerre_bishop: 'S. Germani Autissiodorensis, episcopi',
    gertrude_of_nivelles_abbess: 'S. Gertrudis Nivellensis, abatissæ',
    gertrude_the_great_virgin: 'S. Gertrudis, virginis',
    gisela_of_hungary: 'B. Gisellæ',
    gobnait_of_ballyvourney_virgin: 'S. Gobnatæ, virginis',
    gorazd_of_moravia_and_companions: 'Ss. Gorazdi et sociorum',
    gotthard_of_hildesheim_bishop: 'S. Gotthardi, episcopi',
    gratia_of_cattaro_religious: 'B. Gratiæ de Catharo, religiosi',
    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs:
      'Ss. Gregorii Grassi, Francisci Fogolla et Antonini Fantosati, episcoporum, et sociorum, martyrum',
    gregory_i_the_great_pope: 'S. Gregorii Magni, papæ et Ecclesiæ doctoris',
    gregory_of_narek_abbot:
      'S. Gregorii Narecensis, abbatis et Ecclesiæ doctoris',
    gregory_vii_pope: 'S. Gregorii VII, papæ',
    guardian_angel_of_portugal: 'Ss. Angelorum Custodum Lusitaniæ',
    guardian_angels: 'Ss. Angelorum Custodum',
    gundisalvus_garcia_martyr: 'S. Gundisalvi García, martyris',
    gundisalvus_of_amarante_priest: 'B. Gundisalvi de Amarante, presbyteri',
    gundisalvus_of_lagos_priest: 'B. Gundisalvi de Lagos, presbyteri',
    hedwig_of_poland: 'S. Hedvigis Poloniæ',
    hedwig_of_silesia_religious: 'S. Hedvigis, religiosæ',
    helena_of_constantinople: 'S. Helena',
    hemma_of_gurk: 'S. Hemmæ',
    hemming_of_turku_bishop: 'B. Hemmingi Abœnsis, episcopi',
    henry_ii_emperor: 'S. Henrici',
    henry_ii_emperor_and_cunigunde_of_luxembourg: 'Ss. Henrici et Cunigundæ',
    henry_of_finland_bishop: 'S. Henrici, episcopi et martyris',
    henry_suso_priest: 'B. Henrici Suso, presbyteri',
    hermann_joseph_of_steinfeld_priest: 'S. Hermanni Iosephi, presbyteri',
    hermenegild_the_visigoths_martyr: 'S. Hermenegildi, martyris',
    hilary_of_poitiers_bishop: 'S. Hilarii, episcopi et Ecclesiæ doctoris',
    hilda_of_whitby_abbess: 'S. Hildæ, abatissæ',
    hildegard_of_bingen_abbess:
      'S. Hildegardis Bingensis, abatissæ et Ecclesiæ doctoris',
    holy_child_of_cebu: 'S. Pueri Iesu de Cæbua',
    holy_innocents_martyrs: 'Ss. Innocentium, martyrum',
    honorat_kozminski_priest: 'B. Honorati Koźmiński, presbyteri',
    hosanna_of_cattaro_virgin: 'B. Hosannæ de Catharo, virginis',
    hroznata_of_bohemia_martyr: 'B. Hroznatæ, martyris',
    hubert_of_liege_bishop: 'S. Huberti, episcopi',
    hugh_of_lincoln_bishop: 'S. Hugonis Lincolnien, episcopi',
    hungarian_saints_and_blesseds: 'Sanctorum et Beatorum Hungariæ',
    hyacinth_of_poland_priest: 'S. Hyacinthi, presbyteri',
    ignatius_de_azevedo_priest_and_companions_martyrs:
      'B. Ignatii de Azevedo, presbyteri, et sociorum, martyrum',
    ignatius_falzon: 'B. Ignatii Falzon',
    ignatius_of_antioch_bishop: 'S. Ignatii Antiocheni, episcopi et martyris',
    ignatius_of_loyola_priest: 'S. Ignatii de Loyola, presbyteri',
    ildephonsus_of_toledo_bishop: 'S. Ildephonsi Toletani, episcopi',
    illtud_the_knight_abbot: 'S. Hilduti, abbatis',
    immaculate_conception_of_mary_patroness_of_the_philippines:
      'In Conceptione Immaculata Beatæ Mariæ Virginis, Patronæ Insularum Philippinarum',
    immaculate_conception_of_mary_patroness_of_the_usa:
      'In Conceptione Immaculata Beatæ Mariæ Virginis, Patronæ Civitatum Fœderatæ Americæ',
    innocent_xi_pope: 'B. Innocentii XI, papæ',
    irenaeus_of_lyon_bishop: 'S. Irenæi, episcopi et martyris',
    irene_of_macedonia: 'S. Irenæ',
    irish_martyrs: 'Bb. Martyrum Hiberniæ',
    isidore_of_seville_bishop: 'S. Isidori, episcopi et Ecclesiæ doctoris',
    isidore_the_farmer: 'S. Isidori Agricolæ',
    istvan_sandor_religious: 'B. Stephani Sándor, martyris',
    ita_of_killeedy_virgin: 'S. Itæ, virginis',
    ivan_merz: 'B. Ivani Merz',
    ivo_of_kermartin_priest: 'S. Ivonis, presbyteri',
    jacinta_marto_and_francisco_marto: 'Ss. Francisci et Hyacinthæ Marto',
    james_apostle: 'S. Iacobi, apostoli',
    james_apostle_patron_of_spain: 'S. Iacobi, apostoli et patroni Hispaniæ',
    james_strzemie_bishop: 'B. Iacobi Strzemię, episcopi',
    jane_frances_de_chantal_religious:
      'S. Ioannæ Franciscæ de Chantal, religiosæ',
    januarius_i_of_benevento_bishop: 'S. Ianuarii, episcopi et martyris',
    jarlath_of_tuam_bishop: 'S. Iarlathi, episcopi',
    jerome_emiliani: 'S. Hieronymi Emiliani',
    jerome_of_stridon_priest: 'S. Hieronymi, presbyteri et Ecclesiæ doctoris',
    joachim_and_anne_parents_of_mary: 'Ss. Ioachim et Annæ, parentum B. M. V.',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'S. Annæ, patronæ Quebeci, et S. Ioachim, parentum B. M. V.',
    joachim_he_kaizhi_martyr: 'S. Ioachim He Kaizhi, martyris',
    joan_of_arc_virgin_copatroness_of_france:
      'S. Ioannæ Arcensis, virginis et patronæ secundariæ Galliæ',
    joan_of_portugal_virgin: 'B. Ioannæ Lusitaniæ, virginis',
    joaquina_of_saint_francis_of_assisi_de_vedruna_religious:
      'S. Ioachimæ a Sancto Francisco Assisiensis de Vedruna, religiosæ',
    john_apostle: 'S. Ioannis, apostoli et evangelistæ',
    john_baptist_de_la_salle_priest:
      'S. Ioannis Baptistæ de la Salle, presbyteri',
    john_berchmans_religious: 'S. Ioannis Berchmans, religiosi',
    john_beyzym_priest: 'B. Ioannis Beyzym, presbyteri',
    john_bosco_priest: 'S. Ioannis Bosco, presbyteri',
    john_brenner_priest: 'B. Ioannis Brenner, presbyteri et martyris',
    john_cassian_priest: 'S. Ioannis Cassiani, presbyteri',
    john_chrysostom_bishop:
      'S. Ioannis Chrysostomi, episcopi et Ecclesiæ doctoris',
    john_damascene_priest:
      'S. Ioannis Damasceni, presbyteri et Ecclesiæ doctoris',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Ss. Ioannis de Brébeuf, Isaac Jogues, presbyterorum, et sociorum, martyrum',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada:
      'Ss. Ioannis de Brébeuf, Isaac Jogues, presbyterorum, et sociorum, martyrum et patronorum secundariorum Canadæ',
    john_de_britto_priest: 'S. Ioannis de Britto, presbyteri et martyris',
    john_eudes_priest: 'S. Ioannis Eudes, presbyteri',
    john_fisher_bishop_and_thomas_more_martyrs:
      'Ss. Ioannis Fisher, episcopi, et Thomæ More, martyrum',
    john_gabriel_perboyre_priest:
      'S. Ioannis Gabrielis Perboyre, presbyteri et martyris',
    john_henry_newman_priest: 'S. Ioannis Henrici Newman, presbyteri',
    john_i_pope: 'S. Ioannis I, papæ et martyris',
    john_jones_priest: 'S. Ioannis Jones, presbyteri et martyris',
    john_leonardi_priest: 'S. Ioannis Leonardi, presbyteri',
    john_macias_religious: 'S. Ioannis Macías, religiosi',
    john_martin_moye_priest: 'B. Ioannis Martini Moye, presbyteri',
    john_mary_vianney_priest: 'S. Ioannis Mariæ Vianney, presbyteri',
    john_nepomucene_neumann_bishop: 'S. Ioannis Nepomuceni Neumann, episcopi',
    john_nepomucene_priest: 'S. Ioannis Nepomuceni, presbyteri et martyris',
    john_of_avila_priest:
      'S. Ioannis de Avila, presbyteri et Ecclesiæ doctoris',
    john_of_capistrano_priest: 'S. Ioannis de Capestrano, presbyteri',
    john_of_dukla_priest: 'S. Ioannis de Dukla, presbyteri',
    john_of_god_duarte_cidade_religious: 'S. Ioannis a Deo, religiosi',
    john_of_kanty_priest: 'S. Ioannis de Kęty, presbyteri',
    john_of_the_cross_priest:
      'S. Ioannis a Cruce, presbyteri et Ecclesiæ doctoris',
    john_of_triora_priest: 'S. Ioannis de Triora, presbyteri et martyris',
    john_ogilvie_priest: 'S. Ioannis Ogilvie, presbyteri et martyris',
    john_paul_ii_pope: 'S. Ioannis Pauli II, papæ',
    john_roberts_priest: 'S. Ioannis Roberts, presbyteri et martyris',
    john_sarkander_priest: 'S. Ioannis Sarkander, presbyteri et martyris',
    john_scheffler_bishop: 'B. Ioannis Scheffler, episcopi et martyris',
    john_xxiii_pope: 'S. Ioannis XXIII, papæ',
    josaphat_kuntsevych_bishop: 'S. Iosaphat, episcopi et martyris',
    jose_maria_de_yermo_y_parres_priest:
      'S. Iosephi Mariæ de Yermo y Parres, presbyteri',
    josemaria_escriva_de_balaguer_priest:
      'S. Iosephmariæ Escrivá de Balaguer, presbyteri',
    joseph_bilczewski_bishop: 'S. Iosephi Bilczewski, episcopi',
    joseph_de_anchieta_priest: 'S. Iosephi de Anchieta, presbyteri',
    joseph_freinademetz_priest: 'S. Iosephi Freinademetz, presbyteri',
    joseph_of_calasanz_priest: 'S. Iosephi de Calasanz, presbyteri',
    joseph_sebastian_pelczar_bishop: 'S. Iosephi Sebastiani Pelczar, episcopi',
    joseph_spouse_of_mary_patron_of_canada:
      'S. Iosephi, Sponsi B. M. V., patroni Canadæ',
    joseph_the_worker: 'S. Iosephi Opificis',
    joseph_vaz_priest: 'S. Iosephi Vaz, presbyteri',
    joseph_yuan_gengyin_priest:
      'S. Iosephi Yuan Gengyin, presbyteri et martyris',
    joseph_zhang_dapeng_martyr: 'S. Iosephi Zhang Dapeng, martyris',
    josephine_bakhita_virgin: 'S. Iosephinæ Bakhita, virginis',
    juan_diego_cuauhtlatoatzin: 'S. Ioannis Didaci Cuauhtlatoatzin',
    juliana_of_liege_virgin: 'S. Julianæ Leodiensis, virginis',
    julie_billiart_virgin: 'S. Juliæ Billiart, virginis',
    junipero_serra_priest: 'S. Iuniperi Serra, presbyteri',
    justin_martyr: 'S. Iustini, martyris',
    kateri_tekakwitha_virgin: 'S. Catharinæ Tekakwitha, virginis',
    katharine_drexel_virgin: 'S. Catharinæ Mariæ Drexel, virginis',
    kentigern_of_scotland_bishop: 'S. Kentigerni, episcopi',
    kevin_of_glendalough_abbot: 'S. Cœmgeni, abbatis',
    kieran_of_saigir_bishop: 'S. Kyarani, episcopi',
    kilian_of_wurzburg_bishop: 'S. Kiliani, episcopi et martyris',
    kilian_of_wurzburg_bishop_and_companions_martyrs:
      'Ss. Kiliani, episcopi, et sociorum, martyrum',
    kinga_of_poland_virgin: 'S. Cunegundæ, virginis',
    kuriakose_elias_of_the_holy_family_chavara_priest:
      'S. Kuriakose Eliæ Chavara a Sacra Familia Chavara, presbyteri',
    ladislas_of_gielniow_priest: 'B. Ladislai a Gielniów, presbyteri',
    ladislaus_batthyany_strattmann: 'B. Ladislai Batthyány-Strattmann',
    ladislaus_i_of_hungary: 'S. Ladislai',
    lambert_of_maastricht_bishop: 'S. Lamberti, episcopi et martyris',
    laserian_of_leighlin_bishop: 'S. Laseriani, episcopi',
    laura_vicuna_virgin: 'B. Lauræ Vicuña, virginis',
    laurence_otoole_bishop: 'S. Laurentii O’Toole, episcopi',
    laurence_wang_bing_and_companions_martyrs:
      'Ss. Laurentii Wang Bing, et sociorum, martyrum',
    lawrence_bai_xiaoman_martyr: 'S. Laurentii Bai Xiaoman, martyris',
    lawrence_of_brindisi_priest:
      'S. Laurentii de Brindisi, presbyteri et Ecclesiæ doctoris',
    lawrence_of_rome_deacon: 'S. Laurentii, diaconi et martyris',
    lawrence_ruiz_and_companions_martyrs:
      'Ss. Laurentii Ruiz et sociorum, martyrum',
    leander_of_seville_bishop: 'S. Leandri, episcopi',
    lelia_of_killeely_virgin: 'S. Leliæ, virginis',
    leo_i_the_great_pope: 'S. Leonis Magni, papæ et Ecclesiæ doctoris',
    leo_ignatius_mangin_priest_and_companions_martyrs:
      'Ss. Leonis Ignatii Mangin, presbyteri, et sociorum, martyrum',
    leo_ix_pope: 'S. Leonis IX, papæ',
    leoba_of_tauberbischofsheim_abbess: 'S. Leobæ, abatissæ',
    leonard_of_noblac_hermit: 'S. Leonardi, eremitæ',
    leonid_feodorov_priest: 'B. Leonidæ Fiodorov, presbyteri et martyris',
    leopold_iii_of_babenberg: 'S. Leopoldi III Babenbergis',
    leopold_mandic_priest: 'S. Leopoldi Mandić, presbyteri',
    louis_bertrand_priest: 'S. Ludovici Bertrán, presbyteri',
    louis_grignion_de_montfort_priest:
      'S. Ludovici Mariæ Grignion de Montfort, presbyteri',
    louis_ix_of_france: 'S. Ludovici',
    louis_zephirin_moreau_bishop: 'B. Ludovici Zephyrini Moreau, episcopi',
    lucius_of_chur_bishop: 'S. Lucii I, papæ',
    lucy_of_syracuse_virgin: 'S. Luciæ, virginis et martyris',
    lucy_yi_zhenmei_virgin: 'S. Luciæ Yi Zhenmei, virginis et martyris',
    ludger_of_munster_bishop: 'S. Ludgeri Monasteriensis, episcopi',
    ludmila_of_bohemia_martyr: 'S. Ludmilæ, martyris',
    luigi_orione_priest: 'S. Aloisii Orione, presbyteri',
    luke_evangelist: 'S. Lucæ, evangelistæ',
    lydia_of_philippi: 'S. Lydiæ',
    mac_nissi_of_connor_bishop: 'S. Macnisi, episcopi',
    macartan_of_clogher_bishop: 'S. Macartini, episcopi',
    maelruain_of_tallaght_bishop: 'S. Maelruain, episcopi et abbatis',
    magnus_erlendsson_martyr: 'S. Magni, martyris',
    malachy_of_armagh_bishop: 'S. Malachi, episcopi',
    marcel_callo_martyr: 'B. Marcelli Callo, martyris',
    marcelina_darowska_religious: 'B. Mariæ Marcellinæ Darowska, martyris',
    marcellin_champagnat_priest:
      'S. Marcellini Iosephi Benedicti Champagnat, presbyteri',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs:
      'Ss. Marcellini et Petri, martyrum',
    margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs:
      'Ss. Margaritæ Clitherow, Annæ Line et Margaritæ Ward, virginis, martyrum',
    margaret_mary_alacoque_virgin: 'S. Margaritæ Mariæ Alacoque, virginis',
    margaret_of_antioch_virgin: 'S. Margaritæ, virginis et martyris',
    margaret_of_hungary_religious: 'S. Margaritæ Hungariæ, religiosæ',
    margaret_of_scotland: 'S. Margaritæ Scotiæ',
    marguerite_bourgeoys_virgin: 'S. Margaritæ Bourgeoys, virginis',
    marguerite_dyouville_religious: 'S. Margaritæ d’Youville, religiosæ',
    maria_goretti_virgin: 'S. Mariæ Goretti, virginis et martyris',
    maria_guadalupe_garcia_zavala_virgin:
      'S. Mariæ Guadalupe García Zavala, virginis',
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin:
      'S. Mariæ Michaelæ a Sanctissimo Sacramento Desmaisières, virginis',
    mariana_of_jesus_de_paredes_virgin:
      'S. Mariæ Annæ a Iesu de Paredes, virginis',
    marianne_cope_virgin: 'S. Mariæ Annæ Cope, virginis',
    marie_anne_blondin_virgin: 'B. Mariæ Annæ Blondin, virginis',
    marie_leonie_paradis_virgin: 'B. Mariæ Leoniæ Paradis, virginis',
    marie_of_the_incarnation_guyart_religious:
      'S. Mariæ ab Incarnatione Guyart, religiosæ',
    marie_rose_durocher_virgin: 'B. Mariæ Rosæ Durocher, virginis',
    mark_evangelist: 'S. Marci, evangelistæ',
    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests:
      'Ss. Marci Crisini, Melchioris Grodziecki et Stephani Pongracz, presbyterorum et martyrum',
    marko_krizin_priest: 'S. Marci Crisini, presbyteri et martyris',
    maron_of_syria_hermit: 'S. Maronis, eremitæ',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'S. Marthæ, Mariæ et Lazari',
    martin_de_porres_religious: 'S. Martini de Porres, religiosi',
    martin_i_pope: 'S. Martini I, papæ et martyris',
    martin_of_tours_bishop: 'S. Martini Turonensis, episcopi',
    martin_wu_xuesheng_and_companions_martyrs:
      'Ss. Martini Wu Xuesheng, et sociorum, martyrum',
    mary_adeodata_pisani_virgin: 'B. Mariæ Adeodatæ Pisani, virginis',
    mary_angela_truszkowska_virgin: 'B. Mariæ Angelæ Truszkowska, virginis',
    mary_assunta_pallotta_virgin: 'B. Mariæ Assumptæ Pallotta, virginis',
    mary_magdalene: 'S. Mariæ Magdalenæ',
    mary_magdalene_de_pazzi_virgin: 'S. Mariæ Magdalenæ de’ Pazzi, virginis',
    mary_mother_of_the_church: 'B. Mariæ Virginis Ecclesiæ Matris',
    mary_of_jesus_crucified_petkovic_virgin:
      'B. Mariæ a Iesu Crucifixo Petković, virginis',
    mary_of_jesus_in_the_blessed_sacrament_venegas_virgin:
      'S. Mariæ a Iesu Sacramentato Venegas de la Torre, virginis',
    mary_of_jesus_the_good_shepherd_siedliska_virgin:
      'B. Mariæ a Iesu Bono Pastore Siedliska, virginis',
    mary_of_the_cross_mackillop_virgin: 'S. Mariæ a Cruce MacKillop, virginis',
    mary_soledad_torres_acosta_virgin:
      'S. Mariæ a Solitudine Torres Acosta, virginis',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins:
      'B. Mariæ Stellæ a SS.mo Sacramento Mardosewicz et sociorum, virginum et martyrum',
    mary_theresa_chiramel_mankidiyan_virgin:
      'S. Mariæ Teresiæ Chiramel Mankidiyan, virginis',
    mary_theresa_ledochowska_virgin: 'B. Mariæ Teresiæ Ledóchowska, virginis',
    mary_ursula_of_jesus_ledochowska_virgin:
      'S. Mariæ Ursulæ a Iesu Ledóchowska, virginis',
    marydolores_rodriguez_sopena_virgin:
      'B. Mariæ Perdolentis Rodríguez Sopeña, virginis',
    matilda_of_ringelheim: 'S. Matildæ',
    matthew_apostle: 'S. Matthæi, apostoli et evangelistæ',
    matthias_apostle: 'S. Matthiæ, apostoli',
    maurice_of_agaunum_and_companions_martyrs:
      'Ss. Mauritii et sociorum, martyrum',
    maurice_tornay_priest: 'B. Mauritii Tornay, presbyteri et martyris',
    maurus_of_pecs_bishop: 'S. Mauri, episcopi',
    maximilian_kolbe_priest:
      'S. Maximiliani Mariæ Kolbe, presbyteri et martyris',
    meinrad_of_einsiedeln_martyr: 'S. Meinradi, martyris',
    mel_of_ardagh_bishop: 'S. Melis, episcopi',
    melchior_grodziecki_priest:
      'S. Melchioris Grodziecki, presbyteri et martyris',
    michael_gabriel_and_raphael_archangels:
      'Ss. Michaelis, Gabrielis et Raphaelis, archangelorum',
    michael_kozal_bishop: 'B. Michaelis Kozal, episcopi et martyris',
    miguel_agustin_pro_priest:
      'B. Michaelis Augustini Pro, presbyteri et martyris',
    miguel_febres_cordero_religious: 'S. Michaelis Febres Cordero, religiosi',
    monica_of_hippo: 'S. Monicæ',
    moninne_of_killeavy_virgin: 'S. Moninnæ, virginis',
    most_holy_name_of_jesus: 'Ss.mi Nominis Iesu',
    most_holy_name_of_mary: 'Ss.mi Nominis Mariæ',
    munchin_of_limerick_bishop: 'S. Mainchini, episcopi',
    muredach_of_killala_bishop: 'S. Muredachi, episcopi',
    mutien_marie_wiaux_religious: 'S. Muciani Mariæ Wiaux, religiosi',
    nativity_of_mary: 'In Nativitate B. Mariæ Virginis',
    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin:
      'S. Nazariæ Ignatiæ a Sancta Teresia a Iesu March Mesa, virginis',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs:
      'Ss. Nerei et Achillei, martyrum',
    nicholas_of_flue_hermit: 'S. Nicolai de Flüe, eremitæ',
    nicholas_of_myra_bishop: 'S. Nicolai, episcopi',
    nicholas_steno_bishop: 'B. Nicolai Stenonis, episcopi',
    nicholas_tavelic_priest: 'S. Nicolai Tavelić, presbyteri et martyris',
    ninian_of_whithorn_bishop: 'S. Niniani, episcopi',
    norbert_of_xanten_bishop: 'S. Norberti, episcopi',
    nuno_of_saint_mary_pereira_religious:
      'S. Nunii a Sancta Maria Pereira, religiosi',
    nykyta_budka_and_vasyl_velychkovsky_bishops:
      'Bb. Niceti Budka et Basilii Velychkovskyi, episcoporum et martyrum',
    odile_of_alsace_abbess: 'S. Odiliæ, abatissæ',
    odoric_of_pordenone_priest: 'B. Odorici de Portu Naonis, presbyteri',
    olaf_ii_of_norway_martyr: 'S. Olavi, martyris',
    oleksiy_zarytskyi_priest: 'B. Alexii Zaryckyj, presbyteri et martyri',
    olga_of_kiev: 'S. Olgæ Kioviensis',
    oliver_plunket_bishop: 'S. Oliverii Plunket, episcopi et martyris',
    otteran_of_iona_monk: 'S. Otterani, monachi',
    otto_of_bamberg_bishop: 'S. Ottonis Bambergensis, episcopi',
    our_lady_help_of_christians: 'B. Mariæ Virginis Auxilium Christianorum',
    our_lady_mediatrix_of_all_grace:
      'B. Mariæ Virginis Omnium Gratiarum Mediatricis',
    our_lady_mother_of_christian_unity:
      'B. Mariæ Virginis Unitatis Christianorum Matris',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico:
      'B. Mariæ Virginis Divinæ Providentiæ Matris atque Patronæ Portus Divitis',
    our_lady_of_aparecida_patroness_of_brazil:
      'B. Mariæ Virginis de Aparecida, Patronæ Brasiliæ',
    our_lady_of_bethlehem: 'B. Mariæ Virginis de Bethlehem',
    our_lady_of_china: 'B. Mariæ Virginis Sinæ',
    our_lady_of_czestochowa: 'B. Mariæ Virginis de Częstochowa',
    our_lady_of_fatima: 'B. Mariæ Virginis de Fatima',
    our_lady_of_good_counsel: 'B. Mariæ Virginis boni Consilii Matris',
    our_lady_of_guadalupe: 'B. Mariæ Virginis de Guadalupe',
    our_lady_of_guadalupe_patroness_of_the_americas:
      'B. Mariæ Virginis de Guadalupe, Patronæ Americæ',
    our_lady_of_guadalupe_patroness_of_the_philippines:
      'Beatæ Mariæ Virginis de Guadalupe, Patronæ Insularum Philippinarum',
    our_lady_of_hungary_patroness_of_hungary:
      'B. Mariæ Virginis, Patronæ Hungariæ',
    our_lady_of_itati: 'B. Mariæ Virginis de Itati',
    our_lady_of_knock: 'B. Mariæ Virginis de Knock',
    our_lady_of_lanka: 'B. Mariæ Virginis de Lanka',
    our_lady_of_lebanon: 'B. Mariæ Virginis de Libano',
    our_lady_of_loreto: 'B. Mariæ Virginis de Loreto',
    our_lady_of_lourdes: 'B. Mariæ Virginis de Lourdes',
    our_lady_of_lujan_patroness_of_argentina:
      'B. Mariæ Virginis de Luján, Patronæ Argentinæ',
    our_lady_of_madhu: 'B. Mariæ Virginis de Madhu',
    our_lady_of_marija_bistrica: 'B. Mariæ Virginis de Marija Bistrica',
    our_lady_of_mercy: 'B. Mariæ Virginis a Misericordia',
    our_lady_of_mount_carmel: 'B. Mariæ Virginis de Monte Carmelo',
    our_lady_of_mount_carmel_mother_and_queen_of_chile:
      'B. Mariæ Virginis de Monte Carmelo, Chiliæ Matris atque Reginæ',
    our_lady_of_perpetual_help: 'B. Mariæ Virginis perpetuæ Auxilium',
    our_lady_of_refuge: 'B. Mariæ Virginis Refugii peccatorum',
    our_lady_of_sorrows: 'B. Mariæ Virginis Perdolentis',
    our_lady_of_sorrows_patroness_of_slovakia:
      'B. Mariæ Virginis Perdolentis, Patronæ Slovaciæ',
    our_lady_of_the_discovery_of_the_hidden_christians:
      'B. Mariæ Virginis a Inventione occultorum Christianorum',
    our_lady_of_the_gate_of_dawn: 'B. Mariæ Virginis Portæ Auroræ',
    our_lady_of_the_pillar: 'B. Mariæ Virginis a Columna',
    our_lady_of_the_rosary: 'B. Mariæ Virginis a Rosario',
    our_lady_of_the_valley: 'B. Mariæ Virginis de Valle',
    our_lady_of_vladimir: 'B. Mariæ Virginis Volodimiriensis',
    our_lady_of_walsingham: 'B. Mariæ Virginis de Walsingham',
    our_lady_queen_of_peace: 'B. Mariæ Virginis Reginæ Pacis',
    our_lady_queen_of_poland: 'B Mariæ Virginis Reginæ Poloniæ',
    our_lord_jesus_christ_the_eternal_high_priest:
      'Domini nostri Iesu Christi, Summi et Æterni Sacerdotis',
    our_lord_of_miracles: 'Domini Miraculorum',
    pancras_of_rome_martyr: 'S. Pancratii, martyris',
    pantaleon_of_nicomedia_martyr: 'S. Pantaleonis, martyris',
    paschal_baylon_religious: 'S. Paschali Baylón, religiosi',
    passion_of_saint_john_the_baptist:
      'In Passione S. Ioannis Baptistæ, martyris',
    patrick_of_ireland_bishop: 'S. Patricii, episcopi',
    patrick_of_ireland_bishop_patron_of_ireland:
      'S. Patricii, episcopi et patroni Hiberniæ',
    paul_chen_changpin_and_companions_martyrs:
      'Ss. Pauli Chen Changpin et sociorum, martyrum',
    paul_liu_hanzuo_priest: 'S. Pauli Liu Hanzuo, presbyteri et martyris',
    paul_miki_and_companions_martyrs: 'Ss. Pauli Miki et sociorum, martyrum',
    paul_of_the_cross_priest: 'S. Pauli a Cruce, presbyteri',
    paul_of_thebes_hermit: 'B. Pauli de Thebis, eremitæ',
    paul_vi_pope: 'S. Pauli VI, papæ',
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin:
      'S. Paulinæ a Corde Iesu Agonizanti Visintainer, virginis',
    paulinus_of_nola_bishop: 'S. Paulini Nolani, episcopi',
    paulinus_of_trier_bishop: 'S. Paulini Trevirensis, episcopi',
    paulinus_of_york_bishop: 'S. Paulini Eboracensis, episcopi',
    pavel_peter_gojdic_bishop: 'B. Pauli Petri Gojdič, episcopi et martyris',
    pedro_calungsod_martyr: 'S. Petri Calungsod, martyris',
    pelagius_of_cordoba_martyr: 'S. Pelagii Cordubæ, martyris',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs:
      'Ss. Perpetuæ et Felicitatis, martyrum',
    peter_baptist_blasquez_paul_miki_and_companions_martyrs:
      'Ss. Petri Baptistæ Blázquez, Pauli Miki et sociorum, martyrum',
    peter_canisius_priest: 'S. Petri Canisii, presbyteri et Ecclesiæ doctoris',
    peter_chanel_priest: 'S. Petri Chanel, presbyteri et martyris',
    peter_chanel_priest_patron_of_oceania:
      'S. Petri Chanel, protomartyris Oceaniæ et patroni Oceaniæ',
    peter_chrysologus_bishop:
      'S. Petri Chrysologi, episcopi et Ecclesiæ doctoris',
    peter_claver_priest: 'S. Petri Claver, presbyteri',
    peter_damian_bishop: 'S. Petri Damiani, episcopi et Ecclesiæ doctoris',
    peter_de_zuniga_and_louis_flores_priests:
      'Bb. Petri de Zúñiga et Ludovici Flores, presbyterorum et martyrum',
    peter_julian_eymard_priest: 'S. Petri Iuliani Eymard, presbyteri',
    peter_kibe_priest_and_companions_martyrs:
      'B. Petri Kibe Kasui, presbyteri, et sociorum, martyrum',
    peter_liu_wenyuan_martyr: 'S. Petri Liu Wenyuan, martyris',
    peter_of_alcantara_priest: 'S. Petri de Alcantara, presbyteri',
    peter_sanz_bishop: 'S. Petri Sanz, episcopi et martyris',
    peter_to_rot_martyr: 'B. Petri To Rot, martyris',
    peter_wu_guosheng_martyr: 'S. Petri Wu Guosheng, martyris',
    philip_and_james_apostles: 'Ss. Philippi et Iacobi, apostolorum',
    philip_evans_and_john_lloyd_priests:
      'Ss. Philippi Evans et Ioannis Lloyd, presbyterorum et martyrum',
    philip_neri_priest: 'S. Philippi Neri, presbyteri',
    philip_of_jesus_de_las_casas_martyr:
      'S. Philippi a Iesu, presbyteri et martyris',
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs:
      'Ss. Philippi a Iesu de las Casas, Pauli Miki et sociorum, martyrum',
    pirmin_of_hornbach_abbot: 'S. Pirminii, abbatis',
    pius_ix_pope: 'B. Pii IX, papæ',
    pius_of_pietrelcina_priest: 'S. Pii de Pietrelcina, presbyteri',
    pius_v_pope: 'S. Pii V, papæ',
    pius_x_pope: 'S. Pii X, papæ',
    polycarp_of_smyrna_bishop: 'S. Polycarpi, episcopi et martyris',
    pontian_i_pope_and_hippolytus_of_rome_priest:
      'Ss. Pontiani, papæ, et Hippolyti, presbyteri, martyrum',
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs:
      'Ss. Pothini, episcopi, Blandinæ, virginis, et sociorum, martyrum',
    presentation_of_mary: 'In Præsentatione B. Mariæ Virginis',
    procopius_of_sazava_abbot: 'S. Procopii, abbatis',
    publius_of_malta_bishop: 'S. Publii, episcopi',
    queenship_of_mary: 'B. Mariæ Virginis Reginæ',
    quirinus_of_sescia_bishop: 'S. Quirini Sisciensis, episcopi',
    rabanus_maurus_bishop: 'S. Rabani Mauri, episcopi',
    radim_of_gniezno_bishop: 'S. Radim, episcopi',
    rafqa_pietra_choboq_ar_rayes_virgin:
      'S. Rafqa Petræ Choboq Ar-Rayès, virginis',
    raphael_chylinski_priest: 'B. Raphaelis Chyliński, presbyteri',
    raphael_guizar_y_valencia_bishop: 'S. Raphaelis Guízar Valencia, episcopi',
    raphael_of_saint_joseph_kalinowski_priest:
      'S. Raphaelis a Sancto Ioseph Kalinowski, presbyteri',
    raymond_of_penyafort_priest: 'S. Raimundi de Penyafort, presbyteri',
    remigius_of_reims_bishop: 'S. Remigii, episcopi',
    richard_gwyn_martyr: 'S. Richardi Gwyn, martyris',
    richard_of_chichester_bishop: 'S. Richardi Cicestriæ, episcopi',
    rita_of_cascia_religious: 'S. Ritæ de Cascia, religiosæ',
    robert_bellarmine_bishop:
      'S. Roberti Bellarmini, episcopi et Ecclesiæ doctoris',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests:
      'Ss. Rochi González, Alfonsi Rodríguez et Ioannis del Castillo, presbyterorum et martyrum',
    roch_of_montpellier: 'S. Rochi',
    romuald_of_ravenna_abbot: 'S. Romualdi, abbatis',
    rose_of_lima_virgin: 'S. Rosæ de Lima, virginis',
    rose_of_lima_virgin_copatroness_of_the_philippines:
      'S. Rosæ de Lima, virginis et patronæ secundariæ Insularum Philippinæ',
    rose_philippine_duchesne_virgin: 'S. Rosæ Philippinæ Duchesne, virginis',
    rupert_of_salzburg_and_virgilius_of_salzburg_bishops:
      'Ss. Ruperti et Virgilii Salisburgensis, episcoporum',
    salomea_of_poland_religious: 'B. Salomeæ, religiosæ',
    sancha_of_portugal_and_mafalda_of_portugal_virgins:
      'B. Sanchæ et Maphaldæ, virginum',
    sara_salkahazi_virgin: 'B. Saræ Salkaházi, virginis et martyris',
    scholastica_of_nursia_virgin: 'S. Scholasticæ, virginis',
    sebastian_de_aparicio_religious: 'B. Sebastiani ab Apparitio, religiosi',
    sebastian_of_milan_martyr: 'S. Sebastiani, martyris',
    senan_of_inis_cathaigh_bishop: 'S. Senani, episcopi',
    seven_holy_founders_of_the_servite_order:
      'Ss. Septem Fundatorum Ordinis Servorum B. M. V.',
    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary:
      'Ss. septem sorores ex Instituto Franciscanum Missionariarum Mariæ, martyrum',
    severinus_of_noricum_monk: 'S. Severini de Noricum, monachi',
    sharbel_makhluf_priest: 'S. Sarbelii Makhlūf, presbyteri',
    shipwreck_of_saint_paul_apostle: 'Naufragii S. Pauli, apostoli',
    sigismund_of_burgundy_martyr: 'S. Sigismundi, martyris',
    sigmund_felix_felinski_bishop: 'S. Sigismundi Felicis Feliński, episcopi',
    simon_and_jude_apostles: 'Ss. Simonis et Iudæ, apostolorum',
    simon_of_lipnica_priest: 'S. Simonis de Lipnica, presbyteri',
    six_welsh_martyrs_and_companions: 'Ss. Sex Matyrum Cambriæ et sociorum',
    sixtus_ii_pope_and_companions_martyrs:
      'Ss. Xysti II, papæ, et sociorum, martyrum',
    spyridon_of_trimythous_bishop: 'S. Spyridonis, episcopi',
    stanislaus_kazimierczyk_priest: 'S. Stanislai Kazimierczyk, presbyteri',
    stanislaus_kostka_religious: 'S. Stanislai Kostka, religiosi',
    stanislaus_of_szczepanow_bishop: 'S. Stanislai, episcopi et martyris',
    stanislaus_of_szczepanow_bishop_patron_of_poland:
      'S. Stanislai, episcopi, martyris et patroni Poloniæ',
    stephen_i_of_hungary: 'S. Stephani Hungariæ',
    stephen_the_first_martyr: 'S. Stephani, protomartyris',
    sunday_of_the_word_of_god: 'Dominica Verbi Dei',
    sunniva_of_norway_virgin: 'S. Sunnivæ, virginis et martyris',
    swithun_of_winchester_bishop: 'S. Swithuni, episcopi',
    sylvester_i_pope: 'S. Silvestri I, papæ',
    szilard_bogdanffy_bishop: 'B. Szilárd Bogdánffy, episcopi et martyris',
    teilo_of_llandaff_bishop: 'S. Teliavi, episcopi',
    teresa_benedicta_of_the_cross_stein_virgin:
      'S. Teresiæ Benedictæ a Cruce Stein, virginis et martyris',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'S. Teresiæ Benedictæ a Cruce Stein, virginis, martyris et patronæ secundariæ Europæ',
    teresa_of_calcutta_religious: 'S. Teresiæ de Calcutta, religiosi',
    teresa_of_jesus_jornet_ibars_virgin:
      'S. Teresiæ a Iesu Jornet Ibars, virginis',
    teresa_of_jesus_of_avila_virgin:
      'S. Teresiæ a Iesu Abulensis, virginis et Ecclesiæ doctoris',
    teresa_of_jesus_of_los_andes_virgin:
      'S. Teresiæ a Iesu de Los Andes, virginis',
    teresa_of_portugal_religious: 'B. Teresiæ Lusitaniæ, religiosae',
    theodore_of_canterbury_bishop: 'S. Theodori Cantuariensis, episcopi',
    theodore_romzha_bishop: 'B. Theodori Romzsa, episcopi et martyris',
    theodosius_of_the_caves_abbot: 'S. Theodosii Kioviensis, abbatis',
    theotonius_of_coimbra_priest: 'S. Theotonii, presbyteri',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'S. Teresiæ a Iesu Infante, virginis et Ecclesiæ doctoris',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'S. Teresiæ a Iesu Infante et a Sacro Vultu Lexoviensis, virginis, Ecclesiæ doctori et patronæ secundariæ Galliæ',
    thomas_apostle: 'S. Thomæ, apostoli',
    thomas_aquinas_priest:
      'S. Thomæ de Aquino, presbyteri et Ecclesiæ doctoris',
    thomas_becket_bishop: 'S. Thomæ Becket, episcopi et martyris',
    thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs:
      'Ss. Thomæ Hioji Rokuzayemon Nishi, presbyteri, et sociorum, martyrum',
    thomas_of_villanova_bishop: 'S. Thomæ a Villanova, episcopi',
    thorfinn_of_hamar_bishop: 'S. Thorfinni, episcopi',
    thorlac_of_iceland_bishop: 'S. Thorlaci, episcopi',
    timothy_of_ephesus_and_titus_of_crete_bishops:
      'Ss. Timothei et Titi, episcoporum',
    translation_of_the_relics_of_saint_stephen_of_hungary:
      'In Translatione reliquiarum S. Stephani Hungariæ',
    turibius_of_mogrovejo_bishop: 'S. Turibii de Mogrovejo, episcopi',
    ulrich_of_augsburg_bishop: 'S. Udalrici Augustensis, episcopi',
    ursula_of_cologne_and_companions_virgins:
      'Ss. Ursulæ Coloniensis et sociorum, virginum et martyrum',
    valentine_of_raetia_bishop: 'S. Valentini Rhætiæ, episcopi',
    vincent_de_paul_priest: 'S. Vincentii de Paul, presbyteri',
    vincent_ferrer_priest: 'S. Vincentii Ferrer, presbyteri',
    vincent_kadlubek_bishop: 'B. Vincentii Kadłubek, episcopi',
    vincent_lewoniuk_and_companions_martyrs: 'Beatorum Martyrum de Pratulin',
    vincent_of_saragossa_deacon: 'S. Vincentii, diaconi et martyris',
    vincent_pallotti_priest: 'S. Vincentii Pallotti, presbyteri',
    virgilius_of_salzburg_bishop: 'S. Virgilii Salisburgensis, episcopi',
    visitation_of_mary: 'In Visitatione B. Mariæ Virginis',
    vitus_of_lucania_martyr: 'S. Viti, martyris',
    vladimir_ghika_priest: 'B. Vladimiri Ghika, presbyteri et martyris',
    vladimir_i_the_great_of_kiev: 'S. Vladimiri I Magni',
    waitangi_day: 'Dies Nationalis Novæ Zelandiæ',
    walpurga_of_heidenheim_abbess: 'S. Walburgis, abatissæ',
    wenceslaus_i_of_bohemia_martyr: 'S. Wenceslai, martyris',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'S. Wenceslai, martyris et patroni de gente Bohemica',
    wendelin_of_trier_abbot: 'S. Wendelini, abbatis',
    wilfrid_of_york_bishop: 'S. Wilfridi, episcopi',
    william_apor_bishop: 'B. Gulielmi Apor, episcopi et martyris',
    willibald_of_eichstatt_bishop: 'S. Willibaldi, episcopi',
    willibrord_of_utrecht_bishop: 'S. Willibrordi, episcopi',
    winefride_of_flintshire_virgin: 'S. Wenefredæ, virginis',
    wladyslaw_bladzinski_priest_and_companions_martyrs:
      'B. Ladislai Błądziński, presbyteri, et sociorum, martyrum',
    wolfgang_of_regensburg_bishop: 'S. Wolfgangi Ratisbonensis, episcopi',
    wulstan_of_worcester_bishop: 'S. Wulstani, episcopi',
    yolanda_of_poland_religious: 'B. Iolentæ, religiosæ',
    zdenka_cecilia_schelingova_virgin:
      'B. Sidoniæ Cæciliæ Scheling, virginis et martyris',
    zdislava_of_lemberk: 'S. Zdislavæ',
    zepherin_namuncura: 'B. Zephyrini Namuncurá',
    zoltan_lajos_meszlenyi_bishop:
      'B. Zoltán Lajos Meszlényi, episcopi et martyris',
    zygmunt_gorazdowski_priest: 'S. Sigismundi Gorazdowski, presbyteri',
  },
};
