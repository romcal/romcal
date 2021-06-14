import { PatronTitles, Sex, Titles } from '../constants/martyrology-metadata';

export type MartyrologyItem = {
  /**
   * Temporarily property, will be move to the corresponding locale file
   * @deprecated
   */
  name: string;

  /**
   * Titles of the Saint or the Blessed
   */
  titles?: (Titles | PatronTitles)[];

  /**
   * Determine if the Saint or the Blessed is a male or a female.
   */
  sex?: Sex;

  /**
   * Specify if the titles should not be displayed.
   * It's generally the case when titles are already included in the name.
   */
  hideTitles?: boolean;

  /**
   * Date of Death, as a Number (year), a String (in 'YYYY-MM' or 'YYYY-MM-DD' format),
   * or an object describing date range, multiple possible date, or a century.
   */
  dateOfDeath?:
    | SaintDate
    | { between: [SaintDate, SaintDate] }
    | { or: SaintDate[] }
    | { century: number };

  /**
   * Specify if an approximative indicator should be added, when the date is displayed.
   * For example in English: 'c. 201'.
   */
  dateOfDeathIsApproximative?: boolean;

  /**
   * Number of person that this definition represent.
   * It could be set as 'many' if the number is not defined.
   */
  count?: SaintCount;
};

export type SaintCount = number | 'many';
export type SaintDate = number | string;
export type MartyrologyCatalog = Record<string, MartyrologyItem>;
export interface BaseMartyrology {
  catalog: MartyrologyCatalog;
}

export class Martyrology implements BaseMartyrology {
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
      name: 'Saint Joseph',
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
      name: 'Saint Peter',
      titles: [Titles.Apostle],
    },

    paul_apostle: {
      name: 'Saint Paul',
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
      name: '205 Blessed Martyrs of Japan',
    },

    adalbert_of_prague_bishop: {
      name: 'Saint Adalbert',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 997,
    },

    adolph_kolping_priest: {
      name: 'Blessed Adolph Kolping',
      titles: [Titles.Priest],
    },

    aelred_of_rievaulx_abbot: {
      name: 'Saint Aelred of Rievaulx',
      titles: [Titles.Abbot],
    },

    aengus_of_tallaght_bishop: {
      name: 'Saint Aengus',
      titles: [Titles.Bishop, Titles.Abbot],
    },

    agatha_of_sicily_virgin: {
      name: 'Saint Agatha',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 251,
    },

    agnes_cao_guiying_martyr: {
      name: 'Saint Agnes Cao Guiying',
      titles: [Titles.Martyr],
    },

    agnes_of_bohemia_virgin: {
      name: 'Saint Agnes of Bohemia',
      titles: [Titles.Virgin],
    },

    agnes_of_rome_virgin: {
      name: 'Saint Agnes',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    aidan_of_ferns_bishop: {
      name: 'Saint Aidan',
      titles: [Titles.Bishop],
    },

    aidan_of_lindisfarne_bishop: {
      name: 'Saint Aidan of Lindisfarne',
      titles: [Titles.Bishop, Titles.Missionary],
    },

    the_saints_of_lindisfarne: {
      name: 'the Saints of Lindisfarne',
      count: 'many',
    },

    ailbe_of_emly_bishop: {
      name: 'Saint Ailbe',
      titles: [Titles.Bishop],
    },

    alban_of_britain_martyr: {
      name: 'Saint Alban',
      titles: [Titles.Martyr],
    },

    julius_of_caerleon_martyr: {
      name: 'Saint Julius',
      titles: [Titles.Martyr],
    },

    aaron_of_caerleon_martyr: {
      name: 'Saint Aaron',
      titles: [Titles.Martyr],
    },

    alberic_crescitelli_priest: {
      name: 'Saint Alberic Crescitelli',
      titles: [Titles.Priest, Titles.Martyr],
    },

    albert_chmielowski_religious: {
      name: 'Saint Albert Chmielowski',
      titles: [Titles.Religious],
    },

    albert_the_great_bishop: {
      name: 'Saint Albert the Great',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1280,
    },

    albertina_berkenbrock_virgin: {
      name: 'Blessed Albertina Berkenbrock',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    alberto_hurtado_priest: {
      name: 'Saint Alberto Hurtado',
      titles: [Titles.Priest],
    },

    all_saints_of_ireland: {
      name: 'All Saints of Ireland',
      count: 'many',
    },

    all_saints_of_wales: {
      name: 'All Saints of Wales',
      count: 'many',
    },

    all_souls: {
      name: 'Commemoration of All the Faithful Departed',
    },

    aloysius_gonzaga_religious: {
      name: 'Saint Aloysius Gonzaga',
      titles: [Titles.Religious],
      dateOfDeath: 1591,
    },

    aloysius_stepinac_bishop: {
      name: 'Blessed Aloysius Stepinac',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    aloysius_versiglia_bishop: {
      name: 'Saint Aloysius Versiglia',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    callistus_caravario_priest: {
      name: 'Saint Callistus Caravario',
      titles: [Titles.Priest, Titles.Martyr],
    },

    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: {
      name: 'Saint Alphonsa of the Immaculate Conception Muttathupadathu',
      titles: [Titles.Virgin],
    },

    alphonsus_liguori_bishop: {
      name: 'Saint Alphonsus Liguori',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
    },

    amand_of_maastricht_bishop: {
      name: 'Saint Amand',
      titles: [Titles.Bishop],
      dateOfDeath: 676,
      dateOfDeathIsApproximative: true,
    },

    ambrose_of_milan_bishop: {
      name: 'Saint Ambrose',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 397,
    },

    andre_bessette_religious: {
      name: 'Saint André Bessette',
      titles: [Titles.Religious],
      dateOfDeath: 1937,
    },

    andre_grasset_priest: {
      name: 'Blessed André Grasset',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1792,
    },

    andrew_apostle: {
      name: 'Saint Andrew',
      titles: [Titles.Apostle],
    },

    andrew_bobola_priest: {
      name: 'Saint Andrew Bobola',
      titles: [Titles.Priest, Titles.Martyr],
    },

    andrew_de_soveral_priest: {
      name: 'Saint Andrew de Soveral',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ambrose_francis_ferro_priest: {
      name: 'Saint Ambrose Francis Ferro',
      titles: [Titles.Priest, Titles.Martyr],
    },

    andrew_dung_lac_priest: {
      name: 'Saint Andrew Dũng-Lạc',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    andrew_kim_tae_gon_priest: {
      name: 'Saint Andrew Kim Tae-gŏn',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    paul_chong_ha_sang_martyr: {
      name: 'Saint Paul Chŏng Ha-sang',
      titles: [Titles.Martyr],
      dateOfDeath: { between: [1745, 1862] },
    },

    andrew_zorard_of_nitra_hermit: {
      name: 'Saint Andrew Zorard',
      titles: [Titles.Hermit],
      dateOfDeath: 1009,
    },

    benedict_of_skalka_hermit: {
      name: 'Saint Benedict',
      titles: [Titles.Hermit],
      dateOfDeath: 1012,
    },

    angela_merici_virgin: {
      name: 'Saint Angela Merici',
      titles: [Titles.Virgin],
      dateOfDeath: 1540,
    },

    angela_salawa_virgin: {
      name: 'Blessed Angela Salawa',
      titles: [Titles.Virgin],
    },

    anno_of_cologne_bishop: {
      name: 'Saint Anno of Cologne',
      titles: [Titles.Bishop],
    },

    anselm_of_canterbury_bishop: {
      name: 'Saint Anselm',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1109,
    },

    ansgar_of_hamburg_bishop: {
      name: 'Saint Ansgar',
      titles: [Titles.Bishop],
      dateOfDeath: 865,
    },

    anthony_julian_nowowiejski_bishop: {
      name: 'Blessed Anthony Julian Nowowiejski',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    anthony_mary_claret_bishop: {
      name: 'Saint Anthony Mary Claret',
      titles: [Titles.Bishop],
      dateOfDeath: 1870,
    },

    anthony_of_egypt_abbot: {
      name: 'Saint Anthony',
      titles: [Titles.Abbot],
      dateOfDeath: 356,
    },

    anthony_of_padua_priest: {
      name: 'Saint Anthony of Padua',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1231,
    },

    anthony_of_saint_anne_galvao_priest: {
      name: 'Saint Anthony of Saint Anne Galvão',
      titles: [Titles.Priest],
    },

    anthony_of_the_caves_monk: {
      name: 'Saint Anthony of the Caves',
      titles: [Titles.Monk],
    },

    anthony_zaccaria_priest: {
      name: 'Saint Anthony Zaccaria',
      titles: [Titles.Priest],
      dateOfDeath: 1539,
    },

    apollinaris_of_ravenna_bishop: {
      name: 'Saint Apollinaris',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 81,
    },

    asaph_of_wales_bishop: {
      name: 'Saint Asaph',
      titles: [Titles.Bishop],
    },

    asicus_of_elphin_bishop: {
      name: 'Saint Asicus',
      titles: [Titles.Bishop],
    },

    athanasius_of_alexandria_bishop: {
      name: 'Saint Athanasius',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 373,
    },

    attracta_of_killaraght_virgin: {
      name: 'Saint Attracta',
      titles: [Titles.Virgin],
    },

    augustine_kazotic_bishop: {
      name: 'Blessed Augustine Kažotić',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    augustine_of_canterbury_bishop: {
      name: 'Saint Augustine of Canterbury',
      titles: [Titles.Bishop],
      dateOfDeath: 604,
    },

    augustine_of_hippo_bishop: {
      name: 'Saint Augustine',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 430,
    },

    augustine_zhao_rong_priest: {
      name: 'Saint Augustine Zhao Rong',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: { between: [1648, 1930] },
    },

    barbara_of_heliopolis_virgin: {
      name: 'Saint Barbara',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    barnabas_apostle: {
      name: 'Saint Barnabas',
      titles: [Titles.Apostle],
    },

    bartholomew_apostle: {
      name: 'Saint Bartholomew',
      titles: [Titles.Apostle],
    },

    bartholomew_dias_laurel_religious: {
      name: 'Blessed Bartholomew Días Laurel',
      titles: [Titles.Religious, Titles.Martyr],
    },

    bartholomew_of_the_martyrs_fernandes_bishop: {
      name: 'Saint Bartholomew of the Martyrs Fernandes',
      titles: [Titles.Bishop],
    },

    basil_the_great_bishop: {
      name: 'Saint Basil the Great',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 379,
    },

    gregory_nazianzen_bishop: {
      name: 'Saint Gregory Nazianzen',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 390,
    },

    beatrice_da_silva_meneses_virgin: {
      name: 'Saint Beatrice da Silva Meneses',
      titles: [Titles.Virgin],
    },

    bede_the_venerable_priest: {
      name: 'Saint Bede the Venerable',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 735,
    },

    benedict_of_jesus_valdivielso_saez_religious: {
      name: 'Saint Benedict of Jesus Valdivielso Sáez',
      titles: [Titles.Religious, Titles.Martyr],
    },

    benedict_of_nursia_abbot: {
      name: 'Saint Benedict',
      titles: [Titles.Abbot],
      dateOfDeath: 547,
      dateOfDeathIsApproximative: true,
    },

    benno_of_meissen_bishop: {
      name: 'Saint Benno of Meissen',
      titles: [Titles.Bishop],
    },

    bernadette_soubirous_virgin: {
      name: 'Saint Bernadette Soubirous',
      titles: [Titles.Virgin],
      dateOfDeath: 1879,
    },

    bernard_of_clairvaux_abbot: {
      name: 'Saint Bernard',
      titles: [Titles.Abbot, Titles.DoctorOfTheChurch],
      dateOfDeath: 1153,
    },

    bernardine_of_siena_priest: {
      name: 'Saint Bernardine of Siena',
      titles: [Titles.Priest],
      dateOfDeath: 1444,
    },

    beuno_of_wales_abbot: {
      name: 'Saint Beuno',
      titles: [Titles.Abbot],
    },

    blaise_of_sebaste_bishop: {
      name: 'Saint Blaise',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 316,
    },

    bogumilus_of_dobrow_bishop: {
      name: 'Blessed Bogumilus',
      titles: [Titles.Bishop],
    },

    boleslawa_mary_lament_virgin: {
      name: 'Blessed Boleslawa Mary Lament',
      titles: [Titles.Virgin],
    },

    bonaventure_of_bagnoregio_bishop: {
      name: 'Saint Bonaventure',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1274,
    },

    boniface_of_mainz_bishop: {
      name: 'Saint Boniface',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 754,
    },

    boris_of_kiev_martyr: {
      name: 'Saint Boris',
      titles: [Titles.Martyr],
    },

    gleb_of_kiev_martyr: {
      name: 'Saint Gleb',
      titles: [Titles.Martyr],
    },

    brendan_of_clonfert_abbot: {
      name: 'Saint Brendan',
      titles: [Titles.Abbot],
    },

    bridget_of_sweden_religious: {
      name: 'Saint Bridget',
      titles: [Titles.Religious],
      dateOfDeath: 1373,
    },

    brigid_of_kildare_virgin: {
      name: 'Saint Brigid',
      titles: [Titles.Virgin],
    },

    bronislava_of_poland_virgin: {
      name: 'Blessed Bronislava',
      titles: [Titles.Virgin],
    },

    bronislaw_markiewicz_priest: {
      name: 'Blessed Bronisław Markiewicz',
      titles: [Titles.Priest],
    },

    bruno_of_cologne_priest: {
      name: 'Saint Bruno',
      titles: [Titles.Priest],
      dateOfDeath: 1101,
    },

    bruno_of_querfurt_bishop: {
      name: 'Saint Bruno of Querfurt',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    caesarius_of_arles_bishop: {
      name: 'Saint Caesarius of Arles',
      titles: [Titles.Bishop],
      dateOfDeath: 542,
    },

    cajetan_of_thiene_priest: {
      name: 'Saint Cajetan',
      titles: [Titles.Priest],
      dateOfDeath: 1547,
    },

    callistus_i_pope: {
      name: 'Saint Callistus I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 222,
    },

    camillus_de_lellis_priest: {
      name: 'Saint Camillus de Lellis',
      titles: [Titles.Priest],
      dateOfDeath: 1614,
    },

    canice_of_kilkenny_abbot: {
      name: 'Saint Canice',
      titles: [Titles.Abbot],
    },

    canute_iv_of_denmark_martyr: {
      name: 'Saint Canute',
      titles: [Titles.Martyr],
    },

    carlos_manuel_rodriguez_santiago: {
      name: 'Blessed Carlos Manuel Rodríguez Santiago',
    },

    caroline_kozka_virgin: {
      name: 'Blessed Caroline Kózka',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    carthage_of_lismore_bishop: {
      name: 'Saint Carthage',
      titles: [Titles.Bishop],
    },

    casimir_of_poland: {
      name: 'Saint Casimir',
      dateOfDeath: 1484,
    },

    catherine_of_alexandria_virgin: {
      name: 'Saint Catherine of Alexandria',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 305,
      dateOfDeathIsApproximative: true,
    },

    catherine_of_saint_augustine_de_simon_de_longpre_virgin: {
      name: 'Blessed Catherine of Saint Augustine',
      titles: [Titles.Virgin],
      dateOfDeath: 1668,
    },

    catherine_of_siena_virgin: {
      name: 'Saint Catherine of Siena',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1380,
    },

    ceallach_of_armagh_bishop: {
      name: 'Saint Ceallach',
      titles: [Titles.Bishop],
    },

    cecilia_of_rome_virgin: {
      name: 'Saint Cecilia',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 230,
    },

    ceferino_gimenez_malla_martyr: {
      name: 'Blessed Ceferino Giménez Malla',
      titles: [Titles.Martyr],
    },

    ceslaus_of_poland_priest: {
      name: 'Blessed Ceslaus',
      titles: [Titles.Priest],
    },

    chad_of_mercia_bishop: {
      name: 'Saint Chad',
      titles: [Titles.Bishop],
    },

    cedd_of_lastingham_bishop: {
      name: 'Saint Cedd',
      titles: [Titles.Bishop],
    },

    chair_of_saint_peter_the_apostle: {
      name: 'Chair of Saint Peter the Apostle',
    },

    charles_borromeo_bishop: {
      name: 'Saint Charles Borromeo',
      titles: [Titles.Bishop],
      dateOfDeath: 1584,
    },

    charles_i_of_austria: {
      name: 'Blessed Charles of Austria',
    },

    charles_lwanga_martyr: {
      name: 'Saint Charles Lwanga',
      dateOfDeath: 618,
    },

    jerome_de_angelis_priest: {
      name: 'Blessed Jerome de Angelis',
      titles: [Titles.Priest, Titles.Martyr],
    },

    charles_spinola_priest: {
      name: 'Blessed Charles Spinola',
      titles: [Titles.Priest, Titles.Martyr],
    },

    christopher_magallanes_priest: {
      name: 'Saint Christopher Magallanes',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1927,
    },

    christopher_of_palestine_martyr: {
      name: 'Saint Christopher',
      titles: [Titles.Martyr],
    },

    ciaran_of_clonmacnoise_abbot: {
      name: 'Saint Ciaran',
      titles: [Titles.Abbot],
    },

    clare_of_assisi_virgin: {
      name: 'Saint Clare',
      titles: [Titles.Virgin],
    },

    clement_i_pope: {
      name: 'Saint Clement I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 97,
    },

    clement_mary_hofbauer_priest: {
      name: 'Saint Clement Mary Hofbauer',
      titles: [Titles.Priest],
    },

    clement_of_ohrid_bishop: {
      name: 'Saint Clement of Ohrid',
      titles: [Titles.Bishop],
    },

    gorazd_of_moravia_bishop: {
      name: 'Saint Gorazd',
      titles: [Titles.Bishop],
    },

    clotilde_of_burgundy: {
      name: 'Saint Clotilde',
      dateOfDeath: 545,
    },

    colman_of_cloyne_bishop: {
      name: 'Saint Colman of Cloyne',
      titles: [Titles.Bishop],
    },

    colman_of_dromore_bishop: {
      name: 'Saint Colman of Dromore',
      titles: [Titles.Bishop],
    },

    colman_of_kilmacduagh_bishop: {
      name: 'Saint Colman of Kilmacduagh',
      titles: [Titles.Bishop],
    },

    columba_marmion_priest: {
      name: 'Blessed Columba Marmion',
      titles: [Titles.Priest],
    },

    columba_of_iona_abbot: {
      name: 'Saint Columba',
      titles: [Titles.Abbot],
      dateOfDeath: 615,
    },

    columban_of_luxeuil_abbot: {
      name: 'Saint Columban',
      titles: [Titles.Abbot],
    },

    comgall_of_bangor_abbot: {
      name: 'Saint Comgall',
      titles: [Titles.Abbot],
    },

    conleth_of_kildare_bishop: {
      name: 'Saint Conleth',
      titles: [Titles.Bishop],
    },

    conrad_of_constance_bishop: {
      name: 'Saint Conrad of Constance',
      titles: [Titles.Bishop],
    },

    gebhard_of_constance_bishop: {
      name: 'Saint Gebhard of Constance',
      titles: [Titles.Bishop],
    },

    conrad_of_parzham_religious: {
      name: 'Saint Conrad of Parzham',
      titles: [Titles.Religious],
    },

    conversion_of_saint_paul_the_apostle: {
      name: 'Conversion of Saint Paul the Apostle',
    },

    corbinian_of_freising_bishop: {
      name: 'Saint Corbinian',
      titles: [Titles.Bishop],
    },

    cornelius_i_pope: {
      name: 'Saint Cornelius',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: '253-06',
    },

    cyprian_of_carthage_bishop: {
      name: 'Saint Cornelius',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: '258-09-14',
    },

    cosmas_of_cilicia_martyr: {
      name: 'Saint Cosmas',
      titles: [Titles.Martyr],
    },

    damian_of_cilicia_martyr: {
      name: 'Saint Damian',
      titles: [Titles.Martyr],
    },

    cuthbert_of_lindisfarne_bishop: {
      name: 'Saint Cuthbert',
      titles: [Titles.Bishop],
    },

    cyril_of_alexandria_bishop: {
      name: 'Saint Cyril of Alexandria',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 444,
    },

    cyril_of_jerusalem_bishop: {
      name: 'Saint Cyril of Jerusalem',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 387,
    },

    cyril_the_philosopher_monk: {
      name: 'Saint Cyril',
      titles: [Titles.Monk],
      dateOfDeath: '869-02-14',
    },

    methodius_of_thessaloniki_bishop: {
      name: 'Saint Methodius',
      titles: [Titles.Bishop],
      dateOfDeath: '885-04-06',
    },

    damasus_i_pope: {
      name: 'Saint Damasus I',
      titles: [Titles.Pope],
      dateOfDeath: 384,
    },

    damien_de_veuster_priest: {
      name: 'Saint Damien de Veuster',
      titles: [Titles.Priest],
      dateOfDeath: 1889,
    },

    david_lewis_priest: {
      name: 'Saint David Lewis',
      titles: [Titles.Priest, Titles.Martyr],
    },

    david_of_wales_bishop: {
      name: 'Saint David',
      titles: [Titles.Bishop],
    },

    davnet_of_sliabh_beagh_virgin: {
      name: 'Saint Davnet',
      titles: [Titles.Virgin],
    },

    declan_of_ardmore_bishop: {
      name: 'Saint Declan',
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
      name: 'Saint Deiniol',
      titles: [Titles.Bishop],
    },

    demetrius_of_thessaloniki_martyr: {
      name: 'Saint Demetrius of Thessaloniki',
      titles: [Titles.Martyr],
    },

    denis_of_paris_bishop: {
      name: 'Saint Denis',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: { or: [250, 258, 270] },
    },

    dina_belanger_virgin: {
      name: 'Blessed Dina Bélanger',
      titles: [Titles.Virgin],
      dateOfDeath: 1929,
    },

    dionysius_the_areopagite_bishop: {
      name: 'Saint Dionysius the Areopagite',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    dominic_de_guzman_priest: {
      name: 'Saint Dominic',
      titles: [Titles.Priest],
      dateOfDeath: 1221,
    },

    dominic_of_the_mother_of_god_barberi_priest: {
      name: 'Blessed Dominic of the Mother of God Barberi',
      titles: [Titles.Priest],
    },

    dunstan_of_canterbury_bishop: {
      name: 'Saint Dunstan',
      titles: [Titles.Bishop],
    },

    dyfrig_of_wales_bishop: {
      name: 'Saint Dyfrig',
      titles: [Titles.Bishop],
    },

    edmund_bojanowski: {
      name: 'Blessed Edmund Bojanowski',
    },

    edmund_campion_priest: {
      name: 'Saint Edmund Campion',
      titles: [Titles.Priest, Titles.Martyr],
    },

    edmund_ignatius_rice_religious: {
      name: 'Blessed Edmund Rice',
      titles: [Titles.Religious],
    },

    edmund_of_abingdon_bishop: {
      name: 'Saint Edmund of Abingdon',
      titles: [Titles.Bishop],
    },

    edward_the_confessor: {
      name: 'Saint Edward the Confessor',
    },

    elijah_prophet: {
      name: 'Saint Elijah',
      titles: [Titles.Prophet],
    },

    elizabeth_ann_seton_religious: {
      name: 'Saint Elizabeth Ann Seton',
      titles: [Titles.Religious],
    },

    elizabeth_hesselblad_religious: {
      name: 'Saint Elizabeth Hesselblad',
      titles: [Titles.Religious],
    },

    elizabeth_of_hungary_religious: {
      name: 'Saint Elizabeth of Hungary',
      titles: [Titles.Religious],
      dateOfDeath: 1231,
    },

    elizabeth_of_portugal: {
      name: 'Saint Elizabeth of Portugal',
      dateOfDeath: 1336,
    },

    emeric_of_hungary: {
      name: 'Saint Emeric',
    },

    emilie_tavernier_gamelin_religious: {
      name: 'Blessed Émilie Tavernier-Gamelin',
      titles: [Titles.Religious],
      dateOfDeath: 1851,
    },

    enda_of_aran_abbot: {
      name: 'Saint Enda',
      titles: [Titles.Abbot],
    },

    english_martyrs: {
      name: 'English Martyrs',
      titles: [Titles.Martyr],
      hideTitles: true,
      count: 'many',
    },

    eoghan_of_ardstraw_bishop: {
      name: 'Saint Eoghan',
      titles: [Titles.Bishop],
    },

    ephrem_the_syrian_deacon: {
      name: 'Saint Ephrem',
      titles: [Titles.Deacon, Titles.DoctorOfTheChurch],
      dateOfDeath: 373,
    },

    eric_ix_of_sweden_martyr: {
      name: 'Saint Eric IX of Sweden',
      titles: [Titles.Martyr],
    },

    etheldreda_of_ely_abbess: {
      name: 'Saint Etheldreda',
      titles: [Titles.Abbess],
    },

    eugene_de_mazenod_bishop: {
      name: 'Saint Eugène de Mazenod',
      titles: [Titles.Bishop],
      dateOfDeath: 1861,
    },

    eulalia_of_merida_virgin: {
      name: 'Saint Eulalia of Merida',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    eulogius_of_cordoba_bishop: {
      name: 'Saint Eulogius of Córdoba',
      titles: [Titles.Bishop],
    },

    eusebius_of_esztergom_priest: {
      name: 'Blessed Eusebius of Esztergom',
      titles: [Titles.Priest],
    },

    eusebius_of_vercelli_bishop: {
      name: 'Saint Eusebius of Vercelli',
      titles: [Titles.Bishop],
      dateOfDeath: 371,
    },

    eysteinn_of_nidaros_bishop: {
      name: 'Saint Eysteinn of Nidaros',
      titles: [Titles.Bishop],
    },

    ezequiel_moreno_bishop: {
      name: 'Saint Ezequiel Moreno',
      titles: [Titles.Bishop],
    },

    fabian_i_pope: {
      name: 'Saint Fabian',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 250,
    },

    fachanan_of_kilfenora_bishop: {
      name: 'Saint Fachanan',
      titles: [Titles.Bishop],
    },

    fachtna_of_rosscarbery_bishop: {
      name: 'Saint Fachtna',
      titles: [Titles.Bishop],
    },

    faustina_kowalska_virgin: {
      name: 'Saint Faustina Kowalska',
      titles: [Titles.Virgin],
      dateOfDeath: 1938,
    },

    ferdinand_iii_of_castile: {
      name: 'Saint Ferdinand III of Castile',
    },

    fiacre_of_breuil_monk: {
      name: 'Saint Fiacre',
      titles: [Titles.Monk],
    },

    fidelis_of_sigmaringen_priest: {
      name: 'Saint Fidelis of Sigmaringen',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1622,
    },

    finbarr_of_cork_bishop: {
      name: 'Saint Finbarr',
      titles: [Titles.Bishop],
    },

    finding_of_the_holy_cross: {
      name: 'Finding of the Holy Cross',
    },

    finnian_of_clonard_bishop: {
      name: 'Saint Finian',
      titles: [Titles.Bishop],
    },

    fintan_of_clonenagh_abbot: {
      name: 'Saint Fintan',
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
      name: 'Saints Benedict, John, Matthew, Isaac and Christian, the First Polish Martyrs',
      titles: [Titles.Martyr],
      hideTitles: true,
      count: 5,
    },

    five_wounds_of_the_lord: {
      name: 'Five Wounds of the Lord',
    },

    flannan_of_killaloe_bishop: {
      name: 'Saint Flannan',
      titles: [Titles.Bishop],
    },

    florian_of_lorch_martyr: {
      name: 'Saint Florian',
      titles: [Titles.Martyr],
    },

    frances_of_rome_religious: {
      name: 'Saint Frances of Rome',
      titles: [Titles.Religious],
      dateOfDeath: 1440,
    },

    frances_xavier_cabrini_virgin: {
      name: 'Saint Frances Xavier Cabrini',
      titles: [Titles.Virgin],
    },

    francis_borgia_priest: {
      name: 'Saint Francis Borgia',
      titles: [Titles.Priest],
    },

    francis_de_sales_bishop: {
      name: 'Saint Francis de Sales',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1622,
    },

    francis_diaz_del_rincon_priest: {
      name: 'Saint Francis Díaz del Rincon',
      titles: [Titles.Priest, Titles.Martyr],
    },

    francis_ferdinand_de_capillas_priest: {
      name: 'Saint Francis Ferdinand de Capillas',
      titles: [Titles.Priest, Titles.Martyr],
    },

    francis_of_assisi: {
      name: 'Saint Francis of Assisi',
      dateOfDeath: 1226,
    },

    francis_of_paola_hermit: {
      name: 'Saint Francis of Paola',
      titles: [Titles.Hermit],
      dateOfDeath: 1507,
    },

    francis_solanus_priest: {
      name: 'Saint Francis Solanus',
      titles: [Titles.Priest],
    },

    francis_xavier_priest: {
      name: 'Saint Francis Xavier',
      titles: [Titles.Priest],
      dateOfDeath: 1552,
    },

    francis_xavier_seelos_priest: {
      name: 'Blessed Francis Xavier Seelos',
      titles: [Titles.Priest],
    },

    francois_de_montmorency_laval_bishop: {
      name: 'Saint François de Laval',
      titles: [Titles.Bishop],
      dateOfDeath: 1708,
    },

    frederic_janssoone_priest: {
      name: 'Blessed Frédéric Janssoone',
      titles: [Titles.Priest],
      dateOfDeath: 1916,
    },

    fridolin_of_sackingen_monk: {
      name: 'Saint Fridolin of Säckingen',
      titles: [Titles.Monk],
    },

    fructuosus_of_braga_bishop: {
      name: 'Saint Fructuosus of Braga',
      titles: [Titles.Bishop],
    },

    martin_of_braga_bishop: {
      name: 'Saint Martin of Braga',
      titles: [Titles.Bishop],
    },

    gerald_of_braga_bishop: {
      name: 'Saint Gerald of Braga',
      titles: [Titles.Bishop],
    },

    fructuosus_of_tarragona_bishop: {
      name: 'Saint Fructuosus',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    augurius_of_tarragona_deacon: {
      name: 'Saint Augurius',
      titles: [Titles.Deacon, Titles.Martyr],
    },

    eulogius_of_tarragona_deacon: {
      name: 'Saint Eulogius',
      titles: [Titles.Deacon, Titles.Martyr],
    },

    fursa_of_peronne_abbot: {
      name: 'Saint Fursa',
      titles: [Titles.Abbot, Titles.Missionary],
    },

    gabriel_taurin_dufresse_bishop: {
      name: 'Saint Gabriel-Taurin Dufresse',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    gall_of_switzerland_abbot: {
      name: 'Saint Gall',
      titles: [Titles.Abbot, Titles.Missionary],
    },

    genevieve_of_paris_virgin: {
      name: 'Saint Genevieve',
      titles: [Titles.Virgin],
      dateOfDeath: 500,
    },

    george_matulaitis_bishop: {
      name: 'Blessed George Matulaitis',
      titles: [Titles.Bishop],
    },

    george_of_lydda_martyr: {
      name: 'Saint George',
      titles: [Titles.Martyr],
      dateOfDeath: 303,
    },

    george_preca_priest: {
      name: 'Saint George Preca',
      titles: [Titles.Priest],
    },

    gerard_of_csanad_bishop: {
      name: 'Saint Gerard of Csanád',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    germanus_of_auxerre_bishop: {
      name: 'Saint Germanus of Auxerre',
      titles: [Titles.Bishop],
    },

    gertrude_of_nivelles_abbess: {
      name: 'Saint Gertrude of Nivelles',
      titles: [Titles.Abbess],
      dateOfDeath: 659,
    },

    gertrude_the_great_virgin: {
      name: 'Saint Gertrude',
      titles: [Titles.Virgin],
      dateOfDeath: 1301,
    },

    gisela_of_hungary: {
      name: 'Blessed Gisela',
    },

    gobnait_of_ballyvourney_virgin: {
      name: 'Saint Gobnait',
      titles: [Titles.Virgin],
    },

    gorazd_of_moravia: {
      name: 'Saint Gorazd',
    },

    gotthard_of_hildesheim_bishop: {
      name: 'Saint Gotthard',
      titles: [Titles.Bishop],
    },

    gratia_of_cattaro_religious: {
      name: 'Blessed Gratia of Cattaro',
      titles: [Titles.Religious],
    },

    gregory_grassi_bishop: {
      name: 'Saint Gregory Grassi',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    francis_fogolla_bishop: {
      name: 'Saint Francis Fogolla',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    anthony_fantosati_bishop: {
      name: 'Saint Anthony Fantosati',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    gregory_i_the_great_pope: {
      name: 'Saint Gregory the Great',
      titles: [Titles.Pope, Titles.DoctorOfTheChurch],
      dateOfDeath: 604,
    },

    gregory_of_narek_abbot: {
      name: 'Saint Gregory of Narek',
      titles: [Titles.Abbot, Titles.DoctorOfTheChurch],
    },

    gregory_vii_pope: {
      name: 'Saint Gregory VII',
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
      name: 'Saint Gundisalvus Garcia',
      titles: [Titles.Martyr],
    },

    gundisalvus_of_amarante_priest: {
      name: 'Blessed Gundisalvus of Amarante',
      titles: [Titles.Priest],
    },

    gundisalvus_of_lagos_priest: {
      name: 'Blessed Gundisalvus of Lagos',
      titles: [Titles.Priest],
    },

    hedwig_of_poland: {
      name: 'Saint Hedwig of Poland',
    },

    hedwig_of_silesia_religious: {
      name: 'Saint Hedwig',
      titles: [Titles.Religious],
      dateOfDeath: 1243,
    },

    helena_of_constantinople: {
      name: 'Saint Helena',
    },

    hemma_of_gurk: {
      name: 'Saint Hemma of Gurk',
    },

    hemming_of_turku_bishop: {
      name: 'Blessed Hemming of Turku',
      titles: [Titles.Bishop],
    },

    henry_ii_emperor: {
      name: 'Saint Henry',
      dateOfDeath: 1024,
    },

    cunigunde_of_luxembourg: {
      name: 'Saint Cunigunde',
    },

    henry_of_finland_bishop: {
      name: 'Saint Henry',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1156,
    },

    henry_suso_priest: {
      name: 'Blessed Henry Suso',
      titles: [Titles.Priest],
    },

    hermann_joseph_of_steinfeld_priest: {
      name: 'Saint Hermann Joseph',
      titles: [Titles.Priest],
    },

    hermenegild_the_visigoths_martyr: {
      name: 'Saint Hermenegild',
      titles: [Titles.Martyr],
    },

    hilary_of_poitiers_bishop: {
      name: 'Saint Hilary',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 367,
    },

    hilda_of_whitby_abbess: {
      name: 'Saint Hilda',
      titles: [Titles.Abbess],
    },

    hildegard_of_bingen_abbess: {
      name: 'Saint Hildegard of Bingen',
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
      name: 'Blessed Honorat Koźmiński',
      titles: [Titles.Priest],
    },

    hosanna_of_cattaro_virgin: {
      name: 'Blessed Hosanna of Cattaro',
      titles: [Titles.Virgin],
    },

    hroznata_of_bohemia_martyr: {
      name: 'Blessed Hroznata',
      titles: [Titles.Martyr],
    },

    hubert_of_liege_bishop: {
      name: 'Saint Hubert',
      titles: [Titles.Bishop],
      dateOfDeath: 727,
    },

    hugh_of_lincoln_bishop: {
      name: 'Saint Hugh of Lincoln',
      titles: [Titles.Bishop],
    },

    hungarian_saints_and_blesseds: {
      name: 'Hungarian Saints and Blesseds',
      count: 'many',
    },

    hyacinth_of_poland_priest: {
      name: 'Saint Hyacinth',
      titles: [Titles.Priest],
    },

    ignatius_de_azevedo_priest: {
      name: 'Blessed Ignatius de Azevedo',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ignatius_falzon: {
      name: 'Blessed Ignatius Falzon',
    },

    ignatius_of_antioch_bishop: {
      name: 'Saint Ignatius of Antioch',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 115,
    },

    ignatius_of_loyola_priest: {
      name: 'Saint Ignatius of Loyola',
      titles: [Titles.Priest],
      dateOfDeath: 1556,
    },

    ildephonsus_of_toledo_bishop: {
      name: 'Saint Ildephonsus of Toledo',
      titles: [Titles.Bishop],
    },

    illtud_the_knight_abbot: {
      name: 'Saint Illtud',
      titles: [Titles.Abbot],
    },

    innocent_xi_pope: {
      name: 'Blessed Innocent XI',
      titles: [Titles.Pope],
    },

    irenaeus_of_lyon_bishop: {
      name: 'Saint Irenaeus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 201,
      dateOfDeathIsApproximative: true,
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
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 636,
    },

    isidore_the_farmer: {
      name: 'Saint Isidore',
    },

    istvan_sandor_religious: {
      name: 'Blessed István Sándor',
      titles: [Titles.Religious, Titles.Martyr],
    },

    ita_of_killeedy_virgin: {
      name: 'Saint Ita',
      titles: [Titles.Virgin],
    },

    ivan_merz: {
      name: 'Blessed Ivan Merz',
    },

    ivo_of_kermartin_priest: {
      name: 'Saint Ivo',
      titles: [Titles.Priest],
      dateOfDeath: 1303,
    },

    jacinta_marto: {
      name: 'Saint Jacinta Marto',
    },

    francisco_marto: {
      name: 'Saint Francisco Marto',
    },

    james_apostle: {
      name: 'Saint James',
      titles: [Titles.Apostle],
      dateOfDeath: 44,
    },

    james_strzemie_bishop: {
      name: 'Blessed James Strzemię',
      titles: [Titles.Bishop],
    },

    jane_frances_de_chantal_religious: {
      name: 'Saint Jane Frances de Chantal',
      titles: [Titles.Religious],
      dateOfDeath: 1641,
    },

    januarius_i_of_benevento_bishop: {
      name: 'Saint Januarius',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 305,
    },

    jarlath_of_tuam_bishop: {
      name: 'Saint Jarlath',
      titles: [Titles.Bishop],
    },

    jerome_emiliani: {
      name: 'Saint Jerome Emiliani',
      dateOfDeath: 1537,
    },

    jerome_of_stridon_priest: {
      name: 'Saint Jerome',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 420,
    },

    joachim_father_of_mary: {
      name: 'Saint Joachim',
      titles: [Titles.ParentsOfTheBlessedVirginMary],
      dateOfDeath: { century: 1 },
    },

    anne_mother_of_mary: {
      name: 'Saint Anne',
      titles: [Titles.ParentsOfTheBlessedVirginMary],
      dateOfDeath: { century: 1 },
    },

    joachim_he_kaizhi_martyr: {
      name: 'Saint Joachim He Kaizhi',
      titles: [Titles.Martyr],
    },

    joan_of_arc_virgin: {
      name: 'Saint Joan of Arc',
      titles: [Titles.Virgin],
      dateOfDeath: 1431,
    },

    joan_of_portugal_virgin: {
      name: 'Blessed Joan of Portugal',
      titles: [Titles.Virgin],
    },

    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: {
      name: 'Saint Joaquina of Saint Francis of Assisi de Vedruna',
      titles: [Titles.Religious],
    },

    john_apostle: {
      name: 'Saint John',
      titles: [Titles.Apostle, Titles.Evangelist],
    },

    john_baptist_de_la_salle_priest: {
      name: 'Saint John Baptist de la Salle',
      titles: [Titles.Priest],
      dateOfDeath: 1719,
    },

    john_berchmans_religious: {
      name: 'Saint John Berchmans',
      titles: [Titles.Religious],
      dateOfDeath: 1621,
    },

    john_beyzym_priest: {
      name: 'Blessed John Beyzym',
      titles: [Titles.Priest],
    },

    john_bosco_priest: {
      name: 'Saint John Bosco',
      titles: [Titles.Priest],
      dateOfDeath: 1888,
    },

    john_brenner_priest: {
      name: 'Blessed John Brenner',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_cassian_priest: {
      name: 'Saint John Cassian',
      titles: [Titles.Priest],
    },

    john_chrysostom_bishop: {
      name: 'Saint John Chrysostom',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 407,
    },

    john_damascene_priest: {
      name: 'Saint John Damascene',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 749,
    },

    john_de_brebeuf_priest: {
      name: 'Saint John de Brébeuf',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: '1649-03-16',
    },

    isaac_jogues_priest: {
      name: 'Saint Isaac Jogues',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: '1646-10-18',
    },

    john_de_britto_priest: {
      name: 'Saint John de Brito',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_eudes_priest: {
      name: 'Saint John Eudes',
      titles: [Titles.Priest],
      dateOfDeath: 1680,
    },

    john_fisher_bishop: {
      name: 'Saint John Fisher',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: '1535-06-22',
    },

    thomas_more_martyr: {
      name: 'Saint Thomas More',
      titles: [Titles.Martyr],
      dateOfDeath: '1537-07-6',
    },

    john_gabriel_perboyre_priest: {
      name: 'Saint John Gabriel Perboyre',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_henry_newman_priest: {
      name: 'Saint John Henry Newman',
      titles: [Titles.Priest],
    },

    john_i_pope: {
      name: 'Saint John I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 526,
    },

    john_jones_priest: {
      name: 'Saint John Jones',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_leonardi_priest: {
      name: 'Saint John Leonardi',
      titles: [Titles.Priest],
      dateOfDeath: 1609,
    },

    john_macias_religious: {
      name: 'Saint John Macías',
      titles: [Titles.Religious],
    },

    john_martin_moye_priest: {
      name: 'Blessed John Martin Moye',
      titles: [Titles.Priest],
    },

    john_mary_vianney_priest: {
      name: 'Saint John Vianney',
      titles: [Titles.Priest],
      dateOfDeath: 1859,
    },

    john_nepomucene_neumann_bishop: {
      name: 'Saint John Neumann',
      titles: [Titles.Bishop],
    },

    john_nepomucene_priest: {
      name: 'Saint John Nepomucene',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_of_avila_priest: {
      name: 'Saint John of Ávila',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
    },

    john_of_capistrano_priest: {
      name: 'Saint John of Capistrano',
      titles: [Titles.Priest],
      dateOfDeath: 1456,
    },

    john_of_dukla_priest: {
      name: 'Saint John of Dukla',
      titles: [Titles.Priest],
    },

    john_of_god_duoarte_cidade_religious: {
      name: 'Saint John of God',
      titles: [Titles.Religious],
      dateOfDeath: 1550,
    },

    john_of_kanty_priest: {
      name: 'Saint John of Kanty',
      titles: [Titles.Priest],
      dateOfDeath: 1473,
    },

    john_of_the_cross_priest: {
      name: 'Saint John of the Cross',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1591,
    },

    john_of_triora_priest: {
      name: 'Saint John of Triora',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_ogilvie_priest: {
      name: 'Saint John Ogilvie',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_paul_ii_pope: {
      name: 'Saint John Paul II',
      titles: [Titles.Pope],
      dateOfDeath: 2005,
    },

    john_roberts_priest: {
      name: 'Saint John Roberts',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_sarkander_priest: {
      name: 'Saint John Sarkander',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_scheffler_bishop: {
      name: 'Blessed John Scheffler',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    john_xxiii_pope: {
      name: 'Saint John XXIII',
      titles: [Titles.Pope],
      dateOfDeath: 1963,
    },

    josaphat_kuntsevych_bishop: {
      name: 'Saint Josaphat',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1623,
    },

    jose_maria_de_yermo_y_parres_priest: {
      name: 'Saint José Maria de Yermo y Parres',
      titles: [Titles.Priest],
    },

    josemaria_escriva_de_balaguer_priest: {
      name: 'Saint Josemaría Escrivá de Balaguer',
      titles: [Titles.Priest],
    },

    joseph_bilczewski_bishop: {
      name: 'Saint Joseph Bilczewski',
      titles: [Titles.Bishop],
    },

    joseph_de_anchieta_priest: {
      name: 'Saint Joseph de Anchieta',
      titles: [Titles.Priest],
    },

    joseph_freinademetz_priest: {
      name: 'Saint Joseph Freinademetz',
      titles: [Titles.Priest],
    },

    joseph_of_calasanz_priest: {
      name: 'Saint Joseph of Calasanz',
      titles: [Titles.Priest],
      dateOfDeath: 1648,
    },

    joseph_sebastian_pelczar_bishop: {
      name: 'Saint Joseph Sebastian Pelczar',
      titles: [Titles.Bishop],
    },

    joseph_the_worker: {
      name: 'Saint Joseph the Worker',
    },

    joseph_vaz_priest: {
      name: 'Saint Joseph Vaz',
      titles: [Titles.Priest],
    },

    joseph_yuan_gengyin_priest: {
      name: 'Saint Joseph Yuan Gengyin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    joseph_zhang_dapeng_martyr: {
      name: 'Saint Joseph Zhang Dapeng',
      titles: [Titles.Martyr],
    },

    josephine_bakhita_virgin: {
      name: 'Saint Josephine Bakhita',
      titles: [Titles.Virgin],
      dateOfDeath: 1947,
    },

    juan_diego_cuauhtlatoatzin: {
      name: 'Saint Juan Diego Cuauhtlatoatzin',
      dateOfDeath: 1548,
    },

    juliana_of_liege_virgin: {
      name: 'Saint Juliana of Liège',
      titles: [Titles.Virgin],
      dateOfDeath: 1258,
    },

    julie_billiart_virgin: {
      name: 'Saint Julie Billiart',
      titles: [Titles.Virgin],
      dateOfDeath: 1816,
    },

    junipero_serra_priest: {
      name: 'Saint Junípero Serra',
      titles: [Titles.Priest],
    },

    justin_martyr: {
      name: 'Saint Justin',
      titles: [Titles.Martyr],
      dateOfDeath: 165,
    },

    kateri_tekakwitha_virgin: {
      name: 'Saint Kateri Tekakwitha',
      titles: [Titles.Virgin],
      dateOfDeath: 1680,
    },

    katharine_drexel_virgin: {
      name: 'Saint Katharine Drexel',
      titles: [Titles.Virgin],
    },

    kentigern_of_scotland_bishop: {
      name: 'Saint Kentigern',
      titles: [Titles.Bishop],
    },

    kevin_of_glendalough_abbot: {
      name: 'Saint Kevin',
      titles: [Titles.Abbot],
    },

    kieran_of_saigir_bishop: {
      name: 'Saint Kieran',
      titles: [Titles.Bishop],
    },

    kilian_of_wurzburg_bishop: {
      name: 'Saint Kilian',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    kinga_of_poland_virgin: {
      name: 'Saint Kinga',
      titles: [Titles.Virgin],
    },

    kuriakose_elias_of_the_holy_family_chavara_priest: {
      name: 'Saint Kuriakose Elias of the Holy Family Chavara',
      titles: [Titles.Priest],
    },

    ladislas_of_gielniow_priest: {
      name: 'Blessed Ladislas of Gielniow',
      titles: [Titles.Priest],
    },

    ladislaus_batthyany_strattmann: {
      name: 'Blessed Ladislaus Batthyány-Strattmann',
    },

    ladislaus_i_of_hungary: {
      name: 'Saint Ladislaus',
    },

    lambert_of_maastricht_bishop: {
      name: 'Saint Lambert of Maastricht',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 705,
    },

    laserian_of_leighlin_bishop: {
      name: 'Saint Laserian',
      titles: [Titles.Bishop],
    },

    laura_vicuna_virgin: {
      name: 'Blessed Laura Vicuña',
      titles: [Titles.Virgin],
    },

    laurence_otoole_bishop: {
      name: 'Saint Laurence O’Toole',
      titles: [Titles.Bishop],
    },

    laurence_wang_bing_martyr: {
      name: 'Saint Laurence Wang Bing',
      titles: [Titles.Martyr],
    },

    lawrence_bai_xiaoman_martyr: {
      name: 'Saint Lawrence Bai Xiaoman',
      titles: [Titles.Martyr],
    },

    lawrence_of_brindisi_priest: {
      name: 'Saint Lawrence of Brindisi',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1619,
    },

    lawrence_of_rome_deacon: {
      name: 'Saint Lawrence',
      titles: [Titles.Deacon, Titles.Martyr],
      dateOfDeath: 258,
    },

    lawrence_ruiz_martyr: {
      name: 'Saint Lawrence Ruiz',
      titles: [Titles.Martyr],
      dateOfDeath: 1635,
      dateOfDeathIsApproximative: true,
    },

    leander_of_seville_bishop: {
      name: 'Saint Leander of Seville',
      titles: [Titles.Bishop],
    },

    lelia_of_killeely_virgin: {
      name: 'Saint Lelia',
      titles: [Titles.Virgin],
    },

    leo_i_the_great_pope: {
      name: 'Saint Leo the Great',
      titles: [Titles.Pope, Titles.DoctorOfTheChurch],
    },

    leo_ignatius_mangin_priest: {
      name: 'Saint Leo Ignatius Mangin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    leo_ix_pope: {
      name: 'Saint Leo IX',
      titles: [Titles.Pope],
    },

    leoba_of_tauberbischofsheim_abbess: {
      name: 'Saint Leoba',
      titles: [Titles.Abbess],
    },

    leonard_of_noblac_hermit: {
      name: 'Saint Leonard of Noblac',
      titles: [Titles.Hermit],
    },

    leonid_feodorov_priest: {
      name: 'Blessed Leonid Feodorov',
      titles: [Titles.Priest, Titles.Martyr],
    },

    leopold_iii_of_babenberg: {
      name: 'Saint Leopold III of Babenberg',
    },

    leopold_mandic_priest: {
      name: 'Saint Leopold Mandić',
      titles: [Titles.Priest],
    },

    louis_bertrand_priest: {
      name: 'Saint Louis Bertrand',
      titles: [Titles.Priest],
    },

    louis_grignion_de_montfort_priest: {
      name: 'Saint Louis Grignion de Montfort',
      titles: [Titles.Priest],
      dateOfDeath: 1716,
    },

    louis_ix_of_france: {
      name: 'Saint Louis',
      dateOfDeath: 1270,
    },

    louis_zephirin_moreau_bishop: {
      name: 'Blessed Louis-Zéphirin Moreau',
      titles: [Titles.Bishop],
      dateOfDeath: 1901,
    },

    lucius_of_chur_bishop: {
      name: 'Saint Lucius of Chur',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    lucy_of_syracuse_virgin: {
      name: 'Saint Lucy',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 305,
      dateOfDeathIsApproximative: true,
    },

    lucy_yi_zhenmei_virgin: {
      name: 'Saint Lucy Yi Zhenmei',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    ludger_of_munster_bishop: {
      name: 'Saint Ludger of Münster',
      titles: [Titles.Bishop],
    },

    ludmila_of_bohemia_martyr: {
      name: 'Saint Ludmila',
      titles: [Titles.Martyr],
    },

    luigi_orione_priest: {
      name: 'Saint Luigi Orione',
      titles: [Titles.Priest],
    },

    luke_evangelist: {
      name: 'Saint Luke',
      titles: [Titles.Evangelist],
    },

    lydia_of_philippi: {
      name: 'Saint Lydia of Philippi',
    },

    mac_nissi_of_connor_bishop: {
      name: 'Saint Mac Nissi',
      titles: [Titles.Bishop],
    },

    macartan_of_clogher_bishop: {
      name: 'Saint Macartan',
      titles: [Titles.Bishop],
    },

    maelruain_of_tallaght_bishop: {
      name: 'Saint Maelruain',
      titles: [Titles.Bishop, Titles.Abbot],
    },

    magnus_erlendsson_martyr: {
      name: 'Saint Magnus',
      titles: [Titles.Martyr],
    },

    malachy_of_armagh_bishop: {
      name: 'Saint Malachy',
      titles: [Titles.Bishop],
    },

    marcel_callo_martyr: {
      name: 'Blessed Marcel Callo',
      titles: [Titles.Martyr],
    },

    marcelina_darowska_religious: {
      name: 'Blessed Marcelina Darowska',
      titles: [Titles.Religious],
    },

    marcellin_champagnat_priest: {
      name: 'Saint Marcellin Champagnat',
      titles: [Titles.Priest],
    },

    marcellinus_of_rome_martyr: {
      name: 'Saint Marcellinus',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
    },

    peter_the_exorcist_martyr: {
      name: 'Saint Peter',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
    },

    margaret_clitherow_virgin_martyr: {
      name: 'Saint Margaret Clitherow',
      titles: [Titles.Martyr],
    },

    anne_line_virgin_martyr: {
      name: 'Saint Anne Line',
      titles: [Titles.Martyr],
    },

    margaret_ward_virgin_martyr: {
      name: 'Saint Margaret Ward',
      titles: [Titles.Martyr],
    },

    margaret_mary_alacoque_virgin: {
      name: 'Saint Margaret Mary Alacoque',
      titles: [Titles.Virgin],
      dateOfDeath: 1690,
    },

    margaret_of_antioch_virgin: {
      name: 'Saint Margaret of Antioch',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    margaret_of_hungary_religious: {
      name: 'Saint Margaret of Hungary',
      titles: [Titles.Religious],
    },

    margaret_of_scotland: {
      name: 'Saint Margaret of Scotland',
      dateOfDeath: 1093,
    },

    marguerite_bourgeoys_virgin: {
      name: 'Saint Marguerite Bourgeoys',
      titles: [Titles.Virgin],
      dateOfDeath: 1700,
    },

    marguerite_dyouville_religious: {
      name: 'Saint Marguerite d’Youville',
      titles: [Titles.Religious],
      dateOfDeath: 1771,
    },

    maria_goretti_virgin: {
      name: 'Saint Maria Goretti',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 1902,
    },

    maria_guadalupe_garcia_zavala_virgin: {
      name: 'Saint María Guadalupe García Zavala',
      titles: [Titles.Virgin],
    },

    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: {
      name: 'Saint María Micaela of the Blessed Sacrament Desmaisières',
      titles: [Titles.Virgin],
    },

    mariana_of_jesus_de_paredes_virgin: {
      name: 'Saint Mariana of Jesus de Paredes',
      titles: [Titles.Virgin],
    },

    marianne_cope_virgin: {
      name: 'Saint Marianne Cope',
      titles: [Titles.Virgin],
    },

    marie_anne_blondin_virgin: {
      name: 'Blessed Marie-Anne Blondin',
      titles: [Titles.Virgin],
      dateOfDeath: 1890,
    },

    marie_leonie_paradis_virgin: {
      name: 'Blessed Marie-Léonie Paradis',
      titles: [Titles.Virgin],
      dateOfDeath: 1912,
    },

    marie_of_the_incarnation_guyart_religious: {
      name: 'Saint Marie of the Incarnation Guyart',
      titles: [Titles.Religious],
      dateOfDeath: 1672,
    },

    marie_rose_durocher_virgin: {
      name: 'Blessed Marie Rose Durocher',
      titles: [Titles.Virgin],
      dateOfDeath: 1849,
    },

    mark_evangelist: {
      name: 'Saint Mark',
      titles: [Titles.Evangelist],
    },

    marko_krizin_priest: {
      name: 'Saint Marko Krizin',
      titles: [Titles.Priest, Titles.Martyr],
    },

    stephen_pongracz_priest: {
      name: 'Saint Stephen Pongrácz',
      titles: [Titles.Priest, Titles.Martyr],
    },

    maron_of_syria_hermit: {
      name: 'Saint Maroun',
      titles: [Titles.Hermit],
    },

    martha_of_bethany: {
      name: 'Saint Martha',
      dateOfDeath: { century: 1 },
    },

    mary_of_bethany: {
      name: 'Saint Mary',
      dateOfDeath: { century: 1 },
    },

    lazarus_of_bethany: {
      name: 'Saint Lazarus',
      dateOfDeath: { century: 1 },
    },

    martin_de_porres_religious: {
      name: 'Saint Martin de Porres',
      titles: [Titles.Religious],
      dateOfDeath: 1639,
    },

    martin_i_pope: {
      name: 'Saint Martin I',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 656,
    },

    martin_of_tours_bishop: {
      name: 'Saint Martin of Tours',
      titles: [Titles.Bishop],
      dateOfDeath: 397,
    },

    martin_wu_xuesheng_martyr: {
      name: 'Saint Martin Wu Xuesheng',
      titles: [Titles.Martyr],
    },

    mary_adeodata_pisani_virgin: {
      name: 'Blessed Mary Adeodata Pisani',
      titles: [Titles.Virgin],
    },

    mary_angela_truszkowska_virgin: {
      name: 'Blessed Mary Angela Truszkowska',
      titles: [Titles.Virgin],
    },

    mary_assunta_pallotta_virgin: {
      name: 'Blessed Mary Assunta Pallotta',
      titles: [Titles.Virgin],
    },

    mary_magdalene: {
      name: 'Saint Mary Magdalene',
      dateOfDeath: { century: 1 },
    },

    mary_magdalene_de_pazzi_virgin: {
      name: 'Saint Mary Magdalene de’ Pazzi',
      titles: [Titles.Virgin],
      dateOfDeath: 1607,
    },

    mary_mother_of_the_church: {
      name: 'Blessed Virgin Mary, Mother of the Church',
    },

    mary_of_jesus_crucified_petkovic_virgin: {
      name: 'Blessed Mary of Jesus Crucified Petković',
      titles: [Titles.Virgin],
    },

    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin: {
      name: 'Saint Mary of Jesus in the Blessed Sacrament Venegas de la Torre',
      titles: [Titles.Virgin],
    },

    mary_of_jesus_the_good_shepherd_siedliska_virgin: {
      name: 'Blessed Mary of Jesus the Good Shepherd Siedliska',
      titles: [Titles.Virgin],
    },

    mary_of_the_cross_mackillop_virgin: {
      name: 'Saint Mary of the Cross MacKillop',
      titles: [Titles.Virgin],
    },

    mary_soledad_torres_acosta_virgin: {
      name: 'Saint Mary Soledad Torres y Acosta',
      titles: [Titles.Virgin],
    },

    mary_stella_of_the_blessed_sacrament_mardosewicz_virgin: {
      name: 'Blessed Mary Stella of the Blessed Sacrament Mardosewicz',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    mary_theresa_chiramel_mankidiyan_virgin: {
      name: 'Saint Mary Theresa Chiramel Mankidiyan',
      titles: [Titles.Virgin],
    },

    mary_theresa_ledochowska_virgin: {
      name: 'Blessed Mary Theresa Ledóchowska',
      titles: [Titles.Virgin],
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      name: 'Saint Mary Ursula of Jesus Ledóchowska',
      titles: [Titles.Virgin],
    },

    marydolores_rodriguez_sopena_virgin: {
      name: 'Blessed Mary Dolores Rodríguez Sopeña',
      titles: [Titles.Virgin],
    },

    matilda_of_ringelheim: {
      name: 'Saint Matilda',
    },

    matthew_apostle: {
      name: 'Saint Matthew',
      titles: [Titles.Apostle, Titles.Evangelist],
    },

    matthias_apostle: {
      name: 'Saint Matthias',
      titles: [Titles.Apostle],
    },

    maurice_of_agaunum_martyr: {
      name: 'Saint Maurice',
      titles: [Titles.Martyr],
    },

    maurice_tornay_priest: {
      name: 'Blessed Maurice Tornay',
      titles: [Titles.Priest, Titles.Martyr],
    },

    maurus_of_pecs_bishop: {
      name: 'Saint Maurus',
      titles: [Titles.Bishop],
    },

    maximilian_kolbe_priest: {
      name: 'Saint Maximilian Kolbe',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1941,
    },

    meinrad_of_einsiedeln_martyr: {
      name: 'Saint Meinrad of Einsiedeln',
      titles: [Titles.Martyr],
    },

    mel_of_ardagh_bishop: {
      name: 'Saint Mel',
      titles: [Titles.Bishop],
    },

    melchior_grodziecki_priest: {
      name: 'Saint Melchior Grodziecki',
      titles: [Titles.Priest, Titles.Martyr],
    },

    michael_archangel: {
      name: 'Saint Michael',
      titles: [Titles.Archangel],
    },

    gabriel_archangel: {
      name: 'Saint Gabriel',
      titles: [Titles.Archangel],
    },

    raphael_archangel: {
      name: 'Saint Raphael',
      titles: [Titles.Archangel],
    },

    michael_kozal_bishop: {
      name: 'Blessed Michael Kozal',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    miguel_agustin_pro_priest: {
      name: 'Blessed Miguel Agustin Pro',
      titles: [Titles.Priest, Titles.Martyr],
    },

    miguel_febres_cordero_religious: {
      name: 'Saint Miguel Febres Cordero',
      titles: [Titles.Religious],
    },

    monica_of_hippo: {
      name: 'Saint Monica',
      dateOfDeath: 387,
    },

    moninne_of_killeavy_virgin: {
      name: 'Saint Moninne',
      titles: [Titles.Virgin],
    },

    most_holy_name_of_jesus: {
      name: 'Most Holy Name of Jesus',
    },

    most_holy_name_of_mary: {
      name: 'Most Holy Name of Mary',
    },

    munchin_of_limerick_bishop: {
      name: 'Saint Munchin',
      titles: [Titles.Bishop],
    },

    muredach_of_killala_bishop: {
      name: 'Saint Muredach',
      titles: [Titles.Bishop],
    },

    mutien_marie_wiaux_religious: {
      name: 'Saint Mutien-Marie Wiaux',
      titles: [Titles.Religious],
      dateOfDeath: 1917,
    },

    nativity_of_mary: {
      name: 'Nativity of the Blessed Virgin Mary',
    },

    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: {
      name: 'Saint Nazaria Ignacia of Saint Teresa of Jesus March Mesa',
      titles: [Titles.Virgin],
    },

    nereus_of_terracina_martyr: {
      name: 'Saint Nereus',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    achilleus_of_terracina_martyr: {
      name: 'Saint Achilleus',
      titles: [Titles.Martyr],
    },

    nicholas_of_flue_hermit: {
      name: 'Saint Nicholas of Flüe',
      titles: [Titles.Hermit],
    },

    nicholas_of_myra_bishop: {
      name: 'Saint Nicholas',
      titles: [Titles.Bishop],
      dateOfDeath: 350,
      dateOfDeathIsApproximative: true,
    },

    nicholas_steno_bishop: {
      name: 'Blessed Nicholas Steno',
      titles: [Titles.Bishop],
    },

    nicholas_tavelic_priest: {
      name: 'Saint Nicholas Tavelić',
      titles: [Titles.Priest, Titles.Martyr],
    },

    ninian_of_whithorn_bishop: {
      name: 'Saint Ninian',
      titles: [Titles.Bishop],
    },

    norbert_of_xanten_bishop: {
      name: 'Saint Norbert',
      titles: [Titles.Bishop],
      dateOfDeath: 1134,
    },

    nuno_of_saint_mary_pereira_religious: {
      name: 'Saint Nuno of Saint Mary Pereira',
      titles: [Titles.Religious],
    },

    nykyta_budka_bishop: {
      name: 'Blessed Nykyta Budka',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1949,
    },

    vasyl_velychkovsky_bishop: {
      name: 'Blessed Vasyl Velychkovsky',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1973,
    },

    odile_of_alsace_abbess: {
      name: 'Saint Odile of Alsace',
      titles: [Titles.Abbess],
    },

    odoric_of_pordenone_priest: {
      name: 'Blessed Odoric of Pordenone',
      titles: [Titles.Priest],
    },

    olaf_ii_of_norway_martyr: {
      name: 'Saint Olaf II',
      titles: [Titles.Martyr],
    },

    oleksiy_zarytskyi_priest: {
      name: 'Blessed Oleksiy Zarytskyi',
      titles: [Titles.Priest, Titles.Martyr],
    },

    olga_of_kiev: {
      name: 'Saint Olga',
    },

    oliver_plunket_bishop: {
      name: 'Saint Oliver Plunket',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    otteran_of_iona_monk: {
      name: 'Saint Otteran',
      titles: [Titles.Monk],
    },

    otto_of_bamberg_bishop: {
      name: 'Saint Otto of Bamberg',
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
      name: 'Saint Pancras',
      titles: [Titles.Martyr],
      dateOfDeath: 304,
      dateOfDeathIsApproximative: true,
    },

    pantaleon_of_nicomedia_martyr: {
      name: 'Saint Pantaleon of Nicomedia',
      titles: [Titles.Martyr],
    },

    paschal_baylon_religious: {
      name: 'Saint Paschal Baylón',
      titles: [Titles.Religious],
    },

    passion_of_saint_john_the_baptist: {
      name: 'Passion of Saint John the Baptist',
    },

    patrick_of_ireland_bishop: {
      name: 'Saint Patrick',
      titles: [Titles.Bishop],
      dateOfDeath: 461,
    },

    paul_chen_changpin_martyr: {
      name: 'Saint Paul Chen Changpin',
      titles: [Titles.Martyr],
    },

    paul_liu_hanzuo_priest: {
      name: 'Saint Paul Liu Hanzuo',
      titles: [Titles.Priest, Titles.Martyr],
    },

    paul_miki_martyr: {
      name: 'Saint Paul Miki',
      titles: [Titles.Martyr],
      dateOfDeath: 1597,
    },

    paul_of_the_cross_priest: {
      name: 'Saint Paul of the Cross',
      titles: [Titles.Priest],
      dateOfDeath: 1776,
    },

    paul_of_thebes_hermit: {
      name: 'Blessed Paul of Thebes',
      titles: [Titles.Hermit],
    },

    paul_vi_pope: {
      name: 'Saint Paul VI',
      titles: [Titles.Pope],
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      name: 'Saint Paulina of the Agonizing Heart of Jesus Visintainer',
      titles: [Titles.Virgin],
    },

    paulinus_of_nola_bishop: {
      name: 'Saint Paulinus of Nola',
      titles: [Titles.Bishop],
      dateOfDeath: 431,
    },

    paulinus_of_trier_bishop: {
      name: 'Saint Paulinus of Trier',
      titles: [Titles.Bishop],
    },

    paulinus_of_york_bishop: {
      name: 'Saint Paulinus of York',
      titles: [Titles.Bishop],
    },

    pavel_peter_gojdic_bishop: {
      name: 'Blessed Pavel Peter Gojdič',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    pedro_calungsod_martyr: {
      name: 'Saint Pedro Calungsod',
      titles: [Titles.Martyr],
    },

    pelagius_of_cordoba_martyr: {
      name: 'Saint Pelagius of Córdoba',
      titles: [Titles.Martyr],
    },

    perpetua_of_carthage_martyr: {
      name: 'Saint Perpetua',
      titles: [Titles.Martyr],
      dateOfDeath: 203,
    },

    felicity_of_carthage_martyr: {
      name: 'Saint Felicity',
      titles: [Titles.Martyr],
      dateOfDeath: 203,
    },

    peter_baptist_blasquez_martyr: {
      name: 'Saint Peter Baptist Blásquez',
      titles: [Titles.Martyr],
    },

    peter_canisius_priest: {
      name: 'Saint Peter Canisius',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1597,
    },

    peter_chanel_priest: {
      name: 'Saint Peter Chanel',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 1841,
    },

    peter_chrysologus_bishop: {
      name: 'Saint Peter Chrysologus',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 451,
    },

    peter_claver_priest: {
      name: 'Saint Peter Claver',
      titles: [Titles.Priest],
      dateOfDeath: 1654,
    },

    peter_damian_bishop: {
      name: 'Saint Peter Damian',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1072,
    },

    peter_de_zuniga_priest: {
      name: 'Blessed Peter de Zúñiga',
      titles: [Titles.Priest, Titles.Martyr],
    },

    louis_flores_priest: {
      name: 'Blessed Louis Flores',
      titles: [Titles.Priest, Titles.Martyr],
    },

    peter_julian_eymard_priest: {
      name: 'Saint Peter Julian Eymard',
      titles: [Titles.Priest],
      dateOfDeath: 1868,
    },

    peter_kibe_priest: {
      name: 'Blessed Peter Kibe',
      titles: [Titles.Priest, Titles.Martyr],
    },

    peter_liu_wenyuan_martyr: {
      name: 'Saint Peter Liu Wenyuan',
      titles: [Titles.Martyr],
    },

    peter_of_alcantara_priest: {
      name: 'Saint Peter of Alcántara',
      titles: [Titles.Priest],
    },

    peter_sanz_bishop: {
      name: 'Saint Peter Sanz',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    peter_to_rot_martyr: {
      name: 'Blessed Peter To Rot',
      titles: [Titles.Martyr],
    },

    peter_wu_guosheng_martyr: {
      name: 'Saint Peter Wu Guosheng',
      titles: [Titles.Martyr],
    },

    philip_apostle: {
      name: 'Saint Philip',
      titles: [Titles.Apostle],
    },

    philip_evans_priest: {
      name: 'Saint Philip Evans',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_lloyd_priest: {
      name: 'Saint John Lloyd',
      titles: [Titles.Priest, Titles.Martyr],
    },

    philip_neri_priest: {
      name: 'Saint Philip Neri',
      titles: [Titles.Priest],
      dateOfDeath: 1595,
    },

    philip_of_jesus_de_las_casas_martyr: {
      name: 'Saint Philip of Jesus de las Casas',
      titles: [Titles.Martyr],
    },

    pirmin_of_hornbach_abbot: {
      name: 'Saint Pirmin',
      titles: [Titles.Abbot],
    },

    pius_ix_pope: {
      name: 'Blessed Pius IX',
      titles: [Titles.Pope],
    },

    pius_of_pietrelcina_priest: {
      name: 'Saint Pius of Pietrelcina',
      titles: [Titles.Priest],
      dateOfDeath: 1968,
    },

    pius_v_pope: {
      name: 'Saint Pius V',
      titles: [Titles.Pope],
      dateOfDeath: 1572,
    },

    pius_x_pope: {
      name: 'Saint Pius X',
      titles: [Titles.Pope],
      dateOfDeath: 1914,
    },

    polycarp_of_smyrna_bishop: {
      name: 'Saint Polycarp',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 167,
    },

    pontian_i_pope: {
      name: 'Saint Pontian',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 235,
    },

    hippolytus_of_rome_priest: {
      name: 'Saint Hippolytus',
      titles: [Titles.Priest, Titles.Martyr],
      dateOfDeath: 235,
    },

    pothinus_of_lyon_bishop: {
      name: 'Saint Pothinus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 177,
    },

    blandina_of_lyon_virgin: {
      name: 'Saint Blandina',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 177,
    },

    presentation_of_mary: {
      name: 'Presentation of the Blessed Virgin Mary',
    },

    procopius_of_sazava_abbot: {
      name: 'Saint Procopius of Sázava',
      titles: [Titles.Abbot],
    },

    publius_of_malta_bishop: {
      name: 'Saint Publius',
      titles: [Titles.Bishop],
    },

    queenship_of_mary: {
      name: 'Queenship of the Blessed Virgin Mary',
    },

    quirinus_of_sescia_bishop: {
      name: 'Saint Quirinus of Sescia',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    rabanus_maurus_bishop: {
      name: 'Saint Rabanus Maurus',
      titles: [Titles.Bishop],
    },

    radim_of_gniezno_bishop: {
      name: 'Saint Radim',
      titles: [Titles.Bishop],
    },

    rafqa_pietra_choboq_ar_rayes_virgin: {
      name: 'Saint Rafqa Pietra Choboq Ar-Rayès',
      titles: [Titles.Virgin],
    },

    raphael_chylinski_priest: {
      name: 'Blessed Raphael Chyliński',
      titles: [Titles.Priest],
    },

    raphael_guizar_y_valencia_bishop: {
      name: 'Saint Raphael Guízar y Valencia',
      titles: [Titles.Bishop],
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      name: 'Saint Raphael of Saint Joseph Kalinowski',
      titles: [Titles.Priest],
    },

    raymond_of_penyafort_priest: {
      name: 'Saint Raymond of Penyafort',
      titles: [Titles.Priest],
      dateOfDeath: 1275,
    },

    remigius_of_reims_bishop: {
      name: 'Saint Remigius',
      titles: [Titles.Bishop],
      dateOfDeath: 530,
    },

    richard_gwyn_martyr: {
      name: 'Saint Richard Gwyn',
      titles: [Titles.Martyr],
    },

    richard_of_chichester_bishop: {
      name: 'Saint Richard of Chichester',
      titles: [Titles.Bishop],
    },

    rita_of_cascia_religious: {
      name: 'Saint Rita of Cascia',
      titles: [Titles.Religious],
      dateOfDeath: 1456,
    },

    robert_bellarmine_bishop: {
      name: 'Saint Robert Bellarmine',
      titles: [Titles.Bishop, Titles.DoctorOfTheChurch],
      dateOfDeath: 1621,
    },

    roch_gonzalez_priest: {
      name: 'Saint Roch González',
      titles: [Titles.Priest, Titles.Martyr],
    },

    alphonsus_rodriguez_priest: {
      name: 'Saint Alphonsus Rodríguez',
      titles: [Titles.Priest, Titles.Martyr],
    },

    john_del_castillo_priest: {
      name: 'Saint Roch González',
      titles: [Titles.Priest, Titles.Martyr],
    },

    roch_of_montpellier: {
      name: 'Saint Roch',
    },

    romuald_of_ravenna_abbot: {
      name: 'Saint Romuald',
      titles: [Titles.Abbot],
      dateOfDeath: 1027,
    },

    rose_of_lima_virgin: {
      name: 'Saint Rose of Lima',
      titles: [Titles.Virgin],
      dateOfDeath: 1617,
    },

    rose_philippine_duchesne_virgin: {
      name: 'Saint Rose Philippine Duchesne',
      titles: [Titles.Virgin],
    },

    rupert_of_salzburg_bishop: {
      name: 'Saint Rupert Salzburg',
      titles: [Titles.Bishop],
    },

    salomea_of_poland_religious: {
      name: 'Blessed Salomea of Poland',
      titles: [Titles.Religious],
    },

    sancha_of_portugal_virgin: {
      name: 'Blessed Sancha',
      titles: [Titles.Virgin],
    },

    mafalda_of_portugal_virgin: {
      name: 'Blessed Mafalda',
      titles: [Titles.Virgin],
    },

    sara_salkahazi_virgin: {
      name: 'Blessed Sára Salkaházi',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    scholastica_of_nursia_virgin: {
      name: 'Saint Scholastica',
      titles: [Titles.Virgin],
      dateOfDeath: 543,
    },

    sebastian_de_aparicio_religious: {
      name: 'Blessed Sebastian de Aparicio',
      titles: [Titles.Religious],
    },

    sebastian_of_milan_martyr: {
      name: 'Saint Sebastian',
      titles: [Titles.Martyr],
      dateOfDeath: 284,
      dateOfDeathIsApproximative: true,
    },

    senan_of_inis_cathaigh_bishop: {
      name: 'Saint Senan',
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
      name: 'Saint Severinus of Noricum',
      titles: [Titles.Monk],
    },

    sharbel_makhluf_priest: {
      name: 'Saint Sharbel Makhlūf',
      titles: [Titles.Priest],
      dateOfDeath: 1898,
    },

    shipwreck_of_saint_paul_apostle: {
      name: 'Shipwreck of Saint Paul',
      titles: [Titles.Apostle],
    },

    sigismund_of_burgundy_martyr: {
      name: 'Saint Sigismund',
      titles: [Titles.Martyr],
    },

    sigmund_felix_felinski_bishop: {
      name: 'Saint Sigmund Felix Feliński',
      titles: [Titles.Bishop],
    },

    simon_apostle: {
      name: 'Saint Simon',
      titles: [Titles.Apostle],
    },

    jude_apostle: {
      name: 'Saint Jude',
      titles: [Titles.Apostle],
    },

    simon_of_lipnica_priest: {
      name: 'Saint Simon of Lipnica',
      titles: [Titles.Priest],
    },

    six_welsh_martyrs: {
      name: 'Six Welsh Martyrs',
      hideTitles: true,
      count: 6,
    },

    sixtus_ii_pope: {
      name: 'Saint Sixtus II',
      titles: [Titles.Pope, Titles.Martyr],
      dateOfDeath: 258,
    },

    spyridon_of_trimythous_bishop: {
      name: 'Saint Spyridon',
      titles: [Titles.Bishop],
    },

    stanislaus_kazimierczyk_priest: {
      name: 'Saint Stanislaus Kazimierczyk',
      titles: [Titles.Priest],
    },

    stanislaus_kostka_religious: {
      name: 'Saint Stanislaus Kostka',
      titles: [Titles.Religious],
    },

    stanislaus_of_szczepanow_bishop: {
      name: 'Saint Stanislaus',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1079,
    },

    stephen_i_of_hungary: {
      name: 'Saint Stephen of Hungary',
      dateOfDeath: 1038,
    },

    stephen_the_first_martyr: {
      name: 'Saint Stephen',
      titles: [Titles.TheFirstMartyr],
      dateOfDeath: 35,
    },

    sunday_of_the_word_of_god: {
      name: 'Sunday of the Word of God',
    },

    sunniva_of_norway_virgin: {
      name: 'Saint Sunniva',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    swithun_of_winchester_bishop: {
      name: 'Saint Swithun',
      titles: [Titles.Bishop],
    },

    sylvester_i_pope: {
      name: 'Saint Sylvester I',
      titles: [Titles.Pope],
      dateOfDeath: 335,
    },

    szilard_bogdanffy_bishop: {
      name: 'Blessed Szilárd Bogdánffy',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    teilo_of_llandaff_bishop: {
      name: 'Saint Teilo',
      titles: [Titles.Bishop],
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      name: 'Saint Teresa Benedicta of the Cross Stein',
      titles: [Titles.Virgin, Titles.Martyr],
      dateOfDeath: 1942,
    },

    teresa_of_calcutta_religious: {
      name: 'Saint Teresa of Calcutta',
      titles: [Titles.Religious],
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      name: 'Saint Teresa of Jesus Jornet Ibars',
      titles: [Titles.Virgin],
    },

    teresa_of_jesus_of_avila_virgin: {
      name: 'Saint Teresa of Jesus of Ávila',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1582,
    },

    teresa_of_jesus_of_los_andes_virgin: {
      name: 'Saint Teresa of Jesus of Los Andes',
      titles: [Titles.Virgin],
    },

    teresa_of_portugal_religious: {
      name: 'Blessed Teresa of Portugal',
      titles: [Titles.Religious],
    },

    theodore_of_canterbury_bishop: {
      name: 'Saint Theodore of Canterbury',
      titles: [Titles.Bishop],
    },

    theodore_romzha_bishop: {
      name: 'Blessed Theodore Romzha',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    theodosius_of_the_caves_abbot: {
      name: 'Saint Theodosius of the Caves',
      titles: [Titles.Abbot],
    },

    theotonius_of_coimbra_priest: {
      name: 'Saint Theotonius of Coimbra',
      titles: [Titles.Priest],
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      name: 'Saint Thérèse of the Child Jesus and the Holy Face of Lisieux',
      titles: [Titles.Virgin, Titles.DoctorOfTheChurch],
      dateOfDeath: 1897,
    },

    thomas_apostle: {
      name: 'Saint Thomas',
      titles: [Titles.Apostle],
    },

    thomas_aquinas_priest: {
      name: 'Saint Thomas Aquinas',
      titles: [Titles.Priest, Titles.DoctorOfTheChurch],
      dateOfDeath: 1274,
    },

    thomas_becket_bishop: {
      name: 'Saint Thomas Becket',
      titles: [Titles.Bishop, Titles.Martyr],
      dateOfDeath: 1170,
    },

    thomas_hioji_rokuzayemon_nishi_priest: {
      name: 'Saint Thomas Hioji Rokuzayemon Nishi',
      titles: [Titles.Priest, Titles.Martyr],
    },

    thomas_of_villanova_bishop: {
      name: 'Saint Thomas of Villanova',
      titles: [Titles.Bishop],
    },

    thorfinn_of_hamar_bishop: {
      name: 'Saint Thorfinn',
      titles: [Titles.Bishop],
    },

    thorlac_of_iceland_bishop: {
      name: 'Saint Thorlac',
      titles: [Titles.Bishop],
    },

    timothy_of_ephesus_bishop: {
      name: 'Saint Timothy',
      titles: [Titles.Bishop],
      dateOfDeath: { century: 1 },
    },

    titus_of_crete_bishop: {
      name: 'Saint Titus',
      titles: [Titles.Bishop],
      dateOfDeath: { century: 1 },
    },

    translation_of_the_relics_of_saint_stephen_of_hungary: {
      name: 'Translation of the Relics of Saint Stephen of Hungary',
    },

    turibius_of_mogrovejo_bishop: {
      name: 'Saint Turibius of Mogrovejo',
      titles: [Titles.Bishop],
      dateOfDeath: 1606,
    },

    ulrich_of_augsburg_bishop: {
      name: 'Saint Ulrich of Augsburg',
      titles: [Titles.Bishop],
    },

    ursula_of_cologne_virgin: {
      name: 'Saint Ursula',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    valentine_of_raetia_bishop: {
      name: 'Saint Valentine of Raetia',
      titles: [Titles.Bishop],
    },

    vincent_de_paul_priest: {
      name: 'Saint Vincent de Paul',
      titles: [Titles.Priest],
      dateOfDeath: 1660,
    },

    vincent_ferrer_priest: {
      name: 'Saint Vincent Ferrer',
      titles: [Titles.Priest],
      dateOfDeath: 1419,
    },

    vincent_kadlubek_bishop: {
      name: 'Blessed Vincent Kadłubek',
      titles: [Titles.Bishop],
    },

    vincent_lewoniuk_martyr: {
      name: 'Blessed Vincent Lewoniuk',
      titles: [Titles.Martyr],
    },

    vincent_of_saragossa_deacon: {
      name: 'Saint Vincent',
      titles: [Titles.Deacon, Titles.Martyr],
      dateOfDeath: 304,
    },

    vincent_pallotti_priest: {
      name: 'Saint Vincent Pallotti',
      titles: [Titles.Priest],
    },

    virgilius_of_salzburg_bishop: {
      name: 'Saint Virgilius of Salzburg',
      // name: 'Saint Fergal', todo: indicated in romcal as 'Saint Fergal' in Ireland, => check what's the official name in Ireland
      titles: [Titles.Bishop],
    },

    visitation_of_mary: {
      name: 'Visitation of the Blessed Virgin Mary',
    },

    vitus_of_lucania_martyr: {
      name: 'Saint Vitus',
      titles: [Titles.Martyr],
    },

    vladimir_ghika_priest: {
      name: 'Blessed Vladimir Ghika',
      titles: [Titles.Priest, Titles.Martyr],
    },

    vladimir_i_the_great_of_kiev: {
      name: 'Saint Vladimir the Great',
    },

    waitangi_day: {
      name: 'Waitangi Day',
    },

    walpurga_of_heidenheim_abbess: {
      name: 'Saint Walpurga of Heidenheim',
      titles: [Titles.Abbess],
    },

    wenceslaus_i_of_bohemia_martyr: {
      name: 'Saint Wenceslaus',
      titles: [Titles.Martyr],
      dateOfDeath: 929,
    },

    wendelin_of_trier_abbot: {
      name: 'Saint Wendelin',
      titles: [Titles.Abbot],
    },

    wilfrid_of_york_bishop: {
      name: 'Saint Wilfrid',
      titles: [Titles.Bishop],
    },

    william_apor_bishop: {
      name: 'Blessed William Apor',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    willibald_of_eichstatt_bishop: {
      name: 'Saint Willibald',
      titles: [Titles.Bishop],
    },

    willibrord_of_utrecht_bishop: {
      name: 'Saint Willibrord',
      titles: [Titles.Bishop],
    },

    winefride_of_flintshire_virgin: {
      name: 'Saint Winefride',
      titles: [Titles.Virgin],
    },

    wladyslaw_bladzinski_priest: {
      name: 'Blessed Wladyslaw Błądziński',
      titles: [Titles.Priest, Titles.Martyr],
    },

    wolfgang_of_regensburg_bishop: {
      name: 'Saint Wolfgang of Regensburg',
      titles: [Titles.Bishop],
    },

    wulstan_of_worcester_bishop: {
      name: 'Saint Wulstan',
      titles: [Titles.Bishop],
    },

    yolanda_of_poland_religious: {
      name: 'Blessed Yolanda',
      titles: [Titles.Religious],
    },

    zdenka_cecilia_schelingova_virgin: {
      name: 'Blessed Zdenka Cecilia Schelingová',
      titles: [Titles.Virgin, Titles.Martyr],
    },

    zdislava_of_lemberk: {
      name: 'Saint Zdislava',
    },

    zepherin_namuncura: {
      name: 'Blessed Zepherin Namuncurá',
    },

    zoltan_lajos_meszlenyi_bishop: {
      name: 'Blessed Zoltán Lajos Meszlényi',
      titles: [Titles.Bishop, Titles.Martyr],
    },

    zygmunt_gorazdowski_priest: {
      name: 'Saint Zygmunt Gorazdowski',
      titles: [Titles.Priest],
    },

    companions_martyrs: {
      name: 'Companions',
      titles: [Titles.Martyr],
      count: 'many',
    },
  };
}
