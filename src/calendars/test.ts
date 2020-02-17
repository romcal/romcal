import moment from "moment";

import { Dates } from "../lib";
import { Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "maryMotherOfTheChurch",
            type: Types.OPT_MEMORIAL,
            moment: ((year: number): moment.Moment => Dates.pentecostSunday(year).add(1, "days"))(year),
            data: {
                prioritized: true,
            },
        },
        {
            key: "ashWednesday",
            type: Types.SUNDAY,
            moment: Dates.ashWednesday(year),
        },
        {
            key: "saintLukeTheEvangelist",
            type: Types.COMMEMORATION,
            moment: moment.utc({ year: year, month: 9, day: 18 }),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration1",
            type: Types.MEMORIAL,
            moment: moment.utc({ year: year, month: 10, day: 9 }),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration2",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year: year, month: 11, day: 25 }),
            data: {
                prioritized: true,
            },
        },
    ];

    return _dates;
};

export { dates };
