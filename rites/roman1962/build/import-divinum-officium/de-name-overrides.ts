/**
 * German name fallbacks for 1962 mass entries that divinum-officium does
 * not localize. We render the calendar in German and need *some* name for
 * every day of the year — for ferias and seasonal weekdays divinum-officium
 * ships only Latin, so we synthesize German titles from the Latin ones.
 *
 * The synthesis is intentionally formulaic ("Dienstag in der 1. Fastenwoche")
 * to match what German missals typically use. For sancti / feasts we maintain
 * an explicit map (translations either follow the German Schott-Messbuch or
 * common German hagiography).
 *
 * Applied during import; never overrides an existing names.de from horas/.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Montag',
  '2': 'Dienstag',
  '3': 'Mittwoch',
  '4': 'Donnerstag',
  '5': 'Freitag',
  '6': 'Samstag',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

/**
 * Convert a tempora key like "Quad3-2" into a German feria label, or undefined
 * if the key shape is unfamiliar.
 *
 * Recognised prefixes:
 *   Nat02..Nat05           Christmas-octave weekdays
 *   Quadp1-N / Quadp2-N    Septuagesima / Sexagesima week feria N
 *   QuadN-M                Lent week N feria M (1..4); Quad5-* = Passion week
 *   Pasc1-N                First week after Easter octave
 *   PentNN-M               N-th week after Pentecost feria M
 *   PentEpiN-0             Resumed N-th Epiphany Sunday
 *   PentEpiN-M             Feria M of resumed N-th Epiphany week
 *   Epi5-N                 5th-Epiphany week feria N (post-1960)
 */
export function temporaDeFromKey(key: string): string | undefined {
  // Christmas octave weekdays: Nat02..Nat06 → "2. Tag der Weihnachtsoktav"
  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${nat[1]}. Tag der Weihnachtsoktav`;

  // Resumed Epiphany Sundays: PentEpiN-0
  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${pentEpiSun[1]}. wiederaufgenommener Sonntag nach Erscheinung des Herrn`;

  // Resumed Epiphany weekdays: PentEpiN-M
  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} in der ${pentEpi[1]}. wiederaufgenommenen Woche nach Erscheinung des Herrn`;
  }

  // Pentecost ordinary weekdays: PentNN-M
  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} in der ${wk}. Woche nach Pfingsten`;
  }

  // Easter-octave following week: Pasc1-M
  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} in der Weißen Woche`;
  }

  // Lent weeks Quad1..Quad4 feria
  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} in der ${quad[1]}. Fastenwoche`;
  }

  // Passion week: Quad5-M
  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} in der Passionswoche`;
  }

  // Septuagesima/Sexagesima/Quinquagesima weekdays: Quadp1-M / Quadp2-M / Quadp3-M
  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Septuagesima' : quadp[1] === '2' ? 'Sexagesima' : 'Quinquagesima';
    if (wd) return `${wd} in der ${label}-Woche`;
  }

  // Epiphany weekday after Epi5-M
  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} in der ${epi[1]}. Woche nach Erscheinung des Herrn`;
  }

  return undefined;
}

const ORDINAL_DE: Record<string, string> = {
  secunda: 'Zweiter',
  tertia: 'Dritter',
  quarta: 'Vierter',
  quinta: 'Fünfter',
  sexta: 'Sechster',
  septima: 'Siebter',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  // Multi-word combinations first.
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Bischof und Bekenner'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Bischof und Märtyrer'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Bischof, Bekenner und Kirchenlehrer'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Bekenner und Kirchenlehrer'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Jungfrau und Märtyrerin'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Papst und Bekenner'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Papst und Märtyrer'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abt und Bekenner'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abt und Märtyrer'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' und Gefährten, Märtyrer'],
  // Single-word endings.
  [/,?\s+Episcoporum$/i, ', Bischöfe'],
  [/,?\s+Episcopi$/i, ', Bischof'],
  [/,?\s+Confessorum$/i, ', Bekenner'],
  [/,?\s+Confessoris$/i, ', Bekenner'],
  [/,?\s+Martyrum$/i, ', Märtyrer'],
  [/,?\s+Martyris$/i, ', Märtyrer'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Jungfrauen und Märtyrerinnen'],
  [/,?\s+Virginum$/i, ', Jungfrauen'],
  [/,?\s+Virginis$/i, ', Jungfrau'],
  [/,?\s+Apostolorum$/i, ', Apostel'],
  [/,?\s+Apostoli$/i, ', Apostel'],
  [/,?\s+Papae$/i, ', Papst'],
  [/,?\s+Reginae$/i, ', Königin'],
  [/,?\s+Abbatis$/i, ', Abt'],
  [/,?\s+Abbatum$/i, ', Äbte'],
  [/,?\s+Diaconi$/i, ', Diakon'],
  [/,?\s+Diaconorum$/i, ', Diakone'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Kirchenlehrer'],
  [/,?\s+Presbyteri$/i, ', Priester'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' und Gefährten, Märtyrer'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum)$/i;

/**
 * Best-effort transformation of a clean Latin saint title into German.
 * Targets the long tail of commemoration entries (`04-14t`, `01-28t`, …) that
 * divinum-officium ships in Latin only — and which our SANCTI_DE map does not
 * try to enumerate exhaustively. The personal names stay in their Latin form
 * (German Catholics recognize "Tiburtii" as well as "Tiburtius"), but the
 * abbreviations and the trailing job-title genitive get a clean German render.
 *
 * Returns undefined for anything that does not look like a clean Latin saint
 * title — empty strings, English-looking names, or Latin that does not end in
 * a known qualifier — so callers can decide whether to fall back further.
 */
export function autoTranslateLatinSaintToDe(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  // Heuristic English filter: a few common lowercase function words that never
  // appear in a Latin liturgical title rule out e.g. "S. John I, pope and martyr".
  if (/\b(of|and|pope|bishop|martyr|confessor|virgin|the)\b/i.test(raw)) return undefined;

  let out = raw;
  // Normalize æ/œ before substitution so "Papæ" matches "Papae".
  out = out.replace(/æ/g, 'ae').replace(/œ/g, 'oe');

  // Strip the "secundo"/"tertio" suffix divinum-officium uses on alternate
  // commemoration variants ("S. Agnetis Virginis Martyris secundo") so the
  // qualifier match below can latch onto the preceding job title.
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');

  // Only translate if the string now ends in a recognizable genitive job title;
  // otherwise we'd be guessing at unstructured Latin and likely produce noise.
  if (!QUALIFIER_RE.test(out)) return undefined;

  // Multi-word qualifier endings come first so single-word ones do not eat the
  // longer match. Anchored to end-of-string only — qualifiers in the middle of
  // a title (rare) keep their Latin form.
  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  // Connector "et" between names ("Petri et Pauli") → "und". Avoid touching
  // already-translated suffixes by running this after the qualifier pass.
  out = out.replace(/\bet\b/g, 'und');

  // Honorifics
  out = out
    .replace(/\bSs\.\s+/g, 'Hll. ')
    .replace(/\bS\.\s+/g, 'Hl. ')
    .replace(/\bB\.\s+/g, 'Sel. ')
    .replace(/\bBB\.\s+/g, 'Sel. '); // plural Beati

  return out;
}

/**
 * Explicit translations for sancti file keys whose German names do not exist
 * in divinum-officium (typically newer feasts or ones the German horas
 * collection skips). Verified against the German Schott-Messbuch where
 * possible. Keys with the `r` suffix are 1960-rubrics variants of the same
 * feast and share the same name.
 */
const SANCTI_DE: Record<string, string> = {
  '01-07': 'Zweiter Tag der Epiphanie-Oktav',
  '01-08': 'Dritter Tag der Epiphanie-Oktav',
  '01-09': 'Vierter Tag der Epiphanie-Oktav',
  '01-10': 'Fünfter Tag der Epiphanie-Oktav',
  '01-11': 'Sechster Tag der Epiphanie-Oktav',
  '01-12': 'Siebter Tag der Epiphanie-Oktav',
  '12-28r': 'Vierter Tag der Weihnachtsoktav',
  '01-24': 'Hl. Timotheus, Bischof und Märtyrer',
  '01-28': 'Hl. Petrus Nolaskus, Bekenner',
  '02-02': 'Mariä Lichtmess (Darstellung des Herrn)',
  '02-11': 'Erscheinung der seligsten Jungfrau Maria von Lourdes',
  '04-13': 'Hl. Hermenegild, Märtyrer',
  '05-01r': 'Hl. Joseph der Arbeiter',
  '05-11r': 'Hll. Apostel Philippus und Jakobus',
  '05-31': 'Maria Königin',
  '07-01': 'Kostbares Blut unseres Herrn Jesus Christus',
  '07-03r': 'Hl. Irenäus, Bischof und Märtyrer',
  '08-06': 'Verklärung unseres Herrn Jesus Christus',
  '08-14': 'Vigil von Mariä Aufnahme in den Himmel',
  '09-24': 'Maria von der Erlösung der Sklaven',
  '11-18r': 'Weihe der Basiliken der hll. Apostel Petrus und Paulus',
  '12-13r': 'Hl. Lucia, Jungfrau und Märtyrerin',
};

/**
 * Derive a German name for a sanctoral file key, either from an explicit
 * override or by translating known Latin patterns
 * ("Secunda die infra Octavam Epiphaniae" → "Zweiter Tag der Epiphanie-Oktav").
 */
export function sanctiDeFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_DE[key];
  if (direct) return direct;

  if (!latin) return undefined;

  // "Secunda/.../Septima die infra Octavam Epiphaniae"
  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_DE[epiOct[1].toLowerCase()];
    if (ord) return `${ord} Tag der Epiphanie-Oktav`;
  }

  // "Die quarta infra octavam Nativitatis" etc.
  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_DE[natOct[1].toLowerCase()];
    if (ord) return `${ord} Tag der Weihnachtsoktav`;
  }

  // Generic fallback: best-effort translation of a clean Latin saint title.
  return autoTranslateLatinSaintToDe(latin);
}
