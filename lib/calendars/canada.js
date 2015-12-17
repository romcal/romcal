var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintAndreBessetteReligious",
        "name": "Saint Andre Bessette, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRaymondOfPenyafortPriest",
        "name": "Saint Raymond of Penyafort, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintMargueriteBourgeoysVirgin",
        "name": "Saint Marguerite Bourgeoys, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
        "name": "Saint Joseph, Spouse of The Blessed Virgin Mary, Principal Patron of Canada",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintKateriTekakwithaVirgin",
        "name": "Saint Kateri Tekakwitha, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 17 }),
        "data": {}
      },
      {
        "key": "blessedMarieAnneBlondinVirgin",
        "name": "Blessed Marie Anne Blondin, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 18 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGoodCounsel",
        "name": "Our Lady of Good Counsel",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
        "data": {}
      },
      {
        "key": "saintMarieOfTheIncarnationReligious",
        "name": "Saint Marie of The Incarnation, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedMarieLeonieParadisVirgin",
        "name": "Blessed Marie Leonie Paradis, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "saintFrancoisDeLavalBishop",
        "name": "Saint Francois de Laval, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
        "data": {}
      },
      {
        "key": "blessedCaTherineOfSaintAugustineVirgin",
        "name": "Blessed CaTherine of Saint Augustine, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {}
      },
      {
        "key": "saintEugeneDeMazenodBishop",
        "name": "Saint Eugene de Mazenod, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "blessedLouisZephirinMoreauBishop",
        "name": "Blessed Louis Zephirin Moreau, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
        "name": "Blesseds Nykyta Budka and Vasyl Velychkowsky, Bishops and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary",
        "name": "Saint Anne, Patron of Quebec, and Saint Joachim, Parents of The Blessed Virgin Mary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedFredericJanssoonePriest",
        "name": "Blessed Frederic Janssoone, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "blessedAndreGrassetPriestAndMartyr",
        "name": "Blessed Andre Grasset, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 2 }),
        "data": {}
      },
      {
        "key": "blessedDinaBelangerVirgin",
        "name": "Blessed Dina Belanger, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "blessedEmilieTavernierGamelinReligious",
        "name": "Blessed Emilie Tavernier Gamelin, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada",
        "name": "Saints John de Brebeuf, Isaac Jogues, Priests, and Companions, Martyrs, Secondary Patrons of Canada",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMarieRoseDurocherVirgin",
        "name": "Blessed Marie Rose Durocher, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "saintMargueriteDYouvilleReligious",
        "name": "Saint Marguerite d'Youville, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
        "name": "Saint Hedwig, Religious Or Saint Margaret Mary Alacoque, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "name": "Our Lady of Guadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
