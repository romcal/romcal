import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "blessedOdoricOfPordenonePriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 14 }),
      "data": {}
    },
    {
      "key": "saintFrancisFernandezDeCapillasPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 15 }),
      "data": {}
    },
    {
      "key": "saintLawrenceBaiXiaomanMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 23 }),
      "data": {}
    },
    {
      "key": "saintAugustineZhaoRongPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 27 }),
      "data": {}
    },
    {
      "key": "saintLaurenceWangBingAndCompanionsMartyrSaintJosephFreinademetzPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 29 }),
      "data": {}
    },
    {
      "key": "saintJohnOfTrioraPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 13 }),
      "data": {}
    },
    {
      "key": "saintMartinWuXueshengAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 17 }),
      "data": {}
    },
    {
      "key": "saintLucyYiZhenmeiVirginAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 19 }),
      "data": {}
    },
    {
      "key": "saintPaulLiuHanzouPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 21 }),
      "data": {}
    },
    {
      "key": "saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 25 }),
      "data": {}
    },
    {
      "key": "saintAgnesCaoGuiyingMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 1 }),
      "data": {}
    },
    {
      "key": "saintJosephZhangDapengMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 12 }),
      "data": {}
    },
    {
      "key": "blessedMariaAssuntaPallottaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 8 }),
      "data": {}
    },
    {
      "key": "blessedJohnMartinMoyePriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {}
    },
    {
      "key": "ourLadyOfChina",
      "type": Types.MEMORIAL,
      "moment": function(y) {
        let firstMay = moment.utc({ year: y, month: 4, day: 1 });
        let memorialDay = firstMay;
        // determine first saturday
        memorialDay.add(6 - firstMay.day(), 'days');
        // Second saturday
        memorialDay.add(7, 'days');
        return memorialDay;
      }(year),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPeterLiuMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 14 }),
      "data": {}
    },
    {
      "key": "saintPeterSanzBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 27 }),
      "data": {}
    },
    {
      "key": "saintJoachimHoMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
      "data": {}
    },
    {
      "key": "saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 20 }),
      "data": {}
    },
    {
      "key": "saintJosephYuanPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 23 }),
      "data": {}
    },
    {
      "key": "sevenMartyredNunsFromTheFranciscanMissionariesOfMary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
      "data": {}
    },
    {
      "key": "saintAugustineZhaoRongPriestAndCompanionsMartyrs",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 6, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintLeoManginPriestAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {}
    },
    {
      "key": "saintAlbericCrescitelliPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 21 }),
      "data": {}
    },
    {
      "key": "saintPaulChenChangpinAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
      "data": {}
    },
    {
      "key": "blessedMauriceTornayPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 11 }),
      "data": {}
    },
    {
      "key": "saintJohnGabrielPerboyrePriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 11 }),
      "data": {}
    },
    {
      "key": "saintFrancisDiazPriestAndCompanionsMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintPeterWuMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 7 }),
      "data": {}
    },
    {
      "key": "saintGabrieltaurinDufresseBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 27 }),
      "data": {}
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types.FEAST,
      "moment": ( y => Dates.pentecostSunday( y ).add( 4, 'days' ))(year),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ]
  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
