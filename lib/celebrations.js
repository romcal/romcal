var _ = require('lodash'),
    moment = require('moment'),
    LiturgicalColors = require('../data/liturgicalColors.json'),
    Dates = require('./dates'),
    Utils = require('./utils'),
    Seasons = require('../data/seasons.json'),
    Titles = require('../data/titles.json'),
    Types = require('../data/types').types;

module.exports = {
  
  // arguments[0]: Takes the year (integer)
  // arguments[1]: t|o|e [The mode to calculate the end of Christmastide]
  // arguments[2]: true|false [If true, Epiphany will be fixed to Jan 6]
  // arguments[3]  true|false|undefined (If true, Corpus Christi is set to Thursday)
  // arguments[4]  true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter)
  dates: function() {

    return [
      // Solemnities
      {
        "key": "immaculateConception",
        "name": Utils.localize({
          key: 'solemnities.immaculateConception'
        }),
        "type": _.first( Types ),
        "moment": Dates.immaculateConception( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "christmas",
        "name": Utils.localize({
          key: 'solemnities.christmas'
        }),
        "type": _.first( Types ),
        "moment": Dates.christmas( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "maryMotherOfGod",
        "name": Utils.localize({
          key: 'solemnities.maryMotherOfGod'
        }),
        "type": _.first( Types ),
        "moment": Dates.maryMotherOfGod( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "epiphany",
        "name": Utils.localize({
          key: 'solemnities.epiphany'
        }),
        "type": _.first( Types ),
        "moment": Dates.epiphany( arguments[0], arguments[2], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "trinitySunday",
        "name": Utils.localize({
          key: 'solemnities.trinitySunday'
        }),
        "type": _.first( Types ),
        "moment": Dates.trinitySunday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "corpusChristi",
        "name": Utils.localize({
          key: 'solemnities.corpusChristi'
        }),
        "type": _.first( Types ),
        "moment": Dates.corpusChristi( arguments[0], arguments[3], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "sacredHeartOfJesus",
        "name": Utils.localize({
          key: 'solemnities.sacredHeartOfJesus'
        }),
        "type": _.first( Types ),
        "moment": Dates.sacredHeartOfJesus( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "birthOfJohnTheBaptist",
        "name": Utils.localize({
          key: 'solemnities.birthOfJohnTheBaptist'
        }),
        "type": _.first( Types ),
        "moment": Dates.birthOfJohnTheBaptist( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "peterAndPaulApostles",
        "name": Utils.localize({
          key: 'solemnities.peterAndPaulApostles'
        }),
        "type": _.first( Types ),
        "moment": Dates.peterAndPaulApostles( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "assumption",
        "name": Utils.localize({
          key: 'solemnities.assumption'
        }),
        "type": _.first( Types ),
        "moment": Dates.assumption( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "allSaints",
        "name": Utils.localize({
          key: 'solemnities.allSaints'
        }),
        "type": _.first( Types ),
        "moment": Dates.allSaints( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "christTheKing",
        "name": Utils.localize({
          key: 'solemnities.christTheKing'
        }),
        "type": _.first( Types ),
        "moment": Dates.christTheKing( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "josephHusbandOfMary",
        "name": Utils.localize({
          key: 'solemnities.josephHusbandOfMary'
        }),
        "type": _.first( Types ),
        "moment": Dates.josephHusbandOfMary( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "annunciation",
        "name": Utils.localize({
          key: 'solemnities.annunciation'
        }),
        "type": _.first( Types ),
        "moment": Dates.annunciation( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "easter",
        "name": Utils.localize({
          key: 'solemnities.easter'
        }),
        "type": _.first( Types ),
        "moment": Dates.easter( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "divineMercySunday",
        "name": Utils.localize({
          key: 'solemnities.divineMercySunday'
        }),
        "type": _.first( Types ),
        "moment": Dates.divineMercySunday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ascension",
        "name": Utils.localize({
          key: 'solemnities.ascension'
        }),
        "type": _.first( Types ),
        "moment": Dates.ascension( arguments[0], arguments[4], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "pentecostSunday",
        "name": Utils.localize({
          key: 'solemnities.pentecostSunday'
        }),
        "type": _.first( Types ),
        "moment": Dates.pentecostSunday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      // Lent, Holy Week & Triduum
      {
        "key": "ashWednesday",
        "name": Utils.localize({
          key: 'lent.ashWednesday'
        }),
        "type": _.last( Types ),
        "moment": Dates.ashWednesday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.HOLY_WEEK,
            "value": Utils.localize({ 
              key: 'holyWeek.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.PURPLE
          }
        }
      },
      {
        "key": "palmSunday",
        "name": Utils.localize({
          key: 'holyWeek.palmSunday'
        }),
        "type": Types[1],
        "moment": Dates.palmSunday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.HOLY_WEEK,
            "value": Utils.localize({ 
              key: 'holyWeek.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "holyThursday",
        "name": Utils.localize({
          key: 'triduum.holyThursday'
        }),
        "type": Types[2],
        "moment": Dates.holyThursday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.HOLY_WEEK,
            "value": Utils.localize({ 
              key: 'holyWeek.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "goodFriday",
        "name": Utils.localize({
          key: 'triduum.goodFriday'
        }),
        "type": Types[2],
        "moment": Dates.goodFriday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.HOLY_WEEK,
            "value": Utils.localize({ 
              key: 'holyWeek.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "holySaturday",
        "name": Utils.localize({
          key: 'triduum.holySaturday'
        }),
        "type": Types[2],
        "moment": Dates.holySaturday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.HOLY_WEEK,
            "value": Utils.localize({ 
              key: 'holyWeek.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // Feasts
      {
        "key": "holyFamily",
        "name": Utils.localize({
          key: 'feasts.holyFamily'
        }),
        "type": Types[4],
        "moment": Dates.holyFamily( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.FEAST_OF_THE_LORD
            ]
          }
        }
      },
      {
        "key": "baptismOfTheLord",
        "name": Utils.localize({
          key: 'feasts.baptismOfTheLord'
        }),
        "type": Types[4],
        "moment": Dates.baptismOfTheLord( arguments[0], arguments[2], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.FEAST_OF_THE_LORD
            ]
          }
        }
      },
      {
        "key": "presentationOfTheLord",
        "name": Utils.localize({
          key: 'feasts.presentationOfTheLord'
        }),
        "type": Types[4],
        "moment": Dates.presentationOfTheLord( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.FEAST_OF_THE_LORD
            ]
          }
        }
      },
      {
        "key": "transfiguration",
        "name": Utils.localize({
          key: 'feasts.transfiguration'
        }),
        "type": Types[4],
        "moment": Dates.transfiguration( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.FEAST_OF_THE_LORD
            ]
          }
        }
      },
      {
        "key": "triumphOfTheCross",
        "name": Utils.localize({
          key: 'feasts.triumphOfTheCross'
        }),
        "type": Types[4],
        "moment": Dates.triumphOfTheCross( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [ 
              Titles.FEAST_OF_THE_LORD
            ]
          }
        }
      },
      // Memorials
      {
        "key": "immaculateHeartOfMary",
        "name": Utils.localize({
          key: 'memorials.immaculateHeartOfMary'
        }),
        "type": Types[4],
        "moment": Dates.immaculateHeartOfMary( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
