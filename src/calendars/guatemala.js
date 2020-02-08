import { Dates, Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";

const defaultConfig = {};

let dates = year => {

  let _dates = [
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types.FEAST,
      "moment": ( y => Dates.pentecostSunday( y ).add( 4, "days" ))(year),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  defaultConfig,
  dates
};
