# Version history

## 1.3.0-beta.2 /2019-11-29
* Update node dependencies.
* The `@std/esm` package has been deprecated in favour of `esm`. Also `esm` have limited the `.mjs` files to basic functionality without support for esm options, to align with the current experimental support in Node. [More details here](https://github.com/standard-things/esm/issues/696). According to that all `.mjs` files in the `romcal` project have been renamed back to `.js`.
* Locales management and pickup in romcal have been refactored, and it now behaves like Moment.js (used by romcal) or the general approach for i18n in app development: locale containing region like `fr-CA` will gracefully fall back to `fr` if a localisation key isn't in `fr-CA` or if `fr-CA.js` doesn't exits in the `src/locales` directory. In the end, it always falls back to `en`, which is the default language in romcal. Full explanations have been added to the `README.md`.
* Locale files have been renamed to kebab-case with capitalized regions to follow the IETF Language Codes standards and be close to the general conventions in software development for i18n.
* Fixes:
    - [issue #85](https://github.com/romcal/romcal/issues/85)
        * Depending on how the language string is set in romcal, one could get bilingual results when part of a string being in the chosen language and the default English (locale lookup for date name strings are based on Moment.js, not romcal). Locale files are now managed the same way as Moment.js.

## 1.3.0-beta.1 /2018-03-05
* Revamp code to use ES6 syntax
* Dropped support for Node v4, v5.
* Integrated module with `std/esm` to read `.mjs` files and `babel` to ensure compatibility and seamless usage with lower version of node and requiring via CommonJS
* Expose constants and calendar helper functions and via module exports
* Various unreported bug fixes
* Added locale files for Czech Republic and Slovakia
* Added national calendars for Czech Republick and Slovakia
* Added more test cases for better test coverage
* Fixes:
    - [issue #2](https://github.com/pejulian/romcal/issues/2)
        + The command `npm run build` now generates an ES5 distribution bundle of `romcal` that is UMD compliant.
    - [issue #9](https://github.com/pejulian/romcal/issues/9)
        + typo fix for `src/calendars/*sriLanka*.mjs`
    - [issue #10](https://github.com/pejulian/romcal/issues/10)
        + removed duplicate celebration with different key names for
            * `saintsCyrilMonkAndMethodiusBishop` replaces `saintsCyrilAndMethodiusSlavicMissionaries`
            * `assumption` replaces `assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance`
            * Removed duplicate key `saintAnselmOfCanterburyBishopAndDoctorOfTheChurch` defined in the national calendar in `src/locales/en.mjs`
            * Removed duplicate `birthOfTheBlessedVirginMary` defined in the national calendar in `src/locales/en.mjs`
            * `blessedBoleslawaMariaLamentVirginAndSaintAngelaMericiVirgin` replaces `blessedBoleslawaMariaLamentVirginsaintAngelaMericiVirgin` and `blessedBoleslawaMariaLamentVirgin` and duplicate removed
            * `blessedInacioDeAzevedoPriestAndCompanionsMartyrs` replaces `blessedInacioDeAzevedoPriestAndMartyr` and duplicate removed
            * `blessedLauraVicunaVirgin` replaces `blessedLauraVicuna` and duplicate removed
            * `saintMatthiasApostle` renamed to `saintMatthiasTheApostle` and duplicate removed
            * Removed duplicate keys for `saintCyrilOfAlexandriaBishopAndDoctor` and `saintCatherineOfAlexandriaVirginAndMartyr`
            * Remove duplicate keys for `saintBenedictOfNursiaAbbot`
            * Remove duplicate keys for `saintApollinaris`
            * Rename `saintGallAbbot` to `saintGallAbbotAndMissionary`
            * Rename `saintCristobalMagallanesAndCompanionsMartyrs` to `saintChristopherMagallanesAndCompanionsMartyrs`
    - [issue #11](https://github.com/pejulian/romcal/issues/11)
        + Renamed `triumphOfTheCross` to `theExaltationOfTheHolyCross`
    - [issue #12](https://github.com/pejulian/romcal/issues/12)
        + `saintsFabianAndSebastianPopeAndMartyrs ` renamed to `saintFabianPopeAndMartyrAndSaintSebastianPopeAndMartyr`
    - [issue #14](https://github.com/pejulian/romcal/issues/14)
        + Introduce the new `drop` property that allows national calendars to omit unwanted celebrations from their output
        + Introduce new `christmastideIncludesTheSeasonOfEpiphany` flag to allow output to include or exclude the "season" of Epiphany from being merged into Christmastide
        + Fix issue where calendar options always end up using their defaults even though an option has been specified
    - [issue #15](https://github.com/pejulian/romcal/issues/15)
        + Renamed `blessedCaTherineOfSaintAugustineVirgin` to `blessedCatherineOfSaintAugustineVirgin` (fix typo with `T`)
    - [issue #16](https://github.com/pejulian/romcal/issues/16)
        + Renamed `saintsAndrewZoerardusAndBenedictEremites` to `saintsAndrewZoerardusAndBenedictHermits` (fix typo)
    - [issue #17](https://github.com/pejulian/romcal/issues/17)
        + Remove duplicate keys for `ourLadyOfSorrows`
    - [issue #27](https://github.com/pejulian/romcal/issues/27)
    - [issue #28](https://github.com/pejulian/romcal/issues/28)
    - [issue #29](https://github.com/pejulian/romcal/issues/29)
        + Epiphany is always celebrated on Jan 6 in Slovakia


## 1.2.4 /2017-03-22
* Added French translations for France, Canada and Belgium.
* Updated French Calendar

## 1.2.3 / 2017-03-21
* Fix issue where national feasts appear more than once in the calendar output

## 1.2.2 / 2017-03-21
* Merge PRs containing bug fixes and improvements, thanks [Etienne Magnier](https://github.com/emagnier) and [Damiaan Dufaux](https://github.com/Dev1an)

## 1.2.1
* Added caching mechanism for common celebration dates in the liturgical calendar to improve calendar processing output performance. Added more titles metadata to national and general celebrations.

## 1.2.0
* Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.
