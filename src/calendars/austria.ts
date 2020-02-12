import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { RawDateItem } from "../models/romcal-date-item";

let dates = (year: number): Array<RawDateItem> => {
  let _dates = [
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
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
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
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
  dates
};
