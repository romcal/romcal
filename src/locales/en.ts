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
    maelruain_of_tallaght_bishoprice_tornay_priest: 'Blessed maelruain_of_tallaght_bishoprice Tornay, Priest and Martyr',
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
    agnes_cao_guiying_martyr: 'Saint Agnes Cao Guiying, Martyr',
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
    dominic_de_guzman_priest: 'Saint Dominic, Priest',  // us, australia, nz
    dyfrig_of_wales_bishop: 'Saint Dyfrig, Bishop',  // gb (wales)
    edmund_campion_priest: 'Saint Edmund Campion, Priest and Martyr',
    edmund_of_abingdon_bishop: 'Saint Edmund of Abingdon, Bishop',  // gb
    edward_the_confessor: 'Saint Edward the Confessor',  // gb
    elijah_prophet: 'Saint Elijah, prophet',
    elizabeth_ann_seton_religious: 'Saint Elizabeth Ann Seton, Religious',  // us
    elizabeth_of_hungary_religious: 'Saint Elizabeth of Hungary, Religious',  // us, gb
    elizabeth_of_portugal: 'Saint Elizabeth of Portugal',  // us, gb
    emeric_of_hungary: 'Saint Emeric',
    enda_of_aran_abbot: 'Saint Enda, Abbot',  // ireland
    ephrem_the_syrian_deacon: 'Saint Ephrem, Deacon and Doctor of the Church',  // us, gb
    eric_ix_of_sweden_martyr: 'Saint Eric IX of Sweden, Martyr',
    etheldreda_of_ely_abbess: 'Saint Etheldreda, Abbess',  // gb
    eugene_de_mazenod_bishop: 'Saint Eugène de Mazenod, Bishop',  // ca; Should we not translate the names?
    eoghan_of_ardstraw_bishop: 'Saint Eoghan, Bishop',  // ireland
    eulalia_of_merida_virgin: 'Saint Eulalia of Merida, Virgin and Martyr',
    eulogius_of_cordoba_bishop: 'Saint Eulogius of Córdoba, Bishop',
    eusebius_of_vercelli_bishop: 'Saint Eusebius of Vercelli, Bishop',  // us
    eysteinn_of_nidaros_bishop: 'Saint Eysteinn of Nidaros, Bishop',
    ezequiel_moreno_bishop: 'Saint Ezequiel Moreno, Bishop',
    fabian_i_pope: 'Saint Fabian, Pope and Martyr',  // us, gb
    fachanan_of_kilfenora_bishop: 'Saint Fachanan, Bishop',  // ireland; Was: `Saint Fachanan of Kilfenora, Bishop`
    fachtna_of_rosscarbery_bishop: 'Saint Fachtna, Bishop',  // ireland
    faustina_kowalska_virgin: 'Saint Faustina Kowalska, Virgin',  // us
    philip_of_jesus_de_las_casas_martinez_martyr: 'Saint Philip of Jesus, Martyr',
    ferdinand_iii_of_castile: 'Saint Ferdinand III of Castile',
    fergal_of_salzburg_bishop: 'Saint Fergal, Bishop and Missionary',  // ireland
    fiacre_of_breuil_monk: 'Saint Fiacre, Monk',  // ireland
    fidelis_of_sigmaringen_priest: 'Saint Fidelis of Sigmaringen, Priest and Martyr',  // us, gb
    finbarr_of_cork_bishop: 'Saint Finbarr, Bishop',  // ireland
    finnian_of_clonard_bishop: 'Saint Finian, Bishop',  // ireland
    fintan_of_clonenagh_abbot: 'Saint Fintan, Abbot',  // ireland
    flannan_of_killaloe_bishop: 'Saint Flannan, Bishop',  // ireland
    florian_of_lorch_and_companions_martyrs: 'Saint Florian and Companions, Martyrs',
    florian_of_lorch_martyr: 'Saint Florian, Martyr',
    frances_of_rome_religious: 'Saint Frances of Rome, Religious',  // us, gb
    frances_xavier_cabrini_virgin: 'Saint Frances Xavier Cabrini, Virgin',  // us
    francis_borgia_priest: 'Saint Francis Borgia, Priest',
    francis_de_sales_bishop: 'Saint Francis de Sales, Bishop and Doctor of the Church',  // us, gb
    francis_diaz_del_rincon_priest_and_companions_martyrs: 'Saint Francis Díaz del Rincon, Priest, and Companions, Martyrs',
    francis_ferdinand_de_capillas_priest: 'Saint Francis Ferdinand de Capillas, Priest and Martyr',
    francis_of_assisi: 'Saint Francis of Assisi',  // us
    francis_of_paola_hermit: 'Saint Francis of Paola, Hermit',  // us, gb
    francis_solanus_priest: 'Saint Francis Solanus, Priest',
    francis_xavier_priest: 'Saint Francis Xavier, Priest',  // us
    francois_de_laval_bishop: 'Saint François de Laval, Bishop',  // ca
    fridolin_of_sackingen_monk: 'Saint Fridolin of Säckingen, Monk',
    fructuosus_of_braga_martin_of_dume_and_gerald_of_braga_bishops: 'Saints Fructuosus of Braga, Martin of Dume and Gerald of Braga, Bishops',
    fursa_of_peronne_abbot: 'Saint Fursa, Abbot and Missionary',  // ireland
    gabriel_taurin_dufresse_bishop: 'Saint Gabriel-Taurin Dufresse, Bishop and Martyr',
    gall_of_switzerland_abbot: 'Saint Gall, Abbot and Missionary',  // ireland
    genevieve_of_paris_virgin: 'Saint Genevieve, Virgin',
    george_of_lydda_martyr: 'Saint George, Martyr',  // us, gb
    george_preca_priest: 'Saint George Preca, Priest',
    gerard_of_csanad_bishop: 'Saint Gerard of Csanád, Bishop and Martyr',
    germanus_of_auxerre_bishop: 'Saint Germanus of Auxerre, Bishop',  // gb (wales)
    gertrude_of_nivelles_abbess: 'Saint Gertrude of Nivelles, Abbess',
    gertrude_the_great_virgin: 'Saint Gertrude, Virgin',  // us
    gobnait_of_ballyvourney_virgin: 'Saint Gobnait, Virgin',  // ireland
    gonsalo_garcia_martyr: 'Saint Gonsalo Garcia, Martyr',
    gorazd_of_moravia_and_companions: 'Saint Gorazd and Companions',
    gotthard_of_hildesheim_bishop: 'Saint Gotthard, Bishop',
    gregory_i_the_great_pope: 'Saint Gregory the Great, Pope and Doctor of the Church',  // us; gb
    gregory_vii_pope: 'Saint Gregory VII, Pope',  // us, gb (wales)
    benedict_of_jesus_valdivielso_saez_religious: 'Saint Benedict of Jesus Valdivielso Sáez, Religious and Martyr',
    hedwig_of_poland: 'Saint Hedwig of Poland',
    hedwig_religious: 'Saint Hedwig, Religious',  // us, ca
    helena_of_constantinople: 'Saint Helena',
    hemma_of_gurk: 'Saint Hemma of Gurk',
    henry_ii_emperor: 'Saint Henry',  // us, gb
    henry_of_finland_bishop: 'Saint Henry, Bishop and Martyr',
    hermann_joseph_of_steinfeld_priest: 'Saint Hermann Joseph, Priest',
    hermenegild_the_visigoths_martyr: 'Saint Hermenegild, Martyr',
    hilary_of_poitiers_bishop: 'Saint Hilary, Bishop and Doctor of the Church',  // us, gb
    hilda_of_whitby_abbess: 'Saint Hilda, Abbess',  // gb
    hildegard_of_bingen_abbess: 'Saint Hildegard of Bingen, Abbess and Doctor of the Church',
    hubert_of_liege_bishop: 'Saint Hubert, Bishop',
    hugh_of_lincoln_bishop: 'Saint Hugh of Lincoln, Bishop',  // gb
    hyacinth_of_poland_priest: 'Saint Hyacinth, Priest',
    ignatius_of_antioch_bishop: 'Saint Ignatius of Antioch, Bishop and Martyr',  // us
    ignatius_of_loyola_priest: 'Saint Ignatius of Loyola, Priest',  // us, gb
    ildephonsus_of_toledo_bishop: 'Saint Ildephonsus of Toledo, Bishop',
    illtud_the_knight_abbot: 'Saint Illtud, Abbot',  // gb (wales)
    irenaeus_of_lyon_bishop: 'Saint Irenaeus, Bishop and Martyr',  // us
    irene_of_macedonia: 'Saint Irene',
    isidore_of_seville_bishop: 'Saint Isidore, Bishop and Doctor of the Church',  // us, gb
    isidore_the_farmer: 'Saint Isidore',  // us
    ita_of_killeedy_virgin: 'Saint Ita, Virgin',  // ireland
    ivo_of_kermartin_priest: 'Saint Ivo, Priest',
    james_apostle: 'Saint James, Apostle',  // us, gb
    james_apostle_patron_of_spain: 'Saint James, Apostle and Patron of Spain',  // us, but not in us
    jane_frances_de_chantal_religious: 'Saint Jane Frances de Chantal, Religious',  // us
    januarius_i_of_benevento_bishop: 'Saint Januarius, Bishop and Martyr',  // us
    jarlath_of_tuam_bishop: 'Saint Jarlath, Bishop',  // ireland
    jerome_emiliani: 'Saint Jerome Emiliani',  // us, gb
    jerome_of_stridon_priest: 'Saint Jerome, Priest and Doctor of the Church',  // us
    joachim_he_kaizhi_martyr: 'Saint Joachim He Kaizhi, Martyr',
    joan_of_arc_virgin_secondary_patroness_of_france: 'Saint Joan of Arc, Virgin, Secondary Patroness of France',
    joaquina_of_saint_francis_of_assisi_vedruna_religious: 'Saint Joaquina of Saint Francis of Assisi Vedruna, Religious',
    john_baptist_de_la_salle_priest: 'Saint John Baptist de la Salle, Priest',  // us
    john_berchmans_religious: 'Saint John Berchmans, Religious',
    john_bosco_priest: 'Saint John Bosco, Priest',  // us, gb
    john_cassian_priest: 'Saint John Cassian, Priest',
    john_chrysostom_bishop: 'Saint John Chrysostom, Bishop and Doctor of the Church',  // us
    john_damascene_priest: 'Saint John Damascene, Priest and Doctor of the Church',  // us
    john_de_britto_priest: 'Saint John de Brito, Priest and Martyr',
    john_eudes_priest: 'Saint John Eudes, Priest',  // us
    john_gabriel_perboyre_priest: 'Saint John Gabriel Perboyre, Priest and Martyr',
    john_i_pope: 'Saint John I, Pope and Martyr',  // us. gb
    john_jones_priest: 'Saint John Jones, Priest and Martyr',  // gb (wales)
    john_leonardi_priest: 'Saint John Leonardi, Priest',  // us
    john_macias_religious: 'Saint John Macías, Religious',
    john_mary_vianney_priest: 'Saint John Vianney, Priest',  // us
    john_nepomucene_priest: 'Saint John Nepomucene, Priest and Martyr',
    john_neumann_bishop: 'Saint John Neumann, Bishop',  // us
    john_of_avila_priest: 'Saint John of Ávila, Priest',
    john_of_capistrano_priest: 'Saint John of Capistrano, Priest',  // us
    john_of_dukla_priest: 'Saint John of Dukla, Priest',
    john_of_god_religious: 'Saint John of God, Religious',  // us
    john_of_kanty_priest: 'Saint John of Kanty, Priest',  // us; Was: `Saint John of Kenty, Priest`
    john_of_the_cross_priest: 'Saint John of the Cross, Priest and Doctor of the Church',  // us
    john_of_triora_priest: 'Saint John of Triora, Priest and Martyr',
    john_ogilvie_priest: 'Saint John Ogilvie, Priest and Martyr',  // scotland
    john_paul_ii_pope: 'Saint John Paul II, Pope',  // us, gb, ireland
    john_roberts_priest: 'Saint John Roberts, Priest and Martyr',  // gb (wales)
    john_sarkander_priest: 'Saint John Sarkander, Priest and Martyr',
    john_apostle: 'Saint John, Apostle and Evangelist',  // us
    john_xxiii_pope: 'Saint John XXIII, Pope',  // us, ireland
    josaphat_kuntsevych_bishop: 'Saint Josaphat, Bishop and Martyr',  // us
    joseph_de_anchieta_priest: 'Saint Joseph de Anchieta, Priest',
    joseph_bilczewski_bishop: 'Saint Joseph Bilczewski, Bishop',
    jose_maria_de_yermo_y_parres_priest: 'Saint José Maria de Yermo y Parres, Priest',
    josemaria_escriva_de_balaguer_priest: 'Saint Josemaría Escrivá de Balaguer, Priest',
    joseph_freinademetz_priest: 'Saint Joseph Freinademetz, Priest',
    josephine_bakhita_virgin: 'Saint Josephine Bakhita, Virgin',  // us, gb
    joseph_of_calasanz_priest: 'Saint Joseph of Calasanz, Priest',  // us
    joseph_spouse_of_mary_principal_patron_of_canada: 'Saint Joseph, Spouse of the Blessed Virgin Mary and Principal Patron of Canada',  // us, but not in the us, gb, ca
    joseph_the_worker: 'Saint Joseph the Worker',  // us
    joseph_yuan_gengyin_priest: 'Saint Joseph Yuan Gengyin, Priest and Martyr',
    joseph_zhang_dapeng_martyr: 'Saint Joseph Zhang Dapeng, Martyr',
    joseph_sebastian_pelczar_bishop: 'Saint Joseph Sebastian Pelczar, Bishop',
    juan_diego_cuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin',  // us
    juliana_of_liege_virgin: 'Saint Juliana of Liège, Virgin',
    julie_billiart_virgin: 'Saint Julie Billiart, Virgin',
    justin_martyr: 'Saint Justin, Martyr',  // us
    kateri_tekakwitha_virgin: 'Saint Kateri Tekakwitha, Virgin',  // us, ca
    katharine_drexel_virgin: 'Saint Katharine Drexel, Virgin',  // us
    kentigern_of_scotland_bishop: 'Saint Kentigern, Bishop',  // scotland
    kevin_of_glendalough_abbot: 'Saint Kevin, Abbot',  // ireland
    kieran_of_saigir_bishop: 'Saint Kieran, Bishop',  // ireland
    kilian_of_wurzburg_bishop_and_companions_martyrs: 'Saint Kilian, Bishop, and Companions, Martyrs',
    kilian_of_wurzburg_bishop: 'Saint Kilian, Bishop and Martyr',  // ireland
    kinga_of_poland_virgin: 'Saint Kinga, Virgin',
    ladislaus_i_of_hungary: 'Saint Ladislaus',
    lambert_of_maastricht_bishop: 'Saint Lambert of Maastricht, Bishop and Martyr',
    saintLaurenceOTooleBishop: 'Saint Laurence O’Toole, Bishop',  // ireland
    laurence_wang_bing_and_companions_martyrs: 'Saint Laurence Wang Bing and Companions, Martyrs',
    lawrence_bai_xiaoman_martyr: 'Saint Lawrence Bai Xiaoman, Martyr',
    lawrence_of_brindisi_priest: 'Saint Lawrence of Brindisi, Priest and Doctor of the Church',  // us, gb
    lawrence_of_rome_deacon: 'Saint Lawrence, Deacon and Martyr',  // us
    lawrence_ruiz_and_companions_martyrs: 'Saint Lawrence Ruiz and Companions, Martyrs',  // us
    leander_of_seville_bishop: 'Saint Leander of Seville, Bishop',
    lelia_of_killeely_virgin: 'Saint Lelia, Virgin',  // ireland
    leoba_of_tauberbischofsheim_abbess: 'Saint Leoba, Abbess',
    leo_ix_pope: 'Saint Leo IX, Pope',
    leo_ignatius_mangin_priest_and_companions_martyrs: 'Saint Leo Ignatius Mangin, Priest, and Companions, Martyrs',
    leonard_of_noblac_hermit: 'Saint Leonard of Noblac, Hermit',
    leopold_iii_of_babenberg: 'Saint Leopold III of Babenberg',
    leopold_mandic_priest: 'Saint Leopold Mandić, Priest',
    leo_i_the_great_pope: 'Saint Leo the Great, Pope and Doctor of the Church',  // us
    louis_ix_of_france: 'Saint Louis',  // us
    louis_bertrand_priest: 'Saint Louis Bertrand, Priest',
    louis_grignion_de_montfort_priest: 'Saint Louis Grignion de Montfort, Priest',  // us, gb in en-gb, australia, nz
    lucius_of_chur_bishop: 'Saint Lucius of Chur, Bishop and Martyr',
    lucy_of_syracuse_virgin: 'Saint Lucy, Virgin and Martyr',  // us
    lucy_yi_zhenmei_virgin: 'Saint Lucy Yi Zhenmei, Virgin and Martyr',
    ludger_of_utrecht_bishop: 'Saint Ludger, Bishop',
    ludmila_of_bohemia_martyr: 'Saint Ludmila, Martyr',
    luigi_orione_priest: 'Saint Luigi Orione, Priest',
    luke_evangelist: 'Saint Luke, Evangelist',  // us
    lydia_of_philippi: 'Saint Lydia of Philippi',
    macartan_of_clogher_bishop: 'Saint Macartan, Bishop',  // ireland
    mac_nissi_of_connor_bishop: 'Saint Mac Nissi, Bishop',  // ireland
    maelruain_of_tallaght_bishop: 'Saint Maelruain, Bishop and Abbot',  // ireland
    magnus_erlendsson_martyr: 'Saint Magnus, Martyr',
    malachy_of_armagh_bishop: 'Saint Malachy, Bishop',  // ireland
    marcellin_champagnat_priest: 'Saint Marcellin Champagnat, Priest',  // australia, nz
    margaret_mary_alacoque_virgin: 'Saint Margaret Mary Alacoque, Virgin',  // us, ca
    margaret_of_antioch_virgin: 'Saint Margaret of Antioch, Virgin and Martyr',
    margaret_of_hungary_religious: 'Saint Margaret of Hungary, Religious',
    margaret_of_scotland: 'Saint Margaret of Scotland',  // us, gb, scotland
    marguerite_bourgeoys_virgin: 'Saint Marguerite Bourgeoys, Virgin',  // ca
    marguerite_dyouville_religious: 'Saint Marguerite d’Youville, Religious',  // ca
    mary_of_jesus_in_the_blessed_sacrament_venegas_virgin: 'Saint Mary of Jesus in the Blessed Sacrament Venegas, Virgin',
    maria_goretti_virgin: 'Saint Maria Goretti, Virgin and Martyr',  // us, gb
    maria_guadalupe_garcia_zavala_virgin: 'Saint María Guadalupe García Zavala, Virgin',
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: 'Saint María Micaela of the Blessed Sacrament Desmaisières, Virgin',
    mariana_of_jesus_de_paredes_virgin: 'Saint Mariana of Jesus de Paredes, Virgin',
    marianne_cope_virgin: 'Saint Marianne Cope, Virgin',  // us
    marie_of_the_incarnation_guyart_religious: 'Saint Marie of the Incarnation Guyart, Religious',  // ca
    marko_krizin_priest: 'Saint Marko Krizin, Priest and Martyr',
    mark_evangelist: 'Saint Mark, Evangelist',  // us, gb, australia, nz
    maroun_of_syria: 'Saint Maroun',
    martha_of_bethany: 'Saint Martha',  // us, gb
    martin_de_porres_religious: 'Saint Martin de Porres, Religious',  // us
    martin_i_pope: 'Saint Martin I, Pope and Martyr',  // us
    martin_of_tours_bishop: 'Saint Martin of Tours, Bishop',  // us
    martin_wu_xuesheng_and_companions_martyrs: 'Saint Martin Wu Xuesheng and Companions, Martyrs',
    mary_magdalene: 'Saint Mary Magdalene',  // us, gb
    mary_magdalene_de_pazzi_virgin: 'Saint Mary Magdalene de’ Pazzi, Virgin',  // us, gb (wales)
    // saintMaryOfTheCrossVirgin: 'Saint Mary of the Cross MacKillop, Virgin',  // australia, nz
    // saintMatilda: 'Saint Matilda',
    // saintMatthewApostleAndEvangelist: 'Saint Matthew, Apostle and Evangelist',  // us
    // saintMatthiasTheApostle: 'Saint Matthias, Apostle',  // us, gb
    // saintmaelruain_of_tallaght_bishopriceAndCompanionsMartyrs: 'Saint maelruain_of_tallaght_bishoprice and Companions, Martyrs',
    // saintmaelruain_of_tallaght_bishoprusBishop: 'Saint maelruain_of_tallaght_bishoprus, Bishop',
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
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: 'Saint Paulina of the Agonizing Heart of Jesus Visintainer, Virgin',  // gb, but not in gb
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
    // saintRabanusmaelruain_of_tallaght_bishoprusBishop: 'Saint Rabanus maelruain_of_tallaght_bishoprus, Bishop',
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
