import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'el',

  seasons: {
    advent: {
      season: 'Περίοδος της Παρουσίας',
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, {"context": "abbreviation"}) Εβδομάδας της Παρουσίας',  // src: mr_el_2006_ed3, p141
      sunday: '$t(ordinals:{{week}}) Κυριακή της Παρουσίας',  // src: mr_el_2006_ed3, p???
      privileged_weekday: '{{day}} $t(months:11)',  // src: mr_el_2006_ed3, p163
    },

    christmas_time: {
      season: 'Περίοδος των Χριστουγέννων',  // src: mr_el_2006_ed3, p???
      day: '$t(weekdays:{{dow}}) των Χριστουγέννων',
      octave: '{{count}}η ημέρα της Ογδοάδας των Χριστουγέννων',  // src: mr_el_2006_ed3, p185
      second_sunday_after_christmas: 'Δεύτερη Κυριακή μετά τα Χριστούγεννα',
      before_epiphany: '{{day}} $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}) μετά την πανήγυρη των Θεοφανίων',
    },

    ordinary_time: {
      season: 'Κοινή περίοδος του έτους',  // src: mr_el_2006_ed3, p???
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, {"context": "genitive"}) της κοινής περιόδου του έτους',
      sunday: '$t(ordinals:{{week}}) Κυριακή της κοινής περιόδου του έτους',  // src: mr_el_2006_ed3, p611
    },

    lent: {
      season: 'Περίοδος της αγίας Τεσσαρακοστής',  // src: mr_el_2006_ed3, p???
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, {"context": "abbreviation"}) Εβδομάδας της Τεσσαρακοστής',  // src: mr_el_2006_ed3, p227
      sunday: '$t(ordinals:{{week}}) Κυριακή της Τεσσαρακοστής',  // src: mr_el_2006_ed3, p???
      day_after_ash_wed: '$t(weekdays:{{dow}}) των Τεφρών',  // src: mr_el_2006_ed3, p219
      holy_week_day: 'Μεγάλη $t(weekdays:{{dow}})',  // src: mr_el_2006_ed3, p???
    },

    paschal_triduum: {
      season: 'Ιερό Πασχαλινό Τριήμερο'  // src: mr_el_2006_ed3, p???
    },

    easter_time: {
      season: 'Περίοδος του Πάσχα',  // src: mr_el_2006_ed3, p???
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, {"context": "abbreviation"}) Εβδομάδας του Πάσχα',
      sunday: '$t(ordinals:{{week}}) Κυριακή του Πάσχα',
      octave: '$t(weekdays:{{dow}}) της Διακαινησίμου',  // src: mr_el_2006_ed3, p???
    },
  },

  ranks: {
    solemnity: 'πανήγυρη',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    feast: 'εορτή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    memorial: 'μνήμη',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    sunday: 'Κυριακή',
    weekday: 'καθημερινή',
  },

  cycles: {
    proper_of_time: 'Ιδιαίτερο της περιόδου',  // src: mr_el_2006_ed3, p???
    proper_of_saints: 'Ιδιαίτερο των αγίων',  // src: mr_el_2006_ed3, p???
    sunday_year_a: 'Κύκλος Α΄',
    sunday_year_b: 'Κύκλος Β΄',
    sunday_year_c: 'Κύκλος Γ΄',
    weekday_year_1: 'Κύκλος Α΄',
    weekday_year_2: 'Κύκλος Β΄',
    psalter_week_1: 'Εβδομάδα Αʹ',
    psalter_week_2: 'Εβδομάδα Β΄',
    psalter_week_3: 'Εβδομάδα Γ΄',
    psalter_week_4: 'Εβδομάδα Δ΄',
  },

  weekdays: {
    0: 'Κυριακή',
    1: 'Δευτέρα',
    2: 'Τρίτη',
    3: 'Τετάρτη',
    4: 'Πέμπτη',
    5: 'Παρασκευή',
    6: 'Σάββατο',
  },

  months: {
    0: 'Ιανουάριου',
    1: 'Φεβρουάριου',
    2: 'Μάρτιου',
    3: 'Απρίλιου',
    4: 'Μάιου',
    5: 'Ιούνιου',
    6: 'Ιούλιου',
    7: 'Αύγουστου',
    8: 'Σεπτέμβριου',
    9: 'Οκτώβριου',
    10: 'Νοέμβριου',
    11: 'Δεκέμβριου',
  },

  ordinals: {
    '1': 'πρώτη',
    '2': 'δεύτερη',
    '3': 'τρίτη',
    '4': 'τέταρτη',
    '5': 'πέμπτη',
    '6': 'έκτη',
    '7': 'έβδομη',
    '8': 'όγδοη',
    '9': 'ένατη',
    '10': 'δέκατη',
    '11': 'ενδέκατη',
    '12': 'δωδέκατη',
    '13': 'δέκατη τρίτη',
    '14': 'δέκατη τέταρτη',
    '15': 'δέκατη πέμπτη',
    '16': 'δέκατη έκτη',
    '17': 'δέκατη έβδομη',
    '18': 'δέκατη όγδοη',
    '19': 'δέκατη ένατη',
    '20': 'εικοστή',
    '21': 'εικοστή πρώτη',
    '22': 'εικοστή δεύτερη',
    '23': 'εικοστή τρίτη',
    '24': 'εικοστή τέταρτη',
    '25': 'εικοστή πέμπτη',
    '26': 'εικοστή έκτη',
    '27': 'εικοστή έβδομη',
    '28': 'εικοστή όγδοη',
    '29': 'εικοστή ένατη',
    '30': 'τριακοστή',
    '31': 'τριακοστή πρώτη',
    '32': 'τριακοστή δεύτερη',
    '33': 'τριακοστή τρίτη',
    '34': 'τριακοστή τέταρτη',
    '1_genitive': 'πρώτης',
    '2_genitive': 'δεύτερης',
    '3_genitive': 'τρίτης',
    '4_genitive': 'τέταρτης',
    '5_genitive': 'πέμπτης',
    '6_genitive': 'έκτης',
    '7_genitive': 'έβδομης',
    '8_genitive': 'όγδοης',
    '9_genitive': 'ένατης',
    '10_genitive': 'δέκατης',
    '11_genitive': 'ενδέκατης',
    '12_genitive': 'δωδέκατης',
    '13_genitive': 'δέκατης τρίτης',
    '14_genitive': 'δέκατης τέταρτης',
    '15_genitive': 'δέκατης πέμπτης',
    '16_genitive': 'δέκατης έκτης',
    '17_genitive': 'δέκατης έβδομης',
    '18_genitive': 'δέκατης όγδοης',
    '19_genitive': 'δέκατης ένατης',
    '20_genitive': 'εικοστής',
    '21_genitive': 'εικοστής πρώτης',
    '22_genitive': 'εικοστής δεύτερης',
    '23_genitive': 'εικοστής τρίτης',
    '24_genitive': 'εικοστής τέταρτης',
    '25_genitive': 'εικοστής πέμπτης',
    '26_genitive': 'εικοστής έκτης',
    '27_genitive': 'εικοστής έβδομης',
    '28_genitive': 'εικοστής όγδοης',
    '29_genitive': 'εικοστής ένατης',
    '30_genitive': 'τριακοστής',
    '31_genitive': 'τριακοστής πρώτης',
    '32_genitive': 'τριακοστής δεύτερης',
    '33_genitive': 'τριακοστής τρίτης',
    '34_genitive': 'τριακοστής τέταρτης',
    '1_abbreviation': 'Αʹ',
    '2_abbreviation': 'Β΄',
    '3_abbreviation': 'Γ΄',
    '4_abbreviation': 'Δ΄',
    '5_abbreviation': 'Ε΄',
    '6_abbreviation': 'ΣΤ΄',
    '7_abbreviation': 'Ζ΄',
    '8_abbreviation': 'Η΄',
    '9_abbreviation': 'Θ΄',
    '10_abbreviation': 'Ι΄',
    '11_abbreviation': 'ΙΑ΄',
    '12_abbreviation': 'ΙΒ΄',
    '13_abbreviation': 'ΙΓ΄',
    '14_abbreviation': 'ΙΔ΄',
    '15_abbreviation': 'ΙΕ΄',
    '16_abbreviation': 'ΙΣΤ΄',
    '17_abbreviation': 'ΙΖ΄',
    '18_abbreviation': 'ΙΗ΄',
    '19_abbreviation': 'ΙΘ΄',
    '20_abbreviation': 'Κ΄',
    '21_abbreviation': 'ΚΑ΄',
    '22_abbreviation': 'ΚΒ΄',
    '23_abbreviation': 'ΚΓ΄',
    '24_abbreviation': 'ΚΔ΄',
    '25_abbreviation': 'ΚΕ΄',
    '26_abbreviation': 'ΚΣΤ΄',
    '27_abbreviation': 'ΚΖ΄',
    '28_abbreviation': 'ΚΗ΄',
    '29_abbreviation': 'ΚΘ΄',
    '30_abbreviation': 'Λ΄',
    '31_abbreviation': 'ΛΑ΄',
    '32_abbreviation': 'ΛΒ΄',
    '33_abbreviation': 'ΛΓ΄',
    '34_abbreviation': 'ΛΔ΄',
  },

  colors: {
    white: 'λευκό',
    red: 'κόκκινο',
    green: 'πράσινο',
    purple: 'μοβ',
    black: 'μαύρο',
    rose: 'ροζ',
    gold: 'χρυσαφένιο',
  },

  names: {
    adalbert_of_prague_bishop: 'Αγίου Αδαλβέρτου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    agapitus_of_palestrina_martyr: 'Αγίου Αγαπητού, μάρτυρος',
    agatha_of_sicily_virgin: 'Αγίας Αγάθης, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    agnes_of_rome_virgin: 'Αγίας Αγνής, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    albert_the_great_bishop: 'Αγίου Αλβέρτου του Μεγάλου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    all_saints: 'Αγίων Πάντων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    aloysius_gonzaga_religious: 'Αγίου Αλοϊσίου Gonzaga, μοναχού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    alphonsus_mary_liguori_bishop: 'Αγίου Αλφόνσου Μαρία de Liguori, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    ambrose_of_milan_bishop: 'Αγίου Αμβροσίου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    andrew_apostle: 'Αγίου Ανδρέα, Απόστολου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    andrew_dung_lac_priest_and_companions_martyrs: 'Αγίων Ανδρέα Dung Lac, πρεσβυτέρου, και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: 'Αγίου Ανδρέα Kim Tae-gon, πρεσβυτέρου; Αγίου Παύλου Chong Ha-sang, και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    angela_merici_virgin: 'Αγίας Άγγελας Merici, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    annunciation_of_the_lord: 'Ευαγγελισμός της Θεοτόκου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    anselm_of_canterbury_bishop: 'Αγίου Ανσέλμου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    ansgar_of_hamburg_bishop: 'Αγίου Ανσγκαρίου, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    anthony_mary_claret_bishop: 'Αγίου Αντωνίου Μαρία Claret, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    anthony_of_egypt_abbot: 'Αγίου Αντωνίου του Μεγάλου, αββά',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    anthony_of_padua_priest: 'Αγίου Αντωνίου της Παδούης, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    anthony_zaccaria_priest: 'Αγίου Αντωνίου Μαρία Ζαχαρία, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    apollinaris_of_ravenna_bishop: 'Αγίου Απολλιναρίου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    ascension_of_the_lord: 'Της Αγίας Τριάδος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    ash_wednesday: 'Τετάρτη των Τεφρών',  // src: https://episkopisyrou.gr/tetarti-ton-tefron-archi-tessarakostis-2/
    assumption_of_the_blessed_virgin_mary: 'Της Μεταστάσεως της Υπεραγίας Θεοτόκου και Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    athanasius_of_alexandria_bishop: 'Αγίου Αθανασίου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    augustine_of_canterbury_bishop: 'Αγίου Αυγουστίνου Cantuariensis, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    augustine_of_hippo_bishop: 'Αγίου Αυγουστίνου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    augustine_zhao_rong_priest_and_companions_martyrs: 'Αγίου Αυγουστίνου Zhao Rong, πρεσβυτέρου, και συντρόφων μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    baptism_of_the_lord: 'Η Βάπτιση του Κυρίου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    barbara_of_heliopolis_virgin: 'Αγίας Βαρβάρας, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    barnabas_apostle: 'Αγίου Βαρνάβα, Αποστόλου',
    bartholomew_apostle: 'Αγίου Βαρθολομαίου, Αποστόλου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    basil_the_great_and_gregory_nazianzen_bishops: 'Αγίου Βασιλείου του Μεγάλου και Αγίου Γρηγορίου του Ναζιανζηνού, επισκόπων και διδασκάλων της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    bede_the_venerable_priest: 'Αγίου Βέδα του Σεβασμίου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    benedict_of_nursia_abbot: 'Αγίου Βενέδικτου, αββά',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    benedict_of_nursia_abbot_patron_of_europe: 'Αγίου Βενέδικτου, αββά, προστάτη της Ευρώπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    bernard_of_clairvaux_abbot: 'Αγίου Βερνάρδου, αββά και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    bernardine_of_siena_priest: 'Αγίου Βερναρδίνου της Σιένας, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    blaise_of_sebaste_bishop: 'Αγίου Βλασίου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    bonaventure_of_bagnoregio_bishop: 'Αγίου Βοναβεντούρα, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    boniface_of_mainz_bishop: 'Αγίου Βονιφατίου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    bridget_of_sweden_religious: 'Αγίας Μπριγκίτης, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    bridget_of_sweden_religious_copatroness_of_europe: 'Αγίας Μπριγκίτης, μοναχής, προστάτιδας της Ευρώπης',
    bruno_of_cologne_priest: 'Αγίου Βρούνονα, πρεσβυτέρου',
    cajetan_of_thiene_priest: 'Αγίου Γαετάνου, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    callistus_i_pope: 'Αγίου Καλλίστου Αʹ, πάπα και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    camillus_de_lellis_priest: 'Αγίου Καμίλλου de Lellis, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    casimir_of_poland: 'Αγίου Καζίμηρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    catherine_of_alexandria_virgin: 'Αγίας Αικατερίνης Αλεξανδρείας, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    catherine_of_siena_virgin: 'Αγίας Αικατερίνης της Σιένας, παρθένου και διδασκάλου της Εκκλησίας',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    catherine_of_siena_virgin_copatroness_of_europe: 'Αγίας Αικατερίνης της Σιένας, παρθένου και διδασκάλου της Εκκλησίας, προστάτιδας της Ευρώπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    cecilia_of_rome_virgin: 'Αγίας Καικιλίας, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    chair_of_saint_peter_the_apostle: 'Καθέδρας του Απόστολου Πέτρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    charles_borromeo_bishop: 'Αγίου Καρόλου Borromeo, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    charles_lwanga_and_companions_martyrs: 'Αγίων Καρόλου Lwanga και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    christopher_magallanes_priest_and_companions_martyrs: 'Αγίου Χριστοφόρου Magallanes, πρεσβυτέρου, και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    christopher_of_anatolia_martyr: 'Αγίου Χριστοφόρου, μάρτυρος',
    clare_of_assisi_virgin: 'Αγίας Κλάρας, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    clement_i_pope: 'Αγίου Κλήμεντος Αʹ, πάπα και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    columban_of_luxeuil_abbot: 'Αγίου Κολουμβανού, αββά',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    commemoration_of_all_the_faithful_departed: 'Μνήμη Όλων Των Κεκοιμημένων Πιστών',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    conversion_of_saint_paul_the_apostle: 'Η μεταστροφή του Αποστόλου Παύλου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'Αγίων Κορνηλίου, Πάπα, και Κυπριανού, επισκόπου, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Αγίων Κοσμά και Δαμιανού, των Αναργύρων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    cyriacus_martyr: 'Αγίου Κυριάκου, διακόνου και μάρτυρος',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: 'Αγίων Κύριλλου, μοναχού και Μεθόδιου, επισκόπου',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe: 'Αγίων Κύριλλου, μοναχού και Μεθόδιου, επισκόπου, Προστατών της Ευρώπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    cyril_of_alexandria_bishop: 'Αγίου Κυρίλλου της Αλεξάνδρειας, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    cyril_of_jerusalem_bishop: 'Αγίου Κυρίλλου των Ιεροσολύμων, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    damasus_i_pope: 'Αγίου Δαμάσου, πάπα',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    dedication_of_the_basilica_of_our_lady_of_the_snows_tinos_grece: 'Των Εγκαινίων της Βασιλικής της Αγίας Μαρίας, της Παναγίας των Χιόνων',
    dedication_of_the_basilica_of_saint_mary_major: 'Τα Εγκαίνια της βασιλικής της Αγίας Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Εγκαίνια των Βασιλικών των Αγίων Πέτρου και Παύλου, αποστόλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    dedication_of_the_cathedral_of_saint_dionysius_athens: 'Επέτειος των εγκαινίων του Καθεδρικού Ιερού Ναού αγίου Διονυσίου',
    dedication_of_the_lateran_basilica: 'Εγκαινία της Βασιλικής του Λατερανού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    demetrius_of_thessaloniki_martyr: 'Αγίου Δημητρίου, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    denis_of_paris_bishop_and_companions_martyrs: 'Αγίου Διονυσίου, επισκόπου, και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    dionysius_the_areopagite_bishop: 'Αγίου Διονυσίου του Αρεοπαγίτου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    divine_mercy_sunday: 'Δεύτερη Κυριακή του Πάσχα ή της θείας Ευσπλαχνίας',  // src: mr_el_2006_ed3, p???
    dominic_de_guzman_priest: 'Αγίου Δομινίκου, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    easter_sunday: 'Κυριακή του Πάσχα της Αναστάσεως του Κύριου',  // src: mr_el_2006_ed3, p???
    elijah_prophet: 'Αγίου Ηλία, προφήτη',
    elizabeth_of_hungary_religious: 'Αγίας Ελισάβετ της Ουγγαρίας, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    elizabeth_of_portugal: 'Αγίας Ελισάβετ της Πορτογαλίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    emilie_de_vialar_virgin: 'Αγίας Αιμιλίας de Vialar, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    ephrem_the_syrian_deacon: 'Αγίου Εφραίμ, διακόνου και διδασκάλου της Εκκλησίας',
    epiphany_of_the_lord: 'Των Θεοφανίων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    eusebius_of_vercelli_bishop: 'Αγίου Ευσεβίου των Βερκελλών, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    exaltation_of_the_holy_cross: 'Ύψωση του Τιμίου Σταυρού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    fabian_i_pope: 'Αγίου Φαβιανού, πάπα και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    faustina_kowalska_virgin: 'Αγίας Φαουστίνα Kowalska, παρθένου',
    fidelis_of_sigmaringen_priest: 'Αγίου Φιδελίου de Sigmaringen, πρεσβυτέρου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    first_martyrs_of_the_holy_roman_church: 'Αγίων Πρωτομαρτύρων της Εκκλησίας της Ρώμης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    frances_of_rome_religious: 'Αγίας Φρανγκίσκας της Ρωμαίας, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    francis_de_sales_bishop: 'Αγίου Φραγκίσκου de Sales, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    francis_of_assisi: 'Αγίου Φραγκίσκου της Ασσίζης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    francis_of_paola_hermit: 'Αγίου Φραγκίσκου de Paola, ερημίτη',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    francis_xavier_priest: 'Αγίου Φραγκίσκου Ξαβερίου, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    friday_of_the_passion_of_the_lord: 'Μεγάλη Παρασκευή',  // src: mr_el_2006_ed3, p???
    genevieve_of_paris_virgin: 'Αγίας Γενεβιέβης, παρθένου',
    george_of_lydda_martyr: 'Αγίου Γεωργίου, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    gertrude_the_great_virgin: 'Αγίας Γερτρούδης, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    gregory_of_narek_abbot: 'Αγίου Γρηγορίου του Narek, μοναχού και διδασκάλου της Εκκλησίας',
    gregory_i_the_great_pope: 'Αγίου Γεωργίου του Μεγάλου, πάπα και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    gregory_vii_pope: 'Αγίου Γρηγορίου Ζʹ, πάπα',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    hedwig_of_silesia_religious: 'Αγίας Εδβίγης, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    henry_ii_emperor: 'Αγίου Ερρίκου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    hilary_of_poitiers_bishop: 'Αγίου Ιλαρίου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    hildegard_of_bingen_abbess: 'Αγίας Χίλντεγκαρντ, παρθένου και διδασκάλου της Εκκλησίας',
    holy_family_of_jesus_mary_and_joseph: 'Της Αγίας Οικογένειας: Ιήσου, Μαρίας και Ιωσήφ',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    holy_guardian_angels: 'Αγίων Φυλάκων Αγγέλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    holy_innocents_martyrs: 'Αγίων Αθώων Νηπίων, Μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    holy_saturday: 'Μεγάλο Σάββατο',  // src: https://el.wikipedia.org/w/index.php?title=%CE%9C%CE%B5%CE%B3%CE%AC%CE%BB%CE%BF_%CE%A3%CE%AC%CE%B2%CE%B2%CE%B1%CF%84%CE%BF&oldid=10005382
    ignatius_of_antioch_bishop: 'Αγίου Ιγνατίου της Αντιοχείας, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    ignatius_of_loyola_priest: 'Αγίου Ιγνατίου de Loyola, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    immaculate_conception_of_the_blessed_virgin_mary: 'Της Αμίαντου Συλλήψεως της Μακαριάς και Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    immaculate_heart_of_mary: 'Αμίαντης Καρδίας της Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    irenaeus_of_lyon_bishop: 'Αγίου Ειρηναίου, επισκόπου, μάρτυρος και διδασκάλου της Εκκλησίας',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36 + https://caritasathens.gr/images/docs/KARITAS_ATHINAS_HMEROLOGIO_2017.pdf#page=8
    irene_of_macedonia: 'Αγίας Ειρήνης, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    isidore_of_seville_bishop: 'Αγίου Ισιδώρου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    isidore_the_farmer: 'Αγίου Ισιδώρου, γεωργού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    james_apostle: 'Αγίου Ιακώβου, Απόστολου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    jane_frances_de_chantal_religious: 'Αγίας Ιωάννας Φραγκίσκης de Chantal, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    januarius_i_of_benevento_bishop: 'Αγίου Ιανουαρίου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    jerome_emiliani: 'Αγίου Ιερώνυμου Emiliani',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    jerome_of_stridon_priest: 'Αγίου Ιερώνυμου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    joachim_and_anne_parents_of_mary: 'Αγίων Ιωακείμ και Άννης, γονέων της Παναγίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    john_apostle: 'Αγίου Ιωάννη, Απόστολου και Ευαγγελιστή',
    john_baptist_de_la_salle_priest: 'Αγίου Ιωάννη Βαπτιστή de la Salle, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    john_bosco_priest: 'Αγίου Ιωάννη Bosco, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    john_chrysostom_bishop: 'Αγίου Ιωάννου Χρυσοστόμου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    john_damascene_priest: 'Αγίου Ιωάννη του Δαμασκηνού, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: 'Αγίων Ιωάννη de Brebeuf και Ισαάκ Jogues, πρεσβυτέρων και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    john_eudes_priest: 'Αγίου Ιωάννη Eudes, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    john_fisher_bishop_and_thomas_more_martyrs: 'Αγίων Ιωάννη Fisher, επισκόπου και Θωμά More, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    john_i_pope: 'Αγίου Ιωάννη Αʹ, πάπα και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    john_leonardi_priest: 'Αγίου Ιωάννη Leonardi, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    john_mary_vianney_priest: 'Αγίου Ιωάννη Μαρία Vianney, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    john_of_avila_priest: 'Αγίου Ιωάννη της Άβιλα, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: manually translated by @tukusejssirs using `john_of_the_cross_priest` and `teresa_of_jesus_of_avila_virgin` from `mr_el_2006_ed3`
    john_of_capistrano_priest: 'Αγίου Ιωάννη de Capestrano, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    john_of_god_duarte_cidade_religious: 'Αγίου Ιωάννη του Θεού, μοναχού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    john_of_kanty_priest: 'Αγίου Ιωάννη de Kety, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    john_of_the_cross_priest: 'Αγίου Ιωάννη του Σταυρού, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    john_paul_ii_pope: 'Αγίου Ιωάννη Παύλου Βʹ, Πάπα',  // src: https://episkopisyrou.gr/22-oktovriou-mnimi-tou-agiou-ioanni-pavlou-v-papa-romis/
    john_xxiii_pope: 'Αγίου Ιωάννη ΚΓ΄, πάπα',
    josaphat_kuntsevych_bishop: 'Αγίου Ιωσαφάτ, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    joseph_of_calasanz_priest: 'Αγίου Ιωσήφ de Calasanz, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    joseph_spouse_of_mary: 'Αγίου Ιωσήφ, Μνήστορος της Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    joseph_the_worker: 'Αγίου Ιωσήφ, εργαζομένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    josephine_bakhita_virgin: 'Αγίας Ιωσηφίνας Bakhita, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    juan_diego_cuauhtlatoatzin: 'Αγίου Ιωάννη Diego Διδάχου Cuauhtlatoatzin',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    justin_martyr: 'Αγίου Ιουστίνου, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    lawrence_justinian: 'Αγίου Λαυρεντίου Giustiniani',
    lawrence_of_brindisi_priest: 'Αγίου Λαυρεντίου του Βρινδησίου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    lawrence_of_rome_deacon: 'Αγίου Λαυρεντίου, διακόνου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    lawrence_ruiz_and_companions_martyrs: 'Αγίου Λαυρεντίου Ruiz και συντρόφων μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    leo_i_the_great_pope: 'Αγίου Λέωντα του Μεγάλου, πάπα και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    louis_grignion_de_montfort_priest: 'Αγίου Λουδοβίκου Μαρία Grignion de Montfort, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    louis_ix_of_france: 'Αγίου Λουδοβίκου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    louise_de_marillac_religious: 'Αγίας Λουίζας de Marillac',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    lucy_of_syracuse_virgin: 'Αγίας Λουκίας, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    luke_evangelist: 'Αγίου Λούκα, Ευαγγελιστή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    lydia_of_philippi: 'Αγίας Λυδίας της Φιλιππησίας',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    lydia_of_philippi_first_european_christian: 'Αγίας Λυδίας της Φιλιππησίας, πρώτης Χριστιανής της Ευρώπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    mammes_of_caesarea_martyr: 'Αγίου Μάμα, μάρτυρος',
    marcellin_champagnat_priest: 'Αγίου Μαρκελλίνου Champagnat, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    marcellinus_of_ancona_bishop: 'Αγίου Μαρκελλίνου, επισκόπου',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Αγίων Μαρκελλίνου και Πέτρου, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    margaret_mary_alacoque_virgin: 'Αγίας Μαργαρίτας Μαρίας Alacoque, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    margaret_of_antioch_virgin: 'Αγίας Μαρίνας, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    margaret_of_scotland: 'Αγίας Μαργαρίτας της Σκοτίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    maria_goretti_virgin: 'Αγίας Μαρίας Goretti, παρθενομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    mark_evangelist: 'Αγίου Μάρκου, Ευαγγελιστή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Αγίων Μάρθας, Μαρίας και Λαζάρου',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    martin_de_porres_religious: 'Αγίου Μαρτίνου de Porres, μοναχού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    martin_i_pope: 'Αγίου Μαρτίνου Αʹ, πάπα και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    martin_of_tours_bishop: 'Αγίου Μαρτίνου, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    mary_magdalene: 'Αγίας Μαρίας της Μαγδαληνής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    mary_magdalene_de_pazzi_virgin: 'Αγίας Μαρίας Μαγδαληνής de’ Pazzi, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    mary_mother_of_god: 'Ογδοάδα των Χριστουγέννων: Της Υπεραγίας Θεοτόκου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    mary_mother_of_the_church: 'Tης Υπεραγίας Θεοτόκου Μαρίας, μητέρας της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    mary_mother_of_hope: 'Tης Υπεραγίας και Αειπαρθένου Θεοτόκου, Μητέρας της αγίας Ελπίδας',
    matthew_apostle: 'Αγίου Ματθαίου, Απόστολου και Ευαγγελιστή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    matthias_apostle: 'Αγίου Ματθία, Απόστολου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    maximilian_mary_raymund_kolbe_priest: 'Αγίου Μαξιμιλιανού Μαρία Kolbe, πρεσβυτέρου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    michael_gabriel_and_raphael_archangels: 'Αγίων Μιχαήλ, Γαβριήλ και Ραφαήλ, Αρχαγγέλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    miltiades_pope: 'Αγίου Μιλτιάδης, πάπα',
    monica_of_hippo: 'Αγίας Μόνικας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    most_holy_body_and_blood_of_christ: 'Του Παναχράντου Σώματος και Αίματος του Χριστού',
    most_holy_name_of_jesus: 'Του Αγιοτάτου Ονόματος του Ιησού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    most_holy_name_of_mary: 'Του ονόματος της Υπεραγίας Θεοτόκου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    most_holy_trinity: 'Της Αγίας Τριάδος',
    most_sacred_heart_of_jesus: 'Ιεροτάτης Καρδίας του Ιησού',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    nativity_of_john_the_baptist: 'Η Γέννηση του Αγίου Ιωάννη του Βαπτιστή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    nativity_of_the_blessed_virgin_mary: 'Η Γέννηση της Μακαριάς Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    nativity_of_the_lord: 'Η Γέννηση του Κύριου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Αγίων Νηρέα και Αχιλλέα, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    nicholas_of_myra_bishop: 'Αγίου Νικολάου, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    norbert_of_xanten_bishop: 'Αγίου Νορβέρτου, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    our_lady_of_angels: 'Της Υπεραγίας Θεοτόκου Μαρίας των Αγγέλων',
    our_lady_of_faneromeni: 'Υπεραγίας Θεοτόκου της Φανερωμένης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    our_lady_of_fatima: 'Tης Υπεραγίας Θεοτόκου Μαρίας de Fatima',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    our_lady_of_guadalupe: 'Της Υπεραγίας Θεοτόκου της Γουαδελούπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    our_lady_of_loreto: 'Tης Υπεραγίας Θεοτόκου Μαρίας του Λορέτο',
    our_lady_of_lourdes: 'Αειπαρθένου Θεοτόκου Μαρίας της Λούρδης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    our_lady_of_mount_carmel: 'Αειπαρθένου Μαρίας του όρους Καρμήλου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    our_lady_of_sorrows: 'Παναγίας Αειπαρθένου Μαρίας της Πονεμένης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    our_lady_of_the_rosary: 'Παναγίας του Ροδαρίου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    our_lord_jesus_christ_king_of_the_universe: 'Του Ιησού Χριστού Βασιλέα του σύμπαντος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    palm_sunday_of_the_passion_of_the_lord: 'Κυριακή των Βαΐων',
    pancras_of_rome_martyr: 'Αγίου Παγκρατίου, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    pantaleon_of_nicomedia_martyr: 'Αγίου Παντελεήμονος, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    passion_of_saint_john_the_baptist: 'Του μαρτυρίου του Αγίου Ιωάννη, Προδρόμου και Βαπτιστή',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    patrick_of_ireland_bishop: 'Αγίου Πατρικίου, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    paul_miki_and_companions_martyrs: 'Αγίων Παύλου Miki και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    paul_of_the_cross_priest: 'Αγίου Παύλου του Σταυρού, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    paul_vi_pope: 'Αγίου Παύλου ΣΤʹ, Πάπα',  // src: https://el.wikipedia.org/w/index.php?title=%CE%A0%CE%AC%CF%80%CE%B1%CF%82_%CE%A0%CE%B1%CF%8D%CE%BB%CE%BF%CF%82_%CE%A3%CE%A4%CE%84&oldid=9892699
    paulinus_of_nola_bishop: 'Αγίου Παυλίνου Nolani, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    pelagia_the_penitent_virgin: 'Αγίας Πελαγίας της Μετανοούσης',
    pentecost_sunday: 'Κυριακή της Πεντηκοστής',  // src: mr_el_2006_ed3, p???
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Αγίων Περπέτουας και Φηλικίτης, μαρτύρων',
    peter_and_paul_apostles: 'Αγίων Πέτρου και Παύλου, Αποστόλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    peter_canisius_priest: 'Αγίου Πέτρου Κανισίου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    peter_chanel_priest: 'Αγίου Πέτρου Chanel, πρεσβυτέρου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    peter_chrysologus_bishop: 'Αγίου Πέτρου του Χρυσολόγου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    peter_claver_priest: 'Αγίου Πέτρου Claver, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    peter_damian_bishop: 'Αγίου Πέτρου Damiani, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    peter_julian_eymard_priest: 'Αγίου Πέτρου Ιουλιανού Eymard, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    philip_and_james_apostles: 'Αγίων Φιλίππου και Ιακώβου, Αποστόλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    philip_neri_priest: 'Αγίου Φιλίππου Neri, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    pius_francesco_forgione_priest: 'Αγίου Πίου de Pietrelcina, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    pius_v_pope: 'Αγίου Πίου Εʹ, πάπα',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    pius_x_pope: 'Αγίου Πίου Ιʹ, πάπα',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    polycarp_of_smyrna_bishop: 'Αγίου Πολυκάρπου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Αγίου Ποντιανού, πάπα, και Ιππολύτου, πρεσβυτέρου, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    presentation_of_the_blessed_virgin_mary: 'Εισόδια της Μακαριάς Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Νοέμβριος, p41
    presentation_of_the_lord: 'Η Υπαπαντή του Κυρίου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    queenship_of_the_blessed_virgin_mary: 'Υπεραγίας Θεοτόκου και Αειπαρθένου Μαρίας Βασίλισσας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    raymond_of_penyafort_priest: 'Αγίου Ραϊμόνδου de Penyafort, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    rita_of_cascia_religious: 'Αγίας Ρίτας de Cascia, μοναχής',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    robert_bellarmine_bishop: 'Αγίου Ροβέρτου Bellarmino, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    roch_of_montpellier: 'Αγίου Ρόκκο',
    romanus_martyr: 'Αγίου Ρωμανού, μάρτυρος',
    romuald_of_ravenna_abbot: 'Αγίου Ρομουάλδου, αββά',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούνιος, p36
    rose_of_lima_virgin: 'Αγίας Ρόζας της Λίμα, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    scholastica_of_nursia_virgin: 'Αγίας Σχολαστικής, παρθένου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    sebastian_of_milan_martyr: 'Αγίου Σεβαστιανού, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    seven_holy_founders_of_the_servite_order: 'Επτά Αγίων Ιδρυτών του Τάγματος των Δούλων της Μακαρίας Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Φεβρουάριος, p32
    sharbel_makhluf_priest: 'Αγίου Σαρβελίου Makhluf, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    simon_and_jude_apostles: 'Αγίων Σίμωνος και Ιούδα, Αποστόλων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    sixtus_ii_pope_and_companions_martyrs: 'Αγίου Σίξτου Βʹ, πάπα, και των συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    spyridon_of_trimythous_bishop: 'Αγίου Σπυρίδωνος, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    stanislaus_of_szczepanow_bishop: 'Αγίου Στανισλάου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    stephen_i_of_hungary: 'Αγίου Στέφανου της Ουγγαρίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    stephen_the_first_martyr: 'Αγίου Στέφανου, Πρωτομάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    sunday_of_the_word_of_god: '3η Κυριακή της κοινής περιόδου του έτους ή Κυριακής του Λόγου του Θεού',  // src: https://episkopisyrou.gr/eortasmos-tis-kyriakis-tou-logou-tou-theou/
    sylvester_i_pope: 'Αγίου Σιλβέστρου Αʹ, πάπα',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    teresa_benedicta_of_the_cross_stein_virgin: 'Αγίας Θηρεσίας Βενεδίκτης a Cruce (Edith Stein), παρθένου και μάρτυρος',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: 'Αγίας Θηρεσίας Βενεδίκτης a Cruce (Edith Stein), παρθένου και μάρτυρος, προστάτιδας της Ευρώπης',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    teresa_of_calcutta_religious: 'Αγίας Μητέρας Τερέζας της Καλκούτας',
    teresa_of_jesus_of_avila_virgin: 'Αγίας Θηρεσίας της Άβιλα, παρθένου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    thecla_of_iconium_virgin: 'Αγίας Θέκλας, παρθενομάρτυρος',
    theodore_stratelates: 'Αγίου Θεοδώρου, μάρτυρος',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: 'Αγίας Θηρεσίας του Βρέφους Ιησού, παρθένου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Οκτώβριος, p40
    thomas_apostle: 'Αγίου Θωμά, Αποστόλου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    thomas_aquinas_priest: 'Αγίου Θωμά του Ακινάτη, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    thomas_becket_bishop: 'Αγίου Θωμά Becket, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Δεκέμβριος, p42
    thursday_of_the_lords_supper: 'Μεγάλη Πέμπτη στο Μυστικό δείπνο',  // src: mr_el_2006_ed3, p???
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Αγίων Τιμοθέου και Τίτου, επισκόπων',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    timothy_of_ephesus_and_titus_the_first_bishop_of_crete_bishops: 'Αγίου Τίτου, πρώτου επισκόπου Κρήτης και Αγίου Τιμοθέου, επισκόπου',  // based on: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    transfiguration_of_the_lord: 'Η Μεταμόρφωση του Κυρίου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Αύγουστος, p38
    turibius_of_mogrovejo_bishop: 'Αγίου Τουριβίου de Mogrovejo, επισκόπου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάρτιος, p33
    twelve_apostles: 'Αγίων Δώδεκα Αποστόλων',
    ursula_of_cologne_virgin: 'Αγίας Ούρσουλας, παρθενομάρτυρος',
    vincent_de_paul_priest: 'Αγίου Βικεντίου de Paul, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιούλιος, p37
    vincent_ferrer_priest: 'Αγίου Βικεντίου Ferrer, πρεσβυτέρου',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Απρίλιος, p34
    vincent_of_saragossa_deacon: 'Αγίου Βικεντίου, διακόνου και μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Ιανουάριος, p31
    visitation_of_mary: 'Η επίσκεψη της Αειπαρθένου Μαρίας στην αγία Ελισάβετ',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Μάϊος, p35
    wenceslaus_i_of_bohemia_martyr: 'Αγίου Βενκεσλάου, μάρτυρος',  // src: mr_el_2006_ed3, Γενικό Ρωμαϊκό εορτολόγιο, Σεπτέμβριος, p39
    zechariah_and_elizabeth_parents_of_john_the_baptist: 'Αγίων Ζαχαρία και Ελισάβετ',
  },
};
