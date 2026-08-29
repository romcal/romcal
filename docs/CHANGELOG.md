# Changelog

All notable changes to this project will be documented in this file.

## Romcal 3

The romcal v3 is a major rewrite of the core library, with performance and architecture in mind.
As a result, romcal v3 is now up to 10x faster than v2 and v1.
The new architecture helped to introduce new features without performance and code quality impacts.

### v 3.0.0@dev-55

#### Breaking change

- Now exporting Romcal (and other internal modules) as a named export [#465](https://github.com/romcal/romcal/pull/465).
  - To import Romcal, you now should use:
    - `import { Romcal } from 'romcal'` instead of `import Romcal from 'romcal'`.
    - `const { Romcal } = require('romcal')` instead of `const Romcal = require('romcal')`.
- Set Node 18+ as minimum version, and updating some npm dependencies [#465](https://github.com/romcal/romcal/pull/465).
- Updating hybrid NPM package setup (CJS + ESM), following the new recommended way by NPM [#465](https://github.com/romcal/romcal/pull/465).

### v 3.0.0@dev-52

#### Breaking change

- The `OPTIONAL_MEMORIAL` rank is being reintroduced, which was previously available as `OPT_MEMORIAL` until Romcal v2. This re-introduction includes related localizations for all currently supported locales.

### v 3.0.0@dev-1

#### Added

- Locales & Internationalization:
  - introducing a new internationalization library, [i18next](https://www.i18next.com/).
    i18next provide the standard i18n features such as (plurals, context, interpolation, format) and better tooling to manage locales in general.
  - The data model of all the locale files have been updated a bit to be compliant with i18next.
  - Weekday, month and ordinal names are added to all the locales.
  - The latin locale is now fully supported.
- Calendar inheritance:
  - Any particular calendar can now inherit from any other particular calendar.
  - All particular calendar still inherits from the General Roman Calendar at a root level.
  - To be DRY, it's now possible to create specific calendars, like `Europe` or `Americas`, that contain all inputs for these related countries (e.g. the Italian calendar will be under the European Calendar, which is under the General Roman Calendar).
  - Romcal now accept Diocesan calendars, that will have their respective country calendar as a parent calendar.
- Get all calendar definitions:
  - It's now possible to retrieve all possible definitions of a calendar (without computed dates or the context of a year).
    Check for the `.getAllDefinitions()` in the documentation.
- Metadata catalog:
  - Called as a martyrology catalog, which contain extra metadata for any saints/blessed peoples (like the canonization level, titles, date of death...).
  - When computing a calendar, the corresponding metadata are also integrated in the final `LiturgicalDay` object.
  - This is just a start, new metadata could be added or refined.

#### Changed

- Build: the build process have been completely rewritten.
  - The core library do not contain anymore all the calendar and localization files, to lightweight the size of the library (it only contain a lightweight version of the General Roman Calendar, without translation and extra metadata).
  - All calendars are now available as romcal plugin, which are a bundles of the calendar data, the localized strings, and the new martyrology metadata catalog.
  - Bundled files are available as CJS (CommonJS), ESM (ES modules), and IIFE (self-executed from an HTML script tag).
  - Internally the [esbuild](https://esbuild.github.io/) library has been introduced, as well as some other tooling to build and generate quality dist files.
- General performance:
  - Romcal is now up to 10x faster :racing_car: :checkered_flag:.
  - The codebase have been rewritten, taking care of JavaScript methods and architecture that bring a faster computing time.
  - Dayjs has been removed in favor of the vanilla `Date` object and some helper functions, focussing also on performance when manipulating or composing dates.
  - The support of IE11 was dropped. Only modern browsers (desktop and mobile) and Node 14.16+ are supported (this could still work on older versions without garanties).
  - Romcal dependencies have been cleared, and have now only one (optional) dependency: i18next. And if you don't need to localize the metadata, it's not necessary to import i18next in your project.
- New way to initialize the `Romcal` object, set optional configuration, and access to the generated data.
  - Check the "Get started" section in the documentation.
  - Check the new `.generateCalendar()` and `.getOneLiturgicalDay()` in the documentation.
  - Romcal now produce an `Object` of key/values, where the key is a date (as a ISO8601 `string`), and the value is an `Array` of `LiturgicalDay` objects that can occur on a specific day. The first `LiturgicalDay` object is the default one, the following objects are optionals (e.g. optional memorials).
    Previously on Romcal v1 and v2, it was a flat `Array` of `LiturgicalDay` objects.
- Calendar input definitions:
  - The data schema has been updated (see the documentation for more details).
  - Defining a date is now a lot simpler than before, thanks to predefined date definitions. No need to write custom functions anymore, to manage exceptions.
  - Calendar definitions do not contain anymore executed code, so the data are now easily serializable. It makes easier to plug any kind of data adapter for advanced usages (like any third-party data source/db), and open to the possibility to use YAML in the future.
- Ranks and precedence rules:
  - In the core library, this part has been fully redesigned, to be fully compliant with the _General Norms for the Liturgical Year and the Calendar_.
  - The `LiturgicalDay` object are now following closely the precedences rules. The `rank` metadata is still proposed to describe the type of liturgical day (Solemnity, Feast, Memorial, Sunday, Weekday)
- Seasons and Periods:
  - `seasons` are now following closely the _General Norms for the Liturgical Year and the Calendar_. There is no more a Holy Week season (moved to the period metadata), Holy Thursday have 2 possible liturgical days (the Holy Thursday which is the last day of Lent, and the Thursday of the Lord's Supper which start the Paschal Triduum), Easter Sunday take place in 2 seasons (the Paschal Triduum and the Easter Time).
  - `periods` include additional information, like early/late ordinary time, and special liturgical periods coming from the monastic traditions.

#### Removed

- Options to group and filters `LiturgicalDay` objects by predefined criteria is now removed. The reason is that is now very easy to group or filter a JavaScript object, and hard to cover all possible user requirement. However, produced data is by default sorted and grouped by dates.

## Romcal 2 (2021-05-18)

### Breaking Changes

- Data schema output by romcal has been drastically remodeled. Please have look to the documentation for more information.
- ascensionOnSunday, corpusChristiOnSunday, epiphanyOnSunday option names have been renamed.
- General romcal option names have been unified. `calendar` is renamed to `scope` and take the values: `gregorian` or `liturgical`.
- The provided liturgical year now correspond to the second year (the almost whole part of the civil year).
- The `.queryFor` method has been removed. A `.groupBy` and filter methods has been added. Related documentation has been added.
- Content:
  - A major refactor and proofing of liturgical day keys has been done.
  - Keys are now written in snake_case, more readable and JavaScript agnostic.
  - Proof the strings in en.ts and create specific rules how to generate key names.
  - National calendars are renamed to particular

### Improved

- Codebase rewritten from JavaScript to TypeScript.
- Improved the existing `psalterWeek` metadata, according to the guideline of the liturgy of the hours.
- Several improvements in the codebase (architecture, documentation, naming...).
- The documentation has been updated to cover all new feature in detail, and available in the `/docs/` directory.

### Added

- New romcal logo.
- Added `weekdayCycle` metadata.
- Added `isHolyDayOfObligation` metadata, on all Sundays and liturgical day that are a holiday of obligation.
- Liturgical colors are now automatically generated by default, according to the liturgical seasons or other criteria (memorial of a Martyr...).
- You can now extend the input definition of a liturgical day on any particular calendars, that is already defined in the general/celebration calendar. More information in the documentation.
- Content:
  - Introduced the black liturgical color
  - Institution of the Sunday of the Word of God

### Fixed

- Many bug fixes thanks to the switch to the TypeScript language, and the strong typing of this language.

### Removed

- The `christmastideIncludesTheSeasonOfEpiphany` and `christmastideIncludesTheSeasonOfEpiphany` are removed.

## Romcal 1.3 (2020-01-26)

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

## Romcal 1.3.0-rc.2 /2020-01-13 <a name="1.3.0-rc.2"></a>

- Fix installation script when romcal is installed as a node dependency

## Romcal 1.3.0-rc.1 /2020-01-12 <a name="1.3.0-rc.1"></a>

- Drop Shrove Monday and Tuesday from the general calendar (#90).
- Refactor rank types of celebrations (#109).
- Various bug fixes and improvements (#105 #133 #129 #44).
- A lot of localization and calendar improvements (#11 #25 #30 #35 #38 #39 #42 #46 #111 #115 #116 #118 #123 #127 #139 #143).

## Romcal 1.3.0-beta.3 /2019-12-10 <a name="1.3.0-beta.3"></a>

- Update and simplify the build process.
- Add automated build process to transpile the code after installing and before publishing.
- Distribution files are now not included anymore in the codebase.
- In addition to the `romcal.bundle.min.js` file (for browsers), source code is also transpiled by Babel in the `dist/` directory. This makes it easier to include romcal in any node.js package.

## Romcal 1.3.0-beta.2 /2019-12-06 <a name="1.3.0-beta.2"></a>

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

## Romcal 1.3.0-beta.1 (2018-03-05)

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

## Romcal 1.2.4

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

## Romcal 1.2.3 (2017-03-21)

- Added French translations for France, Canada and Belgium.
- Fix issue where national feasts appear more than once in the calendar output

## Romcal 1.2.2 (2017-03-21)

- Merge PRs containing bug fixes and improvements, thanks [Etienne Magnier](https://github.com/emagnier) and [Damiaan Dufaux](https://github.com/Dev1an)

## Romcal 1.2.1

- Added caching mechanism for common celebration dates in the liturgical calendar to improve calendar processing output performance. Added more titles metadata to national and general celebrations.

## Romcal 1.2.0

- Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.
