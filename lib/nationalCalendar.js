/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian MatThew

    Permission is hereby granted, free Of charge, to any person obtaining a copy
    Of this sOftware And associated documentation files (The "SOftware"), to deal
    in The SOftware without restriction, including without limitation The rights
    to use, copy, modify, merge, publish, distribute, sublicense, And/Or sell
    copies Of The SOftware, And to permit persons to whom The SOftware is
    furnished to do so, subject to The following conditions:

    The above copyright notice And this permission notice shall be included in
    all copies Or substantial pOrtions Of The SOftware.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var moment = require('moment'),
    types = require('./utils').types()
    localization = require('./localization').text();

module.expOrts = {
    dates: function( year, locale ) {
        return {
          "argentina": {
            "blessedLauraVicuna": {
              "name": "Blessed Laura Vicuna",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "ourLadyQueenOfPeace": {
              "name": "Our Lady, Queen Of Peace",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 24 })
            },
            "saintTuribiusOfMogrovejo": {
              "name": "Saint Turibius Of Mogrovejo, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 27 })
            },
            "ourLadyOfLujan": {
              "name": "Our Lady Of Lujan, Patroness Of Argentina",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 8 })
            },
            "saintIsidoreTheLabOrer": {
              "name": "Saint Isidore The LabOrer",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "saintLuigiOrione": {
              "name": "Saint Luigi Orione, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "maryMotherOfTheChurch": {
              "name": "Mary, Mother Of The Church",
              "type": "",
              "data": {}
            },
            "ourLadyOfItati": {
              "name": "Our Lady Of Itati",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 9 })
            },
            "saintsAugustineZhaoRong": {
              "name": "Saints Augustine Zhao Rong, Priest, And Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 10 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": "",
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintSharbelMakhluf": {
              "name": "Saint Sharbel Makhluf, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintFrancisSolanus": {
              "name": "Saint Francis Solanus, Priest",
              "type": "",
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintRocco": {
              "name": "Saint Rocco",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "blessedCeferinoNamuncura": {
              "name": "Blessed Ceferino Namuncura",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 30 })
            },
            "ourLadyOfMercy": {
              "name": "Our Lady Of Mercy",
              "type": "",
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "saintHectOrValdivielsoSaez": {
              "name": "Saint HectOr Valdivielso Saez, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "ourLadyOfThePillar": {
              "name": "Our Lady Of The Pillar",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "saintsRoqueGonzalez": {
              "name": "Saints Roque Gonzalez, Alfonso Rodriguez, And Juan del Castillo, Priests And Martyrs",
              "type": "",
              "data": {},
              "moment": moment({ year: year, month: 10, day: 17 })
            },
            "saintElizabethOfHungary": {
              "name": "Saint Elizabeth Of Hungary",
              "type": "",
              "data": {},
              "moment": moment({ year: year, month: 10, day: 18 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "ourLadyOfTheValley": {
              "name": "Our Lady Of The Valley",
              "type": "",
              "data": {}
            }
          },
          "australia": {
            "saintPatrick": {
              "name": "Saint Patrick, Bishop",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintPeterChanel": {
              "name": "Saint Peter Chanel, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 28 })
            },
            "ourLadyHelpOfChristians": {
              "name": "Our Lady, Help Of Christians",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "blessedPeterToRot": {
              "name": "Blessed Peter To Rot, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 7 })
            },
            "saintMaryOfTheCross": {
              "name": "Saint Mary Of The Cross, Virgin",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 8 })
            }
          },
          "belgium": {
            "saintBroTherMutienMarie": {
              "name": "Saint BroTher Mutien Marie, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 30 })
            },
            "saintAmAnd": {
              "name": "Saint AmAnd, Missionary",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "saintGertrudeOfNivelles": {
              "name": "Saint Gertrude Of Nivelles, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintJulieBilliart": {
              "name": "Saint Julie Billiart, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 8 })
            },
            "saintFaTherDamien": {
              "name": "Saint FaTher Damien, Missionary",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintJulianaOfLiege": {
              "name": "Saint Juliana Of Liege, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 7 })
            },
            "ourLadyMediatrix": {
              "name": "Our Lady, Mediatrix",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 31 })
            },
            "saintLambert": {
              "name": "Saint Lambert, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 17 })
            },
            "saintHubert": {
              "name": "Saint Hubert, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "saintJohnBerchmans": {
              "name": "Saint John Berchmans, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 26 })
            }
          },
          "bolivia": {
            "saintsFelipeDeJesus": {
              "name": "Saints Felipe de Jesus, Paul Miki And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "saintTuribiusOfMogrovejo": {
              "name": "Saint Turibius Of Mogrovejo, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 23 })
            },
            "saintMarianadeJesusDeParedes": {
              "name": "Saint Mariana de Jesus de Paredes, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 25 })
            },
            "blessedNazariaIgnaciaMarch": {
              "name": "Blessed Nazaria Ignacia March, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 23 })
            },
            "saintCamillusDeLellis": {
              "name": "Saint Camillus de Lellis, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 12 })
            },
            "saintFrancisSolanus": {
              "name": "Saint Francis Solanus, Priest",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 14 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 23 })
            },
            "saintPeterClaver": {
              "name": "Saint Peter Claver, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 9 })
            },
            "saintJohnMacias": {
              "name": "Saint John Macias, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 18 })
            },
            "saintLouisBertrAnd": {
              "name": "Saint Louis BertrAnd, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "saintMiguelFebresCOrdero": {
              "name": "Saint Miguel Febres COrdero, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 21 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintAnthonyMaryClaret": {
              "name": "Saint Anthony Mary Claret, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 24 })
            },
            "saintMartindePOrres": {
              "name": "Saint Martin de POrres, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "saintsRoqueGonzalez": {
              "name": "Saints Roque Gonzalez, Alfonso Rodriguez Olmedo, And Juan del Castillo, Priests And Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 19 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "bosniaHerzegovina": {
            "saintScholastica": {
              "name": "Saint Scholastica, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 9 })
            },
            "blessedAloysiusStepinac": {
              "name": "Blessed Aloysius Stepinac, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 10 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "blessedOsannaOfCattaro": {
              "name": "Blessed Osanna Of Cattaro, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 27 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "blessedIvanMerz": {
              "name": "Blessed Ivan Merz",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintLeopoldMAndic": {
              "name": "Saint Leopold MAndic, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 12 })
            },
            "blessedMaryOfJesusCrucifiedPetkovic": {
              "name": "Blessed Mary Of Jesus Crucified Petkovic, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 9 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "ourLadyOfBistrica": {
              "name": "Our Lady Of Bistrica",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 13 })
            },
            "saintElijah": {
              "name": "Saint Elijah, prophet",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 20 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintClementOfOhridAndGorazd": {
              "name": "Saint Clement Of Ohrid And Gorazd, Bishops And Companions",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 27 })
            },
            "blessedAugustinKazotic": {
              "name": "Blessed Augustin Kazotic, Martyr, Bishop",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 3 })
            },
            "saintRoch": {
              "name": "Saint Roch",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "saintMarkoKrizin": {
              "name": "Saint Marko Krizin, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "blessedGraziaOfCattaro": {
              "name": "Blessed Grazia Of Cattaro",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 27 })
            },
            "saintNikolaTavelic": {
              "name": "Saint Nikola Tavelic, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 14 })
            },
            "maryMotherOfTheChurch": {
              "name": "Mary, Mother Of The Church",
              "type": types.OPT_MEMORIAL,
              "data": {}
            }
          },
          "brazil": {
            "saintJosedeAnchieta": {
              "name": "Saint Jose de Anchieta, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 9 })
            },
            "blessedAlbertinaBerkenbrock": {
              "name": "Blessed Albertina Berkenbrock, Virgin And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 15 })
            },
            "saintPaulinaOfTheAgonizingHeartOfJesus": {
              "name": "Saint Paulina Of The Agonizing Heart Of Jesus, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 9 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "blessedInaciodeAzevedo": {
              "name": "Blessed Inacio de Azevedo, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 23 })
            },
            "blessedsAndreDeSoveralAndAmbrosioFranciscoFerro": {
              "name": "Blesseds Andre de Soveral And Ambrosio Francisco Ferro, Priests And Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 3 })
            },
            "ourLadyOfAparecida": {
              "name": "Our Lady Of Aparecida (Nossa SenhOra Aparecida), Patroness Of Brazil",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "saintAnthonyOfSaintAnneGalvao": {
              "name": "Saint Anthony Of Saint Anne Galvao (Frei Galvao), Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 25 })
            },
            "saintsRoqueGonzalezAlfonsoRodriguezAndJuanDelCastillo": {
              "name": "Saints Roque Gonzalez, Alfonso Rodriguez Olmedo, And Juan del Castillo, Priests And Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 19 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            }
          },
          "canada": {
            "saintAndreBessette": {
              "name": "Saint Andre Bessette, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 7 })
            },
            "saintRaymondOfPenyafOrt": {
              "name": "Saint Raymond Of PenyafOrt, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 8 })
            },
            "saintMargueriteBourgeoys": {
              "name": "Saint Marguerite Bourgeoys, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 12 })
            },
            "saintJoseph": {
              "name": "Saint Joseph, spouse Of The Blessed Virgin Mary, Principal Patron Of Canada",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 19 })
            },
            "saintKateriTekakwitha": {
              "name": "Saint Kateri Tekakwitha, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 17 })
            },
            "blessedMarieAnneBlondin": {
              "name": "Blessed Marie Anne Blondin, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 18 })
            },
            "ourLadyOfGoodCounsel": {
              "name": "Our Lady Of Good Counsel",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 26 })
            },
            "saintMarieOfTheIncarnation": {
              "name": "Saint Marie Of The Incarnation, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 30 })
            },
            "blessedMarieLeonieParadis": {
              "name": "Blessed Marie Leonie Paradis, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "saintFrancoisDeLaval": {
              "name": "Saint Francois de Laval, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 6 })
            },
            "blessedCaTherineOfSaintAugustine": {
              "name": "Blessed CaTherine Of Saint Augustine, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 8 })
            },
            "saintEugenedeMazenod": {
              "name": "Saint Eugene de Mazenod, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 21 })
            },
            "blessedLouisZephirinMOreau": {
              "name": "Blessed Louis Zephirin MOreau, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "blessedsNykytaBudkaAndVasylVelychkowsky": {
              "name": "Blesseds Nykyta Budka And Vasyl Velychkowsky, Bishops And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "saintAnneAndSaintJoachim": {
              "name": "Saint Anne, Patron Of Quebec, And Saint Joachim, Parents Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 26 })
            },
            "blessedFredericJanssoone": {
              "name": "Blessed Frederic Janssoone, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 5 })
            },
            "blessedAndreGrasset": {
              "name": "Blessed Andre Grasset, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 2 })
            },
            "blessedDinaBelanger": {
              "name": "Blessed Dina Belanger, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 4 })
            },
            "blessedEmilieTavernierGamelin": {
              "name": "Blessed Emilie Tavernier Gamelin, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "saintsJohnDeBrebeuf": {
              "name": "Saints John de Brebeuf, Isaac Jogues, Priests, And Companions, Martyrs, Secondary Patrons Of Canada",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 26 })
            },
            "blessedMarieRoseDurocher": {
              "name": "Blessed Marie Rose Durocher, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 6 })
            },
            "saintMargueriteDYouville": {
              "name": "Saint Marguerite d'Youville, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 16 })
            },
            "saintHedwig": {
              "name": "Saint Hedwig, Religious Or Saint Margaret Mary Alacoque, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 20 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            }
          },
          "chile": {
            "blessedLauraVicuna": {
              "name": "Blessed Laura Vicuna, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "blessedPiusIX": {
              "name": "Blessed Pius IX, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 7 })
            },
            "ourLadyOfLourdes": {
              "name": "Our Lady Of Lourdes",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 11 })
            },
            "exaltationOfTheHolyCross": {
              "name": "Exaltation Of The Holy Cross",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 3 })
            },
            "saintsPhilipAndJames": {
              "name": "Saints Philip And James, Apostles",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "saintTeresaOfLosAndes": {
              "name": "Saint Teresa Of Los Andes, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 13 })
            },
            "saintCamillusDeLellis": {
              "name": "Saint Camillus de Lellis, Priest, Or Saint Henry",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 14 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel, Mother And Queen Of Chile",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintAlbertoHurtado": {
              "name": "Saint Alberto Hurtado, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 18 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 30 })
            },
            "ourLadyOfMercy": {
              "name": "Our Lady Of Mercy",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "saintJohnXXIII": {
              "name": "Saint John XXIII, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "jesusChristTheEternalHighPriest": {
              "name": "Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "croatia": {
            "blessedAloysiusStepinac": {
              "name": "Blessed Aloysius Stepinac, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 10 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "blessedIvanMerz": {
              "name": "Blessed Ivan Merz",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintLeopoldMAndic": {
              "name": "Saint Leopold MAndic, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 12 })
            },
            "saintQuirinusOfSescia": {
              "name": "Saint Quirinus Of Sescia",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 4 })
            },
            "blessedMaryOfJesusCrucifiedPetkovic": {
              "name": "Blessed Mary Of Jesus Crucified Petkovic, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 9 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "ourLadyOfBistrica": {
              "name": "Our Lady Of Bistrica",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 13 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "blessedAugustinKazotic": {
              "name": "Blessed Augustin Kazotic, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 3 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintMarkoKrizin": {
              "name": "Saint Marko Krizin, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "saintNikolaTavelic": {
              "name": "Saint Nikola Tavelic, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 14 })
            }
          },
          "czechRepublic": {
            "ourLadyMediatrix": {
              "name": "Our Lady, Mediatrix Of All Grace",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 8 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintSigismund": {
              "name": "Saint Sigismund, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 30 })
            },
            "saintJohnNepomucene": {
              "name": "Saint John Nepomucene, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintClementMaryHOfbauer": {
              "name": "Saint Clement Mary HOfbauer, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 20 })
            },
            "saintZdislava": {
              "name": "Saint Zdislava",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 30 })
            },
            "saintVitus": {
              "name": "Saint Vitus, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 15 })
            },
            "saintJohnNeumann": {
              "name": "Saint John Neumann, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 19 })
            },
            "saintProcopius": {
              "name": "Saint Procopius, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 4 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 5 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "blessedHrzonata": {
              "name": "Blessed Hrzonata, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 14 })
            },
            "blessedCeslausAndSaintHyacinth": {
              "name": "Blessed Ceslaus And Saint Hyacinth, Priests",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "saintBridget": {
              "name": "Saint Bridget, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintsBenedykt": {
              "name": "Saints Benedykt, Jan, Mateusz, Isaak And Krystyn, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 25 })
            },
            "blessedTeresaOfCalcutta": {
              "name": "Blessed Teresa Of Calcutta, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 5 })
            },
            "saintMelchiOrGrodziecki": {
              "name": "Saint MelchiOr Grodziecki, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "blessedCharlesSpinola": {
              "name": "Blessed Charles Spinola, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 10 })
            },
            "saintLudmila": {
              "name": "Saint Ludmila, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 16 })
            },
            "saintWenceslaus": {
              "name": "Saint Wenceslaus, Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 28 })
            },
            "saintRadim": {
              "name": "Saint Radim, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "blessedKarlOfAustria": {
              "name": "Blessed Karl Of Austria",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 21 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintWolfgang": {
              "name": "Saint Wolfgang, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 31 })
            },
            "saintAgnesOfBohemia": {
              "name": "Saint Agnes Of Bohemia, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 13 })
            },
            "saintEdmundCampion": {
              "name": "Saint Edmund Campion, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 1 })
            }
          },
          "englAnd": {
            "saintAelredOfRievaulx": {
              "name": "Saint Aelred Of Rievaulx",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 12 })
            },
            "saintWulstan": {
              "name": "Saint Wulstan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 19 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk, And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintDavid": {
              "name": "Saint David, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 1 })
            },
            "saintPatrick": {
              "name": "Saint Patrick, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintAnselmOfCanterbury": {
              "name": "Saint Anselm Of Canterbury, Bishop And DoctOr",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 21 })
            },
            "saintGeorge": {
              "name": "Saint George, Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr Or Saint Fidelis Of Sigmaringen, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 24 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "TheEnglishMartyrs": {
              "name": "The English Martyrs",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "saintDunstan": {
              "name": "Saint Dunstan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 19 })
            },
            "saintBedeTheVenerable": {
              "name": "Saint Bede The Venerable, Priest And DoctOr",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 25 })
            },
            "saintAugustineOfCanterbury": {
              "name": "Saint Augustine Of Canterbury, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 27 })
            },
            "saintBoniface": {
              "name": "Saint Boniface, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 5 })
            },
            "saintColumba": {
              "name": "Saint Columba, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 9 })
            },
            "saintRichardOfChichester": {
              "name": "Saint Richard Of Chichester, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 16 })
            },
            "saintAlban": {
              "name": "Saint Alban, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 20 })
            },
            "saintsJohnFisherAndThomasMOre": {
              "name": "Saints John Fisher, Bishop And Thomas MOre, Martyrs",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 22 })
            },
            "saintETheldreda": {
              "name": "Saint ETheldreda (Audrey), Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 23 })
            },
            "saintOliverPlunket": {
              "name": "Saint Oliver Plunket, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBridget": {
              "name": "Saint Bridget, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "blessedDominicOfTheMotherOfGodBarberi": {
              "name": "Blessed Dominic Of The Mother Of God Barberi, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintsMargaretCliTherow": {
              "name": "Saints Margaret CliTherow, Anne Line And Margaret Ward, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 30 })
            },
            "saintAidan": {
              "name": "Saint Aidan, Bishop And The Saints Of Lindisfarne",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 31 })
            },
            "saintGregOryTheGreat": {
              "name": "Saint GregOry The Great, Pope And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 3 })
            },
            "saintCuthbert": {
              "name": "Saint Cuthbert, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 4 })
            },
            "saintTheodOreOfCanterbury": {
              "name": "Saint TheodOre Of Canterbury, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 19 })
            },
            "ourLadyOfWalsingham": {
              "name": "Our Lady Of Walsingham",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "blessedJohnHenryNewman": {
              "name": "Blessed John Henry Newman, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "saintPaulinusOfYOrk": {
              "name": "Saint Paulinus Of YOrk, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 10 })
            },
            "saintWilfrid": {
              "name": "Saint Wilfrid, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "saintEdwardTheConfessOr": {
              "name": "Saint Edward The ConfessOr",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 13 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintsChadAndCedd": {
              "name": "Saints Chad And Cedd, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 26 })
            },
            "saintWinefride": {
              "name": "Saint Winefride, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "saintWillibrOrd": {
              "name": "Saint WillibrOrd, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 7 })
            },
            "saintEdmundOfAbingdon": {
              "name": "Saint Edmund Of Abingdon, Bishop Or Saint Margaret Of ScotlAnd",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 16 })
            },
            "saintHilda": {
              "name": "Saint Hilda, Abbess Or Saint Hugh Of Lincoln, Bishop Or Saint Elizabeth Of Hungary",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 17 })
            },
            "saintAndrew": {
              "name": "Saint Andrew, Apostle",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 30 })
            },
            "saintThomasBecket": {
              "name": "Saint Thomas Becket, Bishop And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 29 })
            }
          },
          "france": {
            "saintGenevieve": {
              "name": "Saint Genevieve, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 3 })
            },
            "saintRemigius": {
              "name": "Saint Remigius, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 15 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintBernadetteSoubirous": {
              "name": "Saint Bernadette Soubirous, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 19 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintIvo": {
              "name": "Saint Ivo, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 20 })
            },
            "saintJoanOfArc": {
              "name": "Saint Joan Of Arc, Virgin, Secondary Patroness Of France",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 30 })
            },
            "saintPothinus": {
              "name": "Saint Pothinus, Bishop, Saint BlAndina, Virgin, And Their Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 2 })
            },
            "saintClotilde": {
              "name": "Saint Clotilde",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 5 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "assumptionOfTheBlessedVirginMary": {
              "name": "Assumption Of The Blessed Virgin Mary, Principal Patroness Of France",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 15 })
            },
            "saintCaesariusOfArles": {
              "name": "Saint Caesarius Of Arles, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintThereseOfTheChildJesus": {
              "name": "Saint Therese Of The Child Jesus, Virgin, Secondary Patroness Of France",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 1 })
            },
            "saintJohnXXIII": {
              "name": "Saint John XXIII, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            }
          },
          "finlAnd": {
            "saintHenry": {
              "name": "Saint Henry, Bishop And Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 19 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintEricIX": {
              "name": "Saint Eric IX, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 18 })
            },
            "blessedHemming": {
              "name": "Blessed Hemming, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 22 })
            },
            "saintUrsulaLedochowska": {
              "name": "Saint Ursula Ledochowska, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 29 })
            },
            "blessedElisabethHesselbald": {
              "name": "Blessed Elisabeth Hesselbald, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 4 })
            },
            "saintJosemariaEscrivadeBalaguer": {
              "name": "Saint Josemaria Escriva de Balaguer, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 26 })
            },
            "saintCanute": {
              "name": "Saint Canute, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 10 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintThOrlac": {
              "name": "Saint ThOrlac, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 20 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintOlafII": {
              "name": "Saint Olaf II, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 29 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "blessedNicolasSteno": {
              "name": "Blessed Nicolas Steno, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 25 })
            }
          },
          "germany": {
            "saintJohnNeumann": {
              "name": "Saint John Neumann, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 5 })
            },
            "saintValentineOfRaetia": {
              "name": "Saint Valentine Of Raetia, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 7 })
            },
            "saintSeverinusOfNOricum": {
              "name": "Saint Severinus Of NOricum, Monk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 8 })
            },
            "saintMeinrad": {
              "name": "Saint Meinrad, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 21 })
            },
            "blessedHenrySuso": {
              "name": "Blessed Henry Suso, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 23 })
            },
            "saintRabanusMaurus": {
              "name": "Saint Rabanus Maurus, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 4 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintMatthias": {
              "name": "Saint Matthias, Apostle",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 24 })
            },
            "saintWalburga": {
              "name": "Saint Walburga, Abbess",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 25 })
            },
            "saintFridolinOfSäckingen": {
              "name": "Saint Fridolin Of Säckingen, Monk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 6 })
            },
            "saintBrunoOfQuerfurt": {
              "name": "Saint Bruno Of Querfurt, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 9 })
            },
            "saintMatilda": {
              "name": "Saint Matilda",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 14 })
            },
            "saintClementMaryHOfbauer": {
              "name": "Saint Clement Mary HOfbauer, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 15 })
            },
            "saintGertrudeOfNivelles": {
              "name": "Saint Gertrude Of Nivelles, Abbess",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintLudger": {
              "name": "Saint Ludger, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 26 })
            },
            "saintLeoIX": {
              "name": "Saint Leo IX, Pope Or Blessed Marcel Callo, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 19 })
            },
            "saintConradOfParzham": {
              "name": "Saint Conrad Of Parzham, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 21 })
            },
            "saintPeterCanisius": {
              "name": "Saint Peter Canisius, Priest And DoctOr",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 27 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintFlorianAndhisCompanions": {
              "name": "Saint FlOrian And his Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "saintGotthard": {
              "name": "Saint Gotthard, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 5 })
            },
            "saintJohnNepomucene": {
              "name": "Saint John Nepomucene, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintHermannJoseph": {
              "name": "Saint Hermann Joseph, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 21 })
            },
            "saintVitus": {
              "name": "Saint Vitus, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 15 })
            },
            "saintBennoOfMeissen": {
              "name": "Saint Benno Of Meissen, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 16 })
            },
            "saintHemmaOfGurk": {
              "name": "Saint Hemma Of Gurk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "saintOttoOfBamberg": {
              "name": "Saint Otto Of Bamberg, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 30 })
            },
            "visitationOfTheBlessedVirginMary": {
              "name": "Visitation Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 2 })
            },
            "saintUlrichOfAugsburg": {
              "name": "Saint Ulrich Of Augsburg",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 4 })
            },
            "saintWillibald": {
              "name": "Saint Willibald, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 7 })
            },
            "saintKilian": {
              "name": "Saint Kilian, Bishop And Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 8 })
            },
            "saintsCanute": {
              "name": "Saints Canute, Eric And Olaf, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 10 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintsHenryAndCunigunde": {
              "name": "Saints Henry And Cunigunde",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 13 })
            },
            "saintMargaretOfAntioch": {
              "name": "Saint Margaret Of Antioch, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 20 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintChristopher": {
              "name": "Saint Christopher, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintPaulinusOfTrier": {
              "name": "Saint Paulinus Of Trier, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 31 })
            },
            "saintHildegardOfBingen": {
              "name": "Saint Hildegard Of Bingen, Abbess And DoctOr",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 17 })
            },
            "saintLambertOfMaastricht": {
              "name": "Saint Lambert Of Maastricht, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 18 })
            },
            "saintMauriceAndCompanions": {
              "name": "Saint Maurice And Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 22 })
            },
            "saintsRupertAndVirgiliusOfSalzburg": {
              "name": "Saints Rupert And Virgilius Of Salzburg, Bishops",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "saintNicholasOfFlüe": {
              "name": "Saint Nicholas Of Flüe, Hermit",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 25 })
            },
            "saintLeoba": {
              "name": "Saint Leoba, Abbess",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 28 })
            },
            "saintGall": {
              "name": "Saint Gall, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 16 })
            },
            "saintWendelin": {
              "name": "Saint Wendelin, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 20 })
            },
            "saintUrsulaAndCompanions": {
              "name": "Saint Ursula And Companions, Virgins And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 21 })
            },
            "saintWolfgangOfRegensburg": {
              "name": "Saint Wolfgang Of Regensburg, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 31 })
            },
            "saintHubertOfLiege": {
              "name": "Saint Hubert Of Liege, Bishop Or Saint Pirmin, Abbot And Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "saintLeonardOfNoblac": {
              "name": "Saint Leonard Of Noblac, Hermit",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 6 })
            },
            "saintWillibrOrd": {
              "name": "Saint WillibrOrd, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 7 })
            },
            "saintLeopoldIII": {
              "name": "Saint Leopold III",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 15 })
            },
            "saintGertrudeTheGreat": {
              "name": "Saint Gertrude The Great, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 17 })
            },
            "saintElizabethOfHungary": {
              "name": "Saint Elizabeth Of Hungary, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 19 })
            },
            "saintCOrbinian": {
              "name": "Saint COrbinian, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 20 })
            },
            "saintsConradAndGebhardOfConstance": {
              "name": "Saints Conrad And Gebhard Of Constance, Bishops",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 26 })
            },
            "saintLuciusOfChur": {
              "name": "Saint Lucius Of Chur, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 2 })
            },
            "saintBarbara": {
              "name": "Saint Barbara, Virgin And Martyr Or Blessed Adolph Kolping, Priest",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 4 })
            },
            "saintAnnoII": {
              "name": "Saint Anno II, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 5 })
            },
            "saintOdileOfAlsace": {
              "name": "Saint Odile Of Alsace, Abbess",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 13 })
            }
          },
          "greece": {
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCyrilOfJerusalem": {
              "name": "Saint Cyril Of Jerusalem",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 18 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 22 })
            },
            "saintGeorge": {
              "name": "Saint George",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintIrene": {
              "name": "Saint Irene",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 5 })
            },
            "blessedVirginMary": {
              "name": "Blessed Virgin Mary, Mother Of The Church",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 13 })
            },
            "ourLadyOfFatima": {
              "name": "Our Lady Of Fatima",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "saintCyrilOfAlexAndria": {
              "name": "Saint Cyril Of AlexAndria",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "saintBenedict": {
              "name": "Saint Benedict",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintMarina": {
              "name": "Saint Marina",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintPantaleon": {
              "name": "Saint Pantaleon",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 27 })
            },
            "saintLydiaOfPhilippi": {
              "name": "Saint Lydia Of Philippi",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 3 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein)",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintsCosmasAndDamian": {
              "name": "Saints Cosmas And Damian",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 26 })
            },
            "saintDionysiusTheAreopagite": {
              "name": "Saint Dionysius The Areopagite",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 3 })
            },
            "saintDemetrius": {
              "name": "Saint Demetrius",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 26 })
            },
            "presentationOfTheBlessedVirginMary": {
              "name": "Presentation Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 21 })
            },
            "saintJohnDamasceneOrSaintBarbara": {
              "name": "Saint John Damascene Or Saint Barbara",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 4 })
            },
            "saintNicholas": {
              "name": "Saint Nicholas",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 6 })
            },
            "saintSpyridon": {
              "name": "Saint Spyridon",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            }
          },
          "hungary": {
            "saintMargaretOfHungary": {
              "name": "Saint Margaret Of Hungary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 18 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintMatthias": {
              "name": "Saint Matthias, Apostle",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 24 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintFlorian": {
              "name": "Saint Florian, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "blessedGisela": {
              "name": "Blessed Gisela",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 7 })
            },
            "blessedSaraSalkahazi": {
              "name": "Blessed Sara Salkahazi, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 11 })
            },
            "saintJohnNepomucene": {
              "name": "Saint John Nepomucene, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "blessedVilmosApor": {
              "name": "Blessed Vilmos Apor, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 23 })
            },
            "ourLadyHelpOfChristians": {
              "name": "Our Lady, Help Of Christians",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "transferOfTheRelicsOfSaintStephen": {
              "name": "Transfer Of The Relics Of Saint Stephen",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 30 })
            },
            "blessedIstvanSandor": {
              "name": "Blessed Istvan Sandor, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 8 })
            },
            "saintLadislaus": {
              "name": "Saint Ladislaus",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "visitationOfTheBlessedVirginMary": {
              "name": "Visitation Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 2 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintsAndrewZoerardusAndBenedict": {
              "name": "Saints Andrew Zoerardus And Benedict, Hermits",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintKinga": {
              "name": "Saint Kinga, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "blessedInnocentXI": {
              "name": "Blessed Innocent XI, Pope",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 13 })
            },
            "saintStephenOfHungary": {
              "name": "Saint Stephen Of Hungary",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 20 })
            },
            "blessedTeresaOfCalcutta": {
              "name": "Blessed Teresa Of Calcutta, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 5 })
            },
            "saintsMarkoKrizinAndStephenPongrac": {
              "name": "Saints Marko Krizin, Melichar Grodecki And Stephen Pongrac, Priests And Martyrs",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "saintGerard": {
              "name": "Saint Gerard, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "ourLadyOfHungary": {
              "name": "Our Lady Of Hungary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 8 })
            },
            "saintJohnXXIII": {
              "name": "Saint John XXIII, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintMaurus": {
              "name": "Saint Maurus, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 25 })
            },
            "blessedTheodoreRomzha": {
              "name": "Blessed Theodore Romzha, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 31 })
            },
            "saintEmeric": {
              "name": "Saint Emeric",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 4 })
            },
            "hungarianSaintsAndBlesseds": {
              "name": "Hungarian Saints And Blesseds",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 13 })
            }
          },
          "india": {
            "blessedKuriakoseEliasChavara": {
              "name": "Blessed Kuriakose Elias Chavara, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 3 })
            },
            "blessedJosephVaz": {
              "name": "Blessed Joseph Vaz, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 16 })
            },
            "saintJohndeBrito": {
              "name": "Saint John de Brito, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 4 })
            },
            "saintGonsaloGarcia": {
              "name": "Saint Gonsalo Garcia, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "blessedMariaTheresaChiramel": {
              "name": "Blessed Maria Theresa Chiramel, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 8 })
            },
            "saintThomasTheApostle": {
              "name": "Saint Thomas The Apostle",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 3 })
            },
            "saintAlphonsaOfTheImmaculateConception": {
              "name": "Saint Alphonsa Of The Immaculate Conception, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 28 })
            },
            "blessedTeresaOfCalcutta": {
              "name": "Blessed Teresa Of Calcutta, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 5 })
            },
            "saintFrancisXavier": {
              "name": "Saint Francis Xavier, Priest",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 3 })
            }
          },
          "ireland": {
            "saintMunchin": {
              "name": "Saint Munchin, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 3 })
            },
            "saintIta": {
              "name": "Saint Ita, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 15 })
            },
            "saintFursa": {
              "name": "Saint Fursa, Abbot And Missionary",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 16 })
            },
            "saintAidan": {
              "name": "Saint Aidan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 30 })
            },
            "saintBrigid": {
              "name": "Saint Brigid, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 1 })
            },
            "saintMel": {
              "name": "Saint Mel, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 7 })
            },
            "saintGobnait": {
              "name": "Saint Gobnait, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 11 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintFintan": {
              "name": "Saint Fintan",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 17 })
            },
            "saintDavid": {
              "name": "Saint David, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 1 })
            },
            "saintKieran": {
              "name": "Saint Kieran, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 5 })
            },
            "saintSenan": {
              "name": "Saint Senan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 8 })
            },
            "saintAengus": {
              "name": "Saint Aengus (Oengus), Bishop And Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 11 })
            },
            "saintPatrick": {
              "name": "Saint Patrick, Bishop",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintEnda": {
              "name": "Saint Enda, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 21 })
            },
            "saintMacartan": {
              "name": "Saint Macartan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 24 })
            },
            "saintCeallach": {
              "name": "Saint Ceallach (Celsus), Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 1 })
            },
            "saintMolaise": {
              "name": "Saint Molaise (Laisren, Laserian), Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 18 })
            },
            "saintAsicus": {
              "name": "Saint Asicus, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 27 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintConleth": {
              "name": "Saint Conleth, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "blessedEdmundIgnatiusRice": {
              "name": "Blessed Edmund Ignatius Rice, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 5 })
            },
            "saintComgall": {
              "name": "Saint Comgall, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintCarthage": {
              "name": "Saint Carthage, Bishop (Mochuta)",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "saintBrendan": {
              "name": "Saint Brendan, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintKevin": {
              "name": "Saint Kevin, Abbot",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 3 })
            },
            "saintJarlath": {
              "name": "Saint Jarlath, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 6 })
            },
            "saintColmanOfDromore": {
              "name": "Saint Colman Of Dromore, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 7 })
            },
            "saintColumba": {
              "name": "Saint Columba, Abbot And Missionary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 9 })
            },
            "saintDavnet": {
              "name": "Saint Davnet, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 14 })
            },
            "blessedIrishMartyrs": {
              "name": "Blessed Irish Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 20 })
            },
            "saintOliverPlunkett": {
              "name": "Saint Oliver Plunkett, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "saintMoninne": {
              "name": "Saint Moninne, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 6 })
            },
            "saintMaelruain": {
              "name": "Saint Maelruain (Maolruain), Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 7 })
            },
            "saintKillian": {
              "name": "Saint Killian, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 8 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintDeclan": {
              "name": "Saint Declan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintMuiredach": {
              "name": "Saint Muiredach, Bishop, Saint Attracta, Virgin, Or Saint Lelia, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 12 })
            },
            "saintFachtna": {
              "name": "Saint Fachtna, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 13 })
            },
            "ourLadyOfKnock": {
              "name": "Our Lady Of Knock",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 17 })
            },
            "saintEugene": {
              "name": "Saint Eugene (Eoghan), Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 23 })
            },
            "saintFiacre": {
              "name": "Saint Fiacre, Monk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 30 })
            },
            "saintAidanOfLindisfarne": {
              "name": "Saint Aidan Of Lindisfarne, Bishop And Missionary",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 31 })
            },
            "saintMacNissi": {
              "name": "Saint Mac Nissi, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 4 })
            },
            "saintCiaran": {
              "name": "Saint Ciaran, Abbot",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 9 })
            },
            "saintAilbe": {
              "name": "Saint Ailbe, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 12 })
            },
            "saintPioOfPietralcina": {
              "name": "Saint Pio Of Pietralcina",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 23 })
            },
            "saintFinbarr": {
              "name": "Saint Finbarr, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 25 })
            },
            "blessedColumbaMarmion": {
              "name": "Blessed Columba Marmion, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 3 })
            },
            "blessedJohnHenryNewman": {
              "name": "Blessed John Henry Newman, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "saintCanice": {
              "name": "Saint Canice, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "saintGall": {
              "name": "Saint Gall, Abbot And Missionary",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 16 })
            },
            "saintOtteran": {
              "name": "Saint Otteran, Monk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 27 })
            },
            "saintColmanOfKilmacduagh": {
              "name": "Saint Colman Of Kilmacduagh, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 29 })
            },
            "saintMalachy": {
              "name": "Saint Malachy, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "allSaintsOfIreland": {
              "name": "All Saints Of Ireland",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 6 })
            },
            "saintWillibrord": {
              "name": "Saint Willibrord, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 7 })
            },
            "saintLaurenceOToole": {
              "name": "Saint Laurence O'Toole, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 14 })
            },
            "saintColumban": {
              "name": "Saint Columban, Abbot And Missionary",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 23 })
            },
            "saintColmanOfCloyne": {
              "name": "Saint Colman Of Cloyne, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 25 })
            },
            "saintFergal": {
              "name": "Saint Fergal, Bishop And Missionary",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 27 })
            },
            "saintFinnianOfClonard": {
              "name": "Saint Finnian Of Clonard, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "saintFlannan": {
              "name": "Saint Flannan, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 18 })
            },
            "saintFachananOfKilfenOra": {
              "name": "Saint Fachanan Of KilfenOra, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 20 })
            }
          },
          "japan": {
            "saintsPaulMikiAndCompanions": {
              "name": "Saints Paul Miki And Companions, Martyrs",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "discoveryOfTheHiddenChristians": {
              "name": "Discovery Of The Hidden Christians",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "blessedPeterKibe": {
              "name": "Blessed Peter Kibe, Priest And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "the205BlessedMartyrsOfJapan": {
              "name": "205 Blessed Martyrs Of Japan",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 10 })
            },
            "saintThomasRokuzayemon": {
              "name": "Saint Thomas Rokuzayemon, Priest And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 28 })
            },
            "saintFrancisXavier": {
              "name": "Saint Francis Xavier, Priest",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 3 })
            }
          },
          "lebanon": {
            "saintBarbara": {
              "name": "Saint Barbara, Virgin And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 4 })
            },
            "saintNicholas": {
              "name": "Saint Nicholas, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 6 })
            },
            "saintCharbel": {
              "name": "Saint Charbel, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 24 })
            },
            "saintMaroun": {
              "name": "Saint Maroun",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 9 })
            },
            "saintRafqa": {
              "name": "Saint Rafqa (Rebecca), Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 23 })
            },
            "saintGeorge": {
              "name": "Saint George, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "ourLadyOfLebanon": {
              "name": "Our Lady Of Lebanon",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 1 })
            }
          },
          "lithuania": {
            "blessedJerzyMatulewicz": {
              "name": "Blessed Jerzy Matulewicz, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 27 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCasimir": {
              "name": "Saint Casimir",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 4 })
            },
            "saintBrunoBonifaceOfQuerfurt": {
              "name": "Saint Bruno Boniface Of Querfurt, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 9 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintAndrewBobola": {
              "name": "Saint Andrew Bobola, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "ourLadyMotherOfMercy": {
              "name": "Our Lady, Mother Of Mercy",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 16 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintRocco": {
              "name": "Saint Rocco",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "saintHyacinth": {
              "name": "Saint Hyacinth",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 17 })
            },
            "birthOfTheBlessedVirginMary": {
              "name": "Birth Of The Blessed Virgin Mary",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 8 })
            },
            "saintFaustinaKowalska": {
              "name": "Saint Faustina Kowalska, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 5 })
            }
          },
          "malta": {
            "saintPublius": {
              "name": "Saint Publius, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "shipwreckOfSaintPaul": {
              "name": "Shipwreck Of Saint Paul, Apostle",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 10 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "blessedMariaAdeodataPisani": {
              "name": "Blessed Maria Adeodata Pisani, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 25 })
            },
            "ourLadyOfSorrows": {
              "name": "Our Lady Of Sorrows",
              "type": types.FEAST,
              "data": {}
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintPiusV": {
              "name": "Saint Pius V, Pope",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 30 })
            },
            "saintGeorgePreca": {
              "name": "Saint George Preca, Priest",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 9 })
            },
            "blessedNazjuFalzon": {
              "name": "Blessed Nazju Falzon",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "birthOfTheBlessedVirginMary": {
              "name": "Birth Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 8 })
            },
            "saintCaTherineOfAlexAndria": {
              "name": "Saint CaTherine Of AlexAndria, Virgin And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 25 })
            }
          },
          "mexico": {
            "saintFelipedeJesus": {
              "name": "Saint Felipe de Jesus, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "blessedSebastiAndeAparicio": {
              "name": "Blessed Sebastian de Aparicio, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 25 })
            },
            "saintCristobalMagallanesAndCompanions": {
              "name": "Saint Cristobal Magallanes And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 21 })
            },
            "saintMariadeJesusSacramentadoVenegas": {
              "name": "Saint Maria de Jesus Sacramentado Venegas, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 30 })
            },
            "blessedBartolomeLaurel": {
              "name": "Blessed Bartolome Laurel, Religious And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "blessedsPedroZunigaAndLuisFlOres": {
              "name": "Blesseds Pedro Zuniga And Luis FlOres, Priests And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "blessedJuniperoSerra": {
              "name": "Blessed Junipero Serra, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintJoseMariadeYermo": {
              "name": "Saint Jose Maria de Yermo, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 19 })
            },
            "saintRafaelGuizaryValencia": {
              "name": "Saint Rafael Guizar y Valencia, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 24 })
            },
            "blessedMiguelAgustinPro": {
              "name": "Blessed Miguel Agustin Pro, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 23 })
            },
            "saintJuanDiego": {
              "name": "Saint Juan Diego",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 9 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "newZealand": {
            "waitangiDay": {
              "name": "Waitangi Day",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "saintPaulMikiAndCompanions": {
              "name": "Saint Paul Miki And Companions",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 7 })
            },
            "saintPatrick": {
              "name": "Saint Patrick, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintMark": {
              "name": "Saint Mark, Apostle",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 26 })
            },
            "saintLouisGrignondeMontfort": {
              "name": "Saint Louis Grignon de Montfort, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 27 })
            },
            "saintPeterChanel": {
              "name": "Saint Peter Chanel, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 28 })
            },
            "ourLadyHelpOfChristians": {
              "name": "Our Lady, Help Of Christians",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "saintMarcellinChampagnat": {
              "name": "Saint Marcellin Champagnat, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 6 })
            },
            "saintDominic": {
              "name": "Saint Dominic, Priest Or Saint Sixtus II, Pope, And Companions, Martyrs, Or Saint Cajetan, Priest",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 7 })
            },
            "saintMaryMacKillop": {
              "name": "Saint Mary MacKillop, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 8 })
            }
          },
          "norway": {
            "saintThorfinn": {
              "name": "Saint Thorfinn, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 8 })
            },
            "saintHenry": {
              "name": "Saint Henry, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 19 })
            },
            "saintEysteinn": {
              "name": "Saint Eysteinn, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 26 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintMagnus": {
              "name": "Saint Magnus, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintEricIX": {
              "name": "Saint Eric IX, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 18 })
            },
            "saintSunniva": {
              "name": "Saint Sunniva, Virgin And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 8 })
            },
            "saintCanute": {
              "name": "Saint Canute, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 10 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintSwithun": {
              "name": "Saint Swithun, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 15 })
            },
            "saintThorlac": {
              "name": "Saint Thorlac, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 20 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintOlafII": {
              "name": "Saint Olaf II, Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 29 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "blessedNicolasSteno": {
              "name": "Blessed Nicolas Steno, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 25 })
            }
          },
          "peru": {
            "findingOfTheHolyCross": {
              "name": "Finding Of The Holy Cross",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 3 })
            },
            "ourLadyHelpOfChristians": {
              "name": "Our Lady, Help Of Christians",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "saintMarianadeJesusDeParedes": {
              "name": "Saint Mariana de Jesus de Paredes, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 26 })
            },
            "saintFrancisSolanus": {
              "name": "Saint Francis Solanus, Priest",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 14 })
            },
            "ourLadyOfPeace": {
              "name": "Our Lady Of Peace",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 28 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima, Virgin",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 23 })
            },
            "saintJohnMacias": {
              "name": "Saint John Macias, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 18 })
            },
            "ourLadyOfMercy": {
              "name": "Our Lady Of Mercy",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 24 })
            },
            "ourLordOfMiracles": {
              "name": "Our Lord Of Miracles",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 28 })
            },
            "saintMartindePorres": {
              "name": "Saint Martin de Porres, Religious",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "philippines": {
            "santoNino": {
              "name": "Santo Nino (Infant Jesus)",
              "type": types.FEAST,
              "data": {}
            },
            "saintsPedroBautista": {
              "name": "Saints Pedro Bautista, Paul Miki And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 6 })
            },
            "saintPedroCalungsod": {
              "name": "Saint Pedro Calungsod, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 2 })
            },
            "saintIsidoreTheFarmer": {
              "name": "Saint Isidore The Farmer",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "saintRoch": {
              "name": "Saint Roch",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 16 })
            },
            "saintEzekielMoreno": {
              "name": "Saint Ezekiel Moreno, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 19 })
            },
            "saintLorenzoRuizAndCompanions": {
              "name": "Saint Lorenzo Ruiz And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 28 })
            },
            "immaculateConceptionOfTheBlessedVirginMary": {
              "name": "Immaculate Conception Of The Blessed Virgin Mary, Principal Patroness Of The Philippines",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 8 })
            }
          },
          "poland": {
            "saintVincentPallotti": {
              "name": "Saint Vincent Pallotti, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "blessedVincentLewoniukAndCompanions": {
              "name": "Blessed Vincent Lewoniuk And Companions, Martyrs Of Pratulin",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 23 })
            },
            "blessedJerzyMatulewicz": {
              "name": "Blessed Jerzy Matulewicz, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 27 })
            },
            "blessedBolestawaMariaLament": {
              "name": "Blessed Bolestawa Maria Lament, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 29 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCasimir": {
              "name": "Saint Casimir",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 4 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "ourLadyHelpOfChristians": {
              "name": "Our Lady, Help Of Christians",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 24 })
            },
            "saintFlorian": {
              "name": "Saint Florian, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "saintStanislausKazimierczyk": {
              "name": "Saint Stanislaus Kazimierczyk, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 5 })
            },
            "saintsPhilipAndJames": {
              "name": "Saints Philip And James, Apostles",
              "type": types.FEAST_APOSTLE,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 6 })
            },
            "saintStanislaus": {
              "name": "Saint Stanislaus, Bishop And Martyr",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 8 })
            },
            "saintAndrewBobola": {
              "name": "Saint Andrew Bobola, Priest And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintUrsulaLedochowska": {
              "name": "Saint Ursula Ledochowska, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 29 })
            },
            "saintJohnSarkander": {
              "name": "Saint John Sarkander, Priest And Martyr Or Saint Zdzistawa",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 30 })
            },
            "blessedBogumit": {
              "name": "Blessed Bogumit, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 10 })
            },
            "blessedAntoniNowowiejski": {
              "name": "Blessed Antoni Nowowiejski, Bishop And Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 12 })
            },
            "blessedMichaelKozal": {
              "name": "Blessed Michael Kozal, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 14 })
            },
            "blessedJolanta": {
              "name": "Blessed Jolanta, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 15 })
            },
            "saintAlbertChmielowski": {
              "name": "Saint Albert Chmielowski, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 17 })
            },
            "saintZygmuntGorazdowsk": {
              "name": "Saint Zygmunt Gorazdowsk, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 26 })
            },
            "saintOtto": {
              "name": "Saint Otto, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "blessedMariaTeresiaLedochowska": {
              "name": "Blessed Maria Teresia Ledochowska, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 6 })
            },
            "saintJohnOfDukla": {
              "name": "Saint John Of Dukla, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 8 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBrunoBonifaceOfQuerfurt": {
              "name": "Saint Bruno Boniface Of Querfurt, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 12 })
            },
            "saintsAndrzejSwieradAndBenedict": {
              "name": "Saints Andrzej Swierad And Benedict, Hermits",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 13 })
            },
            "saintSimonOfLipnica": {
              "name": "Saint Simon Of Lipnica, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 18 })
            },
            "blessedCzestaw": {
              "name": "Blessed Czestaw, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 20 })
            },
            "saintBridget": {
              "name": "Saint Bridget, Religious, Patron Of Europe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintKinga": {
              "name": "Saint Kinga, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "blessedEdmundBojanowski": {
              "name": "Blessed Edmund Bojanowski",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 7 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintHyacinth": {
              "name": "Saint Hyacinth, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 17 })
            },
            "ourLadyOfCzestochowa": {
              "name": "Our Lady Of Czestochowa",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "blessedBronistawa": {
              "name": "Blessed Bronistawa, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 1 })
            },
            "blessedMariaStellaAndCompanions": {
              "name": "Blessed Maria Stella And Companions, Virgins And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 4 })
            },
            "saintMelchiOrGrodziecki": {
              "name": "Saint MelchiOr Grodziecki, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "blessedAnielaSalawa": {
              "name": "Blessed Aniela Salawa, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 9 })
            },
            "saintZygmuntSzczesnyFelinski": {
              "name": "Saint Zygmunt Szczesny Felinski, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 17 })
            },
            "saintStanislausKostka": {
              "name": "Saint Stanislaus Kostka, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 18 })
            },
            "blessedWtadystawOfGielniow": {
              "name": "Blessed Wtadystaw Of Gielniow, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 25 })
            },
            "saintFaustinaKowalska": {
              "name": "Saint Faustina Kowalska, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 5 })
            },
            "blessedVincentKadtubek": {
              "name": "Blessed Vincent Kadtubek, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "blessedMaryAngelaTruszkowska": {
              "name": "Blessed Mary Angela Truszkowska, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 10 })
            },
            "blessedJohnBeyzym": {
              "name": "Blessed John Beyzym, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "blessedHonOratKozminski": {
              "name": "Blessed HonOrat Kozminski, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 13 })
            },
            "saintJohnOfKety": {
              "name": "Saint John Of Kety, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 20 })
            },
            "blessedJakubStrzemie": {
              "name": "Blessed Jakub Strzemie, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 21 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintJosefBilczewski": {
              "name": "Saint Josef Bilczewski, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 23 })
            },
            "saintsBenedykt": {
              "name": "Saints Benedykt, Jan, Mateusz, Isaak And Krystyn, The first Martyrs Of PolAnd",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 13 })
            },
            "blessedKarolinaKozkowna": {
              "name": "Blessed Karolina Kozkowna, Virgin And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 18 })
            },
            "blessedSalome": {
              "name": "Blessed Salome, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 19 })
            },
            "saintRafatKalinowski": {
              "name": "Saint Rafat Kalinowski, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 20 })
            },
            "blessedMaryOfJesusTheGoodShepherd": {
              "name": "Blessed Mary Of Jesus The Good Shepherd, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 25 })
            },
            "blessedRafatChylinski": {
              "name": "Blessed Rafat Chylinski, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 1 })
            },
            "saintBarbara": {
              "name": "Saint Barbara, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 4 })
            },
            "maryMotherOfTheChurch": {
              "name": "Mary, Mother Of The Church",
              "type": types.FEAST,
              "data": {}
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "portugal": {
            "blessedGoncalodeAmarante": {
              "name": "Blessed Goncalo de Amarante, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 11 })
            },
            "saintJohndeBrito": {
              "name": "Saint John de Brito, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 4 })
            },
            "TheFiveWoundsOfTheLord": {
              "name": "The Five Wounds Of The Lord",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 7 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintTheotonius": {
              "name": "Saint Theotonius, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 18 })
            },
            "blessedJacintaAndFranciscoMarto": {
              "name": "Blessed Jacinta And Francisco Marto",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 20 })
            },
            "saintJohnOfGod": {
              "name": "Saint John Of God, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 8 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "blessedJoanOfPortugal": {
              "name": "Blessed Joan Of Portugal, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 12 })
            },
            "ourLadyOfFatima": {
              "name": "Our Lady Of Fatima",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 13 })
            },
            "guardianAngelOfPOrtugal": {
              "name": "Guardian Angel Of POrtugal",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 10 })
            },
            "saintAnthonyOfLisbon": {
              "name": "Saint Anthony Of Lisbon, Priest And DoctOr Of The Church",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 13 })
            },
            "blessedSanchaAndMafalda": {
              "name": "Blessed Sancha And Mafalda, Virgins, Or Blessed Theresa Of POrtugal, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 20 })
            },
            "saintElizabethOfPortugal": {
              "name": "Saint Elizabeth Of Portugal",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 4 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "blessedInaciodeAzevedo": {
              "name": "Blessed Inacio de Azevedo, Priest, And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "blessedBartholomewOfTheMartyrs": {
              "name": "Blessed Bartholomew Of The Martyrs, Bishop",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 18 })
            },
            "saintBrigitta": {
              "name": "Saint Brigitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintBeatriceOfSilva": {
              "name": "Saint Beatrice Of Silva, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 1 })
            },
            "saintDenisAndCompanions": {
              "name": "Saint Denis And Companions, Martyrs, Or Saint John Leonardi, Priest, Or Blessed John Newman, Bishop",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 9 })
            },
            "blessedGoncalodeLagos": {
              "name": "Blessed Goncalo de Lagos, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 27 })
            },
            "saintNunodeSantaMaria": {
              "name": "Saint Nuno de Santa Maria",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 6 })
            },
            "saintFructuosus": {
              "name": "Saint Fructuosus, Saint Martin Of Dume And Saint Gerald, Bishops",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 5 })
            }
          },
          "puertoRico": {
            "mostHolyNameOfJesusOrOurLadyOfBethlehem": {
              "name": "Most Holy Name Of Jesus Or Our Lady Of Bethlehem",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 3 })
            },
            "blessedMariaDolOresRodriguezSopena": {
              "name": "Blessed Maria DolOres Rodriguez Sopena, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 10 })
            },
            "blessedCarlosManuelRodriguez": {
              "name": "Blessed Carlos Manuel Rodriguez",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 4 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintTeresaOfJesusJOrnet": {
              "name": "Saint Teresa Of Jesus JOrnet, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintRoseOfLima": {
              "name": "Saint Rose Of Lima, Virgin",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 30 })
            },
            "blessedsCarlosSpinolaAndJeronimodeAngelis": {
              "name": "Blesseds Carlos Spinola And Jeronimo de Angelis, Priests And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 10 })
            },
            "saintSoledadTorresAcosta": {
              "name": "Saint Soledad Torres Acosta, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "ourLadyMotherOfDivineProvidence": {
              "name": "Our Lady, Mother Of Divine Providence, Patroness Of Puerto Rico",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 19 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            },
            "maryMotherOfTheChurch": {
              "name": "Mary, Mother Of The Church",
              "type": types.OPT_MEMORIAL,
              "data": {}
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "romania": {
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintJohnCassian": {
              "name": "Saint John Cassian, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 28 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "blessedVladimirGhika": {
              "name": "Blessed Vladimir Ghika, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            }
          },
          "russia": {
            "blessedGeorgeMatulewicz": {
              "name": "Blessed George Matulewicz, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 27 })
            },
            "blessedBolestawaMariaLament": {
              "name": "Blessed Bolestawa Maria Lament, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 29 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintGeorge": {
              "name": "Saint George, Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 6 })
            },
            "saintTheodosiusOfTheCaves": {
              "name": "Saint Theodosius Of The Caves, Abbot",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "ourLadyOfPerpetualHelpOrBlessedLeonidFeodorov": {
              "name": "Our Lady Of Perpetual Help Or Blessed Leonid Feodorov, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintAnthonyOfTheCaves": {
              "name": "Saint Anthony Of The Caves, Monk",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintOlga": {
              "name": "Saint Olga",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintVladimirTheGreat": {
              "name": "Saint Vladimir The Great",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 28 })
            },
            "saintsBorisAndGleb": {
              "name": "Saints Boris And Gleb, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 5 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "ourLadyOfCzestochowa": {
              "name": "Our Lady Of Czestochowa",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "ourLadyOfVladimir": {
              "name": "Our Lady Of Vladimir",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "saintFaustinaKowalska": {
              "name": "Saint Faustina Kowalska, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 5 })
            },
            "blessedOleksiyZarytskyi": {
              "name": "Blessed Oleksiy Zarytskyi, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 30 })
            },
            "ourLadyOfTheGateOfDawn": {
              "name": "Our Lady Of The Gate Of Dawn",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 16 })
            },
            "saintRafatKalinowski": {
              "name": "Saint Rafat Kalinowski, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 20 })
            },
            "saintAndrewTheApostle": {
              "name": "Saint Andrew The Apostle, Patron Of Russia",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 30 })
            },
            "saintBarbara": {
              "name": "Saint Barbara, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 4 })
            },
            "saintNicholas": {
              "name": "Saint Nicholas, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 6 })
            }
          },
          "scotland": {
            "saintKentigern": {
              "name": "Saint Kentigern",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 13 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintJohnOgilvie": {
              "name": "Saint John Ogilvie",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 10 })
            },
            "saintPatrick": {
              "name": "Saint Patrick",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 17 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintColumba": {
              "name": "Saint Columba",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 9 })
            },
            "saintBenedict": {
              "name": "Saint Benedict",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein)",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintNinian": {
              "name": "Saint Ninian",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 16 })
            },
            "saintMargaretOfScotlAnd": {
              "name": "Saint Margaret Of ScotlAnd",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 16 })
            },
            "saintAndrewTheApostle": {
              "name": "Saint Andrew The Apostle",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 30 })
            }
          },
          "slovakia": {
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintAdalbert": {
              "name": "Saint Adalbert, Bishop And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 23 })
            },
            "saintGeorge": {
              "name": "Saint George, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 24 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "blessedSaraSalkahazi": {
              "name": "Blessed Sara Salkahazi, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 11 })
            },
            "saintJohnNepomucene": {
              "name": "Saint John Nepomucene, Priest And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintLadislaus": {
              "name": "Saint Ladislaus",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 27 })
            },
            "visitationOfTheBlessedVirginMary": {
              "name": "Visitation Of The Blessed Virgin Mary",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 2 })
            },
            "saintsCyrilAndMethodius": {
              "name": "Saints Cyril And Methodius, Slavic Missionaries",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 5 })
            },
            "saintAnthonyZaccaria": {
              "name": "Saint Anthony Zaccaria, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 7 })
            },
            "saintBenedict": {
              "name": "Saint Benedict",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintsAndrewZoerardusAndBenedict": {
              "name": "Saints Andrew Zoerardus And Benedict, eremites",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 17 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintGorazdAndCompanions": {
              "name": "Saint Gorazd And Companions",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 27 })
            },
            "blessedZdenkaSchelingova": {
              "name": "Blessed Zdenka Schelingova, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 30 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein)",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintsMarkoKrizin": {
              "name": "Saints Marko Krizin, Melichar Grodecki And Stephen Pongrac, Priests And Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 7 })
            },
            "ourLadyOfSorrows": {
              "name": "Our Lady Of SOrrows, Patroness Of Slovakia",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 15 })
            },
            "saintEmeric": {
              "name": "Saint Emeric",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 5 })
            },
            "ourLordJesusChrist": {
              "name": "Our Lord Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "spain": {
            "saintEulogiusOfCordoba": {
              "name": "Saint Eulogius Of Cordoba, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 9 })
            },
            "saintsFructuosus": {
              "name": "Saints Fructuosus, Bishop, And Augurius And Eulogius, Deacons, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 20 })
            },
            "saintVincent": {
              "name": "Saint Vincent, Deacon And Martyr",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 22 })
            },
            "saintIldephonsusOfToledo": {
              "name": "Saint Ildephonsus Of Toledo, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 23 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk, And Methodius, Bishop, Patrons Of Europe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintHermenegild": {
              "name": "Saint Hermenegild, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 13 })
            },
            "saintIsidoreOfSeville": {
              "name": "Saint Isidore Of Seville, Bishop And DoctOr Of The Church",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 26 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr Of The Church, Patron Of Europe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintJohnOfAvila": {
              "name": "Saint John Of Avila, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintIsidoreTheFarmer": {
              "name": "Saint Isidore The Farmer",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "saintPaschalBaylon": {
              "name": "Saint Paschal Baylon",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 17 })
            },
            "saintJoaquinaVedruna": {
              "name": "Saint Joaquina Vedruna",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 22 })
            },
            "saintFerdinand": {
              "name": "Saint Ferdinand",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 30 })
            },
            "saintMariaMicaelaOfTheBlessedSacrament": {
              "name": "Saint Maria Micaela Of The Blessed Sacrament, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 15 })
            },
            "saintPelagius": {
              "name": "Saint Pelagius, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 26 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot, Patron Of Europe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "ourLadyOfMountCarmel": {
              "name": "Our Lady Of Mount Carmel",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 16 })
            },
            "saintBridget": {
              "name": "Saint Bridget, Religious, Patron Of Europe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintJames": {
              "name": "Saint James, Apostle, Patron Of Spain",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 25 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross, Virgin And Martyr, Patron Of Europe",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintEzequielMoreno": {
              "name": "Saint Ezequiel Moreno, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 19 })
            },
            "saintTeresaOfJesusJOrneteIbars": {
              "name": "Saint Teresa Of Jesus JOrnet e Ibars, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintFrancisBorgia": {
              "name": "Saint Francis Borgia, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 3 })
            },
            "saintThomasOfVillanova": {
              "name": "Saint Thomas Of Villanova, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 10 })
            },
            "saintSoledadTorresAcosta": {
              "name": "Saint Soledad Torres Acosta, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 11 })
            },
            "ourLadyOfThePillar": {
              "name": "Our Lady Of The Pillar",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 12 })
            },
            "saintTeresaOfJesus": {
              "name": "Saint Teresa Of Jesus, Virgin And DoctOr Of The Church",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 15 })
            },
            "saintPeterOfAlcantara": {
              "name": "Saint Peter Of Alcantara, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 19 })
            },
            "saintLeander": {
              "name": "Saint Leander, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 13 })
            },
            "saintEulaliaOfMerida": {
              "name": "Saint Eulalia Of Merida, Virgin And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 10 })
            },
            "saintJohnOfTheCross": {
              "name": "Saint John Of The Cross, DoctOr Of The Church",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 14 })
            },
            "jesusChristTheEternalHighPriest": {
              "name": "Jesus Christ, The Eternal High Priest",
              "type": types.FEAST,
              "data": {}
            }
          },
          "sriLanka": {
            "blessedJosephVaz": {
              "name": "Blessed Joseph Vaz, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 16 })
            },
            "ourLadyOfLanka": {
              "name": "Our Lady Of Lanka",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 4 })
            },
            "ourLadyOfMadhu": {
              "name": "Our Lady Of Madhu",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 2 })
            }
          },
          "ukraine": {
            "blessedMarcelinaDarowska": {
              "name": "Blessed Marcelina Darowska, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 5 })
            },
            "blessedBronislawMarkiewicz": {
              "name": "Blessed Bronislaw Markiewicz, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 30 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "maryMotherOfTheChurch": {
              "name": "Mary, Mother Of The Church",
              "type": types.FEAST,
              "data": {}
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintAndrewBobola": {
              "name": "Saint Andrew Bobola, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 16 })
            },
            "saintJohnNepomucene": {
              "name": "Saint John Nepomucene, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 21 })
            },
            "saintAlbertChmielowski": {
              "name": "Saint Albert Chmielowski, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 17 })
            },
            "saintZygmuntGorazdowski": {
              "name": "Saint Zygmunt Gorazdowski, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 26 })
            },
            "saintJohnOfDukla": {
              "name": "Saint John Of Dukla, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 8 })
            },
            "saintHedwigOfPoland": {
              "name": "Saint Hedwig Of Poland",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 18 })
            },
            "saintOlga": {
              "name": "Saint Olga",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 24 })
            },
            "saintVladimirTheGreat": {
              "name": "Saint Vladimir The Great",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 28 })
            },
            "saintBenedict": {
              "name": "Saint Benedict",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein)",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "ourLadyOfCzestochowa": {
              "name": "Our Lady Of Czestochowa",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "blessedPolishMartyrsOfWW2": {
              "name": "Blessed Wtadystaw Btądzinski, Priest And Companions, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 9 })
            },
            "saintStanislausKostka": {
              "name": "Saint Stanislaus Kostka, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 18 })
            },
            "saintJozefBilczewski": {
              "name": "Saint Jozef Bilczewski, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 23 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            }
          },
          "unitedStates": {
            "saintElizabethAnnSeton": {
              "name": "Saint Elizabeth Ann Seton, Religious",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 4 })
            },
            "saintJohnNeumann": {
              "name": "Saint John Neumann, Bishop",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 5 })
            },
            "saintAndreBessette": {
              "name": "Saint Andre Bessette, Religious",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 6 })
            },
            "saintVincent": {
              "name": "Saint Vincent, Deacon And Martyr Or Saint Marianne Cope, Virgin",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 0, day: 23 })
            },
            "saintKatharineDrexel": {
              "name": "Saint Katharine Drexel, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 3 })
            },
            "saintDamiendeVeuster": {
              "name": "Saint Damien de Veuster, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 10 })
            },
            "saintIsidore": {
              "name": "Saint Isidore",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 15 })
            },
            "blessedJuniperoSerra": {
              "name": "Blessed Junipero Serra, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 1 })
            },
            "saintElizabethOfPortugal": {
              "name": "Saint Elizabeth Of Portugal",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 5 })
            },
            "saintKateriTekakwitha": {
              "name": "Saint Kateri Tekakwitha, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 14 })
            },
            "saintCamillusDeLellis": {
              "name": "Saint Camillus de Lellis, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 18 })
            },
            "saintPeterClaver": {
              "name": "Saint Peter Claver, Priest",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 9 })
            },
            "blessedMarieRoseDurocher": {
              "name": "Blessed Marie Rose Durocher, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 6 })
            },
            "saintsJohnDeBrebeufAndIsaacJogues": {
              "name": "Saints John de Brebeuf And Isaac Jogues, Priests, And Companions, Martyrs",
              "type": types.MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 19 })
            },
            "saintPaulOfTheCross": {
              "name": "Saint Paul Of The Cross, Priest",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 20 })
            },
            "saintJohnPaulII": {
              "name": "Saint John Paul II, Pope",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 22 })
            },
            "saintFrancesXavierCabrini": {
              "name": "Saint Frances Xavier Cabrini, Virgin",
              "type": types.MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 13 })
            },
            "saintRosePhilippineDuchesne": {
              "name": "Saint Rose Philippine Duchesne, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 18 })
            },
            "blessedMiguelAgustinPro": {
              "name": "Blessed Miguel Agustin Pro, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 23 })
            },
            "ourLadyOfGuadalupe": {
              "name": "Our Lady Of Guadalupe",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 12 })
            }
          },
          "vietnam": {
            "vietnameseMartyrs": {
              "name": "Vietnamese Martyrs",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 24 })
            }
          },
          "wales": {
            "saintTeilo": {
              "name": "Saint Teilo, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 9 })
            },
            "saintsCyril": {
              "name": "Saints Cyril, Monk And Methodius, Bishop",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 1, day: 14 })
            },
            "saintDavid": {
              "name": "Saint David, Bishop",
              "type": types.SOLEMNITY,
              "data": {},
              "moment": moment({ year: year, month: 2, day: 1 })
            },
            "saintBeuno": {
              "name": "Saint Beuno, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 20 })
            },
            "saintCatherineOfSiena": {
              "name": "Saint CaTherine Of Siena, Virgin And DoctOr",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 3, day: 29 })
            },
            "saintAsaph": {
              "name": "Saint Asaph, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 4, day: 5 })
            },
            "saintsAlbanJuliusAndAaron": {
              "name": "Saints Alban, Julius And Aaron, Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 5, day: 20 })
            },
            "saintBenedict": {
              "name": "Saint Benedict, Abbot",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 11 })
            },
            "saintJohnJones": {
              "name": "Saint John Jones, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 12 })
            },
            "saintBirgitta": {
              "name": "Saint Birgitta, Religious",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 23 })
            },
            "saintsPhilipEvansAndJohnLloyd": {
              "name": "Saints Philip Evans And John Lloyd, Priests And Martyrs",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 6, day: 25 })
            },
            "saintGermanusOfAuxerre": {
              "name": "Saint Germanus Of Auxerre, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 3 })
            },
            "saintTeresaBenedictaOfTheCross": {
              "name": "Saint Teresa Benedicta Of The Cross (Edith Stein), Virgin And Martyr",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 9 })
            },
            "saintDavidLewis": {
              "name": "Saint David Lewis, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 7, day: 26 })
            },
            "saintDeiniol": {
              "name": "Saint Deiniol, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 8, day: 11 })
            },
            "saintRichardGwyn": {
              "name": "Saint Richard Gwyn, Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 16 })
            },
            "TheSixWelshMartyrsAndCompanions": {
              "name": "The Six Welsh Martyrs And Companions",
              "type": types.FEAST_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 9, day: 25 })
            },
            "saintWinefride": {
              "name": "Saint Winefride, Virgin",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 3 })
            },
            "saintIlltud": {
              "name": "Saint Illtud, Abbot",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 6 })
            },
            "allSaintsOfWales": {
              "name": "All Saints Of Wales",
              "type": types.FEAST,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 8 })
            },
            "saintDubricius": {
              "name": "Saint Dubricius, Bishop",
              "type": types.OPT_MEMORIAL,
              "data": {},
              "moment": moment({ year: year, month: 10, day: 14 })
            },
            "saintJohnRoberts": {
              "name": "Saint John Roberts, Priest And Martyr",
              "type": types.OPT_MEMORIAL_MARTYR,
              "data": {},
              "moment": moment({ year: year, month: 11, day: 10 })
            }
          }
        };   
    }
};