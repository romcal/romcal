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

import { Utils, Localizations } from "../src";

describe("Testing localization functionality", () => {
    // Locales extended with sample data
    Localizations.frCA = Locales.frCA || {};
    Localizations.frCA.test = { hello: "Allo", foo: "foo" };
    Localizations.en.test = { hello: "Hello", foo: "bar" };
    Localizations.fr.test = { hello: "Salut", lorem: "ipsum" };

    it('If the locale is set to "fr", romcal should output text in French', () => {
        Utils.setLocale("fr");
        expect(Utils.localize({ key: "test.hello" })).toBe("Salut");
    });

    it('If the locale is set to "fr-CA", romcal should output text in Canadian French', () => {
        Utils.setLocale("fr-CA");
        expect(Utils.localize({ key: "test.hello" })).toBe("Allo");
    });

    it("If the locale is set with an unknown region, romcal should fallback to its base language when exists in src/locales", () => {
        Utils.setLocale("fr-XX");
        expect(Utils.localize({ key: "test.hello" })).toBe("Salut");
    });

    it('If a string is missing in the "fr-CA" locale, romcal should fall back to base French', () => {
        Utils.setLocale("fr-CA");
        expect(Utils.localize({ key: "test.lorem" })).toBe("ipsum");
    });

    it('If a string is missing in the "fr" locale, romcal should fallback to English ', () => {
        Utils.setLocale("fr");
        expect(Utils.localize({ key: "test.foo" })).toBe("bar");
    });

    it("If an unknown locale is set, romcal should fallback to English", () => {
        Utils.setLocale("xx-XX");
        expect(Utils.localize({ key: "test.hello" })).toBe("Hello");
    });

    it('When the last locale set is "en", romcal should output English locale', () => {
        Utils.setLocale("fr-CA");
        Utils.setLocale("en");
        expect(Utils.localize({ key: "test.foo" })).toBe("bar");
    });
});
