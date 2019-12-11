import moment from 'moment';
import _ from 'lodash';

import * as Dates from './Dates';
import * as Utils from './Utils';
import { LiturgicalSeasons, Titles, LiturgicalColors, Types } from '../constants';


// year: Takes the year (integer)
// christmastideEnds: t|o|e [The mode to calculate the end of Christmastide]
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
// corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday) (defaults to false)
// ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
let dates = (year, christmastideEnds, epiphanyOnJan6 = false, corpusChristiOnThursday = false, ascensionOnSunday = false) => {

  let _dates = [
    // Solemnities
    {
      "key": "immaculateConception",
      "type": _.head( Types ),
      "moment": Dates.immaculateConception( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "christmas",
      "type": _.head( Types ),
      "moment": Dates.christmas( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "maryMotherOfGod",
      "type": _.head( Types ),
      "moment": Dates.maryMotherOfGod( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "epiphany",
      "type": _.head( Types ),
      "moment": Dates.epiphany( year, epiphanyOnJan6 ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "trinitySunday",
      "type": _.head( Types ),
      "moment": Dates.trinitySunday( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "corpusChristi",
      "type": _.head( Types ),
      "moment": Dates.corpusChristi( year, corpusChristiOnThursday ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "sacredHeartOfJesus",
      "type": _.head( Types ),
      "moment": Dates.sacredHeartOfJesus( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "birthOfJohnTheBaptist",
      "type": _.head( Types ),
      "moment": Dates.birthOfJohnTheBaptist( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "peterAndPaulApostles",
      "type": _.head( Types ),
      "moment": Dates.peterAndPaulApostles( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "assumption",
      "type": _.head( Types ),
      "moment": Dates.assumption( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSaints",
      "type": _.head( Types ),
      "moment": Dates.allSaints( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "christTheKing",
      "type": _.head( Types ),
      "moment": Dates.christTheKing( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "josephHusbandOfMary",
      "type": _.head( Types ),
      "moment": Dates.josephHusbandOfMary( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "annunciation",
      "type": _.head( Types ),
      "moment": Dates.annunciation( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "easter",
      "type": _.head( Types ),
      "moment": Dates.easter( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "divineMercySunday",
      "type": _.head( Types ),
      "moment": Dates.divineMercySunday( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ascension",
      "type": _.head( Types ),
      "moment": Dates.ascension( year, ascensionOnSunday ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "pentecostSunday",
      "type": _.head( Types ),
      "moment": Dates.pentecostSunday( year ),
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
      "moment": Dates.ashWednesday( year ),
      "data": {
        "prioritized": true,
        "season": {
          "key": LiturgicalSeasons.LENT,
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
      "moment": Dates.palmSunday( year ),
      "data": {
        "prioritized": true,
        "season": {
          "key": LiturgicalSeasons.HOLY_WEEK,
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
      "moment": Dates.holyThursday( year ),
      "data": {
        "prioritized": true,
        "season": {
          "key": LiturgicalSeasons.HOLY_WEEK,
          "value": Utils.localize({
            key: 'holyWeek.season'
          })
        },
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.TRIDUUM
          ]
        }
      }
    },
    {
      "key": "goodFriday",
      "type": Types[2],
      "moment": Dates.goodFriday( year ),
      "data": {
        "prioritized": true,
        "season": {
          "key": LiturgicalSeasons.HOLY_WEEK,
          "value": Utils.localize({
            key: 'holyWeek.season'
          })
        },
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.TRIDUUM
          ]
        }
      }
    },
    {
      "key": "holySaturday",
      "type": Types[2],
      "moment": Dates.holySaturday( year ),
      "data": {
        "prioritized": true,
        "season": {
          "key": LiturgicalSeasons.HOLY_WEEK,
          "value": Utils.localize({
            key: 'holyWeek.season'
          })
        },
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.TRIDUUM
          ]
        }
      }
    },
    // Feasts
    {
      "key": "holyFamily",
      "type": Types[4],
      "moment": Dates.holyFamily( year ),
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
      "moment": Dates.baptismOfTheLord( year, epiphanyOnJan6 ),
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
      "moment": Dates.presentationOfTheLord( year ),
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
      "moment": Dates.transfiguration( year ),
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
      "key": "theExaltationOfTheHolyCross",
      "type": Types[4],
      "moment": Dates.theExaltationOfTheHolyCross( year ),
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
      "moment": Dates.immaculateHeartOfMary( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ];

  return _.map( _dates, ({ key, data, ...rest }) => {
    let name = Utils.localize({ key: 'celebrations.' + key });
    let { meta } = data;
    if (_.isUndefined(meta)) {
      data.meta = { titles: [] };
    }
    return { name, key, data, ...rest };
  });
};

export {
  dates
};
