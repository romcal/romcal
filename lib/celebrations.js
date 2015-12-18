var _ = require('lodash'),
    moment = require('moment'),
    Path = require('path'),
    Dates = require( Path.join( __dirname, 'dates' )),
    Utils = require( Path.join( __dirname, 'utils' )),
    Seasons = require( Path.join( __dirname, '../data/seasons' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  
  // arguments[0]: Takes the year (integer)
  // arguments[1]: t|o|e [The mode to calculate the end of Christmastide]
  // arguments[2]: true|false [If true, Epiphany will be fixed to Jan 6]
  // arguments[3]  true|false|undefined (If true, Corpus Christi is set to Thursday)
  // arguments[4]  true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter)
  dates: function() {

    var dates = [
      // Solemnities
      {
        "key": "immaculateConception",
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
        "type": _.last( Types ),
        "moment": Dates.ashWednesday( arguments[0], arguments[5] ),
        "data": {
          "prioritized": true,
          "season": {
            "key": Seasons.LENT,
            "value": Utils.localize({ 
              key: 'lent.season'
            })
          },
          "meta": {
            "liturgicalColor": LiturgicalColors.PURPLE
          }
        }
      },
      {
        "key": "palmSunday",
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

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'celebrations.' + date.key 
      });
      return date;
    });

  }
};
