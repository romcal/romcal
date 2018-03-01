# Version history

## 1.3.0 /2018-02-25
* Rewrite module using ES6 syntax
* Integration with `std/esm` and `babel` to ensure backward compatibility
* Expose constants and calendar helper functions and via CommonJS module exports
* Various bug fixes

## 1.2.4
* Added credits in the description section in `README.md`.
* Drop support of Node.js `v0.10.x`, `v0.11.x`, `v0.12.x`.
* Updated French Calendar.
* Fixes:
    * [pull #8](https://github.com/romcal/romcal/pull/8)
        * Compute correctly the week numbers in Lent.<br>
          During lent, weeks was starting on Wednesday instead of Sunday. This fix remove the first 4 days of lent (Ash Wednesday to Saturday) when computing the week number.
    * [issue #52](https://github.com/romcal/romcal/issues/52)
        * Duplicate entries for the same date.
    * [issue #63](https://github.com/romcal/romcal/issues/63)
        * Updated romcal to use correct lodash method for finding uniques with a criterion.
    * [pull #78](https://github.com/romcal/romcal/pull/78)
        * Add missing type: `MARTYR` & fix wrong specified types in brazil calendar.

## 1.2.3 / 2017-03-21
* Added French translations for France, Canada and Belgium.
* Fix issue where national feasts appear more than once in the calendar output

## 1.2.2 / 2017-03-21
* Merge PRs containing bug fixes and improvements, thanks [Etienne Magnier](https://github.com/emagnier) and [Damiaan Dufaux](https://github.com/Dev1an)

## 1.2.1
* Added caching mechanism for common celebration dates in the liturgical calendar to improve calendar processing output performance. Added more titles metadata to national and general celebrations.

## 1.2.0
* Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.
