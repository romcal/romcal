import {
  CanonizationLevel,
  Titles,
} from '@romcal/constants/martyrology-metadata';
import { MartyrologyCatalog } from '@romcal/types/martyrology';

export class Martyrology {
  static catalog: MartyrologyCatalog = {
    all_saints: {
      name: 'All Saints',
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
      name: 'Holy Family of Jesus, Mary and Joseph',
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
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph',
      titles: [Titles.SpouseOfTheBlessedVirginMary],
    },

    mary_mother_of_god: {
      name: 'Mary, the Holy Mother of God',
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

    peter_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter',
      titles: [Titles.Apostle],
    },

    paul_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul',
      titles: [Titles.Apostle],
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
      canonizationLevel: CanonizationLevel.Blessed,
      name: '205 Blessed Martyrs of Japan',
      count: 205,
    },

    adalbert_of_prague_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Adalbert',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 997,
    },

    adolph_kolping_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Adolph Kolping',
      titles: [Titles.Priest],
    },

    aelred_of_rievaulx_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aelred of Rievaulx',
      titles: [Titles.Abbot],
    },

    aengus_of_tallaght_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aengus',
      titles: [Titles.Bishop, Titles.Abbot],
    },

    agatha_of_sicily_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Agatha',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 251,
    },

    agnes_cao_guiying_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Agnes Cao Guiying',
      titles: [Titles.Martyr],
    },

    agnes_of_bohemia_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Agnes of Bohemia',
      titles: [Titles.Virgin],
    },

    agnes_of_rome_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Agnes',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    aidan_of_ferns_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aidan',
      titles: [Titles.Bishop],
    },

    aidan_of_lindisfarne_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aidan of Lindisfarne',
      titles: [Titles.Bishop, Titles.Missionary],
    },

    the_saints_of_lindisfarne: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'the Saints of Lindisfarne',
      count: 'many',
    },

    ailbe_of_emly_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ailbe',
      titles: [Titles.Bishop],
    },

    alban_of_britain_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alban',
      titles: [Titles.Martyr],
    },

    julius_of_caerleon_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Julius',
      titles: [Titles.Martyr],
    },

    aaron_of_caerleon_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aaron',
      titles: [Titles.Martyr],
    },

    alberic_crescitelli_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alberic Crescitelli',
      titles: [Titles.Priest, Titles.Martyr],
    },

    albert_chmielowski_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Albert Chmielowski',
      titles: [Titles.Religious],
    },

    albert_the_great_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Albert the Great',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1280,
    },

    albertina_berkenbrock_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Albertina Berkenbrock',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    alberto_hurtado_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alberto Hurtado',
      titles: [Titles.Priest],
    },

    all_saints_of_ireland: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'All Saints of Ireland',
      count: 'many',
    },

    all_saints_of_wales: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'All Saints of Wales',
      count: 'many',
    },

    all_souls: {
      name: 'Commemoration of All the Faithful Departed',
    },

    aloysius_gonzaga_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aloysius Gonzaga',
      titles: [Titles.Religious],
      dateOfDeath: 1591,
    },

    aloysius_stepinac_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Aloysius Stepinac',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    aloysius_versiglia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Aloysius Versiglia',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    callistus_caravario_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Callistus Caravario',
      titles: [Titles.Priest, Titles.Martyr],
    },

    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alphonsa of the Immaculate Conception Muttathupadathu',
      titles: [Titles.Virgin],
    },

    alphonsus_liguori_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alphonsus Liguori',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
    },

    amand_of_maastricht_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Amand',
      titles: [Titles.Bishop],
      dateOfDeath: 676,
      dateOfDeathIsApproximative: true,
    },

    ambrose_of_milan_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ambrose',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 397,
    },

    andre_bessette_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'André Bessette',
      titles: [Titles.Religious],
      dateOfDeath: 1937,
    },

    andre_grasset_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'André Grasset',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1792,
    },

    andrew_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew',
      titles: [Titles.Apostle],
    },

    andrew_bobola_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew Bobola',
      titles: [Titles.Priest, Titles.Martyr],
    },

    andrew_de_soveral_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew de Soveral',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ambrose_francis_ferro_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ambrose Francis Ferro',
      titles: [Titles.Priest, Titles.Martyr],
    },

    andrew_dung_lac_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew Dũng-Lạc',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    andrew_kim_tae_gon_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew Kim Tae-gŏn',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    paul_chong_ha_sang_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul Chŏng Ha-sang',
      titles: [Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    andrew_zorard_of_nitra_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Andrew Zorard',
      titles: [Titles.Hermit],
      dateOfDeath: 1009,
    },

    benedict_of_skalka_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Benedict',
      titles: [Titles.Hermit],
      dateOfDeath: 1012,
    },

    angela_merici_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Angela Merici',
      titles: [Titles.Virgin],
      dateOfDeath: 1540,
    },

    angela_salawa_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Angela Salawa',
      titles: [Titles.Virgin],
    },

    anno_of_cologne_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anno of Cologne',
      titles: [Titles.Bishop],
    },

    anselm_of_canterbury_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anselm',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1109,
    },

    ansgar_of_hamburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ansgar',
      titles: [Titles.Bishop],
      dateOfDeath: 865,
    },

    anthony_julian_nowowiejski_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Anthony Julian Nowowiejski',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    anthony_mary_claret_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony Mary Claret',
      titles: [Titles.Bishop],
      dateOfDeath: 1870,
    },

    anthony_of_egypt_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony',
      titles: [Titles.Abbot],
      dateOfDeath: 356,
    },

    anthony_of_padua_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony of Padua',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1231,
    },

    anthony_of_saint_anne_galvao_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony of Saint Anne Galvão',
      titles: [Titles.Priest],
    },

    anthony_of_the_caves_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony of the Caves',
      titles: [Titles.Monk],
    },

    anthony_zaccaria_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony Zaccaria',
      titles: [Titles.Priest],
      dateOfDeath: 1539,
    },

    apollinaris_of_ravenna_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Apollinaris',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 81,
    },

    asaph_of_wales_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Asaph',
      titles: [Titles.Bishop],
    },

    asicus_of_elphin_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Asicus',
      titles: [Titles.Bishop],
    },

    athanasius_of_alexandria_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Athanasius',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 373,
    },

    attracta_of_killaraght_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Attracta',
      titles: [Titles.Virgin],
    },

    augustine_kazotic_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Augustine Kažotić',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    augustine_of_canterbury_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Augustine of Canterbury',
      titles: [Titles.Bishop],
      dateOfDeath: 604,
    },

    augustine_of_hippo_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Augustine',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 430,
    },

    augustine_zhao_rong_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Augustine Zhao Rong',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1648, 1930] },
    },

    barbara_of_heliopolis_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Barbara',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    barnabas_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Barnabas',
      titles: [Titles.Apostle],
    },

    bartholomew_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bartholomew',
      titles: [Titles.Apostle],
    },

    bartholomew_dias_laurel_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Bartholomew Días Laurel',
      titles: [Titles.Religious, Titles.Martyr],
    },

    bartholomew_of_the_martyrs_fernandes_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bartholomew of the Martyrs Fernandes',
      titles: [Titles.Bishop],
    },

    basil_the_great_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Basil the Great',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 379,
    },

    gregory_nazianzen_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gregory Nazianzen',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 390,
    },

    beatrice_da_silva_meneses_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Beatrice da Silva Meneses',
      titles: [Titles.Virgin],
    },

    bede_the_venerable_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bede the Venerable',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 735,
    },

    benedict_of_jesus_valdivielso_saez_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Benedict of Jesus Valdivielso Sáez',
      titles: [Titles.Religious, Titles.Martyr],
    },

    benedict_of_nursia_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Benedict',
      titles: [Titles.Abbot],
      dateOfDeath: 547,
      dateOfDeathIsApproximative: true,
    },

    benno_of_meissen_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Benno of Meissen',
      titles: [Titles.Bishop],
    },

    bernadette_soubirous_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bernadette Soubirous',
      titles: [Titles.Virgin],
      dateOfDeath: 1879,
    },

    bernard_of_clairvaux_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bernard',
      titles: [Titles.Abbot, Titles.DoctorOfTheChurch],
      dateOfDeath: 1153,
    },

    bernardine_of_siena_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bernardine of Siena',
      titles: [Titles.Priest],
      dateOfDeath: 1444,
    },

    beuno_of_wales_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Beuno',
      titles: [Titles.Abbot],
    },

    blaise_of_sebaste_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Blaise',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 316,
    },

    bogumilus_of_dobrow_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Bogumilus',
      titles: [Titles.Bishop],
    },

    boleslawa_mary_lament_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Boleslawa Mary Lament',
      titles: [Titles.Virgin],
    },

    bonaventure_of_bagnoregio_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bonaventure',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1274,
    },

    boniface_of_mainz_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Boniface',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 754,
    },

    boris_of_kiev_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Boris',
      titles: [Titles.Martyr],
    },

    gleb_of_kiev_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gleb',
      titles: [Titles.Martyr],
    },

    brendan_of_clonfert_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Brendan',
      titles: [Titles.Abbot],
    },

    bridget_of_sweden_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bridget',
      titles: [Titles.Religious],
      dateOfDeath: 1373,
    },

    brigid_of_kildare_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Brigid',
      titles: [Titles.Virgin],
    },

    bronislava_of_poland_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Bronislava',
      titles: [Titles.Virgin],
    },

    bronislaw_markiewicz_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Bronisław Markiewicz',
      titles: [Titles.Priest],
    },

    bruno_of_cologne_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bruno',
      titles: [Titles.Priest],
      dateOfDeath: 1101,
    },

    bruno_of_querfurt_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Bruno of Querfurt',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    caesarius_of_arles_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Caesarius of Arles',
      titles: [Titles.Bishop],
      dateOfDeath: 542,
    },

    cajetan_of_thiene_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cajetan',
      titles: [Titles.Priest],
      dateOfDeath: 1547,
    },

    callistus_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Callistus I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 222,
    },

    camillus_de_lellis_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Camillus de Lellis',
      titles: [Titles.Priest],
      dateOfDeath: 1614,
    },

    canice_of_kilkenny_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Canice',
      titles: [Titles.Abbot],
    },

    canute_iv_of_denmark_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Canute',
      titles: [Titles.Martyr],
    },

    carlos_manuel_rodriguez_santiago: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Carlos Manuel Rodríguez Santiago',
    },

    caroline_kozka_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Caroline Kózka',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    carthage_of_lismore_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Carthage',
      titles: [Titles.Bishop],
    },

    casimir_of_poland: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Casimir',
      dateOfDeath: 1484,
    },

    catherine_of_alexandria_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Catherine of Alexandria',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 305,
      dateOfDeathIsApproximative: true,
    },

    catherine_of_saint_augustine_de_simon_de_longpre_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Catherine of Saint Augustine',
      titles: [Titles.Virgin],
      dateOfDeath: 1668,
    },

    catherine_of_siena_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Catherine of Siena',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1380,
    },

    ceallach_of_armagh_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ceallach',
      titles: [Titles.Bishop],
    },

    cecilia_of_rome_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cecilia',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 230,
    },

    ceferino_gimenez_malla_martyr: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ceferino Giménez Malla',
      titles: [Titles.Martyr],
    },

    ceslaus_of_poland_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ceslaus',
      titles: [Titles.Priest],
    },

    chad_of_mercia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Chad',
      titles: [Titles.Bishop],
    },

    cedd_of_lastingham_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cedd',
      titles: [Titles.Bishop],
    },

    chair_of_saint_peter_the_apostle: {
      name: 'Chair of Saint Peter the Apostle',
    },

    charles_borromeo_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Charles Borromeo',
      titles: [Titles.Bishop],
      dateOfDeath: 1584,
    },

    charles_i_of_austria: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Charles of Austria',
    },

    charles_lwanga_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Charles Lwanga',
      dateOfDeath: 618,
    },

    jerome_de_angelis_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Jerome de Angelis',
      titles: [Titles.Priest, Titles.Martyr],
    },

    charles_spinola_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Charles Spinola',
      titles: [Titles.Priest, Titles.Martyr],
    },

    christopher_magallanes_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Christopher Magallanes',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1927,
    },

    christopher_of_palestine_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Christopher',
      titles: [Titles.Martyr],
    },

    ciaran_of_clonmacnoise_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ciaran',
      titles: [Titles.Abbot],
    },

    clare_of_assisi_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Clare',
      titles: [Titles.Virgin],
    },

    clement_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Clement I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 97,
    },

    clement_mary_hofbauer_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Clement Mary Hofbauer',
      titles: [Titles.Priest],
    },

    clement_of_ohrid_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Clement of Ohrid',
      titles: [Titles.Bishop],
    },

    gorazd_of_moravia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gorazd',
      titles: [Titles.Bishop],
    },

    clotilde_of_burgundy: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Clotilde',
      dateOfDeath: 545,
    },

    colman_of_cloyne_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Colman of Cloyne',
      titles: [Titles.Bishop],
    },

    colman_of_dromore_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Colman of Dromore',
      titles: [Titles.Bishop],
    },

    colman_of_kilmacduagh_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Colman of Kilmacduagh',
      titles: [Titles.Bishop],
    },

    columba_marmion_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Columba Marmion',
      titles: [Titles.Priest],
    },

    columba_of_iona_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Columba',
      titles: [Titles.Abbot],
      dateOfDeath: 615,
    },

    columban_of_luxeuil_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Columban',
      titles: [Titles.Abbot],
    },

    comgall_of_bangor_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Comgall',
      titles: [Titles.Abbot],
    },

    conleth_of_kildare_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Conleth',
      titles: [Titles.Bishop],
    },

    conrad_of_constance_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Conrad of Constance',
      titles: [Titles.Bishop],
    },

    gebhard_of_constance_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gebhard of Constance',
      titles: [Titles.Bishop],
    },

    conrad_of_parzham_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Conrad of Parzham',
      titles: [Titles.Religious],
    },

    conversion_of_saint_paul_the_apostle: {
      name: 'Conversion of Saint Paul the Apostle',
    },

    corbinian_of_freising_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Corbinian',
      titles: [Titles.Bishop],
    },

    cornelius_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cornelius',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: '253-06',
    },

    cyprian_of_carthage_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cornelius',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: '258-09-14',
    },

    cosmas_of_cilicia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cosmas',
      titles: [Titles.Martyr],
    },

    damian_of_cilicia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Damian',
      titles: [Titles.Martyr],
    },

    cuthbert_of_lindisfarne_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cuthbert',
      titles: [Titles.Bishop],
    },

    cyril_of_alexandria_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cyril of Alexandria',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 444,
    },

    cyril_of_jerusalem_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cyril of Jerusalem',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 387,
    },

    cyril_the_philosopher_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cyril',
      titles: [Titles.Monk],
      dateOfDeath: '869-02-14',
    },

    methodius_of_thessaloniki_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Methodius',
      titles: [Titles.Bishop],
      dateOfDeath: '885-04-06',
    },

    damasus_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Damasus I',
      titles: [Titles.Pope],
      dateOfDeath: 384,
    },

    damien_de_veuster_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Damien de Veuster',
      titles: [Titles.Priest],
      dateOfDeath: 1889,
    },

    david_lewis_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'David Lewis',
      titles: [Titles.Priest, Titles.Martyr],
    },

    david_of_wales_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'David',
      titles: [Titles.Bishop],
    },

    davnet_of_sliabh_beagh_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Davnet',
      titles: [Titles.Virgin],
    },

    declan_of_ardmore_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Declan',
      titles: [Titles.Bishop],
    },

    dedication_of_consecrated_churches: {
      name: 'Dedication of Consecrated Churches whose date of Consecration is unknown',
    },

    dedication_of_the_basilica_of_saint_mary_major: {
      name: 'Dedication of the Basilica of Saint Mary Major',
    },

    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: {
      name: 'Dedication of the Basilicas of Saints Peter and Paul',
      titles: [Titles.Apostle],
      count: 2,
    },

    dedication_of_the_lateran_basilica: {
      name: 'Dedication of the Lateran Basilica',
    },

    deiniol_of_bangor_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Deiniol',
      titles: [Titles.Bishop],
    },

    demetrius_of_thessaloniki_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Demetrius of Thessaloniki',
      titles: [Titles.Martyr],
    },

    denis_of_paris_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Denis',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: { or: [250, 258, 270] },
    },

    dina_belanger_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Dina Bélanger',
      titles: [Titles.Virgin],
      dateOfDeath: 1929,
    },

    dionysius_the_areopagite_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Dionysius the Areopagite',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    dominic_de_guzman_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Dominic',
      titles: [Titles.Priest],
      dateOfDeath: 1221,
    },

    dominic_of_the_mother_of_god_barberi_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Dominic of the Mother of God Barberi',
      titles: [Titles.Priest],
    },

    dunstan_of_canterbury_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Dunstan',
      titles: [Titles.Bishop],
    },

    dyfrig_of_wales_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Dyfrig',
      titles: [Titles.Bishop],
    },

    edmund_bojanowski: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Edmund Bojanowski',
    },

    edmund_campion_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Edmund Campion',
      titles: [Titles.Priest, Titles.Martyr],
    },

    edmund_ignatius_rice_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Edmund Rice',
      titles: [Titles.Religious],
    },

    edmund_of_abingdon_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Edmund of Abingdon',
      titles: [Titles.Bishop],
    },

    edward_the_confessor: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Edward the Confessor',
    },

    elijah_prophet: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Elijah',
      titles: [Titles.Prophet],
    },

    elizabeth_ann_seton_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Elizabeth Ann Seton',
      titles: [Titles.Religious],
    },

    elizabeth_hesselblad_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Elizabeth Hesselblad',
      titles: [Titles.Religious],
    },

    elizabeth_of_hungary_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Elizabeth of Hungary',
      titles: [Titles.Religious],
      dateOfDeath: 1231,
    },

    elizabeth_of_portugal: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Elizabeth of Portugal',
      dateOfDeath: 1336,
    },

    emeric_of_hungary: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Emeric',
    },

    emilie_tavernier_gamelin_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Émilie Tavernier-Gamelin',
      titles: [Titles.Religious],
      dateOfDeath: 1851,
    },

    enda_of_aran_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Enda',
      titles: [Titles.Abbot],
    },

    english_martyrs: {
      name: 'English Martyrs',
      titles: [Titles.Martyr],
      hideTitles: true,
      count: 'many',
    },

    eoghan_of_ardstraw_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eoghan',
      titles: [Titles.Bishop],
    },

    ephrem_the_syrian_deacon: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ephrem',
      titles: [Titles.Deacon, Titles.DoctorOfTheChurch],
      dateOfDeath: 373,
    },

    eric_ix_of_sweden_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eric IX of Sweden',
      titles: [Titles.Martyr],
    },

    etheldreda_of_ely_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Etheldreda',
      titles: [Titles.Abbess],
    },

    eugene_de_mazenod_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eugène de Mazenod',
      titles: [Titles.Bishop],
      dateOfDeath: 1861,
    },

    eulalia_of_merida_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eulalia of Merida',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    eulogius_of_cordoba_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eulogius of Córdoba',
      titles: [Titles.Bishop],
    },

    eusebius_of_esztergom_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Eusebius of Esztergom',
      titles: [Titles.Priest],
    },

    eusebius_of_vercelli_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eusebius of Vercelli',
      titles: [Titles.Bishop],
      dateOfDeath: 371,
    },

    eysteinn_of_nidaros_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eysteinn of Nidaros',
      titles: [Titles.Bishop],
    },

    ezequiel_moreno_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ezequiel Moreno',
      titles: [Titles.Bishop],
    },

    fabian_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fabian',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 250,
    },

    fachanan_of_kilfenora_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fachanan',
      titles: [Titles.Bishop],
    },

    fachtna_of_rosscarbery_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fachtna',
      titles: [Titles.Bishop],
    },

    faustina_kowalska_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Faustina Kowalska',
      titles: [Titles.Virgin],
      dateOfDeath: 1938,
    },

    ferdinand_iii_of_castile: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ferdinand III of Castile',
    },

    fiacre_of_breuil_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fiacre',
      titles: [Titles.Monk],
    },

    fidelis_of_sigmaringen_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fidelis of Sigmaringen',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1622,
    },

    finbarr_of_cork_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Finbarr',
      titles: [Titles.Bishop],
    },

    finding_of_the_holy_cross: {
      name: 'Finding of the Holy Cross',
    },

    finnian_of_clonard_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Finian',
      titles: [Titles.Bishop],
    },

    fintan_of_clonenagh_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fintan',
      titles: [Titles.Abbot],
    },

    first_martyrs_of_the_holy_roman_church: {
      name: 'First Martyrs of the Holy Roman Church',
      titles: [Titles.Martyr],
      hideTitles: true,
      count: 'many',
      dateOfDeath: 64,
    },

    first_polish_martyrs: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Saints Benedict, John, Matthew, Isaac and Christian, the First Polish Martyrs',
      titles: [Titles.Martyr],
      hideTitles: true,
      count: 5,
    },

    five_wounds_of_the_lord: {
      name: 'Five Wounds of the Lord',
    },

    flannan_of_killaloe_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Flannan',
      titles: [Titles.Bishop],
    },

    florian_of_lorch_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Florian',
      titles: [Titles.Martyr],
    },

    frances_of_rome_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Frances of Rome',
      titles: [Titles.Religious],
      dateOfDeath: 1440,
    },

    frances_xavier_cabrini_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Frances Xavier Cabrini',
      titles: [Titles.Virgin],
    },

    francis_borgia_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Borgia',
      titles: [Titles.Priest],
    },

    francis_de_sales_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis de Sales',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1622,
    },

    francis_diaz_del_rincon_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Díaz del Rincon',
      titles: [Titles.Priest, Titles.Martyr],
    },

    francis_ferdinand_de_capillas_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Ferdinand de Capillas',
      titles: [Titles.Priest, Titles.Martyr],
    },

    francis_of_assisi: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis of Assisi',
      dateOfDeath: 1226,
    },

    francis_of_paola_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis of Paola',
      titles: [Titles.Hermit],
      dateOfDeath: 1507,
    },

    francis_solanus_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Solanus',
      titles: [Titles.Priest],
    },

    francis_xavier_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Xavier',
      titles: [Titles.Priest],
      dateOfDeath: 1552,
    },

    francis_xavier_seelos_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Francis Xavier Seelos',
      titles: [Titles.Priest],
    },

    francois_de_montmorency_laval_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'François de Laval',
      titles: [Titles.Bishop],
      dateOfDeath: 1708,
    },

    frederic_janssoone_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Frédéric Janssoone',
      titles: [Titles.Priest],
      dateOfDeath: 1916,
    },

    fridolin_of_sackingen_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fridolin of Säckingen',
      titles: [Titles.Monk],
    },

    fructuosus_of_braga_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fructuosus of Braga',
      titles: [Titles.Bishop],
    },

    martin_of_braga_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martin of Braga',
      titles: [Titles.Bishop],
    },

    gerald_of_braga_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gerald of Braga',
      titles: [Titles.Bishop],
    },

    fructuosus_of_tarragona_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fructuosus',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    augurius_of_tarragona_deacon: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Augurius',
      titles: [Titles.Deacon, Titles.Martyr],
    },

    eulogius_of_tarragona_deacon: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Eulogius',
      titles: [Titles.Deacon, Titles.Martyr],
    },

    fursa_of_peronne_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Fursa',
      titles: [Titles.Abbot, Titles.Missionary],
    },

    gabriel_taurin_dufresse_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gabriel-Taurin Dufresse',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    gall_of_switzerland_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gall',
      titles: [Titles.Abbot, Titles.Missionary],
    },

    genevieve_of_paris_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Genevieve',
      titles: [Titles.Virgin],
      dateOfDeath: 500,
    },

    george_matulaitis_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'George Matulaitis',
      titles: [Titles.Bishop],
    },

    george_of_lydda_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'George',
      titles: [Titles.Martyr],
      dateOfDeath: 303,
    },

    george_preca_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'George Preca',
      titles: [Titles.Priest],
    },

    gerard_of_csanad_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gerard of Csanád',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    germanus_of_auxerre_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Germanus of Auxerre',
      titles: [Titles.Bishop],
    },

    gertrude_of_nivelles_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gertrude of Nivelles',
      titles: [Titles.Abbess],
      dateOfDeath: 659,
    },

    gertrude_the_great_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gertrude',
      titles: [Titles.Virgin],
      dateOfDeath: 1301,
    },

    gisela_of_hungary: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Gisela',
    },

    gobnait_of_ballyvourney_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gobnait',
      titles: [Titles.Virgin],
    },

    gorazd_of_moravia: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gorazd',
    },

    gotthard_of_hildesheim_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gotthard',
      titles: [Titles.Bishop],
    },

    gratia_of_cattaro_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Gratia of Cattaro',
      titles: [Titles.Religious],
    },

    gregory_grassi_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gregory Grassi',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    francis_fogolla_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francis Fogolla',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    anthony_fantosati_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anthony Fantosati',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    gregory_i_the_great_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gregory the Great',
      titles: [Titles.Pope, Titles.DoctorOfTheChurch],
      dateOfDeath: 604,
    },

    gregory_of_narek_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gregory of Narek',
      titles: [Titles.Abbot, Titles.DoctorOfTheChurch],
    },

    gregory_vii_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gregory VII',
      titles: [Titles.Pope],
      dateOfDeath: 1085,
    },

    guardian_angel_of_portugal: {
      name: 'Guardian Angel of Portugal',
    },

    guardian_angels: {
      name: 'Holy Guardian Angels',
      count: 'many',
    },

    gundisalvus_garcia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gundisalvus Garcia',
      titles: [Titles.Martyr],
    },

    gundisalvus_of_amarante_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Gundisalvus of Amarante',
      titles: [Titles.Priest],
    },

    gundisalvus_of_lagos_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Gundisalvus of Lagos',
      titles: [Titles.Priest],
    },

    hedwig_of_poland: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hedwig of Poland',
    },

    hedwig_of_silesia_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hedwig',
      titles: [Titles.Religious],
      dateOfDeath: 1243,
    },

    helena_of_constantinople: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Helena',
    },

    hemma_of_gurk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hemma of Gurk',
    },

    hemming_of_turku_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Hemming of Turku',
      titles: [Titles.Bishop],
    },

    henry_ii_emperor: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Henry',
      dateOfDeath: 1024,
    },

    cunigunde_of_luxembourg: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Cunigunde',
    },

    henry_of_finland_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Henry',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1156,
    },

    henry_suso_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Henry Suso',
      titles: [Titles.Priest],
    },

    hermann_joseph_of_steinfeld_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hermann Joseph',
      titles: [Titles.Priest],
    },

    hermenegild_the_visigoths_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hermenegild',
      titles: [Titles.Martyr],
    },

    hilary_of_poitiers_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hilary',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 367,
    },

    hilda_of_whitby_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hilda',
      titles: [Titles.Abbess],
    },

    hildegard_of_bingen_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hildegard of Bingen',
      titles: [Titles.Abbess, Titles.DoctorOfTheChurch],
    },

    holy_child_of_cebu: {
      name: 'Holy Child of Cebú',
    },

    holy_innocents_martyrs: {
      name: 'Holy Innocents',
      titles: [Titles.Martyr],
      count: 'many',
      dateOfDeath: 2,
      dateOfDeathIsApproximative: true,
    },

    honorat_kozminski_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Honorat Koźmiński',
      titles: [Titles.Priest],
    },

    hosanna_of_cattaro_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Hosanna of Cattaro',
      titles: [Titles.Virgin],
    },

    hroznata_of_bohemia_martyr: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Hroznata',
      titles: [Titles.Martyr],
    },

    hubert_of_liege_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hubert',
      titles: [Titles.Bishop],
      dateOfDeath: 727,
    },

    hugh_of_lincoln_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hugh of Lincoln',
      titles: [Titles.Bishop],
    },

    hungarian_saints_and_blesseds: {
      name: 'Hungarian Saints and Blesseds',
      count: 'many',
    },

    hyacinth_of_poland_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hyacinth',
      titles: [Titles.Priest],
    },

    ignatius_de_azevedo_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ignatius de Azevedo',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ignatius_falzon: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ignatius Falzon',
    },

    ignatius_of_antioch_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ignatius of Antioch',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 115,
    },

    ignatius_of_loyola_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ignatius of Loyola',
      titles: [Titles.Priest],
      dateOfDeath: 1556,
    },

    ildephonsus_of_toledo_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ildephonsus of Toledo',
      titles: [Titles.Bishop],
    },

    illtud_the_knight_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Illtud',
      titles: [Titles.Abbot],
    },

    innocent_xi_pope: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Innocent XI',
      titles: [Titles.Pope],
    },

    irenaeus_of_lyon_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Irenaeus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 201,
      dateOfDeathIsApproximative: true,
    },

    irene_of_macedonia: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Irene',
    },

    irish_martyrs: {
      name: 'Irish Martyrs',
      count: 'many',
    },

    isidore_of_seville_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Isidore',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 636,
    },

    isidore_the_farmer: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Isidore',
    },

    istvan_sandor_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'István Sándor',
      titles: [Titles.Religious, Titles.Martyr],
    },

    ita_of_killeedy_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ita',
      titles: [Titles.Virgin],
    },

    ivan_merz: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ivan Merz',
    },

    ivo_of_kermartin_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ivo',
      titles: [Titles.Priest],
      dateOfDeath: 1303,
    },

    jacinta_marto: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jacinta Marto',
    },

    francisco_marto: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Francisco Marto',
    },

    james_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'James',
      titles: [Titles.Apostle],
      dateOfDeath: 44,
    },

    james_strzemie_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'James Strzemię',
      titles: [Titles.Bishop],
    },

    jane_frances_de_chantal_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jane Frances de Chantal',
      titles: [Titles.Religious],
      dateOfDeath: 1641,
    },

    januarius_i_of_benevento_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Januarius',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 305,
    },

    jarlath_of_tuam_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jarlath',
      titles: [Titles.Bishop],
    },

    jerome_emiliani: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jerome Emiliani',
      dateOfDeath: 1537,
    },

    jerome_of_stridon_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jerome',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 420,
    },

    joachim_father_of_mary: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joachim',
      titles: [Titles.ParentsOfTheBlessedVirginMary],
      dateOfDeath: { century: 1 },
    },

    anne_mother_of_mary: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anne',
      titles: [Titles.ParentsOfTheBlessedVirginMary],
      dateOfDeath: { century: 1 },
    },

    joachim_he_kaizhi_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joachim He Kaizhi',
      titles: [Titles.Martyr],
    },

    joan_of_arc_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joan of Arc',
      titles: [Titles.Virgin],
      dateOfDeath: 1431,
    },

    joan_of_portugal_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Joan of Portugal',
      titles: [Titles.Virgin],
    },

    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joaquina of Saint Francis of Assisi de Vedruna',
      titles: [Titles.Religious],
    },

    john_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John',
      titles: [Titles.Apostle, Titles.Evangelist],
    },

    john_baptist_de_la_salle_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Baptist de la Salle',
      titles: [Titles.Priest],
      dateOfDeath: 1719,
    },

    john_berchmans_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Berchmans',
      titles: [Titles.Religious],
      dateOfDeath: 1621,
    },

    john_beyzym_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'John Beyzym',
      titles: [Titles.Priest],
    },

    john_bosco_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Bosco',
      titles: [Titles.Priest],
      dateOfDeath: 1888,
    },

    john_brenner_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'John Brenner',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_cassian_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Cassian',
      titles: [Titles.Priest],
    },

    john_chrysostom_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Chrysostom',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 407,
    },

    john_damascene_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Damascene',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 749,
    },

    john_de_brebeuf_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John de Brébeuf',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: '1649-03-16',
    },

    isaac_jogues_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Isaac Jogues',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: '1646-10-18',
    },

    john_de_britto_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John de Brito',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_eudes_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Eudes',
      titles: [Titles.Priest],
      dateOfDeath: 1680,
    },

    john_fisher_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Fisher',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: '1535-06-22',
    },

    thomas_more_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas More',
      titles: [Titles.Martyr],
      dateOfDeath: '1537-07-6',
    },

    john_gabriel_perboyre_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Gabriel Perboyre',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_henry_newman_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Henry Newman',
      titles: [Titles.Priest],
    },

    john_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 526,
    },

    john_jones_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Jones',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_leonardi_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Leonardi',
      titles: [Titles.Priest],
      dateOfDeath: 1609,
    },

    john_macias_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Macías',
      titles: [Titles.Religious],
    },

    john_martin_moye_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'John Martin Moye',
      titles: [Titles.Priest],
    },

    john_mary_vianney_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Vianney',
      titles: [Titles.Priest],
      dateOfDeath: 1859,
    },

    john_nepomucene_neumann_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Neumann',
      titles: [Titles.Bishop],
    },

    john_nepomucene_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Nepomucene',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_of_avila_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of Ávila',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
    },

    john_of_capistrano_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of Capistrano',
      titles: [Titles.Priest],
      dateOfDeath: 1456,
    },

    john_of_dukla_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of Dukla',
      titles: [Titles.Priest],
    },

    john_of_god_duarte_cidade_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of God',
      titles: [Titles.Religious],
      dateOfDeath: 1550,
    },

    john_of_kanty_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of Kanty',
      titles: [Titles.Priest],
      dateOfDeath: 1473,
    },

    john_of_the_cross_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of the Cross',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1591,
    },

    john_of_triora_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John of Triora',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_ogilvie_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Ogilvie',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_paul_ii_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Paul II',
      titles: [Titles.Pope],
      dateOfDeath: 2005,
    },

    john_roberts_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Roberts',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_sarkander_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Sarkander',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_scheffler_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'John Scheffler',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    john_xxiii_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John XXIII',
      titles: [Titles.Pope],
      dateOfDeath: 1963,
    },

    josaphat_kuntsevych_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Josaphat',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1623,
    },

    jose_maria_de_yermo_y_parres_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'José Maria de Yermo y Parres',
      titles: [Titles.Priest],
    },

    josemaria_escriva_de_balaguer_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Josemaría Escrivá de Balaguer',
      titles: [Titles.Priest],
    },

    joseph_bilczewski_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Bilczewski',
      titles: [Titles.Bishop],
    },

    joseph_de_anchieta_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph de Anchieta',
      titles: [Titles.Priest],
    },

    joseph_freinademetz_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Freinademetz',
      titles: [Titles.Priest],
    },

    joseph_of_calasanz_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph of Calasanz',
      titles: [Titles.Priest],
      dateOfDeath: 1648,
    },

    joseph_sebastian_pelczar_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Sebastian Pelczar',
      titles: [Titles.Bishop],
    },

    joseph_the_worker: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph the Worker',
    },

    joseph_vaz_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Vaz',
      titles: [Titles.Priest],
    },

    joseph_yuan_gengyin_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Yuan Gengyin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    joseph_zhang_dapeng_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Joseph Zhang Dapeng',
      titles: [Titles.Martyr],
    },

    josephine_bakhita_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Josephine Bakhita',
      titles: [Titles.Virgin],
      dateOfDeath: 1947,
    },

    juan_diego_cuauhtlatoatzin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Juan Diego Cuauhtlatoatzin',
      dateOfDeath: 1548,
    },

    juliana_of_liege_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Juliana of Liège',
      titles: [Titles.Virgin],
      dateOfDeath: 1258,
    },

    julie_billiart_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Julie Billiart',
      titles: [Titles.Virgin],
      dateOfDeath: 1816,
    },

    junipero_serra_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Junípero Serra',
      titles: [Titles.Priest],
    },

    justin_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Justin',
      titles: [Titles.Martyr],
      dateOfDeath: 165,
    },

    kateri_tekakwitha_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kateri Tekakwitha',
      titles: [Titles.Virgin],
      dateOfDeath: 1680,
    },

    katharine_drexel_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Katharine Drexel',
      titles: [Titles.Virgin],
    },

    kentigern_of_scotland_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kentigern',
      titles: [Titles.Bishop],
    },

    kevin_of_glendalough_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kevin',
      titles: [Titles.Abbot],
    },

    kieran_of_saigir_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kieran',
      titles: [Titles.Bishop],
    },

    kilian_of_wurzburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kilian',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    kinga_of_poland_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kinga',
      titles: [Titles.Virgin],
    },

    kuriakose_elias_of_the_holy_family_chavara_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Kuriakose Elias of the Holy Family Chavara',
      titles: [Titles.Priest],
    },

    ladislas_of_gielniow_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ladislas of Gielniow',
      titles: [Titles.Priest],
    },

    ladislaus_batthyany_strattmann: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Ladislaus Batthyány-Strattmann',
    },

    ladislaus_i_of_hungary: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ladislaus',
    },

    lambert_of_maastricht_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lambert of Maastricht',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 705,
    },

    laserian_of_leighlin_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Laserian',
      titles: [Titles.Bishop],
    },

    laura_vicuna_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Laura Vicuña',
      titles: [Titles.Virgin],
    },

    laurence_otoole_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Laurence O’Toole',
      titles: [Titles.Bishop],
    },

    laurence_wang_bing_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Laurence Wang Bing',
      titles: [Titles.Martyr],
    },

    lawrence_bai_xiaoman_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lawrence Bai Xiaoman',
      titles: [Titles.Martyr],
    },

    lawrence_of_brindisi_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lawrence of Brindisi',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1619,
    },

    lawrence_of_rome_deacon: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lawrence',
      titles: [Titles.Deacon, Titles.Martyr],
      dateOfDeath: 258,
    },

    lawrence_ruiz_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lawrence Ruiz',
      titles: [Titles.Martyr],
      dateOfDeath: 1635,
      dateOfDeathIsApproximative: true,
    },

    leander_of_seville_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leander of Seville',
      titles: [Titles.Bishop],
    },

    lelia_of_killeely_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lelia',
      titles: [Titles.Virgin],
    },

    leo_i_the_great_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leo the Great',
      titles: [Titles.Pope, Titles.DoctorOfTheChurch],
    },

    leo_ignatius_mangin_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leo Ignatius Mangin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    leo_ix_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leo IX',
      titles: [Titles.Pope],
    },

    leoba_of_tauberbischofsheim_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leoba',
      titles: [Titles.Abbess],
    },

    leonard_of_noblac_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leonard of Noblac',
      titles: [Titles.Hermit],
    },

    leonid_feodorov_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Leonid Feodorov',
      titles: [Titles.Priest, Titles.Martyr],
    },

    leopold_iii_of_babenberg: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leopold III of Babenberg',
    },

    leopold_mandic_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Leopold Mandić',
      titles: [Titles.Priest],
    },

    louis_bertrand_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Louis Bertrand',
      titles: [Titles.Priest],
    },

    louis_grignion_de_montfort_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Louis Grignion de Montfort',
      titles: [Titles.Priest],
      dateOfDeath: 1716,
    },

    louis_ix_of_france: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Louis',
      dateOfDeath: 1270,
    },

    louis_zephirin_moreau_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Louis-Zéphirin Moreau',
      titles: [Titles.Bishop],
      dateOfDeath: 1901,
    },

    lucius_of_chur_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lucius of Chur',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    lucy_of_syracuse_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lucy',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 305,
      dateOfDeathIsApproximative: true,
    },

    lucy_yi_zhenmei_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lucy Yi Zhenmei',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    ludger_of_munster_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ludger of Münster',
      titles: [Titles.Bishop],
    },

    ludmila_of_bohemia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ludmila',
      titles: [Titles.Martyr],
    },

    luigi_orione_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Luigi Orione',
      titles: [Titles.Priest],
    },

    luke_evangelist: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Luke',
      titles: [Titles.Evangelist],
    },

    lydia_of_philippi: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lydia of Philippi',
    },

    mac_nissi_of_connor_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mac Nissi',
      titles: [Titles.Bishop],
    },

    macartan_of_clogher_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Macartan',
      titles: [Titles.Bishop],
    },

    maelruain_of_tallaght_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maelruain',
      titles: [Titles.Bishop, Titles.Abbot],
    },

    magnus_erlendsson_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Magnus',
      titles: [Titles.Martyr],
    },

    malachy_of_armagh_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Malachy',
      titles: [Titles.Bishop],
    },

    marcel_callo_martyr: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Marcel Callo',
      titles: [Titles.Martyr],
    },

    marcelina_darowska_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Marcelina Darowska',
      titles: [Titles.Religious],
    },

    marcellin_champagnat_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marcellin Champagnat',
      titles: [Titles.Priest],
    },

    marcellinus_of_rome_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marcellinus',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
    },

    peter_the_exorcist_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
    },

    margaret_clitherow_virgin_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret Clitherow',
      titles: [Titles.Martyr],
    },

    anne_line_virgin_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Anne Line',
      titles: [Titles.Martyr],
    },

    margaret_ward_virgin_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret Ward',
      titles: [Titles.Martyr],
    },

    margaret_mary_alacoque_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret Mary Alacoque',
      titles: [Titles.Virgin],
      dateOfDeath: 1690,
    },

    margaret_of_antioch_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret of Antioch',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    margaret_of_hungary_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret of Hungary',
      titles: [Titles.Religious],
    },

    margaret_of_scotland: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Margaret of Scotland',
      dateOfDeath: 1093,
    },

    marguerite_bourgeoys_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marguerite Bourgeoys',
      titles: [Titles.Virgin],
      dateOfDeath: 1700,
    },

    marguerite_dyouville_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marguerite d’Youville',
      titles: [Titles.Religious],
      dateOfDeath: 1771,
    },

    maria_goretti_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maria Goretti',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 1902,
    },

    maria_guadalupe_garcia_zavala_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'María Guadalupe García Zavala',
      titles: [Titles.Virgin],
    },

    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'María Micaela of the Blessed Sacrament Desmaisières',
      titles: [Titles.Virgin],
    },

    mariana_of_jesus_de_paredes_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mariana of Jesus de Paredes',
      titles: [Titles.Virgin],
    },

    marianne_cope_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marianne Cope',
      titles: [Titles.Virgin],
    },

    marie_anne_blondin_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Marie-Anne Blondin',
      titles: [Titles.Virgin],
      dateOfDeath: 1890,
    },

    marie_leonie_paradis_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Marie-Léonie Paradis',
      titles: [Titles.Virgin],
      dateOfDeath: 1912,
    },

    marie_of_the_incarnation_guyart_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marie of the Incarnation Guyart',
      titles: [Titles.Religious],
      dateOfDeath: 1672,
    },

    marie_rose_durocher_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Marie Rose Durocher',
      titles: [Titles.Virgin],
      dateOfDeath: 1849,
    },

    mark_evangelist: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mark',
      titles: [Titles.Evangelist],
    },

    marko_krizin_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Marko Krizin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    stephen_pongracz_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stephen Pongrácz',
      titles: [Titles.Priest, Titles.Martyr],
    },

    maron_of_syria_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maroun',
      titles: [Titles.Hermit],
    },

    martha_of_bethany: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martha',
      dateOfDeath: { century: 1 },
    },

    mary_of_bethany: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary',
      dateOfDeath: { century: 1 },
    },

    lazarus_of_bethany: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Lazarus',
      dateOfDeath: { century: 1 },
    },

    martin_de_porres_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martin de Porres',
      titles: [Titles.Religious],
      dateOfDeath: 1639,
    },

    martin_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martin I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 656,
    },

    martin_of_tours_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martin of Tours',
      titles: [Titles.Bishop],
      dateOfDeath: 397,
    },

    martin_wu_xuesheng_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Martin Wu Xuesheng',
      titles: [Titles.Martyr],
    },

    mary_adeodata_pisani_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Adeodata Pisani',
      titles: [Titles.Virgin],
    },

    mary_angela_truszkowska_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Angela Truszkowska',
      titles: [Titles.Virgin],
    },

    mary_assunta_pallotta_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Assunta Pallotta',
      titles: [Titles.Virgin],
    },

    mary_magdalene: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary Magdalene',
      dateOfDeath: { century: 1 },
    },

    mary_magdalene_de_pazzi_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary Magdalene de’ Pazzi',
      titles: [Titles.Virgin],
      dateOfDeath: 1607,
    },

    mary_mother_of_the_church: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Virgin Mary, Mother of the Church',
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary of Jesus Crucified Petković',
      titles: [Titles.Virgin],
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary of Jesus in the Blessed Sacrament Venegas de la Torre',
      titles: [Titles.Virgin],
    },

    mary_of_jesus_the_good_shepherd_siedliska_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary of Jesus the Good Shepherd Siedliska',
      titles: [Titles.Virgin],
    },

    mary_of_the_cross_mackillop_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary of the Cross MacKillop',
      titles: [Titles.Virgin],
    },

    mary_soledad_torres_acosta_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary Soledad Torres y Acosta',
      titles: [Titles.Virgin],
    },

    mary_stella_of_the_blessed_sacrament_mardosewicz_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Stella of the Blessed Sacrament Mardosewicz',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    mary_theresa_chiramel_mankidiyan_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary Theresa Chiramel Mankidiyan',
      titles: [Titles.Virgin],
    },

    mary_theresa_ledochowska_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Theresa Ledóchowska',
      titles: [Titles.Virgin],
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mary Ursula of Jesus Ledóchowska',
      titles: [Titles.Virgin],
    },

    marydolores_rodriguez_sopena_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mary Dolores Rodríguez Sopeña',
      titles: [Titles.Virgin],
    },

    matilda_of_ringelheim: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Matilda',
    },

    matthew_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Matthew',
      titles: [Titles.Apostle, Titles.Evangelist],
    },

    matthias_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Matthias',
      titles: [Titles.Apostle],
    },

    maurice_of_agaunum_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maurice',
      titles: [Titles.Martyr],
    },

    maurice_tornay_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Maurice Tornay',
      titles: [Titles.Priest, Titles.Martyr],
    },

    maurus_of_pecs_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maurus',
      titles: [Titles.Bishop],
    },

    maximilian_kolbe_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Maximilian Kolbe',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1941,
    },

    meinrad_of_einsiedeln_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Meinrad of Einsiedeln',
      titles: [Titles.Martyr],
    },

    mel_of_ardagh_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mel',
      titles: [Titles.Bishop],
    },

    melchior_grodziecki_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Melchior Grodziecki',
      titles: [Titles.Priest, Titles.Martyr],
    },

    michael_archangel: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Michael',
      titles: [Titles.Archangel],
    },

    gabriel_archangel: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Gabriel',
      titles: [Titles.Archangel],
    },

    raphael_archangel: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Raphael',
      titles: [Titles.Archangel],
    },

    michael_kozal_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Michael Kozal',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    miguel_agustin_pro_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Miguel Agustin Pro',
      titles: [Titles.Priest, Titles.Martyr],
    },

    miguel_febres_cordero_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Miguel Febres Cordero',
      titles: [Titles.Religious],
    },

    monica_of_hippo: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Monica',
      dateOfDeath: 387,
    },

    moninne_of_killeavy_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Moninne',
      titles: [Titles.Virgin],
    },

    most_holy_name_of_jesus: {
      name: 'Most Holy Name of Jesus',
    },

    most_holy_name_of_mary: {
      name: 'Most Holy Name of Mary',
    },

    munchin_of_limerick_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Munchin',
      titles: [Titles.Bishop],
    },

    muredach_of_killala_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Muredach',
      titles: [Titles.Bishop],
    },

    mutien_marie_wiaux_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Mutien-Marie Wiaux',
      titles: [Titles.Religious],
      dateOfDeath: 1917,
    },

    nativity_of_mary: {
      name: 'Nativity of the Blessed Virgin Mary',
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nazaria Ignacia of Saint Teresa of Jesus March Mesa',
      titles: [Titles.Virgin],
    },

    nereus_of_terracina_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nereus',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    achilleus_of_terracina_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Achilleus',
      titles: [Titles.Martyr],
    },

    nicholas_of_flue_hermit: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nicholas of Flüe',
      titles: [Titles.Hermit],
    },

    nicholas_of_myra_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nicholas',
      titles: [Titles.Bishop],
      dateOfDeath: 350,
      dateOfDeathIsApproximative: true,
    },

    nicholas_steno_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Nicholas Steno',
      titles: [Titles.Bishop],
    },

    nicholas_tavelic_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nicholas Tavelić',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ninian_of_whithorn_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ninian',
      titles: [Titles.Bishop],
    },

    norbert_of_xanten_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Norbert',
      titles: [Titles.Bishop],
      dateOfDeath: 1134,
    },

    nuno_of_saint_mary_pereira_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Nuno of Saint Mary Pereira',
      titles: [Titles.Religious],
    },

    nykyta_budka_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Nykyta Budka',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1949,
    },

    vasyl_velychkovsky_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Vasyl Velychkovsky',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1973,
    },

    odile_of_alsace_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Odile of Alsace',
      titles: [Titles.Abbess],
    },

    odoric_of_pordenone_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Odoric of Pordenone',
      titles: [Titles.Priest],
    },

    olaf_ii_of_norway_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Olaf II',
      titles: [Titles.Martyr],
    },

    oleksiy_zarytskyi_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Oleksiy Zarytskyi',
      titles: [Titles.Priest, Titles.Martyr],
    },

    olga_of_kiev: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Olga',
    },

    oliver_plunket_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Oliver Plunket',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    otteran_of_iona_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Otteran',
      titles: [Titles.Monk],
    },

    otto_of_bamberg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Otto of Bamberg',
      titles: [Titles.Bishop],
    },

    our_lady_help_of_christians: {
      name: 'Our Lady, Help of Christians',
    },

    our_lady_mediatrix_of_all_grace: {
      name: 'Our Lady, Mediatrix of All Grace',
    },

    our_lady_mother_of_christian_unity: {
      name: 'Our Lady, Mother of Christian Unity',
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
      titles: [Titles.QueenOfPoland],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      name: 'Our Lord Jesus Christ, the Eternal High Priest',
    },

    our_lord_of_miracles: {
      name: 'Our Lord of Miracles',
    },

    pancras_of_rome_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pancras',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    pantaleon_of_nicomedia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pantaleon of Nicomedia',
      titles: [Titles.Martyr],
    },

    paschal_baylon_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paschal Baylón',
      titles: [Titles.Religious],
    },

    passion_of_saint_john_the_baptist: {
      name: 'Passion of Saint John the Baptist',
    },

    patrick_of_ireland_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Patrick',
      titles: [Titles.Bishop],
      dateOfDeath: 461,
    },

    paul_chen_changpin_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul Chen Changpin',
      titles: [Titles.Martyr],
    },

    paul_liu_hanzuo_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul Liu Hanzuo',
      titles: [Titles.Priest, Titles.Martyr],
    },

    paul_miki_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul Miki',
      titles: [Titles.Martyr],
      dateOfDeath: 1597,
    },

    paul_of_the_cross_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul of the Cross',
      titles: [Titles.Priest],
      dateOfDeath: 1776,
    },

    paul_of_thebes_hermit: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Paul of Thebes',
      titles: [Titles.Hermit],
    },

    paul_vi_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paul VI',
      titles: [Titles.Pope],
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paulina of the Agonizing Heart of Jesus Visintainer',
      titles: [Titles.Virgin],
    },

    paulinus_of_nola_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paulinus of Nola',
      titles: [Titles.Bishop],
      dateOfDeath: 431,
    },

    paulinus_of_trier_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paulinus of Trier',
      titles: [Titles.Bishop],
    },

    paulinus_of_york_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Paulinus of York',
      titles: [Titles.Bishop],
    },

    pavel_peter_gojdic_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Pavel Peter Gojdič',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    pedro_calungsod_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pedro Calungsod',
      titles: [Titles.Martyr],
    },

    pelagius_of_cordoba_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pelagius of Córdoba',
      titles: [Titles.Martyr],
    },

    perpetua_of_carthage_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Perpetua',
      titles: [Titles.Martyr],
      dateOfDeath: 203,
    },

    felicity_of_carthage_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Felicity',
      titles: [Titles.Martyr],
      dateOfDeath: 203,
    },

    peter_baptist_blasquez_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Baptist Blásquez',
      titles: [Titles.Martyr],
    },

    peter_canisius_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Canisius',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1597,
    },

    peter_chanel_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Chanel',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1841,
    },

    peter_chrysologus_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Chrysologus',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 451,
    },

    peter_claver_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Claver',
      titles: [Titles.Priest],
      dateOfDeath: 1654,
    },

    peter_damian_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Damian',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1072,
    },

    peter_de_zuniga_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Peter de Zúñiga',
      titles: [Titles.Priest, Titles.Martyr],
    },

    louis_flores_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Louis Flores',
      titles: [Titles.Priest, Titles.Martyr],
    },

    peter_julian_eymard_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Julian Eymard',
      titles: [Titles.Priest],
      dateOfDeath: 1868,
    },

    peter_kibe_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Peter Kibe',
      titles: [Titles.Priest, Titles.Martyr],
    },

    peter_liu_wenyuan_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Liu Wenyuan',
      titles: [Titles.Martyr],
    },

    peter_of_alcantara_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter of Alcántara',
      titles: [Titles.Priest],
    },

    peter_sanz_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Sanz',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    peter_to_rot_martyr: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Peter To Rot',
      titles: [Titles.Martyr],
    },

    peter_wu_guosheng_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Peter Wu Guosheng',
      titles: [Titles.Martyr],
    },

    philip_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Philip',
      titles: [Titles.Apostle],
    },

    philip_evans_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Philip Evans',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_lloyd_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'John Lloyd',
      titles: [Titles.Priest, Titles.Martyr],
    },

    philip_neri_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Philip Neri',
      titles: [Titles.Priest],
      dateOfDeath: 1595,
    },

    philip_of_jesus_de_las_casas_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Philip of Jesus de las Casas',
      titles: [Titles.Martyr],
    },

    pirmin_of_hornbach_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pirmin',
      titles: [Titles.Abbot],
    },

    pius_ix_pope: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Pius IX',
      titles: [Titles.Pope],
    },

    pius_of_pietrelcina_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pius of Pietrelcina',
      titles: [Titles.Priest],
      dateOfDeath: 1968,
    },

    pius_v_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pius V',
      titles: [Titles.Pope],
      dateOfDeath: 1572,
    },

    pius_x_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pius X',
      titles: [Titles.Pope],
      dateOfDeath: 1914,
    },

    polycarp_of_smyrna_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Polycarp',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 167,
    },

    pontian_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pontian',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 235,
    },

    hippolytus_of_rome_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Hippolytus',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 235,
    },

    pothinus_of_lyon_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Pothinus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 177,
    },

    blandina_of_lyon_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Blandina',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 177,
    },

    presentation_of_mary: {
      name: 'Presentation of the Blessed Virgin Mary',
    },

    procopius_of_sazava_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Procopius of Sázava',
      titles: [Titles.Abbot],
    },

    publius_of_malta_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Publius',
      titles: [Titles.Bishop],
    },

    queenship_of_mary: {
      name: 'Queenship of the Blessed Virgin Mary',
    },

    quirinus_of_sescia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Quirinus of Sescia',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    rabanus_maurus_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rabanus Maurus',
      titles: [Titles.Bishop],
    },

    radim_of_gniezno_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Radim',
      titles: [Titles.Bishop],
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rafqa Pietra Choboq Ar-Rayès',
      titles: [Titles.Virgin],
    },

    raphael_chylinski_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Raphael Chyliński',
      titles: [Titles.Priest],
    },

    raphael_guizar_y_valencia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Raphael Guízar y Valencia',
      titles: [Titles.Bishop],
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Raphael of Saint Joseph Kalinowski',
      titles: [Titles.Priest],
    },

    raymond_of_penyafort_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Raymond of Penyafort',
      titles: [Titles.Priest],
      dateOfDeath: 1275,
    },

    remigius_of_reims_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Remigius',
      titles: [Titles.Bishop],
      dateOfDeath: 530,
    },

    richard_gwyn_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Richard Gwyn',
      titles: [Titles.Martyr],
    },

    richard_of_chichester_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Richard of Chichester',
      titles: [Titles.Bishop],
    },

    rita_of_cascia_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rita of Cascia',
      titles: [Titles.Religious],
      dateOfDeath: 1456,
    },

    robert_bellarmine_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Robert Bellarmine',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1621,
    },

    roch_gonzalez_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Roch González',
      titles: [Titles.Priest, Titles.Martyr],
    },

    alphonsus_rodriguez_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Alphonsus Rodríguez',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_del_castillo_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Roch González',
      titles: [Titles.Priest, Titles.Martyr],
    },

    roch_of_montpellier: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Roch',
    },

    romuald_of_ravenna_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Romuald',
      titles: [Titles.Abbot],
      dateOfDeath: 1027,
    },

    rose_of_lima_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rose of Lima',
      titles: [Titles.Virgin],
      dateOfDeath: 1617,
    },

    rose_philippine_duchesne_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rose Philippine Duchesne',
      titles: [Titles.Virgin],
    },

    rupert_of_salzburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Rupert Salzburg',
      titles: [Titles.Bishop],
    },

    salomea_of_poland_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Salomea of Poland',
      titles: [Titles.Religious],
    },

    sancha_of_portugal_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Sancha',
      titles: [Titles.Virgin],
    },

    mafalda_of_portugal_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Mafalda',
      titles: [Titles.Virgin],
    },

    sara_salkahazi_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Sára Salkaházi',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    scholastica_of_nursia_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Scholastica',
      titles: [Titles.Virgin],
      dateOfDeath: 543,
    },

    sebastian_de_aparicio_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Sebastian de Aparicio',
      titles: [Titles.Religious],
    },

    sebastian_of_milan_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sebastian',
      titles: [Titles.Martyr],
      dateOfDeath: 284,
      dateOfDeathIsApproximative: true,
    },

    senan_of_inis_cathaigh_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Senan',
      titles: [Titles.Bishop],
    },

    seven_holy_founders_of_the_servite_order: {
      name: 'Seven Holy Founders of the Servite Order',
      count: 7,
      dateOfDeath: 1310,
    },

    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary: {
      name: 'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
      count: 7,
    },

    severinus_of_noricum_monk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Severinus of Noricum',
      titles: [Titles.Monk],
    },

    sharbel_makhluf_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sharbel Makhlūf',
      titles: [Titles.Priest],
      dateOfDeath: 1898,
    },

    shipwreck_of_saint_paul_apostle: {
      name: 'Shipwreck of Saint Paul',
      titles: [Titles.Apostle],
    },

    sigismund_of_burgundy_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sigismund',
      titles: [Titles.Martyr],
    },

    sigmund_felix_felinski_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sigmund Felix Feliński',
      titles: [Titles.Bishop],
    },

    simon_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Simon',
      titles: [Titles.Apostle],
    },

    jude_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Jude',
      titles: [Titles.Apostle],
    },

    simon_of_lipnica_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Simon of Lipnica',
      titles: [Titles.Priest],
    },

    six_welsh_martyrs: {
      name: 'Six Welsh Martyrs',
      hideTitles: true,
      count: 6,
    },

    sixtus_ii_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sixtus II',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 258,
    },

    spyridon_of_trimythous_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Spyridon',
      titles: [Titles.Bishop],
    },

    stanislaus_kazimierczyk_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stanislaus Kazimierczyk',
      titles: [Titles.Priest],
    },

    stanislaus_kostka_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stanislaus Kostka',
      titles: [Titles.Religious],
    },

    stanislaus_of_szczepanow_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stanislaus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1079,
    },

    stephen_i_of_hungary: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stephen of Hungary',
      dateOfDeath: 1038,
    },

    stephen_the_first_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Stephen',
      titles: [Titles.TheFirstMartyr],
      dateOfDeath: 35,
    },

    sunday_of_the_word_of_god: {
      name: 'Sunday of the Word of God',
    },

    sunniva_of_norway_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sunniva',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    swithun_of_winchester_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Swithun',
      titles: [Titles.Bishop],
    },

    sylvester_i_pope: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Sylvester I',
      titles: [Titles.Pope],
      dateOfDeath: 335,
    },

    szilard_bogdanffy_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Szilárd Bogdánffy',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    teilo_of_llandaff_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teilo',
      titles: [Titles.Bishop],
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teresa Benedicta of the Cross Stein',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 1942,
    },

    teresa_of_calcutta_religious: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teresa of Calcutta',
      titles: [Titles.Religious],
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teresa of Jesus Jornet Ibars',
      titles: [Titles.Virgin],
    },

    teresa_of_jesus_of_avila_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teresa of Jesus of Ávila',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1582,
    },

    teresa_of_jesus_of_los_andes_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Teresa of Jesus of Los Andes',
      titles: [Titles.Virgin],
    },

    teresa_of_portugal_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Teresa of Portugal',
      titles: [Titles.Religious],
    },

    theodore_of_canterbury_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Theodore of Canterbury',
      titles: [Titles.Bishop],
    },

    theodore_romzha_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Theodore Romzha',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    theodosius_of_the_caves_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Theodosius of the Caves',
      titles: [Titles.Abbot],
    },

    theotonius_of_coimbra_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Theotonius of Coimbra',
      titles: [Titles.Priest],
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thérèse of the Child Jesus and the Holy Face of Lisieux',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1897,
    },

    thomas_apostle: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas',
      titles: [Titles.Apostle],
    },

    thomas_aquinas_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas Aquinas',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1274,
    },

    thomas_becket_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas Becket',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1170,
    },

    thomas_hioji_rokuzayemon_nishi_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas Hioji Rokuzayemon Nishi',
      titles: [Titles.Priest, Titles.Martyr],
    },

    thomas_of_villanova_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thomas of Villanova',
      titles: [Titles.Bishop],
    },

    thorfinn_of_hamar_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thorfinn',
      titles: [Titles.Bishop],
    },

    thorlac_of_iceland_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Thorlac',
      titles: [Titles.Bishop],
    },

    timothy_of_ephesus_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Timothy',
      titles: [Titles.Bishop],
      dateOfDeath: { century: 1 },
    },

    titus_of_crete_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Titus',
      titles: [Titles.Bishop],
      dateOfDeath: { century: 1 },
    },

    translation_of_the_relics_of_saint_stephen_of_hungary: {
      name: 'Translation of the Relics of Saint Stephen of Hungary',
    },

    turibius_of_mogrovejo_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Turibius of Mogrovejo',
      titles: [Titles.Bishop],
      dateOfDeath: 1606,
    },

    ulrich_of_augsburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ulrich of Augsburg',
      titles: [Titles.Bishop],
    },

    ursula_of_cologne_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Ursula',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    valentine_of_raetia_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Valentine of Raetia',
      titles: [Titles.Bishop],
    },

    vincent_de_paul_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vincent de Paul',
      titles: [Titles.Priest],
      dateOfDeath: 1660,
    },

    vincent_ferrer_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vincent Ferrer',
      titles: [Titles.Priest],
      dateOfDeath: 1419,
    },

    vincent_kadlubek_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Vincent Kadłubek',
      titles: [Titles.Bishop],
    },

    vincent_lewoniuk_martyr: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Vincent Lewoniuk',
      titles: [Titles.Martyr],
    },

    vincent_of_saragossa_deacon: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vincent',
      titles: [Titles.Deacon, Titles.Martyr],
      dateOfDeath: 304,
    },

    vincent_pallotti_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vincent Pallotti',
      titles: [Titles.Priest],
    },

    virgilius_of_salzburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Virgilius of Salzburg',
      // name: 'Fergal', todo: indicated in romcal as 'Saint Fergal' in Ireland, => check what's the official name in Ireland
      titles: [Titles.Bishop],
    },

    visitation_of_mary: {
      name: 'Visitation of the Blessed Virgin Mary',
    },

    vitus_of_lucania_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vitus',
      titles: [Titles.Martyr],
    },

    vladimir_ghika_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Vladimir Ghika',
      titles: [Titles.Priest, Titles.Martyr],
    },

    vladimir_i_the_great_of_kiev: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Vladimir the Great',
    },

    waitangi_day: {
      name: 'Waitangi Day',
    },

    walpurga_of_heidenheim_abbess: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Walpurga of Heidenheim',
      titles: [Titles.Abbess],
    },

    wenceslaus_i_of_bohemia_martyr: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Wenceslaus',
      titles: [Titles.Martyr],
      dateOfDeath: 929,
    },

    wendelin_of_trier_abbot: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Wendelin',
      titles: [Titles.Abbot],
    },

    wilfrid_of_york_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Wilfrid',
      titles: [Titles.Bishop],
    },

    william_apor_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'William Apor',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    willibald_of_eichstatt_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Willibald',
      titles: [Titles.Bishop],
    },

    willibrord_of_utrecht_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Willibrord',
      titles: [Titles.Bishop],
    },

    winefride_of_flintshire_virgin: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Winefride',
      titles: [Titles.Virgin],
    },

    wladyslaw_bladzinski_priest: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Wladyslaw Błądziński',
      titles: [Titles.Priest, Titles.Martyr],
    },

    wolfgang_of_regensburg_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Wolfgang of Regensburg',
      titles: [Titles.Bishop],
    },

    wulstan_of_worcester_bishop: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Wulstan',
      titles: [Titles.Bishop],
    },

    yolanda_of_poland_religious: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Yolanda',
      titles: [Titles.Religious],
    },

    zdenka_cecilia_schelingova_virgin: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Zdenka Cecilia Schelingová',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    zdislava_of_lemberk: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Zdislava',
    },

    zepherin_namuncura: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Zepherin Namuncurá',
    },

    zoltan_lajos_meszlenyi_bishop: {
      canonizationLevel: CanonizationLevel.Blessed,
      name: 'Zoltán Lajos Meszlényi',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    zygmunt_gorazdowski_priest: {
      canonizationLevel: CanonizationLevel.Saint,
      name: 'Zygmunt Gorazdowski',
      titles: [Titles.Priest],
    },

    companions_martyrs: {
      name: 'Companions',
      titles: [Titles.Martyr],
      count: 'many',
    },
  };
}
