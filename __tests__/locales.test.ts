/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import { Utils } from "../src";

describe("Testing localization functionality", () => {
    it("If the locale is set to 'fr', romcal should output text in French", () => {
        Utils.setLocale("fr");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("Tous les Saints");
    });

    it("If the locale is set to 'en-CA', romcal should output text in Canadian French", () => {
        Utils.setLocale("en-CA");
        expect(Utils.localize({ key: "sanctoral.saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest" })).toBe(
            "Saints John de Brébeuf, Isaac Jogues, Priests, and Companions, Martyrs, Secondary Patrons of Canada",
        );
    });

    it("If the locale is set with an unknown region, romcal should fallback to its base language when exists in src/locales", () => {
        Utils.setLocale("fr-XX");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("Tous les Saints");
    });

    it("If a string is missing in the 'en-CA' locale, romcal should fall back to base English", () => {
        Utils.setLocale("fr-CA");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });

    it("If a string is missing in the 'zz' locale, romcal should fallback to English ", () => {
        Utils.setLocale("zz");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });

    it("If an unknown locale is set, romcal should fallback to English", () => {
        Utils.setLocale("xx-XX");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });

    it("When the last locale set is 'en', romcal should output English locale", () => {
        Utils.setLocale("it");
        Utils.setLocale("en");
        expect(Utils.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });
});
