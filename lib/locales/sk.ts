import { Locale } from '../types/locale';

export const locale: Locale = {
  key: 'sk',

  roman_rite: {
    seasons: {
      advent: {
        season: 'Adventné obdobie',
        weekday:
          '{{day, capitalize}} po $t(ordinals:{{week}}) adventnej nedeli',
        sunday: '$t(ordinals:{{week}}, capitalize) adventná nedeľa',
      },

      christmastide: {
        season: 'Vianočné obdobie',
        day: '{{day, capitalize}} vo Vianočnom období',
        octave: '{{count}}. deň v oktáve narodenia Pána',
        second_sunday_after_christmas: 'Druhú nedeľa po narodení Pána',
        before_epiphany: '{{day, capitalize}} vo vianočnom období',
        after_epiphany: '{{day, capitalize}} po Zjavení Pána',
      },

      ordinary_time: {
        season: 'Cezročné obdobie',
        weekday:
          '{{day, capitalize}} $t(ordinals:{{week}}) týždňa v Cezročnom období',
        sunday: '$t(ordinals:{{week}}, capitalize) nedeľa v Cezročnom období',
      },

      lent: {
        season: 'Pôstne obdobie',
        weekday: '{{day, capitalize}} po $t(ordinals:{{week}}) pôstnej nedeli',
        sunday: '$t(ordinals:{{week}}, capitalize) pôstna nedeľa',
        day_after_ash_wed: '{{day, capitalize}} po Popolcovej strede',
        holy_week_day: '{{day, capitalize}} Veľkého týždňa',
      },

      paschal_triduum: {
        season: 'Veľkonočné Triduum',
      },

      eastertide: {
        season: 'Veľkonočné obdobie',
        weekday:
          '{{day, capitalize}} po $t(ordinals:{{week}}) veľkonočnej nedeli',
        sunday: '$t(ordinals:{{week}}, capitalize) veľkonočná nedeľa',
        octave: 'Veľkonočný {{day}}',
      },
    },

    periods: {
      epiphany: 'Zjavenie Pána',
      holy_week: 'Veľký týždeň',
    },

    ranks: {
      solemnity: 'slávnosť',
      sunday: 'nedeľa',
      feast: 'sviatok',
      memorial: 'spomienka',
      weekday: 'féria',
    },

    celebrations: {
      all_saints: 'Všetkých svätých',
      annunciation: 'Zvestovanie Pána',
      ascension: 'Nanebovstúpenie Pána',
      ash_wednesday: 'Popolcová streda',
      assumption: 'Nanebovzatie Panny Márie',
      baptism_of_the_lord: 'Krst Krista Pána',
      christ_the_king_sunday: 'Krista Kráľa',
      christmas: 'Narodenie Pána',
      corpus_christi: 'Najsvätejšieho Kristovho Tela a Krvi',
      divine_mercy_sunday: 'Nedeľa Božieho milosrdenstva',
      easter_sunday: 'Nedeľa Pánovho zmŕtvychvstania',
      epiphany: 'Zjavenie Pána',
      exaltation_of_the_holy_cross: 'Povýšenie Svätého kríža',
      good_friday: 'Veľký piatok',
      guardian_angel_of_portugal: 'Anjela strážcu Portugalska',
      holy_family: 'Svätej rodiny Ježiša, Márie a Jozefa',
      holy_saturday: 'Biela sobota',
      holy_thursday: 'Zelený štvrtok',
      immaculate_conception_of_mary: 'Nepoškvrnené počatie Panny Márie',
      immaculate_heart_of_mary: 'Nepoškvrneného Srdca Panny Márie',
      joseph_spouse_of_mary: 'Svätého Jozefa, ženícha Panny Márie',
      mary_mother_of_god: 'Panny Márie Bohorodičky',
      most_sacred_heart_of_jesus: 'Najsvätejšieho Srdca Ježišovho',
      nativity_of_john_the_baptist: 'Narodenie svätého Jána Krstiteľa',
      palm_sunday: 'Kvetná nedeľa',
      pentecost_sunday: 'Zoslanie Ducha Svätého',
      peter_and_paul_apostles: 'Svätých Petra a Pavla, apoštolov',
      presentation_of_the_lord: 'Obetovanie Pána',
      transfiguration: 'Premenenie Pána',
      trinity_sunday: 'Najsvätejšej Trojice',
    },
  },

  colors: {
    black: 'čierna',
    gold: 'zlatá',
    green: 'zelená',
    purple: 'fialová',
    red: 'červená',
    rose: 'ružová',
    white: 'biela',
  },

  martyrology: {
    '205_blessed_martyrs_of_japan': 'Blahoslavených 205 japonských mučeníkov',
    adalbert_of_prague_bishop: 'Svätého Vojtecha, biskupa a mučeníka',
    adalbert_of_prague_bishop_patron_of_poland:
      'Svätého Vojtecha, biskupa, mučeníka a patróna Poľska',
    adolph_kolping_priest: 'Blahoslaveného Adolfa Kolpinga, kňaza',
    aelred_of_rievaulx_abbot: 'Svätého Aelreda z Rievaulx, opáta',
    aengus_of_tallaght_bishop: 'Svätého Aengusa, biskupa a opáta',
    agatha_of_sicily_virgin: 'Svätej Agáty, panny a mučenice',
    agnes_cao_guiying_martyr: 'Svätej Agnesy Cao Guiyingovej, mučenice',
    agnes_of_bohemia_virgin: 'Svätej Anežky Českej, panny',
    agnes_of_rome_virgin: 'Svätej Agnesy, panny a mučenice',
    aidan_of_ferns_bishop: 'Svätého Aidana, biskupa',
    aidan_of_lindisfarne_bishop:
      'Svätého Aidana Lindisfarnského, biskupa a misionára',
    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne:
      'Svätého Aidana, biskupa a lindisfarnských svätých',
    ailbe_of_emly_bishop: 'Svätého Ailbe, biskupa',
    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs:
      'Svätého Albána, Júlia and Árona, mučeníkov',
    alban_of_britain_martyr: 'Svätého Albána, mučeníka',
    alberic_crescitelli_priest:
      'Svätého Alberika Crescitelliho, kňaza a mučeníka',
    albert_chmielowski_religious: 'Svätého Alberta Chmielowského, rehoľníka',
    albert_the_great_bishop:
      'Svätého Alberta Veľkého, biskupa a učiteľa Cirkvi',
    albertina_berkenbrock_virgin:
      'Blahoslavenej Albertíny Berkenbrockovej, panny a mučenice',
    alberto_hurtado_priest: 'Svätého Alberta Hurtada, kňaza',
    all_saints_of_ireland: 'Všetkých svätých Írska',
    all_saints_of_wales: 'Všetkých svätých Walesu',
    all_souls: 'Všetkých verných zosnulých',
    aloysius_gonzaga_religious: 'Svätého Alojza Gonzágu, rehoľníka',
    aloysius_stepinac_bishop:
      'Blahoslaveného Alojza Stepinaca, biskupa a mučeníka',
    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs:
      'Svätých Alojza Versigliu, biskupa a Kalixta Caravaria, kňaza, mučeníkov',
    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin:
      'Svätej Alfonzy od Nepoškvrneného počatia Muttathupadathu, panny',
    alphonsus_liguori_bishop:
      'Svätého Alfonza Máriu de’ Liguori, biskupa a učiteľa Cirkvi',
    amand_of_maastricht_bishop: 'Svätého Milana, biskupa',
    ambrose_of_milan_bishop: 'Svätého Ambróza, biskupa a učiteľa Cirkvi',
    andre_bessette_religious: 'Svätého Andreja Alfréda Bessetta, rehoľníka',
    andre_grasset_priest: 'Blahoslaveného Andreja Grasseta, kňaza a mučeníka',
    andrew_apostle: 'Svätého Ondreja, apoštola',
    andrew_apostle_patron_of_russia:
      'Svätého Ondreja, apoštola a patróna Ruska',
    andrew_apostle_patron_of_scotland:
      'Svätého Ondreja, apoštola a patróna Škótska',
    andrew_bobola_priest: 'Svätého Andreja Bobolu, kňaza a mučeníka',
    andrew_de_soveral_and_ambrose_francis_ferro_priests:
      'Blahoslavených Andreja de Soverala a Ambróza Františka Ferra, mučeníka',
    andrew_dung_lac_priest_and_companions_martyrs:
      'Svätého Ondreja Dung-Laka, kňaza a spoločníkov, mučeníkov',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Svätých Ondreja Kima Taegona, kňaza, Pavla Chonga Hasanga a spoločníkov, mučeníkov',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits:
      'Svätých Andreja-Svorada a Benedikta, pustovníkov',
    angela_merici_virgin: 'Svätej Angely Merici, panny',
    angela_salawa_virgin: 'Blahoslavenej Angely Salawovej, panny',
    anno_of_cologne_bishop: 'Svätého Anna Kolínskeho, biskupa',
    anselm_of_canterbury_bishop: 'Svätého Anzelma, biskupa a učiteľa Cirkvi',
    ansgar_of_hamburg_bishop: 'Svätého Oskára, biskupa',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs:
      'Blahoslaveného Antona Juliána Nowowiejskeho, biskupa a spoločníkov, mučeníka',
    anthony_mary_claret_bishop: 'Svätého Antona Máriu Clareta, biskupa',
    anthony_of_egypt_abbot: 'Svätého Antona, opáta',
    anthony_of_padua_priest:
      'Svätého Antona Paduánskeho, kňaza a učiteľa Cirkvi',
    anthony_of_saint_anne_galvao_priest:
      'Svätého Antona od svätej Anny Galvão, kňaza',
    anthony_of_the_caves_monk: 'Svätého Antona Pečerského, mnícha',
    anthony_zaccaria_priest: 'Svätého Antona Máriu Zaccariu, kňaza',
    apollinaris_of_ravenna_bishop: 'Svätého Apolinára, biskupa a mučeníka',
    asaph_of_wales_bishop: 'Svätého Asafa, biskupa',
    asicus_of_elphin_bishop: 'Svätého Asika, biskupa',
    athanasius_of_alexandria_bishop:
      'Svätého Atanáza, biskupa a učiteľa Cirkvi',
    attracta_of_killaraght_virgin: 'Svätej Atrakty, panny',
    augustine_kazotic_bishop:
      'Blahoslaveného Augustína Kažotića, biskupa a mučeníka',
    augustine_of_canterbury_bishop: 'Svätého Augustína z Canterbury, biskupa',
    augustine_of_hippo_bishop: 'Svätého Augustína, biskupa a učiteľa Cirkvi',
    augustine_zhao_rong_priest:
      'Svätého Augustína Zhao Ronga, kňaza a mučeníka',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Svätých Augustína Zhao Ronga, kňaza a spoločníkov, mučeníkov',
    barbara_of_heliopolis_virgin: 'Svätej Barbory, panny a mučenice',
    barnabas_apostle: 'Svätého Barnabáša, apoštola',
    bartholomew_apostle: 'Svätého Bartolomeja, apoštola',
    bartholomew_dias_laurel_religious:
      'Blahoslaveného Bartolomeja Díasa Laurela, rehoľníka a mučeníka',
    bartholomew_of_the_martyrs_fernandes_bishop:
      'Blahoslaveného Bartolomeja od mučeníkov Fernandesa, biskupa',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Svätých Bazila Veľkého a Gregora Nazianzského, biskupov a učiteľov Cirkvi',
    beatrice_da_silva_meneses_virgin: 'Svätej Beatrix da Silva, panny',
    bede_the_venerable_priest:
      'Svätého Bédu Ctihodného, kňaza a učiteľa Cirkvi',
    benedict_of_jesus_valdivielso_saez_religious:
      'Svätého Benedikta od Ježiša Valdivielsa Sáeza, rehoľníka a mučeníka',
    benedict_of_nursia_abbot: 'Svätého Benedikta, opáta',
    benedict_of_nursia_abbot_patron_of_europe:
      'Svätého Benedikta, opáta a patróna Európy',
    benno_of_meissen_bishop: 'Svätého Benna z Meißenu, biskupa',
    bernadette_soubirous_virgin: 'Svätej Bernadety Soubirousovej, panny',
    bernard_of_clairvaux_abbot: 'Svätého Bernarda, opáta a učiteľa Cirkvi',
    bernardine_of_siena_priest: 'Svätého Bernardína Sienského, kňaza',
    beuno_of_wales_abbot: 'Svätého Beuna, opáta',
    blaise_of_sebaste_bishop: 'Svätého Blažeja, biskupa a mučeníka',
    bogumilus_of_dobrow_bishop: 'Blahoslaveného Bohumila, biskupa',
    boleslawa_mary_lament_virgin:
      'Blahoslavenej Boleslavy Márie Lamentovej, panny',
    bonaventure_of_bagnoregio_bishop:
      'Svätého Bonaventúru, biskupa a učiteľa Cirkvi',
    boniface_of_mainz_bishop: 'Svätého Bonifáca, biskupa a mučeníka',
    boris_of_kiev_and_gleb_of_kiev_martyrs: 'Svätých Borisa a Gleba, mučeníkov',
    brendan_of_clonfert_abbot: 'Svätého Brendana, opáta',
    bridget_of_sweden_religious: 'Svätej Brigity, rehoľnice',
    bridget_of_sweden_religious_copatroness_of_europe:
      'Svätej Brigity, rehoľnice a spolupatrónky Európy',
    brigid_of_kildare_virgin_copatroness_of_ireland:
      'Svätej Brigity Írskej, panny a spolupatrónky Írska',
    bronislava_of_poland_virgin: 'Blahoslavenej Bronislavy, panny',
    bronislaw_markiewicz_priest: 'Blahoslaveného Bronislava Markiewicza, kňaza',
    bruno_of_cologne_priest: ' Svätého Bruna, kňaza',
    bruno_of_querfurt_bishop: 'Svätého Bruna z Querfurtu, biskupa a mučeníka',
    caesarius_of_arles_bishop: 'Svätého Cézara z Arles, biskupa',
    cajetan_of_thiene_priest: 'Svätého Kajetána, kňaza',
    callistus_i_pope: 'Svätého Kalixta I., pápeža a mučeníka',
    camillus_de_lellis_priest: 'Svätého Kamila de Lellis, kňaza',
    canice_of_kilkenny_abbot: 'Svätého Kanika, opáta',
    canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs:
      'Svätých Kanuta, Erika a Olafa, mučeníkov',
    canute_iv_of_denmark_martyr: 'Svätého Kanuta, mučeníka',
    carlos_manuel_rodriguez_santiago:
      'Blahoslaveného Karola Emanuela Rodrígueza Santiaga',
    caroline_kozka_virgin: 'Blahoslavenej Karolíny Kózkównej, panny a mučenice',
    carthage_of_lismore_bishop: 'Svätého Kartága z Lismore, biskupa',
    casimir_of_poland: 'Svätého Kazimíra',
    catherine_of_alexandria_virgin:
      'Svätej Kataríny Alexandrijskej, panny a mučenice',
    catherine_of_saint_augustine_de_simon_de_longpre_virgin:
      'Blahoslavenej Kataríny od sv. Augustína de Simon de Longpré, panny',
    catherine_of_siena_virgin:
      'Svätej Kataríny Sienskej, panny a učiteľky Cirkvi',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Svätej Kataríny Sienskej, panny, učiteľky Cirkvi a spolupatrónky Európy',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Svätej Kataríny Sienskej, panny, učiteľky Cirkvi a spolupatrónky Talianska a Európy',
    ceallach_of_armagh_bishop: 'Svätého Cellacha, biskupa',
    cecilia_of_rome_virgin: 'Svätej Cecílie, panny a mučenice',
    ceferino_gimenez_malla_martyr:
      'Blahoslaveného Zefirína Giménez Mallu, mučeníka',
    ceslaus_of_poland_and_hyacinth_of_poland_priests:
      'Blahoslaveného Česlava a svätého Hyacinta, kňazov',
    ceslaus_of_poland_priest: 'Blahoslaveného Česlava, kňaza',
    chad_of_mercia_and_cedd_of_lastingham_bishops:
      'Svätých Chada a Cedda, biskupov',
    chair_of_saint_peter_the_apostle: 'Katedra svätého Petra, apoštola',
    charles_borromeo_bishop: 'Svätého Karola Boromejského, biskupa',
    charles_i_of_austria: 'Blahoslaveného Karola Habsburského',
    charles_lwanga_and_companions_martyrs:
      'Svätých Karola Lwangu a spoločníkov, mučeníkov',
    charles_spinola_and_jerome_de_angelis_priests:
      'Blahoslavených Karola Spinolu a Hieronyma de Angelis, kňazov a mučeníkov',
    charles_spinola_priest: 'Blahoslaveného Karola Spinolu, kňaza a mučeníka',
    christopher_magallanes_priest_and_companions_martyrs:
      'Svätého Krištofa Magallanesa, kňaza a spoločníkov, mučeníkov',
    christopher_of_palestine_martyr: 'Svätého Krištofa, mučeníka',
    ciaran_of_clonmacnoise_abbot: 'Svätého Kierana z Clonmacnoise, opáta',
    clare_of_assisi_virgin: 'Svätej Kláry, panny',
    clement_i_pope: 'Svätého Klementa I., pápeža a mučeníka',
    clement_mary_hofbauer_priest: 'Svätého Klementa Máriu Hofbauera, kňaza',
    clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions:
      'Svätých Klimenta Ochridského a Gorazda, biskupov a spoločníkov',
    clotilde_of_burgundy: 'Svätej Klotildy',
    colman_of_cloyne_bishop: 'Svätého Kolomana z Cloyne, biskupa',
    colman_of_dromore_bishop: 'Svätého Kolomana z Dromore, biskupa',
    colman_of_kilmacduagh_bishop: 'Svätého Kolomana z Kilmacduagh, biskupa',
    columba_marmion_priest: 'Blahoslaveného Kolumbu Marmiona, kňaza',
    columba_of_iona_abbot: 'Svätého Kolumbu, opáta',
    columba_of_iona_abbot_copatron_of_ireland:
      'Svätého Kolumbu, opáta a spolupatróna Írska',
    columban_of_luxeuil_abbot: 'Svätého Kolumbána, opáta',
    comgall_of_bangor_abbot: 'Svätého Komgala, opáta',
    conleth_of_kildare_bishop: 'Svätého Konleta, biskupa',
    conrad_of_constance_and_gebhard_of_constance_bishops:
      'Svätých Konráda a Gebharda z Kostnice, biskupov',
    conrad_of_parzham_religious: 'Svätého Konráda z Parzhamu, rehoľníka',
    conversion_of_saint_paul_the_apostle: 'Obrátenie svätého Pavla, apoštola',
    corbinian_of_freising_bishop: 'Svätého Korbiniána, biskupa',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Svätých Kornélia, pápeža a Cypriána, biskupa, mučeníkov',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs:
      'Svätých Kozmu a Damiána, mučeníkov',
    cuthbert_of_lindisfarne_bishop: 'Svätého Kutberta, biskupa',
    cyril_of_alexandria_bishop:
      'Svätého Cyrila Alexandrijského, biskupa a učiteľa Cirkvi',
    cyril_of_jerusalem_bishop:
      'Svätého Cyrila Jeruzalemského, biskupa a učiteľa Cirkvi',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop:
      'Svätých Cyrila, mnícha a Metoda, biskupa',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      'Svätých Cyrila, mnícha a Metoda, biskupa, spolupatrónov Európy',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_slavic_missionaries:
      'Svätých Cyrila a Metoda, slovanských vierozvestov',
    damasus_i_pope: 'Svätého Damaza I., pápeža',
    damien_de_veuster_priest: 'Svätého Damiána de Veuster, kňaza a mučeníka',
    david_lewis_priest: 'Svätého Dávida Lewisa, kňaza a mučeníka',
    david_of_wales_bishop: 'Svätého Dávida z Walesu, biskupa',
    david_of_wales_bishop_patron_of_wales:
      'Svätého Dávida z Walesu, biskupa a patróna Walesu',
    davnet_of_sliabh_beagh_virgin: 'Svätej Davnety, panny',
    declan_of_ardmore_bishop: 'Svätého Deklana, biskupa',
    dedication_of_consecrated_churches:
      'Výročie posviacky chrámov, ktorých deň posviacky je neznámy',
    dedication_of_the_basilica_of_saint_mary_major:
      'Výročie posviacky Hlavnej mariánskej baziliky v Ríme',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Výročie posviacky bazilík svätého Petra a svätého Pavla, apoštolov',
    dedication_of_the_lateran_basilica:
      'Výročie posviacky Lateránskej baziliky',
    deiniol_of_bangor_bishop: 'Svätého Deiniola, biskupa',
    demetrius_of_thessaloniki_martyr: 'Svätého Demetra Solúnskeho, mučeníka',
    denis_of_paris_bishop_and_companions_martyrs:
      'Svätého Dionýza, biskupa a spoločníkov, mučeníkov',
    dina_belanger_virgin: 'Blahoslavenej Diny Bélangerovej, panny',
    dionysius_the_areopagite_bishop:
      'Svätého Dionýza Areopagitu, biskupa a mučeníka',
    dominic_de_guzman_priest: 'Svätého Dominika, kňaza',
    dominic_of_the_mother_of_god_barberi_priest:
      'Blahoslaveného Dominika od Matky Božej Barberi, kňaza',
    dunstan_of_canterbury_bishop: 'Svätého Dunstana z Canterbury, biskupa',
    dyfrig_of_wales_bishop: 'Svätého Dubrícia z Walesu, biskupa',
    edmund_bojanowski: 'Blahoslaveného Edmunda Bojanowského',
    edmund_campion_priest: 'Svätého Edmunda Kampiána, kňaza a mučeníka',
    edmund_ignatius_rice_religious:
      'Blahoslaveného Edmunda Ignáca Rica, rehoľníka',
    edmund_of_abingdon_bishop: 'Svätého Edmunda z Abingdonu, biskupa',
    edward_the_confessor: 'Svätého Eduarda Vyznávača',
    elijah_prophet: 'Svätého Eliáša, proroka',
    elizabeth_ann_seton_religious: 'Svätej Alžbety Anny Setonovej, rehoľnice',
    elizabeth_hesselblad_religious: 'Svätej Alžbety Hesselbladovej, panny',
    elizabeth_of_hungary_religious: 'Svätej Alžbety Uhorskej, rehoľnice',
    elizabeth_of_portugal: 'Svätej Alžbety Portugalskej',
    emeric_of_hungary: 'Svätého Imricha',
    emilie_tavernier_gamelin_religious:
      'Blahoslavenej Emílie Tavernier Gamelinovej, rehoľnice',
    enda_of_aran_abbot: 'Svätého Endu, opáta',
    english_martyrs: 'Svätých anglických mučeníkov',
    eoghan_of_ardstraw_bishop: 'Svätého Eoghana, biskupa',
    ephrem_the_syrian_deacon: 'Svätého Efréma, diakona a učiteľa Cirkvi',
    eric_ix_of_sweden_martyr: 'Svätého Erika IX. Švédskeho, mučeníka',
    etheldreda_of_ely_abbess: 'Svätej Eteldredy z Ely, opátky',
    eugene_de_mazenod_bishop: 'Svätého Eugena de Mazenod, biskupa',
    eulalia_of_merida_virgin: 'Svätej Eulálie z Meridy, panny a mučenice',
    eulogius_of_cordoba_bishop: 'Svätého Eulógia z Córdoby, biskupa',
    eusebius_of_esztergom_priest: 'Blahoslaveného Euzébia Ostrihomského, kňaza',
    eusebius_of_vercelli_bishop: 'Svätého Euzébia Vercellského, biskupa',
    eysteinn_of_nidaros_bishop: 'Svätého Eysteina z Nidarosu, biskupa',
    ezequiel_moreno_bishop: 'Svätého Ezechiela Morena, biskupa',
    fabian_i_pope: 'Svätých Fabiána, pápeža a mučeníka',
    fachanan_of_kilfenora_bishop: 'Svätého Fachanana z Kilfenory, biskupa',
    fachtna_of_rosscarbery_bishop: 'Svätého Fachtnu z Rosscarbery, biskupa',
    faustina_kowalska_virgin: 'Svätej Faustíny Kowalskej, panny',
    ferdinand_iii_of_castile: 'Svätého Ferdinanda III. Kastilského',
    fiacre_of_breuil_monk: 'Svätého Fiakra, mnícha',
    fidelis_of_sigmaringen_priest:
      'Svätého Fidéla zo Sigmaringenu, kňaza a mučeníka',
    finbarr_of_cork_bishop: 'Svätého Finbarra, biskupa',
    finding_of_the_holy_cross: 'Nájdenie Svätého kríža',
    finnian_of_clonard_bishop: 'Svätého Finniana z Clonardu, biskupa',
    fintan_of_clonenagh_abbot: 'Svätého Fintana, opáta',
    first_martyrs_of_the_holy_roman_church:
      'Prvých svätých mučeníkov Cirkvi v Ríme',
    first_polish_martyrs:
      'Svätých Benedikta, Jána, Mateja, Izáka a Kristína, prvých poľských mučeníkov',
    five_wounds_of_the_lord: 'Piatich Rán Krista Pána',
    flannan_of_killaloe_bishop: 'Svätého Flannana, biskupa',
    florian_of_lorch_and_companions_martyrs:
      'Svätých Floriána a spoločníkov, mučeníkov',
    florian_of_lorch_martyr: 'Svätého Floriána, mučeníka',
    frances_of_rome_religious: 'Svätej Františky Rímskej, rehoľnice',
    frances_xavier_cabrini_virgin:
      'Svätej Františky Xaviery Cabriniovej, panny',
    francis_borgia_priest: 'Svätého Františka Borgiu, kňaza',
    francis_de_sales_bishop:
      'Svätého Františka Saleského, biskupa a učiteľa Cirkvi',
    francis_diaz_del_rincon_priest_and_companions_martyrs:
      'Svätého Františka Diaza, kňaza a spoločníkov, mučeníkov',
    francis_ferdinand_de_capillas_priest:
      'Svätého Františka Ferdinanda de Capillas, kňaza a mučeníka',
    francis_of_assisi: 'Svätého Františka Assiského',
    francis_of_assisi_patron_of_italy:
      'Svätého Františka Assiského, patróna Talianska',
    francis_of_paola_hermit: 'Svätého Františka z Paoly, pustovníka',
    francis_solanus_priest: 'Svätého Františka Solana, kňaza',
    francis_xavier_priest: 'Svätého Františka Xaverského, kňaza',
    francis_xavier_seelos_priest:
      'Blahoslaveného Františka Xavera Seelosa, kňaza',
    francois_de_montmorency_laval_bishop:
      'Svätého Františka de Montmorency-Laval, biskupa',
    frederic_janssoone_priest: 'Blahoslaveného Frederika Janssoona, kňaza',
    fridolin_of_sackingen_monk: 'Svätého Fridolína zo Säckingen, opáta',
    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops:
      'Svätých Fruktuóza, Martina a Geralda z Bragy, biskupov',
    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      'Svätých Fruktuóza z Tarragony, biskupa, Augúria a Eulógia, diakonov, mučeníkov',
    fursa_of_peronne_abbot: 'Svätého Fursu, opáta a misionára',
    gabriel_taurin_dufresse_bishop:
      'Svätého Gabriela Taurina Dufressa, biskupa a mučeníka',
    gall_of_switzerland_abbot: 'Svätého Gála, kňaza',
    genevieve_of_paris_virgin: 'Svätej Genovévy, panny',
    george_matulaitis_bishop: 'Blahoslaveného Juraja Matulaitisa, biskupa',
    george_of_lydda_martyr: 'Svätého Juraja, mučeníka',
    george_of_lydda_martyr_patron_of_england:
      'Svätého Juraja, mučeníka a patróna Anglicka',
    george_preca_priest: 'Svätého Juraja Precu, kňaza',
    gerard_of_csanad_bishop: 'Svätého Gerarda z Čanádu, biskupa a mučeníka',
    germanus_of_auxerre_bishop: 'Svätého Germána z Auxerre, biskupa',
    gertrude_of_nivelles_abbess: 'Svätej Gertrúdy z Nivelles, opátky',
    gertrude_the_great_virgin: 'Svätej Gertrúdy Veľkej, panny',
    gisela_of_hungary: 'Blahoslavenej Gizely Uhorskej, rehoľnice',
    gobnait_of_ballyvourney_virgin: 'Svätej Gobnaity, panny',
    gorazd_of_moravia_and_companions: 'Svätého Gorazda a spoločníkov',
    gotthard_of_hildesheim_bishop: 'Svätého Gotharda, biskupa',
    gratia_of_cattaro_religious: 'Blahoslaveného Gráciu Kotorského, rehoľníka',
    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs:
      'Svätých Gregora Grassiho, Františka Fogolly a Antona Fantosatiho, biskupov a spoločníkov, mučeníkov',
    gregory_of_narek_abbot: 'Svätého Gregora z Nareku, opáta a učiteľa Cirkvi',
    gregory_i_the_great_pope:
      'Svätého Gregora Veľkého, pápeža a učiteľa Cirkvi',
    gregory_vii_pope: 'Svätého Gregora VII., pápeža',
    guardian_angels: 'Svätých anjelov strážcov',
    gundisalvus_garcia_martyr: 'Svätého Gundislava Garcíu, mučeníka',
    gundisalvus_of_amarante_priest:
      'Blahoslaveného Gundislava z Amarante, kňaza',
    gundisalvus_of_lagos_priest: 'Blahoslaveného Gundislava de Lagos, kňaza',
    hedwig_of_poland: 'Svätej Hedvigy Poľskej',
    hedwig_of_silesia_religious: 'Svätej Hedvigy, rehoľnice',
    helena_of_constantinople: 'Svätej Heleny',
    hemma_of_gurk: 'Svätej Emy z Gurku',
    hemming_of_turku_bishop: 'Blahoslaveného Hemminga z Turku, biskupa',
    henry_ii_emperor: 'Svätého Henricha',
    henry_ii_emperor_and_cunigunde_of_luxembourg:
      'Svätého Henricha a Kunigundy',
    henry_of_finland_bishop: 'Svätého Henricha, biskupa a mučeníka',
    henry_suso_priest: 'Blahoslaveného Henricha Susa, kňaza',
    hermann_joseph_of_steinfeld_priest: 'Svätého Hermana Jozefa, kňaza',
    hermenegild_the_visigoths_martyr: 'Svätého Hermenegilda, mučeníka',
    hilary_of_poitiers_bishop: 'Svätého Hilára, biskupa, učiteľa Cirkvi',
    hilda_of_whitby_abbess: 'Svätej Hildy, opátky',
    hildegard_of_bingen_abbess:
      'Svätej Hildegardy z Bingenu, opátky a učiteľky Cirkvi',
    holy_child_of_cebu: 'Svätého Dieťaťa z Cebú',
    holy_innocents_martyrs: 'Svätých Neviniatok, mučeníkov',
    honorat_kozminski_priest: 'Blahoslaveného Honoráta Kożmińského, kňaza',
    hosanna_of_cattaro_virgin: 'Blahoslavenej Hosanny Kotorskej, panny',
    hroznata_of_bohemia_martyr: 'Blahoslaveného Hroznatu, mučeníka',
    hubert_of_liege_bishop: 'Svätého Huberta, biskupa',
    hugh_of_lincoln_bishop: 'Svätého Huga z Lincolnu, biskupa',
    hungarian_saints_and_blesseds: 'Maďarských svätých a blahoslavených',
    hyacinth_of_poland_priest: 'Svätého Hyacinta Poľského, kňaza',
    ignatius_de_azevedo_priest_and_companions_martyrs:
      'Blahoslaveného Ignáca de Azevedo, kňaza a spoločníkov, mučeníkov',
    ignatius_falzon: 'Blahoslaveného Ignáca Falzona',
    ignatius_of_antioch_bishop:
      'Svätého Ignáca Antiochijského, biskupa a mučeníka',
    ignatius_of_loyola_priest: 'Svätého Ignáca z Loyoly, kňaza',
    ildephonsus_of_toledo_bishop: 'Svätého Ildefonza z Toleda, biskupa',
    illtud_the_knight_abbot: 'Svätého Illtuda, opáta',
    immaculate_conception_of_mary_patroness_of_the_philippines:
      'Nepoškvrneného počatia Panny Márie, patrónky Filipín',
    immaculate_conception_of_mary_patroness_of_the_usa:
      'Nepoškvrnené počatie Panny Márie, patrónky USA',
    innocent_xi_pope: 'Blahoslaveného Inocenta XI., pápeža',
    irenaeus_of_lyon_bishop: 'Svätého Ireneja, biskupa a mučeníka',
    irene_of_macedonia: 'Svätej Ireny',
    irish_martyrs: 'Blahoslavených írskych mučeníkov',
    isidore_of_seville_bishop: 'Svätého Izidora, biskupa a učiteľa Cirkvi',
    isidore_the_farmer: 'Svätého Izidora z Madridu, roľníka',
    istvan_sandor_religious:
      'Blahoslaveného Štefana Šándora, rehoľníka a mučeníka',
    ita_of_killeedy_virgin: 'Svätej Ity, panny',
    ivan_merz: 'Blahoslaveného Ivana Merza',
    ivo_of_kermartin_priest: 'Svätého Iva z Kermartinu, kňaza',
    jacinta_marto_and_francisco_marto: 'Svätých Hyacinty a Františka Martovcov',
    james_apostle: 'Svätého Jakuba, apoštola',
    james_apostle_patron_of_spain:
      'Svätého Jakuba, apoštola a patróna Španielska',
    james_strzemie_bishop: 'Blahoslaveného Jakuba Strzemię, biskupa',
    jane_frances_de_chantal_religious:
      'Svätej Jany Františky de Chantal, rehoľnice',
    januarius_i_of_benevento_bishop: 'Svätého Januára, biskupa a mučeníka',
    jarlath_of_tuam_bishop: 'Svätého Jarláta, biskupa',
    jerome_emiliani: 'Svätého Hieronyma Emilianiho',
    jerome_of_stridon_priest: 'Svätého Hieronyma, kňaza a učiteľa Cirkvi',
    joachim_and_anne_parents_of_mary:
      'Svätých Joachima a Anny, rodičov Panny Márie',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'Svätých Anny, patrónky Quebecu a Joachima, rodičov Panny Márie',
    joachim_he_kaizhi_martyr: 'Svätého Joachima He Kaizhi, mučeníka',
    joan_of_arc_virgin_copatroness_of_france:
      'Svätej Jany z Arku, panny a spolupatrónky Francúzska',
    joan_of_portugal_virgin: 'Blahoslavenej Jany Portugalskej, panny',
    joaquina_of_saint_francis_of_assisi_de_vedruna_religious:
      'Svätej Joachimy od svätého Františka z Assisi de Vedruna, rehoľnice',
    john_apostle: 'Svätého Jána, apoštola a evanjelistu',
    john_baptist_de_la_salle_priest:
      'Svätého Jána Krstiteľa de la Salle, kňaza',
    john_berchmans_religious: 'Svätého Jána Berchmansa, rehoľníka',
    john_beyzym_priest: 'Blahoslaveného Jána Beyzyma, kňaza',
    john_bosco_priest: 'Svätého Jána Boska, kňaza',
    john_brenner_priest: 'Blahoslaveného Jána Brennera, kňaza a mučeníka',
    john_cassian_priest: 'Svätého Ján Kassiána, kňaza',
    john_chrysostom_bishop:
      'Svätého Jána Zlatoústeho, biskupa a učiteľa Cirkvi',
    john_damascene_priest: 'Svätého Jána Damascénskeho, kňaza a učiteľa Cirkvi',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Svätých Jána de Brébeuf a Izáka Joguesa, kňazov a spoločníkov, mučeníkov',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada:
      'Svätých Jána de Brébeuf a Izáka Joguesa, kňazov a spoločníkov, mučeníkov, spolupatrónov Kanady',
    john_de_britto_priest: 'Svätého Jána de Britto, kňaza a mučeníka',
    john_eudes_priest: 'Svätého Jána Eudes, kňaza',
    john_fisher_bishop_and_thomas_more_martyrs:
      'Svätých Jána Fishera, biskupa a Tomáša Mórusa, mučeníkov',
    john_gabriel_perboyre_priest:
      'Svätého Jána Gabriela Perboyreho, kňaza a mučeníka',
    john_henry_newman_priest: 'Svätého Johna Henryho Newmana, kňaza',
    john_i_pope: 'Svätého Jána I., pápeža a mučeníka',
    john_jones_priest: 'Svätého Jána Jonesa, kňaza a mučeníka',
    john_leonardi_priest: 'Svätého Jána Leonardiho, kňaza',
    john_macias_religious: 'Svätého Jána Macíasa, rehoľníka',
    john_martin_moye_priest: 'Blahoslaveného Jána Martina Moyeho, kňaza',
    john_mary_vianney_priest: 'Svätého Jána Máriu Vianneya, kňaza',
    john_nepomucene_neumann_bishop: 'Svätého Jána Nepomuk Neumanna, biskupa',
    john_nepomucene_priest: 'Svätého Jána Nepomuckého, kňaza a mučeníka',
    john_of_avila_priest: 'Svätého Jána z Ávily, kňaza a učiteľa Cirkvi',
    john_of_capistrano_priest: 'Svätého Jána Kapistránskeho, kňaza',
    john_of_dukla_priest: 'Svätého Jána z Dukly, kňaza',
    john_of_god_duarte_cidade_religious: 'Svätého Jána z Boha, rehoľníka',
    john_of_kanty_priest: 'Svätého Jána Kentského, kňaza',
    john_of_the_cross_priest: 'Svätého Jána z Kríža, kňaza a učiteľa Cirkvi',
    john_of_triora_priest: 'Svätého Jána z Triory, kňaza a mučeníka',
    john_ogilvie_priest: 'Svätého Jána Ogilvie, kňaza a mučeníka',
    john_paul_ii_pope: 'Svätého Jána Pavla II., pápeža',
    john_roberts_priest: 'Svätého Jána Robertsa, kňaza a mučeníka',
    john_sarkander_priest: 'Svätého Jána Sarkandera, kňaza a mučeníka',
    john_scheffler_bishop: 'Blahoslaveného Jána Schefflera, biskupa a mučeníka',
    john_xxiii_pope: 'Svätého Jána XXIII., pápeža',
    josaphat_kuntsevych_bishop: 'Svätého Jozafáta, biskupa a mučeníka',
    jose_maria_de_yermo_y_parres_priest:
      'Svätého Jozefa Máriu de Yermo y Parres, kňaza',
    josemaria_escriva_de_balaguer_priest:
      'Svätého Josemaríu Escrivá de Balaguer, kňaza',
    joseph_bilczewski_bishop: 'Svätého Jozefa Bilczewského, biskupa',
    joseph_de_anchieta_priest: 'Svätého Jozefa de Anchietu, kňaza',
    joseph_freinademetz_priest: 'Svätého Jozefa Freinademetza, kňaza',
    joseph_of_calasanz_priest: 'Svätého Jozefa Kalazanského, kňaza',
    joseph_sebastian_pelczar_bishop:
      'Svätého Jozefa Sebastiána Pelczara, biskupa',
    joseph_spouse_of_mary_patron_of_canada:
      'Svätého Jozefa, ženícha Panny Márie a patróna Kanady',
    joseph_the_worker: 'Svätého Jozefa, robotníka',
    joseph_vaz_priest: 'Svätého Jozefa Vaza, kňaza',
    joseph_yuan_gengyin_priest:
      'Svätého Jozefa Juana Gengjina, kňaza a mučeníka',
    joseph_zhang_dapeng_martyr: 'Svätého Jozefa Zhang Dapenga, mučeníka',
    josephine_bakhita_virgin: 'Svätej Jozefíny Bakhity, panny',
    juan_diego_cuauhtlatoatzin: 'Svätého Jána Didaka Cuauhtlatoatzina',
    juliana_of_liege_virgin: 'Svätej Juliány z Liége, panny',
    julie_billiart_virgin: 'Svätej Júlie Billiartovej, panny',
    junipero_serra_priest: 'Svätého Junipera Serru, kňaza',
    justin_martyr: 'Svätého Justína, mučeníka',
    kateri_tekakwitha_virgin: 'Svätej Kataríny Tekakwithy, panny',
    katharine_drexel_virgin: 'Svätej Kataríny Drexelovej, panny',
    kentigern_of_scotland_bishop: 'Svätého Munga, biskupa',
    kevin_of_glendalough_abbot: 'Svätého Kevina, opáta',
    kieran_of_saigir_bishop: 'Svätého Kierana zo Saighir, biskupa',
    kilian_of_wurzburg_bishop: 'Svätého Kiliána, biskupa a mučeníka',
    kilian_of_wurzburg_bishop_and_companions_martyrs:
      'Svätého Kiliána, biskupa a spoločníkov, mučeníkov',
    kinga_of_poland_virgin: 'Svätej Kingy, panny',
    kuriakose_elias_of_the_holy_family_chavara_priest:
      'Blahoslaveného Kyriaka Eliáša od Svätej rodiny Chavaru, kňaza',
    ladislas_of_gielniow_priest: 'Blahoslaveného Vladislava z Gielňova, kňaza',
    ladislaus_batthyany_strattmann:
      'Blahoslaveného Ladislava Batthyány-Strattmanna',
    ladislaus_i_of_hungary: 'Svätého Ladislava',
    lambert_of_maastricht_bishop:
      'Svätého Lamberta z Maastrichtu, biskupa a mučeníka',
    laserian_of_leighlin_bishop: 'Svätého Laseriána, biskupa',
    laura_vicuna_virgin: 'Blahoslavenej Laury Vicuñovej, panny',
    laurence_otoole_bishop: 'Svätého Vavrinec O’Toole, biskupa',
    laurence_wang_bing_and_companions_martyrs:
      'Svätého Vavrinca Wang Binga a spoločníkov, mučeníkov',
    lawrence_bai_xiaoman_martyr: 'Svätého Vavrinca Bai Xiaomana, mučeníka',
    lawrence_of_brindisi_priest:
      'Svätého Vavrinca z Brindisi, kňaza a učiteľa Cirkvi',
    lawrence_of_rome_deacon: 'Svätého Vavrinca, diakona a mučeníka',
    lawrence_ruiz_and_companions_martyrs:
      'Svätého Vavrinca Ruiza a spoločníkov, mučeníkov',
    leander_of_seville_bishop: 'Svätého Leandra zo Sevilly, biskupa',
    lelia_of_killeely_virgin: 'Svätej Lelie, panny',
    leo_i_the_great_pope: 'Svätého Leva Veľkého, pápeža a učiteľa Cirkvi',
    leo_ignatius_mangin_priest_and_companions_martyrs:
      'Svätého Leva Ignáca Mangina, kňaza a spoločníkov, mučeníkov',
    leo_ix_pope: 'Svätého Leva IX., pápeža',
    leoba_of_tauberbischofsheim_abbess: 'Svätej Leoby, opátky',
    leonard_of_noblac_hermit: 'Svätého Leonarda z Noblatu, pustovníka',
    leonid_feodorov_priest:
      'Blahoslaveného Leonida Fjodorova, kňaza a mučeníka',
    leopold_iii_of_babenberg: 'Svätého Leopolda III. Babenberského',
    leopold_mandic_priest: 'Svätého Leopolda Mandića, kňaza',
    louis_bertrand_priest: 'Svätého Ľudovíta Bertranda, kňaza',
    louis_grignion_de_montfort_priest:
      'Svätého Ľudovíta Máriu Grigniona z Montfortu, kňaza',
    louis_ix_of_france: 'Svätého Ľudovíta',
    louis_zephirin_moreau_bishop:
      'Blahoslaveného Ľudovíta Zefirína Moreau, biskupa',
    lucius_of_chur_bishop: 'Svätého Lucia z Churu, biskupa a mučeníka',
    lucy_of_syracuse_virgin: 'Svätej Lucie, panny a mučenice',
    lucy_yi_zhenmei_virgin: 'Svätej Lucie Yi Zhenmei, panny a mučenice',
    ludger_of_munster_bishop: 'Svätého Ludgera z Münsteru, biskupa',
    ludmila_of_bohemia_martyr: 'Svätej Ľudmily, mučenice',
    luigi_orione_priest: 'Svätého Alojza Orioneho, kňaza',
    luke_evangelist: 'Svätého Lukáša, evanjelistu',
    lydia_of_philippi: 'Svätej Lýdie z Filíp',
    mac_nissi_of_connor_bishop: 'Svätého Mac Nissi, biskupa',
    macartan_of_clogher_bishop: 'Svätého Makartána, biskupa',
    maelruain_of_tallaght_bishop: 'Svätého Maelruaina, biskupa a opáta',
    magnus_erlendsson_martyr: 'Svätého Magnusa Erlendssona, mučeníka',
    malachy_of_armagh_bishop: 'Svätého Malachiáša, biskupa',
    marcel_callo_martyr: 'Blahoslaveného Marcela Calla, mučeníka',
    marcelina_darowska_religious:
      'Blahoslavenej Marcelíny Darowskej, rehoľnice',
    marcellin_champagnat_priest: 'Svätého Marcelína Champagnata, kňaza',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs:
      'Svätých Marcelína a Petra, mučeníkov',
    margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs:
      'Svätej Margity Clitherowová, Anny Linová a Margity Wardová, panny, mučeníc',
    margaret_mary_alacoque_virgin: 'Svätej Margity Márie Alacoque, panny',
    margaret_of_antioch_virgin:
      'Svätej Margity Antiochijskej, panny a mučenice',
    margaret_of_hungary_religious: 'Svätej Margity Uhorskej, rehoľnice',
    margaret_of_scotland: 'Svätej Margity Škótskej',
    marguerite_bourgeoys_virgin: 'Svätej Margaréty Bourgeoys, panny',
    marguerite_dyouville_religious: 'Svätej Margaréty d’Youville, rehoľnice',
    maria_goretti_virgin: 'Svätej Márie Goretti, panny a mučenice',
    maria_guadalupe_garcia_zavala_virgin:
      'Svätej Márie Guadalupe García Zavalovej, panny',
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin:
      'Svätej Márie Michaely od Najsvätejšej Sviatosti Desmaisières, rehoľnice',
    mariana_of_jesus_de_paredes_virgin:
      'Svätej Marianny od Ježiša de Paredes, panny',
    marianne_cope_virgin: 'Svätej Marianny z Molokai, rehoľnice',
    marie_anne_blondin_virgin: 'Blahoslavenej Márie Anny Blondinovej, panny',
    marie_leonie_paradis_virgin:
      'Blahoslavenej Márie Leónie Paradisovej, panny',
    marie_of_the_incarnation_guyart_religious:
      'Svätej Márie od Vtelenia Guyart, rehoľnice',
    marie_rose_durocher_virgin:
      'Blahoslavenej Márie Ruženy Durocherovej, panny',
    mark_evangelist: 'Svätého Marka, evanjelistu',
    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests:
      'Svätých troch košických mučeníkov – Marka Križina, Melichara Grodzieckeho a Štefana Pongrácza, kňazov a mučeníkov',
    marko_krizin_priest: 'Svätého Marka Križina, kňaza a mučeníka',
    maron_of_syria_hermit: 'Svätého Maróna, pustovníka',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'Svätých Marty, Márie a Lazára',
    martin_de_porres_religious: 'Svätého Martina de Porres, rehoľníka',
    martin_i_pope: 'Svätého Martina I., pápeža a mučeníka',
    martin_of_tours_bishop: 'Svätého Martina z Tours, biskupa',
    martin_wu_xuesheng_and_companions_martyrs:
      'Svätého Martina Wu Xueshenga a spoločníkov, mučeníkov',
    mary_adeodata_pisani_virgin:
      'Blahoslavenej Márie Adeodaty Pisaniovej, panny',
    mary_angela_truszkowska_virgin:
      'Blahoslavenej Márie Angely Truszkowskej, panny',
    mary_assunta_pallotta_virgin:
      'Blahoslavenej Márie Assunty Pallottovej, panny',
    mary_magdalene: 'Svätej Márie Magdalény',
    mary_magdalene_de_pazzi_virgin: 'Svätej Márie Magdalény de’ Pazzi, panny',
    mary_mother_of_the_church: 'Preblahoslavenej Panny Márie, Matky Cirkvi',
    mary_of_jesus_crucified_petkovic_virgin:
      'Blahoslavenej Márie od ukrižovaného Ježiša Petkovićovej, panny',
    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin:
      'Svätej Márie od Ježiša v Najsvätejšej Sviatosti Venegas de la Torre, panny',
    mary_of_jesus_the_good_shepherd_siedliska_virgin:
      'Blahoslavenej Márie od Ježiša Dobrého Pastiera Siedliskej, panny',
    mary_of_the_cross_mackillop_virgin:
      'Svätej Márie od Kríža MacKillopovej, panny',
    mary_soledad_torres_acosta_virgin:
      'Svätej Márie Soledad Torres y Acosta, panny',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins:
      'Blahoslavenej Márie Stelly od Najsvätejšej Sviatosti Mardosewiczovej a spoločníčok, pannien a mučeníc',
    mary_theresa_chiramel_mankidiyan_virgin:
      'Svätej Márie Terézie Chiramelovej, panny',
    mary_theresa_ledochowska_virgin:
      'Blahoslavenej Márie Terezy Ledóchowskej, panny',
    mary_ursula_of_jesus_ledochowska_virgin:
      'Svätej Márie Uršule od Ježiša Ledóchowskej, panny',
    marydolores_rodriguez_sopena_virgin:
      'Blahoslavenej Márie Dolores Rodríguez Sopeña, panny',
    matilda_of_ringelheim: 'Svätej Matildy',
    matthew_apostle: 'Svätého Matúša, apoštola a evanjelistu',
    matthias_apostle: 'Svätého Mateja, apoštola',
    maurice_of_agaunum_and_companions_martyrs:
      'Svätého Maurícia a spoločníkov, mučeníkov',
    maurice_tornay_priest: 'Blahoslaveného Mórica Tornaya, kňaza a mučeníka',
    maurus_of_pecs_bishop: 'Svätého Maura, biskupa',
    maximilian_kolbe_priest:
      'Svätého Maximiliána Máriu Kolbeho, kňaza a mučeníka',
    meinrad_of_einsiedeln_martyr: 'Svätého Meinrada z Einsiedelnu, mučeníka',
    mel_of_ardagh_bishop: 'Svätého Mela, biskupa',
    melchior_grodziecki_priest:
      'Svätého Melichara Grodzieckého, kňaza a mučeníka',
    michael_gabriel_and_raphael_archangels:
      'Svätých Michala, Gabriela a Rafaela, archanjelov',
    michael_kozal_bishop: 'Blahoslaveného Michaela Kozala, biskupa a mučeníka',
    miguel_agustin_pro_priest:
      'Blahoslaveného Michaela Augustína Pro, kňaza a mučeníka',
    miguel_febres_cordero_religious:
      'Svätého Michala Febresa Cordera, rehoľníka',
    monica_of_hippo: 'Svätej Moniky',
    moninne_of_killeavy_virgin: 'Svätej Moninny, panny',
    most_holy_name_of_jesus: 'Najsvätejšieho mena Ježiš',
    most_holy_name_of_mary: 'Najsvätejšieho mena Panny Márie',
    munchin_of_limerick_bishop: 'Svätého Munchina, biskupa',
    muredach_of_killala_bishop: 'Svätého Muredacha, biskupa',
    mutien_marie_wiaux_religious: 'Svätého Muciána Máriu Wiaux, rehoľníka',
    nativity_of_mary: 'Narodenie Panny Márie',
    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin:
      'Svätej Nazárie Ignácie od Svätej Terézie od Ježiša March Mesa, panny',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs:
      'Svätých Nerea a Achila, mučeníkov',
    nicholas_of_flue_hermit: 'Svätého Mikuláša z Flüe, pustovníka',
    nicholas_of_myra_bishop: 'Svätého Mikuláša, biskupa',
    nicholas_steno_bishop: 'Blahoslaveného Mikuláša Stena, biskupa',
    nicholas_tavelic_priest: 'Svätého Mikuláša Tavelića, kňaza a mučeníka',
    ninian_of_whithorn_bishop: 'Svätého Niniána, biskupa',
    norbert_of_xanten_bishop: 'Svätého Norberta, biskupa',
    nuno_of_saint_mary_pereira_religious:
      'Svätého Nuna od svätej Márie Pereira, rehoľníka',
    nykyta_budka_and_vasyl_velychkovsky_bishops:
      'Blahoslavených Nikity Budku a Vasiľa Velichkovského, biskupov a mučeníkov',
    odile_of_alsace_abbess: 'Svätej Otílie, opátky',
    odoric_of_pordenone_priest: 'Blahoslaveného Odorika z Pordenone, kňaza',
    olaf_ii_of_norway_martyr: 'Svätého Olafa, mučeníka',
    oleksiy_zarytskyi_priest:
      'Blahoslaveného Alexeja Zaryckého, kňaza a mučeníka',
    olga_of_kiev: 'Svätej Oľgy',
    oliver_plunket_bishop: 'Svätého Olivera Plunketa, biskupa a mučeníka',
    otteran_of_iona_monk: 'Svätého Oterána, mnícha',
    otto_of_bamberg_bishop: 'Svätého Ota z Bambergu, biskupa',
    our_lady_help_of_christians: 'Panny Márie, Pomocnice kresťanov',
    our_lady_mediatrix_of_all_grace:
      'Panny Márie, Prostrednice všetkých milostí',
    our_lady_mother_of_christian_unity: 'Panny Márie, Matky jednoty kresťanov',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico:
      'Panny Márie, Matky Božej Prozreteľnosti a patrónky Portorika',
    our_lady_of_aparecida_patroness_of_brazil:
      'Panny Márie z Aparecidy, patrónky Brazílie',
    our_lady_of_bethlehem: 'Panny Márie Betlehemskej',
    our_lady_of_china: 'Panny Márie Čínskej',
    our_lady_of_czestochowa: 'Panny Márie Čenstochovskej',
    our_lady_of_fatima: 'Blahoslavenej Panny Márie Fatimskej',
    our_lady_of_good_counsel: 'Panny Márie Dobrej Rady',
    our_lady_of_guadalupe: 'Preblahoslavenej Panny Márie Guadalupskej',
    our_lady_of_guadalupe_patroness_of_the_americas:
      'Preblahoslavenej Panny Márie Guadalupskej, patrónky Ameriky',
    our_lady_of_guadalupe_patroness_of_the_philippines:
      'Preblahoslavenej Panny Márie Guadalupskej, patrónky Filipín',
    our_lady_of_hungary_patroness_of_hungary:
      'Panny Márie Maďarov, patrónky Maďarska',
    our_lady_of_itati: 'Panny Márie Itatskej',
    our_lady_of_knock: 'Panny Márie z Knock',
    our_lady_of_lanka: 'Panny Márie z Lanky',
    our_lady_of_lebanon: 'Panny Márie z Lebanonu',
    our_lady_of_loreto: 'Preblahoslavenej Panny Márie Loretánskej',
    our_lady_of_lourdes: 'Preblahoslavenej Panny Márie Lurdskej',
    our_lady_of_lujan_patroness_of_argentina:
      'Panny Marie Lujánska, patrónky Argentíny',
    our_lady_of_madhu: 'Panny Márie z Madhu',
    our_lady_of_marija_bistrica: 'Panny Márie z Marije Bistrice',
    our_lady_of_mercy: 'Panny Márie milosrdenstva',
    our_lady_of_mount_carmel: 'Preblahoslavenej Panny Márie Karmelskej',
    our_lady_of_mount_carmel_mother_and_queen_of_chile:
      'Panny Márie Karmelskej, Matky a Kráľovnej Chile',
    our_lady_of_perpetual_help: 'Panny Márie ustavičnej pomoci',
    our_lady_of_refuge: 'Panny Márie, Útočiska hriešnikov',
    our_lady_of_sorrows: 'Sedembolestnej Panny Márie',
    our_lady_of_sorrows_patroness_of_slovakia:
      'Sedembolestnej Panny Márie, patrónky Slovenska',
    our_lady_of_the_discovery_of_the_hidden_christians:
      'Panny Márie od objavenia skrytých kresťanov',
    our_lady_of_the_gate_of_dawn: 'Panny Márie Ostrobramskej',
    our_lady_of_the_pillar: 'Panny Márie na Stĺpe',
    our_lady_of_the_rosary: 'Ružencovej Panny Márie',
    our_lady_of_the_valley: 'Panny Márie z Údolia',
    our_lady_of_vladimir: 'Panny Márie Vladimírskej',
    our_lady_of_walsingham: 'Panny Márie Walsinghamskej',
    our_lady_queen_of_peace: 'Panny Márie, Kráľovnej pokoja',
    our_lady_queen_of_poland: 'Panny Márie, Kráľovnej Poľska',
    our_lord_jesus_christ_the_eternal_high_priest:
      'Nášho Pána Ježiša Krista, najvyššieho a večného kňaza',
    our_lord_of_miracles: 'Pána zázrakov',
    pancras_of_rome_martyr: 'Svätého Pankráca, mučeníka',
    pantaleon_of_nicomedia_martyr: 'Svätého Pantaleóna z Nikomédie, mučeníka',
    paschal_baylon_religious: 'Svätého Paschala Baylóna, rehoľníka',
    passion_of_saint_john_the_baptist: 'Mučenícka smrť svätého Jána Krstiteľa',
    patrick_of_ireland_bishop: 'Svätého Patrika, biskupa',
    patrick_of_ireland_bishop_patron_of_ireland:
      'Svätého Patrika, biskupa a patróna Írska',
    paul_chen_changpin_and_companions_martyrs:
      'Svätého Pavla Chen Changpina a spoločníkov, mučeníkov',
    paul_liu_hanzuo_priest: 'Svätého Pavla Liu Hanzuo, kňaza a mučeníka',
    paul_miki_and_companions_martyrs:
      'Svätého Pavla Mikiho a spoločníkov, mučeníkov',
    paul_of_the_cross_priest: 'Svätého Pavla z Kríža, kňaza',
    paul_of_thebes_hermit: 'Blahoslaveného Pavla z Téb, pustovníka',
    paul_vi_pope: 'Svätého Pavla VI., pápeža',
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin:
      'Svätej Paulíny od bolestného Srdca Ježišovho Visintainerovej, panny',
    paulinus_of_nola_bishop: 'Svätého Pavlína z Noly, biskupa',
    paulinus_of_trier_bishop: 'Svätého Paulína z Trevíra, biskupa',
    paulinus_of_york_bishop: 'Svätého Paulína z Yorku, biskupa',
    pavel_peter_gojdic_bishop:
      'Blahoslaveného Pavla Petra Gojdiča, biskupa a mučeníka',
    pedro_calungsod_martyr: 'Svätého Petra Calungsoda, mučeníka',
    pelagius_of_cordoba_martyr: 'Svätého Pelágia z Córdoby, mučeníka',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs:
      'Svätej Perpetuy a Felicity, mučeníc',
    peter_baptist_blasquez_paul_miki_and_companions_martyrs:
      'Svätého Petra Bautistu, Pavla Mikiho a spoločníkov, mučeníkov',
    peter_canisius_priest: 'Svätého Petra Kanízia, kňaza a učiteľa Cirkvi',
    peter_chanel_priest: 'Svätého Petra Chanela, kňaza a mučeníka',
    peter_chanel_priest_patron_of_oceania:
      'Svätého Petra Chanela, prvého mučeníka Oceánie a patróna Oceánie',
    peter_chrysologus_bishop:
      'Svätého Petra Chryzológa, biskupa a učiteľa Cirkvi',
    peter_claver_priest: 'Svätého Petra Clavera, kňaza',
    peter_damian_bishop: 'Svätého Petra Damianiho, biskupa a učiteľa Cirkvi',
    peter_de_zuniga_and_louis_flores_priests:
      'Blahoslavených Petra de Zúñigu a Ľudovíta Floresa, kňazov a mučeníkov',
    peter_julian_eymard_priest: 'Svätého Petra Juliána Eymarda, kňaza',
    peter_kibe_priest_and_companions_martyrs:
      'Blahoslaveného Petra Kibeho, kňaza a spoločníkov, mučeníkov',
    peter_liu_wenyuan_martyr: 'Svätého Petra Liu Wenyuana, mučeníka',
    peter_of_alcantara_priest: 'Svätého Petra z Alkantary, kňaza',
    peter_sanz_bishop: 'Svätého Petra Sanza, biskupa a mučeníka',
    peter_to_rot_martyr: 'Blahoslaveného Petra To Rota, mučeníka',
    peter_wu_guosheng_martyr: 'Svätého Petra Wu Guoshenga, mučeníka',
    philip_and_james_apostles: 'Svätých Filipa a Jakuba, apoštolov',
    philip_evans_and_john_lloyd_priests:
      'Svätých Filipa Evansa a Jána Lloyda, kňazov a mučeníkov',
    philip_neri_priest: 'Svätého Filipa Neriho, kňaza',
    philip_of_jesus_de_las_casas_martyr:
      'Svätého Filipa od Ježiša de las Casas, mučeníka',
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs:
      'Svätého Filipa od Ježiša de las Casas, Pavla Mikiho a spoločníkov, mučeníkov',
    pirmin_of_hornbach_abbot: 'Svätého Primina, opáta',
    pius_ix_pope: 'Blahoslaveného Pia IX., pápeža',
    pius_of_pietrelcina_priest: 'Svätého Pia z Pietrelčiny, kňaza',
    pius_v_pope: 'Svätého Pia V., pápeža',
    pius_x_pope: 'Svätého Pia X., pápeža',
    polycarp_of_smyrna_bishop: 'Svätého Polykarpa, biskupa a mučeníka',
    pontian_i_pope_and_hippolytus_of_rome_priest:
      'Svätých Ponciána, pápeža a Hipolyta, kňaza, mučeníkov',
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs:
      'Svätých Potína, biskupa, Blandíny, panny a spoločníkov, mučeníkov',
    presentation_of_mary: 'Obetovanie Panny Márie',
    procopius_of_sazava_abbot: 'Svätého Prokopa, opáta',
    publius_of_malta_bishop: 'Svätého Publia, biskupa',
    queenship_of_mary: 'Panny Márie Kráľovnej',
    quirinus_of_sescia_bishop: 'Svätého Kvirína zo Sisaku, biskupa',
    rabanus_maurus_bishop: 'Svätého Rabana Maura, biskupa',
    radim_of_gniezno_bishop: 'Svätého Radima, biskupa',
    rafqa_pietra_choboq_ar_rayes_virgin:
      'Svätej Rebeky Petry Choboq Ar-Rayès, panny',
    raphael_chylinski_priest: 'Blahoslaveného Rafaela Chylinského, kňaza',
    raphael_guizar_y_valencia_bishop: 'Svätého Rafaela Guízara, biskupa',
    raphael_of_saint_joseph_kalinowski_priest:
      'Svätého Rafaela od svätého Jozefa Kalinowského, kňaza',
    raymond_of_penyafort_priest: ' Svätého Rajmunda z Peňafortu, kňaza',
    remigius_of_reims_bishop: 'Svätého Remígia, biskupa',
    richard_gwyn_martyr: 'Svätého Richarda Gwyna, mučeníka',
    richard_of_chichester_bishop: ' Svätého Richarda z Chichesteru, biskupa',
    rita_of_cascia_religious: 'Svätej Rity z Cascie, rehoľnice',
    robert_bellarmine_bishop:
      'Svätého Róberta Bellarmína, biskupa a učiteľa Cirkvi',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests:
      'Svätého Rochusa Gonzáleza, Alfonza Rodrígueza Olmeda a Jána del Castilla, kňazov a mučeníkov',
    roch_of_montpellier: 'Svätého Rocha',
    romuald_of_ravenna_abbot: 'Svätého Romualda, opáta',
    rose_of_lima_virgin: 'Svätej Ruženy Limskej, panny',
    rose_of_lima_virgin_copatroness_of_the_philippines:
      'Svätej Ruženy Limskej, panny a spolupatrónky Filipín',
    rose_philippine_duchesne_virgin: 'Svätej Ruženy Filipíny Duchesne, panny',
    rupert_of_salzburg_and_virgilius_of_salzburg_bishops:
      'Svätých Ruperta a Virgila zo Salzburgu, biskupov',
    salomea_of_poland_religious: 'Blahoslavenej Salomey Poľskej, rehoľnice',
    sancha_of_portugal_and_mafalda_of_portugal_virgins:
      'Blahoslavených Sanche a Mafaldy, panny',
    sara_salkahazi_virgin: 'Blahoslavenej Sáry Salkaháziovej, panny a mučenice',
    scholastica_of_nursia_virgin: 'Svätej Školastiky, panny',
    sebastian_de_aparicio_religious:
      'Blahoslaveného Šebastiána de Aparicio, Religious',
    sebastian_of_milan_martyr: 'Svätého Šebastiána, mučeníka',
    senan_of_inis_cathaigh_bishop: 'Svätého Senana, biskupa',
    seven_holy_founders_of_the_servite_order:
      'Siedmich svätých zakladateľov rehole Služobníkov Panny Márie',
    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary:
      'Sedem mučeníc z kongregácie Františkánskych misionárok Márie',
    severinus_of_noricum_monk: 'Svätého Severína z Norika, kňaza',
    sharbel_makhluf_priest: 'Svätého Sarbela Makhlūfa, kňaza',
    shipwreck_of_saint_paul_apostle: 'Vraku lode svätého Pavla, apoštola',
    sigismund_of_burgundy_martyr: 'Svätého Žigmunda Burgundského, mučeníka',
    sigmund_felix_felinski_bishop:
      'Svätého Žigmunda Félixa Felińského, biskupa',
    simon_and_jude_apostles: 'Svätých Šimona a Júdu, apoštolov',
    simon_of_lipnica_priest: 'Svätého Šimona z Lipnice, kňaza',
    six_welsh_martyrs_and_companions:
      'Šiestich waleských mučeníkov a spoločníkov',
    sixtus_ii_pope_and_companions_martyrs:
      'Svätých Sixta II., pápeža a spoločníkov, mučeníkov',
    spyridon_of_trimythous_bishop: 'Svätého Spyridóna, biskupa',
    stanislaus_kazimierczyk_priest: 'Svätého Stanislava Kazimierczyka, kňaza',
    stanislaus_kostka_religious: 'Svätého Stanislava Kostku, rehoľníka',
    stanislaus_of_szczepanow_bishop: 'Svätého Stanislava, biskupa a mučeníka',
    stanislaus_of_szczepanow_bishop_patron_of_poland:
      'Svätého Stanislava, biskupa, mučeníka a patróna Poľska',
    stephen_i_of_hungary: 'Svätého Štefana Uhorského',
    stephen_the_first_martyr: 'Svätého Štefana, prvého mučeníka',
    sunday_of_the_word_of_god: 'Nedeľa Božieho slova',
    sunniva_of_norway_virgin: 'Svätej Sunnivy, panny a mučenice',
    swithun_of_winchester_bishop: 'Svätého Swithuna, biskupa',
    sylvester_i_pope: 'Svätého Silvestra I., pápeža',
    szilard_bogdanffy_bishop:
      'Blahoslaveného Szilárda Bogdánffyho, biskupa a mučeníka',
    teilo_of_llandaff_bishop: 'Svätého Teila, biskupa',
    teresa_benedicta_of_the_cross_stein_virgin:
      'Svätej Terézie Benedikty z Kríža Steinovej, panny a mučenice',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Svätej Terézie Benedikty z Kríža Steinovej, panny, mučenice a spolupatrónky Európy',
    teresa_of_calcutta_religious: 'Svätej Terézie z Kalkaty, panny a rehoľnice',
    teresa_of_jesus_jornet_ibars_virgin:
      'Svätej Terézie od Ježiša Jornet Ibars, panny',
    teresa_of_jesus_of_avila_virgin:
      'Svätej Terézie od Ježiša z Ávily, panny a učiteľky Cirkvi',
    teresa_of_jesus_of_los_andes_virgin:
      'Svätej Terézie od Ježiša z Los Andes, panny',
    teresa_of_portugal_religious:
      'Blahoslavenej Terezy Portugalskej, rehoľnice',
    theodore_of_canterbury_bishop: 'Svätého Teodora z Canterbury, biskupa',
    theodore_romzha_bishop: 'Blahoslaveného Teodora Romžu, biskupa a mučeníka',
    theodosius_of_the_caves_abbot: 'Svätého Teodóza Pečerského, opáta',
    theotonius_of_coimbra_priest: 'Svätého Teotónia, kňaza',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Svätej Terézie od Dieťaťa Ježiša a Svätej tváre z Lisieux, panny a učiteľky Cirkvi',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'Svätej Terézie od Dieťaťa Ježiša a Svätej tváre z Lisieux, panny, učiteľky Cirkvi a spolupatrónky Francúzska',
    thomas_apostle: 'Svätého Tomáša, apoštola',
    thomas_aquinas_priest: 'Svätého Tomáša Akvinského, kňaza a učiteľa Cirkvi',
    thomas_becket_bishop: 'Svätého Tomáša Becketa, biskupa a mučeníka',
    thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs:
      'Svätého Tomáša Hioji Rokuzayemona Nishiho, kňaza a spoločníkov, mučeníkov',
    thomas_of_villanova_bishop: 'Svätého Tomáša z Villanovy, biskupa',
    thorfinn_of_hamar_bishop: 'Svätého Torfina, biskupa',
    thorlac_of_iceland_bishop: 'Svätého Torlaka, biskupa',
    timothy_of_ephesus_and_titus_of_crete_bishops:
      'Svätých Timoteja a Títa, biskupov',
    translation_of_the_relics_of_saint_stephen_of_hungary:
      'Presunu ostatkov svätého Štefana Uhorského',
    turibius_of_mogrovejo_bishop: 'Svätého Turibia de Mongrovejo, biskupa',
    ulrich_of_augsburg_bishop: 'Svätého Ulricha z Augsburgu, biskupa',
    ursula_of_cologne_and_companions_virgins:
      'Svätej Uršule a spoločníčok, panien a mučeníc',
    valentine_of_raetia_bishop: 'Svätého Valentína z Raetie, biskupa',
    vincent_de_paul_priest: 'Svätého Vincenta de Paul, kňaza',
    vincent_ferrer_priest: 'Svätého Vincenta Ferrera, kňaza',
    vincent_kadlubek_bishop: 'Blahoslaveného Vincenta Kadłubka, biskupa',
    vincent_lewoniuk_and_companions_martyrs:
      'Blahoslaveného Vincenta Lewoniuka a spoločníkov, mučeníkov',
    vincent_of_saragossa_deacon: 'Svätého Vincenta, diakona a mučeníka',
    vincent_pallotti_priest: 'Svätého Vincenta Pallottiho, kňaza',
    virgilius_of_salzburg_bishop:
      'Svätého Virgila zo Salzburgu, biskupa a misionára',
    visitation_of_mary: 'Návšteva Panny Márie',
    vitus_of_lucania_martyr: 'Svätého Víta, mučeníka',
    vladimir_ghika_priest: 'Blahoslaveného Vladimíra Ghiku, kňaza a mučeníka',
    vladimir_i_the_great_of_kiev: 'Svätého Vladimíra Veľkého',
    waitangi_day: 'Deň Waitangi',
    walpurga_of_heidenheim_abbess: 'Svätej Valburgy z Heidenheimu, opátky',
    wenceslaus_i_of_bohemia_martyr: 'Svätého Václava, mučeníka',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'Svätého Václava, mučeníka a patróna českého národa',
    wendelin_of_trier_abbot: 'Svätého Vendelína, opáta',
    wilfrid_of_york_bishop: 'Svätého Vilfrida, biskupa',
    william_apor_bishop: 'Blahoslaveného Viliama Apora, biskupa a mučeníka',
    willibald_of_eichstatt_bishop: 'Svätého Willibalda, biskupa',
    willibrord_of_utrecht_bishop: 'Svätého Willibrorda, biskupa',
    winefride_of_flintshire_virgin: 'Svätej Winefridy, panny',
    wladyslaw_bladzinski_priest_and_companions_martyrs:
      'Blahoslaveného Vladislava Błądzińskiho, kňaza a spoločníkov, mučeníkov',
    wolfgang_of_regensburg_bishop: 'Svätého Wolfganga z Regensburgu, biskupa',
    wulstan_of_worcester_bishop: 'Svätého Vulstana, biskupa',
    yolanda_of_poland_religious: 'Blahoslavenej Jolany, rehoľnice',
    zdenka_cecilia_schelingova_virgin:
      'Blahoslavenej Zdenky Cecílie Schelingovej, panny a mučenice',
    zdislava_of_lemberk: 'Svätej Zdislavy',
    zepherin_namuncura: 'Blahoslaveného Zefirína Namuncurá',
    zoltan_lajos_meszlenyi_bishop:
      'Blahoslaveného Zoltána Ľudovíta Meszlényiho, biskupa a mučeníka',
    zygmunt_gorazdowski_priest: 'Svätého Žigmunda Gorazdowského, kňaza',
  },
};
