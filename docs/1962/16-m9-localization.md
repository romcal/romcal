# M9 — Localization alignment with 1969

Milestone: align 1962 localization with the 1969 rite's runtime shape (i18next,
per-locale source modules, English fallback, pre-built bundles) covering both
celebration names **and** Mass-proper text — derived programmatically from the
divinum-officium importer, not hand-authored.

## Why

Before M9, 1962 stored translations in two divergent shapes:

- **Names**: `entry.names = { en: '…', de: '…', … }` embedded in every
  `data/{sancti,tempora,commune}.json` entry.
- **Proper text**: `lang`-tagged tokens (`{ type: 'text', lang: 'en', value: '…' }`)
  inlined inside each section's ordered token stream.

1969 had already moved to typed per-locale modules (`src/locales/{en,de,…}.ts`)
with runtime lookup via i18next and a build-time bundler that merges English as
fallback. Downstream consumers expected the 1969 ergonomics; the 1962 package
did not match.

## Architecture

```
data/
  {sancti,tempora,commune}.json        slim — no names, scaffold-only sections
  propers/
    _structure/{source}.json           shared ordered scaffold (ref/directive/rubric + text slots)
    {lang}/{source}.json               per-locale text: { entryKey → { sectionName → string[] } }
src/
  types/locale.ts                      Locale1962 interface (mirrors 1969 Locale)
  locales/{lang}.ts                    AUTO-GEN — one typed module per DO locale
  locales/index.ts                     AUTO-GEN — aggregates into `locales` / `localeIds`
  i18n/init.ts                         createI18n1962() + createNameTranslator()
  sanctoral/data.ts                    loads slim JSON, rehydrates sections at runtime
  bundles/types.ts                     RomcalBundle1962 shape
build/
  import-divinum-officium/
    emit-locales.ts                    pivots entry.names → src/locales/*.ts
    emit-propers.ts                    pivots section text tokens → data/propers/**
  bundle.ts                            emits dist/bundles/{lang}.{js,cjs,d.ts}
```

## Key decisions

- **Short keys kept**. `01-01`, `Adv1-0`, etc. remain the canonical identifiers
  — they already drive the rubrics engine and are stable across three sources.
  Namespacing (`sancti/01-01`, `tempora/Adv1-0`, `commune/CN.txt`) disambiguates
  where keys collide across sources.
- **i18next as runtime**. Already a 1969 transitive dep; added directly to
  `rites/roman1962/package.json` for 1962's `createI18n1962()`.
- **Latin is authoritative**, English is the vernacular fallback, matching
  1969's convention. Fallback chain: `requested → en → la`.
- **1969's `Locale` type copied, not shared.** The rites are intentionally
  decoupled; 1962 has keys 1969 doesn't (`ranks.ClassI..IV`, `seasons.Septuagesima`)
  and vice versa. No cross-package import.
- **Scaffold + hydrate over redundancy.** Non-text tokens (refs, directives,
  rubrics, separators) live once in `data/propers/_structure/`; per-locale JSONs
  only carry slot→string arrays. Net saving: roughly 30–50% on the main JSON
  files vs. the pre-M9 inline shape.
- **Bundles are optional.** Consumers can use the i18next runtime or import a
  pre-merged bundle (`@internal/rite-roman1962/bundles/{lang}`) to avoid
  carrying i18next at all.

## Breaking changes

- `Celebration1962.names: Record<string, string>` removed. Consumers must
  select a locale via `Romcal1962({ localeId: 'fr' })` (or the underlying
  `buildLiturgicalYear1962(year, { translateName })`), and read
  `celebration.name: string`.
- `Romcal1962Config` gains a required-with-default `localeId` field (default
  `'la'`). `propersLocales` now defaults to `[localeId]` instead of `['la']`.
- Pre-M9 main JSON files are no longer forward-compatible — bump
  `IMPORTER_VERSION` to `0.4.0`; consumers that cached the pre-pivot JSON must
  re-run `npm run import:do -w @internal/rite-roman1962`.

## Verification

- `npm run import:do` produces 14 locale modules under `src/locales/`, per-locale
  propers JSONs under `data/propers/{lang}/`, and a shared scaffold under
  `data/propers/_structure/`.
- `npm run build` succeeds.
- `npm run bundle` emits 14 self-contained bundles under `dist/bundles/`.
- `npm test` passes (118 tests including a new `__tests__/locales.test.ts`
  round-trip that verifies every `(source, key)` resolves to a non-empty string
  through the fallback chain in every configured locale).
- Manual spot-check: `new Romcal1962({ localeId: 'fr' }).getOneLiturgicalDay('1962-11-01')`
  returns `primary.name === 'La Toussaint'` and
  `primary.propers.introit.fr` non-empty.

## Follow-ups

- Structured-label coverage (`colors`, `ranks`, `seasons`, `months`, `weekdays`)
  is authored once per locale inside `emit-locales` and merged from English
  when a given locale doesn't ship a value. Locale IDs the importer discovers
  but for which no structural dictionary is authored still work (names/propers
  flow through the fallback chain); they just inherit English labels.
- `commemoration-cap` and `precedence` never read `names` — no code-path
  migration was needed there, only `candidates.ts` and `calendar-year/build.ts`.
