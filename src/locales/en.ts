import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
<<<<<<< HEAD
    season: 'Advent',
    weekday: '{{day}} of the {{week}} week of Advent',
    sunday: '{{week}} Sunday of Advent',
=======
    season: 'Advent Season',  // us; Was: `Advent`; src (see the book spine): https://catholicbookpublishing.com/product/105
    feria: '{{day}} of the {{week}} week of Advent',
    sunday: '{{week}} Sunday of Advent',  // us, gb
>>>>>>> b5b8458... Localisation tidy-up
  },
  christmastide: {
    season: 'Christmas Season',  // us; Was: `Christmas`; src (see the book spine): https://catholicbookpublishing.com/product/105
    day: '{{day}} of Christmastide',
    octave: '{{count}} Day within the Octave of the Nativity of the Lord',  // us; Was `{{count}} day in the Octave of Christmas`
    sunday: '{{count}} Sunday of Christmas',
  },
  epiphany: {
    season: 'Epiphany',  // TODO: I don’t think there is such a season, however, I understand this might be here only to ease the implementation. OTOH, I haven’t seen a country that would use `{{day}} before Epiphany` (but I have seen `after`).
    before: '{{day}} before Epiphany',  // TODO: I suggest that we should use `christmastide.day` instead, or create a romcal global option as a switch whether romcal should use `christmastide.day` or `epiphany.before`
    after: '{{day}} after Epiphany',  // us; Was: `{{day}} after Epiphany`
  },
  ordinaryTime: {
<<<<<<< HEAD
    season: 'Ordinary Time',
    weekday: '{{day}} of the {{week}} week of Ordinary Time',
    sunday: '{{week}} Sunday of Ordinary Time',
  },
  lent: {
    season: 'Lent',
    weekday: '{{day}} of the {{week}} week of Lent',
    sunday: '{{week}} Sunday of Lent',
    dayAfterAshWed: '{{day}} after Ash Wednesday',
=======
    season: 'Ordinary Time',  // us
    feria: '{{day}} of the {{week}} week of Ordinary Time',  // us: should it be `week in OT` or `week of OT`? I presume the former is used in the US
    sunday: '{{week}} Sunday in Ordinary Time',  // us; Was: `{{week}} Sunday of Ordinary Time`, gb
  },
  lent: {
    season: 'Lenten Season',  // us; Was: `Lent`; src (see the book spine): https://catholicbookpublishing.com/product/105
    feria: '{{day}} of the {{week}} week of Lent',
    sunday: '{{week}} Sunday of Lent',  // us, gb
    dayAfterAshWed: '{{day}} after Ash Wednesday',  // us
>>>>>>> b5b8458... Localisation tidy-up
  },
  holyWeek: {
    season: 'Holy Week',
    weekday: '{{day}} of Holy Week',
  },
  paschalTriduum: {
    season: 'Paschal Triduum',
  },
  eastertide: {
<<<<<<< HEAD
    season: 'Eastertide',
    weekday: '{{day}} of the {{week}} week of Easter',
    sunday: '{{week}} Sunday of Easter',
    octave: 'Easter {{day}}',
=======
    season: 'Easter Season',  // us; Was: `Eastertide`; src (see the book spine): https://catholicbookpublishing.com/product/105
    feria: '{{day}} of the {{week}} week of Easter',
    sunday: '{{week}} Sunday of Easter',  // us
    octave: '{{day}} within the Octave of Easter',  // us; Was: `Easter {{day}}`
>>>>>>> b5b8458... Localisation tidy-up
  },
  liturgicalColors: {
    BLACK: 'black',
    GOLD: 'gold',
    GREEN: 'green',
    PURPLE: 'purple',
    RED: 'red',
    ROSE: 'rose',
    WHITE: 'white',
  },
  ranks: {
    SOLEMNITY: 'Solemnity',
    SUNDAY: 'Sunday',
    TRIDUUM: 'Triduum',
    HOLY_WEEK: 'Holy Week',
    FEAST: 'Feast',
    MEMORIAL: 'Memorial',
    OPT_MEMORIAL: 'Optional Memorial',
    COMMEMORATION: 'Commemoration',
    WEEKDAY: 'Weekday',
  },
  celebrations: {
    allSaints: 'All Saints',  // us
    annunciation: 'Annunciation of the Lord',  // us, gb
    ascension: 'Ascension of the Lord',  // us, gb
    ashWednesday: 'Ash Wednesday',  // us, gb
    assumption: 'Assumption of the Blessed Virgin Mary',  // us
    baptismOfTheLord: 'Baptism of the Lord',  // us, gb
    birthOfJohnTheBaptist: 'Nativity of Saint John the Baptist',  // us, gb
    christmas: 'Nativity of the Lord',  // us; Was: `Christmas`
    christTheKing: 'Our Lord Jesus Christ, King of the Universe',  // us; Was: `Christ the King`
    corpusChristi: 'Most Holy Body and Blood of Christ',  // us, gb in en-GB
    divineMercySunday: 'Sunday of Divine Mercy',  // us; gb
    easter: 'Easter Sunday of the Resurrection of the Lord',  // us, gb
    epiphany: 'Epiphany of the Lord',  // us, gb
    goodFriday: 'Good Friday',  // us, gb
    holyFamily: 'Holy Family of Jesus, Mary and Joseph',  // us; Was: `Holy Family`
    holySaturday: 'Holy Saturday/Easter Vigil',  // us, gb
    holyThursday: 'Holy Thursday',  // us, gb in en-GB
    immaculateConception: 'Immaculate Conception of the Blessed Virgin Mary',  // us
    immaculateHeartOfMary: 'Immaculate Heart of the Blessed Virgin Mary',  // us, gb
    josephHusbandOfMary: 'Saint Joseph, Spouse of the Blessed Virgin Mary',  // us, gb
    maryMotherOfGod: 'Mary, the Holy Mother of God',  // us, gb
    palmSunday: 'Palm Sunday of the Passion of the Lord',  // us; Was: `Palm Sunday`, gb
    pentecostSunday: 'Pentecost Sunday',  // us, gb
    peterAndPaulApostles: 'Saints Peter and Paul, Apostles',  // us, gb
    presentationOfTheLord: 'Presentation of the Lord',  // us, gb
    sacredHeartOfJesus: 'Most Sacred Heart of Jesus',  // us, gb
    theExaltationOfTheHolyCross: 'Exaltation of the Holy Cross',  // us
    transfiguration: 'Transfiguration of the Lord',  // us
    trinitySunday: 'Most Holy Trinity',  // us, gb
  },
  sanctoral: {
    '205BlessedMartyrsOfJapan': '205 Blessed Martyrs of Japan',
    allSaintsOfIreland: 'All Saints of Ireland',  // ireland
    allSaintsOfWales: 'All Saints of Wales',  // gb (wales)
    allSouls: 'Commemoration of All the Faithful Departed',  // us; Was: `All Souls`
    birthOfTheBlessedVirginMary: 'Nativity of the Blessed Virgin Mary',  // us
    blessedAdolphKolpingPriest: 'Blessed Adolph Kolping, Priest',
    blessedAlbertinaBerkenbrockVirginAndMartyr: 'Blessed Albertina Berkenbrock, Virgin and Martyr',
    blessedAloysiusStepinacBishopAndMartyr: 'Blessed Aloysius Stepinac, Bishop and Martyr',
    blessedAndreGrassetPriestAndMartyr: 'Blessed Andre Grasset, Priest and Martyr',
    blessedAnielaSalawaVirgin: 'Blessed Aniela Salawa, Virgin',
    blessedAntoniNowowiejskiBishopAndCompanionsMartyrs: 'Blessed Antoni Nowowiejski, Bishop, and Companions, Martyrs',
    blessedAugustinKazoticBishopAndMartyr: 'Blessed Augustin Kazotic, Bishop and Martyr',
    blessedBartholomewOfTheMartyrsBishop: 'Blessed Bartholomew of The Martyrs, Bishop',
    blessedBartolomeLaurelReligiousAndMartyr: 'Blessed Bartolome Laurel, Religious and Martyr',
    blessedBogumilBishop: 'Blessed Bogumil, Bishop',
    blessedBoleslawaMariaLamentVirgin: 'Blessed Boleslawa Maria Lament, Virgin',
    blessedBronislawaVirgin: 'Blessed Bronislawa, Virgin',
    blessedBronislawMarkiewiczPriest: 'Blessed Bronislaw Markiewicz, Priest',
    blessedCarlosManuelRodriguez: 'Blessed Carlos Manuel Rodriguez',
    blessedCatherineOfSaintAugustineVirgin: 'Blessed Catherine of Saint Augustine, Virgin',
    blessedCeferinoNamuncura: 'Blessed Ceferino Namuncura',
    blessedCeslausAndSaintHyacinthPriests: 'Blessed Ceslaus and Saint Hyacinth, Priests',
    blessedCharlesSpinolaPriestAndMartyr: 'Blessed Charles Spinola, Priest and Martyr',
    blessedColumbaMarmionPriest: 'Blessed Columba Marmion, Priest',  // ireland
    blessedCzeslawPriest: 'Blessed Czeslaw, Priest',
    blessedDinaBelangerVirgin: 'Blessed Dina Belanger, Virgin',
    blessedDominicOfTheMotherOfGodDominicBarberiPriest: 'Blessed Dominic of the Mother of God Barberi, Priest',  // gb
    blessedEdmundBojanowski: 'Blessed Edmund Bojanowski',
    blessedEdmundIgnatiusRiceReligious: 'Blessed Edmund Rice, Religious',  // ireland
    blessedElisabethHesselbaldVirgin: 'Blessed Elisabeth Hesselbald, Virgin',
    blessedEmilieTavernierGamelinReligious: 'Blessed Emilie Tavernier Gamelin, Religious',
    blessedFredericJanssoonePriest: 'Blessed Frederic Janssoone, Priest',
    blessedGeorgeMatulewiczBishop: 'Blessed George Matulewicz, Bishop',
    blessedGisela: 'Blessed Gisela',
    blessedGoncaloDeAmarantePriest: 'Blessed Goncalo de Amarante, Priest',
    blessedGoncaloDeLagosPriest: 'Blessed Goncalo de Lagos, Priest',
    blessedGraziaOfCattaro: 'Blessed Grazia of Cattaro',
    blessedHemmingBishop: 'Blessed Hemming, Bishop',
    blessedHenrySusoPriest: 'Blessed Henry Suso, Priest',
    blessedHonoratKozminskiPriest: 'Blessed Honorat Kozminski, Priest',
    blessedHroznataMartyr: 'Blessed Hroznata, Martyr',
    blessedInacioDeAzevedoPriestAndCompanionsMartyrs: 'Blessed Inacio de Azevedo, Priest, and Companions, Martyrs',
    blessedInnocentXiPope: 'Blessed Innocent XI, Pope',
    blessedIrishMartyrs: 'Irish Martyrs',  // ireland
    blessedIstvanSandorMartyr: 'Blessed István Sándor, Martyr',
    blessedIvanMerz: 'Blessed Ivan Merz',
    blessedJacintaAndFranciscoMarto: 'Blessed Jacinta and Francisco Marto',
    blessedJakubStrzemieBishop: 'Blessed Jakub Strzemie, Bishop',
    blessedJerzyMatulewiczBishop: 'Blessed Jerzy Matulewicz, Bishop',
    blessedJoanOfPortugalVirgin: 'Blessed Joan of Portugal, Virgin',
    blessedJohnBeyzymPriest: 'Blessed John Beyzym, Priest',
    blessedJohnHenryNewmanPriest: 'Blessed John Henry Newman, Priest',  // gb, ireland
    blessedJohnMartinMoyePriest: 'Blessed John Martin Moye, Priest',
    blessedJohnNewmanBishop: 'Blessed John Newman, Bishop',
    blessedJolantaReligious: 'Blessed Jolanta, Religious',
    blessedJosephVazPriest: 'Blessed Joseph Vaz, Priest',
    blessedJuniperoSerraPriest: 'Saint Junípero Serra, Priest',  // us
    blessedKarlOfAustria: 'Blessed Karl of Austria',
    blessedKarolinaKozkownaVirginAndMartyr: 'Blessed Karolina Kozkowna, Virgin and Martyr',
    blessedKuriakoseEliasChavaraPriest: 'Blessed Kuriakose Elias Chavara, Priest',
    blessedLauraVicunaVirgin: 'Blessed Laura Vicuna, Virgin',
    blessedLeonidFeodorovPriestAndMartyr: 'Blessed Leonid Feodorov, Priest and Martyr',
    blessedLouisZephirinMoreauBishop: 'Blessed Louis Zephirin Moreau, Bishop',
    blessedMarcelCalloMartyr: 'Blessed Marcel Callo, Martyr',
    blessedMarcelinaDarowskaReligious: 'Blessed Marcelina Darowska, Religious',
    blessedMariaAdeodataPisaniVirgin: 'Blessed Maria Adeodata Pisani, Virgin',
    blessedMariaAssuntaPallottaVirgin: 'Blessed Maria Assunta Pallotta, Virgin',
    blessedMariaDoloresRodriguezSopenaVirgin: 'Blessed Maria Dolores Rodriguez Sopena, Virgin',
    blessedMariaStellaAndCompanionsVirginsAndMartyrs: 'Blessed Maria Stella and Companions, Virgins and Martyrs',
    blessedMariaTeresaLedochowskaVirgin: 'Blessed Maria Teresa Ledochowska, Virgin',
    blessedMariaTheresaChiramelVirgin: 'Blessed Maria Theresa Chiramel, Virgin',
    blessedMarieAnneBlondinVirgin: 'Blessed Marie Anne Blondin, Virgin',
    blessedMarieLeonieParadisVirgin: 'Blessed Marie Leonie Paradis, Virgin',
    blessedMarieRoseDurocherVirgin: 'Blessed Marie Rose Durocher, Virgin',  // us
    blessedMaryAngelaTruszkowskaVirgin: 'Blessed Mary Angela Truszkowska, Virgin',
    blessedMaryOfJesusCrucifiedPetkovicVirgin: 'Blessed Mary of Jesus Crucified Petkovic, Virgin',
    blessedMaryOfJesusTheGoodShepherdVirgin: 'Blessed Mary of Jesus The Good Shepherd, Virgin',
    blessedMauriceTornayPriestAndMartyr: 'Blessed Maurice Tornay, Priest and Martyr',
    blessedMichaelKozalBishopAndMartyr: 'Blessed Michael Kozal, Bishop and Martyr',
    blessedMiguelAgustinProPriestAndMartyr: 'Blessed Miguel Agustin Pro, Priest and Martyr',  // us
    blessedNazariaIgnaciaMarchReligious: 'Blessed Nazaria Ignacia March, Religious',
    blessedNazjuFalzon: 'Blessed Nazju Falzon',
    blessedNicolasStenoBishop: 'Blessed Nicolas Steno, Bishop',
    blessedOdoricOfPordenonePriest: 'Blessed Odoric of Pordenone, Priest',
    blessedOleksiyZarytskyiPriestAndMartyr: 'Blessed Oleksiy Zarytskyi, Priest and Martyr',
    blessedOsannaOfCattaroVirgin: 'Blessed Osanna of Cattaro, Virgin',
    blessedPeterKibePriestAndCompanionsMartyrs: 'Blessed Peter Kibe, Priest, and Companions, Martyrs',
    blessedPeterToRotMartyr: 'Blessed Peter To Rot, Martyr',  // australia
    blessedPiusIxPope: 'Blessed Pius IX, Pope',
    blessedRafalChylinskiPriest: 'Blessed Rafal Chylinski, Priest',
    blessedSalomeVirgin: 'Blessed Salome, Virgin',
    blessedSanchaAndMafaldaVirgins: 'Blessed Sancha and Mafalda, Virgins',
    blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs: 'Blesseds Andre de Soveral and Ambrosio Francisco Ferro, Priests and Martyrs',
    blessedSaraSalkahaziVirginAndMartyr: 'Blessed Sara Salkahazi, Virgin and Martyr',
    blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs: 'Blesseds Carlos Spinola and Jeronimo de Angelis, Priests and Martyrs',
    blessedSebastianDeAparicioReligious: 'Blessed Sebastian de Aparicio, Religious',
    blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs: 'Blesseds Nykyta Budka and Vasyl Velychkowsky, Bishops and Martyrs',
    blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs: 'Blesseds Pedro Zuniga And Luis Flores, Priests and Martyrs',
    blessedTheodoreRomzhaBishopAndMartyr: 'Blessed Theodore Romzha, Bishop and Martyr',
    blessedTheresaOfPortugalReligious: 'Blessed Theresa of Portugal, Religious',
    blessedVilmosAporBishopAndMartyr: 'Blessed Vilmos Apor, Bishop and Martyr',
    blessedVincentKadlubekBishop: 'Blessed Vincent Kadlubek, Bishop',
    blessedVincentLewoniukAndCompanionsMartyrsOfPratulin: 'Blessed Vincent Lewoniuk and Companions, Martyrs Of Pratulin',
    blessedVladimirGhikaPriestAndMartyr: 'Blessed Vladimir Ghika, Priest and Martyr',
    blessedWladyslawBladzinskiPriestAndCompanionsMartyrs: 'Blessed Wladyslaw Bladzinski, Priest, and Companions, Martyrs',
    blessedWladyslawOfGielniowPriest: 'Blessed Wladyslaw Of Gielniow, Priest',
    blessedZdenkaSchelingovaVirginAndMartyr: 'Blessed Zdenka Schelingova, Virgin and Martyr',
    chairOfSaintPeterApostle: 'Chair of Saint Peter the Apostle',  // us, gb
    conversionOfSaintPaulApostle: 'Conversion of Saint Paul the Apostle',  // us, gb
    dedicationOfAParticularChurch: 'Dedication of a particular Church',
    dedicationOfTheBasilicaOfSaintMaryMajor: 'Dedication of the Basilica of Saint Mary Major',  // us
    dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles: 'Dedication of the Basilicas of Saints Peter and Paul, Apostles',  // us
    dedicationOfTheLateranBasilica: 'Dedication of the Lateran Basilica',  // us
    discoveryOfTheHiddenChristians: 'Discovery of The Hidden Christians',
    findingOfTheHolyCross: 'Finding of The Holy Cross',
    firstMartyrsOfTheChurchOfRome: 'First Martyrs of the Holy Roman Church',  // us, gb
    guardianAngelOfPortugal: 'Guardian Angel of Portugal',
    guardianAngels: 'Holy Guardian Angels',  // us
    holyInnocentsMartyrs: 'Holy Innocents, Martyrs',  // us
    holyNameOfTheBlessedVirginMary: 'Most Holy Name of Mary',  // us
    hungarianSaintsAndBlesseds: 'Hungarian Saints and Blesseds',
    immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines: 'Immaculate Conception of the Blessed Virgin Mary, Principal Patroness of the Philippines',  // us
    maryMotherOfTheChurch: 'Blessed Virgin Mary, Mother of the Church',  // us, gb
    ourLadyHelpOfChristians: 'Our Lady, Help of Christians',  // nz
    ourLadyMediatrix: 'Our Lady, Mediatrix',
    ourLadyMediatrixOfAllGrace: 'Our Lady, Mediatrix of All Grace',
    ourLadyMotherOfChristianUnity: 'Our Lady, Mother of Christian Unity',
    ourLadyMotherOfDivineProvidencePatronessOfPuertoRico: 'Our Lady, Mother of Divine Providence, Patroness of Puerto Rico',
    ourLadyMotherOfMercy: 'Our Lady, Mother of Mercy',
    ourLadyOfAparecidaPatronessOfBrazil: 'Our Lady of Aparecida (Nossa Senhora Aparecida), Patroness of Brazil',
    ourLadyOfBethlehem: 'Our Lady of Bethlehem',
    ourLadyOfBistrica: 'Our Lady of Bistrica',
    ourLadyOfChina: 'Our Lady of China',
    ourLadyOfCzestochowa: 'Our Lady of Czestochowa',
    ourLadyOfFatima: 'Our Lady of Fatima',  // us, gb
    ourLadyOfGoodCounsel: 'Our Lady of Good Counsel',
    ourLadyOfGuadalupe: 'Our Lady of Guadalupe',  // us
    ourLadyOfGuadalupeCelestialPatronessOfThePhilippines: 'Our Lady of Guadalupe, Celestial Patroness of the Philippines',  // us, but not in us
    ourLadyOfHungary: 'Our Lady of Hungary',
    ourLadyOfItati: 'Our Lady of Itati',
    ourLadyOfKnock: 'Our Lady of Knock',  // ireland
    ourLadyOfLanka: 'Our Lady of Lanka',
    ourLadyOfLebanon: 'Our Lady of Lebanon',
    ourLadyOfLoreto: 'Our Lady of Loreto',  // us
    ourLadyOfLourdes: 'Our Lady of Lourdes',  // us, gb
    ourLadyOfLujanPatronessOfArgentina: 'Our Lady of Luján, Patroness of Argentina',
    ourLadyOfMadhu: 'Our Lady of Madhu',
    ourLadyOfMercy: 'Our Lady of Mercy',
    ourLadyOfMountCarmel: 'Our Lady of Mount Carmel',  // us, gb
    ourLadyOfMountCarmelMotherAndQueenOfChile: 'Our Lady of Mount Carmel, Mother and Queen of Chile',  // us
    ourLadyOfPeace: 'Our Lady of Peace',
    ourLadyOfPerpetualHelp: 'Our Lady of Perpetual Help',
    ourLadyOfRefuge: 'Our Lady of Refuge',
    ourLadyOfSorrows: 'Our Lady of Sorrows',  // us
    ourLadyOfTheGateOfDawn: 'Our Lady of the Gate of Dawn',
    ourLadyOfThePillar: 'Our Lady of the Pillar',
    ourLadyOfTheRosary: 'Our Lady of the Rosary',  // us
    ourLadyOfTheValley: 'Our Lady of the Valley',
    ourLadyOfVladimir: 'Our Lady of Vladimir',
    ourLadyOfWalsingham: 'Our Lady of Walsingham',  // us
    ourLadyQueenOfPeace: 'Our Lady, Queen of Peace',
    ourLadyQueenOfPoland: 'Our Lady, Queen of Poland',
    ourLordJesusChristTheEternalHighPriest: 'Our Lord Jesus Christ, the Eternal High Priest',  // gb
    ourLordOfMiracles: 'Our Lord of Miracles',
    presentationOfTheBlessedVirginMary: 'Presentation of the Blessed Virgin Mary',  // us
    queenshipOfBlessedVirginMary: 'Queenship of the Blessed Virgin Mary',  // us
    saintAdalbertBishopAndMartyr: 'Saint Adalbert, Bishop and Martyr',  // us, gb
    saintAelredOfRievaulx: 'Saint Aelred of Rievaulx, abbot',  // gb
    saintAengusOengusBishopAndAbbot: 'Saint Aengus, Bishop and Abbot',  // ireland
    saintAgathaVirginAndMartyr: 'Saint Agatha, Virgin and Martyr',  // us, gb
    saintAgnesOfBohemiaVirgin: 'Saint Agnes of Bohemia, Virgin',
    saintAgnesTsaoKouYingMartyr: 'Saint Agnes Cao Guiying, Martyr',
    saintAgnesVirginAndMartyr: 'Saint Agnes, Virgin and Martyr',  // us, gb
    saintAidanBishop: 'Saint Aidan, Bishop',  // ireland
    saintAidanBishopAndTheSaintsOfLindisfarne: 'Saint Aidan, Bishop, and the Saints of Lindisfarne',  // gb
    saintAidanOfLindisfarneBishopAndMissionary: 'Saint Aidan of Lindisfarne, Bishop and Missionary',  // ireland
    saintAilbeBishop: 'Saint Ailbe, Bishop',  // ireland
    saintAlbanMartyr: 'Saint Alban, Martyr',
    saintAlbericCrescitelliPriestAndMartyr: 'Saint Alberic Crescitelli, Priest and Martyr',
    saintAlbertChmielowskiReligious: 'Saint Albert Chmielowski, Religious',
    saintAlbertoHurtadoPriest: 'Saint Alberto Hurtado, Priest',
    saintAlbertTheGreatBishopAndDoctor: 'Saint Albert the Great, Bishop and Doctor of the Church',  // us
    saintAloysiusGonzagaReligious: 'Saint Aloysius Gonzaga, Religious',  // us
    saintAlphonsaOfTheImmaculateConceptionVirgin: 'Saint Alphonsa of The Immaculate Conception, Virgin',
    saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch: 'Saint Alphonsus Liguori, Bishop and Doctor of the Church',  // us
    saintAmandMissionary: 'Saint Amand, Missionary',
    saintAmbroseBishopAndDoctor: 'Saint Ambrose, Bishop and Doctor of the Church',  // us
    saintAndreBessetteReligious: 'Saint André Bessette, Religious',  // us
    saintAndrewBobolaPriestAndMartyr: 'Saint Andrew Bobola, Priest and Martyr',
    saintAndrewDungLacAndCompanionsMartyrs: 'Saint Andrew Dũng-Lạc, Priest, and Companions, Martyrs',  // us
    saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs: 'Saint Andrew Kim Tae-gŏn, Priest, and Paul Chŏng Ha-sang, and Companions, Martyrs',  // us
    saintAndrewTheApostle: 'Saint Andrew, Apostle',  // us, gb, scotland
    saintAndrewTheApostlePatronOfRussia: 'Saint Andrew, Apostle and Patron of Russia',  // us, but not in us
    saintAngelaMericiVirgin: 'Saint Angela Merici, Virgin',  // us, gb
    saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary: 'Saints Anne, Patron of Quebec, and Joachim, Parents of the Blessed Virgin Mary',  // us, but not in us
    saintAnnoIiBishop: 'Saint Anno II, Bishop',
    saintAnselmOfCanterburyBishopAndDoctorOfTheChurch: 'Saint Anselm, Bishop and Doctor of the Church',  // us; Was: `Saint Anselm of Canterbury, Bishop and Doctor of the Church`, gb
    saintAnsgarBishop: 'Saint Ansgar, Bishop',  // us, gb
    saintAnthonyMaryClaretBishop: 'Saint Anthony Mary Claret, Bishop',  // us
    saintAnthonyOfEgyptAbbot: 'Saint Anthony, Abbot',  // us; Was: Saint Anthony of Egypt, Abbot, gb
    saintAnthonyOfLisbonPriestAndDoctorOfTheChurch: 'Saint Anthony of Lisbon, Priest and Doctor of The Church',
    saintAnthonyOfPaduaPriestAndDoctor: 'Saint Anthony of Padua, Priest and Doctor of the Church',  // us, gb
    saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest: 'Saint Anthony of Saint Anne Galvao (Frei Galvao), Priest',
    saintAnthonyOfTheCavesMonk: 'Saint Anthony of The Caves, Monk',
    saintAnthonyZaccariaPriest: 'Saint Anthony Zaccaria, Priest',  // us
    saintApollinaris: 'Saint Apollinaris, Bishop and Martyr',  // us, gb
    saintAsaphBishop: 'Saint Asaph, Bishop',  // gb (wales)
    saintAsicusBishop: 'Saint Asicus, Bishop',  // ireland
    saintAthanasiusBishopAndDoctor: 'Saint Athanasius, Bishop and Doctor of the Church',  // us
    saintAttractaVirgin: 'Saint Attracta, Virgin',  // ireland
    saintAugustineOfCanterburyBishop: 'Saint Augustine of Canterbury, Bishop',  // us, gb
    saintAugustineOfHippoBishopAndDoctorOfTheChurch: 'Saint Augustine, Bishop and Doctor of the Church',  // us; Was: `Saint Augustine of Hippo, Bishop and Doctor of the Church`
    saintAugustineZhaoRongPriestAndCompanionsMartyrs: 'Saint Augustine Zhao Rong, Priest, and Companions, Martyrs',  // us, gb
    saintAugustineZhaoRongPriestAndMartyr: 'Saint Augustine Zhao Rong, Priest and Martyr',  // us, but not in us
    saintBarbaraVirginAndMartyr: 'Saint Barbara, Virgin and Martyr',
    saintBarnabasTheApostle: 'Saint Barnabas, Apostle',  // us, gb
    saintBartholomewTheApostle: 'Saint Bartholomew, Apostle',  // us
    saintBeatriceOfSilvaVirgin: 'Saint Beatrice of Silva, Virgin',
    saintBedeTheVenerablePriestAndDoctor: 'Saint Bede the Venerable, Priest and Doctor of the Church',  // us
    saintBenedictOfNursiaAbbot: 'Saint Benedict, Abbot',  // us; Was: `Saint Benedict of Nursia, Abbot, Patron of Europe`, gb, scotland
    saintBennoOfMeissenBishop: 'Saint Benno of Meissen, Bishop',
    saintBernadetteSoubirousVirgin: 'Saint Bernadette Soubirous, Virgin',
    saintBernardineOfSienaPriest: 'Saint Bernardine of Siena, Priest',  // us, gb in en-GB
    saintBernardOfClairvauxAbbotAndDoctorOfTheChurch: 'Saint Bernard, Abbot and Doctor of the Church',  // us; Was: `Saint Bernard of Clairvaux, Abbot and Doctor of the Church`
    saintBeunoAbbot: 'Saint Beuno, Abbot',  // gb (wales)
    saintBlaseBishopAndMartyr: 'Saint Blaise, Bishop and Martyr',  // us, gb
    saintBonaventureBishopAndDoctor: 'Saint Bonaventure, Bishop and Doctor of the Church',  // us, gb
    saintBonifaceBishopAndMartyr: 'Saint Boniface, Bishop and Martyr',  // us, gb
    saintBrendanAbbot: 'Saint Brendan, Abbot',  // ireland
    saintBridgetOfSwedenReligious: 'Saint Bridget, Religious',  // us; Was: `Saint Bridget of Sweden, Religious, Patron of Europe`, gb, scotland
    saintBrigidVirgin: 'Saint Brigid, Virgin',  // ireland
    saintBrotherMutienMarieReligious: 'Saint Brother Mutien Marie, Religious',
    saintBrunoBonifaceOfQuerfurtBishopAndMartyr: 'Saint Bruno Boniface Of Querfurt, Bishop And Martyr',
    saintBrunoPriest: 'Saint Bruno, Priest',  // us
    saintCaesariusOfArlesBishop: 'Saint Caesarius of Arles, Bishop',
    saintCajetanPriest: 'Saint Cajetan, Priest',  // us
    saintCallistusIPopeAndMartyr: 'Saint Callistus I, Pope and Martyr',  // us
    saintCamillusDeLellisPriest: 'Saint Camillus de Lellis, Priest',  // us, gb
    saintCaniceAbbot: 'Saint Canice, Abbot',  // ireland
    saintCanuteMartyr: 'Saint Canute, Martyr',
    saintCarthageBishopMochuta: 'Saint Carthage, Bishop',  // ireland
    saintCasimir: 'Saint Casimir',  // us, gb
    saintCatherineOfAlexandriaVirginAndMartyr: 'Saint Catherine of Alexandria, Virgin and Martyr',  // us
    saintCatherineOfSienaVirginAndDoctorOfTheChurch: 'Saint Catherine of Siena, Virgin and Doctor of the Church',  // us; gb, scotland
    saintCeallachCelsusBishop: 'Saint Ceallach, Bishop',  // ireland
    saintCeciliaVirginAndMartyr: 'Saint Cecilia, Virgin and Martyr',  // us
    saintCharbelMakhloufPriestAndHermit: 'Saint Sharbel Makhlūf, Priest',  // us; Was: `Saint Charbel Makhlouf, Priest and Hermit`, gb
    saintCharlesBorromeoBishop: 'Saint Charles Borromeo, Bishop',  // us
    saintChristopherMagallanesAndCompanionsMartyrs: 'Saint Christopher Magallanes, Priest, and Companions, Martyrs',  // us
    saintChristopherMartyr: 'Saint Christopher, Martyr',
    saintCiaranAbbot: 'Saint Ciaran, Abbot',  // ireland
    saintClareVirgin: 'Saint Clare, Virgin',  // us
    saintClementIPopeAndMartyr: 'Saint Clement I, Pope and Martyr',  // us
    saintClementMaryHofbauerPriest: 'Saint Clement Mary Hofbauer, Priest',
    saintClotilde: 'Saint Clotilde',
    saintColmanOfCloyneBishop: 'Saint Colman of Cloyne, Bishop',  // ireland
    saintColmanOfDromoreBishop: 'Saint Colman of Dromore, Bishop',  // ireland
    saintColmanOfKilmacduaghBishop: 'Saint Colman of Kilmacduagh, Bishop',  // ireland
    saintColumbaAbbotAndMissionary: 'Saint Columba, Abbot',  // gb; Was: `Saint Columba, Abbot and Missionary`, scotland, ireland in en-IE
    saintColumbanAbbot: 'Saint Columban, Abbot',  // us, ireland in en-IE
    saintComgallAbbot: 'Saint Comgall, Abbot',  // ireland
    saintConlethBishop: 'Saint Conleth, Bishop',  // ireland
    saintConradOfParzhamReligious: 'Saint Conrad of Parzham, Religious',
    saintCorbinianBishop: 'Saint Corbinian, Bishop',
    saintCuthbertBishop: 'Saint Cuthbert, Bishop',  // gb
    saintCyrilOfAlexandriaBishopAndDoctor: 'Saint Cyril of Alexandria, Bishop and Doctor of the Church',  // us, gb
    saintCyrilOfJerusalemBishopAndDoctor: 'Saint Cyril of Jerusalem, Bishop and Doctor of the Church',  // us, gb
    saintDamasusIPope: 'Saint Damasus I, Pope',  // us
    saintDamienDeVeusterPriest: 'Saint Damien de Veuster, Priest',  // us
    saintDavidBishop: 'Saint David, Bishop',  // gb, wales, ireland
    saintDavidLewisPriestAndMartyr: 'Saint David Lewis, Priest and Martyr',  // gb (wales)
    saintDavnetVirgin: 'Saint Davnet, Virgin',  // ireland
    saintDeclanBishop: 'Saint Declan, Bishop',  // ireland
    saintDeiniolBishop: 'Saint Deiniol, Bishop',  // gb (wales)
    saintDemetrius: 'Saint Demetrius',
    saintDenisAndCompanionsMartyrs: 'Saint Denis, Bishop, and Companions, Martyrs',  // us
    saintDionysiusTheAreopagite: 'Saint Dionysius The Areopagite',
    saintDominicPriest: 'Saint Dominic, Priest',  // us, australia, nz
    saintDubriciusBishop: 'Saint Dyfrig, Bishop',  // gb (wales)
    saintEdmundCampionPriestAndMartyr: 'Saint Edmund Campion, Priest and Martyr',
    saintEdmundOfAbingdonBishop: 'Saint Edmund of Abingdon, Bishop',  // gb
    saintEdwardTheConfessor: 'Saint Edward the Confessor',  // gb
    saintElijahProphet: 'Saint Elijah, prophet',
    saintElizabethAnnSetonReligious: 'Saint Elizabeth Ann Seton, Religious',  // us
    saintElizabethOfHungaryReligious: 'Saint Elizabeth of Hungary, Religious',  // us, gb
    saintElizabethOfPortugal: 'Saint Elizabeth of Portugal',  // us, gb
    saintEmeric: 'Saint Emeric',
    saintEndaAbbot: 'Saint Enda, Abbot',  // ireland
    saintEphremDeaconAndDoctor: 'Saint Ephrem, Deacon and Doctor of the Church',  // us, gb
    saintEricIxMartyr: 'Saint Eric IX, Martyr',
    saintEtheldredaAudreyVirgin: 'Saint Ethelreda, Abbess',  // gb; Was: `Saint Etheldreda (Audrey), Virgin`
    saintEugeneDeMazenodBishop: 'Saint Eugene de Mazenod, Bishop',
    saintEugeneEoghanBishop: 'Saint Eugene (Eoghan), Bishop',  // ireland
    saintEulaliaOfMeridaVirginAndMartyr: 'Saint Eulalia of Merida, Virgin and Martyr',
    saintEulogiusOfCordobaBishop: 'Saint Eulogius of Cordoba, Bishop',
    saintEusebiusOfVercelliBishop: 'Saint Eusebius of Vercelli, Bishop',  // us
    saintEysteinnBishop: 'Saint Eysteinn, Bishop',
    saintEzequielMorenoBishop: 'Saint Ezequiel Moreno, Bishop',
    saintFabianPopeAndMartyr: 'Saint Fabian, Pope and Martyr',  // us, gb
    saintFachananOfKilfenoraBishop: 'Saint Fachanan, Bishop',  // ireland; Was: `Saint Fachanan of Kilfenora, Bishop`
    saintFachtnaBishop: 'Saint Fachtna, Bishop',  // ireland
    saintFaustinaKowalskaVirginAndReligious: 'Saint Faustina Kowalska, Virgin',  // us
    saintFelipeDeJesusPriestAndMartyr: 'Saint Felipe de Jesus, Priest And Martyr',
    saintFerdinand: 'Saint Ferdinand',
    saintFergalBishopAndMissionary: 'Saint Fergal, Bishop and Missionary',  // ireland
    saintFiacreMonk: 'Saint Fiacre, Monk',  // ireland
    saintFidelisOfSigmaringenPriestAndMartyr: 'Saint Fidelis of Sigmaringen, Priest and Martyr',  // us, gb
    saintFinbarrBishop: 'Saint Finbarr, Bishop',  // ireland
    saintFinnianOfClonardBishop: 'Saint Finian, Bishop',  // ireland; Was: `Saint Finian of Clonard, Bishop`
    saintFintan: 'Saint Fintan',  // ireland
    saintFlannanBishop: 'Saint Flannan, Bishop',  // ireland
    saintFlorianAndHisCompanionsMartyrs: 'Saint Florian and Companions, Martyrs',
    saintFlorianMartyr: 'Saint Florian, Martyr',
    saintFrancesOfRomeReligious: 'Saint Frances of Rome, Religious',  // us, gb
    saintFrancesXavierCabriniVirgin: 'Saint Frances Xavier Cabrini, Virgin',  // us
    saintFrancisBorgiaPriest: 'Saint Francis Borgia, Priest',
    saintFrancisDeSalesBishopAndDoctor: 'Saint Francis de Sales, Bishop and Doctor of the Church',  // us, gb
    saintFrancisDiazPriestAndCompanionsMartyrs: 'Saint Francis Diaz, Priest, and Companions, Martyrs',
    saintFrancisFernandezDeCapillasPriestAndMartyr: 'Saint Francis Fernandez de Capillas, Priest and Martyr',
    saintFrancisOfAssisi: 'Saint Francis of Assisi',  // us
    saintFrancisOfPaolaHermit: 'Saint Francis of Paola, Hermit',  // us, gb
    saintFrancisSolanusPriest: 'Saint Francis Solanus, Priest',
    saintFrancisXavierPriest: 'Saint Francis Xavier, Priest',  // us
    saintFrancoisDeLavalBishop: 'Saint Francois de Laval, Bishop',
    saintFridolinOfSackingenMonk: 'Saint Fridolin of Säckingen, Monk',
    saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops: 'Saint Fructuosus, Saint Martin of Dume and Saint Gerald, Bishops',
    saintFursaAbbotAndMissionary: 'Saint Fursa, Abbot and Missionary',  // ireland
    saintGabrieltaurinDufresseBishopAndMartyr: 'Saint Gabriel-Taurin Dufresse, Bishop and Martyr',
    saintGallAbbotAndMissionary: 'Saint Gall, Abbot and Missionary',  // ireland
    saintGenevieveVirgin: 'Saint Genevieve, Virgin',
    saintGeorgeMartyr: 'Saint George, Martyr',  // us, gb
    saintGeorgePrecaPriest: 'Saint George Preca, Priest',
    saintGerardBishop: 'Saint Gerard, Bishop',
    saintGermanusOfAuxerreBishop: 'Saint Germanus of Auxerre, Bishop',  // gb (wales)
    saintGertrudeOfNivellesAbbess: 'Saint Gertrude of Nivelles, Abbess',
    saintGertrudeOfNivellesVirgin: 'Saint Gertrude of Nivelles, Virgin',
    saintGertrudeTheGreatVirgin: 'Saint Gertrude, Virgin',  // us; Was: `Saint Gertrude The Great, Virgin`
    saintGobnaitVirgin: 'Saint Gobnait, Virgin',  // ireland
    saintGonsaloGarciaMartyr: 'Saint Gonsalo Garcia, Martyr',
    saintGorazdAndCompanions: 'Saint Gorazd and Companions',
    saintGotthardBishop: 'Saint Gotthard, Bishop',
    saintGregoryTheGreatPopeAndDoctor: 'Saint Gregory the Great, Pope and Doctor of the Church',  // us; gb
    saintGregoryViiPope: 'Saint Gregory VII, Pope',  // us, gb (wales)
    saintHectorValdivielsoSaezMartyr: 'Saint Héctor Valdivielso Sáez, Martyr',
    saintHedwigOfPoland: 'Saint Hedwig of Poland',
    saintHedwigReligious: 'Saint Hedwig, Religious',  // us
    saintHelena: 'Saint Helena',
    saintHemmaOfGurk: 'Saint Hemma of Gurk',
    saintHenry: 'Saint Henry',  // us, gb
    saintHenryBishopAndMartyr: 'Saint Henry, Bishop and Martyr',
    saintHermannJosephPriest: 'Saint Hermann Joseph, Priest',
    saintHermenegildMartyr: 'Saint Hermenegild, Martyr',
    saintHilaryOfPoitiersBishopAndDoctor: 'Saint Hilary, Bishop and Doctor of the Church',  // us; Was: `Saint Hilary of Poitiers, Bishop and Doctor`, gb
    saintHildaAbbess: 'Saint Hilda, Abbess',  // gb
    saintHildegardOfBingenAbbessAndDoctor: 'Saint Hildegard of Bingen, Abbess and Doctor',
    saintHubertBishop: 'Saint Hubert, Bishop',
    saintHubertOfLiegeBishop: 'Saint Hubert of Liege, Bishop',
    saintHughOfLincolnBishop: 'Saint Hugh of Lincoln, Bishop',  // gb
    saintHyacinthPriest: 'Saint Hyacinth, Priest',
    saintIgnatiusOfAntiochBishopAndMartyr: 'Saint Ignatius of Antioch, Bishop and Martyr',  // us
    saintIgnatiusOfLoyolaPriest: 'Saint Ignatius of Loyola, Priest',  // us, gb
    saintIldephonsusOfToledoBishop: 'Saint Ildephonsus of Toledo, Bishop',
    saintIlltudAbbot: 'Saint Illtud, Abbot',  // gb (wales)
    saintIrenaeusBishopAndMartyr: 'Saint Irenaeus, Bishop and Martyr',  // us
    saintIrene: 'Saint Irene',
    saintIsidoreOfSevilleBishopAndDoctorOfTheChurch: 'Saint Isidore, Bishop and Doctor of the Church',  // us; Was: `Saint Isidore of Seville, Bishop and Doctor of the Church`, gb
    saintIsidoreTheFarmer: 'Saint Isidore',  // us; it was: `Saint Isidore the Farmer`
    saintItaVirgin: 'Saint Ita, Virgin',  // ireland
    saintIvoPriest: 'Saint Ivo, Priest',
    saintJamesApostle: 'Saint James, Apostle',  // us, gb
    saintJamesApostlePatronOfSpain: 'Saint James, Apostle and Patron of Spain',  // us, but not in us
    saintJaneFrancesDeChantalReligious: 'Saint Jane Frances de Chantal, Religious',  // us
    saintJanuariusBishopAndMartyr: 'Saint Januarius, Bishop and Martyr',  // us
    saintJarlathBishop: 'Saint Jarlath, Bishop',  // ireland
    saintJeromeEmiliani: 'Saint Jerome Emiliani',  // us, gb
    saintJeromePriestAndDoctor: 'Saint Jerome, Priest and Doctor of the Church',  // us
    saintJoachimHoMartyr: 'Saint Joachim Ho, Martyr',
    saintJoanOfArcVirginSecondaryPatronessOfFrance: 'Saint Joan of Arc, Virgin, Secondary Patroness of France',
    saintJoaquinaVedruna: 'Saint Joaquina Vedruna',
    saintJohnBaptistDeLaSallePriest: 'Saint John Baptist de la Salle, Priest',  // us
    saintJohnBerchmansReligious: 'Saint John Berchmans, Religious',
    saintJohnBoscoPriest: 'Saint John Bosco, Priest',  // us, gb
    saintJohnCassianPriest: 'Saint John Cassian, Priest',
    saintJohnChrysostomBishopAndDoctor: 'Saint John Chrysostom, Bishop and Doctor of the Church',  // us
    saintJohnDamascenePriestAndDoctor: 'Saint John Damascene, Priest and Doctor of the Church',  // us
    saintJohnDeBritoPriestAndMartyr: 'Saint John de Brito, Priest and Martyr',
    saintJohnEudesPriest: 'Saint John Eudes, Priest',  // us
    saintJohnGabrielPerboyrePriestAndMartyr: 'Saint John Gabriel Perboyre, Priest and Martyr',
    saintJohnIPopeAndMartyr: 'Saint John I, Pope and Martyr',  // us. gb
    saintJohnJonesPriestAndMartyr: 'Saint John Jones, Priest and Martyr',  // gb (wales)
    saintJohnLeonardiPriest: 'Saint John Leonardi, Priest',  // us
    saintJohnMaciasReligious: 'Saint John Macias, Religious',
    saintJohnMaryVianneyPriest: 'Saint John Vianney, Priest',  // us; Was: `Saint John Mary Vianney, Priest`
    saintJohnNepomucenePriestAndMartyr: 'Saint John Nepomucene, Priest and Martyr',
    saintJohnNeumannBishop: 'Saint John Neumann, Bishop',  // us
    saintJohnOfAvilaPriest: 'Saint John of Avila, Priest',
    saintJohnOfCapistranoPriest: 'Saint John of Capistrano, Priest',  // us
    saintJohnOfDuklaPriest: 'Saint John of Dukla, Priest',
    saintJohnOfGodReligious: 'Saint John of God, Religious',  // us
    saintJohnOfKantyPriest: 'Saint John of Kanty, Priest',  // us; Was: `Saint John of Kenty, Priest`
    saintJohnOfTheCrossPriestAndDoctor: 'Saint John of the Cross, Priest and Doctor of the Church',  // us
    saintJohnOfTrioraPriestAndMartyr: 'Saint John of Triora, Priest and Martyr',
    saintJohnOgilvie: 'Saint John Ogilvie',  // scotland
    saintJohnPaulIiPope: 'Saint John Paul II, Pope',  // us, gb, ireland
    saintJohnRobertsPriestAndMartyr: 'Saint John Roberts, Priest and Martyr',  // gb (wales)
    saintJohnSarkanderPriestAndMartyr: 'Saint John Sarkander, Priest and Martyr',
    saintJohnTheApostleAndEvangelist: 'Saint John, Apostle and Evangelist',  // us; Was: `Saint John the Apostle and Evangelist`
    saintJohnXxiiiPope: 'Saint John XXIII, Pope',  // us, ireland
    saintJosaphatBishopAndMartyr: 'Saint Josaphat, Bishop and Martyr',  // us
    saintJoseDeAnchietaPriest: 'Saint Jose de Anchieta, Priest',
    saintJosefBilczewskiBishop: 'Saint Josef Bilczewski, Bishop',
    saintJoseMariaDeYermoPriest: 'Saint Jose Maria de Yermo, Priest',
    saintJosemariaEscrivaDeBalaguerPriest: 'Saint Josemaria Escriva de Balaguer, Priest',
    saintJosephFreinademetzPriest: 'Saint Laurence Wang Bing and Companions, Martyrs or Saint Joseph Freinademetz, Priest',
    saintJosephineBakhitaVirgin: 'Saint Josephine Bakhita, Virgin',  // us, gb
    saintJosephOfCalasanzPriest: 'Saint Joseph of Calasanz, Priest',  // us
    saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada: 'Saint Joseph, Spouse of the Blessed Virgin Mary and Principal Patron of Canada',  // us, but not in the us, gb
    saintJosephTheWorker: 'Saint Joseph the Worker',  // us
    saintJosephYuanPriestAndMartyr: 'Saint Joseph Yuan, Priest and Martyr',
    saintJosephZhangDapengMartyr: 'Saint Joseph Zhang Dapeng, Martyr',
    saintJozefBilczewskiBishop: 'Saint Jozef Bilczewski, Bishop',
    saintJozefSebastianPelczar: 'Saint Jozef Sebastian Pelczar',
    saintJuanDiegoCuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin',  // us
    saintJulianaOfLiegeVirgin: 'Saint Juliana of Liege, Virgin',
    saintJulieBilliartVirgin: 'Saint Julie Billiart, Virgin',
    saintJustinMartyr: 'Saint Justin, Martyr',  // us
    saintKateriTekakwithaVirgin: 'Saint Kateri Tekakwitha, Virgin',  // us
    saintKatharineDrexelVirgin: 'Saint Katharine Drexel, Virgin',  // us
    saintKentigern: 'Saint Kentigern',  // scotland
    saintKevinAbbot: 'Saint Kevin, Abbot',  // ireland
    saintKieranBishop: 'Saint Kieran, Bishop',  // ireland
    saintKilianBishopAndCompanionsMartyrs: 'Saint Kilian, Bishop, and Companions, Martyrs',
    saintKillianBishopAndMartyr: 'Saint Kilian, Bishop and Martyr',  // ireland
    saintKingaVirgin: 'Saint Kinga, Virgin',
    saintLadislaus: 'Saint Ladislaus',
    saintLambertBishopAndMartyr: 'Saint Lambert of Maastricht, Bishop and Martyr',
    saintLaurenceOTooleBishop: 'Saint Laurence O’Toole, Bishop',  // ireland
    saintLaurenceWangBingAndCompanionsMartyrs: 'Saint Laurence Wang Bing and Companions, Martyrs',
    saintLawrenceBaiXiaomanMartyr: 'Saint Lawrence Bai Xiaoman, Martyr',
    saintLawrenceOfBrindisiPriestAndDoctor: 'Saint Lawrence of Brindisi, Priest and Doctor of the Church',  // us, gb
    saintLawrenceOfRomeDeaconAndMartyr: 'Saint Lawrence, Deacon and Martyr',  // us; Was: `Saint Lawrence of Rome, Deacon and Martyr`
    saintLawrenceRuizAndCompanionsMartyrs: 'Saint Lawrence Ruiz and Companions, Martyrs',  // us
    saintLeanderBishop: 'Saint Leander, Bishop',
    saintLeliaVirgin: 'Saint Lelia, Virgin',  // ireland
    saintLeobaAbbess: 'Saint Leoba, Abbess',
    saintLeoIxPope: 'Saint Leo IX, Pope',
    saintLeoManginPriestAndCompanionsMartyrs: 'Saint Leo Mangin, Priest, and Companions, Martyrs',
    saintLeonardOfNoblacHermit: 'Saint Leonard of Noblac, Hermit',
    saintLeopoldIII: 'Saint Leopold III',
    saintLeopoldMandicPriest: 'Saint Leopold Mandic, Priest',
    saintLeoTheGreatPopeAndDoctor: 'Saint Leo the Great, Pope and Doctor of the Church',  // us
    saintLouis: 'Saint Louis',  // us
    saintLouisBertrandPriest: 'Saint Louis Bertrand, Priest',
    saintLouisMarieGrignionDeMontfortPriest: 'Saint Louis Grignion de Montfort, Priest',  // us; Was: `Saint Louis Marie Grignion de Montfort, Priest`, gb in en-GB, australia, nz
    saintLuciusOfChurBishopAndMartyr: 'Saint Lucius of Chur, Bishop and Martyr',
    saintLucyOfSyracuseVirginAndMartyr: 'Saint Lucy, Virgin and Martyr',  // us; Was: `Saint Lucy of Syracuse, Virgin and Martyr`
    saintLucyYiZhenmeiVirginAndMartyr: 'Saint Lucy Yi Zhenmei, Virgin and Martyr',
    saintLudgerBishop: 'Saint Ludger, Bishop',
    saintLudmilaMartyr: 'Saint Ludmila, Martyr',
    saintLuigiOrionePriest: 'Saint Luigi Orione, Priest',
    saintLukeTheEvangelist: 'Saint Luke, Evangelist',  // us
    saintLydiaOfPhilippi: 'Saint Lydia of Philippi',
    saintMacartanBishop: 'Saint Macartan, Bishop',  // ireland
    saintMacNissiBishop: 'Saint Mac Nissi, Bishop',  // ireland
    saintMaelruainMaolruainVirgin: 'Saint Maelruain, Bishop and Abbot',  // ireland
    saintMagnusMartyr: 'Saint Magnus, Martyr',
    saintMalachyBishop: 'Saint Malachy, Bishop',  // ireland
    saintMarcellinChampagnatPriest: 'Saint Marcellin Champagnat, Priest',  // australia, nz
    saintMargaretMaryAlacoqueVirgin: 'Saint Margaret Mary Alacoque, Virgin',  // us
    saintMargaretOfAntiochVirginAndMartyr: 'Saint Margaret of Antioch, Virgin and Martyr',
    saintMargaretOfHungary: 'Saint Margaret of Hungary',
    saintMargaretOfScotland: 'Saint Margaret of Scotland',  // us, gb, scotland
    saintMargueriteBourgeoysVirgin: 'Saint Marguerite Bourgeoys, Virgin',
    saintMargueriteDYouvilleReligious: 'Saint Marguerite d’Youville, Religious',
    saintMariaDeJesusSacramentadoVenegasVirgin: 'Saint Maria de Jesus Sacramentado Venegas, Virgin',
    saintMariaGorettiVirginAndMartyr: 'Saint Maria Goretti, Virgin and Martyr',  // us, gb
    saintMariaGuadalupeGarciaZavalaVirgin: 'Saint María Guadalupe García Zavala, Virgin',
    saintMariaMicaelaOfTheBlessedSacramentVirgin: 'Saint Maria Micaela of The Blessed Sacrament, Virgin',
    saintMarianaDeJesusDeParedesVirgin: 'Saint Mariana de Jesus de Paredes, Virgin',
    saintMarianneCopeVirgin: 'Saint Marianne Cope, Virgin',  // us
    saintMarieOfTheIncarnationReligious: 'Saint Marie of The Incarnation, Religious',
    saintMarina: 'Saint Marina',
    saintMarkoKrizinPriestAndMartyr: 'Saint Marko Krizin, Priest and Martyr',
    saintMarkTheEvangelist: 'Saint Mark, Evangelist',  // us, gb, australia, nz
    saintMaroun: 'Saint Maroun',
    saintMartha: 'Saint Martha',  // us, gb
    saintMartinDePorresReligious: 'Saint Martin de Porres, Religious',  // us
    saintMartinIPopeAndMartyr: 'Saint Martin I, Pope and Martyr',  // us
    saintMartinOfToursBishop: 'Saint Martin of Tours, Bishop',  // us
    saintMartinWuXueshengAndCompanionsMartyrs: 'Saint Martin Wu Xuesheng and Companions, Martyrs',
    saintMaryMacKillopVirgin: 'Saint Mary MacKillop, Virgin',  // australia
    saintMaryMagdalene: 'Saint Mary Magdalene',  // us, gb
    saintMaryMagdaleneDePazziVirgin: 'Saint Mary Magdalene de’ Pazzi, Virgin',  // us, gb (wales)
    saintMaryOfTheCrossVirgin: 'Saint Mary of the Cross MacKillop, Virgin',  // australia, nz
    saintMatilda: 'Saint Matilda',
    saintMatthewApostleAndEvangelist: 'Saint Matthew, Apostle and Evangelist',  // us
    saintMatthiasTheApostle: 'Saint Matthias, Apostle',  // us, gb
    saintMauriceAndCompanionsMartyrs: 'Saint Maurice and Companions, Martyrs',
    saintMaurusBishop: 'Saint Maurus, Bishop',
    saintMaximilianMaryKolbePriestAndMartyr: 'Saint Maximilian Kolbe, Priest and Martyr',  // us; Was: `Saint Maximilian Mary Kolbe, Priest and Martyr`
    saintMeinradMartyr: 'Saint Meinrad, Martyr',
    saintMelBishop: 'Saint Mel, Bishop',  // ireland
    saintMelchiorGrodzieckiPriestAndMartyr: 'Saint Melchior Grodziecki, Priest and Martyr',
    saintMiguelFebresCorderoReligious: 'Saint Miguel Febres Cordero, Religious',
    saintMolaiseLaisrenLaserianBishop: 'Saint Laserian, Bishop',  // ireland
    saintMonica: 'Saint Monica',  // us
    saintMoninneVirgin: 'Saint Moninne, Virgin',  // ireland
    saintMunchinBishop: 'Saint Munchin, Bishop',  // ireland
    saintMuredachBishop: 'Saint Muredach, Bishop',  // ireland
    saintNicholasBishop: 'Saint Nicholas, Bishop',  // us
    saintNicholasOfFlueHermit: 'Saint Nicholas of Flüe, Hermit',
    saintNikolaTavelicPriestAndMartyr: 'Saint Nikola Tavelic, Priest and Martyr',
    saintNinian: 'Saint Ninian',  // scotland
    saintNorbertBishop: 'Saint Norbert, Bishop',  // us, gb
    saintNunoDeSantaMaria: 'Saint Nuno de Santa Maria',
    saintOdileOfAlsaceAbbess: 'Saint Odile of Alsace, Abbess',
    saintOlafIiMartyr: 'Saint Olaf II, Martyr',
    saintOlga: 'Saint Olga',
    saintOliverPlunkettBishopAndMartyr: 'Saint Oliver Plunket, Bishop and Martyr',  // gb; Was: `Saint Oliver Plunkett, Bishop and Martyr`; ireland
    saintOtteranMonk: 'Saint Otteran, Monk',  // ireland
    saintOttoOfBambergBishop: 'Saint Otto of Bamberg, Bishop',
    saintPancrasMartyr: 'Saint Pancras, Martyr',  // us, gb
    saintPantaleon: 'Saint Pantaleon',
    saintPaschalBaylon: 'Saint Paschal Baylon',
    saintPatrickBishop: 'Saint Patrick, Bishop',  // us, gb, scotland, ireland, australia
    saintPaulChenChangpinAndCompanionsMartyrs: 'Saint Paul Chen Changpin and Companions, Martyrs',
    saintPaulinaOfTheAgonizingHeartOfJesusVirgin: 'Saint Paulina of The Agonizing Heart of Jesus, Virgin',  // gb, but not in gb
    saintPaulinusOfNolaBishop: 'Saint Paulinus of Nola, Bishop',  // us, gb
    saintPaulinusOfTrierBishop: 'Saint Paulinus of Trier, Bishop',
    saintPaulinusOfYorkBishop: 'Saint Paulinus of York, Bishop',  // gb
    saintPaulIvPope: 'Saint Paul VI, Pope',  // us, gb
    saintPaulLiuHanzouPriestAndMartyr: 'Saint Paul Liu Hanzou, Priest and Martyr',
    saintPaulMikiAndCompanionsMartyrs: 'Saint Paul Miki and Companions, Martyrs',  // us, gb, nz
    saintPaulOfTheCrossPriest: 'Saint Paul of the Cross, Priest',  // us
    saintPedroCalungsodMartyr: 'Saint Pedro Calungsod, Martyr',
    saintPelagiusMartyr: 'Saint Pelagius, Martyr',
    saintPeterCanisiusPriestAndDoctor: 'Saint Peter Canisius, Priest and Doctor of the Church',  // us
    saintPeterChanelPriestAndMartyr: 'Saint Peter Chanel, Priest and Martyr',  // us, gb
    saintPeterChrysologusBishopAndDoctor: 'Saint Peter Chrysologus, Bishop and Doctor of the Church',  // us, gb
    saintPeterClaverPriest: 'Saint Peter Claver, Priest',  // us
    saintPeterDamianBishopAndDoctorOfTheChurch: 'Saint Peter Damian, Bishop and Doctor of the Church',  // us, gb
    saintPeterJulianEymardPriest: 'Saint Peter Julian Eymard, Priest',  // us
    saintPeterLiuMartyr: 'Saint Peter Liu, Martyr',
    saintPeterOfAlcantaraPriest: 'Saint Peter of Alcantara, Priest',
    saintPeterSanzBishopAndMartyr: 'Saint Peter Sanz, Bishop and Martyr',
    saintPeterWuMartyr: 'Saint Peter Wu, Martyr',
    saintPhilipNeriPriest: 'Saint Philip Neri, Priest',  // us, gb
    saintPioOfPietrelcinaPriest: 'Saint Pius of Pietrelcina, Priest',  // us
    saintPirminAbbotAndBishop: 'Saint Pirmin, Abbot and Bishop',
    saintPiusVPope: 'Saint Pius V, Pope',  // us, gb in en-GB
    saintPiusXPope: 'Saint Pius X, Pope',  // us
    saintPolycarpBishopAndMartyr: 'Saint Polycarp, Bishop and Martyr',  // us
    saintPothinusBishopSaintBlandinaVirginAndTheirCompanionsMartyrs: 'Saints Pothinus, Bishop, Blandina, Virgin, and Companions, Martyrs',
    saintProcopiusAbbot: 'Saint Procopius, Abbot',
    saintPubliusBishop: 'Saint Publius, Bishop',
    saintQuirinusOfSescia: 'Saint Quirinus of Sescia',
    saintRabanusMaurusBishop: 'Saint Rabanus Maurus, Bishop',
    saintRadimBishop: 'Saint Radim, Bishop',
    saintRafaelGuizarYValenciaBishop: 'Saint Rafael Guizar y Valencia, Bishop',
    saintRafalKalinowskiPriest: 'Saint Rafal Kalinowski, Priest',
    saintRafqaRebeccaVirgin: 'Saint Rafqa (Rebecca), Virgin',
    saintRaymondOfPenyafortPriest: 'Saint Raymond of Penyafort, Priest',  // us, gb in en-GB
    saintRemigiusBishop: 'Saint Remigius, Bishop',
    saintRichardGwynMartyr: 'Saint Richard Gwyn, Martyr',  // gb (wales)
    saintRichardOfChichesterBishop: 'Saint Richard of Chichester, Bishop',  // gb
    saintRitaOfCascia: 'Saint Rita of Cascia, Religious',  // us
    saintRobertBellarmineBishopAndDoctor: 'Saint Robert Bellarmine, Bishop and Doctor of the Church',  // us
    saintRocco: 'Saint Rocco',
    saintRoch: 'Saint Roch',
    saintRomualdAbbot: 'Saint Romuald, Abbot',  // us
    saintRoseOfLima: 'Saint Rose of Lima, Virgin',  // us
    saintRoseOfLimaSecondaryPatronessOfThePhilippines: 'Saint Rose of Lima, Virgin and Secondary Patroness of the Philippines',
    saintRosePhilippineDuchesneVirgin: 'Saint Rose Philippine Duchesne, Virgin',  // us
    saintsAlbanJuliusAndAaronMartyrs: 'Saints Alban, Julius and Aaron, Martyrs',  // gb (wales)
    saintsAndrewZorardAndBenedictHermits: 'Saints Andrew Zorard and Benedict, Hermits',
    saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors: 'Saints Basil the Great and Gregory Nazianzen, Bishops and Doctors of the Church',  // us, gb
    saintsBenedyktJanMateuszIsaakAndKrystynMartyrs: 'Saints Benedykt, Jan, Mateusz, Isaak and Krystyn, Martyrs',
    saintsBorisAndGlebMartyrs: 'Saints Boris and Gleb, Martyrs',
    saintsCanuteEricAndOlafMartyrs: 'Saints Canute, Eric and Olaf, Martyrs',
    saintsChadAndCeddBishop: 'Saints Chad and Cedd, Bishop',  // gb
    saintsCharlesLwangaAndCompanionsMartyrs: 'Saints Charles Lwanga and Companions, Martyrs',  // us, gb, ireland
    saintScholasticaVirgin: 'Saint Scholastica, Virgin',  // us, gb
    saintsClementOfOhridAndGorazdBishopsAndCompanions: 'Saints Clement of Ohrid and Gorazd, Bishops, and Companions',
    saintsConradAndGebhardOfConstanceBishops: 'Saints Conrad and Gebhard of Constance, Bishops',
    saintsCorneliusPopeAndCyprianBishopMartyrs: 'Saints Cornelius, Pope, and Cyprian, Bishop, Martyrs',  // us
    saintsCosmasAndDamianMartyrs: 'Saints Cosmas and Damian, Martyrs',  // us
    saintsCyrilMonkAndMethodiusBishop: 'Saints Cyril, Monk, and Methodius, Bishop',  // us, gb, scotland
    saintSebastianMartyr: 'Saint Sebastian, Martyr',  // us, gb
    saintSenanBishop: 'Saint Senan, Bishop',  // ireland
    saintSeverinusOfNoricumMonk: 'Saint Severinus of Noricum, Monk',
    saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs: 'Saints Felipe de Jesus, Paul Miki and Companions, Martyrs',  // us, but not in us (Felipe de Jesus need to be proofed)
    saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs: 'Saints Fructuosus, Bishop, and Augurius and Eulogius, Deacons, Martyrs',
    saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs: 'Saints Gregory Grassi, Francis Fogolla and Anthony Fantosati, Bishops, and Companions, Martyrs',
    saintsHenryAndCunigunde: 'Saints Henry and Cunigunde',
    saintSigismundMartyr: 'Saint Sigismund, Martyr',
    saintSimonOfLipnicaPriest: 'Saint Simon of Lipnica, Priest',
    saintSixtusIiPopeAndCompanionsMartyrs: 'Saint Sixtus II, Pope, and Companions, Martyrs',  // us
    saintsJoachimAndAnne: 'Saints Joachim and Anne, Parents of the Blessed Virgin Mary',  // us; Was: `Saints Joachim and Anne`
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs: 'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs',  // us
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada: 'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs and Secondary Patrons of Canada',  // us, but not in us
    saintsJohnFisherBishopAndThomasMoreMartyrs: 'Saints John Fisher, Bishop, and Thomas More, Martyrs',  // us, australia
    saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs: 'Saints Louis Versiglia, Bishop and Callistus Caravario, Priest, Martyrs',
    saintsMarcellinusAndPeterMartyrs: 'Saints Marcellinus and Peter, Martyrs',  // us, gb
    saintsMargaretClitherowAnneLineAndMargaretWardMartyrs: 'Saints Margaret Clitherow, Anne Line and Margaret Ward, Virgin, Martyrs',  // gb
    saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs: 'Saints Marko Krizin, Melichar Grodecki and Stephen Pongrac, Priests and Martyrs',
    saintsMichaelGabrielAndRaphaelArchangels: 'Saints Michael, Gabriel and Raphael, Archangels',  // us
    saintsNereusAndAchilleusMartyrs: 'Saints Nereus and Achilleus, Martyrs',  // us, gb
    saintSoledadTorresAcostaVirgin: 'Saint Soledad Torres Acosta, Virgin',
    saintsPedroBautistaPaulMikiAndCompanionsMartyrs: 'Saints Pedro Bautista, Paul Miki and Companions, Martyrs',  // us, but not in us (Pedro Bautista need to be proofed)
    saintsPerpetuaAndFelicityMartyrs: 'Saints Perpetua and Felicity, Martyrs',  // us, gb
    saintsPhilipAndJamesApostles: 'Saints Philip and James, Apostles',  // us
    saintsPhilipEvansAndJohnLloydPriestsAndMartyrs: 'Saints Philip Evans and John Lloyd, Priests and Martyrs',  // gb (wales)
    saintsPontianPopeAndHippolytusPriestMartyrs: 'Saints Pontian, Pope, and Hippolytus, Priest, Martyrs',  // us
    saintSpyridon: 'Saint Spyridon',
    saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs: 'Saints Roque Gonzalez, Alfonso Rodriguez Olmedo, and Juan del Castillo, Priests and Martyrs',
    saintsRupertAndVirgiliusOfSalzburgBishops: 'Saints Rupert and Virgilius of Salzburg, Bishops',
    saintsSimonAndJudeApostles: 'Saints Simon and Jude, Apostles',  // us
    saintStanislausBishopAndMartyr: 'Saint Stanislaus, Bishop and Martyr',  // us
    saintStanislausKazimierczykPriest: 'Saint Stanislaus Kazimierczyk, Priest',
    saintStanislausKostkaReligious: 'Saint Stanislaus Kostka, Religious',
    saintStephenOfHungary: 'Saint Stephen of Hungary',  // us
    saintStephenTheFirstMartyr: 'Saint Stephen, the First Martyr',  // us
    saintsTimothyAndTitusBishops: 'Saints Timothy and Titus, Bishops',  // us, australia
    saintSunnivaVirginAndMartyr: 'Saint Sunniva, Virgin and Martyr',
    saintSwithunBishop: 'Saint Swithun, Bishop',
    saintSylvesterIPope: 'Saint Sylvester I, Pope',  // us
    saintTeiloBishop: 'Saint Teilo, Bishop',  // gb (wales)
    saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr: 'Saint Teresa Benedicta of the Cross, Virgin and Martyr',  // us, gb, scotland
    saintTeresaOfCalcuttaReligious: 'Saint Teresa of Calcutta, Religious',
    saintTeresaOfJesusJornetEIbarsVirgin: 'Saint Teresa of Jesus Jornet e Ibars, Virgin',
    saintTeresaOfJesusVirginAndDoctorOfTheChurch: 'Saint Teresa of Jesus, Virgin and Doctor of the Church',  // us
    saintTeresaOfLosAndesVirgin: 'Saint Teresa of Los Andes, Virgin',
    saintTheodoreOfCanterburyBishop: 'Saint Theodore of Canterbury, Bishop',  // gb
    saintTheodosiusOfTheCavesAbbot: 'Saint Theodosius of The Caves, Abbot',
    saintTheotoniusPriest: 'Saint Theotonius, Priest',
    saintThereseOfTheChildJesusVirginAndDoctor: 'Saint Thérèse of the Child Jesus, Virgin and Doctor of the Church',  // us
    saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance: 'Saint Thérèse of the Child Jesus, Virgin, Doctor of the Church and Secondary Patroness of France',  // us, but not in us
    saintThomasAquinasPriestAndDoctor: 'Saint Thomas Aquinas, Priest and Doctor of the Church',  // us, gb
    saintThomasBecketBishopAndMartyr: 'Saint Thomas Becket, Bishop and Martyr',  // us, gb
    saintThomasOfVillanovaBishop: 'Saint Thomas of Villanova, Bishop',
    saintThomasRokuzayemonPriestAndCompanionsMartyrs: 'Saint Thomas Rokuzayemon, Priest, and Companions, Martyrs',
    saintThomasTheApostle: 'Saint Thomas, Apostle',  // us, gb
    saintThorfinnBishop: 'Saint Thorfinn, Bishop',
    saintThorlacBishop: 'Saint Thorlac, Bishop',
    saintTuribiusOfMogrovejoBishop: 'Saint Turibius of Mogrovejo, Bishop',  // us, gb
    saintUlrichOfAugsburg: 'Saint Ulrich of Augsburg',
    saintUrsulaAndCompanionsVirginsAndMartyrs: 'Saint Ursula and Companions, Virgins and Martyrs',
    saintUrsulaLedochowskaVirgin: 'Saint Ursula Ledochowska, Virgin',
    saintValentineOfRaetiaBishop: 'Saint Valentine of Raetia, Bishop',
    saintVincentDeaconAndMartyr: 'Saint Vincent, Deacon and Martyr',  // us, gb
    saintVincentDePaulPriest: 'Saint Vincent de Paul, Priest',  // us
    saintVincentFerrerPriest: 'Saint Vincent Ferrer, Priest',  // us
    saintVincentPallottiPriest: 'Saint Vincent Pallotti, Priest',
    saintVitusMartyr: 'Saint Vitus, Martyr',
    saintVladimirTheGreat: 'Saint Vladimir The Great',
    saintWalburgaAbbess: 'Saint Walburga, Abbess',
    saintWenceslausMartyr: 'Saint Wenceslaus, Martyr',  // us
    saintWendelinAbbot: 'Saint Wendelin, Abbot',
    saintWilfridBishop: 'Saint Wilfrid, Bishop',  // gb
    saintWillibaldBishop: 'Saint Willibald, Bishop',
    saintWillibrordBishop: 'Saint Willibrord, Bishop',  // gb, ireland in en-IE
    saintWinefrideVirgin: 'Saint Winifride, Virgin',  // gb; Was: `Saint Winefride, Virgin`
    saintWolfgangBishop: 'Saint Wolfgang, Bishop',
    saintWolfgangOfRegensburgBishop: 'Saint Wolfgang of Regensburg, Bishop',
    saintWulstanBishop: 'Saint Wulstan, Bishop',  // gb
    saintZdislava: 'Saint Zdislava',
    saintZdzislawa: 'Saint Zdzislawa',
    saintZygmuntGorazdowskiPriest: 'Saint Zygmunt Gorazdowski, Priest',
    saintZygmuntSzczesnyFelinskiBishop: 'Saint Zygmunt Szczesny Felinski, Bishop',
    santoNinoInfantJesus: 'Santo Nino (Infant Jesus)',
    sevenHolyFoundersOfTheServiteOrder: 'Seven Holy Founders of the Servite Order',  // us, gb in en-GB
    sevenMartyredNunsFromTheFranciscanMissionariesOfMary: 'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
    shipwreckOfSaintPaulApostle: 'Shipwreck of Saint Paul, Apostle',
    shroveMonday: 'Shrove Monday',
    shroveTuesday: 'Shrove Tuesday',
    stDunstanArchbishopOfCanterbury: 'Saint Dunstan, Bishop',  // gb; Was: `St Dunstan, Archbishop of Canterbury`
    sundayOfTheWordOfGod: 'Sunday of the Word of God',  // us; this one was not found in the _Ordo 2017, 2018, 2020, 2021_
    theBeheadingOfSaintJohnTheBaptistMartyr: 'Passion of Saint John the Baptist',  // us
    theEnglishMartyrs: 'English Martyrs',  // gb
    theFiveWoundsOfTheLord: 'Five Wounds of The Lord',
    theMostHolyNameOfJesus: 'Most Holy Name of Jesus',  // us, gb
    theSixWelshMartyrsAndCompanions: 'Six Welsh Martyrs and Companions',  // gb (wales)
    transferOfTheRelicsOfSaintStephen: 'Transfer of The Relics of Saint Stephen',
    vietnameseMartyrs: 'Vietnamese Martyrs',
    visitationOfTheBlessedVirginMary: 'Visitation of the Blessed Virgin Mary',  // us
    waitangiDay: 'Waitangi Day',  // nz
  },
} as RomcalLocale;
