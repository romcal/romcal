import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
    season: 'Advent Season',  // us; Was: `Advent`; src (see the book spine): https://catholicbookpublishing.com/product/105
    weekday: '{{day}} of the {{week}} week of Advent',
    sunday: '{{week}} Sunday of Advent',  // us, gb
  },
  christmastide: {
    season: 'Christmas Season',  // us; Was: `Christmas`; src (see the book spine): https://catholicbookpublishing.com/product/105
    day: '{{day}} of Christmastide',
    octave: '{{count}} Day within the Octave of the Nativity of the Lord',  // us; Was: `{{count}} day in the Octave of Christmas`
    sunday: '{{count}} Sunday of Christmas',
  },
  epiphany: {
    season: 'Epiphany',  // TODO: I don’t think there is such a season, however, I understand this might be here only to ease the implementation. OTOH, I haven’t seen a country that would use `{{day}} before Epiphany` (but I have seen `after`).
    before: '{{day}} before Epiphany',  // TODO: I suggest that we should use `christmastide.day` instead, or create a romcal global option as a switch whether romcal should use `christmastide.day` or `epiphany.before`
    after: '{{day}} after Epiphany',  // us; Was: `{{day}} after Epiphany`
  },
  ordinary_time: {
    season: 'Ordinary Time',  // us
    weekday: '{{day}} of the {{week}} week of Ordinary Time',  // us: should it be `week in OT` or `week of OT`? I presume the former is used in the US
    sunday: '{{week}} Sunday in Ordinary Time',  // us; Was: `{{week}} Sunday of Ordinary Time`, gb
  },
  lent: {
    season: 'Lenten Season',  // us; Was: `Lent`; src (see the book spine): https://catholicbookpublishing.com/product/105
    weekday: '{{day}} of the {{week}} week of Lent',
    sunday: '{{week}} Sunday of Lent',  // us, gb
    day_after_ash_wed: '{{day}} after Ash Wednesday',  // us
  },
  holy_week: {
    season: 'Holy Week',
    weekday: '{{day}} of Holy Week',
  },
  paschal_triduum: {
    season: 'Paschal Triduum',
  },
  eastertide: {
    season: 'Easter Season',  // us; Was: `Eastertide`; src (see the book spine): https://catholicbookpublishing.com/product/105
    weekday: '{{day}} of the {{week}} week of Easter',
    sunday: '{{week}} Sunday of Easter',  // us
    octave: '{{day}} within the Octave of Easter',  // us; Was: `Easter {{day}}`
  },
  liturgicalColors: {  // TODO: Replace `liturgicalColors` with `liturgical_colors`
    BLACK: 'black',
    GOLD: 'gold',
    GREEN: 'green',
    PURPLE: 'purple',
    RED: 'red',
    ROSE: 'rose',
    WHITE: 'white',
  },
  ranks: {
    SOLEMNITY: 'solemnity',
    SUNDAY: 'Sunday',
    TRIDUUM: 'Triduum',
    HOLY_WEEK: 'Holy Week',
    FEAST: 'feast',
    MEMORIAL: 'memorial',
    OPT_MEMORIAL: 'optional memorial',
    COMMEMORATION: 'commemoration',
    WEEKDAY: 'weekday',
  },
  celebrations: {
    all_saints: 'All Saints',  // us
    annunciation: 'Annunciation of the Lord',  // us, gb
    ascension: 'Ascension of the Lord',  // us, gb
    ash_wednesday: 'Ash Wednesday',  // us, gb
    assumption: 'Assumption of the Blessed Virgin Mary',  // us
    baptism_of_the_lord: 'Baptism of the Lord',  // us, gb
    nativity_of_john_the_baptist: 'Nativity of Saint John the Baptist',  // us, gb
    christmas: 'Nativity of the Lord',  // us; Was: `Christmas`
    christ_the_king_sunday: 'Our Lord Jesus Christ, King of the Universe',  // us
    corpus_christi: 'Most Holy Body and Blood of Christ',  // us, gb in en-gb
    divine_mercy_sunday: 'Sunday of Divine Mercy',  // us; gb
    easter_sunday: 'Easter Sunday of the Resurrection of the Lord',  // us, gb
    epiphany: 'Epiphany of the Lord',  // us, gb
    good_friday: 'Good Friday',  // us, gb
    holy_family: 'Holy Family of Jesus, Mary and Joseph',  // us
    holy_saturday: 'Holy Saturday/Easter Vigil',  // us, gb
    holy_thursday: 'Holy Thursday',  // us, gb in en-gb
    immaculate_conception_of_mary: 'Immaculate Conception of the Blessed Virgin Mary',  // us
    immaculate_heart_of_mary: 'Immaculate Heart of the Blessed Virgin Mary',  // us, gb
    joseph_spouse_of_mary: 'Saint Joseph, Spouse of the Blessed Virgin Mary',  // us, gb
    mary_mother_of_god: 'Mary, the Holy Mother of God',  // us, gb
    palm_sunday: 'Palm Sunday of the Passion of the Lord',  // us, gb
    pentecost_sunday: 'Pentecost Sunday',  // us, gb
    peter_and_paul_apostles: 'Saints Peter and Paul, Apostles',  // us, gb
    presentation_of_the_lord: 'Presentation of the Lord',  // us, gb
    most_sacred_heart_of_jesus: 'Most Sacred Heart of Jesus',  // us, gb
    exaltation_of_the_holy_cross: 'Exaltation of the Holy Cross',  // us
    transfiguration: 'Transfiguration of the Lord',  // us
    trinity_sunday: 'Most Holy Trinity',  // us, gb
  },
  sanctoral: {
    '205_blessed_martyrs_of_japan': '205 Blessed Martyrs of Japan',
    all_saints_of_ireland: 'All Saints of Ireland',  // ireland
    all_saints_of_wales: 'All Saints of Wales',  // gb (wales)
    all_souls: 'Commemoration of All the Faithful Departed',  // us
    nativity_of_mary: 'Nativity of the Blessed Virgin Mary',  // us
    adolph_kolping_priest: 'Blessed Adolph Kolping, Priest',
    albertina_berkenbrock_virgin: 'Blessed Albertina Berkenbrock, Virgin and Martyr',
    aloysius_stepinac_bishop: 'Blessed Aloysius Stepinac, Bishop and Martyr',
    andre_grasset_priest: 'Blessed André Grasset, Priest and Martyr',  // ca
    angela_salawa_virgin: 'Blessed Angela Salawa, Virgin',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs: 'Blessed Anthony Julian Nowowiejski, Bishop, and Companions, Martyrs',
    augustine_kazotic_bishop: 'Blessed Augustine Kažotić, Bishop and Martyr',
    bartholomew_of_the_martyrs_fernandes_bishop: 'Saint Bartholomew of the Martyrs Fernandes, Bishop',
    bartholomew_dias_laurel_religious: 'Blessed Bartholomew Días Laurel, Religious and Martyr',
    bogumilus_of_dobrow_bishop: 'Blessed Bogumilus, Bishop',
    boleslawa_mary_lament_virgin: 'Blessed Boleslawa Mary Lament, Virgin',
    bronislava_of_poland_virgin: 'Blessed Bronislava, Virgin',
    bronislaw_markiewicz_priest: 'Blessed Bronisław Markiewicz, Priest',
    carlos_manuel_rodriguez_santiago: 'Blessed Carlos Manuel Rodríguez Santiago',
    catherine_of_saint_augustine_virgin: 'Blessed Catherine of Saint Augustine, Virgin',  // ca
    zepherin_namuncura: 'Blessed Zepherin Namuncurá',
    ceslaus_of_poland_and_hyacinth_of_poland_priests: 'Blessed Ceslaus and Saint Hyacinth, Priests',
    charles_spinola_priest: 'Blessed Charles Spinola, Priest and Martyr',
    columba_marmion_priest: 'Blessed Columba Marmion, Priest',  // ireland
    ceslaus_of_poland_priest: 'Blessed Ceslaus, Priest',
    dina_belanger_virgin: 'Blessed Dina Bélanger, Virgin',  // ca; TODO: Was she a religious or a virgin?
    dominic_of_the_mother_of_god_barberi_priest: 'Blessed Dominic of the Mother of God Barberi, Priest',  // gb
    edmund_bojanowski: 'Blessed Edmund Bojanowski',
    edmund_ignatius_rice_religious: 'Blessed Edmund Rice, Religious',  // ireland
    elizabeth_hesselblad_religious: 'Saint Elizabeth Hesselblad, Religious',  // TODO: In Finland, she is a virgin, in Sweden a religious
    emilie_tavernier_gamelin_religious: 'Blessed Émilie Tavernier-Gamelin, Religious',  // ca
    frederic_janssoone_priest: 'Blessed Frédéric Janssoone, Priest',  // ca
    george_matulaitis_bishop: 'Blessed George Matulaitis, Bishop',
    gisela_of_hungary: 'Blessed Gisela',
    gundisalvus_of_amarante_priest: 'Blessed Gundisalvus of Amarante, Priest',
    gundisalvus_of_lagos_priest: 'Blessed Gundisalvus of Lagos, Priest',
    gratia_of_cattaro_religious: 'Blessed Gratia of Cattaro, Religious',
    hemming_of_turku_bishop: 'Blessed Hemming of Turku, Bishop',
    henry_suso_priest: 'Blessed Henry Suso, Priest',
    honorat_kozminski_priest: 'Blessed Honorat Koźmiński, Priest',
    hroznata_of_bohemia_martyr: 'Blessed Hroznata, Martyr',
    ignatius_de_azevedo_priest_and_companions_martyrs: 'Blessed Ignatius de Azevedo, Priest, and Companions, Martyrs',
    innocent_xi_pope: 'Blessed Innocent XI, Pope',
    irish_martyrs: 'Irish Martyrs',  // ireland
    istvan_sandor_religious: 'Blessed István Sándor, Religious and Martyr',
    ivan_merz: 'Blessed Ivan Merz',
    jacinta_marto_and_francisco_marto: 'Saints Jacinta and Francisco Marto',
    james_strzemie_bishop: 'Blessed James Strzemię, Bishop',
    joan_of_portugal_virgin: 'Blessed Joan of Portugal, Virgin',
    john_beyzym_priest: 'Blessed John Beyzym, Priest',
    john_henry_newman_priest: 'Blessed John Henry Newman, Priest',  // gb, ireland
    john_martin_moye_priest: 'Blessed John Martin Moye, Priest',
    yolanda_of_poland_religious: 'Blessed Yolanda, Religious',
    joseph_vaz_priest: 'Saint Joseph Vaz, Priest',
    junipero_serra_priest: 'Saint Junípero Serra, Priest',  // us
    charles_i_of_austria: 'Blessed Charles of Austria',
    caroline_kozka_virgin: 'Blessed Caroline Kózka, Virgin and Martyr',
    kuriakose_elias_of_the_holy_family_chavara_priest: 'Saint Kuriakose Elias of the Holy Family Chavara, priest',
    laura_vicuna_virgin: 'Blessed Laura Vicuña, Virgin',
    leonid_feodorov_priest: 'Blessed Leonid Feodorov, Priest and Martyr',
    louis_zephirin_moreau_bishop: 'Blessed Louis-Zéphirin Moreau, Bishop',  // ca
    marcel_callo_martyr: 'Blessed Marcel Callo, Martyr',
    marcelina_darowska_religious: 'Blessed Marcelina Darowska, Religious',
    mary_adeodata_pisani_virgin: 'Blessed Mary Adeodata Pisani, Virgin',
    mary_assunta_pallotta_virgin: 'Blessed Mary Assunta Pallotta, Virgin',
    marydolores_rodriguez_sopena_virgin: 'Blessed Mary Dolores Rodríguez Sopeña, Virgin',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins: 'Blessed Mary Stella of the Blessed Sacrament Mardosewicz and Companions, Virgins and Martyrs',
    mary_theresa_ledochowska_virgin: 'Blessed Mary Theresa Ledóchowska, Virgin',
    mary_theresa_chiramel_mankidiyan_virgin: 'Saint Mary Theresa Chiramel Mankidiyan, Virgin',
    marie_anne_blondin_virgin: 'Blessed Marie-Anne Blondin, Virgin',  // ca
    marie_leonie_paradis_virgin: 'Blessed Marie-Léonie Paradis, Virgin',  // ca
    marie_rose_durocher_virgin: 'Blessed Marie Rose Durocher, Virgin',  // us, ca
    mary_angela_truszkowska_virgin: 'Blessed Mary Angela Truszkowska, Virgin',
    mary_of_jesus_crucified_petkovic_virgin: 'Blessed Mary of Jesus Crucified Petković, Virgin',
    mary_of_jesus_the_good_shepherd_siedliska_virgin: 'Blessed Mary of Jesus the Good Shepherd Siedliska, Virgin',
    maurice_tornay_priest: 'Blessed Maurice Tornay, Priest and Martyr',
    michael_kozal_bishop: 'Blessed Michael Kozal, Bishop and Martyr',
    miguel_agustin_pro_priest: 'Blessed Miguel Agustin Pro, Priest and Martyr',  // us
    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin: 'Saint Nazaria Ignacia of Saint Teresa of Jesus March Mesa, Virgin',
    ignatius_falzon: 'Blessed Ignatius Falzon',
    nicholas_steno_bishop: 'Blessed Nicholas Steno, Bishop',
    odoric_of_pordenone_priest: 'Blessed Odoric of Pordenone, Priest',
    oleksiy_zarytskyi_priest: 'Blessed Oleksiy Zarytskyi, Priest and Martyr',
    hosanna_of_cattaro_virgin: 'Blessed Hosanna of Cattaro, Virgin',
    peter_kibe_priest_and_companions_martyrs: 'Blessed Peter Kibe, Priest, and Companions, Martyrs',
    peter_to_rot_martyr: 'Blessed Peter To Rot, Martyr',  // australia
    pius_ix_pope: 'Blessed Pius IX, Pope',
    raphael_chylinski_priest: 'Blessed Raphael Chyliński, Priest',
    salomea_of_poland_religious: 'Blessed Salomea of Poland, Religious',
    sancha_of_portugal_and_mafalda_of_portugal_virgins: 'Blessed Sancha and Mafalda, Virgins',
    andrew_de_soveral_and_ambrose_francis_ferro_priests: 'Saints Andrew de Soveral and Ambrose Francis Ferro, Priests and Martyrs',
    sara_salkahazi_virgin: 'Blessed Sára Salkaházi, Virgin and Martyr',
    charles_spinola_and_jerome_de_angelis_priests: 'Blesseds Charles Spinola and Jerome de Angelis, Priests and Martyrs',
    sebastian_de_aparicio_religious: 'Blessed Sebastian de Aparicio, Religious',
    nykyta_budka_and_vasyl_velychkovsky_bishops: 'Blesseds Nykyta Budka and Vasyl Velychkovsky, Bishops and Martyrs',  // ca
    peter_de_zuniga_and_louis_flores_priests: 'Blesseds Peter de Zúñiga and Louis Flores, Priests and Martyrs',
    theodore_romzha_bishop: 'Blessed Theodore Romzha, Bishop and Martyr',
    teresa_of_portugal_religious: 'Blessed Teresa of Portugal, Religious',
    william_apor_bishop: 'Blessed William Apor, Bishop and Martyr',
    vincent_kadlubek_bishop: 'Blessed Vincent Kadłubek, Bishop',
    vincent_lewoniuk_and_companions_martyrs: 'Blessed Vincent Lewoniuk and Companions, Martyrs',
    vladimir_ghika_priest: 'Blessed Vladimir Ghika, Priest and Martyr',
    wladyslaw_bladzinski_priest_and_companions_martyrs: 'Blessed Wladyslaw Błądziński, Priest, and Companions, Martyrs',
    wladyslaw_of_gielniow_priest: 'Blessed Wladyslaw of Gielniow, Priest',
    zdenka_cecilia_schelingova_virgin: 'Blessed Zdenka Cecilia Schelingová, Virgin and Martyr',
    chair_of_saint_peter_the_apostle: 'Chair of Saint Peter the Apostle',  // us, gb
    conversion_of_saint_paul_the_apostle: 'Conversion of Saint Paul the Apostle',  // us, gb
    dedication_of_consecrated_churches: 'Dedication of Consecrated Churches whose date of Consecration is unknown',  // ca
    dedication_of_the_basilica_of_saint_mary_major: 'Dedication of the Basilica of Saint Mary Major',  // us
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Dedication of the Basilicas of Saints Peter and Paul, Apostles',  // us
    dedication_of_the_lateran_basilica: 'Dedication of the Lateran Basilica',  // us
    our_lady_of_the_discovery_of_the_hidden_christians: 'Our Lady of the Discovery of the Hidden Christians',
    finding_of_the_holy_cross: 'Finding of the Holy Cross',
    first_martyrs_of_the_holy_roman_church: 'First Martyrs of the Holy Roman Church',  // us, gb
    guardian_angel_of_portugal: 'Guardian Angel of Portugal',
    guardian_angels: 'Holy Guardian Angels',  // us
    holy_innocents_martyrs: 'Holy Innocents, Martyrs',  // us
    most_holy_name_of_mary: 'Most Holy Name of Mary',  // us
    hungarian_saints_and_blesseds: 'Hungarian Saints and Blesseds',
    immaculate_conception_of_mary_principal_patroness_of_the_philippines: 'Immaculate Conception of the Blessed Virgin Mary, Principal Patroness of the Philippines',  // us
    mary_mother_of_the_church: 'Blessed Virgin Mary, Mother of the Church',  // us, gb
    our_lady_help_of_christians: 'Our Lady, Help of Christians',  // nz
    our_lady_mediatrix_of_all_grace: 'Our Lady, Mediatrix of All Grace',
    our_lady_mother_of_christian_unity: 'Our Lady, Mother of Christian Unity',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico: 'Our Lady, Mother of Divine Providence, Patroness of Puerto Rico',
    our_lady_mother_of_mercy: 'Our Lady, Mother of Mercy',
    our_lady_of_aparecida_patroness_of_brazil: 'Our Lady of Aparecida, Patroness of Brazil',
    our_lady_of_bethlehem: 'Our Lady of Bethlehem',
    our_lady_of_marija_bistrica: 'Our Lady of Marija Bistrica',
    our_lady_of_china: 'Our Lady of China',
    our_lady_of_czestochowa: 'Our Lady of Częstochowa',
    our_lady_of_fatima: 'Our Lady of Fatima',  // us, gb
    our_lady_of_good_counsel: 'Our Lady of Good Counsel',  // ca
    our_lady_of_guadalupe: 'Our Lady of Guadalupe',  // us, ca
    our_lady_of_guadalupe_patroness_of_the_philippines: 'Our Lady of Guadalupe, Celestial Patroness of the Philippines',  // us, but not in us
    our_lady_of_hungary_principal_patron_of_hungary: 'Our Lady of Hungary, Principal Patron of Hungary',
    our_lady_of_itati: 'Our Lady of Itatí',
    our_lady_of_knock: 'Our Lady of Knock',  // ireland
    our_lady_of_lanka: 'Our Lady of Lanka',
    our_lady_of_lebanon: 'Our Lady of Lebanon',
    our_lady_of_loreto: 'Our Lady of Loreto',  // us
    our_lady_of_lourdes: 'Our Lady of Lourdes',  // us, gb
    our_lady_of_lujan_patroness_of_argentina: 'Our Lady of Luján, Patroness of Argentina',
    our_lady_of_madhu: 'Our Lady of Madhu',
    our_lady_of_mercy: 'Our Lady of Mercy',
    our_lady_of_mount_carmel: 'Our Lady of Mount Carmel',  // us, gb
    our_lady_of_mount_carmel_mother_and_queen_of_chile: 'Our Lady of Mount Carmel, Mother and Queen of Chile',  // us
    our_lady_of_peace: 'Our Lady of Peace',
    our_lady_of_perpetual_help: 'Our Lady of Perpetual Help',
    our_lady_of_refuge: 'Our Lady of Refuge',
    our_lady_of_sorrows: 'Our Lady of Sorrows',  // us
    our_lady_of_the_gate_of_dawn: 'Our Lady of the Gate of Dawn',
    our_lady_of_the_pillar: 'Our Lady of the Pillar',
    our_lady_of_the_rosary: 'Our Lady of the Rosary',  // us
    our_lady_of_the_valley: 'Our Lady of the Valley',
    our_lady_of_vladimir: 'Our Lady of Vladimir',
    our_lady_of_walsingham: 'Our Lady of Walsingham',  // us
    our_lady_queen_of_poland: 'Our Lady, Queen of Poland',
    our_lord_jesus_christ_the_eternal_high_priest: 'Our Lord Jesus Christ, the Eternal High Priest',  // gb
    our_lord_of_miracles: 'Our Lord of Miracles',
    presentation_of_mary: 'Presentation of the Blessed Virgin Mary',  // us
    queenship_of_mary: 'Queenship of the Blessed Virgin Mary',  // us
    adalbert_of_prague_bishop: 'Saint Adalbert, Bishop and Martyr',  // us, gb
    aelred_of_rievaulx_abbot: 'Saint Aelred of Rievaulx, Abbot',  // gb
    aengus_of_tallaght_bishop: 'Saint Aengus, Bishop and Abbot',  // ireland
    agatha_of_sicily_virgin: 'Saint Agatha, Virgin and Martyr',  // us, gb
    agnes_of_bohemia_virgin: 'Saint Agnes of Bohemia, Virgin',
    agnes_tsao_kou_ying_martyr: 'Saint Agnes Tsao Kou Ying, Martyr',
    agnes_of_rome_virgin: 'Saint Agnes, Virgin and Martyr',  // us, gb
    aidan_of_ferns_bishop: 'Saint Aidan, Bishop',  // ireland
    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne: 'Saint Aidan, Bishop, and the Saints of Lindisfarne',  // gb
    aidan_of_lindisfarne_bishop: 'Saint Aidan of Lindisfarne, Bishop and Missionary',  // ireland
    ailbe_of_emly_bishop: 'Saint Ailbe, Bishop',  // ireland
    alban_of_britain_martyr: 'Saint Alban, Martyr',
    alberic_crescitelli_priest: 'Saint Alberic Crescitelli, Priest and Martyr',
    albert_chmielowski_religious: 'Saint Albert Chmielowski, Religious',
    alberto_hurtado_priest: 'Saint Alberto Hurtado, Priest',
    albert_the_great_bishop: 'Saint Albert the Great, Bishop and Doctor of the Church',  // us
    aloysius_gonzaga_religious: 'Saint Aloysius Gonzaga, Religious',  // us
    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: 'Saint Alphonsa of the Immaculate Conception Muttathupadathu, Virgin',
    alphonsus_liguori_bishop: 'Saint Alphonsus Liguori, Bishop and Doctor of the Church',  // us
    amand_of_maastricht_bishop: 'Saint Amand, Bishop',
    ambrose_of_milan_bishop: 'Saint Ambrose, Bishop and Doctor of the Church',  // us
    andre_bessette_religious: 'Saint André Bessette, Religious',  // us, ca
    andrew_bobola_priest: 'Saint Andrew Bobola, Priest and Martyr',
    andrew_dung_lac_priest_and_companions_martyrs: 'Saint Andrew Dũng-Lạc, Priest, and Companions, Martyrs',  // us
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: 'Saint Andrew Kim Tae-gŏn, Priest, Paul Chŏng Ha-sang and Companions, Martyrs',  // us
    andrew_apostle: 'Saint Andrew, Apostle',  // us, gb, scotland
    andrew_apostle_patron_of_russia: 'Saint Andrew, Apostle and Patron of Russia',  // us, but not in us
    angela_merici_virgin: 'Saint Angela Merici, Virgin',  // us, gb
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary: 'Saints Anne, Patroness of the Province of Quebec, and Joachim, Parents of the Blessed Virgin Mary',  // us, but not in us, ca
    anno_of_cologne_bishop: 'Saint Anno of Cologne, Bishop',
    anselm_of_canterbury_bishop: 'Saint Anselm, Bishop and Doctor of the Church',  // us, gb
    ansgar_of_hamburg_bishop: 'Saint Ansgar, Bishop',  // us, gb
    anthony_mary_claret_bishop: 'Saint Anthony Mary Claret, Bishop',  // us
    anthony_of_egypt_abbot: 'Saint Anthony, Abbot',  // us, gb
    anthony_of_padua_priest: 'Saint Anthony of Padua, Priest and Doctor of the Church',  // us, gb
    anthony_of_saint_anne_galvao_priest: 'Saint Anthony of Saint Anne Galvão, Priest',
    anthony_of_the_caves_monk: 'Saint Anthony of the Caves, Monk',
    anthony_zaccaria_priest: 'Saint Anthony Zaccaria, Priest',  // us
    apollinaris_of_ravenna_bishop: 'Saint Apollinaris, Bishop and Martyr',  // us, gb
    asaph_of_wales_bishop: 'Saint Asaph, Bishop',  // gb (wales)
    asicus_of_elphin_bishop: 'Saint Asicus, Bishop',  // ireland
    athanasius_of_alexandria_bishop: 'Saint Athanasius, Bishop and Doctor of the Church',  // us
    attracta_of_killaraght_virgin: 'Saint Attracta, Virgin',  // ireland
    augustine_of_canterbury_bishop: 'Saint Augustine of Canterbury, Bishop',  // us, gb
    augustine_of_hippo_bishop: 'Saint Augustine, Bishop and Doctor of the Church',  // us
    augustine_zhao_rong_priest_and_companions_martyrs: 'Saint Augustine Zhao Rong, Priest, and Companions, Martyrs',  // us, gb
    augustine_zhao_rong_priest: 'Saint Augustine Zhao Rong, Priest and Martyr',  // us, but not in us
    barbara_of_heliopolis_virgin: 'Saint Barbara, Virgin and Martyr',
    barnabas_apostle: 'Saint Barnabas, Apostle',  // us, gb
    bartholomew_apostle: 'Saint Bartholomew, Apostle',  // us
    beatrice_da_silva_meneses_virgin: 'Saint Beatrice da Silva Meneses, Virgin',
    bede_the_venerable_priest: 'Saint Bede the Venerable, Priest and Doctor of the Church',  // us
    benedict_of_nursia_abbot: 'Saint Benedict, Abbot',  // us, gb, scotland
    benno_of_meissen_bishop: 'Saint Benno of Meissen, Bishop',
    bernadette_soubirous_virgin: 'Saint Bernadette Soubirous, Virgin',
    bernardine_of_siena_priest: 'Saint Bernardine of Siena, Priest',  // us, gb in en-gb
    bernard_of_clairvaux_abbot: 'Saint Bernard, Abbot and Doctor of the Church',  // us
    beuno_of_wales_abbot: 'Saint Beuno, Abbot',  // gb (wales)
    blaise_of_sebaste_bishop: 'Saint Blaise, Bishop and Martyr',  // us, gb
    bonaventure_of_bagnoregio_bishop: 'Saint Bonaventure, Bishop and Doctor of the Church',  // us, gb
    boniface_of_mainz_bishop: 'Saint Boniface, Bishop and Martyr',  // us, gb
    brendan_of_clonfert_abbot: 'Saint Brendan, Abbot',  // ireland
    bridget_of_sweden_religious: 'Saint Bridget, Religious',  // us, gb, scotland
    brigid_of_kildare_virgin: 'Saint Brigid, Virgin',  // ireland
    mutien_marie_wiaux_religious: 'Saint Mutien-Marie Wiaux, Religious',
    bruno_of_querfurt_bishop: 'Saint Bruno of Querfurt, Bishop And Martyr',
    bruno_of_cologne_priest: 'Saint Bruno, Priest',  // us
    caesarius_of_arles_bishop: 'Saint Caesarius of Arles, Bishop',
    cajetan_of_thiene_priest: 'Saint Cajetan, Priest',  // us
    callistus_i_pope: 'Saint Callistus I, Pope and Martyr',  // us
    camillus_de_lellis_priest: 'Saint Camillus de Lellis, Priest',  // us, gb
    canice_of_kilkenny_abbot: 'Saint Canice, Abbot',  // ireland
    canute_iv_of_denmark_martyr: 'Saint Canute, Martyr',
    carthage_of_lismore_bishop: 'Saint Carthage, Bishop',  // ireland
    casimir_of_poland: 'Saint Casimir',  // us, gb
    catherine_of_alexandria_virgin: 'Saint Catherine of Alexandria, Virgin and Martyr',  // us
    catherine_of_siena_virgin: 'Saint Catherine of Siena, Virgin and Doctor of the Church',  // us; gb, scotland
    ceallach_of_armagh_bishop: 'Saint Ceallach, Bishop',  // ireland
    cecilia_of_rome_virgin: 'Saint Cecilia, Virgin and Martyr',  // us
    sharbel_makhluf_priest: 'Saint Sharbel Makhlūf, Priest',  // us, gb
    charles_borromeo_bishop: 'Saint Charles Borromeo, Bishop',  // us
    christopher_magallanes_priest_and_companions_martyrs: 'Saint Christopher Magallanes, Priest, and Companions, Martyrs',  // us
    christopher_of_palestine_martyr: 'Saint Christopher, Martyr',
    ciaran_of_clonmacnoise_abbot: 'Saint Ciaran, Abbot',  // ireland
    clare_of_assisi_virgin: 'Saint Clare, Virgin',  // us
    clement_i_pope: 'Saint Clement I, Pope and Martyr',  // us
    clement_mary_hofbauer_priest: 'Saint Clement Mary Hofbauer, Priest',
    clotilde_of_burgundy: 'Saint Clotilde',
    colman_of_cloyne_bishop: 'Saint Colman of Cloyne, Bishop',  // ireland
    colman_of_dromore_bishop: 'Saint Colman of Dromore, Bishop',  // ireland
    colman_of_kilmacduagh_bishop: 'Saint Colman of Kilmacduagh, Bishop',  // ireland
    columba_of_iona_abbot: 'Saint Columba, Abbot',  // gb, scotland, ireland in en-IE
    columban_of_ireland_abbot: 'Saint Columban, Abbot',  // us, ireland in en-IE
    comgall_of_bangor_abbot: 'Saint Comgall, Abbot',  // ireland
    conleth_of_kildare_bishop: 'Saint Conleth, Bishop',  // ireland
    conrad_of_parzham_religious: 'Saint Conrad of Parzham, Religious',
    corbinian_of_freising_bishop: 'Saint Corbinian, Bishop',
    cuthbert_of_lindisfarne_bishop: 'Saint Cuthbert, Bishop',  // gb
    cyril_of_alexandria_bishop: 'Saint Cyril of Alexandria, Bishop and Doctor of the Church',  // us, gb
    cyril_of_jerusalem_bishop: 'Saint Cyril of Jerusalem, Bishop and Doctor of the Church',  // us, gb
    damasus_i_pope: 'Saint Damasus I, Pope',  // us
    damien_de_veuster_priest: 'Saint Damien de Veuster, Priest',  // us
    david_of_wales_bishop: 'Saint David, Bishop',  // gb, wales, ireland
    david_lewis_priest: 'Saint David Lewis, Priest and Martyr',  // gb (wales)
    davnet_of_sliabh_beagh_virgin: 'Saint Davnet, Virgin',  // ireland
    declan_of_ardmore_bishop: 'Saint Declan, Bishop',  // ireland
    deiniol_of_bangor_bishop: 'Saint Deiniol, Bishop',  // gb (wales)
    demetrius_of_thessaloniki_martyr: 'Saint Demetrius, Martyr',
    denis_of_paris_bishop_and_companions_martyrs: 'Saint Denis, Bishop, and Companions, Martyrs',  // us
    dionysius_the_areopagite_bishop: 'Saint Dionysius the Areopagite, Bishop and Martyr',
    // saintDominicPriest: 'Saint Dominic, Priest',  // us, australia, nz
    // saintDubriciusBishop: 'Saint Dyfrig, Bishop',  // gb (wales)
    // saintEdmundCampionPriestAndMartyr: 'Saint Edmund Campion, Priest and Martyr',
    // saintEdmundOfAbingdonBishop: 'Saint Edmund of Abingdon, Bishop',  // gb
    // saintEdwardTheConfessor: 'Saint Edward the Confessor',  // gb
    // saintElijahProphet: 'Saint Elijah, prophet',
    // saintElizabethAnnSetonReligious: 'Saint Elizabeth Ann Seton, Religious',  // us
    // saintElizabethOfHungaryReligious: 'Saint Elizabeth of Hungary, Religious',  // us, gb
    // saintElizabethOfPortugal: 'Saint Elizabeth of Portugal',  // us, gb
    // saintEmeric: 'Saint Emeric',
    // saintEndaAbbot: 'Saint Enda, Abbot',  // ireland
    // saintEphremDeaconAndDoctor: 'Saint Ephrem, Deacon and Doctor of the Church',  // us, gb
    // saintEricIxMartyr: 'Saint Eric IX, Martyr',
    // saintEtheldredaAudreyVirgin: 'Saint Ethelreda, Abbess',  // gb; Was: `Saint Etheldreda (Audrey), Virgin`
    // saintEugeneDeMazenodBishop: 'Saint Eugène de Mazenod, Bishop',  // ca; Should we not translate the names?
    // saintEugeneEoghanBishop: 'Saint Eugene (Eoghan), Bishop',  // ireland
    // saintEulaliaOfMeridaVirginAndMartyr: 'Saint Eulalia of Merida, Virgin and Martyr',
    // saintEulogiusOfCordobaBishop: 'Saint Eulogius of Cordoba, Bishop',
    // saintEusebiusOfVercelliBishop: 'Saint Eusebius of Vercelli, Bishop',  // us
    // saintEysteinnBishop: 'Saint Eysteinn, Bishop',
    // saintEzequielMorenoBishop: 'Saint Ezequiel Moreno, Bishop',
    // saintFabianPopeAndMartyr: 'Saint Fabian, Pope and Martyr',  // us, gb
    // saintFachananOfKilfenoraBishop: 'Saint Fachanan, Bishop',  // ireland; Was: `Saint Fachanan of Kilfenora, Bishop`
    // saintFachtnaBishop: 'Saint Fachtna, Bishop',  // ireland
    // saintFaustinaKowalskaVirginAndReligious: 'Saint Faustina Kowalska, Virgin',  // us
    // saintFelipeDeJesusPriestAndMartyr: 'Saint Felipe de Jesus, Priest And Martyr',
    // saintFerdinand: 'Saint Ferdinand',
    // saintFergalBishopAndMissionary: 'Saint Fergal, Bishop and Missionary',  // ireland
    // saintFiacreMonk: 'Saint Fiacre, Monk',  // ireland
    // saintFidelisOfSigmaringenPriestAndMartyr: 'Saint Fidelis of Sigmaringen, Priest and Martyr',  // us, gb
    // saintFinbarrBishop: 'Saint Finbarr, Bishop',  // ireland
    // saintFinnianOfClonardBishop: 'Saint Finian, Bishop',  // ireland; Was: `Saint Finian of Clonard, Bishop`
    // saintFintan: 'Saint Fintan',  // ireland
    // saintFlannanBishop: 'Saint Flannan, Bishop',  // ireland
    // saintFlorianAndHisCompanionsMartyrs: 'Saint Florian and Companions, Martyrs',
    // saintFlorianMartyr: 'Saint Florian, Martyr',
    // saintFrancesOfRomeReligious: 'Saint Frances of Rome, Religious',  // us, gb
    // saintFrancesXavierCabriniVirgin: 'Saint Frances Xavier Cabrini, Virgin',  // us
    // saintFrancisBorgiaPriest: 'Saint Francis Borgia, Priest',
    // saintFrancisDeSalesBishopAndDoctor: 'Saint Francis de Sales, Bishop and Doctor of the Church',  // us, gb
    // saintFrancisDiazPriestAndCompanionsMartyrs: 'Saint Francis Diaz, Priest, and Companions, Martyrs',
    // saintFrancisFernandezDeCapillasPriestAndMartyr: 'Saint Francis Fernandez de Capillas, Priest and Martyr',
    // saintFrancisOfAssisi: 'Saint Francis of Assisi',  // us; TODO: He was a deacon
    // saintFrancisOfPaolaHermit: 'Saint Francis of Paola, Hermit',  // us, gb
    // saintFrancisSolanusPriest: 'Saint Francis Solanus, Priest',
    // saintFrancisXavierPriest: 'Saint Francis Xavier, Priest',  // us
    // saintFrancoisDeLavalBishop: 'Saint François de Laval, Bishop',  // ca; TODO: Should we not translate the names?
    // saintFridolinOfSackingenMonk: 'Saint Fridolin of Säckingen, Monk',
    // saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops: 'Saints Fructuosus, Martin of Dume and Gerald, Bishops',
    // saintFursaAbbotAndMissionary: 'Saint Fursa, Abbot and Missionary',  // ireland
    // saintGabrieltaurinDufresseBishopAndMartyr: 'Saint Gabriel-Taurin Dufresse, Bishop and Martyr',
    // saintGallAbbotAndMissionary: 'Saint Gall, Abbot and Missionary',  // ireland
    // saintGenevieveVirgin: 'Saint Genevieve, Virgin',
    // saintGeorgeMartyr: 'Saint George, Martyr',  // us, gb
    // saintGeorgePrecaPriest: 'Saint George Preca, Priest',
    // saintGerardBishop: 'Saint Gerard of Csanád, Bishop and Martyr',
    // saintGermanusOfAuxerreBishop: 'Saint Germanus of Auxerre, Bishop',  // gb (wales)
    // saintGertrudeOfNivellesAbbess: 'Saint Gertrude of Nivelles, Abbess',
    // saintGertrudeTheGreatVirgin: 'Saint Gertrude, Virgin',  // us; Was: `Saint Gertrude The Great, Virgin`
    // saintGobnaitVirgin: 'Saint Gobnait, Virgin',  // ireland
    // saintGonsaloGarciaMartyr: 'Saint Gonsalo Garcia, Martyr',
    // saintGorazdAndCompanions: 'Saint Gorazd and Companions',
    // saintGotthardBishop: 'Saint Gotthard, Bishop',
    // saintGregoryTheGreatPopeAndDoctor: 'Saint Gregory the Great, Pope and Doctor of the Church',  // us; gb
    // saintGregoryViiPope: 'Saint Gregory VII, Pope',  // us, gb (wales)
    // saintHectorValdivielsoSaezMartyr: 'Saint Benedict of Jesus Valdivielso Sáez, Religious and Martyr',
    // saintHedwigOfPoland: 'Saint Hedwig of Poland',
    // saintHedwigReligious: 'Saint Hedwig, Religious',  // us, ca
    // saintHelena: 'Saint Helena',
    // saintHemmaOfGurk: 'Saint Hemma of Gurk',
    // saintHenry: 'Saint Henry',  // us, gb
    // saintHenryBishopAndMartyr: 'Saint Henry, Bishop and Martyr',
    // saintHermannJosephPriest: 'Saint Hermann Joseph, Priest',
    // saintHermenegildMartyr: 'Saint Hermenegild, Martyr',
    // saintHilaryOfPoitiersBishopAndDoctor: 'Saint Hilary, Bishop and Doctor of the Church',  // us; Was: `Saint Hilary of Poitiers, Bishop and Doctor`, gb
    // saintHildaAbbess: 'Saint Hilda, Abbess',  // gb
    // saintHildegardOfBingenAbbessAndDoctor: 'Saint Hildegard of Bingen, Abbess and Doctor of the Church',
    // saintHubertOfLiegeBishop: 'Saint Hubert, Bishop',  // Note: key `OfLiege` in in the key name
    // saintHughOfLincolnBishop: 'Saint Hugh of Lincoln, Bishop',  // gb
    // hyacinthOfPolandPriest: 'Saint Hyacinth, Priest',
    // saintIgnatiusOfAntiochBishopAndMartyr: 'Saint Ignatius of Antioch, Bishop and Martyr',  // us
    // saintIgnatiusOfLoyolaPriest: 'Saint Ignatius of Loyola, Priest',  // us, gb
    // saintIldephonsusOfToledoBishop: 'Saint Ildephonsus of Toledo, Bishop',
    // saintIlltudAbbot: 'Saint Illtud, Abbot',  // gb (wales)
    // saintIrenaeusBishopAndMartyr: 'Saint Irenaeus, Bishop and Martyr',  // us
    // saintIrene: 'Saint Irene',
    // saintIsidoreOfSevilleBishopAndDoctorOfTheChurch: 'Saint Isidore, Bishop and Doctor of the Church',  // us; Was: `Saint Isidore of Seville, Bishop and Doctor of the Church`, gb
    // saintIsidoreTheFarmer: 'Saint Isidore',  // us; it was: `Saint Isidore the Farmer`
    // saintItaVirgin: 'Saint Ita, Virgin',  // ireland
    // saintIvoPriest: 'Saint Ivo, Priest',
    // saintJamesApostle: 'Saint James, Apostle',  // us, gb
    // saintJamesApostlePatronOfSpain: 'Saint James, Apostle and Patron of Spain',  // us, but not in us
    // saintJaneFrancesDeChantalReligious: 'Saint Jane Frances de Chantal, Religious',  // us
    // saintJanuariusBishopAndMartyr: 'Saint Januarius, Bishop and Martyr',  // us
    // saintJarlathBishop: 'Saint Jarlath, Bishop',  // ireland
    // saintJeromeEmiliani: 'Saint Jerome Emiliani',  // us, gb
    // saintJeromePriestAndDoctor: 'Saint Jerome, Priest and Doctor of the Church',  // us
    // saintJoachimHoMartyr: 'Saint Joachim Ho, Martyr',
    // saintJoanOfArcVirginSecondaryPatronessOfFrance: 'Saint Joan of Arc, Virgin, Secondary Patroness of France',
    // saintJoaquinaVedruna: 'Saint Joaquina of Saint Francis of Assisi Vedruna, Religious',
    // saintJohnBaptistDeLaSallePriest: 'Saint John Baptist de la Salle, Priest',  // us
    // saintJohnBerchmansReligious: 'Saint John Berchmans, Religious',
    // saintJohnBoscoPriest: 'Saint John Bosco, Priest',  // us, gb
    // saintJohnCassianPriest: 'Saint John Cassian, Priest',
    // saintJohnChrysostomBishopAndDoctor: 'Saint John Chrysostom, Bishop and Doctor of the Church',  // us
    // saintJohnDamascenePriestAndDoctor: 'Saint John Damascene, Priest and Doctor of the Church',  // us
    // saintJohnDeBritoPriestAndMartyr: 'Saint John de Brito, Priest and Martyr',
    // saintJohnEudesPriest: 'Saint John Eudes, Priest',  // us
    // saintJohnGabrielPerboyrePriestAndMartyr: 'Saint John Gabriel Perboyre, Priest and Martyr',
    // saintJohnIPopeAndMartyr: 'Saint John I, Pope and Martyr',  // us. gb
    // saintJohnJonesPriestAndMartyr: 'Saint John Jones, Priest and Martyr',  // gb (wales)
    // saintJohnLeonardiPriest: 'Saint John Leonardi, Priest',  // us
    // saintJohnMaciasReligious: 'Saint John Macias, Religious',
    // saintJohnMaryVianneyPriest: 'Saint John Vianney, Priest',  // us; Was: `Saint John Mary Vianney, Priest`
    // saintJohnNepomucenePriestAndMartyr: 'Saint John Nepomucene, Priest and Martyr',
    // saintJohnNeumannBishop: 'Saint John Neumann, Bishop',  // us
    // saintJohnOfAvilaPriest: 'Saint John of Avila, Priest',
    // saintJohnOfCapistranoPriest: 'Saint John of Capistrano, Priest',  // us
    // saintJohnOfDuklaPriest: 'Saint John of Dukla, Priest',
    // saintJohnOfGodReligious: 'Saint John of God, Religious',  // us
    // saintJohnOfKantyPriest: 'Saint John of Kanty, Priest',  // us; Was: `Saint John of Kenty, Priest`
    // saintJohnOfTheCrossPriestAndDoctor: 'Saint John of the Cross, Priest and Doctor of the Church',  // us
    // saintJohnOfTrioraPriestAndMartyr: 'Saint John of Triora, Priest and Martyr',
    // saintJohnOgilvie: 'Saint John Ogilvie',  // scotland
    // saintJohnPaulIiPope: 'Saint John Paul II, Pope',  // us, gb, ireland
    // saintJohnRobertsPriestAndMartyr: 'Saint John Roberts, Priest and Martyr',  // gb (wales)
    // saintJohnSarkanderPriestAndMartyr: 'Saint John Sarkander, Priest and Martyr',
    // saintJohnTheApostleAndEvangelist: 'Saint John, Apostle and Evangelist',  // us; Was: `Saint John the Apostle and Evangelist`
    // saintJohnXxiiiPope: 'Saint John XXIII, Pope',  // us, ireland
    // saintJosaphatBishopAndMartyr: 'Saint Josaphat, Bishop and Martyr',  // us
    // saintJoseDeAnchietaPriest: 'Saint Jose de Anchieta, Priest',
    // saintJosephBilczewskiBishop: 'Saint Joseph Bilczewski, Bishop',
    // saintJoseMariaDeYermoPriest: 'Saint Jose Maria de Yermo, Priest',
    // saintJosemariaEscrivaDeBalaguerPriest: 'Saint Josemaria Escriva de Balaguer, Priest',
    // saintJosephFreinademetzPriest: 'Saint Joseph Freinademetz, Priest',
    // saintJosephineBakhitaVirgin: 'Saint Josephine Bakhita, Virgin',  // us, gb
    // saintJosephOfCalasanzPriest: 'Saint Joseph of Calasanz, Priest',  // us
    // josephSpouseOfMaryCanada: 'Saint Joseph, Spouse of the Blessed Virgin Mary and Principal Patron of Canada',  // us, but not in the us, gb, ca
    // saintJosephTheWorker: 'Saint Joseph the Worker',  // us
    // saintJosephYuanPriestAndMartyr: 'Saint Joseph Yuan, Priest and Martyr',
    // saintJosephZhangDapengMartyr: 'Saint Joseph Zhang Dapeng, Martyr',
    // saintJozefSebastianPelczar: 'Saint Jozef Sebastian Pelczar, Bishop',
    // saintJuanDiegoCuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin',  // us
    // saintJulianaOfLiegeVirgin: 'Saint Juliana of Liege, Virgin',
    // saintJulieBilliartVirgin: 'Saint Julie Billiart, Virgin',
    // saintJustinMartyr: 'Saint Justin, Martyr',  // us
    // saintKateriTekakwithaVirgin: 'Saint Kateri Tekakwitha, Virgin',  // us, ca
    // saintKatharineDrexelVirgin: 'Saint Katharine Drexel, Virgin',  // us
    // saintKentigern: 'Saint Kentigern',  // scotland
    // saintKevinAbbot: 'Saint Kevin, Abbot',  // ireland
    // saintKieranBishop: 'Saint Kieran, Bishop',  // ireland
    // saintKilianBishopAndCompanionsMartyrs: 'Saint Kilian, Bishop, and Companions, Martyrs',
    // saintKilianBishopAndMartyr: 'Saint Kilian, Bishop and Martyr',  // ireland
    // saintKingaVirgin: 'Saint Kinga, Virgin',
    // saintLadislaus: 'Saint Ladislaus',
    // saintLambertBishopAndMartyr: 'Saint Lambert of Maastricht, Bishop and Martyr',
    // saintLaurenceOTooleBishop: 'Saint Laurence O’Toole, Bishop',  // ireland
    // saintLaurenceWangBingAndCompanionsMartyrs: 'Saint Laurence Wang Bing and Companions, Martyrs',
    // saintLawrenceBaiXiaomanMartyr: 'Saint Lawrence Bai Xiaoman, Martyr',
    // saintLawrenceOfBrindisiPriestAndDoctor: 'Saint Lawrence of Brindisi, Priest and Doctor of the Church',  // us, gb
    // saintLawrenceOfRomeDeaconAndMartyr: 'Saint Lawrence, Deacon and Martyr',  // us; Was: `Saint Lawrence of Rome, Deacon and Martyr`
    // saintLawrenceRuizAndCompanionsMartyrs: 'Saint Lawrence Ruiz and Companions, Martyrs',  // us
    // saintLeanderBishop: 'Saint Leander, Bishop',
    // saintLeliaVirgin: 'Saint Lelia, Virgin',  // ireland
    // saintLeobaAbbess: 'Saint Leoba, Abbess',
    // saintLeoIxPope: 'Saint Leo IX, Pope',
    // saintLeoManginPriestAndCompanionsMartyrs: 'Saint Leo Mangin, Priest, and Companions, Martyrs',
    // saintLeonardOfNoblacHermit: 'Saint Leonard of Noblac, Hermit',
    // saintLeopoldIII: 'Saint Leopold III',
    // saintLeopoldMandicPriest: 'Saint Leopold Mandic, Priest',
    // saintLeoTheGreatPopeAndDoctor: 'Saint Leo the Great, Pope and Doctor of the Church',  // us
    // saintLouis: 'Saint Louis',  // us
    // saintLouisBertrandPriest: 'Saint Louis Bertrand, Priest',
    // saintLouisMarieGrignionDeMontfortPriest: 'Saint Louis Grignion de Montfort, Priest',  // us; Was: `Saint Louis Marie Grignion de Montfort, Priest`, gb in en-gb, australia, nz
    // saintLuciusOfChurBishopAndMartyr: 'Saint Lucius of Chur, Bishop and Martyr',
    // saintLucyOfSyracuseVirginAndMartyr: 'Saint Lucy, Virgin and Martyr',  // us; Was: `Saint Lucy of Syracuse, Virgin and Martyr`
    // saintLucyYiZhenmeiVirginAndMartyr: 'Saint Lucy Yi Zhenmei, Virgin and Martyr',
    // saintLudgerBishop: 'Saint Ludger, Bishop',
    // saintLudmilaMartyr: 'Saint Ludmila, Martyr',
    // saintLuigiOrionePriest: 'Saint Luigi Orione, Priest',
    // saintLukeTheEvangelist: 'Saint Luke, Evangelist',  // us
    // saintLydiaOfPhilippi: 'Saint Lydia of Philippi',
    // saintMacartanBishop: 'Saint Macartan, Bishop',  // ireland
    // saintMacNissiBishop: 'Saint Mac Nissi, Bishop',  // ireland
    // saintMaelruainMaolruainVirgin: 'Saint Maelruain, Bishop and Abbot',  // ireland
    // saintMagnusMartyr: 'Saint Magnus, Martyr',
    // saintMalachyBishop: 'Saint Malachy, Bishop',  // ireland
    // saintMarcellinChampagnatPriest: 'Saint Marcellin Champagnat, Priest',  // australia, nz
    // saintMargaretMaryAlacoqueVirgin: 'Saint Margaret Mary Alacoque, Virgin',  // us, ca
    // saintMargaretOfAntiochVirginAndMartyr: 'Saint Margaret of Antioch, Virgin and Martyr',
    // saintMargaretOfHungary: 'Saint Margaret of Hungary',
    // saintMargaretOfScotland: 'Saint Margaret of Scotland',  // us, gb, scotland
    // saintMargueriteBourgeoysVirgin: 'Saint Marguerite Bourgeoys, Virgin',  // ca; TODO: Should we not tranlate the name?
    // saintMargueriteDYouvilleReligious: 'Saint Marguerite d’Youville, Religious',  // ca; TODO: Should we not tranlate the name?
    // saintMariaDeJesusSacramentadoVenegasVirgin: 'Saint Mary of Jesus in the Blessed Sacrament Venegas, Virgin',
    // saintMariaGorettiVirginAndMartyr: 'Saint Maria Goretti, Virgin and Martyr',  // us, gb
    // saintMariaGuadalupeGarciaZavalaVirgin: 'Saint María Guadalupe García Zavala, Virgin',
    // saintMariaMicaelaOfTheBlessedSacramentVirgin: 'Saint María Micaela of the Blessed Sacrament, Virgin',
    // saintMarianaDeJesusDeParedesVirgin: 'Saint Mariana de Jesus de Paredes, Virgin',
    // saintMarianneCopeVirgin: 'Saint Marianne Cope, Virgin',  // us
    // saintMarieOfTheIncarnationReligious: 'Saint Marie of the Incarnation, Religious',  // ca: `St. Marie de l’Incarnation, Religious` (I think we should translate it from French to English)
    // saintMarkoKrizinPriestAndMartyr: 'Saint Marko Krizin, Priest and Martyr',
    // saintMarkTheEvangelist: 'Saint Mark, Evangelist',  // us, gb, australia, nz
    // saintMaroun: 'Saint Maroun',
    // saintMartha: 'Saint Martha',  // us, gb
    // saintMartinDePorresReligious: 'Saint Martin de Porres, Religious',  // us
    // saintMartinIPopeAndMartyr: 'Saint Martin I, Pope and Martyr',  // us
    // saintMartinOfToursBishop: 'Saint Martin of Tours, Bishop',  // us
    // saintMartinWuXueshengAndCompanionsMartyrs: 'Saint Martin Wu Xuesheng and Companions, Martyrs',
    // saintMaryMagdalene: 'Saint Mary Magdalene',  // us, gb
    // saintMaryMagdaleneDePazziVirgin: 'Saint Mary Magdalene de’ Pazzi, Virgin',  // us, gb (wales)
    // saintMaryOfTheCrossVirgin: 'Saint Mary of the Cross MacKillop, Virgin',  // australia, nz
    // saintMatilda: 'Saint Matilda',
    // saintMatthewApostleAndEvangelist: 'Saint Matthew, Apostle and Evangelist',  // us
    // saintMatthiasTheApostle: 'Saint Matthias, Apostle',  // us, gb
    // saintMauriceAndCompanionsMartyrs: 'Saint Maurice and Companions, Martyrs',
    // saintMaurusBishop: 'Saint Maurus, Bishop',
    // saintMaximilianMaryKolbePriestAndMartyr: 'Saint Maximilian Kolbe, Priest and Martyr',  // us; Was: `Saint Maximilian Mary Kolbe, Priest and Martyr`
    // saintMeinradMartyr: 'Saint Meinrad, Martyr',
    // saintMelBishop: 'Saint Mel, Bishop',  // ireland
    // saintMelchiorGrodzieckiPriestAndMartyr: 'Saint Melchior Grodziecki, Priest and Martyr',
    // saintMiguelFebresCorderoReligious: 'Saint Miguel Febres Cordero, Religious',
    // saintMolaiseLaisrenLaserianBishop: 'Saint Laserian, Bishop',  // ireland
    // saintMonica: 'Saint Monica',  // us
    // saintMoninneVirgin: 'Saint Moninne, Virgin',  // ireland
    // saintMunchinBishop: 'Saint Munchin, Bishop',  // ireland
    // saintMuredachBishop: 'Saint Muredach, Bishop',  // ireland
    // saintNicholasBishop: 'Saint Nicholas, Bishop',  // us
    // saintNicholasOfFlueHermit: 'Saint Nicholas of Flüe, Hermit',
    // saintNikolaTavelicPriestAndMartyr: 'Saint Nikola Tavelic, Priest and Martyr',
    // saintNinian: 'Saint Ninian',  // scotland
    // saintNorbertBishop: 'Saint Norbert, Bishop',  // us, gb
    // saintNunoDeSantaMaria: 'Saint Nuno de Santa Maria',
    // saintOdileOfAlsaceAbbess: 'Saint Odile of Alsace, Abbess',
    // saintOlafIiMartyr: 'Saint Olaf II, Martyr',
    // saintOlga: 'Saint Olga',
    // saintOliverPlunkettBishopAndMartyr: 'Saint Oliver Plunket, Bishop and Martyr',  // gb; Was: `Saint Oliver Plunkett, Bishop and Martyr`; ireland
    // saintOtteranMonk: 'Saint Otteran, Monk',  // ireland
    // saintOttoOfBambergBishop: 'Saint Otto of Bamberg, Bishop',
    // saintPancrasMartyr: 'Saint Pancras, Martyr',  // us, gb
    // saintPantaleon: 'Saint Pantaleon',
    // saintPaschalBaylon: 'Saint Paschal Baylón',
    // saintPatrickBishop: 'Saint Patrick, Bishop',  // us, gb, scotland, ireland, australia
    // saintPaulChenChangpinAndCompanionsMartyrs: 'Saint Paul Chen Changpin and Companions, Martyrs',
    // saintPaulinaOfTheAgonizingHeartOfJesusVirgin: 'Saint Paulina of the Agonizing Heart of Jesus Visintainer, Virgin',  // gb, but not in gb
    // saintPaulinusOfNolaBishop: 'Saint Paulinus of Nola, Bishop',  // us, gb
    // saintPaulinusOfTrierBishop: 'Saint Paulinus of Trier, Bishop',
    // saintPaulinusOfYorkBishop: 'Saint Paulinus of York, Bishop',  // gb
    // saintPaulIvPope: 'Saint Paul VI, Pope',  // us, gb
    // saintPaulLiuHanzouPriestAndMartyr: 'Saint Paul Liu Hanzuo, Priest and Martyr',
    // saintPaulMikiAndCompanionsMartyrs: 'Saint Paul Miki and Companions, Martyrs',  // us, gb, nz
    // saintPaulOfTheCrossPriest: 'Saint Paul of the Cross, Priest',  // us
    // saintPedroCalungsodMartyr: 'Saint Pedro Calungsod, Martyr',
    // saintPelagiusMartyr: 'Saint Pelagius, Martyr',
    // saintPeterCanisiusPriestAndDoctor: 'Saint Peter Canisius, Priest and Doctor of the Church',  // us
    // saintPeterChanelPriestAndMartyr: 'Saint Peter Chanel, Priest and Martyr',  // us, gb
    // saintPeterChrysologusBishopAndDoctor: 'Saint Peter Chrysologus, Bishop and Doctor of the Church',  // us, gb
    // saintPeterClaverPriest: 'Saint Peter Claver, Priest',  // us
    // saintPeterDamianBishopAndDoctorOfTheChurch: 'Saint Peter Damian, Bishop and Doctor of the Church',  // us, gb
    // saintPeterJulianEymardPriest: 'Saint Peter Julian Eymard, Priest',  // us
    // saintPeterLiuMartyr: 'Saint Peter Liu Wenyuan, Martyr',
    // saintPeterOfAlcantaraPriest: 'Saint Peter of Alcantara, Priest',
    // saintPeterSanzBishopAndMartyr: 'Saint Peter Sanz, Bishop and Martyr',
    // saintPeterWuMartyr: 'Saint Peter Wu, Martyr',
    // saintPhilipNeriPriest: 'Saint Philip Neri, Priest',  // us, gb
    // saintPioOfPietrelcinaPriest: 'Saint Pius of Pietrelcina, Priest',  // us
    // saintPirminAbbotAndBishop: 'Saint Pirmin, Abbot and Bishop',
    // saintPiusVPope: 'Saint Pius V, Pope',  // us, gb in en-gb, ca
    // saintPiusXPope: 'Saint Pius X, Pope',  // us
    // saintPolycarpBishopAndMartyr: 'Saint Polycarp, Bishop and Martyr',  // us
    // saintPothinusBishopSaintBlandinaVirginAndTheirCompanionsMartyrs: 'Saints Pothinus, Bishop, Blandina, Virgin, and Companions, Martyrs',
    // saintProcopiusAbbot: 'Saint Procopius, Abbot',
    // saintPubliusBishop: 'Saint Publius, Bishop',
    // saintQuirinusOfSescia: 'Saint Quirinus of Sescia, Bishop',
    // saintRabanusMaurusBishop: 'Saint Rabanus Maurus, Bishop',
    // saintRadimBishop: 'Saint Radim, Bishop',
    // saintRafaelGuizarYValenciaBishop: 'Saint Rafael Guizar y Valencia, Bishop',
    // saintRafalKalinowskiPriest: 'Saint Rafal Kalinowski, Priest',
    // saintRafqaRebeccaVirgin: 'Saint Rafqa Pietra Choboq Ar-Rayès, Virgin',
    // saintRaymondOfPenyafortPriest: 'Saint Raymond of Penyafort, Priest',  // us, gb in en-gb, ca
    // saintRemigiusBishop: 'Saint Remigius, Bishop',
    // saintRichardGwynMartyr: 'Saint Richard Gwyn, Martyr',  // gb (wales)
    // saintRichardOfChichesterBishop: 'Saint Richard of Chichester, Bishop',  // gb
    // saintRitaOfCascia: 'Saint Rita of Cascia, Religious',  // us
    // saintRobertBellarmineBishopAndDoctor: 'Saint Robert Bellarmine, Bishop and Doctor of the Church',  // us
    // saintRoch: 'Saint Roch',
    // saintRomualdAbbot: 'Saint Romuald, Abbot',  // us
    // saintRoseOfLima: 'Saint Rose of Lima, Virgin',  // us
    // saintRoseOfLimaSecondaryPatronessOfThePhilippines: 'Saint Rose of Lima, Virgin and Secondary Patroness of the Philippines',
    // saintRosePhilippineDuchesneVirgin: 'Saint Rose Philippine Duchesne, Virgin',  // us
    // saintsAlbanJuliusAndAaronMartyrs: 'Saints Alban, Julius and Aaron, Martyrs',  // gb (wales)
    // saintsAndrewZorardAndBenedictHermits: 'Saints Andrew Zorard and Benedict, Hermits',
    // saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors: 'Saints Basil the Great and Gregory Nazianzen, Bishops and Doctors of the Church',  // us, gb
    // saintsBenedyktJanMateuszIsaakAndKrystynMartyrs: 'Saints Benedykt, Jan, Mateusz, Isaak and Krystyn, Martyrs',
    // saintsBorisAndGlebMartyrs: 'Saints Boris and Gleb, Martyrs',
    // saintsCanuteEricAndOlafMartyrs: 'Saints Canute, Eric and Olaf, Martyrs',
    // saintsChadAndCeddBishop: 'Saints Chad and Cedd, Bishops',  // gb
    // saintsCharlesLwangaAndCompanionsMartyrs: 'Saints Charles Lwanga and Companions, Martyrs',  // us, gb, ireland
    // saintScholasticaVirgin: 'Saint Scholastica, Virgin',  // us, gb
    // saintsClementOfOhridAndGorazdBishopsAndCompanions: 'Saints Clement of Ohrid and Gorazd, Bishops, and Companions',
    // saintsConradAndGebhardOfConstanceBishops: 'Saints Conrad and Gebhard of Constance, Bishops',
    // saintsCorneliusPopeAndCyprianBishopMartyrs: 'Saints Cornelius, Pope, and Cyprian, Bishop, Martyrs',  // us
    // saintsCosmasAndDamianMartyrs: 'Saints Cosmas and Damian, Martyrs',  // us, ca
    // saintsCyrilMonkAndMethodiusBishop: 'Saints Cyril, Monk, and Methodius, Bishop',  // us, gb, scotland
    // saintSebastianMartyr: 'Saint Sebastian, Martyr',  // us, gb
    // saintSenanBishop: 'Saint Senan, Bishop',  // ireland
    // saintSeverinusOfNoricumMonk: 'Saint Severinus of Noricum, Monk',
    // saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs: 'Saints Felipe de Jesus, Paul Miki and Companions, Martyrs',  // us, but not in us (Felipe de Jesus need to be proofed)
    // saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs: 'Saints Fructuosus, Bishop, Augurius and Eulogius, Deacons, Martyrs',
    // saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs: 'Saints Gregory Grassi, Francis Fogolla and Anthony Fantosati, Bishops, and Companions, Martyrs',
    // saintsHenryAndCunigunde: 'Saints Henry and Cunigunde',
    // saintSigismundMartyr: 'Saint Sigismund, Martyr',
    // saintSimonOfLipnicaPriest: 'Saint Simon of Lipnica, Priest',
    // saintSixtusIiPopeAndCompanionsMartyrs: 'Saint Sixtus II, Pope, and Companions, Martyrs',  // us
    // saintsJoachimAndAnne: 'Saints Joachim and Anne, Parents of the Blessed Virgin Mary',  // us; Was: `Saints Joachim and Anne`  // joachim_and_anne_parents_of_mary
    // saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs: 'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs',  // us
    // saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada: 'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs and Secondary Patrons of Canada',  // us, but not in us; ca
    // saintsJohnFisherBishopAndThomasMoreMartyrs: 'Saints John Fisher, Bishop, and Thomas More, Martyrs',  // us, australia
    // saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs: 'Saints Louis Versiglia, Bishop and Callistus Caravario, Priest, Martyrs',
    // saintsMarcellinusAndPeterMartyrs: 'Saints Marcellinus and Peter, Martyrs',  // us, gb
    // saintsMargaretClitherowAnneLineAndMargaretWardMartyrs: 'Saints Margaret Clitherow, Anne Line and Margaret Ward, Virgin, Martyrs',  // gb
    // saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs: 'Saints Marko Krizin, Melichar Grodecki and Stephen Pongrac, Priests and Martyrs',
    // saintsMichaelGabrielAndRaphaelArchangels: 'Saints Michael, Gabriel and Raphael, Archangels',  // us
    // saintsNereusAndAchilleusMartyrs: 'Saints Nereus and Achilleus, Martyrs',  // us, gb
    // saintSoledadTorresAcostaVirgin: 'Saint Soledad Torres Acosta, Virgin',
    // saintsPedroBautistaPaulMikiAndCompanionsMartyrs: 'Saints Pedro Bautista, Paul Miki and Companions, Martyrs',  // us, but not in us (Pedro Bautista need to be proofed)
    // saintsPerpetuaAndFelicityMartyrs: 'Saints Perpetua and Felicity, Martyrs',  // us, gb
    // saintsPhilipAndJamesApostles: 'Saints Philip and James, Apostles',  // us
    // saintsPhilipEvansAndJohnLloydPriestsAndMartyrs: 'Saints Philip Evans and John Lloyd, Priests and Martyrs',  // gb (wales)
    // saintsPontianPopeAndHippolytusPriestMartyrs: 'Saints Pontian, Pope, and Hippolytus, Priest, Martyrs',  // us
    // saintSpyridon: 'Saint Spyridon, Bishop',
    // saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs: 'Saints Roque Gonzalez, Alfonso Rodriguez Olmedo, and Juan del Castillo, Priests and Martyrs',
    // saintsRupertAndVirgiliusOfSalzburgBishops: 'Saints Rupert and Virgilius of Salzburg, Bishops',
    // saintsSimonAndJudeApostles: 'Saints Simon and Jude, Apostles',  // us
    // saintStanislausBishopAndMartyr: 'Saint Stanislaus, Bishop and Martyr',  // us
    // saintStanislausKazimierczykPriest: 'Saint Stanislaus Kazimierczyk, Priest',
    // saintStanislausKostkaReligious: 'Saint Stanislaus Kostka, Religious',
    // saintStephenOfHungary: 'Saint Stephen of Hungary',  // us
    // saintStephenTheFirstMartyr: 'Saint Stephen, the First Martyr',  // us
    // saintsTimothyAndTitusBishops: 'Saints Timothy and Titus, Bishops',  // us, australia
    // saintSunnivaVirginAndMartyr: 'Saint Sunniva, Virgin and Martyr',
    // saintSwithunBishop: 'Saint Swithun, Bishop',
    // saintSylvesterIPope: 'Saint Sylvester I, Pope',  // us
    // saintTeiloBishop: 'Saint Teilo, Bishop',  // gb (wales)
    // saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr: 'Saint Teresa Benedicta of the Cross Stein, Virgin and Martyr',  // us, gb, scotland
    // saintTeresaOfCalcuttaReligious: 'Saint Teresa of Calcutta, Religious',
    // saintTeresaOfJesusJornetEIbarsVirgin: 'Saint Teresa of Jesus Jornet e Ibars, Virgin',
    // saintTeresaOfJesusVirginAndDoctorOfTheChurch: 'Saint Teresa of Jesus, Virgin and Doctor of the Church',  // us
    // saintTeresaOfLosAndesVirgin: 'Saint Teresa of Jesus of Los Andes, Virgin',
    // saintTheodoreOfCanterburyBishop: 'Saint Theodore of Canterbury, Bishop',  // gb
    // saintTheodosiusOfTheCavesAbbot: 'Saint Theodosius of the Caves, Abbot',
    // saintTheotoniusPriest: 'Saint Theotonius, Priest',
    // saintThereseOfTheChildJesusVirginAndDoctor: 'Saint Thérèse of the Child Jesus, Virgin and Doctor of the Church',  // us
    // saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance: 'Saint Thérèse of the Child Jesus, Virgin, Doctor of the Church and Secondary Patroness of France',  // us, but not in us
    // saintThomasAquinasPriestAndDoctor: 'Saint Thomas Aquinas, Priest and Doctor of the Church',  // us, gb
    // saintThomasBecketBishopAndMartyr: 'Saint Thomas Becket, Bishop and Martyr',  // us, gb
    // saintThomasOfVillanovaBishop: 'Saint Thomas of Villanova, Bishop',
    // saintThomasRokuzayemonPriestAndCompanionsMartyrs: 'Saint Thomas Rokuzayemon, Priest, and Companions, Martyrs',
    // saintThomasTheApostle: 'Saint Thomas, Apostle',  // us, gb
    // saintThorfinnBishop: 'Saint Thorfinn, Bishop',
    // saintThorlacBishop: 'Saint Thorlac, Bishop',
    // saintTuribiusOfMogrovejoBishop: 'Saint Turibius of Mogrovejo, Bishop',  // us, gb
    // saintUlrichOfAugsburg: 'Saint Ulrich of Augsburg, Bishop',
    // saintUrsulaAndCompanionsVirginsAndMartyrs: 'Saint Ursula and Companions, Virgins and Martyrs',
    // saintUrsulaLedochowskaVirgin: 'Saint Ursula Ledochowska, Virgin',
    // saintValentineOfRaetiaBishop: 'Saint Valentine of Raetia, Bishop',
    // saintVincentDeaconAndMartyr: 'Saint Vincent, Deacon and Martyr',  // us, gb
    // saintVincentDePaulPriest: 'Saint Vincent de Paul, Priest',  // us
    // saintVincentFerrerPriest: 'Saint Vincent Ferrer, Priest',  // us
    // saintVincentPallottiPriest: 'Saint Vincent Pallotti, Priest',
    // saintVitusMartyr: 'Saint Vitus, Martyr',
    // saintVladimirTheGreat: 'Saint Vladimir the Great',
    // saintWalburgaAbbess: 'Saint Walburga, Abbess',
    // saintWenceslausMartyr: 'Saint Wenceslaus, Martyr',  // us
    // saintWendelinAbbot: 'Saint Wendelin, Abbot',
    // saintWilfridBishop: 'Saint Wilfrid, Bishop',  // gb
    // saintWillibaldBishop: 'Saint Willibald, Bishop',
    // saintWillibrordBishop: 'Saint Willibrord, Bishop',  // gb, ireland in en-IE
    // saintWinefrideVirgin: 'Saint Winefride, Virgin',  // gb
    // saintWolfgangBishop: 'Saint Wolfgang, Bishop',
    // saintWolfgangOfRegensburgBishop: 'Saint Wolfgang of Regensburg, Bishop',
    // saintWulstanBishop: 'Saint Wulstan, Bishop',  // gb
    // saintZdislava: 'Saint Zdislava',
    // saintZygmuntGorazdowskiPriest: 'Saint Zygmunt Gorazdowski, Priest',
    // saintZygmuntSzczesnyFelinskiBishop: 'Saint Sigmund Felix Feliński, Bishop',
    // santoNinoInfantJesus: 'Santo Nino (Infant Jesus)',
    // sevenHolyFoundersOfTheServiteOrder: 'Seven Holy Founders of the Servite Order',  // us, gb in en-gb
    // sevenMartyredNunsFromTheFranciscanMissionariesOfMary: 'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
    // shipwreckOfSaintPaulApostle: 'Shipwreck of Saint Paul, Apostle',
    // stDunstanArchbishopOfCanterbury: 'Saint Dunstan, Bishop',  // gb; Was: `St Dunstan, Archbishop of Canterbury`
    // sundayOfTheWordOfGod: 'Sunday of the Word of God',  // us; this one was not found in the _Ordo 2017, 2018, 2020, 2021_
    // theBeheadingOfSaintJohnTheBaptistMartyr: 'Passion of Saint John the Baptist',  // us
    // theEnglishMartyrs: 'English Martyrs',  // gb
    // theFiveWoundsOfTheLord: 'Five Wounds of the Lord',
    // theMostHolyNameOfJesus: 'Most Holy Name of Jesus',  // us, gb
    // theSixWelshMartyrsAndCompanions: 'Six Welsh Martyrs and Companions',  // gb (wales)
    // transferOfTheRelicsOfSaintStephen: 'Transfer of the Relics of Saint Stephen',
    // vietnameseMartyrs: 'Vietnamese Martyrs',
    // visitationOfTheBlessedVirginMary: 'Visitation of the Blessed Virgin Mary',  // us
    // waitangiDay: 'Waitangi Day',  // nz
  },
} as RomcalLocale;
