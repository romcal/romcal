import { RomcalLocale } from '@romcal/models/romcal-locale';

export default {
  advent: {
    season: 'Adventus',
    feria: '{{day}}, hebdomada {{week}} Adventus',
//     feria: 'Feria quarta, hebdomada III Adventus',  // Example
//     feria: 'Sabbato, hebdomada II Adventus',  // Example
    sunday: 'Dominica {{week}} Adventus',
//     sunday: 'Dominica IV Adventus',  // Example
//     ???: 'Die XXIV Decembris'  // Example
  },
  christmastide: {
    season: 'Nativitatis',
//     day: '{{day}} of Christmastide',  // TODO: Where is this used?
    octave: 'De die {{count}} infra octavam Nativitatis',
//     octave: 'De die VI infra octavam Nativitatis',
    sunday: 'Dominica {{count}} post Nativitatem',
//     sunday: 'Dominica II post Nativitatem',  // Example
  },
  epiphany: {
    season: 'Epiphaniæ',
    before: '{{day}} post octavam Nativitatis',
//     before: 'Feria sexta post octavam Nativitatis',  // Example
    after: '{{day}} post Epiphaniam',
//     after: 'Feria sexta post Epiphaniam',  // Example
  },
  ordinaryTime: {
    season: 'Per annum',
    feria: '{{day}}, hebdomada {{week}} per annum',
//     feria: 'Feria tertia, hebdomada VI per annum',  // Example
    sunday: 'Dominica {{week}} per annum',
//     sunday: 'Dominica XXVIII per annum',  // Example
  },
  lent: {
    season: 'Quadragesimæ',
    feria: '{{day}}, hebdomada {{week}} Quadragesimæ',
//     feria: 'Sabbato, hebdomada V Quadragesimæ',  // Example
    sunday: 'Dominica {{week}} Quadragesimæ',
//     sunday: 'Dominica V Quadragesimæ',  // Example
    dayAfterAshWed: '{{day}} post Cineres',
//     dayAfterAshWed: 'Sabbato post Cineres',  // Example
  },
  holyWeek: {
    season: 'Hebdomadæ Sanctæ',
    feria: '{{day}} Hebdomadæ Sanctæ',
//     feria: 'Feria secunda Hebdomadæ Sanctæ',  // Example
  },
  eastertide: {
    season: 'Paschæ',
    feria: '{{day}}, hebdomada {{week}} temporis paschalis',
//     feria: 'Feria sexta, hebdomada VII temporis paschalis',  // Example
    sunday: 'Dominica {{week}} Paschæ',
//     sunday: 'Dominica VII Paschæ',  // Example
//     octave: 'Easter {{day}}',
  },
  liturgicalColors: {
    GOLD: 'auri',  // TODO: This colour is not in the _general_ General Instruction of the Roman Missal; the episcopal conferences may add _more precious, sacred vestments_, incl gold and silver colours
    GREEN: 'viridis',
    PURPLE: 'violaceus',
    RED: 'ruber',
    ROSE: 'rosaceus',
    WHITE: 'albus',
    // BLACK: 'niger',
  },
  celebrations: {
    allSaints: 'Omnium Sanctorum',
    annunciation: 'In Annuntiatione Domini',
    ascension: 'In Ascensione Domini',
    ashWednesday: 'Feria IV Cinerum',
    assumption: 'In Assumptione Beatæ Mariæ Virginis',
    baptismOfTheLord: 'In Baptismate Domini',
    birthOfJohnTheBaptist: 'In Nativitate S. Ioannis Baptistæ',
    christmas: 'In Nativitate Domini',
    christTheKing: 'D. N. I. C. universorum regis',
    corpusChristi: 'Ss.mi Corporis et Sanguinis Christi',
    divineMercySunday: 'Dominica in octava Paschæ seu de Divina Misericordia',
    easter: 'Dominica Paschæ in Resurrectione Domini',
    epiphany: 'In Epiphania Domini',
    goodFriday: 'Feria VI in Passione Domini',
    holyFamily: 'Sanctæ Familiæ Iesu, Mariæ et Ioseph',
    holySaturday: 'Sabbato sancto/Vigilia paschalis',
    holyThursday: 'Feria V Hebdomadæ Sanctæ',
    immaculateConception: 'In Conceptione Immaculata Beatæ Mariæ Virginis',
    immaculateHeartOfMary: 'Immaculati Cordis B. Mariæ Virginis',
    josephHusbandOfMary: 'S. Iosephi, Sponsi B. M. V.',
    maryMotherOfGod: 'In octava Nativitatis Domini, Sollemnitas Sanctæ Dei Genetricis Mariæ',
    palmSunday: 'Dominica in Palmis de Passione Domini',
    pentecostSunday: 'Dominica Pentecostes',
    peterAndPaulApostles: 'Ss. Petri et Pauli, apostolorum',
    presentationOfTheLord: 'In Præsentatione Domini',
    sacredHeartOfJesus: 'Sacratissimi Cordis Iesu',
    theExaltationOfTheHolyCross: 'In Exaltatione Sanctæ Crucis',
    transfiguration: 'In Transfiguratione Domini',
    trinitySunday: 'Ss.mæ Trinitatis',
  },
  sanctoral: {
    '205BlessedMartyrsOfJapan': 'B. Martyres Iaponici CCV',
    allSaintsOfIreland: 'Omnium Sanctorum Hiberniæ',
    allSaintsOfWales: 'Omnium Sanctorum Cambriæ',
    allSouls: 'In Commemoratione omnium fidelium defunctorum',
    birthOfTheBlessedVirginMary: 'In Nativitate B. Mariæ Virginis',
    blessedAdolphKolpingPriest: 'B. Adolphi Kolping, presbyteri',
    blessedAlbertinaBerkenbrockVirginAndMartyr: 'B. Albertinæ Berinche, virginis et martyris',
    blessedAloysiusStepinacBishopAndMartyr: 'B. Aloysii Stepinac, episcopi et martyris',
    blessedAndreGrassetPriestAndMartyr: 'B. Andreæ Grasset, presbyteri et martyris',
    blessedAnielaSalawaVirgin: 'B. Angelæ Salawa, virginis',
    blessedAntoniNowowiejskiBishopAndCompanionsMartyrs: 'Bb. Antonii Iuliani Nowowiejski, episcopi, et sociorum, martyrum',
    blessedAugustinKazoticBishopAndMartyr: 'B. Augustini Gazothus, episcopi et martyris',
    blessedBartholomewOfTheMartyrsBishop: 'B. Bartholomæi de Martyribus Fernandes, episcopi',
    blessedBartolomeLaurelReligiousAndMartyr: 'B. Bartholomæi Laurel, religiosi et martyris',  // He is one of the 205 Blessed Martyrs of Japan
    blessedBogumilBishop: 'B. Bogumili, episcopi',
    blessedBoleslawaMariaLamentVirgin: 'B. Boleslavæ Mariæ Lament, virginis',
    blessedBronislawaVirgin: 'B. Bronislavæ, virginis',
    blessedBronislawMarkiewiczPriest: 'B. Bronislawi Markiewicz, presbyteri',
    blessedCarlosManuelRodriguez: 'B. Caroli Emmanueli Rodriguez Santiago',
    blessedCatherineOfSaintAugustineVirgin: 'B. Mariæ Catharinæ a S. Augustino, virginis',
    blessedCeferinoNamuncura: 'B. Zepherini Namuncura',
    blessedCeslausAndSaintHyacinthPriests: 'Bb. Ceslai et S. Hyacinthi, presbyterorum',  // They are the same saints as blessedCzeslawPriest and saintHyacinthPriest
    blessedCharlesSpinolaPriestAndMartyr: 'B. Caroli Spinola, presbyteri et martyris',
    blessedColumbaMarmionPriest: 'B. Iosephi Columbæ Marmion, presbyteri',
    blessedCzeslawPriest: 'B. Ceslai, presbyteri',
    blessedDinaBelangerVirgin: 'B. Dinæ Bélanger, virginis',
    blessedDominicOfTheMotherOfGodDominicBarberiPriest: 'B. Dominici Barberi a Matre Dei, presbyteri',
    blessedEdmundBojanowski: 'B. Edmundi Bojanowski',
    blessedEdmundIgnatiusRiceReligious: 'B. Edmundi Ignatii Rice, religiosi',
    blessedElisabethHesselbaldVirgin: 'S. Mariæ Elisabeth Hesselbald, virginis',
    blessedEmilieTavernierGamelinReligious: 'B. Æmilia Tavernier Gamelin, religiosæ',
    blessedFredericJanssoonePriest: 'B. Friderici Janssoone, presbyteri',
    blessedGeorgeMatulewiczBishop: 'B. Georgii Matulaitis, episcopi',
    blessedGisela: 'B. Gisellæ',
    blessedGoncaloDeAmarantePriest: 'B. Gundisalvi de Amarante, presbyteri',
    blessedGoncaloDeLagosPriest: 'B. Gundisalvi de Lagos, presbyteri',
    blessedGraziaOfCattaro: 'B. Gratiæ de Catharo',
    blessedHemmingBishop: 'B. Hemmingi Aboensis, episcopi',
    blessedHenrySusoPriest: 'B. Henrici Suso, presbyteri',
    blessedHonoratKozminskiPriest: 'B. Honorati Koźmiński, presbyteri',
    blessedHroznataMartyr: 'B. Hroznatæ, martyris',
    blessedInacioDeAzevedoPriestAndCompanionsMartyrs: 'B. Ignatii de Azevedo, presbyteri, et sociorum, martyrum',  // He is one of the Forty Martyrs of Brazil
    blessedInnocentXiPope: 'B. Innocentii XI, papæ',
    blessedIrishMartyrs: 'Bb. Martyrum Hiberniæ',  // https://www.catholicireland.net/saintoftheday/the-irish-martyrs-16th-17th-centuries/ ... https://en.wikipedia.org/wiki/Irish_Catholic_Martyrs ... Latin (alt): Bb. Dermitii O’Hurley, episcopi, Margaritæ Ball, Francisci Taylor et sociorum, martyris (src: https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_20020527_saints-jp-ii_it.html#1992)
    blessedIstvanSandorMartyr: 'B. Stephani Sándor, martyris',
    blessedIvanMerz: 'B. Ivani Merz',
    blessedJacintaAndFranciscoMarto: 'Ss. Francisci et Hyacinthæ Marto',
    blessedJakubStrzemieBishop: 'B. Iacobi Strzemię, episcopi',
    blessedJerzyMatulewiczBishop: 'B. Georgii Matulaitis, episcopi',  // dupe of blessedGeorgeMatulewiczBishop
    blessedJoanOfPortugalVirgin: 'B. Ioannæ Lusitaniæ, virginis',
    blessedJohnBeyzymPriest: 'B. Ioannis Beyzym, presbyteri',
    blessedJohnHenryNewmanPriest: 'B. Ioannis Henrici Newman, presbyteri',  // Though he was a cardinal, he was not ordained a bishop and remained a priest
    blessedJohnMartinMoyePriest: 'B. Ioannis Martini Moye, presbyteri',
    blessedJohnNewmanBishop: 'B. Ioannis Henrici Newman, presbyteri',  // dupe of blessedJohnHenryNewmanPriest
    blessedJolantaReligious: 'B. Iolentæ, religiosæ',
    blessedJosephVazPriest: 'S. Iosephi Vaz, presbyteri',
    blessedJuniperoSerraPriest: 'B. Iuniperi Serra, presbyteri',
    blessedKarlOfAustria: 'B. Caroli Austriæ',  // Latin (alt): B. Caroli e Domo Austriaca, Imperatoris ac Regis
    blessedKarolinaKozkownaVirginAndMartyr: 'B. Carolinæ Kózka, virginis et martyris',
    blessedKuriakoseEliasChavaraPriest: 'S. Kuriakose Eliæ Chavara a Sacra Familia, presbyteri',
    blessedLauraVicunaVirgin: 'B. Lauræ Vicuña, virginis',
    blessedLeonidFeodorovPriestAndMartyr: 'B. Leonidæ Fiodorov, presbyteri et martyris',
    blessedLouisZephirinMoreauBishop: 'B. Ludovici Zephyrini Moreau, episcopi',
    blessedMarcelCalloMartyr: 'B. Marcelli Callo, martyris',
    blessedMarcelinaDarowskaReligious: 'B. Mariæ Marcellinæ Darowska, martyris',  // Or simply Marcellina Darowska (without `Maria`)
    blessedMariaAdeodataPisaniVirgin: 'B. Mariæ Adeodatæ Pisani, virginis',
    blessedMariaAssuntaPallottaVirgin: 'B. Mariæ Assumptæ Pallotta, virginis',
    blessedMariaDoloresRodriguezSopenaVirgin: 'B. Mariæ Perdolentis Rodríguez Sopeña, virginis',
    blessedMariaStellaAndCompanionsVirginsAndMartyrs: 'B. Mariæ Stellæ a SS.mo Sacramento et sociorum, virginum et martyrum',  // Also known as Martyrs of Nowogródek; http://www.vatican.va/archive/aas/documents/AAS-92-2000-ocr.pdf ... https://en.wikipedia.org/wiki/Martyrs_of_Nowogr%C3%B3dek
    blessedMariaTeresaLedochowskaVirgin: 'B. Mariæ Teresiæ Ledóchowska, virginis',
    blessedMariaTheresaChiramelVirgin: 'S. Mariæ Teresiæ Chiramel Mankidiyan, virginis',
    blessedMarieAnneBlondinVirgin: 'B. Mariæ Annæ Blondin, virginis',
    blessedMarieLeonieParadisVirgin: 'B. Mariæ Leoniæ Paradis, virginis',
    blessedMarieRoseDurocherVirgin: 'B. Mariæ Rosæ Durocher, virginis',
    blessedMaryAngelaTruszkowskaVirgin: 'B. Mariæ Angelæ Truszkowska, virginis',  // She was removed from the Polish Proper in 2017
    blessedMaryOfJesusCrucifiedPetkovicVirgin: 'B. Mariæ a Iesu Crucifixo Petković, virginis',
    blessedMaryOfJesusTheGoodShepherdVirgin: 'B. Mariæ a Iesu Bono Pastore, virginis',  // https://en.wikipedia.org/wiki/Franciszka_Siedliska; She was removed from the Polish Proper in 2017
    blessedMauriceTornayPriestAndMartyr: 'B. Mauritii Tornay, presbyteri et martyris',
    blessedMichaelKozalBishopAndMartyr: 'B. Michaelis Kozal, episcopi et martyris',
    blessedMiguelAgustinProPriestAndMartyr: 'B. Michaelis Augustini Pro, presbyteri et martyris',
    blessedNazariaIgnaciaMarchReligious: 'S. Nazariæ Ignatiæ a Sancta Teresia a Iesu March Mesa, virginis',
    blessedNazjuFalzon: 'B. Ignatii Falzon',
    blessedNicolasStenoBishop: 'B. Nicolai Stenonis, episcopi',
    blessedOdoricOfPordenonePriest: 'B. Odorici de Portu Naonis, presbyteri',
    blessedOleksiyZarytskyiPriestAndMartyr: 'B. Alexii Zaryckyj, presbyteri et martyri',
    blessedOsannaOfCattaroVirgin: 'B. Hosannæ de Catharo, virginis',
    blessedPeterKibePriestAndCompanionsMartyrs: 'B. Petri Kibe Kasui, presbyteri, et sociorum, martyrum',
    blessedPeterToRotMartyr: 'B. Petri To Rot, martyris',
    blessedPiusIxPope: 'B. Pii IX, papæ',
    blessedRafalChylinskiPriest: 'B. Raphaelis Chyliński, presbyteri',
    blessedSalomeVirgin: 'B. Salomeæ, religiosæ',  // She was removed from the Polish Proper and I (@tukusejssirs) presume she is not listed in the MR2004
    blessedSanchaAndMafaldaVirgins: 'B. Sanchæ et Maphaldæ, virginum',
    blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs: 'Ss. Andreæ de Soveral et Ambrosii Francisci Ferro, presbyterorum et martyrum',  // Both are also venerated as the Martyrs of Natal (total of 30 peaple)
    blessedSaraSalkahaziVirginAndMartyr: 'B. Saræ Salkaházi, virginis et martyris',
    blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs: 'Bb. Caroli Spinola et Hieronymi de Angelis, presbyterorum et martyrum',
    blessedSebastianDeAparicioReligious: 'B. Sebastiani ab Apparitio, religiosi',  // Or Sebastianus Aparicio
    blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs: 'Bb. Niceti Budka et Basilii Velychkovskyi, episcoporum et martyrum',
    blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs: 'Bb. Petri de Zúñiga et Ludovici Flores, presbyterorum et martyrum',  // Both are in the 205 Blessed Martyrs of Japan
    blessedTheodoreRomzhaBishopAndMartyr: 'B. Theodori Romzsa, episcopi et martyris',
    blessedTheresaOfPortugalReligious: 'B. Teresiæ Lusitaniæ, religiosae',
    blessedVilmosAporBishopAndMartyr: 'B. Gulielmi Apor, episcopi et martyris',
    blessedVincentKadlubekBishop: 'B. Vincentii Kadłubek, episcopi',  // Or Kadłubkonis
    blessedVincentLewoniukAndCompanionsMartyrsOfPratulin: 'Beatorum Martyrum de Pratulin',  // Or B. Vincentii Lewoniuk et sociorum, martyrum ... https://www.ojs.tnkul.pl/index.php/rnp/article/download/8181/8133
    blessedVladimirGhikaPriestAndMartyr: 'B. Vladimiri Ghika, presbyteri et martyris',
    blessedWladyslawBladzinskiPriestAndCompanionsMartyrs: 'B. Ladislai Błądziński, presbyteri, et sociorum, martyrum',  // Also known collectively as either 108 Martyrs of World War II or 108 Blessed Polish Martyrs ... http://www.vatican.va/content/john-paul-ii/la/apost_letters/1999/documents/hf_jp-ii_apl_19990613_supervincimus-per-eum.pdf ... https://en.wikipedia.org/wiki/108_Martyrs_of_World_War_II
    blessedWladyslawOfGielniowPriest: 'B. Ladislai a Gielniów, presbyteri',  // Or de Gielniów or Gelniovii
    blessedZdenkaSchelingovaVirginAndMartyr: 'B. Sidoniæ Cæciliæ Scheling, virginis et martyris',  // http://www.vatican.va/roman_curia/congregations/ccdds/notitiae/2015/notitiae2015-2.pdf
    chairOfSaintPeterApostle: 'Cathedræ S. Petri, apostoli',
    conversionOfSaintPaulApostle: 'In conversione S. Pauli, apostoli',
    dedicationOfAParticularChurch: 'In Dedicatione Ecclesiæ, quorum die consecratione ignotus est',  // TODO: This must proofread, as I could not find this one online
    dedicationOfTheBasilicaOfSaintMaryMajor: 'In Dedicatione basilicæ S. Mariæ',
    dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles: 'In Dedicatione basilicarum Ss. Petri et Pauli, apostolorum',
    dedicationOfTheLateranBasilica: 'In Dedicatione basilicæ Lateranensis',
    discoveryOfTheHiddenChristians: 'B. Mariæ Virginis a Inventio occulti Christiani',  // TODO: This must proofread, as I could not find this one online ... https://en.wikipedia.org/wiki/Kakure_Kirishitan
    findingOfTheHolyCross: 'In Inventione Sanctae Crucis',
    firstMartyrsOfTheChurchOfRome: 'Ss. Protomartyrum S. Romanæ Ecclesiæ',
    guardianAngelOfPortugal: 'Ss. Angelorum Custodum Lusitaniæ',
    guardianAngels: 'Ss. Angelorum Custodum',
    holyInnocentsMartyrs: 'Ss. Innocentium, martyrum',
    holyNameOfTheBlessedVirginMary: 'Ss.mi Nominis Mariæ',
    hungarianSaintsAndBlesseds: 'Omnium Sanctorum et Beatorum Hungariæ',
    immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines: 'In Conceptione Immaculata Beatæ Mariæ Virginis, Principal Patroness Of The Philippines',  // TODO: Translate `Principal Patroness Of The Philippines`
    maryMotherOfTheChurch: 'B. Mariæ Virginis Ecclesiæ Matris',
    ourLadyHelpOfChristians: 'B. Mariæ Virginis Auxilium Christianorum',
    ourLadyMediatrix: 'B. Mariæ Virginis Mediatricis',
    ourLadyMediatrixOfAllGrace: 'B. Mariæ Virginis Omnium Gratiarum Mediatricis',  // TODO: Or rather Mediatricis Omnium Gratiarum?
    ourLadyMotherOfChristianUnity: 'B. Mariæ Virginis Unitatis Christianorum Matris',
    ourLadyMotherOfDivineProvidencePatronessOfPuertoRico: 'B. Mariæ Virginis Divinæ Providentiæ Matris atque Patronæ Portus Dives',
    ourLadyMotherOfMercy: 'B. Mariæ Virginis Misericordiæ Matris',
    ourLadyOfAparecidaPatronessOfBrazil: 'B. Mariæ Virginis de Aparecida, Patronæ Brasiliæ',
    ourLadyOfBethlehem: 'B. Mariæ Virginis de Bethlehem',
    ourLadyOfBistrica: 'B. Mariæ Virginis de Bistrica',
    ourLadyOfChina: 'B. Mariæ Virginis de Sinæ',  // TODO: 'de Sinæ' vel 'Sinæ' vel 'Sinarum'? https://la.wikipedia.org/wiki/Sinae_(regio)
    ourLadyOfCzestochowa: 'B. Mariæ Virginis de Czestochowa',
    ourLadyOfFatima: 'B. Mariæ Virginis de Fatima',
    ourLadyOfGoodCounsel: 'B. Mariæ Virginis boni Consilii Matris',
    ourLadyOfGuadalupe: 'B. Mariæ Virginis de Guadalupe',
    ourLadyOfGuadalupeCelestialPatronessOfThePhilippines: 'Beatæ Mariæ Virginis de Guadalupe, Celestial Patroness of the Philippines',  // TODO: Translate `Celestial Patroness of the Philippines`
    ourLadyOfHungary: 'B. Mariæ Virginis, patronæ principalis Hungariæ',
    ourLadyOfItati: 'B. Mariæ Virginis de Itati',
    ourLadyOfKnock: 'B. Mariæ Virginis de Knock',
    ourLadyOfLanka: 'B. Mariæ Virginis de Lanka',
    ourLadyOfLebanon: 'B. Mariæ Virginis de Libano',
    ourLadyOfLoreto: 'B. Mariæ Virginis de Loreto',
    ourLadyOfLourdes: 'B. Mariæ Virginis de Lourdes',
    ourLadyOfLujanPatronessOfArgentina: 'B. Mariæ Virginis de Luján, patronæ Argentinæ',
    ourLadyOfMadhu: 'B. Mariæ Virginis de Madhu',
    ourLadyOfMercy: 'B. Mariæ Virginis a Misericordia',
    ourLadyOfMountCarmel: 'B. Mariæ Virginis de Monte Carmelo',
    ourLadyOfMountCarmelMotherAndQueenOfChile: 'B. Mariæ Virginis de Monte Carmelo, Chiliæ Matris atque Reginæ',  // src: https://issuu.com/charlieleitao/docs/calendario__liturgico_2008-2009/100 [p. 100]
    ourLadyOfPeace: 'B. Mariæ Virginis a pace',
    ourLadyOfPerpetualHelp: 'B. Mariæ Virginis perpetuæ Auxilium',
    ourLadyOfRefuge: 'B. Mariæ Virginis Refugii peccatorum',
    ourLadyOfSorrows: 'B. Mariæ Virginis Perdolentis',  // TODO: Add a key for the Patroness of Slovakia (Patronæ Slovaciæ)
    ourLadyOfTheGateOfDawn: 'B. Mariæ Virginis Portæ Auroræ',
    ourLadyOfThePillar: 'B. Mariæ Virginis a Columna',
    ourLadyOfTheRosary: 'B. Mariæ Virginis a Rosario',
    ourLadyOfTheValley: 'B. Mariæ Virginis de Valle',  // TODO: Should it be rather `Dominae Nostrae de Valle`? ... http://www.vatican.va/content/john-paul-ii/la/apost_letters/1981/documents/hf_jp-ii_apl_19810316_pluribus-iam.html
    ourLadyOfVladimir: 'B. Mariæ Virginis Volodimiriensis',  // TODO: Should it be rather `Dei Genetrix Volodimiriensis`? ... https://la.wikipedia.org/wiki/Dei_genetrix_Volodimiriensis
    ourLadyOfWalsingham: 'B. Mariæ Virginis de Walsingham',
    ourLadyQueenOfPeace: 'B. Mariæ Virginis Reginæ Pacis',
    ourLadyQueenOfPoland: 'B Mariæ Virginis Reginæ Poloniæ',
    ourLordJesusChristTheEternalHighPriest: 'Domini nostri Iesu Christi, Summi et Æterni Sacerdotis',
    ourLordOfMiracles: 'Domini Miraculorum',
    saintJohnPaulIiPope: 'S. Ioannis Pauli II, papæ',
    saintJohnXxiiiPope: 'S. Ioannis XXIII, papæ',
    presentationOfTheBlessedVirginMary: 'In Præsentatione B. Mariæ Virginis',
    queenshipOfBlessedVirginMary: 'B. Mariæ Virginis Reginæ',
    saintAdalbertBishopAndMartyr: 'S. Adalberti, episcopi et martyris',  // TODO: ??? Vojtěchi
    saintAelredOfRievaulx: 'S. Ælredi Riævallensis',
    saintAengusOengusBishopAndAbbot: 'S. Ængi, episcopi et abbatis',
    saintAgathaVirginAndMartyr: 'S. Agathæ, virginis et martyris',
    saintAgnesOfBohemiaVirgin: 'S. Agnetis de Bohemia, virginis',
    saintAgnesTsaoKouYingMartyr: 'S. Agnetis Cao Guiying, martyris',
    saintAgnesVirginAndMartyr: 'S. Agnetis, virginis et martyris',
    saintAidanBishop: 'S. Ædani Lindisfarnensis, episcopi',
    saintAidanBishopAndTheSaintsOfLindisfarne: 'Ss. Ædani, episcopi et Sanctorum Lindisfarnensis',
    saintAidanOfLindisfarneBishopAndMissionary: 'S. Ædani Lindisfarnensis, episcopi',  // dupe of saintAidanBishop
    saintAilbeBishop: 'S. Albei, episcopi',
    saintAlbanMartyr: 'S. Albani, martyris',
    saintAlbericCrescitelliPriestAndMartyr: 'S. Alberici Crescitelli, presbyteri et martyris',
    saintAlbertChmielowskiReligious: 'S. Alberti Chmielowski, religiosi',
    saintAlbertoHurtadoPriest: 'S. Alberti Hurtado, presbyteri',
    saintAlbertTheGreatBishopAndDoctor: 'S. Alberti Magni, episcopi',
    saintAloysiusGonzagaReligious: 'S. Aloisii Gonzaga, religiosi',  // TODO: Aloisii or Aloysii
    saintAlphonsaOfTheImmaculateConceptionVirgin: 'S. Alfonsæ ab Immaculata Conceptione, virginis',
    saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch: 'S. Alfonsi Mariæ de’ Liguori, episcopi et Ecclesiæ doctoris',
    saintAmandMissionary: 'S. Amandi, episcopi',  // TODO: Was he a bishop or just a missionary?
    saintAmbroseBishopAndDoctor: 'S. Ambrosii, episcopi et Ecclesiæ doctoris',
    saintAndreBessetteReligious: 'S. Andreæ Bessette, religiosi',
    saintAndrewBobolaPriestAndMartyr: 'S. Andreæ Bobola, presbyteri et martyris',
    saintAndrewDungLacAndCompanionsMartyrs: 'Ss. Andreæ Dũng Lạc, presbyteri, et sociorum, martyrum',
    saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs: 'Ss. Andreæ Kim Tae-gŏn, presbyteri, Pauli Chŏng Ha-sang et sociorum, martyrum',
    saintAndrewTheApostle: 'S. Andreæ, apostoli',
    saintAndrewTheApostlePatronOfRussia: 'S. Andreæ, apostoli, Patron of Russia',  // TODO: Translate `Patron of Russia`
    saintAngelaMericiVirgin: 'S. Angelæ Merici, virginis',
    saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary: 'S. Annæ, Patron of Quebec, and S. Ioachim, parentum B. M. V.',  // TODO: Translate `Patron of Quebec`
    saintAnnoIiBishop: 'S. Annonis Coloniensis, episcopi',
    saintAnselmOfCanterburyBishopAndDoctorOfTheChurch: 'S. Anselmi, episcopi et Ecclesiæ doctoris',
    saintAnsgarBishop: 'S. Ansgarii, episcopi',
    saintAnthonyMaryClaretBishop: 'S. Antonii Mariæ Claret, episcopi',
    saintAnthonyOfEgyptAbbot: 'S. Antonii, abbatis',
    saintAnthonyOfLisbonPriestAndDoctorOfTheChurch: 'S. Antonii de Padova, presbyteri et Ecclesiæ doctoris',  // dupe of saintAnthonyOfPaduaPriestAndDoctor
    saintAnthonyOfPaduaPriestAndDoctor: 'S. Antonii de Padova, presbyteri et Ecclesiæ doctoris',
    saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest: 'S. Antonii a Sancta Anna Galvão, presbyteri',
    saintAnthonyOfTheCavesMonk: 'S. Antonii Kioviensis, monachi',
    saintAnthonyZaccariaPriest: 'S. Antonii Mariæ Zaccaria, presbyteri',
    saintApollinaris: 'S. Apollinaris, episcopi et martyris',
    saintAsaphBishop: 'S. Asaphi, episcopi',
    saintAsicusBishop: 'S. Assici, episcopi',
    saintAthanasiusBishopAndDoctor: 'S. Athanasii, episcopi et Ecclesiæ doctoris',
    saintAttractaVirgin: 'S. Attractæ, virginis',
    saintAugustineOfCanterburyBishop: 'S. Augustini Cantuariensis, episcopi',
    saintAugustineOfHippoBishopAndDoctorOfTheChurch: 'S. Augustini, episcopi et Ecclesiæ doctoris',
    saintAugustineZhaoRongPriestAndCompanionsMartyrs: 'Ss. Augustini Zhao Rong, presbyteri, et sociorum, martyrum',
    saintAugustineZhaoRongPriestAndMartyr: 'S. Augustini Zhao Rong, presbyteri et martyris',
    saintBarbaraVirginAndMartyr: 'S. Barbaræ, virginis et martyris',
    saintBarnabasTheApostle: 'S. Barnabæ, apostoli',
    saintBartholomewTheApostle: 'S. Bartholomæi, apostoli',
    saintBeatriceOfSilvaVirgin: 'S. Beatricis de Silva, virginis',
    saintBedeTheVenerablePriestAndDoctor: 'S. Bedæ Venerabilis, presbyteri et Ecclesiæ doctoris',
    saintBenedictOfNursiaAbbot: 'S. Benedicti, abbatis',  // TODO: (1) Add `patron of Europe` separately; (2) translate `patron of Europe` into Latin
    saintBennoOfMeissenBishop: 'S. Bennonis Misnensis, episcopi',
    saintBernadetteSoubirousVirgin: 'S. Bernardæ Soubirous, virginis',
    saintBernardineOfSienaPriest: 'S. Bernardini Senensis, presbyteri',
    saintBernardOfClairvauxAbbotAndDoctorOfTheChurch: 'S. Bernardi, abbatis et Ecclesiæ doctoris',
    saintBeunoAbbot: 'S. Bonus, abbatis',  // TODO: I am not sure if the Genitive is Bonus or Boni
    saintBlaseBishopAndMartyr: 'S. Blasii, episcopi et martyris',
    saintBonaventureBishopAndDoctor: 'S. Bonaventuræ, episcopi et Ecclesiæ doctoris',
    saintBonifaceBishopAndMartyr: 'S. Bonifatii, episcopi et martyris',
    saintBrendanAbbot: 'S. Brendani, abbatis',
    saintBridgetOfSwedenReligious: 'S. Birgittæ, religiosæ',  // TODO: (1) Add `patron of Europe` separately; (2) translate `patron of Europe` into Latin
    saintBrigidVirgin: 'S. Brigidæ, virginis',
    saintBrotherMutienMarieReligious: 'S. Muciani Mariæ Wiaux, religiosi',
    saintBrunoBonifaceOfQuerfurtBishopAndMartyr: 'S. Brunonis a Querfurt, episcopi et martyris',
    saintBrunoPriest: 'S. Brunonis, presbyteri',
    saintCaesariusOfArlesBishop: 'S. Cæsarii Arelatensis, episcopi',
    saintCajetanPriest: 'S. Caietani, presbyteri',
    saintCallistusIPopeAndMartyr: 'S. Callisti I, papæ et martyris',
    saintCamillusDeLellisPriest: 'S. Camilli de Lellis, presbyteri',
    saintCaniceAbbot: 'S. Canici, abbatis',
    saintCanuteMartyr: 'S. Canuti, martyris',  // Don't confuse Canute (Canute IV of Denmark) with Canute Lavard
    saintCarthageBishopMochuta: 'S. Carthagi, episcopi',  // TODO: According to the Wiki [1], he was not a bishop (but an abbot), but the Irish lit_cal [2] states he was ... [1] https://en.wikipedia.org/wiki/Mo_Chutu_of_Lismore; [2] http://www.liturgy-ireland.ie/uploads/8/4/2/9/8429650/2020_daily_calendar.pdf
    saintCasimir: 'S. Casimiri',
    saintCatherineOfAlexandriaVirginAndMartyr: 'S. Catharinæ Alexandrinæ, virginis et martyris',
    saintCatherineOfSienaVirginAndDoctorOfTheChurch: 'S. Catharinæ Senensis, virginis et Ecclesiæ doctoris',  // TODO: (1) Add `patron of Europe` separately; (2) translate `patron of Europe` into Latin
    saintCeallachCelsusBishop: 'S. Celsi, episcopi',
    saintCeciliaVirginAndMartyr: 'S. Cæciliæ, virginis et martyris',
    saintCharbelMakhloufPriestAndHermit: 'S. Sarbelii Makhlūf, presbyteri',
    saintCharlesBorromeoBishop: 'S. Caroli Borromeo, episcopi',
    saintChristopherMagallanesAndCompanionsMartyrs: 'Ss. Christophori Magallanes, presbyteri, et sociorum, martyrum',
    saintChristopherMartyr: 'S. Christophori, martyris',
    saintCiaranAbbot: 'S. Ciarani Cluanensis, abbatis',  // Or Ciarán of Clonmacnoise or Ciarán the Younger (in English)
    saintClareVirgin: 'S. Claræ, virginis',
    saintClementIPopeAndMartyr: 'S. Clementis I, papæ et martyris',
    saintClementMaryHofbauerPriest: 'S. Clementis Mariæ Hofbauer, presbyteri',
    saintClotilde: 'S. Clotildis',
    saintColmanOfCloyneBishop: 'S. Colmani Cloynensis, episcopi',
    saintColmanOfDromoreBishop: 'S. Colmani Dromorensis, episcopi',
    saintColmanOfKilmacduaghBishop: 'S. Colmani Duaci, episcopi',
    saintColumbaAbbotAndMissionary: 'S. Columbæ Hiensis, abbatis',
    saintColumbanAbbot: 'S. Columbani, abbatis',
    saintComgallAbbot: 'S. Comgalli, abbatis',
    saintConlethBishop: 'S. Conlethi, episcopi',
    saintConradOfParzhamReligious: 'S. Conradi  a  Parzham, religiosi',
    saintCorbinianBishop: 'S. Corbiniani, episcopi',
    saintCuthbertBishop: 'S. Cuthberti, episcopi',
    saintCyrilOfAlexandriaBishopAndDoctor: 'S. Cyrilli Alexandrini, episcopi et Ecclesiæ doctoris',
    saintCyrilOfJerusalemBishopAndDoctor: 'S. Cyrilli Hierosolymitani, episcopi et Ecclesiæ doctoris',
    saintDamasusIPope: 'S. Damasi I, papæ',
    saintDamienDeVeusterPriest: 'S. Damiani de Veuster, presbyteri',
    saintDavidBishop: 'S. Davidis, episcopis',
    saintDavidLewisPriestAndMartyr: 'S. Davidi Lewis, presbyteri et martyris',  // He is one of the Forty Martyrs of England
    saintDavnetVirgin: 'S. Dymphnæ, virginis',  // TODO: Add some differentiator, because in Latin, her name is same as St Dymphna, who was martyred at Geel ... https://en.wikipedia.org/wiki/Dymphna ... https://en.wikipedia.org/wiki/Damnat
    saintDeclanBishop: 'S. Declani, episcopi',
    saintDeiniolBishop: 'S. Dainioli, episcopi',
    saintDemetrius: 'S. Demetrii Thessalonicensis',
    saintDenisAndCompanionsMartyrs: 'Ss. Dionysii, episcopi, et sociorum, martyrum',
    saintDionysiusTheAreopagite: 'S. Dionysii Areopagitæ',
    saintDominicPriest: 'S. Dominici, presbyteri',
    saintDubriciusBishop: 'S. Dubricii, episcopi',
    saintEdmundCampionPriestAndMartyr: 'S. Edmundi Campion, presbyteri et martyris',  // He is one of the Forty Martyrs of England
    saintEdmundOfAbingdonBishop: 'S. Edmundi Abindoniensis. episcopi',
    saintEdwardTheConfessor: 'S. Eduardi Confessoris',
    saintElijahProphet: 'S. Eliæ, prophetæ',
    saintElizabethAnnSetonReligious: 'S. Elisabeth Annæ Seton, religiosæ',
    saintElizabethOfHungaryReligious: 'S. Elisabeth Hungariæ, religiosæ',
    saintElizabethOfPortugal: 'S. Elisabeth Lusitaniæ',
    saintEmeric: 'S. Emerici',
    saintEndaAbbot: 'S. Endei, abbatis',
    saintEphremDeaconAndDoctor: 'S. Ephræm, diaconi et Ecclesiæ doctoris',
    saintEricIxMartyr: 'S. Erici regis Sueciæ, martyris',  // TODO: Should we omit `regis`?
    saintEtheldredaAudreyVirgin: 'S. Æthelthrythæ, virginis',
    saintEugeneDeMazenodBishop: 'S. Caroli Iosephi Eugenii de Mazenod, episcopi',
    saintEugeneEoghanBishop: 'S. Eugenii, episcopi',
    saintEulaliaOfMeridaVirginAndMartyr: 'S. Eulaliæ Emeritensis, virginis et martyris',
    saintEulogiusOfCordobaBishop: 'S. Eulogii Cordubensis, episcopi',  // Or rather Toletanus?
    saintEusebiusOfVercelliBishop: 'S. Eusebii Vercellensis, episcopi',
    saintEysteinnBishop: 'S. Augustini Nidrosiensis, episcopi',
    saintEzequielMorenoBishop: 'S. Ezechielis Moreno, episcopi',
    saintFabianPopeAndMartyr: 'S. Fabiani, papæ et martyris',
    saintFachananOfKilfenoraBishop: 'S. Fachanani Finaborensis, episcopi',
    saintFachtnaBishop: 'S. Fachanani, episcopi',  // TODO: We might want to add a differentiator, as we have two saints with Fachanunus name in Latin (the either one being St Fachanan of Kilfenora) ... We might want to name this one as `Fachtna Facundus` in Latin
    saintFaustinaKowalskaVirginAndReligious: 'S. Faustinæ Kowalska, virginis et religiosæ',
    saintFelipeDeJesusPriestAndMartyr: 'S. Philippi a Iesu, presbyteri et martyris',
    saintFerdinand: 'S. Ferdinandi',
    saintFergalBishopAndMissionary: 'S. Virgilii Salisburgensis, episcopi',  // Or Vergilius of Salzburg or Virgilius or Feirgil or Fergal
    saintFiacreMonk: 'S. Fiacrii, monachi',  // TODO: Was he a mere monk or an abbot?
    saintFidelisOfSigmaringenPriestAndMartyr: 'S. Fidelis a Sigmaringen, presbyteri et martyris',
    saintFinbarrBishop: 'S. Barri Corcagie, episcopi',  // TODO: Or rather Finbarrus?
    saintFinnianOfClonardBishop: 'S. Finniani Clonardensis, episcopi',
    saintFintan: 'S. Fintani',
    saintFlannanBishop: 'S. Flannani, episcopi',
    saintFlorianAndHisCompanionsMartyrs: 'Ss. Floriani et sociorum, martyrum',
    saintFlorianMartyr: 'S. Floriani, martyris',
    saintFrancesOfRomeReligious: 'S. Franciscæ Romanæ, religiosæ',
    saintFrancesXavierCabriniVirgin: 'S. Franciscæ Xaveriæ Cabrini, virginis',
    saintFrancisBorgiaPriest: 'S. Francisci Borgia, presbyteri',  // TODO: Borgia or Borja?
    saintFrancisDeSalesBishopAndDoctor: 'S. Francisci de Sales, episcopi et Ecclesiæ doctoris',
    saintFrancisDiazPriestAndCompanionsMartyrs: 'Ss. Francisci Diaz, presbyteri, et sociorum, martyrum',
    saintFrancisFernandezDeCapillasPriestAndMartyr: 'S. Francisci Fernández de Capillas, presbyteri et martyris',
    saintFrancisOfAssisi: 'S. Francisci Assisiensis',
    saintFrancisOfPaolaHermit: 'S. Francisci de Paola, eremitæ',
    saintFrancisSolanusPriest: 'S. Francisci Solani, presbyteri',
    saintFrancisXavierPriest: 'S. Francisci Xavier, presbyteri',
    saintFrancoisDeLavalBishop: 'S. Francisci de Montmorency-Laval, episcopi',
    saintFridolinOfSackingenMonk: 'S. Fridolini, monachi',
    saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops: 'Ss. Fructuosi, Martini Bracarensis and Saint Geraldi, episcoporum',
    saintFursaAbbotAndMissionary: 'S. Fursei, abbatis',
    saintGabrieltaurinDufresseBishopAndMartyr: 'S. Ioannis Gabrielis Taurin Dufresse, episcopi et martyris',
    saintGallAbbotAndMissionary: 'S. Galli, abbatis',
    saintGenevieveVirgin: 'S. Genovefæ, virginis',
    saintGeorgeMartyr: 'S. Georgii, martyris',
    saintGeorgePrecaPriest: 'S. Georgii Preca, presbyteri',
    saintGerardBishop: 'S. Gerardi, episcopi',  // Chanadiensis (Hungarian: Csanád)
    saintGermanusOfAuxerreBishop: 'S. Germani Autissiodorensis, episcopi',
    saintGertrudeOfNivellesAbbess: 'S. Gertrudis Nivellensis, abatissæ',
    saintGertrudeOfNivellesVirgin: 'S. Gertrudis Nivellensis, abatissæ',  // dupe of saintGertrudeOfNivellesAbbess
    saintGertrudeTheGreatVirgin: 'S. Gertrudis, virginis',
    saintGobnaitVirgin: 'S. Gobnatæ, virginis',
    Dedit hanc sedem S. Abbanus S. Gobnatae; cujus tempora hactenus non videntur fuisse definita.
    saintGonsaloGarciaMartyr: 'S. Gundisalvi García, martyris',  // He is one of the companions of St Paul Miki
    saintGorazdAndCompanions: 'Ss. Gorazdi et sociorum',
    saintGotthardBishop: 'S. Gotthardi, episcopi',
    saintGregoryTheGreatPopeAndDoctor: 'S. Gregorii Magni, papæ et Ecclesiæ doctoris',
    saintGregoryViiPope: 'S. Gregorii VII, papæ',
    saintHectorValdivielsoSaezMartyr: 'S. Benedicti a Iesu, martyris',  // TODO: He was a religious, so why don't we add that title?
    saintHedwigOfPoland: 'S. Hedvigis',  // TODO: ??? reginæ Poloniæ
    saintHedwigReligious: 'S. Hedvigis, religiosæ',
    saintHelena: 'S. Helena',
    saintHemmaOfGurk: 'S. Hemmæ',  // TODO: Should we add Gurcensis?
    saintHenry: 'S. Henrici',
    saintHenryBishopAndMartyr: 'S. Henrici, episcopi et martyris',
    saintHermannJosephPriest: 'S. Hermanni Iosephi, presbyteri',
    saintHermenegildMartyr: 'S. Hermenegildi, martyris',
    saintHilaryOfPoitiersBishopAndDoctor: 'S. Hilarii, episcopi et Ecclesiæ doctoris',
    saintHildaAbbess: 'S. Hildæ, abatissæ',
    saintHildegardOfBingenAbbessAndDoctor: 'S. Hildegardis Bingensis, abatissæ et Ecclesiæ doctoris',
    saintHubertBishop: 'S. Huberti, episcopi',
    saintHubertOfLiegeBishop: 'S. Huberti, episcopi',  // dupe of saintHubertBishop
    saintHughOfLincolnBishop: 'S. Hugonis Lincolnien, episcopi',
    saintHyacinthPriest: 'S. Hyacinthi, presbyteri',
    saintIgnatiusOfAntiochBishopAndMartyr: 'S. Ignatii Antiocheni, episcopi et martyris',
    saintIgnatiusOfLoyolaPriest: 'S. Ignatii de Loyola, presbyteri',
    saintIldephonsusOfToledoBishop: 'S. Ildephonsi Toletani, episcopi',
    saintIlltudAbbot: 'S. Hilduti, abbatis',
    saintIrenaeusBishopAndMartyr: 'S. Irenæi, episcopi et martyris',
    saintIrene: 'S. Irenæ',
    saintIsidoreOfSevilleBishopAndDoctorOfTheChurch: 'S. Isidori, episcopi et Ecclesiæ doctoris',
    saintIsidoreTheFarmer: 'S. Isidori Agricolæ',
    saintItaVirgin: 'S. Ite, virginis', // Why is the Genitive of Ita not Itæ?
    saintIvoPriest: 'S. Ivonis, presbyteri',  // Not to be confused with S. Ivo Chartres, who was a bishop
    saintJamesApostle: 'S. Iacobi, apostoli',
    saintJamesApostlePatronOfSpain: 'S. Iacobi, apostoli, Patron of Spain',  // TODO: Translate `Patron of Spain`
    saintJaneFrancesDeChantalReligious: 'S. Ioannæ Franciscæ de Chantal, religiosæ',
    saintJanuariusBishopAndMartyr: 'S. Ianuarii, episcopi et martyris',
    saintJarlathBishop: 'S. Iarlathi, episcopi',
    saintJeromeEmiliani: 'S. Hieronymi Emiliani',
    saintJeromePriestAndDoctor: 'S. Hieronymi, presbyteri et Ecclesiæ doctoris',
    saintJoachimHoMartyr: 'S. Ioachim Ho, martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintJoanOfArcVirginSecondaryPatronessOfFrance: 'S. Ioannæ Arcensis, virginis, Secondary Patroness of France',  // ??? patronae secund. Galliae; TODO: Translate Secondary Patroness of France
    saintJoaquinaVedruna: 'S. Ioachimæ de Vedruna, religiosæ',
    saintJohnBaptistDeLaSallePriest: 'S. Ioannis Baptistæ de la Salle, presbyteri',
    saintJohnBerchmansReligious: 'S. Ioannis Berchmans, religiosi',
    saintJohnBoscoPriest: 'S. Ioannis Bosco, presbyteri',
    saintJohnCassianPriest: 'S. Ioannis Cassiani, presbyteri',
    saintJohnChrysostomBishopAndDoctor: 'S. Ioannis Chrysostomi, episcopi et Ecclesiæ doctoris',
    saintJohnDamascenePriestAndDoctor: 'S. Ioannis Damasceni, presbyteri et Ecclesiæ doctoris',
    saintJohnDeBritoPriestAndMartyr: 'S. Ioannis de Brito, presbyteri et martyris',
    saintJohnEudesPriest: 'S. Ioannis Eudes, presbyteri',
    saintJohnGabrielPerboyrePriestAndMartyr: 'S. Ioannis Gabrielis Perboyre, presbyteri et martyris',
    saintJohnIPopeAndMartyr: 'S. Ioannis I, papæ et martyris',
    saintJohnJonesPriestAndMartyr: 'S. Ioannis Jones, presbyteri et martyris',
    saintJohnLeonardiPriest: 'S. Ioannis Leonardi, presbyteri',
    saintJohnMaciasReligious: 'S. Ioannis Macias, religiosi',
    saintJohnMaryVianneyPriest: 'S. Ioannis Mariæ Vianney, presbyteri',
    saintJohnNepomucenePriestAndMartyr: 'S. Ioannis Nepomuceni, presbyteri et martyris',
    saintJohnNeumannBishop: 'S. Ioannis Nepomuceni Neumann, episcopi',
    saintJohnOfAvilaPriest: 'S. Ioannis de Avila, presbyteri',
    saintJohnOfCapistranoPriest: 'S. Ioannis de Capestrano, presbyteri',
    saintJohnOfDuklaPriest: 'S. Ioannis de Dukla, presbyteri',
    saintJohnOfGodReligious: 'S. Ioannis a Deo, religiosi',
    saintJohnOfKantyPriest: 'S. Ioannis de Kęty, presbyteri',
    saintJohnOfTheCrossPriestAndDoctor: 'S. Ioannis a Cruce, presbyteri et Ecclesiæ doctoris',
    saintJohnOfTrioraPriestAndMartyr: 'S. Ioannis de Triora, presbyteri et martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintJohnOgilvie: 'S. Ioannis Ogilvie, presbyteri et martyris',
    saintJohnRobertsPriestAndMartyr: 'S. Ioannis Roberts, presbyteri et martyris',
    saintJohnSarkanderPriestAndMartyr: 'S. Ioannis Sarkander, presbyteri et martyris',
    saintJohnTheApostleAndEvangelist: 'S. Ioannis, apostoli et evangelistæ',
    saintJosaphatBishopAndMartyr: 'S. Iosaphat, episcopi et martyris',
    saintJoseDeAnchietaPriest: 'S. Iosephi de Anchieta, presbyteri',
    saintJosefBilczewskiBishop: 'S. Iosephi Bilczewski, episcopi',  // rename the key to saintJosephBilczewskiBishop
    saintJoseMariaDeYermoPriest: 'S. Iosephi Mariæ de Yermo y Parres, presbyteri',  // TODO: Should there be the 'y Parres' part? If yes, should it be with 'y' or 'et'? (I have seen both 'y' and 'et' version online.)
    saintJosemariaEscrivaDeBalaguerPriest: 'S. Iosephmariæ Escrivá de Balaguer, presbyteri',  // TODO: Should it be Iosephmaria or Ioseph Maria? On vatican.va, I have found both in two different apostolic letters issued on the same day: (1) http://w2.vatican.va/content/john-paul-ii/la/apost_letters/1992/documents/hf_jp-ii_apl_19920517_munere-perfunges.html (2) http://www.vatican.va/content/john-paul-ii/la/apost_letters/1992/documents/hf_jp-ii_apl_19920517_dominus-pascit-me.html
    saintJosephFreinademetzPriest: 'S. Iosephi Freinademetz, presbyteri',
    saintJosephineBakhitaVirgin: 'S. Iosephinæ Bakhita, virginis',
    saintJosephOfCalasanzPriest: 'S. Iosephi de Calasanz, presbyteri',
    saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada: 'S. Iosephi, Sponsi B. M. V., Principal Patron of Canada',  // TODO: (1) Add `Principal Patron of Canada` separately to `josephHusbandOfMary`; (2) translate `Principal Patron of Canada` into Latin
    saintJosephTheWorker: 'S. Iosephi Opificis',
    saintJosephYuanPriestAndMartyr: 'S. Iosephi Yuan, presbyteri et martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintJosephZhangDapengMartyr: 'S. Iosephi Zhang Dapeng, martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintJozefBilczewskiBishop: 'S. Iosephi Bilczewski, episcopi',  // dupe of saintJosephBilczewskiBishop
    saintJozefSebastianPelczar: 'S. Iosephi Sebastiani Pelczar, episcopi',
    saintJuanDiegoCuauhtlatoatzin: 'S. Ioannis Didaci Cuauhtlatoatzin',
    saintJulianaOfLiegeVirgin: 'S. Julianæ Leodiensis, virginis',
    saintJulieBilliartVirgin: 'S. Juliæ Billiart, virginis',
    saintJustinMartyr: 'S. Iustini, martyris',
    saintKateriTekakwithaVirgin: 'S. Catharinæ Tekakwitha, virginis',
    saintKatharineDrexelVirgin: 'S. Catharinæ Mariæ Drexel, virginis',
    saintKentigern: 'S. Kentigerni',  // Or St Mungo (in English)
    saintKevinAbbot: 'S. Cœmgeni, abbatis',
    saintKieranBishop: 'S. Kyarani, episcopi',  // Or Ciarán of Saigir or Ciarán the Elder (in English)
    saintKilianBishopAndCompanionsMartyrs: 'Ss. Kiliani, episcopi, et sociorum, martyrum',
    saintKillianBishopAndMartyr: 'S. Kiliani, episcopi et martyris',
    saintKingaVirgin: 'S. Cunegundæ, virginis',  // English (alt): Kinga of Poland or Kunegunda
    saintLadislaus: 'S. Ladislai',
    saintLambertBishopAndMartyr: 'S. Lamberti, episcopi et martyris',
    saintLaurenceOTooleBishop: 'S. Laurentii O’Toole, episcopi',
    saintLaurenceWangBingAndCompanionsMartyrs: 'Ss. Laurentii Wang Bing, et sociorum, martyrum',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintLawrenceBaiXiaomanMartyr: 'S. Laurentii Bai Xiaoman, martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintLawrenceOfBrindisiPriestAndDoctor: 'S. Laurentii de Brindisi, presbyteri et Ecclesiæ doctoris',
    saintLawrenceOfRomeDeaconAndMartyr: 'S. Laurentii, diaconi et martyris',
    saintLawrenceRuizAndCompanionsMartyrs: 'Ss. Laurentii Ruiz et sociorum, martyrum',  // He is one of the 16 Martyrs of Japan; TODO: Possible dupe with saintThomasRokuzayemonPriestAndCompanionsMartyrs
    saintLeanderBishop: 'S. Leandri, episcopi',  // He might called in Latin Hispalensis, in English of Seville
    saintLeliaVirgin: 'S. Leliæ, virginis',
    saintLeobaAbbess: 'S. Leobæ, abatissæ',
    saintLeoIxPope: 'S. Leonis IX, papæ',
    saintLeoManginPriestAndCompanionsMartyrs: 'Ss. Leonis Ignatii Mangin, presbyteri, et sociorum, martyrum',
    saintLeonardOfNoblacHermit: 'S. Leonardi, eremitæ',
    saintLeopoldIII: 'S. Leopoldi III',
    saintLeopoldMandicPriest: 'S. Leopoldi de Castro Novo, presbyteri',  // Or Leopoldus Novensis in Latin; Or Leopold of Castelnuovo in English
    saintLeoTheGreatPopeAndDoctor: 'S. Leonis Magni, papæ et Ecclesiæ doctoris',
    saintLouis: 'S. Ludovici',
    saintLouisBertrandPriest: 'S. Ludovici Bertrán, presbyteri',
    saintLouisMarieGrignionDeMontfortPriest: 'S. Ludovici Mariæ Grignion de Montfort, presbyteri',
    saintLuciusOfChurBishopAndMartyr: 'S. Lucii I, papæ',  // TODO: He was a pope, so why the Germans call him a bishop? Also if he was not a martyr, why would we let him have the title in the liturgical books?
    saintLucyOfSyracuseVirginAndMartyr: 'S. Luciæ, virginis et martyris',
    saintLucyYiZhenmeiVirginAndMartyr: 'S. Luciæ Yi Zhenmei, virginis et martyris',
    saintLudgerBishop: 'S. Ludgeri, episcopi',
    saintLudmilaMartyr: 'S. Ludmilæ, martyris',
    saintLuigiOrionePriest: 'S. Aloisii Orione, presbyteri',
    saintLukeTheEvangelist: 'S. Lucæ, evangelistæ',
    saintLydiaOfPhilippi: 'S. Lydiæ',
    saintMacartanBishop: 'S. Macartini, episcopi',
    saintMacNissiBishop: 'S. Macnisi, episcopi',
    saintMaelruainMaolruainVirgin: 'Saint Maelruain, episcopi',  // TODO: We might want to add a name distinguisher, because he has a namesake Máel Ruain, bishop of Lusca
    saintMagnusMartyr: 'S. Magni, martyris',
    saintMalachyBishop: 'S. Malachi, episcopi',
    saintMarcellinChampagnatPriest: 'S. Marcellini Iosephi Benedicti Champagnat, presbyteri',
    saintMargaretMaryAlacoqueVirgin: 'S. Margaritæ Mariæ Alacoque, virginis',
    saintMargaretOfAntiochVirginAndMartyr: 'S. Margaritæ, virginis et martyris',
    saintMargaretOfHungary: 'S. Margaritæ Hungariæ',
    saintMargaretOfScotland: 'S. Margaritæ Scotiæ',
    saintMargueriteBourgeoysVirgin: 'S. Margaritæ Bourgeoys, virginis',
    saintMargueriteDYouvilleReligious: 'S. Margaritæ d’Youville, religiosæ',
    saintMariaDeJesusSacramentadoVenegasVirgin: 'S. Mariæ a Iesu Sacramentato, virginis',
    saintMariaGorettiVirginAndMartyr: 'S. Mariæ Goretti, virginis et martyris',
    saintMariaGuadalupeGarciaZavalaVirgin: 'S. Mariæ Guadalupe García Zavala, virginis',
    saintMariaMicaelaOfTheBlessedSacramentVirgin: 'S. Mariæ Michaelæ a Sanctissimo Sacramento, virginis',
    saintMarianaDeJesusDeParedesVirgin: 'S. Mariæ Annæ a Iesu de Paredes, virginis',
    saintMarianneCopeVirgin: 'S. Mariæ Annæ Cope, virginis',
    saintMarieOfTheIncarnationReligious: 'S. Mariæ ab Incarnatione, religiosæ',
    saintMarina: 'S. Margaritæ, virginis et martyris',  // dupe of saintMargaretOfAntiochVirginAndMartyr
    saintMarkoKrizinPriestAndMartyr: 'S. Marci Križin, presbyteri et martyris',
    saintMarkTheEvangelist: 'S. Marci, evangelistæ',
    saintMaroun: 'S. Maronis',
    saintMartha: 'S. Marthæ',
    saintMartinDePorresReligious: 'S. Martini de Porres, religiosi',
    saintMartinIPopeAndMartyr: 'S. Martini I, papæ et martyris',
    saintMartinOfToursBishop: 'S. Martini Turonensis, episcopi',
    saintMartinWuXueshengAndCompanionsMartyrs: 'Ss. Martini Wu Xuesheng, et sociorum, martyrum',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintMaryMacKillopVirgin: 'S. Mariæ a Cruce MacKillop, virginis',  // dupe
    saintMaryMagdalene: 'S. Mariæ Magdalenæ',
    saintMaryMagdaleneDePazziVirgin: 'S. Mariæ Magdalenæ de’ Pazzi, virginis',
    saintMaryOfTheCrossVirgin: 'S. Mariæ a Cruce MacKillop, virginis',
    saintMatilda: 'S. Matildæ',
    saintMatthewApostleAndEvangelist: 'S. Matthæi, apostoli et evangelistæ',
    saintMatthiasTheApostle: 'S. Matthiæ, apostoli',
    saintMauriceAndCompanionsMartyrs: 'Ss. Mauritii et sociorum, martyrum',
    saintMaurusBishop: 'S. Mauri, episcopi',
    saintMaximilianMaryKolbePriestAndMartyr: 'S. Maximiliani Mariæ Kolbe, presbyteri et martyris',
    saintMeinradMartyr: 'S. Meinradi, martyris',
    saintMelBishop: 'S. Melis, episcopi',  // TODO: Is the Genitive Mel or Melis or Mellis? src: https://books.google.sk/books?id=3hkhUrfjKE8C&pg=PA48#v=onepage&q&f=false ... wiktionary: https://en.wiktionary.org/wiki/mel#Latin ... names and Latin declination: http://www.nationalarchives.gov.uk/latin/reference/how-to-decline-personal-names/
    saintMelchiorGrodzieckiPriestAndMartyr: 'S. Melchioris Grodziecki, presbyteri et martyris',
    saintMiguelFebresCorderoReligious: 'S. Michaelis Febres Cordero, religiosi',
    saintMolaiseLaisrenLaserianBishop: 'S. Laseriani, episcopi',  // Or Molaisus (in Latin)
    saintMonica: 'S. Monicæ',
    saintMoninneVirgin: 'S. Moninnæ, virginis',
    saintMunchinBishop: 'S. Mainchini, episcopi',
    saintMuredachBishop: 'S. Muredachi, episcopi',
    saintNicholasBishop: 'S. Nicolai, episcopi',
    saintNicholasOfFlueHermit: 'S. Nicolai de Flüe, eremitæ',
    saintNikolaTavelicPriestAndMartyr: 'S. Nicolai Tavelić, presbyteri et martyris',
    saintNinian: 'S. Niniani',
    saintNorbertBishop: 'S. Norberti, episcopi',
    saintNunoDeSantaMaria: 'S. Nunii a Sancta Maria',  // Secular name: Nuno Álvares Pereira
    saintOdileOfAlsaceAbbess: 'S. Odiliæ, abatissæ',  // Or Ottilia
    saintOlafIiMartyr: 'S. Olavi, martyris',
    saintOlga: 'S. Olgæ Kioviensis',  // Or Helga (Kioviensis might be omited)
    saintOliverPlunkettBishopAndMartyr: 'S. Oliverii Plunkett, episcopi et martyris',
    saintOtteranMonk: 'S. Otterani, monachi',  // TODO: was he rather a Bishop or an abbot?
    saintOttoOfBambergBishop: 'S. Ottonis Bambergensis, episcopi',
    saintPancrasMartyr: 'S. Pancratii, martyris',
    saintPantaleon: 'S. Pantaleonis',  // Pantaleon or Pantalaimon
    saintPaschalBaylon: 'S. Paschali Baylón',
    saintPatrickBishop: 'S. Patricii, episcopi',
    saintPaulChenChangpinAndCompanionsMartyrs: 'Ss. Pauli Chen Changpin et sociorum, martyrum',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintPaulinaOfTheAgonizingHeartOfJesusVirgin: 'S. Paulinæ a Corde Iesu Agonizanti, virginis',
    saintPaulinusOfNolaBishop: 'S. Paulini Nolani, episcopi',
    saintPaulinusOfTrierBishop: 'S. Paulini Trevirensis, episcopi',
    saintPaulinusOfYorkBishop: 'S. Paulini Eboracensis, episcopi',
    saintPaulIvPope: 'S. Pauli IV, papæ',
    saintPaulLiuHanzouPriestAndMartyr: 'S. Pauli Liu Hanzuo, presbyteri et martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintPaulMikiAndCompanionsMartyrs: 'Ss. Pauli Miki et sociorum, martyrum',
    saintPaulOfTheCrossPriest: 'S. Pauli a Cruce, presbyteri',
    saintPedroCalungsodMartyr: 'S. Petri Calungsod, martyris',
    saintPelagiusMartyr: 'S. Pelagii Cordubæ, martyris',  // Sometimes Cordubæ (of Córdoba) is omited, but there are two saints with the same name, so I would use the patronym with both
    saintPeterCanisiusPriestAndDoctor: 'S. Petri Canisii, presbyteri et Ecclesiæ doctoris',
    saintPeterChanelPriestAndMartyr: 'S. Petri Chanel, presbyteri et martyris',
    saintPeterChrysologusBishopAndDoctor: 'S. Petri Chrysologi, episcopi et Ecclesiæ doctoris',
    saintPeterClaverPriest: 'S. Petri Claver, presbyteri',
    saintPeterDamianBishopAndDoctorOfTheChurch: 'S. Petri Damiani, episcopi et Ecclesiæ doctoris',
    saintPeterJulianEymardPriest: 'S. Petri Iuliani Eymard, presbyteri',
    saintPeterLiuMartyr: 'S. Petri Liu Wenyuan, martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintPeterOfAlcantaraPriest: 'S. Petri de Alcantara, presbyteri',
    saintPeterSanzBishopAndMartyr: 'S. Petri Sanz, episcopi et martyris',
    saintPeterWuMartyr: 'S. Petri Wu, martyris',  // He is one of the Martyr Saints of China; He is one of the 118 companions of Augustine Zhao Rong
    saintPhilipNeriPriest: 'S. Philippi Neri, presbyteri',
    saintPioOfPietrelcinaPriest: 'S. Pii de Pietrelcina, presbyteri',
    saintPirminAbbotAndBishop: 'S. Pirminii, abbatis et episcopi',
    saintPiusVPope: 'S. Pii V, papæ',
    saintPiusXPope: 'S. Pii X, papæ',
    saintPolycarpBishopAndMartyr: 'S. Polycarpi, episcopi et martyris',
    saintPothinusBishopSaintBlandinaVirginAndTheirCompanionsMartyrs: 'Ss. Pothini, episcopi, Blandinæ, virginis, et sociorum, martyrum',
    saintProcopiusAbbot: 'S. Procopii, abbatis',
    saintPubliusBishop: 'S. Publii, episcopi',
    saintQuirinusOfSescia: 'S. Quirini Sisciensis, episcopi',
    saintRabanusMaurusBishop: 'S. Rabani Mauri, episcopi',
    saintRadimBishop: 'S. Radim, episcopi',
    saintRafaelGuizarYValenciaBishop: 'S. Raphaelis Guízar Valencia, episcopi',
    saintRafalKalinowskiPriest: 'S. Raphaelis a sancto Ioseph Kalinowski, presbyteri',  // His religious name was Raphael of Saint Joseph
    saintRafqaRebeccaVirgin: 'S. Rafqa Petræ Choboq Ar-Rayès, virginis',
    saintRaymondOfPenyafortPriest: 'S. Raimundi de Penyafort, presbyteri',
    saintRemigiusBishop: 'S. Remigii, episcopi',
    saintRichardGwynMartyr: 'S. Richardi Gwyn, martyris',  // Anglised name: Richard White3
    saintRichardOfChichesterBishop: 'S. Richardi Cicestriæ, episcopi',  // Or Richard de Wych
    saintRitaOfCascia: 'S. Ritæ de Cascia, religiosæ',
    saintRobertBellarmineBishopAndDoctor: 'S. Roberti Bellarmini, episcopi et Ecclesiæ doctoris',
    saintRocco: 'S. Rochi',  // dupe of saintRoch
    saintRoch: 'S. Rochi',  // Or in Latin: Rochus Monspessulanus
    saintRomualdAbbot: 'S. Romualdi, abbatis',
    saintRoseOfLima: 'S. Rosæ de Lima, virginis',
    saintRoseOfLimaSecondaryPatronessOfThePhilippines: 'S. Rosæ de Lima, virginis et Secondary Patroness of the Philippines',  // TODO: Translate the `Secondary Patroness of the Philippines`
    saintRosePhilippineDuchesneVirgin: 'S. Rosæ Philippinæ Duchesne, virginis',
    saintsAlbanJuliusAndAaronMartyrs: 'Ss. Albani, Iulii et Aaron, martyrum',
    saintsAndrewZorardAndBenedictHermits: 'Ss. Andreæ Zœrardi et Benedicti, eremitarum',
    saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors: 'Ss. Basilii Magni et Gregorii Nazianzeni, episcoporum et Ecclesiæ doctorum',
    saintsBenedyktJanMateuszIsaakAndKrystynMartyrs: 'Ss. Benedicti, Ioannis, Matthæi, Isaac, Christiani, martyrum',  // Also known collectively as: English: the Five Holy Martyrs of Międzyrzecz; Polish: Pięciu Braci Męczenników; Międzyrzecz is in Latin called either Meserici or Messerici or Mezerici
    saintsBorisAndGlebMartyrs: 'Ss. Borisi et Hlibi, martyrum',
    saintsCanuteEricAndOlafMartyrs: 'Ss. Canuti, Erici et Olavi, martyrum',  // Don't confuse Canute (Canute IV of Denmark) with Canute Lavard
    saintsChadAndCeddBishop: 'Ss. Ceddi et Ceaddæ, episcoporum',
    saintsCharlesLwangaAndCompanionsMartyrs: 'Ss. Caroli Lwanga et sociorum, martyrum',
    saintScholasticaVirgin: 'S. Scholasticæ, virginis',
    saintsClementOfOhridAndGorazdBishopsAndCompanions: 'Ss. Clementis Achridensis et Gorazdi, episcoporum, et sociorum',
    saintsConradAndGebhardOfConstanceBishops: 'Ss. Conradi et Gebhardi Constantiensis, episcoporum',
    saintsCorneliusPopeAndCyprianBishopMartyrs: 'Ss. Cornelii, papæ, et Cypriani, episcopi, martyrum',
    saintsCosmasAndDamianMartyrs: 'Ss. Cosmæ et Damiani, martyrum',
    saintsCyrilMonkAndMethodiusBishop: 'Ss. Cyrilli, monachi, et Methodii, episcopi',
    saintSebastianMartyr: 'S. Sebastiani, martyris',
    saintSenanBishop: 'S. Senani, episcopi',
    saintSeverinusOfNoricumMonk: 'S. Severini de Noricum, monachi',  // TODO: Was he not rather an abbot? Note: I am not sure of the `de Noricum` part, as in Latin, he is usually called simply Severinus, however, there are 9 different people with that name in the MR2004, so I would like to keep it
    saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs: 'Ss. Philippi a Iesu de Las Casas, Pauli Miki et sociorum, martyrum',
    saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs: 'Ss. Fructuosi, episcopi, Augurii et Eulogii, diaconorum, martyrum',
    saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs: 'Ss. Gregorii Grassi, Francisci Fogolla et Antonini Fantosati, episcoporum, et sociorum, martyrum',  // They all were one of the Martyr Saints of China; They are some of the 118 companions of Augustine Zhao Rong
    saintsHenryAndCunigunde: 'Ss. Henrici et Cunigundæ',  // English (alt): Cunigunde of Luxembourg or Cunegundes or Cunegunda or Cunegonda; Latin (alt): Cunegundis or Kinigundis
    saintSigismundMartyr: 'S. Sigismundi, martyris',
    saintSimonOfLipnicaPriest: 'S. Simonis de Lipnica, presbyteri',
    saintSixtusIiPopeAndCompanionsMartyrs: 'Ss. Xysti II, papæ, et sociorum, martyrum',
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs: 'Ss. Ioannis de Brébeuf, Isaac Jogues, presbyterorum, et sociorum, martyrum',
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada: 'Ss. Ioannis de Brébeuf, Isaac Jogues, presbyterorum, et sociorum, martyrum et Secondary Patrons of Canada',  // TODO: Translate `Secondary Patrons of Canada`
    saintsJoachimAndAnne: 'Ss. Ioachim et Annæ, parentum B. M. V.',
    saintsJohnFisherBishopAndThomasMoreMartyrs: 'Ss. Ioannis Fisher, episcopi, et Thomæ More, martyrum',
    saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs: 'Ss. Aloisii Versiglia, episcopi, et Callisti Caravario, presbyteri, martyrum',  // They all were one of the Martyr Saints of China; They are some of the 118 companions of Augustine Zhao Rong
    saintsMarcellinusAndPeterMartyrs: 'Ss. Marcellini et Petri, martyrum',
    saintsMargaretClitherowAnneLineAndMargaretWardMartyrs: 'Ss. Margaritæ Clitherow, Annæ Line et Margaritæ Ward, martyrum',
    saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs: 'Ss. Marci Križin, Melchioris Grodziecki et Stephani Pongrácz, presbyterorum et martyrum',
    saintsMichaelGabrielAndRaphaelArchangels: 'Ss. Michaelis, Gabrielis et Raphaelis, archangelorum',
    saintsNereusAndAchilleusMartyrs: 'Ss. Nerei et Achillei, martyrum',
    saintSoledadTorresAcostaVirgin: 'S. Mariæ a Solitudine Torres Acosta, virginis',
    saintsPedroBautistaPaulMikiAndCompanionsMartyrs: 'Ss. Petri Baptistæ Blázquez, Pauli Miki et sociorum, martyrum',
    saintsPerpetuaAndFelicityMartyrs: 'Ss. Perpetuæ et Felicitatis, martyrum',
    saintsPhilipAndJamesApostles: 'Ss. Philippi et Iacobi, apostolorum',
    saintsPhilipEvansAndJohnLloydPriestsAndMartyrs: 'Ss. Philippi Evans et Ioannis Lloyd, presbyterorum et martyrum',  // They are among the Forty Martyrs of England and Wales
    saintsPontianPopeAndHippolytusPriestMartyrs: 'Ss. Pontiani, papæ, et Hippolyti, presbyteri, martyrum',
    saintSpyridon: 'S. Spyridonis, episcopi',
    saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs: 'Ss. Rochi González, Alfonsi Rodríguez et Ioannis del Castillo, presbyterorum et martyrum',
    saintsRupertAndVirgiliusOfSalzburgBishops: 'Ss. Ruperti et Virgilii Salisburgensis, episcoporum',  // Or Vergilius of Salzburg or Virgilius or Feirgil or Fergal
    saintsSimonAndJudeApostles: 'Ss. Simonis et Iudæ, apostolorum',
    saintStanislausBishopAndMartyr: 'S. Stanislai, episcopi et martyris',
    saintStanislausKazimierczykPriest: 'S. Stanislai Kazimierczyk, presbyteri',
    saintStanislausKostkaReligious: 'S. Stanislai Kostka, religiosi',  // S. Stanislai Kostka, religiosi
    saintStephenOfHungary: 'S. Stephani Hungariæ',
    saintStephenTheFirstMartyr: 'S. Stephani, protomartyris',
    saintsTimothyAndTitusBishops: 'Ss. Timothei et Titi, episcoporum',
    saintSunnivaVirginAndMartyr: 'S. Sunnivæ, virginis et martyris',
    saintSwithunBishop: 'S. Swithuni, episcopi',
    saintSylvesterIPope: 'S. Silvestri I, papæ',
    saintTeiloBishop: 'S. Teliavi, episcopi',
    saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr: 'S. Teresiæ Benedictæ a Cruce, virginis et martyris',
    saintTeresaOfCalcuttaReligious: 'S. Teresiæ de Calcutta, religiosi',  // Or Mater Teresia Calcuttensis
    saintTeresaOfJesusJornetEIbarsVirgin: 'S. Teresiæ a Iesu Jornet Ibars, virginis',
    saintTeresaOfJesusVirginAndDoctorOfTheChurch: 'S. Teresiæ a Iesu, virginis et Ecclesiæ doctoris',
    saintTeresaOfLosAndesVirgin: 'S. Teresiæ a Iesu de Los Andes, virginis',  // Latin: usually the `de Los Andes` is quoted, but I (@tukusejssirs) somewhat dislike the quotes
    saintTheodoreOfCanterburyBishop: 'S. Theodori Cantuariensis, episcopi',
    saintTheodosiusOfTheCavesAbbot: 'S. Theodosii Kioviensis, abbatis',
    saintTheotoniusPriest: 'S. Theotonii, presbyteri',  // Latin (alt): Theotonii Conimbricensis; TODO: He was a bishop, or not?
    saintThereseOfTheChildJesusVirginAndDoctor: 'S. Teresiæ a Iesu Infante, virginis et Ecclesiæ doctoris',
    saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance: 'S. Teresiæ a Iesu Infante, virginis, Ecclesiæ doctori et Secondary Patroness of France',  // TODO: Translate `Secondary Patroness of France`
    saintThomasAquinasPriestAndDoctor: 'S. Thomæ de Aquino, presbyteri et Ecclesiæ doctoris',
    saintThomasBecketBishopAndMartyr: 'S. Thomæ Becket, episcopi et martyris',
    saintThomasOfVillanovaBishop: 'S. Thomæ a Villanova, episcopi',
    saintThomasRokuzayemonPriestAndCompanionsMartyrs: 'Ss. Thomæ Hioji Rokuzayemon Nishi, presbyteri, et sociorum, martyrum',  // He is one of the 16 Martyrs of Japan; TODO: Possible dupe with saintLawrenceRuizAndCompanionsMartyrs
    saintThomasTheApostle: 'S. Thomæ, apostoli',
    saintThorfinnBishop: 'S. Thorfinni, episcopi',
    saintThorlacBishop: 'S. Thorlaci, episcopi',
    saintTuribiusOfMogrovejoBishop: 'S. Turibii de Mogrovejo, episcopi',
    saintUlrichOfAugsburg: 'S. Udalrici, episcopi',
    saintUrsulaAndCompanionsVirginsAndMartyrs: 'Ss. Ursulæ Coloniensis et sociorum, virginum et martyrum',
    saintUrsulaLedochowskaVirgin: 'S. Ursulæ Ledochowska, virginis',
    saintValentineOfRaetiaBishop: 'S. Valentini Rhætiæ, episcopi',
    saintVincentDeaconAndMartyr: 'S. Vincentii, diaconi et martyris',
    saintVincentDePaulPriest: 'S. Vincentii de Paul, presbyteri',
    saintVincentFerrerPriest: 'S. Vincentii Ferrer, presbyteri',
    saintVincentPallottiPriest: 'S. Vincentii Pallotti, presbyteri',
    saintVitusMartyr: 'S. Viti, martyris',
    saintVladimirTheGreat: 'S. Vladimiri I Magni',  // AFAIK, the MR2004 lists him simply as Vladimirus
    saintWalburgaAbbess: 'S. Walburgis, abatissæ',
    saintWenceslausMartyr: 'S. Wenceslai, martyris',
    saintWendelinAbbot: 'S. Wendelini, abbatis',
    saintWilfridBishop: 'S. Wilfridi, episcopi',
    saintWillibaldBishop: 'S. Willibaldi, episcopi',
    saintWillibrordBishop: 'S. Willibrordi, episcopi',
    saintWinefrideVirgin: 'S. Wenefredæ, virginis',  // TODO: Was she not an abbess and martyr?
    saintWolfgangBishop: 'S. Wolfgangi, episcopi',
    saintWolfgangOfRegensburgBishop: 'S. Wolfgangi Ratisbonensis, episcopi',
    saintWulstanBishop: 'S. Wulstani, episcopi',
    saintZdislava: 'S. Zdislavæ',
    saintZdzislawa: 'S. Zdislavæ',  // dupe of saintZdislava
    saintZygmuntGorazdowskiPriest: 'S. Sigismundi Gorazdowski, presbyteri',
    saintZygmuntSzczesnyFelinskiBishop: 'S. Sigismundi Felicis Feliński, episcopi',
    S. Sigismundi Szczęsny Feliński
    santoNinoInfantJesus: 'S. Pueri Iesu de Cæbua',  // TODO: Or is it rather `Ss.mi Nominis Pueri Iesu de Cæbua`? (src: https://cappellagregoriana.files.wordpress.com/2018/01/gozos-del-sr-sto-nic3b1o-de-cebc3ba-alt.pdf); Or even `S. Pueri de Cæbua`? (src: https://www.scribd.com/document/253202783/Anamnesis-1-10-Extra-III)
    sevenHolyFoundersOfTheServiteOrder: 'Ss. Septem Fundatorum Ordinis Servorum B. M. V.',
    sevenMartyredNunsFromTheFranciscanMissionariesOfMary: 'Ss. septem sorores ex Instituto Franciscanum Missionariarum Mariæ, martyrum',  // They all were one of the Martyr Saints of China; They are some of the 118 companions of Augustine Zhao Rong
    shipwreckOfSaintPaulApostle: 'Naufragii S. Pauli, apostoli',
    // shroveMonday: 'Shrove Monday',  // AFAIK (@tukusejssirs), there is no Shrovetide in `cal1969` (and never was); actually, there is no Shrovetide (and never was); there was Pre-Lenten Time (Septuagesima in Latin, for it started 70 days before Easter) in calendars before `cal1969`
    // shroveTuesday: 'Shrove Tuesday',  // AFAIK (@tukusejssirs), there is no Shrovetide in `cal1969` (and never was); actually, there is no Shrovetide (and never was); there was Pre-Lenten Time (Septuagesima in Latin, for it started 70 days before Easter) in calendars before `cal1969`
    stDunstanArchbishopOfCanterbury: 'S. Dunstani Cantuariensis, episcopi',
    sundayOfTheWordOfGod: 'Dominica Verbi Dei',
    theBeheadingOfSaintJohnTheBaptistMartyr: 'In Passione S. Ioannis Baptistæ, martyris',
    theEnglishMartyrs: 'Ss. Martyrum Angliæ',
    theFiveWoundsOfTheLord: 'Ss.mi D. N. I. C. quinque vulneribus',
    theMostHolyNameOfJesus: 'Ss.mi Nominis Iesu',
    theSixWelshMartyrsAndCompanions: 'Ss. Sex Matyrum Cambriæ et sociorum',
    transferOfTheRelicsOfSaintStephen: 'In Translationis de reliquiis S. Stephani Hungariæ',  // TODO: This must proofread, as I could not find this one online
    vietnameseMartyrs: 'Ss. Martyrum Vietnamicæ',
    visitationOfTheBlessedVirginMary: 'In Visitatione B. Mariæ Virginis',
    waitangiDay: 'Dies Nationalis Novæ Zelandiæ',  // TODO: This must proofread, as I could not find this one online ... https://la.wikipedia.org/wiki/6_Februarii#Festa_et_Feriae
  },
} as RomcalLocale;
