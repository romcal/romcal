type MartyrologyItem = {
  name: string;
  titles?: string[];
  hideTitles?: boolean;
  dateOfDeath?: string;
  count?: number | 'many';
};

type MartyrologyCatalog = Record<string, MartyrologyItem>;

interface BaseMartyrology {
  catalog: MartyrologyCatalog;
}

class Martyrology implements BaseMartyrology {
  catalog: MartyrologyCatalog = {
    all_saints: {
      name: 'All Saints',
      titles: [],
    },

    annunciation: {
      name: 'Annunciation of the Lord',
    },

    ascension: {
      name: 'Ascension of the Lord',
    },

    ash_wednesday: {
      name: 'Ash Wednesday',
    },

    assumption: {
      name: 'Assumption of the Blessed Virgin Mary',
    },

    baptism_of_the_lord: {
      name: 'Baptism of the Lord',
    },

    christ_the_king_sunday: {
      name: 'Our Lord Jesus Christ, King of the Universe',
      titles: [],
    },

    christmas: {
      name: 'Nativity of the Lord',
    },

    corpus_christi: {
      name: 'Most Holy Body and Blood of Christ',
    },

    divine_mercy_sunday: {
      name: 'Sunday of Divine Mercy',
    },

    easter_sunday: {
      name: 'Easter Sunday of the Resurrection of the Lord',
    },

    epiphany: {
      name: 'Epiphany of the Lord',
    },

    exaltation_of_the_holy_cross: {
      name: 'Exaltation of the Holy Cross',
    },

    good_friday: {
      name: 'Good Friday',
    },

    holy_family: {
      name: 'Holy Family of Jesus',
      titles: ['Mary and Joseph'],
    },

    holy_saturday: {
      name: 'Holy Saturday/Easter Vigil',
    },

    holy_thursday: {
      name: 'Holy Thursday',
    },

    immaculate_conception_of_mary: {
      name: 'Immaculate Conception of the Blessed Virgin Mary',
    },

    immaculate_heart_of_mary: {
      name: 'Immaculate Heart of the Blessed Virgin Mary',
    },

    joseph_spouse_of_mary: {
      name: 'Saint Joseph',
      titles: ['Spouse of the Blessed Virgin Mary'],
    },

    mary_mother_of_god: {
      name: 'Mary',
      titles: ['the Holy Mother of God'],
    },

    most_sacred_heart_of_jesus: {
      name: 'Most Sacred Heart of Jesus',
    },

    nativity_of_john_the_baptist: {
      name: 'Nativity of Saint John the Baptist',
    },

    palm_sunday: {
      name: 'Palm Sunday of the Passion of the Lord',
    },

    pentecost_sunday: {
      name: 'Pentecost Sunday',
    },

    peter_and_paul_apostles: {
      name: 'Saints Peter and Paul',
      titles: ['Apostles'],
    },

    presentation_of_the_lord: {
      name: 'Presentation of the Lord',
    },

    transfiguration: {
      name: 'Transfiguration of the Lord',
    },

    trinity_sunday: {
      name: 'Most Holy Trinity',
    },

    '205_blessed_martyrs_of_japan': {
      name: '205 Blessed Martyrs of Japan',
    },

    adalbert_of_prague_bishop: {
      name: 'Saint Adalbert',
      titles: ['Bishop', 'Martyr'],
    },

    adolph_kolping_priest: {
      name: 'Blessed Adolph Kolping',
      titles: ['Priest'],
    },

    aelred_of_rievaulx_abbot: {
      name: 'Saint Aelred of Rievaulx',
      titles: ['Abbot'],
    },

    aengus_of_tallaght_bishop: {
      name: 'Saint Aengus',
      titles: ['Bishop', 'Abbot'],
    },

    agatha_of_sicily_virgin: {
      name: 'Saint Agatha',
      titles: ['Virgin', 'Martyr'],
    },

    agnes_cao_guiying_martyr: {
      name: 'Saint Agnes Cao Guiying',
      titles: ['Martyr'],
    },

    agnes_of_bohemia_virgin: {
      name: 'Saint Agnes of Bohemia',
      titles: ['Virgin'],
    },

    agnes_of_rome_virgin: {
      name: 'Saint Agnes',
      titles: ['Virgin', 'Martyr'],
    },

    aidan_of_ferns_bishop: {
      name: 'Saint Aidan',
      titles: ['Bishop'],
    },

    aidan_of_lindisfarne_bishop: {
      name: 'Saint Aidan of Lindisfarne',
      titles: ['Bishop', 'Missionary'],
    },

    the_saints_of_lindisfarne: {
      name: 'the Saints of Lindisfarne',
    },

    ailbe_of_emly_bishop: {
      name: 'Saint Ailbe',
      titles: ['Bishop'],
    },

    alban_of_britain_martyr: {
      name: 'Saint Alban',
      titles: ['Martyr'],
    },

    julius_of_caerleon_martyr: {
      name: 'Saint Julius',
      titles: ['Martyr'],
    },

    aaron_of_caerleon_martyr: {
      name: 'Saint Aaron',
      titles: ['Martyr'],
    },

    alberic_crescitelli_priest: {
      name: 'Saint Alberic Crescitelli',
      titles: ['Priest', 'Martyr'],
    },

    albert_chmielowski_religious: {
      name: 'Saint Albert Chmielowski',
      titles: ['Religious'],
    },

    albert_the_great_bishop: {
      name: 'Saint Albert the Great',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    albertina_berkenbrock_virgin: {
      name: 'Blessed Albertina Berkenbrock',
      titles: ['Virgin', 'Martyr'],
    },

    alberto_hurtado_priest: {
      name: 'Saint Alberto Hurtado',
      titles: ['Priest'],
    },

    all_saints_of_ireland: {
      name: 'All Saints of Ireland',
    },

    all_saints_of_wales: {
      name: 'All Saints of Wales',
    },

    all_souls: {
      name: 'Commemoration of All the Faithful Departed',
    },

    aloysius_gonzaga_religious: {
      name: 'Saint Aloysius Gonzaga',
      titles: ['Religious'],
    },

    aloysius_stepinac_bishop: {
      name: 'Blessed Aloysius Stepinac',
      titles: ['Bishop', 'Martyr'],
    },

    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs: {
      name: 'Saints Aloysius Versiglia',
      titles: ['Bishop and Callistus Caravario, Priest, Martyrs'],
    },

    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: {
      name: 'Saint Alphonsa of the Immaculate Conception Muttathupadathu',
      titles: ['Virgin'],
    },

    alphonsus_liguori_bishop: {
      name: 'Saint Alphonsus Liguori',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    amand_of_maastricht_bishop: {
      name: 'Saint Amand',
      titles: ['Bishop'],
    },

    ambrose_of_milan_bishop: {
      name: 'Saint Ambrose',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    andre_bessette_religious: {
      name: 'Saint André Bessette',
      titles: ['Religious'],
    },

    andre_grasset_priest: {
      name: 'Blessed André Grasset',
      titles: ['Priest', 'Martyr'],
    },

    andrew_apostle: {
      name: 'Saint Andrew',
      titles: ['Apostle'],
    },

    andrew_bobola_priest: {
      name: 'Saint Andrew Bobola',
      titles: ['Priest', 'Martyr'],
    },

    andrew_de_soveral_priest: {
      name: 'Saints Andrew de Soveral and Ambrose Francis Ferro',
      titles: ['Priest', 'Martyr'],
    },

    ambrose_francis_ferro_priest: {
      name: 'Saints Andrew de Soveral and Ambrose Francis Ferro',
      titles: ['Priest', 'Martyr'],
    },

    andrew_dung_lac_priest: {
      name: 'Saint Andrew Dũng-Lạc',
      titles: ['Priest', 'Martyr'],
    },

    andrew_kim_tae_gon_priest: {
      name: 'Saint Andrew Kim Tae-gŏn',
      titles: ['Priest', 'Martyr'],
    },

    paul_chong_ha_sang_martyr: {
      name: 'Saint Paul Chŏng Ha-sang',
      titles: ['Martyr'],
    },

    andrew_zorard_of_nitra_hermit: {
      name: 'Saint Andrew Zorard',
      titles: ['Hermit'],
    },

    benedict_of_skalka_hermit: {
      name: 'Saint Benedict',
      titles: ['Hermit'],
    },

    angela_merici_virgin: {
      name: 'Saint Angela Merici',
      titles: ['Virgin'],
    },

    angela_salawa_virgin: {
      name: 'Blessed Angela Salawa',
      titles: ['Virgin'],
    },

    anno_of_cologne_bishop: {
      name: 'Saint Anno of Cologne',
      titles: ['Bishop'],
    },

    anselm_of_canterbury_bishop: {
      name: 'Saint Anselm',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    ansgar_of_hamburg_bishop: {
      name: 'Saint Ansgar',
      titles: ['Bishop'],
    },

    anthony_julian_nowowiejski_bishop: {
      name: 'Blessed Anthony Julian Nowowiejski',
      titles: ['Bishop', 'Martyr'],
    },

    anthony_mary_claret_bishop: {
      name: 'Saint Anthony Mary Claret',
      titles: ['Bishop'],
    },

    anthony_of_egypt_abbot: {
      name: 'Saint Anthony',
      titles: ['Abbot'],
    },

    anthony_of_padua_priest: {
      name: 'Saint Anthony of Padua',
      titles: ['Priest', 'Doctor of the Church'],
    },

    anthony_of_saint_anne_galvao_priest: {
      name: 'Saint Anthony of Saint Anne Galvão',
      titles: ['Priest'],
    },

    anthony_of_the_caves_monk: {
      name: 'Saint Anthony of the Caves',
      titles: ['Monk'],
    },

    anthony_zaccaria_priest: {
      name: 'Saint Anthony Zaccaria',
      titles: ['Priest'],
    },

    apollinaris_of_ravenna_bishop: {
      name: 'Saint Apollinaris',
      titles: ['Bishop', 'Martyr'],
    },

    asaph_of_wales_bishop: {
      name: 'Saint Asaph',
      titles: ['Bishop'],
    },

    asicus_of_elphin_bishop: {
      name: 'Saint Asicus',
      titles: ['Bishop'],
    },

    athanasius_of_alexandria_bishop: {
      name: 'Saint Athanasius',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    attracta_of_killaraght_virgin: {
      name: 'Saint Attracta',
      titles: ['Virgin'],
    },

    augustine_kazotic_bishop: {
      name: 'Blessed Augustine Kažotić',
      titles: ['Bishop', 'Martyr'],
    },

    augustine_of_canterbury_bishop: {
      name: 'Saint Augustine of Canterbury',
      titles: ['Bishop'],
    },

    augustine_of_hippo_bishop: {
      name: 'Saint Augustine',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    augustine_zhao_rong_priest: {
      name: 'Saint Augustine Zhao Rong',
      titles: ['Priest', 'Martyr'],
    },

    barbara_of_heliopolis_virgin: {
      name: 'Saint Barbara',
      titles: ['Virgin', 'Martyr'],
    },

    barnabas_apostle: {
      name: 'Saint Barnabas',
      titles: ['Apostle'],
    },

    bartholomew_apostle: {
      name: 'Saint Bartholomew',
      titles: ['Apostle'],
    },

    bartholomew_dias_laurel_religious: {
      name: 'Blessed Bartholomew Días Laurel',
      titles: ['Religious', 'Martyr'],
    },

    bartholomew_of_the_martyrs_fernandes_bishop: {
      name: 'Saint Bartholomew of the Martyrs Fernandes',
      titles: ['Bishop'],
    },

    basil_the_great_bishop: {
      name: 'Saint Basil the Great',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    gregory_nazianzen_bishop: {
      name: 'Saint Gregory Nazianzen',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    beatrice_da_silva_meneses_virgin: {
      name: 'Saint Beatrice da Silva Meneses',
      titles: ['Virgin'],
    },

    bede_the_venerable_priest: {
      name: 'Saint Bede the Venerable',
      titles: ['Priest', 'Doctor of the Church'],
    },

    benedict_of_jesus_valdivielso_saez_religious: {
      name: 'Saint Benedict of Jesus Valdivielso Sáez',
      titles: ['Religious', 'Martyr'],
    },

    benedict_of_nursia_abbot: {
      name: 'Saint Benedict',
      titles: ['Abbot'],
    },

    benno_of_meissen_bishop: {
      name: 'Saint Benno of Meissen',
      titles: ['Bishop'],
    },

    bernadette_soubirous_virgin: {
      name: 'Saint Bernadette Soubirous',
      titles: ['Virgin'],
    },

    bernard_of_clairvaux_abbot: {
      name: 'Saint Bernard',
      titles: ['Abbot', 'Doctor of the Church'],
    },

    bernardine_of_siena_priest: {
      name: 'Saint Bernardine of Siena',
      titles: ['Priest'],
    },

    beuno_of_wales_abbot: {
      name: 'Saint Beuno',
      titles: ['Abbot'],
    },

    blaise_of_sebaste_bishop: {
      name: 'Saint Blaise',
      titles: ['Bishop', 'Martyr'],
    },

    bogumilus_of_dobrow_bishop: {
      name: 'Blessed Bogumilus',
      titles: ['Bishop'],
    },

    boleslawa_mary_lament_virgin: {
      name: 'Blessed Boleslawa Mary Lament',
      titles: ['Virgin'],
    },

    bonaventure_of_bagnoregio_bishop: {
      name: 'Saint Bonaventure',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    boniface_of_mainz_bishop: {
      name: 'Saint Boniface',
      titles: ['Bishop', 'Martyr'],
    },

    boris_of_kiev_and_gleb_of_kiev_martyrs: {
      name: 'Saints Boris and Gleb',
      titles: ['Martyrs'],
    },

    brendan_of_clonfert_abbot: {
      name: 'Saint Brendan',
      titles: ['Abbot'],
    },

    bridget_of_sweden_religious: {
      name: 'Saint Bridget',
      titles: ['Religious'],
    },

    brigid_of_kildare_virgin: {
      name: 'Saint Brigid',
      titles: ['Virgin'],
    },

    bronislava_of_poland_virgin: {
      name: 'Blessed Bronislava',
      titles: ['Virgin'],
    },

    bronislaw_markiewicz_priest: {
      name: 'Blessed Bronisław Markiewicz',
      titles: ['Priest'],
    },

    bruno_of_cologne_priest: {
      name: 'Saint Bruno',
      titles: ['Priest'],
    },

    bruno_of_querfurt_bishop: {
      name: 'Saint Bruno of Querfurt',
      titles: ['Bishop', 'Martyr'],
    },

    caesarius_of_arles_bishop: {
      name: 'Saint Caesarius of Arles',
      titles: ['Bishop'],
    },

    cajetan_of_thiene_priest: {
      name: 'Saint Cajetan',
      titles: ['Priest'],
    },

    callistus_i_pope: {
      name: 'Saint Callistus I',
      titles: ['Pope', 'Martyr'],
    },

    camillus_de_lellis_priest: {
      name: 'Saint Camillus de Lellis',
      titles: ['Priest'],
    },

    canice_of_kilkenny_abbot: {
      name: 'Saint Canice',
      titles: ['Abbot'],
    },

    canute_iv_of_denmark_martyr: {
      name: 'Saint Canute',
      titles: ['Martyr'],
    },

    carlos_manuel_rodriguez_santiago: {
      name: 'Blessed Carlos Manuel Rodríguez Santiago',
    },

    caroline_kozka_virgin: {
      name: 'Blessed Caroline Kózka',
      titles: ['Virgin', 'Martyr'],
    },

    carthage_of_lismore_bishop: {
      name: 'Saint Carthage',
      titles: ['Bishop'],
    },

    casimir_of_poland: {
      name: 'Saint Casimir',
    },

    catherine_of_alexandria_virgin: {
      name: 'Saint Catherine of Alexandria',
      titles: ['Virgin', 'Martyr'],
    },

    catherine_of_saint_augustine_de_simon_de_longpre_virgin: {
      name: 'Blessed Catherine of Saint Augustine',
      titles: ['Virgin'],
    },

    catherine_of_siena_virgin: {
      name: 'Saint Catherine of Siena',
      titles: ['Virgin', 'Doctor of the Church'],
    },

    ceallach_of_armagh_bishop: {
      name: 'Saint Ceallach',
      titles: ['Bishop'],
    },

    cecilia_of_rome_virgin: {
      name: 'Saint Cecilia',
      titles: ['Virgin', 'Martyr'],
    },

    ceferino_gimenez_malla_martyr: {
      name: 'Blessed Ceferino Giménez Malla',
      titles: ['Martyr'],
    },

    ceslaus_of_poland_priest: {
      name: 'Blessed Ceslaus',
      titles: ['Priest'],
    },

    chad_of_mercia_bishop: {
      name: 'Saint Chad',
      titles: ['Bishop'],
    },

    cedd_of_lastingham_bishop: {
      name: 'Saint Cedd',
      titles: ['Bishop'],
    },

    chair_of_saint_peter_the_apostle: {
      name: 'Chair of Saint Peter the Apostle',
    },

    charles_borromeo_bishop: {
      name: 'Saint Charles Borromeo',
      titles: ['Bishop'],
    },

    charles_i_of_austria: {
      name: 'Blessed Charles of Austria',
    },

    charles_lwanga_martyr: {
      name: 'Saint Charles Lwanga',
    },

    jerome_de_angelis_priest: {
      name: 'Blessed Jerome de Angelis',
      titles: ['Priest', 'Martyr'],
    },

    charles_spinola_priest: {
      name: 'Blessed Charles Spinola',
      titles: ['Priest', 'Martyr'],
    },

    christopher_magallanes_priest: {
      name: 'Saint Christopher Magallanes',
      titles: ['Priest', 'Martyr'],
    },

    christopher_of_palestine_martyr: {
      name: 'Saint Christopher',
      titles: ['Martyr'],
    },

    ciaran_of_clonmacnoise_abbot: {
      name: 'Saint Ciaran',
      titles: ['Abbot'],
    },

    clare_of_assisi_virgin: {
      name: 'Saint Clare',
      titles: ['Virgin'],
    },

    clement_i_pope: {
      name: 'Saint Clement I',
      titles: ['Pope', 'Martyr'],
    },

    clement_mary_hofbauer_priest: {
      name: 'Saint Clement Mary Hofbauer',
      titles: ['Priest'],
    },

    clement_of_ohrid_bishop: {
      name: 'Saint Clement of Ohrid',
      titles: ['Bishop'],
    },

    gorazd_of_moravia_bishop: {
      name: 'Saint Gorazd',
      titles: ['Bishop'],
    },

    clotilde_of_burgundy: {
      name: 'Saint Clotilde',
    },

    colman_of_cloyne_bishop: {
      name: 'Saint Colman of Cloyne',
      titles: ['Bishop'],
    },

    colman_of_dromore_bishop: {
      name: 'Saint Colman of Dromore',
      titles: ['Bishop'],
    },

    colman_of_kilmacduagh_bishop: {
      name: 'Saint Colman of Kilmacduagh',
      titles: ['Bishop'],
    },

    columba_marmion_priest: {
      name: 'Blessed Columba Marmion',
      titles: ['Priest'],
    },

    columba_of_iona_abbot: {
      name: 'Saint Columba',
      titles: ['Abbot'],
    },

    columban_of_luxeuil_abbot: {
      name: 'Saint Columban',
      titles: ['Abbot'],
    },

    comgall_of_bangor_abbot: {
      name: 'Saint Comgall',
      titles: ['Abbot'],
    },

    conleth_of_kildare_bishop: {
      name: 'Saint Conleth',
      titles: ['Bishop'],
    },

    conrad_of_constance_bishop: {
      name: 'Saints Conrad of Constance',
      titles: ['Bishop'],
    },

    gebhard_of_constance_bishop: {
      name: 'Saint Gebhard of Constance',
      titles: ['Bishop'],
    },

    conrad_of_parzham_religious: {
      name: 'Saint Conrad of Parzham',
      titles: ['Religious'],
    },

    conversion_of_saint_paul_the_apostle: {
      name: 'Conversion of Saint Paul the Apostle',
    },

    corbinian_of_freising_bishop: {
      name: 'Saint Corbinian',
      titles: ['Bishop'],
    },

    cornelius_i_pope: {
      name: 'Saint Cornelius',
      titles: ['Pope', 'Martyrs'],
    },

    cyprian_of_carthage_bishop: {
      name: 'Saints Cornelius',
      titles: ['Bishop', 'Martyr'],
    },

    cosmas_of_cilicia_martyr: {
      name: 'Saint Cosmas',
      titles: ['Martyr'],
    },

    damian_of_cilicia_martyr: {
      name: 'Saint Damian',
      titles: ['Martyr'],
    },

    cuthbert_of_lindisfarne_bishop: {
      name: 'Saint Cuthbert',
      titles: ['Bishop'],
    },

    cyril_of_alexandria_bishop: {
      name: 'Saint Cyril of Alexandria',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    cyril_of_jerusalem_bishop: {
      name: 'Saint Cyril of Jerusalem',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    cyril_the_philosopher_monk: {
      name: 'Saint Cyril',
      titles: ['Monk'],
    },

    methodius_of_thessaloniki_bishop: {
      name: 'Saint Methodius',
      titles: ['Bishop'],
    },

    damasus_i_pope: {
      name: 'Saint Damasus I',
      titles: ['Pope'],
    },

    damien_de_veuster_priest: {
      name: 'Saint Damien de Veuster',
      titles: ['Priest'],
    },

    david_lewis_priest: {
      name: 'Saint David Lewis',
      titles: ['Priest', 'Martyr'],
    },

    david_of_wales_bishop: {
      name: 'Saint David',
      titles: ['Bishop'],
    },

    davnet_of_sliabh_beagh_virgin: {
      name: 'Saint Davnet',
      titles: ['Virgin'],
    },

    declan_of_ardmore_bishop: {
      name: 'Saint Declan',
      titles: ['Bishop'],
    },

    dedication_of_consecrated_churches: {
      name: 'Dedication of Consecrated Churches whose date of Consecration is unknown',
    },

    dedication_of_the_basilica_of_saint_mary_major: {
      name: 'Dedication of the Basilica of Saint Mary Major',
    },

    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      name: 'Dedication of the Basilicas of Saints Peter and Paul',
      titles: ['Apostle'],
      count: 2,
    },

    dedication_of_the_lateran_basilica: {
      name: 'Dedication of the Lateran Basilica',
    },

    deiniol_of_bangor_bishop: {
      name: 'Saint Deiniol',
      titles: ['Bishop'],
    },

    demetrius_of_thessaloniki_martyr: {
      name: 'Saint Demetrius of Thessaloniki',
      titles: ['Martyr'],
    },

    denis_of_paris_bishop: {
      name: 'Saint Denis',
      titles: ['Bishop', 'Martyr'],
    },

    dina_belanger_virgin: {
      name: 'Blessed Dina Bélanger',
      titles: ['Virgin'],
    },

    dionysius_the_areopagite_bishop: {
      name: 'Saint Dionysius the Areopagite',
      titles: ['Bishop', 'Martyr'],
    },

    dominic_de_guzman_priest: {
      name: 'Saint Dominic',
      titles: ['Priest'],
    },

    dominic_of_the_mother_of_god_barberi_priest: {
      name: 'Blessed Dominic of the Mother of God Barberi',
      titles: ['Priest'],
    },

    dunstan_of_canterbury_bishop: {
      name: 'Saint Dunstan',
      titles: ['Bishop'],
    },

    dyfrig_of_wales_bishop: {
      name: 'Saint Dyfrig',
      titles: ['Bishop'],
    },

    edmund_bojanowski: {
      name: 'Blessed Edmund Bojanowski',
    },

    edmund_campion_priest: {
      name: 'Saint Edmund Campion',
      titles: ['Priest', 'Martyr'],
    },

    edmund_ignatius_rice_religious: {
      name: 'Blessed Edmund Rice',
      titles: ['Religious'],
    },

    edmund_of_abingdon_bishop: {
      name: 'Saint Edmund of Abingdon',
      titles: ['Bishop'],
    },

    edward_the_confessor: {
      name: 'Saint Edward the Confessor',
    },

    elijah_prophet: {
      name: 'Saint Elijah',
      titles: ['Prophet'],
    },

    elizabeth_ann_seton_religious: {
      name: 'Saint Elizabeth Ann Seton',
      titles: ['Religious'],
    },

    elizabeth_hesselblad_religious: {
      name: 'Saint Elizabeth Hesselblad',
      titles: ['Religious'],
    },

    elizabeth_of_hungary_religious: {
      name: 'Saint Elizabeth of Hungary',
      titles: ['Religious'],
    },

    elizabeth_of_portugal: {
      name: 'Saint Elizabeth of Portugal',
    },

    emeric_of_hungary: {
      name: 'Saint Emeric',
    },

    emilie_tavernier_gamelin_religious: {
      name: 'Blessed Émilie Tavernier-Gamelin',
      titles: ['Religious'],
    },

    enda_of_aran_abbot: {
      name: 'Saint Enda',
      titles: ['Abbot'],
    },

    english_martyrs: {
      name: 'English Martyrs',
      titles: ['Martyr'],
      hideTitles: true,
      count: 'many',
    },

    eoghan_of_ardstraw_bishop: {
      name: 'Saint Eoghan',
      titles: ['Bishop'],
    },

    ephrem_the_syrian_deacon: {
      name: 'Saint Ephrem',
      titles: ['Deacon', 'Doctor of the Church'],
    },

    eric_ix_of_sweden_martyr: {
      name: 'Saint Eric IX of Sweden',
      titles: ['Martyr'],
    },

    etheldreda_of_ely_abbess: {
      name: 'Saint Etheldreda',
      titles: ['Abbess'],
    },

    eugene_de_mazenod_bishop: {
      name: 'Saint Eugène de Mazenod',
      titles: ['Bishop'],
    },

    eulalia_of_merida_virgin: {
      name: 'Saint Eulalia of Merida',
      titles: ['Virgin', 'Martyr'],
    },

    eulogius_of_cordoba_bishop: {
      name: 'Saint Eulogius of Córdoba',
      titles: ['Bishop'],
    },

    eusebius_of_esztergom_priest: {
      name: 'Blessed Eusebius of Esztergom',
      titles: ['Priest'],
    },

    eusebius_of_vercelli_bishop: {
      name: 'Saint Eusebius of Vercelli',
      titles: ['Bishop'],
    },

    eysteinn_of_nidaros_bishop: {
      name: 'Saint Eysteinn of Nidaros',
      titles: ['Bishop'],
    },

    ezequiel_moreno_bishop: {
      name: 'Saint Ezequiel Moreno',
      titles: ['Bishop'],
    },

    fabian_i_pope: {
      name: 'Saint Fabian',
      titles: ['Pope', 'Martyr'],
    },

    fachanan_of_kilfenora_bishop: {
      name: 'Saint Fachanan',
      titles: ['Bishop'],
    },

    fachtna_of_rosscarbery_bishop: {
      name: 'Saint Fachtna',
      titles: ['Bishop'],
    },

    faustina_kowalska_virgin: {
      name: 'Saint Faustina Kowalska',
      titles: ['Virgin'],
    },

    ferdinand_iii_of_castile: {
      name: 'Saint Ferdinand III of Castile',
    },

    fiacre_of_breuil_monk: {
      name: 'Saint Fiacre',
      titles: ['Monk'],
    },

    fidelis_of_sigmaringen_priest: {
      name: 'Saint Fidelis of Sigmaringen',
      titles: ['Priest', 'Martyr'],
    },

    finbarr_of_cork_bishop: {
      name: 'Saint Finbarr',
      titles: ['Bishop'],
    },

    finding_of_the_holy_cross: {
      name: 'Finding of the Holy Cross',
    },

    finnian_of_clonard_bishop: {
      name: 'Saint Finian',
      titles: ['Bishop'],
    },

    fintan_of_clonenagh_abbot: {
      name: 'Saint Fintan',
      titles: ['Abbot'],
    },

    first_martyrs_of_the_holy_roman_church: {
      name: 'First Martyrs of the Holy Roman Church',
      titles: ['Martyr'],
      hideTitles: true,
      count: 'many',
    },

    first_polish_martyrs: {
      name: 'Saints Benedict, John, Matthew, Isaac and Christian, the First Polish Martyrs',
      titles: ['Martyr'],
      hideTitles: true,
      count: 5,
    },

    five_wounds_of_the_lord: {
      name: 'Five Wounds of the Lord',
    },

    flannan_of_killaloe_bishop: {
      name: 'Saint Flannan',
      titles: ['Bishop'],
    },

    florian_of_lorch_martyr: {
      name: 'Saint Florian',
      titles: ['Martyr'],
    },

    frances_of_rome_religious: {
      name: 'Saint Frances of Rome',
      titles: ['Religious'],
    },

    frances_xavier_cabrini_virgin: {
      name: 'Saint Frances Xavier Cabrini',
      titles: ['Virgin'],
    },

    francis_borgia_priest: {
      name: 'Saint Francis Borgia',
      titles: ['Priest'],
    },

    francis_de_sales_bishop: {
      name: 'Saint Francis de Sales',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    francis_diaz_del_rincon_priest: {
      name: 'Saint Francis Díaz del Rincon',
      titles: ['Priest', 'Martyr'],
    },

    francis_ferdinand_de_capillas_priest: {
      name: 'Saint Francis Ferdinand de Capillas',
      titles: ['Priest', 'Martyr'],
    },

    francis_of_assisi: {
      name: 'Saint Francis of Assisi',
    },

    francis_of_paola_hermit: {
      name: 'Saint Francis of Paola',
      titles: ['Hermit'],
    },

    francis_solanus_priest: {
      name: 'Saint Francis Solanus',
      titles: ['Priest'],
    },

    francis_xavier_priest: {
      name: 'Saint Francis Xavier',
      titles: ['Priest'],
    },

    francis_xavier_seelos_priest: {
      name: 'Blessed Francis Xavier Seelos',
      titles: ['Priest'],
    },

    francois_de_montmorency_laval_bishop: {
      name: 'Saint François de Laval',
      titles: ['Bishop'],
    },

    frederic_janssoone_priest: {
      name: 'Blessed Frédéric Janssoone',
      titles: ['Priest'],
    },

    fridolin_of_sackingen_monk: {
      name: 'Saint Fridolin of Säckingen',
      titles: ['Monk'],
    },

    fructuosus_of_braga_bishop: {
      name: 'Saints Fructuosus of Braga',
      titles: ['Bishop'],
    },

    martin_of_braga_bishop: {
      name: 'Saints Fructuosus of Braga',
      titles: ['Bishop'],
    },

    gerald_of_braga_bishop: {
      name: 'Saints Fructuosus',
      titles: ['Bishop'],
    },

    fructuosus_of_tarragona_bishop: {
      name: 'Saint Fructuosus',
      titles: ['Bishop', 'Martyr'],
    },

    augurius_of_tarragona_deacon: {
      name: 'Saint Augurius',
      titles: ['Deacon', 'Martyr'],
    },

    eulogius_of_tarragona_deacon: {
      name: 'Saint Eulogius',
      titles: ['Deacon', 'Martyr'],
    },

    fursa_of_peronne_abbot: {
      name: 'Saint Fursa',
      titles: ['Abbot', 'Missionary'],
    },

    gabriel_taurin_dufresse_bishop: {
      name: 'Saint Gabriel-Taurin Dufresse',
      titles: ['Bishop', 'Martyr'],
    },

    gall_of_switzerland_abbot: {
      name: 'Saint Gall',
      titles: ['Abbot', 'Missionary'],
    },

    genevieve_of_paris_virgin: {
      name: 'Saint Genevieve',
      titles: ['Virgin'],
    },

    george_matulaitis_bishop: {
      name: 'Blessed George Matulaitis',
      titles: ['Bishop'],
    },

    george_of_lydda_martyr: {
      name: 'Saint George',
      titles: ['Martyr'],
    },

    george_preca_priest: {
      name: 'Saint George Preca',
      titles: ['Priest'],
    },

    gerard_of_csanad_bishop: {
      name: 'Saint Gerard of Csanád',
      titles: ['Bishop', 'Martyr'],
    },

    germanus_of_auxerre_bishop: {
      name: 'Saint Germanus of Auxerre',
      titles: ['Bishop'],
    },

    gertrude_of_nivelles_abbess: {
      name: 'Saint Gertrude of Nivelles',
      titles: ['Abbess'],
    },

    gertrude_the_great_virgin: {
      name: 'Saint Gertrude',
      titles: ['Virgin'],
    },

    gisela_of_hungary: {
      name: 'Blessed Gisela',
    },

    gobnait_of_ballyvourney_virgin: {
      name: 'Saint Gobnait',
      titles: ['Virgin'],
    },

    gorazd_of_moravia: {
      name: 'Saint Gorazd',
    },

    gotthard_of_hildesheim_bishop: {
      name: 'Saint Gotthard',
      titles: ['Bishop'],
    },

    gratia_of_cattaro_religious: {
      name: 'Blessed Gratia of Cattaro',
      titles: ['Religious'],
    },

    gregory_grassi_bishop: {
      name: 'Saints Gregory Grassi',
      titles: ['Bishop', 'Martyr'],
    },

    rancis_fogolla_bishop: {
      name: 'Saints Gregory Grassi',
      titles: ['Bishop', 'Martyr'],
    },

    anthony_fantosati_bishop: {
      name: 'Saints Gregory Grassi',
      titles: ['Bishop', 'Martyr'],
    },

    gregory_i_the_great_pope: {
      name: 'Saint Gregory the Great',
      titles: ['Pope', 'Doctor of the Church'],
    },

    gregory_of_narek_abbot: {
      name: 'Saint Gregory of Narek',
      titles: ['Abbot', 'Doctor of the Church'],
    },

    gregory_vii_pope: {
      name: 'Saint Gregory VII',
      titles: ['Pope'],
    },

    guardian_angel_of_portugal: {
      name: 'Guardian Angel of Portugal',
    },

    guardian_angels: {
      name: 'Holy Guardian Angels',
      count: 'many',
    },

    gundisalvus_garcia_martyr: {
      name: 'Saint Gundisalvus Garcia',
      titles: ['Martyr'],
    },

    gundisalvus_of_amarante_priest: {
      name: 'Blessed Gundisalvus of Amarante',
      titles: ['Priest'],
    },

    gundisalvus_of_lagos_priest: {
      name: 'Blessed Gundisalvus of Lagos',
      titles: ['Priest'],
    },

    hedwig_of_poland: {
      name: 'Saint Hedwig of Poland',
    },

    hedwig_of_silesia_religious: {
      name: 'Saint Hedwig',
      titles: ['Religious'],
    },

    helena_of_constantinople: {
      name: 'Saint Helena',
    },

    hemma_of_gurk: {
      name: 'Saint Hemma of Gurk',
    },

    hemming_of_turku_bishop: {
      name: 'Blessed Hemming of Turku',
      titles: ['Bishop'],
    },

    henry_ii_emperor: {
      name: 'Saint Henry',
    },

    henry_ii_emperor_and_cunigunde_of_luxembourg: {
      name: 'Saints Henry and Cunigunde',
    },

    henry_of_finland_bishop: {
      name: 'Saint Henry',
      titles: ['Bishop', 'Martyr'],
    },

    henry_suso_priest: {
      name: 'Blessed Henry Suso',
      titles: ['Priest'],
    },

    hermann_joseph_of_steinfeld_priest: {
      name: 'Saint Hermann Joseph',
      titles: ['Priest'],
    },

    hermenegild_the_visigoths_martyr: {
      name: 'Saint Hermenegild',
      titles: ['Martyr'],
    },

    hilary_of_poitiers_bishop: {
      name: 'Saint Hilary',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    hilda_of_whitby_abbess: {
      name: 'Saint Hilda',
      titles: ['Abbess'],
    },

    hildegard_of_bingen_abbess: {
      name: 'Saint Hildegard of Bingen',
      titles: ['Abbess', 'Doctor of the Church'],
    },

    holy_child_of_cebu: {
      name: 'Holy Child of Cebú',
    },

    holy_innocents_martyrs: {
      name: 'Holy Innocents',
      titles: ['Martyrs'],
    },

    honorat_kozminski_priest: {
      name: 'Blessed Honorat Koźmiński',
      titles: ['Priest'],
    },

    hosanna_of_cattaro_virgin: {
      name: 'Blessed Hosanna of Cattaro',
      titles: ['Virgin'],
    },

    hroznata_of_bohemia_martyr: {
      name: 'Blessed Hroznata',
      titles: ['Martyr'],
    },

    hubert_of_liege_bishop: {
      name: 'Saint Hubert',
      titles: ['Bishop'],
    },

    hugh_of_lincoln_bishop: {
      name: 'Saint Hugh of Lincoln',
      titles: ['Bishop'],
    },

    hungarian_saints_and_blesseds: {
      name: 'Hungarian Saints and Blesseds',
      count: 'many',
    },

    hyacinth_of_poland_priest: {
      name: 'Saint Hyacinth',
      titles: ['Priest'],
    },

    ignatius_de_azevedo_priest: {
      name: 'Blessed Ignatius de Azevedo',
      titles: ['Priest', 'Martyr'],
    },

    ignatius_falzon: {
      name: 'Blessed Ignatius Falzon',
    },

    ignatius_of_antioch_bishop: {
      name: 'Saint Ignatius of Antioch',
      titles: ['Bishop', 'Martyr'],
    },

    ignatius_of_loyola_priest: {
      name: 'Saint Ignatius of Loyola',
      titles: ['Priest'],
    },

    ildephonsus_of_toledo_bishop: {
      name: 'Saint Ildephonsus of Toledo',
      titles: ['Bishop'],
    },

    illtud_the_knight_abbot: {
      name: 'Saint Illtud',
      titles: ['Abbot'],
    },

    innocent_xi_pope: {
      name: 'Blessed Innocent XI',
      titles: ['Pope'],
    },

    irenaeus_of_lyon_bishop: {
      name: 'Saint Irenaeus',
      titles: ['Bishop', 'Martyr'],
    },

    irene_of_macedonia: {
      name: 'Saint Irene',
    },

    irish_martyrs: {
      name: 'Irish Martyrs',
      count: 'many',
    },

    isidore_of_seville_bishop: {
      name: 'Saint Isidore',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    isidore_the_farmer: {
      name: 'Saint Isidore',
    },

    istvan_sandor_religious: {
      name: 'Blessed István Sándor',
      titles: ['Religious', 'Martyr'],
    },

    ita_of_killeedy_virgin: {
      name: 'Saint Ita',
      titles: ['Virgin'],
    },

    ivan_merz: {
      name: 'Blessed Ivan Merz',
    },

    ivo_of_kermartin_priest: {
      name: 'Saint Ivo',
      titles: ['Priest'],
    },

    jacinta_marto: {
      name: 'Saint Jacinta Marto',
    },

    francisco_marto: {
      name: 'Saint Francisco Marto',
    },

    james_apostle: {
      name: 'Saint James',
      titles: ['Apostle'],
    },

    james_strzemie_bishop: {
      name: 'Blessed James Strzemię',
      titles: ['Bishop'],
    },

    jane_frances_de_chantal_religious: {
      name: 'Saint Jane Frances de Chantal',
      titles: ['Religious'],
    },

    januarius_i_of_benevento_bishop: {
      name: 'Saint Januarius',
      titles: ['Bishop', 'Martyr'],
    },

    jarlath_of_tuam_bishop: {
      name: 'Saint Jarlath',
      titles: ['Bishop'],
    },

    jerome_emiliani: {
      name: 'Saint Jerome Emiliani',
    },

    jerome_of_stridon_priest: {
      name: 'Saint Jerome',
      titles: ['Priest', 'Doctor of the Church'],
    },

    joachim_father_of_mary: {
      name: 'Saint Joachim',
      titles: ['Parents of the Blessed Virgin Mary'],
    },

    anne_mother_of_mary: {
      name: 'Saint Anne',
      titles: ['Parents of the Blessed Virgin Mary'],
    },

    joachim_he_kaizhi_martyr: {
      name: 'Saint Joachim He Kaizhi',
      titles: ['Martyr'],
    },

    joan_of_arc_virgin: {
      name: 'Saint Joan of Arc',
      titles: ['Virgin'],
    },

    joan_of_portugal_virgin: {
      name: 'Blessed Joan of Portugal',
      titles: ['Virgin'],
    },

    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: {
      name: 'Saint Joaquina of Saint Francis of Assisi de Vedruna',
      titles: ['Religious'],
    },

    john_apostle: {
      name: 'Saint John',
      titles: ['Apostle', 'Evangelist'],
    },

    john_baptist_de_la_salle_priest: {
      name: 'Saint John Baptist de la Salle',
      titles: ['Priest'],
    },

    john_berchmans_religious: {
      name: 'Saint John Berchmans',
      titles: ['Religious'],
    },

    john_beyzym_priest: {
      name: 'Blessed John Beyzym',
      titles: ['Priest'],
    },

    john_bosco_priest: {
      name: 'Saint John Bosco',
      titles: ['Priest'],
    },

    john_brenner_priest: {
      name: 'Blessed John Brenner',
      titles: ['Priest', 'Martyr'],
    },

    john_cassian_priest: {
      name: 'Saint John Cassian',
      titles: ['Priest'],
    },

    john_chrysostom_bishop: {
      name: 'Saint John Chrysostom',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    john_damascene_priest: {
      name: 'Saint John Damascene',
      titles: ['Priest', 'Doctor of the Church'],
    },

    john_de_brebeuf_priest: {
      name: 'Saint John de Brébeuf',
      titles: ['Priest', 'Martyr'],
    },

    isaac_jogues_priest: {
      name: 'Saint Isaac Jogues',
      titles: ['Priest', 'Martyr'],
    },

    john_de_britto_priest: {
      name: 'Saint John de Brito',
      titles: ['Priest', 'Martyr'],
    },

    john_eudes_priest: {
      name: 'Saint John Eudes',
      titles: ['Priest'],
    },

    john_fisher_bishop: {
      name: 'Saint John Fisher',
      titles: ['Bishop', 'Martyr'],
    },

    thomas_more_martyr: {
      name: 'Saint Thomas More',
      titles: ['Martyr'],
    },

    john_gabriel_perboyre_priest: {
      name: 'Saint John Gabriel Perboyre',
      titles: ['Priest', 'Martyr'],
    },

    john_henry_newman_priest: {
      name: 'Saint John Henry Newman',
      titles: ['Priest'],
    },

    john_i_pope: {
      name: 'Saint John I',
      titles: ['Pope', 'Martyr'],
    },

    john_jones_priest: {
      name: 'Saint John Jones',
      titles: ['Priest', 'Martyr'],
    },

    john_leonardi_priest: {
      name: 'Saint John Leonardi',
      titles: ['Priest'],
    },

    john_macias_religious: {
      name: 'Saint John Macías',
      titles: ['Religious'],
    },

    john_martin_moye_priest: {
      name: 'Blessed John Martin Moye',
      titles: ['Priest'],
    },

    john_mary_vianney_priest: {
      name: 'Saint John Vianney',
      titles: ['Priest'],
    },

    john_nepomucene_neumann_bishop: {
      name: 'Saint John Neumann',
      titles: ['Bishop'],
    },

    john_nepomucene_priest: {
      name: 'Saint John Nepomucene',
      titles: ['Priest', 'Martyr'],
    },

    john_of_avila_priest: {
      name: 'Saint John of Ávila',
      titles: ['Priest', 'Doctor of the Church'],
    },

    john_of_capistrano_priest: {
      name: 'Saint John of Capistrano',
      titles: ['Priest'],
    },

    john_of_dukla_priest: {
      name: 'Saint John of Dukla',
      titles: ['Priest'],
    },

    john_of_god_duoarte_cidade_religious: {
      name: 'Saint John of God',
      titles: ['Religious'],
    },

    john_of_kanty_priest: {
      name: 'Saint John of Kanty',
      titles: ['Priest'],
    },

    john_of_the_cross_priest: {
      name: 'Saint John of the Cross',
      titles: ['Priest', 'Doctor of the Church'],
    },

    john_of_triora_priest: {
      name: 'Saint John of Triora',
      titles: ['Priest', 'Martyr'],
    },

    john_ogilvie_priest: {
      name: 'Saint John Ogilvie',
      titles: ['Priest', 'Martyr'],
    },

    john_paul_ii_pope: {
      name: 'Saint John Paul II',
      titles: ['Pope'],
    },

    john_roberts_priest: {
      name: 'Saint John Roberts',
      titles: ['Priest', 'Martyr'],
    },

    john_sarkander_priest: {
      name: 'Saint John Sarkander',
      titles: ['Priest', 'Martyr'],
    },

    john_scheffler_bishop: {
      name: 'Blessed John Scheffler',
      titles: ['Bishop', 'Martyr'],
    },

    john_xxiii_pope: {
      name: 'Saint John XXIII',
      titles: ['Pope'],
    },

    josaphat_kuntsevych_bishop: {
      name: 'Saint Josaphat',
      titles: ['Bishop', 'Martyr'],
    },

    jose_maria_de_yermo_y_parres_priest: {
      name: 'Saint José Maria de Yermo y Parres',
      titles: ['Priest'],
    },

    josemaria_escriva_de_balaguer_priest: {
      name: 'Saint Josemaría Escrivá de Balaguer',
      titles: ['Priest'],
    },

    joseph_bilczewski_bishop: {
      name: 'Saint Joseph Bilczewski',
      titles: ['Bishop'],
    },

    joseph_de_anchieta_priest: {
      name: 'Saint Joseph de Anchieta',
      titles: ['Priest'],
    },

    joseph_freinademetz_priest: {
      name: 'Saint Joseph Freinademetz',
      titles: ['Priest'],
    },

    joseph_of_calasanz_priest: {
      name: 'Saint Joseph of Calasanz',
      titles: ['Priest'],
    },

    joseph_sebastian_pelczar_bishop: {
      name: 'Saint Joseph Sebastian Pelczar',
      titles: ['Bishop'],
    },

    joseph_the_worker: {
      name: 'Saint Joseph the Worker',
    },

    joseph_vaz_priest: {
      name: 'Saint Joseph Vaz',
      titles: ['Priest'],
    },

    joseph_yuan_gengyin_priest: {
      name: 'Saint Joseph Yuan Gengyin',
      titles: ['Priest', 'Martyr'],
    },

    joseph_zhang_dapeng_martyr: {
      name: 'Saint Joseph Zhang Dapeng',
      titles: ['Martyr'],
    },

    josephine_bakhita_virgin: {
      name: 'Saint Josephine Bakhita',
      titles: ['Virgin'],
    },

    juan_diego_cuauhtlatoatzin: {
      name: 'Saint Juan Diego Cuauhtlatoatzin',
    },

    juliana_of_liege_virgin: {
      name: 'Saint Juliana of Liège',
      titles: ['Virgin'],
    },

    julie_billiart_virgin: {
      name: 'Saint Julie Billiart',
      titles: ['Virgin'],
    },

    junipero_serra_priest: {
      name: 'Saint Junípero Serra',
      titles: ['Priest'],
    },

    justin_martyr: {
      name: 'Saint Justin',
      titles: ['Martyr'],
    },

    kateri_tekakwitha_virgin: {
      name: 'Saint Kateri Tekakwitha',
      titles: ['Virgin'],
    },

    katharine_drexel_virgin: {
      name: 'Saint Katharine Drexel',
      titles: ['Virgin'],
    },

    kentigern_of_scotland_bishop: {
      name: 'Saint Kentigern',
      titles: ['Bishop'],
    },

    kevin_of_glendalough_abbot: {
      name: 'Saint Kevin',
      titles: ['Abbot'],
    },

    kieran_of_saigir_bishop: {
      name: 'Saint Kieran',
      titles: ['Bishop'],
    },

    kilian_of_wurzburg_bishop: {
      name: 'Saint Kilian',
      titles: ['Bishop', 'Martyr'],
    },

    kinga_of_poland_virgin: {
      name: 'Saint Kinga',
      titles: ['Virgin'],
    },

    kuriakose_elias_of_the_holy_family_chavara_priest: {
      name: 'Saint Kuriakose Elias of the Holy Family Chavara',
      titles: ['Priest'],
    },

    ladislas_of_gielniow_priest: {
      name: 'Blessed Ladislas of Gielniow',
      titles: ['Priest'],
    },

    ladislaus_batthyany_strattmann: {
      name: 'Blessed Ladislaus Batthyány-Strattmann',
    },

    ladislaus_i_of_hungary: {
      name: 'Saint Ladislaus',
    },

    lambert_of_maastricht_bishop: {
      name: 'Saint Lambert of Maastricht',
      titles: ['Bishop', 'Martyr'],
    },

    laserian_of_leighlin_bishop: {
      name: 'Saint Laserian',
      titles: ['Bishop'],
    },

    laura_vicuna_virgin: {
      name: 'Blessed Laura Vicuña',
      titles: ['Virgin'],
    },

    laurence_otoole_bishop: {
      name: 'Saint Laurence O’Toole',
      titles: ['Bishop'],
    },

    laurence_wang_bing_martyr: {
      name: 'Saint Laurence Wang Bing',
      titles: ['Martyr'],
    },

    lawrence_bai_xiaoman_martyr: {
      name: 'Saint Lawrence Bai Xiaoman',
      titles: ['Martyr'],
    },

    lawrence_of_brindisi_priest: {
      name: 'Saint Lawrence of Brindisi',
      titles: ['Priest', 'Doctor of the Church'],
    },

    lawrence_of_rome_deacon: {
      name: 'Saint Lawrence',
      titles: ['Deacon', 'Martyr'],
    },

    lawrence_ruiz_martyr: {
      name: 'Saint Lawrence Ruiz',
      titles: ['Martyr'],
    },

    leander_of_seville_bishop: {
      name: 'Saint Leander of Seville',
      titles: ['Bishop'],
    },

    lelia_of_killeely_virgin: {
      name: 'Saint Lelia',
      titles: ['Virgin'],
    },

    leo_i_the_great_pope: {
      name: 'Saint Leo the Great',
      titles: ['Pope', 'Doctor of the Church'],
    },

    leo_ignatius_mangin_priest: {
      name: 'Saint Leo Ignatius Mangin',
      titles: ['Priest', 'Martyr'],
    },

    leo_ix_pope: {
      name: 'Saint Leo IX',
      titles: ['Pope'],
    },

    leoba_of_tauberbischofsheim_abbess: {
      name: 'Saint Leoba',
      titles: ['Abbess'],
    },

    leonard_of_noblac_hermit: {
      name: 'Saint Leonard of Noblac',
      titles: ['Hermit'],
    },

    leonid_feodorov_priest: {
      name: 'Blessed Leonid Feodorov',
      titles: ['Priest', 'Martyr'],
    },

    leopold_iii_of_babenberg: {
      name: 'Saint Leopold III of Babenberg',
    },

    leopold_mandic_priest: {
      name: 'Saint Leopold Mandić',
      titles: ['Priest'],
    },

    louis_bertrand_priest: {
      name: 'Saint Louis Bertrand',
      titles: ['Priest'],
    },

    louis_grignion_de_montfort_priest: {
      name: 'Saint Louis Grignion de Montfort',
      titles: ['Priest'],
    },

    louis_ix_of_france: {
      name: 'Saint Louis',
    },

    louis_zephirin_moreau_bishop: {
      name: 'Blessed Louis-Zéphirin Moreau',
      titles: ['Bishop'],
    },

    lucius_of_chur_bishop: {
      name: 'Saint Lucius of Chur',
      titles: ['Bishop', 'Martyr'],
    },

    lucy_of_syracuse_virgin: {
      name: 'Saint Lucy',
      titles: ['Virgin', 'Martyr'],
    },

    lucy_yi_zhenmei_virgin: {
      name: 'Saint Lucy Yi Zhenmei',
      titles: ['Virgin', 'Martyr'],
    },

    ludger_of_munster_bishop: {
      name: 'Saint Ludger of Münster',
      titles: ['Bishop'],
    },

    ludmila_of_bohemia_martyr: {
      name: 'Saint Ludmila',
      titles: ['Martyr'],
    },

    luigi_orione_priest: {
      name: 'Saint Luigi Orione',
      titles: ['Priest'],
    },

    luke_evangelist: {
      name: 'Saint Luke',
      titles: ['Evangelist'],
    },

    lydia_of_philippi: {
      name: 'Saint Lydia of Philippi',
    },

    mac_nissi_of_connor_bishop: {
      name: 'Saint Mac Nissi',
      titles: ['Bishop'],
    },

    macartan_of_clogher_bishop: {
      name: 'Saint Macartan',
      titles: ['Bishop'],
    },

    maelruain_of_tallaght_bishop: {
      name: 'Saint Maelruain',
      titles: ['Bishop', 'Abbot'],
    },

    magnus_erlendsson_martyr: {
      name: 'Saint Magnus',
      titles: ['Martyr'],
    },

    malachy_of_armagh_bishop: {
      name: 'Saint Malachy',
      titles: ['Bishop'],
    },

    marcel_callo_martyr: {
      name: 'Blessed Marcel Callo',
      titles: ['Martyr'],
    },

    marcelina_darowska_religious: {
      name: 'Blessed Marcelina Darowska',
      titles: ['Religious'],
    },

    marcellin_champagnat_priest: {
      name: 'Saint Marcellin Champagnat',
      titles: ['Priest'],
    },

    marcellinus_of_rome_martyr: {
      name: 'Saint Marcellinus',
      titles: ['Martyr'],
    },

    peter_the_exorcist_martyr: {
      name: 'Saint Peter',
      titles: ['Martyr'],
    },

    margaret_clitherow_virgin_martyr: {
      name: 'Saint Margaret Clitherow',
      titles: ['Martyr'],
    },

    anne_line_virgin_martyr: {
      name: 'Saint Anne Line',
      titles: ['Martyr'],
    },

    margaret_ward_virgin_martyr: {
      name: 'Saint Margaret Ward',
      titles: ['Martyr'],
    },

    margaret_mary_alacoque_virgin: {
      name: 'Saint Margaret Mary Alacoque',
      titles: ['Virgin'],
    },

    margaret_of_antioch_virgin: {
      name: 'Saint Margaret of Antioch',
      titles: ['Virgin', 'Martyr'],
    },

    margaret_of_hungary_religious: {
      name: 'Saint Margaret of Hungary',
      titles: ['Religious'],
    },

    margaret_of_scotland: {
      name: 'Saint Margaret of Scotland',
    },

    marguerite_bourgeoys_virgin: {
      name: 'Saint Marguerite Bourgeoys',
      titles: ['Virgin'],
    },

    marguerite_dyouville_religious: {
      name: 'Saint Marguerite d’Youville',
      titles: ['Religious'],
    },

    maria_goretti_virgin: {
      name: 'Saint Maria Goretti',
      titles: ['Virgin', 'Martyr'],
    },

    maria_guadalupe_garcia_zavala_virgin: {
      name: 'Saint María Guadalupe García Zavala',
      titles: ['Virgin'],
    },

    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: {
      name: 'Saint María Micaela of the Blessed Sacrament Desmaisières',
      titles: ['Virgin'],
    },

    mariana_of_jesus_de_paredes_virgin: {
      name: 'Saint Mariana of Jesus de Paredes',
      titles: ['Virgin'],
    },

    marianne_cope_virgin: {
      name: 'Saint Marianne Cope',
      titles: ['Virgin'],
    },

    marie_anne_blondin_virgin: {
      name: 'Blessed Marie-Anne Blondin',
      titles: ['Virgin'],
    },

    marie_leonie_paradis_virgin: {
      name: 'Blessed Marie-Léonie Paradis',
      titles: ['Virgin'],
    },

    marie_of_the_incarnation_guyart_religious: {
      name: 'Saint Marie of the Incarnation Guyart',
      titles: ['Religious'],
    },

    marie_rose_durocher_virgin: {
      name: 'Blessed Marie Rose Durocher',
      titles: ['Virgin'],
    },

    mark_evangelist: {
      name: 'Saint Mark',
      titles: ['Evangelist'],
    },

    marko_krizin_priest: {
      name: 'Saint Marko Krizin',
      titles: ['Priest', 'Martyr'],
    },

    stephen_pongracz_priest: {
      name: 'Saint Stephen Pongrácz',
      titles: ['Priest', 'Martyr'],
    },

    maron_of_syria_hermit: {
      name: 'Saint Maroun',
      titles: ['Hermit'],
    },

    martha_of_bethany: {
      name: 'Saint Martha',
    },

    mary_of_bethany: {
      name: 'Saint Mary',
    },

    lazarus_of_bethany: {
      name: 'Saint Lazarus',
    },

    martin_de_porres_religious: {
      name: 'Saint Martin de Porres',
      titles: ['Religious'],
    },

    martin_i_pope: {
      name: 'Saint Martin I',
      titles: ['Pope', 'Martyr'],
    },

    martin_of_tours_bishop: {
      name: 'Saint Martin of Tours',
      titles: ['Bishop'],
    },

    martin_wu_xuesheng_martyr: {
      name: 'Saint Martin Wu Xuesheng',
      titles: ['Martyr'],
    },

    mary_adeodata_pisani_virgin: {
      name: 'Blessed Mary Adeodata Pisani',
      titles: ['Virgin'],
    },

    mary_angela_truszkowska_virgin: {
      name: 'Blessed Mary Angela Truszkowska',
      titles: ['Virgin'],
    },

    mary_assunta_pallotta_virgin: {
      name: 'Blessed Mary Assunta Pallotta',
      titles: ['Virgin'],
    },

    mary_magdalene: {
      name: 'Saint Mary Magdalene',
    },

    mary_magdalene_de_pazzi_virgin: {
      name: 'Saint Mary Magdalene de’ Pazzi',
      titles: ['Virgin'],
    },

    mary_mother_of_the_church: {
      name: 'Blessed Virgin Mary',
      titles: ['Mother of the Church'],
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      name: 'Blessed Mary of Jesus Crucified Petković',
      titles: ['Virgin'],
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      name: 'Saint Mary of Jesus in the Blessed Sacrament Venegas de la Torre',
      titles: ['Virgin'],
    },

    mary_of_jesus_the_good_shepherd_siedliska_virgin: {
      name: 'Blessed Mary of Jesus the Good Shepherd Siedliska',
      titles: ['Virgin'],
    },

    mary_of_the_cross_mackillop_virgin: {
      name: 'Saint Mary of the Cross MacKillop',
      titles: ['Virgin'],
    },

    mary_soledad_torres_acosta_virgin: {
      name: 'Saint Mary Soledad Torres y Acosta',
      titles: ['Virgin'],
    },

    mary_stella_of_the_blessed_sacrament_mardosewicz_virgin: {
      name: 'Blessed Mary Stella of the Blessed Sacrament Mardosewicz',
      titles: ['Virgin', 'Martyr'],
    },

    mary_theresa_chiramel_mankidiyan_virgin: {
      name: 'Saint Mary Theresa Chiramel Mankidiyan',
      titles: ['Virgin'],
    },

    mary_theresa_ledochowska_virgin: {
      name: 'Blessed Mary Theresa Ledóchowska',
      titles: ['Virgin'],
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      name: 'Saint Mary Ursula of Jesus Ledóchowska',
      titles: ['Virgin'],
    },

    marydolores_rodriguez_sopena_virgin: {
      name: 'Blessed Mary Dolores Rodríguez Sopeña',
      titles: ['Virgin'],
    },

    matilda_of_ringelheim: {
      name: 'Saint Matilda',
    },

    matthew_apostle: {
      name: 'Saint Matthew',
      titles: ['Apostle', 'Evangelist'],
    },

    matthias_apostle: {
      name: 'Saint Matthias',
      titles: ['Apostle'],
    },

    maurice_of_agaunum_martyr: {
      name: 'Saint Maurice',
      titles: ['Martyr'],
    },

    maurice_tornay_priest: {
      name: 'Blessed Maurice Tornay',
      titles: ['Priest', 'Martyr'],
    },

    maurus_of_pecs_bishop: {
      name: 'Saint Maurus',
      titles: ['Bishop'],
    },

    maximilian_kolbe_priest: {
      name: 'Saint Maximilian Kolbe',
      titles: ['Priest', 'Martyr'],
    },

    meinrad_of_einsiedeln_martyr: {
      name: 'Saint Meinrad of Einsiedeln',
      titles: ['Martyr'],
    },

    mel_of_ardagh_bishop: {
      name: 'Saint Mel',
      titles: ['Bishop'],
    },

    melchior_grodziecki_priest: {
      name: 'Saint Melchior Grodziecki',
      titles: ['Priest', 'Martyr'],
    },

    michael_gabriel_and_raphael_archangels: {
      name: 'Saints Michael',
      titles: ['Gabriel and Raphael, Archangels'],
    },

    michael_kozal_bishop: {
      name: 'Blessed Michael Kozal',
      titles: ['Bishop', 'Martyr'],
    },

    miguel_agustin_pro_priest: {
      name: 'Blessed Miguel Agustin Pro',
      titles: ['Priest', 'Martyr'],
    },

    miguel_febres_cordero_religious: {
      name: 'Saint Miguel Febres Cordero',
      titles: ['Religious'],
    },

    monica_of_hippo: {
      name: 'Saint Monica',
    },

    moninne_of_killeavy_virgin: {
      name: 'Saint Moninne',
      titles: ['Virgin'],
    },

    most_holy_name_of_jesus: {
      name: 'Most Holy Name of Jesus',
    },

    most_holy_name_of_mary: {
      name: 'Most Holy Name of Mary',
    },

    munchin_of_limerick_bishop: {
      name: 'Saint Munchin',
      titles: ['Bishop'],
    },

    muredach_of_killala_bishop: {
      name: 'Saint Muredach',
      titles: ['Bishop'],
    },

    mutien_marie_wiaux_religious: {
      name: 'Saint Mutien-Marie Wiaux',
      titles: ['Religious'],
    },

    nativity_of_mary: {
      name: 'Nativity of the Blessed Virgin Mary',
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      name: 'Saint Nazaria Ignacia of Saint Teresa of Jesus March Mesa',
      titles: ['Virgin'],
    },

    nereus_of_terracina_martyr: {
      name: 'Saint Nereus',
      titles: ['Martyr'],
    },

    achilleus_of_terracina_martyr: {
      name: 'Saint Achilleus',
      titles: ['Martyr'],
    },

    nicholas_of_flue_hermit: {
      name: 'Saint Nicholas of Flüe',
      titles: ['Hermit'],
    },

    nicholas_of_myra_bishop: {
      name: 'Saint Nicholas',
      titles: ['Bishop'],
    },

    nicholas_steno_bishop: {
      name: 'Blessed Nicholas Steno',
      titles: ['Bishop'],
    },

    nicholas_tavelic_priest: {
      name: 'Saint Nicholas Tavelić',
      titles: ['Priest', 'Martyr'],
    },

    ninian_of_whithorn_bishop: {
      name: 'Saint Ninian',
      titles: ['Bishop'],
    },

    norbert_of_xanten_bishop: {
      name: 'Saint Norbert',
      titles: ['Bishop'],
    },

    nuno_of_saint_mary_pereira_religious: {
      name: 'Saint Nuno of Saint Mary Pereira',
      titles: ['Religious'],
    },

    nykyta_budka_bishop: {
      name: 'Blessed Nykyta Budka',
      titles: ['Bishop', 'Martyr'],
    },

    vasyl_velychkovsky_bishop: {
      name: 'Blessed Vasyl Velychkovsky',
      titles: ['Bishop', 'Martyr'],
    },

    odile_of_alsace_abbess: {
      name: 'Saint Odile of Alsace',
      titles: ['Abbess'],
    },

    odoric_of_pordenone_priest: {
      name: 'Blessed Odoric of Pordenone',
      titles: ['Priest'],
    },

    olaf_ii_of_norway_martyr: {
      name: 'Saint Olaf II',
      titles: ['Martyr'],
    },

    oleksiy_zarytskyi_priest: {
      name: 'Blessed Oleksiy Zarytskyi',
      titles: ['Priest', 'Martyr'],
    },

    olga_of_kiev: {
      name: 'Saint Olga',
    },

    oliver_plunket_bishop: {
      name: 'Saint Oliver Plunket',
      titles: ['Bishop', 'Martyr'],
    },

    otteran_of_iona_monk: {
      name: 'Saint Otteran',
      titles: ['Monk'],
    },

    otto_of_bamberg_bishop: {
      name: 'Saint Otto of Bamberg',
      titles: ['Bishop'],
    },

    our_lady_help_of_christians: {
      name: 'Our Lady',
      titles: ['Help of Christians'],
    },

    our_lady_mediatrix_of_all_grace: {
      name: 'Our Lady',
      titles: ['Mediatrix of All Grace'],
    },

    our_lady_mother_of_christian_unity: {
      name: 'Our Lady',
      titles: ['Mother of Christian Unity'],
    },

    our_lady_mother_of_divine_providence: {
      name: 'Our Lady, Mother of Divine Providence',
    },

    our_lady_of_aparecida: {
      name: 'Our Lady of Aparecida',
    },

    our_lady_of_bethlehem: {
      name: 'Our Lady of Bethlehem',
    },

    our_lady_of_china: {
      name: 'Our Lady of China',
    },

    our_lady_of_czestochowa: {
      name: 'Our Lady of Częstochowa',
    },

    our_lady_of_fatima: {
      name: 'Our Lady of Fatima',
    },

    our_lady_of_good_counsel: {
      name: 'Our Lady of Good Counsel',
    },

    our_lady_of_guadalupe: {
      name: 'Our Lady of Guadalupe',
    },

    our_lady_of_hungary: {
      name: 'Our Lady of Hungary',
    },

    our_lady_of_itati: {
      name: 'Our Lady of Itatí',
    },

    our_lady_of_knock: {
      name: 'Our Lady of Knock',
    },

    our_lady_of_lanka: {
      name: 'Our Lady of Lanka',
    },

    our_lady_of_lebanon: {
      name: 'Our Lady of Lebanon',
    },

    our_lady_of_loreto: {
      name: 'Our Lady of Loreto',
    },

    our_lady_of_lourdes: {
      name: 'Our Lady of Lourdes',
    },

    our_lady_of_lujan: {
      name: 'Our Lady of Luján',
    },

    our_lady_of_madhu: {
      name: 'Our Lady of Madhu',
    },

    our_lady_of_marija_bistrica: {
      name: 'Our Lady of Marija Bistrica',
    },

    our_lady_of_mercy: {
      name: 'Our Lady of Mercy',
    },

    our_lady_of_mount_carmel: {
      name: 'Our Lady of Mount Carmel',
    },

    our_lady_of_mount_carmel_mother_and_queen_of_chile: {
      name: 'Our Lady of Mount Carmel',
      titles: ['Mother and Queen of Chile'],
    },

    our_lady_of_perpetual_help: {
      name: 'Our Lady of Perpetual Help',
    },

    our_lady_of_refuge: {
      name: 'Our Lady of Refuge',
    },

    our_lady_of_sorrows: {
      name: 'Our Lady of Sorrows',
    },

    our_lady_of_the_discovery_of_the_hidden_christians: {
      name: 'Our Lady of the Discovery of the Hidden Christians',
    },

    our_lady_of_the_gate_of_dawn: {
      name: 'Our Lady of the Gate of Dawn',
    },

    our_lady_of_the_pillar: {
      name: 'Our Lady of the Pillar',
    },

    our_lady_of_the_rosary: {
      name: 'Our Lady of the Rosary',
    },

    our_lady_of_the_valley: {
      name: 'Our Lady of the Valley',
    },

    our_lady_of_vladimir: {
      name: 'Our Lady of Vladimir',
    },

    our_lady_of_walsingham: {
      name: 'Our Lady of Walsingham',
    },

    our_lady_queen_of_peace: {
      name: 'Our Lady of Peace',
    },

    our_lady_queen_of_poland: {
      name: 'Our Lady',
      titles: ['Queen of Poland'],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      name: 'Our Lord Jesus Christ',
      titles: ['the Eternal High Priest'],
    },

    our_lord_of_miracles: {
      name: 'Our Lord of Miracles',
    },

    pancras_of_rome_martyr: {
      name: 'Saint Pancras',
      titles: ['Martyr'],
    },

    pantaleon_of_nicomedia_martyr: {
      name: 'Saint Pantaleon of Nicomedia',
      titles: ['Martyr'],
    },

    paschal_baylon_religious: {
      name: 'Saint Paschal Baylón',
      titles: ['Religious'],
    },

    passion_of_saint_john_the_baptist: {
      name: 'Passion of Saint John the Baptist',
    },

    patrick_of_ireland_bishop: {
      name: 'Saint Patrick',
      titles: ['Bishop'],
    },

    paul_chen_changpin_martyr: {
      name: 'Saint Paul Chen Changpin',
      titles: ['Martyr'],
    },

    paul_liu_hanzuo_priest: {
      name: 'Saint Paul Liu Hanzuo',
      titles: ['Priest', 'Martyr'],
    },

    paul_miki_martyr: {
      name: 'Saint Paul Miki',
      titles: ['Martyr'],
    },

    paul_of_the_cross_priest: {
      name: 'Saint Paul of the Cross',
      titles: ['Priest'],
    },

    paul_of_thebes_hermit: {
      name: 'Blessed Paul of Thebes',
      titles: ['Hermit'],
    },

    paul_vi_pope: {
      name: 'Saint Paul VI',
      titles: ['Pope'],
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      name: 'Saint Paulina of the Agonizing Heart of Jesus Visintainer',
      titles: ['Virgin'],
    },

    paulinus_of_nola_bishop: {
      name: 'Saint Paulinus of Nola',
      titles: ['Bishop'],
    },

    paulinus_of_trier_bishop: {
      name: 'Saint Paulinus of Trier',
      titles: ['Bishop'],
    },

    paulinus_of_york_bishop: {
      name: 'Saint Paulinus of York',
      titles: ['Bishop'],
    },

    pavel_peter_gojdic_bishop: {
      name: 'Blessed Pavel Peter Gojdič',
      titles: ['Bishop', 'Martyr'],
    },

    pedro_calungsod_martyr: {
      name: 'Saint Pedro Calungsod',
      titles: ['Martyr'],
    },

    pelagius_of_cordoba_martyr: {
      name: 'Saint Pelagius of Córdoba',
      titles: ['Martyr'],
    },

    perpetua_of_carthage_martyr: {
      name: 'Saint Perpetua',
      titles: ['Martyr'],
    },

    felicity_of_carthage_martyr: {
      name: 'Saint Felicity',
      titles: ['Martyr'],
    },

    peter_baptist_blasquez_martyr: {
      name: 'Saints Peter Baptist Blásquez',
      titles: ['Martyr'],
    },

    peter_canisius_priest: {
      name: 'Saint Peter Canisius',
      titles: ['Priest', 'Doctor of the Church'],
    },

    peter_chanel_priest: {
      name: 'Saint Peter Chanel',
      titles: ['Priest', 'Martyr'],
    },

    peter_chrysologus_bishop: {
      name: 'Saint Peter Chrysologus',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    peter_claver_priest: {
      name: 'Saint Peter Claver',
      titles: ['Priest'],
    },

    peter_damian_bishop: {
      name: 'Saint Peter Damian',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    peter_de_zuniga_priest: {
      name: 'Blessed Peter de Zúñiga',
      titles: ['Priest', 'Martyr'],
    },

    louis_flores_priest: {
      name: 'Blessed Louis Flores',
      titles: ['Priest', 'Martyr'],
    },

    peter_julian_eymard_priest: {
      name: 'Saint Peter Julian Eymard',
      titles: ['Priest'],
    },

    peter_kibe_priest: {
      name: 'Blessed Peter Kibe',
      titles: ['Priest', 'Martyr'],
    },

    peter_liu_wenyuan_martyr: {
      name: 'Saint Peter Liu Wenyuan',
      titles: ['Martyr'],
    },

    peter_of_alcantara_priest: {
      name: 'Saint Peter of Alcántara',
      titles: ['Priest'],
    },

    peter_sanz_bishop: {
      name: 'Saint Peter Sanz',
      titles: ['Bishop', 'Martyr'],
    },

    peter_to_rot_martyr: {
      name: 'Blessed Peter To Rot',
      titles: ['Martyr'],
    },

    peter_wu_guosheng_martyr: {
      name: 'Saint Peter Wu Guosheng',
      titles: ['Martyr'],
    },

    philip_apostle: {
      name: 'Saint Philip',
      titles: ['Apostle'],
    },

    philip_evans_priest: {
      name: 'Saint Philip Evans',
      titles: ['Priest', 'Martyr'],
    },

    john_lloyd_priest: {
      name: 'Saint John Lloyd',
      titles: ['Priest', 'Martyr'],
    },

    philip_neri_priest: {
      name: 'Saint Philip Neri',
      titles: ['Priest'],
    },

    philip_of_jesus_de_las_casas_martyr: {
      name: 'Saint Philip of Jesus de las Casas',
      titles: ['Martyr'],
    },

    pirmin_of_hornbach_abbot: {
      name: 'Saint Pirmin',
      titles: ['Abbot'],
    },

    pius_ix_pope: {
      name: 'Blessed Pius IX',
      titles: ['Pope'],
    },

    pius_of_pietrelcina_priest: {
      name: 'Saint Pius of Pietrelcina',
      titles: ['Priest'],
    },

    pius_v_pope: {
      name: 'Saint Pius V',
      titles: ['Pope'],
    },

    pius_x_pope: {
      name: 'Saint Pius X',
      titles: ['Pope'],
    },

    polycarp_of_smyrna_bishop: {
      name: 'Saint Polycarp',
      titles: ['Bishop', 'Martyr'],
    },

    pontian_i_pope: {
      name: 'Saint Pontian',
      titles: ['Pope', 'Martyr'],
    },

    hippolytus_of_rome_priest: {
      name: 'Saint Hippolytus',
      titles: ['Priest', 'Martyr'],
    },

    pothinus_of_lyon_bishop: {
      name: 'Saint Pothinus',
      titles: ['Bishop', 'Martyr'],
    },

    blandina_of_lyon_virgin: {
      name: 'Saint Blandina',
      titles: ['Virgin', 'Martyr'],
    },

    presentation_of_mary: {
      name: 'Presentation of the Blessed Virgin Mary',
    },

    procopius_of_sazava_abbot: {
      name: 'Saint Procopius of Sázava',
      titles: ['Abbot'],
    },

    publius_of_malta_bishop: {
      name: 'Saint Publius',
      titles: ['Bishop'],
    },

    queenship_of_mary: {
      name: 'Queenship of the Blessed Virgin Mary',
    },

    quirinus_of_sescia_bishop: {
      name: 'Saint Quirinus of Sescia',
      titles: ['Bishop', 'Martyr'],
    },

    rabanus_maurus_bishop: {
      name: 'Saint Rabanus Maurus',
      titles: ['Bishop'],
    },

    radim_of_gniezno_bishop: {
      name: 'Saint Radim',
      titles: ['Bishop'],
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      name: 'Saint Rafqa Pietra Choboq Ar-Rayès',
      titles: ['Virgin'],
    },

    raphael_chylinski_priest: {
      name: 'Blessed Raphael Chyliński',
      titles: ['Priest'],
    },

    raphael_guizar_y_valencia_bishop: {
      name: 'Saint Raphael Guízar y Valencia',
      titles: ['Bishop'],
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      name: 'Saint Raphael of Saint Joseph Kalinowski',
      titles: ['Priest'],
    },

    raymond_of_penyafort_priest: {
      name: 'Saint Raymond of Penyafort',
      titles: ['Priest'],
    },

    remigius_of_reims_bishop: {
      name: 'Saint Remigius',
      titles: ['Bishop'],
    },

    richard_gwyn_martyr: {
      name: 'Saint Richard Gwyn',
      titles: ['Martyr'],
    },

    richard_of_chichester_bishop: {
      name: 'Saint Richard of Chichester',
      titles: ['Bishop'],
    },

    rita_of_cascia_religious: {
      name: 'Saint Rita of Cascia',
      titles: ['Religious'],
    },

    robert_bellarmine_bishop: {
      name: 'Saint Robert Bellarmine',
      titles: ['Bishop', 'Doctor of the Church'],
    },

    roch_gonzalez_priest: {
      name: 'Saint Roch González',
      titles: ['Priest', 'Martyr'],
    },

    alphonsus_rodriguez_priest: {
      name: 'Saint Alphonsus Rodríguez',
      titles: ['Priest', 'Martyr'],
    },

    john_del_castillo_priest: {
      name: 'Saint Roch González',
      titles: ['Priest', 'Martyr'],
    },

    roch_of_montpellier: {
      name: 'Saint Roch',
    },

    romuald_of_ravenna_abbot: {
      name: 'Saint Romuald',
      titles: ['Abbot'],
    },

    rose_of_lima_virgin: {
      name: 'Saint Rose of Lima',
      titles: ['Virgin'],
    },

    rose_philippine_duchesne_virgin: {
      name: 'Saint Rose Philippine Duchesne',
      titles: ['Virgin'],
    },

    rupert_of_salzburg_and_virgilius_of_salzburg_bishops: {
      name: 'Saints Rupert and Virgilius of Salzburg',
      titles: ['Bishops'],
    },

    salomea_of_poland_religious: {
      name: 'Blessed Salomea of Poland',
      titles: ['Religious'],
    },

    sancha_of_portugal_and_mafalda_of_portugal_virgins: {
      name: 'Blessed Sancha and Mafalda',
      titles: ['Virgins'],
    },

    sara_salkahazi_virgin: {
      name: 'Blessed Sára Salkaházi',
      titles: ['Virgin', 'Martyr'],
    },

    scholastica_of_nursia_virgin: {
      name: 'Saint Scholastica',
      titles: ['Virgin'],
    },

    sebastian_de_aparicio_religious: {
      name: 'Blessed Sebastian de Aparicio',
      titles: ['Religious'],
    },

    sebastian_of_milan_martyr: {
      name: 'Saint Sebastian',
      titles: ['Martyr'],
    },

    senan_of_inis_cathaigh_bishop: {
      name: 'Saint Senan',
      titles: ['Bishop'],
    },

    seven_holy_founders_of_the_servite_order: {
      name: 'Seven Holy Founders of the Servite Order',
      count: 7,
    },

    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary: {
      name: 'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
      count: 7,
    },

    severinus_of_noricum_monk: {
      name: 'Saint Severinus of Noricum',
      titles: ['Monk'],
    },

    sharbel_makhluf_priest: {
      name: 'Saint Sharbel Makhlūf',
      titles: ['Priest'],
    },

    shipwreck_of_saint_paul_apostle: {
      name: 'Shipwreck of Saint Paul',
      titles: ['Apostle'],
    },

    sigismund_of_burgundy_martyr: {
      name: 'Saint Sigismund',
      titles: ['Martyr'],
    },

    sigmund_felix_felinski_bishop: {
      name: 'Saint Sigmund Felix Feliński',
      titles: ['Bishop'],
    },

    simon_apostle: {
      name: 'Saint Simon',
      titles: ['Apostle'],
    },

    jude_apostle: {
      name: 'Saint Jude',
      titles: ['Apostle'],
    },

    simon_of_lipnica_priest: {
      name: 'Saint Simon of Lipnica',
      titles: ['Priest'],
    },

    six_welsh_martyrs: {
      name: 'Six Welsh Martyrs',
      hideTitles: true,
      count: 6,
    },

    sixtus_ii_pope: {
      name: 'Saint Sixtus II',
      titles: ['Pope', 'Martyr'],
    },

    spyridon_of_trimythous_bishop: {
      name: 'Saint Spyridon',
      titles: ['Bishop'],
    },

    stanislaus_kazimierczyk_priest: {
      name: 'Saint Stanislaus Kazimierczyk',
      titles: ['Priest'],
    },

    stanislaus_kostka_religious: {
      name: 'Saint Stanislaus Kostka',
      titles: ['Religious'],
    },

    stanislaus_of_szczepanow_bishop: {
      name: 'Saint Stanislaus',
      titles: ['Bishop', 'Martyr'],
    },

    stephen_i_of_hungary: {
      name: 'Saint Stephen of Hungary',
    },

    stephen_the_first_martyr: {
      name: 'Saint Stephen',
      titles: ['the First Martyr'],
    },

    sunday_of_the_word_of_god: {
      name: 'Sunday of the Word of God',
    },

    sunniva_of_norway_virgin: {
      name: 'Saint Sunniva',
      titles: ['Virgin', 'Martyr'],
    },

    swithun_of_winchester_bishop: {
      name: 'Saint Swithun',
      titles: ['Bishop'],
    },

    sylvester_i_pope: {
      name: 'Saint Sylvester I',
      titles: ['Pope'],
    },

    szilard_bogdanffy_bishop: {
      name: 'Blessed Szilárd Bogdánffy',
      titles: ['Bishop', 'Martyr'],
    },

    teilo_of_llandaff_bishop: {
      name: 'Saint Teilo',
      titles: ['Bishop'],
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      name: 'Saint Teresa Benedicta of the Cross Stein',
      titles: ['Virgin', 'Martyr'],
    },

    teresa_of_calcutta_religious: {
      name: 'Saint Teresa of Calcutta',
      titles: ['Religious'],
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      name: 'Saint Teresa of Jesus Jornet Ibars',
      titles: ['Virgin'],
    },

    teresa_of_jesus_of_avila_virgin: {
      name: 'Saint Teresa of Jesus of Ávila',
      titles: ['Virgin', 'Doctor of the Church'],
    },

    teresa_of_jesus_of_los_andes_virgin: {
      name: 'Saint Teresa of Jesus of Los Andes',
      titles: ['Virgin'],
    },

    teresa_of_portugal_religious: {
      name: 'Blessed Teresa of Portugal',
      titles: ['Religious'],
    },

    theodore_of_canterbury_bishop: {
      name: 'Saint Theodore of Canterbury',
      titles: ['Bishop'],
    },

    theodore_romzha_bishop: {
      name: 'Blessed Theodore Romzha',
      titles: ['Bishop', 'Martyr'],
    },

    theodosius_of_the_caves_abbot: {
      name: 'Saint Theodosius of the Caves',
      titles: ['Abbot'],
    },

    theotonius_of_coimbra_priest: {
      name: 'Saint Theotonius of Coimbra',
      titles: ['Priest'],
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      name: 'Saint Thérèse of the Child Jesus and the Holy Face of Lisieux',
      titles: ['Virgin', 'Doctor of the Church'],
    },

    thomas_apostle: {
      name: 'Saint Thomas',
      titles: ['Apostle'],
    },

    thomas_aquinas_priest: {
      name: 'Saint Thomas Aquinas',
      titles: ['Priest', 'Doctor of the Church'],
    },

    thomas_becket_bishop: {
      name: 'Saint Thomas Becket',
      titles: ['Bishop', 'Martyr'],
    },

    thomas_hioji_rokuzayemon_nishi_priest: {
      name: 'Saint Thomas Hioji Rokuzayemon Nishi',
      titles: ['Priest', 'Martyr'],
    },

    thomas_of_villanova_bishop: {
      name: 'Saint Thomas of Villanova',
      titles: ['Bishop'],
    },

    thorfinn_of_hamar_bishop: {
      name: 'Saint Thorfinn',
      titles: ['Bishop'],
    },

    thorlac_of_iceland_bishop: {
      name: 'Saint Thorlac',
      titles: ['Bishop'],
    },

    timothy_of_ephesus_bishop: {
      name: 'Saint Timothy',
      titles: ['Bishop'],
    },

    titus_of_crete_bishop: {
      name: 'Saint Titus',
      titles: ['Bishop'],
    },

    translation_of_the_relics_of_saint_stephen_of_hungary: {
      name: 'Translation of the Relics of Saint Stephen of Hungary',
    },

    turibius_of_mogrovejo_bishop: {
      name: 'Saint Turibius of Mogrovejo',
      titles: ['Bishop'],
    },

    ulrich_of_augsburg_bishop: {
      name: 'Saint Ulrich of Augsburg',
      titles: ['Bishop'],
    },

    ursula_of_cologne_virgin: {
      name: 'Saint Ursula',
      titles: ['Virgin', 'Martyr'],
    },

    valentine_of_raetia_bishop: {
      name: 'Saint Valentine of Raetia',
      titles: ['Bishop'],
    },

    vincent_de_paul_priest: {
      name: 'Saint Vincent de Paul',
      titles: ['Priest'],
    },

    vincent_ferrer_priest: {
      name: 'Saint Vincent Ferrer',
      titles: ['Priest'],
    },

    vincent_kadlubek_bishop: {
      name: 'Blessed Vincent Kadłubek',
      titles: ['Bishop'],
    },

    vincent_lewoniuk_martyr: {
      name: 'Blessed Vincent Lewoniuk',
      titles: ['Martyr'],
    },

    vincent_of_saragossa_deacon: {
      name: 'Saint Vincent',
      titles: ['Deacon', 'Martyr'],
    },

    vincent_pallotti_priest: {
      name: 'Saint Vincent Pallotti',
      titles: ['Priest'],
    },

    virgilius_of_salzburg_bishop: {
      name: 'Saint Fergal',
      titles: ['Bishop', 'Missionary'],
    },

    visitation_of_mary: {
      name: 'Visitation of the Blessed Virgin Mary',
    },

    vitus_of_lucania_martyr: {
      name: 'Saint Vitus',
      titles: ['Martyr'],
    },

    vladimir_ghika_priest: {
      name: 'Blessed Vladimir Ghika',
      titles: ['Priest', 'Martyr'],
    },

    vladimir_i_the_great_of_kiev: {
      name: 'Saint Vladimir the Great',
    },

    waitangi_day: {
      name: 'Waitangi Day',
    },

    walpurga_of_heidenheim_abbess: {
      name: 'Saint Walpurga of Heidenheim',
      titles: ['Abbess'],
    },

    wenceslaus_i_of_bohemia_martyr: {
      name: 'Saint Wenceslaus',
      titles: ['Martyr'],
    },

    wendelin_of_trier_abbot: {
      name: 'Saint Wendelin',
      titles: ['Abbot'],
    },

    wilfrid_of_york_bishop: {
      name: 'Saint Wilfrid',
      titles: ['Bishop'],
    },

    william_apor_bishop: {
      name: 'Blessed William Apor',
      titles: ['Bishop', 'Martyr'],
    },

    willibald_of_eichstatt_bishop: {
      name: 'Saint Willibald',
      titles: ['Bishop'],
    },

    willibrord_of_utrecht_bishop: {
      name: 'Saint Willibrord',
      titles: ['Bishop'],
    },

    winefride_of_flintshire_virgin: {
      name: 'Saint Winefride',
      titles: ['Virgin'],
    },

    wladyslaw_bladzinski_priest: {
      name: 'Blessed Wladyslaw Błądziński',
      titles: ['Priest', 'Martyr'],
    },

    wolfgang_of_regensburg_bishop: {
      name: 'Saint Wolfgang of Regensburg',
      titles: ['Bishop'],
    },

    wulstan_of_worcester_bishop: {
      name: 'Saint Wulstan',
      titles: ['Bishop'],
    },

    yolanda_of_poland_religious: {
      name: 'Blessed Yolanda',
      titles: ['Religious'],
    },

    zdenka_cecilia_schelingova_virgin: {
      name: 'Blessed Zdenka Cecilia Schelingová',
      titles: ['Virgin', 'Martyr'],
    },

    zdislava_of_lemberk: {
      name: 'Saint Zdislava',
    },

    zepherin_namuncura: {
      name: 'Blessed Zepherin Namuncurá',
    },

    zoltan_lajos_meszlenyi_bishop: {
      name: 'Blessed Zoltán Lajos Meszlényi',
      titles: ['Bishop', 'Martyr'],
    },

    zygmunt_gorazdowski_priest: {
      name: 'Saint Zygmunt Gorazdowski',
      titles: ['Priest'],
    },

    companions_martyrs: {
      name: 'Companions',
      titles: ['Martyr'],
      count: 'many',
    },
  };
}
