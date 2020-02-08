import moment from "moment";

import { Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";

const defaultConfig = {};

let dates = year => {

  let _dates = [
    {
      "key": "blessedJosephVazPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 16 }),
      "data": {}
    },
    {
      "key": "ourLadyOfLanka",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfMadhu",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 2 }),
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
