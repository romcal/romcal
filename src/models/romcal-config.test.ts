import Config from "./romcal-config";
import dayjs from "dayjs";

describe("getConfig()", () => {
    test("should get general config if country doesn't have default configurations", () => {
        const {
            year,
            type,
            query,
            locale,
            epiphanyOnJan6,
            country,
            corpusChristiOnThursday,
            christmastideIncludesTheSeasonOfEpiphany,
            christmastideEnds,
        } = new Config();
        expect(year).toBe(dayjs.utc().year());
        expect(type).toBe("calendar");
        expect(query).toBeUndefined();
        expect(locale).toBe("en");
        expect(epiphanyOnJan6).toBeFalsy();
        expect(country).toBe("general");
        expect(corpusChristiOnThursday).toBeFalsy();
        expect(christmastideIncludesTheSeasonOfEpiphany).toBeTruthy();
        expect(christmastideEnds).toBe("o");
    });
});
