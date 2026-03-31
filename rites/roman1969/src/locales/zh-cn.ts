import type { Locale } from '../types/locale';

/**
 * Simplified Chinese (zh-cn) locale for romcal.
 *
 * Citation keys used in this file:
 * - mr_zh_2017_ed3 = 感恩祭典 (Missale Romanum, editio typica tertia,
 *   translated by Taiwan Regional Bishops' Conference Liturgy Committee,
 *   9th printing Dec 2017, Hebei Faith Press, P.R. China)
 * - lh_zh_2019 = 每日颂祷 (Liturgia Horarum,
 *   translated by Taiwan Regional Bishops' Conference Liturgy Committee,
 *   published Sep 2019, Hebei Faith Press, P.R. China)
 *
 * Additional references:
 * - 万有真原 (https://www.wanyouzhenyuan.cn/) operated by the Archdiocese of Beijing
 * - 思高圣经 (Studium Biblicum version Bible), for biblical name transliterations
 *   where the Missal/Breviary translation occasionally differs
 */

export const locale: Locale = {
  colors: {
    black: '黑', // src: mr_zh_2017_ed3
    gold: '金', // src: mr_zh_2017_ed3
    green: '绿', // src: mr_zh_2017_ed3
    purple: '紫', // src: mr_zh_2017_ed3
    red: '红', // src: mr_zh_2017_ed3
    rose: '玫瑰', // src: mr_zh_2017_ed3
    white: '白', // src: mr_zh_2017_ed3
  },

  cycles: {
    proper_of_saints: '圣人专用部分', // src: lh_zh_2019
    proper_of_time: '季节专用部分', // src: lh_zh_2019
    psalter_week_1: '圣咏集第一周', // src: lh_zh_2019
    psalter_week_2: '圣咏集第二周', // src: lh_zh_2019
    psalter_week_3: '圣咏集第三周', // src: lh_zh_2019
    psalter_week_4: '圣咏集第四周', // src: lh_zh_2019
    sunday_year_a: '甲年', // src: mr_zh_2017_ed3
    sunday_year_b: '乙年', // src: mr_zh_2017_ed3
    sunday_year_c: '丙年', // src: mr_zh_2017_ed3
    weekday_year_1: '第一年', // src: mr_zh_2017_ed3
    weekday_year_2: '第二年', // src: mr_zh_2017_ed3
  },

  id: 'zh-cn',

  months: {
    0: '一月', // src: mr_zh_2017_ed3
    1: '二月', // src: mr_zh_2017_ed3
    2: '三月', // src: mr_zh_2017_ed3
    3: '四月', // src: mr_zh_2017_ed3
    4: '五月', // src: mr_zh_2017_ed3
    5: '六月', // src: mr_zh_2017_ed3
    6: '七月', // src: mr_zh_2017_ed3
    7: '八月', // src: mr_zh_2017_ed3
    8: '九月', // src: mr_zh_2017_ed3
    9: '十月', // src: mr_zh_2017_ed3
    10: '十一月', // src: mr_zh_2017_ed3
    11: '十二月', // src: mr_zh_2017_ed3
  },

  names: {
    adalbert_of_prague_bishop: '圣亚德伯，主教、殉道', // src: mr_zh_2017_ed3
    adelaide_of_burgundy_empress: '圣妇亚德莱', // src: mr_zh_2017_ed3
    agatha_of_sicily_virgin: '圣女亚加大，童贞、殉道', // src: mr_zh_2017_ed3
    agnes_cao_guiying_martyr: '圣女曹桂英殉道', // src: mr_zh_2017_ed3
    agnes_of_rome_virgin: '圣女依搦斯，童贞、殉道', // src: mr_zh_2017_ed3
    albert_the_great_bishop: '圣大亚伯尔，主教、圣师', // src: mr_zh_2017_ed3
    all_saints: '诸圣节', // src: mr_zh_2017_ed3
    aloysius_gonzaga_religious: '圣类思·公撒格，会士', // src: mr_zh_2017_ed3
    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin: '真福亚尔丰索，童贞', // src: mr_zh_2017_ed3
    alphonsus_mary_liguori_bishop: '圣亚丰索，主教、圣师', // src: mr_zh_2017_ed3
    ambrose_of_milan_bishop: '圣盎博罗削，主教、圣师', // src: mr_zh_2017_ed3
    andrew_apostle: '圣安德肋，宗徒', // src: mr_zh_2017_ed3
    andrew_dung_lac_priest_and_companions_martyrs: '圣陈安勇乐司铎及同伴，殉道', // src: mr_zh_2017_ed3
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: '圣金大建及同伴，殉道', // src: mr_zh_2017_ed3
    angela_merici_virgin: '圣女安琪拉，童贞', // src: mr_zh_2017_ed3
    annunciation_of_the_lord: '圣母领报', // src: mr_zh_2017_ed3
    anselm_of_canterbury_bishop: '圣安色莫，主教、圣师', // src: mr_zh_2017_ed3
    ansgar_of_hamburg_bishop: '圣安加略主教', // src: mr_zh_2017_ed3
    anthony_mary_claret_bishop: '圣安多尼·加烈，主教', // src: mr_zh_2017_ed3
    anthony_of_egypt_abbot: '圣安当，院长', // src: mr_zh_2017_ed3
    anthony_of_padua_priest: '圣安多尼，司铎、圣师', // src: mr_zh_2017_ed3
    anthony_zaccaria_priest: '圣安多尼·匝加利，司铎', // src: mr_zh_2017_ed3
    apollinaris_of_ravenna_bishop: '圣亚博那，主教', // src: mr_zh_2017_ed3
    ascension_of_the_lord: '耶稣升天节', // src: mr_zh_2017_ed3
    ash_wednesday: '圣灰礼仪星期三', // src: mr_zh_2017_ed3
    assumption_of_the_blessed_virgin_mary: '圣母升天节', // src: mr_zh_2017_ed3
    athanasius_of_alexandria_bishop: '圣亚大纳削，主教、圣师', // src: mr_zh_2017_ed3
    augustine_of_canterbury_bishop: '圣奥斯定，主教', // src: mr_zh_2017_ed3
    augustine_of_hippo_bishop: '圣奥斯定，主教、圣师', // src: mr_zh_2017_ed3
    augustine_zhao_rong_priest: '圣赵荣司铎殉道', // src: mr_zh_2017_ed3
    augustine_zhao_rong_priest_and_companions_martyrs: '中华诸圣及真福，殉道', // src: mr_zh_2017_ed3
    augustus_chapdelaine_priest: '真福慕雅（玛尔定）司铎', // src: mr_zh_2017_ed3
    baptism_of_the_lord: '主受洗日', // src: mr_zh_2017_ed3
    barnabas_apostle: '圣巴尔纳伯，宗徒', // src: mr_zh_2017_ed3
    bartholomew_apostle: '圣巴尔多禄茂，宗徒', // src: mr_zh_2017_ed3
    basil_the_great_and_gregory_nazianzen_bishops: '圣巴西略及圣国瑞·纳祥，主教、圣师', // src: mr_zh_2017_ed3
    beatrice_da_silva_meneses_virgin: '真福白亚蒂斯，童贞', // src: mr_zh_2017_ed3
    bede_the_venerable_priest: '圣伯达，司铎、圣师', // src: mr_zh_2017_ed3
    benedict_of_nursia_abbot: '圣本笃，院长', // src: mr_zh_2017_ed3
    bernadette_soubirous_virgin: '圣女伯尔纳德，童贞', // src: mr_zh_2017_ed3
    bernard_of_clairvaux_abbot: '圣伯尔纳铎，院长、圣师', // src: mr_zh_2017_ed3
    bernardine_of_siena_priest: '圣伯尔纳定·栖亚那，司铎', // src: mr_zh_2017_ed3
    blaise_of_sebaste_bishop: '圣巴拉削，主教、殉道', // src: mr_zh_2017_ed3
    bonaventure_of_bagnoregio_bishop: '圣文都辣，主教、圣师', // src: mr_zh_2017_ed3
    boniface_of_mainz_bishop: '圣波尼法爵，主教、殉道', // src: mr_zh_2017_ed3
    bridget_of_sweden_religious: '圣妇彼利日大，会士', // src: mr_zh_2017_ed3
    bruno_of_cologne_priest: '圣勃路诺，司铎', // src: mr_zh_2017_ed3
    cajetan_of_thiene_priest: '圣加耶当，司铎', // src: mr_zh_2017_ed3
    callistus_i_pope: '圣加利斯督，教宗、殉道', // src: mr_zh_2017_ed3
    camillus_de_lellis_priest: '圣加弥禄，司铎', // src: mr_zh_2017_ed3
    canice_of_kilkenny_abbot: '圣加尼斯，院长', // src: mr_zh_2017_ed3
    canute_iv_of_denmark_martyr: '圣加努多，殉道', // src: mr_zh_2017_ed3
    casimir_of_poland: '圣加西弥禄', // src: mr_zh_2017_ed3
    catherine_of_alexandria_virgin: '圣加大利纳·亚力山卓，童贞、殉道', // src: mr_zh_2017_ed3
    catherine_of_siena_virgin: '圣女加大利纳·仙娜，童贞、圣师', // src: mr_zh_2017_ed3
    catherine_zoe_laboure_virgin: '圣女加大利纳·拉布莱，童贞', // src: mr_zh_2017_ed3
    cecilia_of_rome_virgin: '圣女则济利亚，童贞、殉道', // src: mr_zh_2017_ed3
    chair_of_saint_peter_the_apostle: '建立圣伯多禄宗座', // src: mr_zh_2017_ed3
    charles_borromeo_bishop: '圣嘉禄，主教', // src: mr_zh_2017_ed3
    charles_lwanga_and_companions_martyrs: '圣嘉禄·卢安加及同伴，殉道', // src: mr_zh_2017_ed3
    clare_of_assisi_virgin: '圣女加辣，童贞', // src: mr_zh_2017_ed3
    clement_i_pope: '圣格肋孟一世，教宗、殉道', // src: mr_zh_2017_ed3
    clement_mary_hofbauer_priest: '圣格肋孟·浩卜，司铎', // src: mr_zh_2017_ed3
    columba_of_iona_abbot: '圣高隆巴，院长', // src: mr_zh_2017_ed3
    columban_of_luxeuil_abbot: '圣高隆庞，院长', // src: mr_zh_2017_ed3
    commemoration_of_all_the_faithful_departed: '追思亡者', // src: mr_zh_2017_ed3
    conversion_of_saint_paul_the_apostle: '圣保禄宗徒归化', // src: mr_zh_2017_ed3
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: '圣高尔内略及圣西彼廉，主教、殉道', // src: mr_zh_2017_ed3
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: '圣葛斯默、圣达弥盎，殉道', // src: mr_zh_2017_ed3
    cuthbert_of_lindisfarne_bishop: '圣格时白，主教', // src: mr_zh_2017_ed3
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: '圣济利禄、圣美铎第，主教', // src: mr_zh_2017_ed3
    cyril_of_alexandria_bishop: '圣济利禄，主教、圣师', // src: mr_zh_2017_ed3
    cyril_of_jerusalem_bishop: '耶路撒冷·圣济利禄，主教、圣师', // src: mr_zh_2017_ed3
    damasus_i_pope: '圣达玛稣一世，教宗', // src: mr_zh_2017_ed3
    damien_de_veuster_priest: '圣达米盎，司铎', // src: mr_zh_2017_ed3
    david_of_wales_bishop: '圣达味，主教', // src: mr_zh_2017_ed3
    dedication_of_the_basilica_of_saint_mary_major: '罗马圣母大殿奉献日', // src: mr_zh_2017_ed3
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: '圣伯多禄圣保禄大殿奉献日', // src: mr_zh_2017_ed3
    dedication_of_the_lateran_basilica: '拉特朗大殿奉献日', // src: mr_zh_2017_ed3
    denis_of_paris_bishop_and_companions_martyrs: '圣德尼斯主教及同伴，殉道', // src: mr_zh_2017_ed3
    dismas_the_good_thief: '善盗', // src: mr_zh_2017_ed3
    divine_mercy_sunday: '慈悲主日', // src: mr_zh_2017_ed3
    dominic_de_guzman_priest: '圣多明我，司铎', // src: mr_zh_2017_ed3
    easter_sunday: '复活节', // src: mr_zh_2017_ed3
    edmund_campion_priest: '真福爱德门·江本，司铎、殉道', // src: mr_zh_2017_ed3
    edmund_of_abingdon_bishop: '圣爱德门，主教', // src: mr_zh_2017_ed3
    edward_the_confessor: '圣爱德华', // src: mr_zh_2017_ed3
    eligius_of_noyon_bishop: '圣安利日，主教', // src: mr_zh_2017_ed3
    elizabeth_ann_seton_religious: '圣安·贝兰·丝彤，会士', // src: mr_zh_2017_ed3
    elizabeth_of_hungary_religious: '圣依撒伯尔，会士', // src: mr_zh_2017_ed3
    elizabeth_of_portugal: '圣妇依撒伯尔', // src: mr_zh_2017_ed3
    english_martyrs: '英格兰和威尔士殉道烈士', // src: mr_zh_2017_ed3
    ephrem_the_syrian_deacon: '圣爱弗冷，执事、圣师', // src: mr_zh_2017_ed3
    epiphany_of_the_lord: '主显节', // src: mr_zh_2017_ed3
    epipodius_of_lyon_and_alexander_of_lyon_martyrs: '圣爱比巴巨、圣亚历山大，殉道', // src: mr_zh_2017_ed3
    eusebius_of_vercelli_bishop: '圣欧瑟伯，主教', // src: mr_zh_2017_ed3
    exaltation_of_the_holy_cross: '光荣十字圣架', // src: mr_zh_2017_ed3
    fabian_i_pope: '圣法比盎，教宗、殉道', // src: mr_zh_2017_ed3
    faustina_kowalska_virgin: '圣女傅天娜，童贞', // src: mr_zh_2017_ed3
    fidelis_of_sigmaringen_priest: '圣斐德理，司铎、殉道', // src: mr_zh_2017_ed3
    first_martyrs_of_the_holy_roman_church: '罗马第一批殉道烈士', // src: mr_zh_2017_ed3
    florian_of_lorch_martyr: '圣福里安，殉道', // src: mr_zh_2017_ed3
    frances_of_rome_religious: '圣芳济加，会士', // src: mr_zh_2017_ed3
    frances_xavier_cabrini_virgin: '圣女方济加，童贞', // src: mr_zh_2017_ed3
    francis_borgia_priest: '圣方济各·玻尔日亚，司铎', // src: mr_zh_2017_ed3
    francis_de_sales_bishop: '圣方济各·撒肋爵，主教、圣师', // src: mr_zh_2017_ed3
    francis_ferdinand_de_capillas_priest: '圣刘方济司铎殉道', // src: mr_zh_2017_ed3
    francis_of_assisi: '圣五伤方济各', // src: mr_zh_2017_ed3
    francis_of_paola_hermit: '圣方济各保拉，隐修', // src: mr_zh_2017_ed3
    francis_xavier_priest: '圣方济各·沙勿略，司铎', // src: mr_zh_2017_ed3
    frederic_ozanam_founder: '真福奥撒南', // src: mr_zh_2017_ed3
    friday_of_the_passion_of_the_lord: '耶稣受难', // src: mr_zh_2017_ed3
    genevieve_of_paris_virgin: '圣女日南斐法，童贞', // src: mr_zh_2017_ed3
    george_of_lydda_martyr: '圣乔治，殉道', // src: mr_zh_2017_ed3
    gerard_of_csanad_bishop: '圣吉拉，主教、殉道', // src: mr_zh_2017_ed3
    germain_of_paris_bishop: '圣日曼诺斯，主教', // src: mr_zh_2017_ed3
    germaine_cousin_virgin: '圣女任曼娜，童贞', // src: mr_zh_2017_ed3
    gertrude_the_great_virgin: '圣女日多达，童贞', // src: mr_zh_2017_ed3
    gregory_i_the_great_pope: '圣额我略一世，教宗、圣师', // src: mr_zh_2017_ed3
    gregory_of_narek_abbot: '圣额我略·纳雷科，院长', // src: mr_zh_2017_ed3
    gregory_vii_pope: '圣额我略七世，教宗', // src: mr_zh_2017_ed3
    gregory_x_pope: '真福额我略十世，教宗', // src: mr_zh_2017_ed3
    hedwig_of_silesia_religious: '圣妇赫德维，会士', // src: mr_zh_2017_ed3
    helena_of_constantinople: '圣妇海伦', // src: mr_zh_2017_ed3
    henry_ii_emperor: '圣亨利二世', // src: mr_zh_2017_ed3
    hilary_of_poitiers_bishop: '圣依拉略，主教、圣师', // src: mr_zh_2017_ed3
    hildegard_of_bingen_abbess: '圣贺德佳·碧根', // src: mr_zh_2017_ed3
    holy_family_of_jesus_mary_and_joseph: '圣家节', // src: mr_zh_2017_ed3
    holy_guardian_angels: '护守天使', // src: mr_zh_2017_ed3
    holy_innocents_martyrs: '诸圣婴孩', // src: mr_zh_2017_ed3
    holy_saturday: '基督安眠墓中（复活节前夕）', // src: mr_zh_2017_ed3
    hyacinth_of_poland_priest: '圣雅钦多，司铎', // src: mr_zh_2017_ed3
    ignatius_of_antioch_bishop: '圣依纳爵·安提约基亚，主教、殉道', // src: mr_zh_2017_ed3
    ignatius_of_loyola_priest: '圣依纳爵·罗耀拉，司铎', // src: mr_zh_2017_ed3
    immaculate_conception_of_the_blessed_virgin_mary: '圣母无原罪始胎', // src: mr_zh_2017_ed3
    immaculate_heart_of_mary: '圣母无玷圣心', // src: mr_zh_2017_ed3
    irenaeus_of_lyon_bishop: '圣依勒内，主教、殉道', // src: mr_zh_2017_ed3
    isidore_of_seville_bishop: '圣依西多禄，主教、圣师', // src: mr_zh_2017_ed3
    isidore_the_farmer: '圣"农民"依西多禄', // src: mr_zh_2017_ed3
    james_apostle: '圣长雅各伯，宗徒', // src: mr_zh_2017_ed3
    jane_frances_de_chantal_religious: '圣方剂加·尚达尔，会士', // src: mr_zh_2017_ed3
    januarius_i_of_benevento_bishop: '圣雅纳略，主教、殉道', // src: mr_zh_2017_ed3
    jeanne_delanoue_of_the_cross_religious: '真福若翰纳·德拉诺，会士', // src: mr_zh_2017_ed3
    jerome_emiliani: '圣热罗莫·爱弥廉', // src: mr_zh_2017_ed3
    jerome_of_stridon_priest: '圣热罗尼莫，司铎、圣师', // src: mr_zh_2017_ed3
    joachim_and_anne_parents_of_mary: '圣妇亚纳及若亚敬', // src: mr_zh_2017_ed3
    joachim_he_kaizhi_martyr: '圣何开枝殉道', // src: mr_zh_2017_ed3
    john_apostle: '圣若望，宗徒、圣史', // src: mr_zh_2017_ed3
    john_baptist_de_la_salle_priest: '圣若翰·兰沙，司铎', // src: mr_zh_2017_ed3
    john_berchmans_religious: '圣若望·伯尔各满，会士', // src: mr_zh_2017_ed3
    john_bosco_priest: '圣鲍思高，司铎', // src: mr_zh_2017_ed3
    john_chrysostom_bishop: '金口圣若望，主教、圣师', // src: mr_zh_2017_ed3
    john_damascene_priest: '圣若望·达玛森，司铎、圣师', // src: mr_zh_2017_ed3
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: '北美洲殉道烈士', // src: mr_zh_2017_ed3
    john_de_britto_priest: '圣若望·波利多，司铎、殉道', // src: mr_zh_2017_ed3
    john_eudes_priest: '圣若望·欧德，司铎', // src: mr_zh_2017_ed3
    john_fisher_bishop_and_thomas_more_martyrs: '圣若望·费生主教及圣多默·莫尔，殉道', // src: mr_zh_2017_ed3
    john_francis_regis_priest: '圣若望·方济各·雷奇，司铎', // src: mr_zh_2017_ed3
    john_i_pope: '圣若望一世，教宗、殉道', // src: mr_zh_2017_ed3
    john_leonardi_priest: '圣若望·良纳弟，司铎', // src: mr_zh_2017_ed3
    john_mary_vianney_priest: '圣若翰·维雅纳，司铎', // src: mr_zh_2017_ed3
    john_nepomucene_neumann_bishop: '圣牛曼，主教', // src: mr_zh_2017_ed3
    john_of_avila_priest: '圣若望·亚维拉，司铎、圣师', // src: mr_zh_2017_ed3
    john_of_capistrano_priest: '圣若望·贾必昌，司铎', // src: mr_zh_2017_ed3
    john_of_god_duarte_cidade_religious: '天赐圣若望，会士', // src: mr_zh_2017_ed3
    john_of_kanty_priest: '圣若望根地，司铎', // src: mr_zh_2017_ed3
    john_of_the_cross_priest: '圣若望"由十字架者"，司铎、圣师', // src: mr_zh_2017_ed3
    john_of_triora_priest: '圣蓝月旺（若望）司铎殉道', // src: mr_zh_2017_ed3
    john_ogilvie_priest: '圣若望·安其味，司铎、殉道', // src: mr_zh_2017_ed3
    john_paul_ii_pope: '圣若望·保禄二世，教宗', // src: mr_zh_2017_ed3
    john_xxiii_pope: '圣若望二十三世，教宗', // src: mr_zh_2017_ed3
    josaphat_kuntsevych_bishop: '圣若撒法，主教、殉道', // src: mr_zh_2017_ed3
    josemaria_escriva_de_balaguer_priest: '圣施礼华，司铎', // src: mr_zh_2017_ed3
    joseph_freinademetz_priest: '圣福若瑟，司铎', // src: mr_zh_2017_ed3
    joseph_of_calasanz_priest: '圣加拉桑，司铎', // src: mr_zh_2017_ed3
    joseph_spouse_of_mary: '圣母净配圣若瑟', // src: mr_zh_2017_ed3
    joseph_the_worker: '大圣若瑟劳工主保', // src: mr_zh_2017_ed3
    joseph_yuan_gengyin_priest: '圣袁在德司铎殉道', // src: mr_zh_2017_ed3
    joseph_zhang_dapeng_martyr: '圣张大鹏等殉道', // src: mr_zh_2017_ed3
    juan_diego_cuauhtlatoatzin: '圣若望·迪达谷', // src: mr_zh_2017_ed3
    julie_billiart_virgin: '真福尤丽·贝略，童贞', // src: mr_zh_2017_ed3
    justin_martyr: '圣犹思定，殉道', // src: mr_zh_2017_ed3
    katharine_drexel_virgin: '圣女加大利纳，童贞', // src: mr_zh_2017_ed3
    kevin_of_glendalough_abbot: '圣基文，院长', // src: mr_zh_2017_ed3
    kuriakose_elias_of_the_holy_family_chavara_priest: '真福查瓦拉，司铎', // src: mr_zh_2017_ed3
    laurence_otoole_bishop: '圣老楞佐·奥多，主教', // src: mr_zh_2017_ed3
    laurence_wang_bing_and_companions_martyrs: '圣王炳等殉道', // src: mr_zh_2017_ed3
    lawrence_bai_xiaoman_martyr: '圣白小满殉道', // src: mr_zh_2017_ed3
    lawrence_of_brindisi_priest: '圣炳德西，司铎、圣师', // src: mr_zh_2017_ed3
    lawrence_of_rome_deacon: '圣老楞佐，执事、殉道', // src: mr_zh_2017_ed3
    lawrence_ruiz_and_companions_martyrs: '圣老楞佐·卢斯及同伴，殉道', // src: mr_zh_2017_ed3
    leander_of_seville_bishop: '圣林达，主教', // src: mr_zh_2017_ed3
    leo_i_the_great_pope: '圣良一世，教宗、圣师', // src: mr_zh_2017_ed3
    leo_ix_pope: '圣良九世，教宗', // src: mr_zh_2017_ed3
    leonard_of_noblac_hermit: '圣良纳弟，隐修', // src: mr_zh_2017_ed3
    louis_grignion_de_montfort_priest: '圣类思·葛利宁·蒙福，司铎', // src: mr_zh_2017_ed3
    louis_ix_of_france: '圣路易', // src: mr_zh_2017_ed3
    louis_of_toulouse_bishop: '圣路易·安日，主教', // src: mr_zh_2017_ed3
    louise_de_marillac_religious: '圣妇露易丝，会士', // src: mr_zh_2017_ed3
    lucy_of_syracuse_virgin: '圣女路济亚，童贞、殉道', // src: mr_zh_2017_ed3
    lucy_yi_zhenmei_virgin: '圣易贞美贞女殉道', // src: mr_zh_2017_ed3
    ludger_of_munster_bishop: '圣路基，主教', // src: mr_zh_2017_ed3
    luke_evangelist: '圣史路加', // src: mr_zh_2017_ed3
    madeleine_sophie_barat_virgin: '圣玛达肋纳·沙斐·亚巴拉，童贞', // src: mr_zh_2017_ed3
    marcellin_champagnat_priest: '圣马塞兰，司铎', // src: mr_zh_2017_ed3
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: '圣玛策林、圣伯多禄，殉道', // src: mr_zh_2017_ed3
    margaret_mary_alacoque_virgin: '圣女玛加利大，童贞', // src: mr_zh_2017_ed3
    margaret_of_scotland: '圣妇玛加利大', // src: mr_zh_2017_ed3
    marguerite_bourgeoys_virgin: '圣女玛加利大，童贞', // src: mr_zh_2017_ed3
    maria_goretti_virgin: '圣女玛利亚·高兰蒂，童贞、殉道', // src: mr_zh_2017_ed3
    mark_evangelist: '圣马尔谷，圣史', // src: mr_zh_2017_ed3
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: '圣玛尔大、圣玛利亚及圣拉匝禄', // src: mr_zh_2017_ed3
    martin_de_porres_religious: '圣玛尔定，会士', // src: mr_zh_2017_ed3
    martin_i_pope: '圣玛尔定一世，教宗、殉道', // src: mr_zh_2017_ed3
    martin_of_tours_bishop: '圣玛尔定，主教', // src: mr_zh_2017_ed3
    martin_wu_xuesheng_and_companions_martyrs: '圣吴学圣等殉道', // src: mr_zh_2017_ed3
    mary_assunta_pallotta_virgin: '真福亚松大，童贞', // src: mr_zh_2017_ed3
    mary_euphrasia_pelletier_religious: '圣女贝莱蒂，会士', // src: mr_zh_2017_ed3
    mary_magdalene: '圣玛利亚·玛达肋纳', // src: mr_zh_2017_ed3
    mary_magdalene_de_pazzi_virgin: '圣玛达肋纳·戴博济，童贞', // src: mr_zh_2017_ed3
    mary_mother_of_god: '天主之母节', // src: mr_zh_2017_ed3
    mary_mother_of_the_church: '教会之母', // src: mr_zh_2017_ed3
    mary_of_the_incarnation_barbara_acarie_religious: '福女玛利亚，会士', // src: mr_zh_2017_ed3
    matilda_of_ringelheim: '圣妇玛蒂达', // src: mr_zh_2017_ed3
    matthew_apostle: '圣玛窦，宗徒、圣史', // src: mr_zh_2017_ed3
    matthias_apostle: '圣玛弟亚，宗徒', // src: mr_zh_2017_ed3
    maurus_of_glanfeuil_abbot: '圣毛禄，院长', // src: mr_zh_2017_ed3
    maximilian_mary_raymund_kolbe_priest: '圣国柏，司铎、殉道', // src: mr_zh_2017_ed3
    michael_gabriel_and_raphael_archangels: '诸圣天使（圣弥额尔、圣加俾额尔、圣拉法厄尔）', // src: mr_zh_2017_ed3
    miguel_febres_cordero_religious: '圣高德乐，会士', // src: mr_zh_2017_ed3
    monica_of_hippo: '圣妇莫尼加', // src: mr_zh_2017_ed3
    most_holy_body_and_blood_of_christ: '基督圣体圣血节', // src: mr_zh_2017_ed3
    most_holy_name_of_jesus: '耶稣圣名', // src: mr_zh_2017_ed3
    most_holy_name_of_mary: '圣母圣名', // src: mr_zh_2017_ed3
    most_holy_trinity: '圣三主日', // src: mr_zh_2017_ed3
    most_sacred_heart_of_jesus: '耶稣圣心节', // src: mr_zh_2017_ed3
    nativity_of_john_the_baptist: '圣若翰洗者诞辰', // src: mr_zh_2017_ed3
    nativity_of_the_blessed_virgin_mary: '圣母诞辰', // src: mr_zh_2017_ed3
    nativity_of_the_lord: '耶稣圣诞', // src: mr_zh_2017_ed3
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: '圣乃仁、圣亚启略，殉道', // src: mr_zh_2017_ed3
    nicholas_of_flue_hermit: '圣尼格老·冯物洛', // src: mr_zh_2017_ed3
    nicholas_of_myra_bishop: '圣尼各老，主教', // src: mr_zh_2017_ed3
    norbert_of_xanten_bishop: '圣诺贝特，主教', // src: mr_zh_2017_ed3
    odoric_of_pordenone_priest: '真福和德理，司铎', // src: mr_zh_2017_ed3
    our_lady_help_of_christians: '圣母进教之佑', // src: mr_zh_2017_ed3
    our_lady_of_china: '中华圣母', // src: mr_zh_2017_ed3
    our_lady_of_fatima: '法蒂玛圣母', // src: mr_zh_2017_ed3
    our_lady_of_guadalupe: '瓜达卢佩圣母', // src: mr_zh_2017_ed3
    our_lady_of_loreto: '洛雷托圣母', // src: mr_zh_2017_ed3
    our_lady_of_lourdes: '露德圣母显现', // src: mr_zh_2017_ed3
    our_lady_of_mercy: '圣母赎虏', // src: mr_zh_2017_ed3
    our_lady_of_mount_carmel: '加尔默罗圣母', // src: mr_zh_2017_ed3
    our_lady_of_sorrows: '痛苦圣母', // src: mr_zh_2017_ed3
    our_lady_of_the_rosary: '玫瑰圣母', // src: mr_zh_2017_ed3
    our_lord_jesus_christ_king_of_the_universe: '基督普世君王节', // src: mr_zh_2017_ed3
    our_lord_jesus_christ_the_eternal_high_priest: '我们的主耶稣基督——永恒的大司祭', // src: mr_zh_2017_ed3
    palm_sunday_of_the_passion_of_the_lord: '圣枝主日（基督苦难主日）', // src: mr_zh_2017_ed3
    pancras_of_rome_martyr: '圣邦康，殉道', // src: mr_zh_2017_ed3
    paschal_baylon_religious: '圣巴斯卦，会士', // src: mr_zh_2017_ed3
    passion_of_saint_john_the_baptist: '圣若翰洗者蒙难', // src: mr_zh_2017_ed3
    patrick_of_ireland_bishop: '圣巴特里爵，主教', // src: mr_zh_2017_ed3
    paul_chen_changpin_and_companions_martyrs: '圣陈昌品修生等殉道', // src: mr_zh_2017_ed3
    paul_liu_hanzuo_priest: '圣刘翰佐司铎殉道', // src: mr_zh_2017_ed3
    paul_miki_and_companions_martyrs: '圣保禄三木司铎及同伴，殉道', // src: mr_zh_2017_ed3
    paul_of_the_cross_priest: '圣十字保禄，司铎', // src: mr_zh_2017_ed3
    paul_of_thebes_hermit: '圣保禄首位独修', // src: mr_zh_2017_ed3
    paul_vi_pope: '圣保禄六世，教宗', // src: mr_zh_2017_ed3
    paulinus_of_nola_bishop: '圣保林，主教', // src: mr_zh_2017_ed3
    pentecost_sunday: '圣神降临节', // src: mr_zh_2017_ed3
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: '圣伯尔都亚、圣斐利谦等，殉道', // src: mr_zh_2017_ed3
    peter_and_paul_apostles: '圣伯多禄及圣保禄，宗徒', // src: mr_zh_2017_ed3
    peter_canisius_priest: '圣伯多禄·加尼削，司铎、圣师', // src: mr_zh_2017_ed3
    peter_chanel_priest: '圣伯多禄·查纳，司铎、殉道', // src: mr_zh_2017_ed3
    peter_chrysologus_bishop: '圣伯多禄金言，主教、圣师', // src: mr_zh_2017_ed3
    peter_claver_priest: '圣伯多禄·格肋凡，司铎', // src: mr_zh_2017_ed3
    peter_damian_bishop: '圣伯多禄·达弥盎，主教、圣师', // src: mr_zh_2017_ed3
    peter_julian_eymard_priest: '真福伯多禄·儒里安·爱麦，司铎', // src: mr_zh_2017_ed3
    peter_liu_wenyuan_martyr: '圣刘文元殉道', // src: mr_zh_2017_ed3
    peter_nolasco_religious: '圣伯多禄·诺拉谷，会士', // src: mr_zh_2017_ed3
    peter_of_alcantara_priest: '圣伯多禄·亚刚大辣，司铎', // src: mr_zh_2017_ed3
    peter_sanz_bishop: '真福桑实(伯多禄)主教殉道', // src: mr_zh_2017_ed3
    peter_wu_guosheng_martyr: '圣吴国盛（伯多禄），殉道', // src: mr_zh_2017_ed3
    philip_and_james_apostles: '圣斐理伯、圣雅各伯，宗徒', // src: mr_zh_2017_ed3
    philip_neri_priest: '圣斐理伯·内利，司铎', // src: mr_zh_2017_ed3
    philip_of_jesus_de_las_casas_martyr: '圣斐理伯·耶稣，殉道', // src: mr_zh_2017_ed3
    pius_francesco_forgione_priest: '圣比约·庇特來，司铎', // src: mr_zh_2017_ed3
    pius_v_pope: '圣比约五世，教宗', // src: mr_zh_2017_ed3
    pius_x_pope: '圣比约十世，教宗', // src: mr_zh_2017_ed3
    polycarp_of_smyrna_bishop: '圣波利卡浦，主教、殉道', // src: mr_zh_2017_ed3
    pontian_i_pope_and_hippolytus_of_rome_priest: '圣依玻里多和圣彭谦，殉道', // src: mr_zh_2017_ed3
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: '里昂及维安殉道烈士', // src: mr_zh_2017_ed3
    presentation_of_the_blessed_virgin_mary: '圣母奉献日', // src: mr_zh_2017_ed3
    presentation_of_the_lord: '献耶稣于圣殿', // src: mr_zh_2017_ed3
    queenship_of_the_blessed_virgin_mary: '圣母元后', // src: mr_zh_2017_ed3
    raymond_of_penyafort_priest: '圣赖孟多，司铎', // src: mr_zh_2017_ed3
    rita_of_cascia_religious: '圣丽达，会士', // src: mr_zh_2017_ed3
    robert_bellarmine_bishop: '圣罗伯多·贝勒明，主教、圣师', // src: mr_zh_2017_ed3
    roch_of_montpellier: '圣洛克', // src: mr_zh_2017_ed3
    romuald_of_ravenna_abbot: '圣罗慕铎，院长', // src: mr_zh_2017_ed3
    rose_of_lima_virgin: '圣女罗撒，童贞', // src: mr_zh_2017_ed3
    scholastica_of_nursia_virgin: '圣女斯高拉蒂加，童贞', // src: mr_zh_2017_ed3
    sebastian_of_milan_martyr: '圣巴斯弟盎，殉道', // src: mr_zh_2017_ed3
    seven_holy_founders_of_the_servite_order: '圣母忠仆会七位会祖', // src: mr_zh_2017_ed3
    severinus_of_noricum_monk: '圣塞味利·诺利根，修士', // src: mr_zh_2017_ed3
    sharbel_makhluf_priest: '圣撒柏·麦禄福，司铎', // src: mr_zh_2017_ed3
    simon_and_jude_apostles: '圣西满、圣达陡，宗徒', // src: mr_zh_2017_ed3
    sixtus_ii_pope_and_companions_martyrs: '圣西斯督二世及同伴，教宗、殉道', // src: mr_zh_2017_ed3
    spyridon_of_trimythous_bishop: '圣史比利廷，主教', // src: mr_zh_2017_ed3
    stanislaus_kostka_religious: '圣达尼老·各斯加，会士', // src: mr_zh_2017_ed3
    stanislaus_of_szczepanow_bishop: '圣达尼老，主教、殉道', // src: mr_zh_2017_ed3
    stephen_i_of_hungary: '圣斯德望国王', // src: mr_zh_2017_ed3
    stephen_the_first_martyr: '圣斯德望，首位殉道', // src: mr_zh_2017_ed3
    sunday_of_the_word_of_god: '常年期第三主日（圣言主日）', // src: mr_zh_2017_ed3
    sylvester_i_pope: '圣西尔物斯德肋，教宗', // src: mr_zh_2017_ed3
    teresa_of_calcutta_virgin: '圣德肋撒·加尔各答，童贞', // src: mr_zh_2017_ed3
    teresa_of_jesus_of_avila_virgin: '圣女大德肋撒，童贞、圣师', // src: mr_zh_2017_ed3
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: '里修·圣德肋撒贞女，传教主保', // src: mr_zh_2017_ed3
    thomas_apostle: '圣多默，宗徒', // src: mr_zh_2017_ed3
    thomas_aquinas_priest: '圣多玛斯·阿奎那，司铎、圣师', // src: mr_zh_2017_ed3
    thomas_becket_bishop: '圣多默·贝凯，主教、殉道', // src: mr_zh_2017_ed3
    thomas_of_villanova_bishop: '圣多默·威拉诺，主教', // src: mr_zh_2017_ed3
    thursday_of_the_lords_supper: '主的晚餐（建定圣体）', // src: mr_zh_2017_ed3
    timothy_of_ephesus_and_titus_of_crete_bishops: '圣弟茂德及圣弟铎，主教', // src: mr_zh_2017_ed3
    transfiguration_of_the_lord: '耶稣显圣容', // src: mr_zh_2017_ed3
    turibius_of_mogrovejo_bishop: '圣多利波，主教', // src: mr_zh_2017_ed3
    vincent_de_paul_priest: '圣味增爵，司铎', // src: mr_zh_2017_ed3
    vincent_ferrer_priest: '圣味增爵·斐勒略，司铎', // src: mr_zh_2017_ed3
    vincent_of_saragossa_deacon: '圣味增爵，执事、殉道', // src: mr_zh_2017_ed3
    vincent_pallotti_priest: '圣味增爵·柏乐天，司铎', // src: mr_zh_2017_ed3
    visitation_of_mary: '圣母访亲', // src: mr_zh_2017_ed3
    walpurga_of_heidenheim_abbess: '圣女华波加，女院长', // src: mr_zh_2017_ed3
    wenceslaus_i_of_bohemia_martyr: '圣文策老，殉道', // src: mr_zh_2017_ed3
    wilfrid_of_york_bishop: '圣威弗烈，主教', // src: mr_zh_2017_ed3
    willibrord_of_utrecht_bishop: '圣威利巴，主教', // src: mr_zh_2017_ed3
  },

  ordinals: {
    '1': '第一', // src: mr_zh_2017_ed3
    '2': '第二', // src: mr_zh_2017_ed3
    '3': '第三', // src: mr_zh_2017_ed3
    '4': '第四', // src: mr_zh_2017_ed3
    '5': '第五', // src: mr_zh_2017_ed3
    '6': '第六', // src: mr_zh_2017_ed3
    '7': '第七', // src: mr_zh_2017_ed3
    '8': '第八', // src: mr_zh_2017_ed3
    '9': '第九', // src: mr_zh_2017_ed3
    '10': '第十', // src: mr_zh_2017_ed3
    '11': '第十一', // src: mr_zh_2017_ed3
    '12': '第十二', // src: mr_zh_2017_ed3
    '13': '第十三', // src: mr_zh_2017_ed3
    '14': '第十四', // src: mr_zh_2017_ed3
    '15': '第十五', // src: mr_zh_2017_ed3
    '16': '第十六', // src: mr_zh_2017_ed3
    '17': '第十七', // src: mr_zh_2017_ed3
    '18': '第十八', // src: mr_zh_2017_ed3
    '19': '第十九', // src: mr_zh_2017_ed3
    '20': '第二十', // src: mr_zh_2017_ed3
    '21': '第二十一', // src: mr_zh_2017_ed3
    '22': '第二十二', // src: mr_zh_2017_ed3
    '23': '第二十三', // src: mr_zh_2017_ed3
    '24': '第二十四', // src: mr_zh_2017_ed3
    '25': '第二十五', // src: mr_zh_2017_ed3
    '26': '第二十六', // src: mr_zh_2017_ed3
    '27': '第二十七', // src: mr_zh_2017_ed3
    '28': '第二十八', // src: mr_zh_2017_ed3
    '29': '第二十九', // src: mr_zh_2017_ed3
    '30': '第三十', // src: mr_zh_2017_ed3
    '31': '第三十一', // src: mr_zh_2017_ed3
    '32': '第三十二', // src: mr_zh_2017_ed3
    '33': '第三十三', // src: mr_zh_2017_ed3
    '34': '第三十四', // src: mr_zh_2017_ed3
  },

  periods: {
    epiphany: '主显节后', // src: mr_zh_2017_ed3
    holy_week: '圣周', // src: mr_zh_2017_ed3
  },

  ranks: {
    feast: '庆日', // src: mr_zh_2017_ed3
    memorial: '必行纪念', // src: mr_zh_2017_ed3
    optional_memorial: '自由纪念', // src: mr_zh_2017_ed3
    solemnity: '节日', // src: mr_zh_2017_ed3
    sunday: '主日', // src: mr_zh_2017_ed3
    weekday: '平日', // src: mr_zh_2017_ed3
  },

  seasons: {
    advent: {
      privileged_weekday: '$t(months:11){{day}}日', // src: mr_zh_2017_ed3
      season: '将临期', // src: mr_zh_2017_ed3
      sunday: '将临期$t(ordinals:{{week}})主日', // src: mr_zh_2017_ed3
      weekday: '将临期$t(ordinals:{{week}})周$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
    },

    christmas_time: {
      after_epiphany: '主显节后$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
      before_epiphany: '$t(months:0){{day}}日', // src: mr_zh_2017_ed3
      day: '圣诞期$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
      octave: '耶稣圣诞八日庆期$t(ordinals:{{count}})日', // src: mr_zh_2017_ed3
      season: '圣诞期', // src: mr_zh_2017_ed3
      second_sunday_after_christmas: '圣诞后第二主日', // src: mr_zh_2017_ed3
    },

    easter_time: {
      octave: '复活八日庆期$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
      season: '复活期', // src: mr_zh_2017_ed3
      sunday: '复活期$t(ordinals:{{week}})主日', // src: mr_zh_2017_ed3
      weekday: '复活期$t(ordinals:{{week}})周$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
    },

    lent: {
      day_after_ash_wed: '圣灰礼仪后$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
      holy_week_day: '圣周$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
      season: '四旬期', // src: mr_zh_2017_ed3
      sunday: '四旬期$t(ordinals:{{week}})主日', // src: mr_zh_2017_ed3
      weekday: '四旬期$t(ordinals:{{week}})周$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
    },

    ordinary_time: {
      season: '常年期', // src: mr_zh_2017_ed3
      sunday: '常年期$t(ordinals:{{week}})主日', // src: mr_zh_2017_ed3
      weekday: '常年期$t(ordinals:{{week}})周$t(weekdays:{{dow}})', // src: mr_zh_2017_ed3
    },

    paschal_triduum: {
      season: '圣周三日庆典', // src: mr_zh_2017_ed3
    },
  },

  weekdays: {
    0: '主日', // src: mr_zh_2017_ed3
    1: '星期一', // src: mr_zh_2017_ed3
    2: '星期二', // src: mr_zh_2017_ed3
    3: '星期三', // src: mr_zh_2017_ed3
    4: '星期四', // src: mr_zh_2017_ed3
    5: '星期五', // src: mr_zh_2017_ed3
    6: '星期六', // src: mr_zh_2017_ed3
  },
};
