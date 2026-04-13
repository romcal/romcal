/**
 * English name fallbacks for 1962 mass entries that divinum-officium does
 * not localize. divinum-officium ships English vernacular for the major
 * sancti, but most ferias and seasonal weekdays are Latin-only — this
 * mirror of de-name-overrides synthesizes English titles in the same
 * formulaic style ("Tuesday in the 1st Week of Lent").
 *
 * Applied during import; never overrides an existing names.en from horas/.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

function ordinal(n: number): string {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

/**
 * Distinctive temporal days that have a single canonical English name —
 * Holy Week, Easter Octave, Trinity Sunday, etc. divinum-officium's English
 * horas leaves these as Latin literals; this map gives them their proper
 * traditional names. Consulted before the formulaic patterns below.
 */
const TEMPORA_EN: Record<string, string> = {
  // Advent Sundays (3rd is "Gaudete" colloquially)
  'Adv1-0': '1st Sunday of Advent',
  'Adv2-0': '2nd Sunday of Advent',
  'Adv3-0': '3rd Sunday of Advent',
  'Adv4-0': '4th Sunday of Advent',
  // Pre-Lent Sundays
  'Quadp1-0': 'Septuagesima Sunday',
  'Quadp2-0': 'Sexagesima Sunday',
  'Quadp3-0': 'Quinquagesima Sunday',
  // Ash Wednesday and the days following
  'Quadp3-3': 'Ash Wednesday',
  'Quadp3-4': 'Thursday after Ash Wednesday',
  'Quadp3-5': 'Friday after Ash Wednesday',
  'Quadp3-6': 'Saturday after Ash Wednesday',
  // Lent Sundays (4th is "Laetare" colloquially)
  'Quad1-0': '1st Sunday of Lent',
  'Quad2-0': '2nd Sunday of Lent',
  'Quad3-0': '3rd Sunday of Lent',
  'Quad4-0': '4th Sunday of Lent',
  'Quad5-0': 'Passion Sunday',
  // Holy Week
  'Quad6-0': 'Palm Sunday',
  'Quad6-1': 'Monday of Holy Week',
  'Quad6-2': 'Tuesday of Holy Week',
  'Quad6-3': 'Wednesday of Holy Week',
  'Quad6-4': 'Maundy Thursday',
  'Quad6-5': 'Good Friday',
  'Quad6-6': 'Holy Saturday',
  // Easter Octave (Pasc0-N — N=0 is Easter Sunday itself)
  'Pasc0-0': 'Easter Sunday',
  'Pasc0-1': 'Easter Monday',
  'Pasc0-2': 'Easter Tuesday',
  'Pasc0-3': 'Easter Wednesday',
  'Pasc0-4': 'Easter Thursday',
  'Pasc0-5': 'Easter Friday',
  'Pasc0-6': 'Easter Saturday',
  // Easter-season Sundays
  'Pasc1-0': 'Low Sunday',
  'Pasc2-0': '2nd Sunday after Easter',
  'Pasc3-0': '3rd Sunday after Easter',
  'Pasc4-0': '4th Sunday after Easter',
  'Pasc5-0': '5th Sunday after Easter',
  'Pasc6-0': 'Sunday within the Octave of the Ascension',
  'Pasc7-0': 'Pentecost Sunday',
  // Major Pentecost-season feasts that share the Pent01-04 numbering
  'Pent01-0': 'Trinity Sunday',
  'Pent01-4': 'Corpus Christi',
};

/**
 * Convert a tempora key like "Quad3-2" into an English feria label, or undefined
 * if the key shape is unfamiliar. See de-name-overrides for the full key grammar.
 */
export function temporaEnFromKey(key: string): string | undefined {
  const explicit = TEMPORA_EN[key];
  if (explicit) return explicit;

  // Christmas octave weekdays: Nat02..Nat06 → "2nd Day in the Octave of Christmas"
  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${ordinal(parseInt(nat[1], 10))} Day in the Octave of Christmas`;

  // Resumed Epiphany Sundays: PentEpiN-0
  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `Resumed ${ordinal(parseInt(pentEpiSun[1], 10))} Sunday after Epiphany`;

  // Resumed Epiphany weekdays: PentEpiN-M
  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} in the Resumed ${ordinal(parseInt(pentEpi[1], 10))} Week after Epiphany`;
  }

  // Pentecost-season Sundays: PentNN-0 (NN >= 02)
  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${ordinal(parseInt(pentSun[1], 10))} Sunday after Pentecost`;

  // Pentecost ordinary weekdays: PentNN-M
  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} in the ${ordinal(wk)} Week after Pentecost`;
  }

  // Easter-octave following week: Pasc1-M (German "Weiße Woche" → "Low Week")
  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} in Low Week`;
  }

  // Other Easter-season weekdays (Pasc2..Pasc6)
  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} after the ${ordinal(parseInt(pascN[1], 10))} Sunday after Easter`;
  }

  // Lent weeks Quad1..Quad4 feria
  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} in the ${ordinal(parseInt(quad[1], 10))} Week of Lent`;
  }

  // Passion week: Quad5-M
  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} in Passion Week`;
  }

  // Septuagesima/Sexagesima/Quinquagesima weekdays: Quadp1-M / Quadp2-M / Quadp3-M
  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Septuagesima' : quadp[1] === '2' ? 'Sexagesima' : 'Quinquagesima';
    if (wd) return `${wd} in ${label} Week`;
  }

  // Advent ferias: AdvN-M
  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} in the ${ordinal(parseInt(adv[1], 10))} Week of Advent`;
  }

  // Epiphany Sunday: EpiN-0
  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${ordinal(parseInt(epiSun[1], 10))} Sunday after Epiphany`;

  // Epiphany weekday after EpiN-M
  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} in the ${ordinal(parseInt(epi[1], 10))} Week after Epiphany`;
  }

  return undefined;
}

const ORDINAL_EN: Record<string, string> = {
  secunda: '2nd',
  tertia: '3rd',
  quarta: '4th',
  quinta: '5th',
  sexta: '6th',
  septima: '7th',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  // Multi-word combinations first.
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Bishop and Confessor'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Bishop and Martyr'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Bishop, Confessor and Doctor of the Church'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Confessor and Doctor of the Church'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Virgin and Martyr'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Pope and Confessor'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Pope and Martyr'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abbot and Confessor'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abbot and Martyr'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' and Companions, Martyrs'],
  // Single-word endings.
  [/,?\s+Episcoporum$/i, ', Bishops'],
  [/,?\s+Episcopi$/i, ', Bishop'],
  [/,?\s+Confessorum$/i, ', Confessors'],
  [/,?\s+Confessoris$/i, ', Confessor'],
  [/,?\s+Martyrum$/i, ', Martyrs'],
  [/,?\s+Martyris$/i, ', Martyr'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Virgins and Martyrs'],
  [/,?\s+Virginum$/i, ', Virgins'],
  [/,?\s+Virginis$/i, ', Virgin'],
  [/,?\s+Apostolorum$/i, ', Apostles'],
  [/,?\s+Apostoli$/i, ', Apostle'],
  [/,?\s+Papae$/i, ', Pope'],
  [/,?\s+Reginae$/i, ', Queen'],
  [/,?\s+Abbatis$/i, ', Abbot'],
  [/,?\s+Abbatum$/i, ', Abbots'],
  [/,?\s+Diaconi$/i, ', Deacon'],
  [/,?\s+Diaconorum$/i, ', Deacons'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Doctor of the Church'],
  [/,?\s+Presbyteri$/i, ', Priest'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' and Companions, Martyrs'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum)$/i;

/**
 * Best-effort transformation of a clean Latin saint title into English.
 * Personal names stay in their Latin form (English readers recognize
 * "Tiburtii" alongside "Tiburtius"); abbreviations and the trailing
 * job-title genitive get a clean English render.
 *
 * Returns undefined for anything that doesn't end in a recognized Latin
 * qualifier — empty strings or unstructured input — so callers can fall back.
 */
export function autoTranslateLatinSaintToEn(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  let out = raw;
  // Normalize æ/œ before substitution so "Papæ" matches "Papae".
  out = out.replace(/æ/g, 'ae').replace(/œ/g, 'oe');

  // Strip the "secundo"/"tertio" suffix divinum-officium uses on alternate
  // commemoration variants ("S. Agnetis Virginis Martyris secundo") so the
  // qualifier match below can latch onto the preceding job title.
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');

  // Only translate if the string ends in a recognizable genitive job title;
  // otherwise we'd be guessing at unstructured Latin and likely produce noise.
  if (!QUALIFIER_RE.test(out)) return undefined;

  // Multi-word qualifier endings come first so single-word ones do not eat the
  // longer match. Anchored to end-of-string only — qualifiers in the middle of
  // a title (rare) keep their Latin form.
  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  // Connector "et" between names ("Petri et Pauli") → "and".
  out = out.replace(/\bet\b/g, 'and');

  // Honorifics
  out = out
    .replace(/\bSs\.\s+/g, 'Sts. ')
    .replace(/\bS\.\s+/g, 'St. ')
    .replace(/\bB\.\s+/g, 'Bl. ')
    .replace(/\bBB\.\s+/g, 'Bl. '); // plural Beati

  return out;
}

/**
 * Explicit translations for sancti file keys whose English names do not
 * exist in divinum-officium (typically newer feasts or ones the English
 * horas collection skips). Keys with the `r` suffix are 1960-rubrics
 * variants of the same feast and share the same name.
 */
const SANCTI_EN: Record<string, string> = {
  '01-07': '2nd Day in the Octave of the Epiphany',
  '01-08': '3rd Day in the Octave of the Epiphany',
  '01-09': '4th Day in the Octave of the Epiphany',
  '01-10': '5th Day in the Octave of the Epiphany',
  '01-11': '6th Day in the Octave of the Epiphany',
  '01-12': '7th Day in the Octave of the Epiphany',
  '12-28r': '4th Day in the Octave of Christmas',
  '01-24': 'St. Timothy, Bishop and Martyr',
  '01-28': 'St. Peter Nolasco, Confessor',
  '02-02': 'The Purification of the Blessed Virgin Mary (Candlemas)',
  '02-11': 'Apparition of the Blessed Virgin Mary at Lourdes',
  '04-13': 'St. Hermenegild, Martyr',
  '05-01r': 'St. Joseph the Worker',
  '05-11r': 'Sts. Philip and James, Apostles',
  '05-31': 'The Queenship of Mary',
  '07-01': 'The Most Precious Blood of Our Lord Jesus Christ',
  '07-03r': 'St. Irenaeus, Bishop and Martyr',
  '08-06': 'The Transfiguration of Our Lord Jesus Christ',
  '08-14': 'Vigil of the Assumption of the Blessed Virgin Mary',
  '09-24': 'Our Lady of Ransom',
  '11-18r': 'Dedication of the Basilicas of Sts. Peter and Paul',
  '12-13r': 'St. Lucy, Virgin and Martyr',
};

/**
 * Derive an English name for a sanctoral file key, either from an explicit
 * override or by translating known Latin patterns
 * ("Secunda die infra Octavam Epiphaniae" → "2nd Day in the Octave of the Epiphany").
 */
export function sanctiEnFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_EN[key];
  if (direct) return direct;

  if (!latin) return undefined;

  // "Secunda/.../Septima die infra Octavam Epiphaniae"
  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_EN[epiOct[1].toLowerCase()];
    if (ord) return `${ord} Day in the Octave of the Epiphany`;
  }

  // "Die quarta infra octavam Nativitatis" etc.
  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_EN[natOct[1].toLowerCase()];
    if (ord) return `${ord} Day in the Octave of Christmas`;
  }

  // Generic fallback: best-effort translation of a clean Latin saint title.
  return autoTranslateLatinSaintToEn(latin);
}
