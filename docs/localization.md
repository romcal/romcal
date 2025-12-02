# Localization

## Localizing liturgical day names

Liturgical day names in romcal can be localized to any language that is already supported by [DayJS i18n](https://day.js.org/docs/en/i18n/i18n).

Locales are stored as `.ts` files in the `rites/roman1969/src/locales` directory.

If the given locale contains a region (the second group of letters after a hyphen, e.g. for `fr-ca`, the `ca` represents the region), a base language will be set as a locale fallback (`fr` in our example).

A locale can have one or two fallbacks. `en` is the default locale in romcal and always serves as the last fallback.

The fallbacks are used when a string in the specified locale is not defined in the `src/locales` directory or the given key does not exist in any of previous locale(s).

For example, a given locale containing region (like `fr-ca`) will gracefully fall back to `fr` if a localization key isn’t in `fr-ca`, or if `fr-ca.ts` doesn’t exits in the `src/locales` directory.
In the end, it always falls back to `en`, which is the default language in romcal.
This should also be used to make the localization files smaller, i.e. when the locale containing region has a particular string translated the same way as the main locale (e.g. `fr`), we should not localize that particular string in the locale containing region.

The structure of the locale file is typically like so:

```json5
{
  id: 'fr-ca',
  seasons: {
    advent: {},
    christmas_time: {},
    ordinary_time: {},
    lent: {},
    pachal_triduum: {},
    easter_time: {},
  },
  periods: {},
  ranks: {},
  weekdays: {},
  months: {},
  colors: {},
  names: {},
}
```

Each entry in the locale file corresponds to a specific part of the liturgical calendar that can be localized.

- `seasons`: Localized names for liturgical seasons.
  - Uses the format:
    - `season_name`:
      - `season`: Localized name of the season.
      - `weekday`: Localized day format for a given weekday.
      - `sunday`: Localized day format for a given Sunday.
      - `privileged_weekday`: Localized day format for a privileged weekday in the season.
      - Other fields may be present depending on needs of the particular season.
- `periods`: Localized names for liturgical periods.
- `ranks`: Localized names for liturgical ranks.
- `weekdays`: Localized names for the days of the week.
- `months`: Localized names for the months of the year.
- `colors`: Localized names for liturgical colors.
- `names`: Localized names for specific liturgical days, such as feasts of saints and titles of Our Lord and Our Blessed Mother.
  - Each entry for any name that is added to a specific locale other than `en` must also exist in the `en` locale file, as this is the main source of truth.
  - If a name is not found in the specified locale, romcal will look for it in the fallback locales, ending with `en`.
  - There are also tests to ensure that all names in other locales exist in the `en` locale file.
  - Each entry should have a corresponding source comment with a link to the source of the translation, if applicable.
    - If a reference to a missal is used instead, this is the format we've decided to use:
      - `// src: $sourceName`
        - when the key value can be found exactly in the referenced document
      - `// based on: $sourceName`
        - when the key value is adapted from the referenced document
      - For missals, the following short form is used: (values are examples)
        - `mr` = Missale Romanum;
        - `fr` = is the locale of the Missal;
        - `2022` = publication year;
        - `ed3` = editio typica tertia;
        - `angers` = optional suffix when variations exist (examples below)
          - English Missals are published e.g. in the UK, the US, Australia
          - French Missals are published per diocese in France, but maybe in Canada too
      - the parts above are joined with an underscore (`_`): `// src: mr_fr_2022_ed3_angers`
