# M10 — Divinum-Officium → readable slug key migration

**Status:** done.

## Problem

Through M9 the 1962 package kept the same short file keys Divinum-Officium (DO) uses on disk — `Adv1-0`, `Quadp3-3`, `Pasc0-0`, `Pent24-0`, `Nat1-0`, `C5`, `01-01`, `07-22`. These keys are compact but opaque: a consumer reading `day.primary.key === 'Quadp3-3'` cannot tell it refers to Ash Wednesday without consulting DO's schema.

1969 (`rite-roman1969`) uses expressive snake_case keys (`holy_family`, `trinity_sunday`, `common_of_confessor_not_pontiff`) that are self-documenting and align between calendars where days coincide. M10 brings 1962 onto the same taxonomy.

## Strategy

Keep DO keys as the **internal** import currency (so name-override dictionaries and DO color lookups continue to match), and remap to slugs at the **emit boundary**. The remap is deterministic, derived from three mapping tables (`sancti`, `tempora`, `commune`) under `build/import-divinum-officium/key-mapping/`.

### Mapping construction

- **Sancti** (523 entries) — one-pass extraction from `entry.officium` through a `proposeSlug` heuristic. Reuses exactly the 1969 `sancti` slug where the entries describe the same feast (Circumcision, Purification, All Saints, …); distinguishes local variants with suffix tokens (`_rubrica1960`, `_tridentine`, `_poland`, `_optional_variant`). 10 parity reuses with 1969.
- **Tempora** (523 entries) — pattern + EXPLICIT hybrid. Advent/Lent/Paschaltide/Post-Pentecost follow the formulaic `<season>_<week>_<weekday>` convention; singletons (`holy_family`, `easter_sunday`, `trinity_sunday`, `corpus_christi`, `sacred_heart_of_jesus`, `palm_sunday`, `quinquagesima_wednesday` for Ash Wednesday, `sunday_within_octave_of_christmas`, …) are listed explicitly in `key-mapping/tempora.ts`.
- **Commune** (59 entries) — explicit `C1..C21` → `common_of_*` map mirroring the DO commune.

Unit tests (`build/import-divinum-officium/key-mapping/tools/verify-*.ts`) guarantee every DO key maps to a unique slug; a collision fails the import.

### Emit-time rewrite

`build/import-divinum-officium/remap-entries.ts`:

- `remapEntries(entries, source)` — rekeys a sancti/tempora/commune record. Rewrites `entry.id`, `entry.commune`, `entry.officium` (if it's an `@Commune/Cxx` ref), localized `entry.names` `@refs`, inline ref-token targets (`{ type: 'ref', target: 'Sancti/07-22' }` → `{ type: 'ref', target: 'Sancti/mary_magdalene_penitent' }`), and entry-level `references`. Broken or unknown refs (e.g. `Commune/Propaganda`, a DO file that was never published) are left verbatim — `rewriteRef` traps the `remapKey` throw so a missing mapping is not a fatal error.
- `remapCalendar(calendar)` — rekeys `FeastEntry.fileKey` and `CommemorationEntry.fileKey` inside `calendar-1960.json`. The MM-DD date keys themselves stay (they are dates, not file keys).

`importer/index.ts` calls the remap immediately before emitting any artifact. The same rewritten records feed `emit-locales` and `emit-propers`, so locale `names` maps and per-locale proper JSONs land with slug keys automatically.

### Runtime migration

The runtime was already slug-aware wherever it consumed locale files (those landed in M9 with slug keys via the same emit pivot). The places that still compared against DO keys were:

- `src/proper-of-time/resolver.ts` — rewrote every walker to emit slug `temporaKey`s directly. The Jan 7–13 window now always emits `epiphany_octave_day_N` rather than branching on "in-octave vs post-Holy-Family" (DO keeps one `Epi1-N` file for both uses).
- `src/rubrics/tempora-class.ts` — regex sets (`TRIDUUM_KEYS`, `CLASS_I_SOLEMN_SUNDAYS`, `HOLY_WEEK_FERIAS`, `EASTER_WEEK_FERIAS`, `QUADP_SUNDAYS`, …) rewritten against slug-shaped keys.
- `src/rubrics/precedence.ts` — `LORD_FEAST_KEYS` now lists the actual sancti slugs (`the_purification_of_the_blessed_virgin_mary_candlemas`, `exaltation_of_the_holy_cross`, `nativity_of_our_lord_jesus_christ`, …), which §15 elevates above a coinciding Class II Sunday.
- `src/sanctoral/octave.ts` — `parentFeastId` now references `nativity_of_our_lord_jesus_christ` (matching the Christmas sancti slug).
- `src/propers/resolve.ts` — Sunday-fallback pattern rewritten in terms of slug prefixes (`advent`, `lent`, `easter_time`, `after_pentecost_N`, `resumed_epiphany_N`, `epiphany`, `septuagesima`, `sexagesima`, `quinquagesima`) plus explicit rules for `christmas_time_january_[2-5]` and `christmas_octave_day_[567]` → `sunday_within_octave_of_christmas`.

### Tests

`__tests__/key-shape.test.ts` is a shape-guard: it asserts every `sancti/tempora/commune.json` key, every entry `id`, every locale `names` key, and every proper-scaffold key is a snake_case slug; and that no inline ref token targets a DO-shaped key (`AdvN-N`, `PascN-N`, `CN`, …).

The existing unit suites (`proper-of-time`, `rubrics`, `rubrics-polish`, `propers`) were updated to assert slug keys instead of DO keys.

## Bumped

`IMPORTER_VERSION` → `0.5.0`.

## Naming conventions (recap)

- **Sancti** — snake_case descriptive slug, optionally suffixed by a provenance token: `_rubrica1960` (Dom Pius Parsch 1960 additions), `_tridentine` (proper to the 1962 Missal), `_poland` / `_germany` / `_france` (regional supplements), `_optional_variant` (DO's alternate form). Feast-of-the-Lord feasts in `LORD_FEAST_KEYS` (precedence.ts) use the same slug.
- **Tempora** — `<season>_<ordinal>_<weekday>` for seasons with numbered weeks (`advent_2_friday`, `lent_3_saturday`, `after_pentecost_11_sunday`), and descriptive singletons for named days (`holy_family`, `easter_sunday`, `palm_sunday`, `quinquagesima_wednesday` = Ash Wednesday, `trinity_sunday`, `corpus_christi`, `sacred_heart_of_jesus`, `sunday_within_octave_of_christmas`, `second_sunday_after_christmas` = Holy Name). Resumed Epiphany Sundays (displaced by an early Easter) use `resumed_epiphany_N_sunday`.
- **Commune** — `common_of_<qualifier>` (`common_of_confessor_not_pontiff`, `common_of_one_martyr_paschaltide`, `common_of_dedication_of_a_church`).

## Consumer impact

- `Celebration1962.key` values are now slugs. Downstream code that matched against the old DO keys (`day.primary.key === 'Pasc0-0'`) must be updated to slugs (`day.primary.key === 'easter_sunday'`).
- The mapping table `build/import-divinum-officium/key-mapping/*.ts` is the source of truth and can be consulted when migrating client code.
- Locale name lookups now key on `sancti/<slug>`, `tempora/<slug>`, `commune/<slug>` across the i18next `names` namespace. The 1969→1962 parity slugs (10 feasts, tracked in the sancti map) allow cross-rite UI reuse without translation duplication.
