# 02 — Findings: divinum-officium data format

Notes on `divinum-officium/` (local clone of <https://github.com/divinumofficium/divinum-officium>), the data source for the 1962 Mass port.

## Directory layout

Mass data lives under `divinum-officium/web/www/missa/`:

```
missa/
├── Latin/              # + English, Francais, Deutsch, Italiano, … (13 languages)
│   ├── Tempora/        # Proper of Time (Advent, Christmas, Lent, Easter, Pent, …)
│   ├── Sancti/         # Proper of Saints, files named MM-DD*.txt
│   ├── Commune/        # Commons (Martyrs, Confessors, Virgins, Doctors, …)
│   └── Ordo/           # Ordinary of the Mass / standard prayers
└── …
```

Calendars by rubric edition in `divinum-officium/web/www/Tabulae/Kalendaria/`:

- Historic: `1570.txt`, `1888.txt`, `1906.txt`, `1939.txt`, `1954.txt`, `1955.txt`
- Target: `1960.txt` (Rubricae 1960 — the "1962 Missal" calendar)
- `OP1962.txt` (Dominican 1962 — ignore for phase 1)

`divinum-officium/web/www/Tabulae/data.txt` registers rubric versions and inheritance:

```
Rubrics 1960 - 1960,1960,1960,1960,Reduced - 1955
```

## File format

INI-style sections with UTF-8 plain text.

### Example — `missa/Latin/Tempora/Adv1-0.txt` (1st Sunday of Advent)

```
[Officium]
Dominica I Adventus

[Rank]
;;Semiduplex;;6.9

[Rule]
no Gloria
Credo
Suffr=Maria1;Ecclesiæ,Papa;;

[Introitus]
!Ps 24:1-3
v. Ad te levávi ánimam meam: Deus meus, in te confído…
&Gloria

[Oratio]
Excita, quǽsumus, Dómine, poténtiam tuam, et veni…
$Qui vivis

[Lectio]
!Rom 13:11-14.
…

[Graduale] … [Offertorium] … [Secreta] … [Communio] … [Postcommunio]
```

### `[Rank]` grammar

`Name;;Class;;NumericRank;;[references]`

- `In Circumcisione Domini;;Duplex II classis;;5.09;;ex Sancti/12-25m3`
- `;;Semiduplex;;6.9` (Tempora — name lives in `[Officium]`)
- `;;Simplex;;1.4;;vide Sancti/12-26`

Classes:

- Pre-1960 Tridentine: Duplex I classis, Duplex II classis, Duplex majus, Duplex, Semiduplex, Simplex.
- 1960 rubrics: Class I, II, III, IV (reported numerically; ~7 = I, 5–6 = II, 4–5 = III, 1–3 = IV).

Multiple `[Rank]` blocks may coexist, tagged `(rubrica tridentina)`, `(rubrica 1960)`, `(rubrica divino afflatu)` — Perl selects per `$version`.

### `[Rule]` grammar

Space/newline-separated keywords plus `Key=Value` pairs. Relevant ones:

- `Gloria` / `no Gloria`
- `Credo` / `no Credo`
- `Prefatio=Nat` (Nativitas, Paschalis, Apostolorum, Trinitatis, Communis, …)
- `Suffr=…` (suffrages — mostly Office, occasionally Mass)
- `(rubrica 1960) no Ultima Evangelium`
- Commemorations: `Commemoratio`, `ex Commemoratio`

### Cross-references

- `@Tempora/Nat30` or `@Commune/C2a` — inlines the target file at that point.
- `@Sancti/12-25m3:Oratio` — pulls a named section from another file.
- `ex` / `vide` in `[Rank]` signals proper-sourced texts.

## Calendar tables

`Tabulae/Kalendaria/1960.txt` applies deltas over the 1955 base:

```
01-18=01-18r=S Priscae Virginis=1=
01-25=01-25r=In Conversione S. Pauli Apostoli=4=
05-03=05-03r=Ss. Alexandri et sociorum Martyrum=1=
```

Format: `origDate=newDateFlag=FeastName=Class=`.

## What is _not_ in the data

- Concurrence / occurrence resolution (when two feasts land on the same day).
- Transfer rules (moving an impeded feast forward).
- Precedence ties / commemoration counts.

These are implemented in Perl under `horascommon.pl`, `SetupString.pl`, `specials.pl`, `Transfer/`, `Stransfer/`. Porting this logic is the hard part — texts are easy.

## Languages

Parallel trees under `missa/<Language>/`: Latin, English, Francais, Deutsch, Espanol, Italiano, Magyar, Polski, etc. Same filenames, same section keys — only the prose differs. Gives us Latin + several vernaculars "for free".

## Extractability assessment

- **Texts (Introit/Collect/Epistle/Gospel/Gradual/Offertory/Secret/Communion/Postcommunion):** trivial to extract with a section parser.
- **Rank / class / Gloria / Credo / Preface flags:** straightforward per file, but needs rubric-version selection.
- **Cross-references (`@`, `ex`, `vide`):** need a small resolver to flatten into self-contained entries or to preserve as pointers.
- **Calendar inheritance (`data.txt` → 1960 deltas over 1955 over …):** model as layered overlays or flatten at build time.
- **Concurrence / commemorations / transfers:** re-implement from rubric spec; do not try to translate Perl.

Overall: clean enough that a one-shot parser can produce JSON fixtures we can commit under `rites/roman1962/`.
