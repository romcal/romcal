# Version history

## 1.3.0 /2020-01-26 <a name="1.3.0"></a>

romcal changed a lot since [1.2.4](#1.2.4), therefore we list here only the main changes and small changes were combined. For more thorough list of changes, check the release notes for [1.3.0-beta.1](#1.3.0-beta.1), [1.3.0-beta.2](#1.3.0-beta.2), [1.3.0-beta.3](#1.3.0-beta.3), [1.3.0-rc.1](#1.3.0-rc.1) and [1.3.0-rc.2](#1.3.0-rc.2).

### General changes

- Revamp the code to use ES6 syntax.
- Drop support for Node v4, v5.
- Integrated module with `std/esm` to read `.mjs` files and `babel` to ensure compatibility and seamless usage with lower version of node and requiring via CommonJS.
- Expose constants and calendar helper functions and via module exports.
- Refactor rank types of celebrations ([issue #109](https://github.com/pejulian/romcal/issues/109)).

### New features

- Introduce the new `drop` property that allows national calendars to omit unwanted celebrations from their output ([issue #14](https://github.com/pejulian/romcal/issues/14)).
- Introduce new `christmastideIncludesTheSeasonOfEpiphany` flag to allow output to include or exclude the "season" of Epiphany from being merged into Christmastide.

### Calendar and celebrations

- Added national calendars for Czech Republic, Italy and Slovakia.
- Drop Shrove Monday and Tuesday from the General Roman Calendar ([issue #90](https://github.com/pejulian/romcal/issues/90)).
- Epiphany is always celebrated on Jan 6 in Slovakia ([issue #29](https://github.com/pejulian/romcal/issues/29)).
- Apply changes in the General Roman Calendar made by the Holy See.

### Localization

- Add Italian and Slovak locale files.
- Some localization keys where renamed in order to confirm with official English names of the celebrations.

### Build process

- Update and simplify the build process.
- Add automated build process to transpile the code after installing and before publishing.
- Distribution files are now not included anymore in the codebase.
- In addition to the `romcal.bundle.min.js` file (for browsers), source code is also transpiled by Babel and Webpack in the `dist/` directory. This feature makes it possible to use romcal directly in the browser, so not only in a node.js package or environment (babel and webpack allow to have the same codebase for backend/node.js and frontend/browser).
- Added more test cases for better test coverage.

### Other changes and fixes

- Fix issue where calendar options always end up using their defaults even though an option has been specified
- Various other bug, duplicate and typo fixes, and other improvements.

## 1.3.0-rc.2 /2020-01-13 <a name="1.3.0-rc.2"></a>

- Fix installation script when romcal is installed as a node dependency

## 1.3.0-rc.1 /2020-01-12 <a name="1.3.0-rc.1"></a>

- Drop Shrove Monday and Tuesday from the general calendar (#90).
- Refactor rank types of celebrations (#109).
- Various bug fixes and improvements (#105 #133 #129 #44).
- A lot of localization and calendar improvements (#11 #25 #30 #35 #38 #39 #42 #46 #111 #115 #116 #118 #123 #127 #139 #143).

## 1.3.0-beta.3 /2019-12-10 <a name="1.3.0-beta.3"></a>

- Update and simplify the build process.
- Add automated build process to transpile the code after installing and before publishing.
- Distribution files are now not included anymore in the codebase.
- In addition to the `romcal.bundle.min.js` file (for browsers), source code is also transpiled by Babel in the `dist/` directory. This makes it easier to include romcal in any node.js package.

## 1.3.0-beta.2 /2019-12-06 <a name="1.3.0-beta.2"></a>

- Update node dependencies.
- The `@std/esm` package has been deprecated in favour of `esm`. Also `esm` have limited the `.mjs` files to basic functionality without support for esm options, to align with the current experimental support in Node. [More details here](https://github.com/standard-things/esm/issues/696). According to that all `.mjs` files in the `romcal` project have been renamed back to `.js`.
- Locales management and pickup in romcal have been refactored, and it now behaves like Moment.js (used by romcal) or the general approach for i18n in app development: locale containing region like `fr-CA` will gracefully fall back to `fr` if a localisation key isn't in `fr-CA` or if `fr-CA.js` doesn't exits in the `src/locales` directory. In the end, it always falls back to `en`, which is the default language in romcal. Full explanations have been added to the `README.md`.
- Locale files have been renamed to kebab-case with capitalized regions to follow the IETF Language Codes standards and be close to the general conventions in software development for i18n.
- In locale files, the `general` and `national` parts are now merged in a new `sanctoral` part. This will avoid potential duplicated or missing keys between these 2 parts, particularly when a celebration is move from the general to the national calendar. Also, keys in celebrations and the new sanctoral have been sorted alphabetically. ([#97](https://github.com/romcal/romcal/pull/97))
- Italian translation has been added in romcal ([#94](https://github.com/romcal/romcal/issues/94)).
- In Christian calendars, Sunday is the first day of the week ([#103](https://github.com/romcal/romcal/issues/103))
- Drop Shrove Monday and Tuesday from the general calendar ([#90](https://github.com/romcal/romcal/issues/90)).
- Potential breaking changes:
  - The `WEEKDAY` type is renamed to `FERIA` ([#88](https://github.com/romcal/romcal/issues/88))
- Fixes:
  - Depending on how the language string is set in romcal, one could get bilingual results when part of a string being in the chosen language and the default English (locale lookup for date name strings are based on Moment.js, not romcal). Locale files are now managed the same way as Moment.js. ([#85](https://github.com/romcal/romcal/issues/85))
  - Remove some duplicate keys in `enUs.mjs` ([#42](https://github.com/romcal/romcal/pull/42), [#35](https://github.com/romcal/romcal/pull/35))

## 1.3.0-beta.1 /2018-03-05 <a name="1.3.0-beta.1"></a>

- Revamp the code to use ES6 syntax
- Dropped support for Node v4, v5.
- Integrated module with `std/esm` to read `.mjs` files and `babel` to ensure compatibility and seamless usage with lower version of node and requiring via CommonJS
- Expose constants and calendar helper functions and via module exports
- Various unreported bug fixes
- Added locale files for ~~Czech Republic and~~ Slovakia
- Added national calendars for Czech Republic and Slovakia
- Added more test cases for better test coverage
- Fixes:
  - [issue #2](https://github.com/pejulian/romcal/issues/2)
    - The command `npm run build` now generates an ES5 distribution bundle of `romcal` that is UMD compliant.
  - [issue #9](https://github.com/pejulian/romcal/issues/9)
    - typo fix for `src/calendars/*sriLanka*.mjs`
  - [issue #10](https://github.com/pejulian/romcal/issues/10)
    - removed duplicate celebration with different key names for
      - `saintsCyrilMonkAndMethodiusBishop` replaces `saintsCyrilAndMethodiusSlavicMissionaries`
      - `assumption` replaces `assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance`
      - Removed duplicate key `saintAnselmOfCanterburyBishopAndDoctorOfTheChurch` defined in the national calendar in `src/locales/en.mjs`
      - Removed duplicate `birthOfTheBlessedVirginMary` defined in the national calendar in `src/locales/en.mjs`
      - `blessedBoleslawaMariaLamentVirginAndSaintAngelaMericiVirgin` replaces `blessedBoleslawaMariaLamentVirginsaintAngelaMericiVirgin` and `blessedBoleslawaMariaLamentVirgin` and duplicate removed
      - `blessedInacioDeAzevedoPriestAndCompanionsMartyrs` replaces `blessedInacioDeAzevedoPriestAndMartyr` and duplicate removed
      - `blessedLauraVicunaVirgin` replaces `blessedLauraVicuna` and duplicate removed
      - `saintMatthiasApostle` renamed to `saintMatthiasTheApostle` and duplicate removed
      - Removed duplicate keys for `saintCyrilOfAlexandriaBishopAndDoctor` and `saintCatherineOfAlexandriaVirginAndMartyr`
      - Remove duplicate keys for `saintBenedictOfNursiaAbbot`
      - Remove duplicate keys for `saintApollinaris`
      - Rename `saintGallAbbot` to `saintGallAbbotAndMissionary`
      - Rename `saintCristobalMagallanesAndCompanionsMartyrs` to `saintChristopherMagallanesAndCompanionsMartyrs`
  - [issue #11](https://github.com/pejulian/romcal/issues/11)
    - Renamed `triumphOfTheCross` to `theExaltationOfTheHolyCross`
  - [issue #12](https://github.com/pejulian/romcal/issues/12)
    - `saintsFabianAndSebastianPopeAndMartyrs ` renamed to `saintFabianPopeAndMartyrAndSaintSebastianPopeAndMartyr`
  - [issue #14](https://github.com/pejulian/romcal/issues/14)
    - Introduce the new `drop` property that allows national calendars to omit unwanted celebrations from their output
    - Introduce new `christmastideIncludesTheSeasonOfEpiphany` flag to allow output to include or exclude the "season" of Epiphany from being merged into Christmastide
    - Fix issue where calendar options always end up using their defaults even though an option has been specified
  - [issue #15](https://github.com/pejulian/romcal/issues/15)
    - Renamed `blessedCaTherineOfSaintAugustineVirgin` to `blessedCatherineOfSaintAugustineVirgin` (fix typo with `T`)
  - [issue #16](https://github.com/pejulian/romcal/issues/16)
    - Renamed `saintsAndrewZoerardusAndBenedictEremites` to `saintsAndrewZoerardusAndBenedictHermits` (fix typo)
  - [issue #17](https://github.com/pejulian/romcal/issues/17)
    - Remove duplicate keys for `ourLadyOfSorrows`
  - [issue #27](https://github.com/pejulian/romcal/issues/27)
  - [issue #28](https://github.com/pejulian/romcal/issues/28)
  - [issue #29](https://github.com/pejulian/romcal/issues/29)
    - Epiphany is always celebrated on Jan 6 in Slovakia

## 1.2.4 <a name="1.2.4"></a>

- Added credits in the description section in `README.md`.
- Drop support of Node.js `v0.10.x`, `v0.11.x`, `v0.12.x`.
- Updated French Calendar.
- Fixes:
  - [pull #8](https://github.com/romcal/romcal/pull/8)
    - Compute correctly the week numbers in Lent.<br>
      During lent, weeks was starting on Wednesday instead of Sunday. This fix remove the first 4 days of lent (Ash Wednesday to Saturday) when computing the week number.
  - [issue #52](https://github.com/romcal/romcal/issues/52)
    - Duplicate entries for the same date.
  - [issue #63](https://github.com/romcal/romcal/issues/63)
    - Updated romcal to use correct lodash method for finding uniques with a criterion.
  - [pull #78](https://github.com/romcal/romcal/pull/78)
    - Add missing type: `MARTYR` & fix wrong specified types in brazil calendar.

## 1.2.3 / 2017-03-21 <a name="1.2.3"></a>

- Added French translations for France, Canada and Belgium.
- Fix issue where national feasts appear more than once in the calendar output

## 1.2.2 / 2017-03-21 <a name="1.2.2"></a>

- Merge PRs containing bug fixes and improvements, thanks [Etienne Magnier](https://github.com/emagnier) and [Damiaan Dufaux](https://github.com/Dev1an)

## 1.2.1 <a name="1.2.1"></a>

- Added caching mechanism for common celebration dates in the liturgical calendar to improve calendar processing output performance. Added more titles metadata to national and general celebrations.

## 1.2.0 <a name="1.2.0"></a>

- Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.
