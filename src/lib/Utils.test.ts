import { getLocale, localizeDates, setLocale } from "./Utils";
import * as Locales from "../locales";
import rewire from "rewire";

const utilsModule = rewire("./dist/lib/Utils");
const _fallbackLocaleKey = utilsModule.__get__("_fallbackLocaleKey");

describe("setLocale", () => {
    test("should be able to set the appropriate locale with relevant fallbacks", () => {
        setLocale("fr");
    });
});
