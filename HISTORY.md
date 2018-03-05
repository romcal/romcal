# Version history

## 1.3.0 /2018-03-05
* Revamp code to use ES6 syntax
* Dropped support for Node v4, v5.
* Integrated module with `std/esm` to read `.mjs` files and `babel` to ensure compatibility and seamless usage with lower version of node and requiring via CommonJS
* Expose constants and calendar helper functions and via module exports
* Various unreported bug fixes
* Added locale files for Czech Republic and Slovakia
* Added national calendars for Czech Republick and Slovakia
* Fixes
    - [issue #9](https://github.com/pejulian/romcal/issues/9)
        + typo fix for `src/calendars/*sriLanka*.mjs`
    - [issue #10](https://github.com/pejulian/romcal/issues/10)
        + removed duplicate celebration with different key names for 
            * `saintsCyrilMonkAndMethodiusBishop` and `saintsCyrilAndMethodiusSlavicMissionaries` (`saintsCyrilAndMethodiusSlavicMissionaries` removed)
            * `assumption` and `assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance` (`assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance` removed)
        + [issue #15](https://github.com/pejulian/romcal/issues/15), [issue #16](https://github.com/pejulian/romcal/issues/16)
* Changes
    - `triumphOfTheCross` renamed to `theExaltationOfTheHolyCross`
    - `saintsFabianAndSebastianPopeAndMartyrs ` renamed to `saintFabianPopeAndMartyrAndSaintSebastianPopeAndMartyr`
* Added more test cases for better test coverage 

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
