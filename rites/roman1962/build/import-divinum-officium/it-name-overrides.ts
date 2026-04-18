/**
 * Italian name fallbacks for 1962 mass entries. divinum-officium's Italian
 * horas keeps almost all [Officium]/[Rank] title fields in Latin, so this
 * override layer supplies virtually every Sancti and Tempora name.
 *
 * Translations follow the traditional Italian missals (Missale Romano
 * latino-italiano, Messale Festivo di Gaspari).
 *
 * Applied during import; never overrides an existing names.it from horas/
 * that already looks vernacular.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Lunedì',
  '2': 'Martedì',
  '3': 'Mercoledì',
  '4': 'Giovedì',
  '5': 'Venerdì',
  '6': 'Sabato',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

function ordinal(n: number): string {
  return `${n}ª`;
}

export const TEMPORA_IT: Record<string, string> = {
  'Adv1-0': '1ª Domenica di Avvento',
  'Adv2-0': '2ª Domenica di Avvento',
  'Adv3-0': '3ª Domenica di Avvento (Gaudete)',
  'Adv4-0': '4ª Domenica di Avvento',
  'Quadp1-0': 'Domenica di Settuagesima',
  'Quadp2-0': 'Domenica di Sessagesima',
  'Quadp3-0': 'Domenica di Quinquagesima',
  'Quadp3-3': 'Mercoledì delle Ceneri',
  'Quadp3-4': 'Giovedì dopo le Ceneri',
  'Quadp3-5': 'Venerdì dopo le Ceneri',
  'Quadp3-6': 'Sabato dopo le Ceneri',
  'Quad1-0': '1ª Domenica di Quaresima',
  'Quad2-0': '2ª Domenica di Quaresima',
  'Quad3-0': '3ª Domenica di Quaresima',
  'Quad4-0': '4ª Domenica di Quaresima (Laetare)',
  'Quad5-0': 'Domenica di Passione',
  'Quad6-0': 'Domenica delle Palme',
  'Quad6-1': 'Lunedì Santo',
  'Quad6-2': 'Martedì Santo',
  'Quad6-3': 'Mercoledì Santo',
  'Quad6-4': 'Giovedì Santo',
  'Quad6-5': 'Venerdì Santo',
  'Quad6-6': 'Sabato Santo',
  'Pasc0-0': 'Domenica di Pasqua',
  'Pasc0-1': 'Lunedì dell’Angelo',
  'Pasc0-2': 'Martedì di Pasqua',
  'Pasc0-3': 'Mercoledì di Pasqua',
  'Pasc0-4': 'Giovedì di Pasqua',
  'Pasc0-5': 'Venerdì di Pasqua',
  'Pasc0-6': 'Sabato di Pasqua (in albis)',
  'Pasc1-0': 'Domenica in Albis',
  'Pasc2-0': '2ª Domenica dopo Pasqua',
  'Pasc3-0': '3ª Domenica dopo Pasqua',
  'Pasc4-0': '4ª Domenica dopo Pasqua',
  'Pasc5-0': '5ª Domenica dopo Pasqua',
  'Pasc6-0': 'Domenica nell’Ottava dell’Ascensione',
  'Pasc7-0': 'Domenica di Pentecoste',
  'Pent01-0': 'Festa della Santissima Trinità',
  'Pent01-4': 'Corpus Domini',
};

export function temporaItFromKey(key: string): string | undefined {
  const explicit = TEMPORA_IT[key];
  if (explicit) return explicit;

  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${ordinal(parseInt(nat[1], 10))} giorno dell’Ottava di Natale`;

  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${ordinal(parseInt(pentEpiSun[1], 10))} Domenica dopo l’Epifania (ripresa)`;

  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} della ${ordinal(parseInt(pentEpi[1], 10))} settimana dopo l’Epifania (ripresa)`;
  }

  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${ordinal(parseInt(pentSun[1], 10))} Domenica dopo Pentecoste`;

  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} della ${ordinal(wk)} settimana dopo Pentecoste`;
  }

  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} nell’Ottava di Pasqua`;
  }

  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} dopo la ${ordinal(parseInt(pascN[1], 10))} Domenica dopo Pasqua`;
  }

  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} della ${ordinal(parseInt(quad[1], 10))} settimana di Quaresima`;
  }

  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} della settimana di Passione`;
  }

  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Settuagesima' : quadp[1] === '2' ? 'Sessagesima' : 'Quinquagesima';
    if (wd) return `${wd} dopo la Domenica di ${label}`;
  }

  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} della ${ordinal(parseInt(adv[1], 10))} settimana di Avvento`;
  }

  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${ordinal(parseInt(epiSun[1], 10))} Domenica dopo l’Epifania`;

  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} della ${ordinal(parseInt(epi[1], 10))} settimana dopo l’Epifania`;
  }

  return undefined;
}

const ORDINAL_IT: Record<string, string> = {
  secunda: '2º',
  tertia: '3º',
  quarta: '4º',
  quinta: '5º',
  sexta: '6º',
  septima: '7º',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Vescovo e Confessore'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Vescovo e Martire'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Vescovo, Confessore e Dottore della Chiesa'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Confessore e Dottore della Chiesa'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Vergine e Martire'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Papa e Confessore'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Papa e Martire'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abate e Confessore'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abate e Martire'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' e Compagni, Martiri'],
  [/,?\s+Viduae\s+et\s+Martyris$/i, ', Vedova e Martire'],
  [/,?\s+Viduae$/i, ', Vedova'],
  [/,?\s+Evangelistae$/i, ', Evangelista'],
  [/,?\s+Archangeli$/i, ', Arcangelo'],
  [/,?\s+Episcoporum$/i, ', Vescovi'],
  [/,?\s+Episcopi$/i, ', Vescovo'],
  [/,?\s+Confessorum$/i, ', Confessori'],
  [/,?\s+Confessoris$/i, ', Confessore'],
  [/,?\s+Martyrum$/i, ', Martiri'],
  [/,?\s+Martyris$/i, ', Martire'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Vergini e Martiri'],
  [/,?\s+Virginum$/i, ', Vergini'],
  [/,?\s+Virginis$/i, ', Vergine'],
  [/,?\s+Apostolorum$/i, ', Apostoli'],
  [/,?\s+Apostoli$/i, ', Apostolo'],
  [/,?\s+Papae$/i, ', Papa'],
  [/,?\s+Reginae$/i, ', Regina'],
  [/,?\s+Abbatis$/i, ', Abate'],
  [/,?\s+Abbatum$/i, ', Abati'],
  [/,?\s+Diaconi$/i, ', Diacono'],
  [/,?\s+Diaconorum$/i, ', Diaconi'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Dottore della Chiesa'],
  [/,?\s+Presbyteri$/i, ', Sacerdote'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' e Compagni, Martiri'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum|Viduae|Evangelistae|Archangeli)$/i;

export function autoTranslateLatinSaintToIt(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  let out = raw.replace(/æ/g, 'ae').replace(/œ/g, 'oe');
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');
  if (!QUALIFIER_RE.test(out)) return undefined;

  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = out.replace(/\bet\b/g, 'e');

  out = out
    .replace(/\bSs\.\s+/g, 'SS. ')
    .replace(/\bS\.\s+/g, 'S. ')
    .replace(/\bB\.\s+/g, 'B. ')
    .replace(/\bBB\.\s+/g, 'BB. ');

  return out;
}

export const SANCTI_IT: Record<string, string> = {
  '01-01': 'Circoncisione del Signore',
  '01-05': 'Vigilia dell’Epifania',
  '01-06': 'Epifania del Signore',
  '01-13': 'Ottava dell’Epifania',
  '03-25': 'Annunciazione della Beata Vergine Maria',
  '06-29': 'SS. Pietro e Paolo, Apostoli',
  '07-02': 'Visitazione della Beata Vergine Maria',
  '07-16': 'Beata Vergine Maria del Monte Carmelo',
  '08-15': 'Assunzione della Beata Vergine Maria',
  '08-22': 'Cuore Immacolato della Beata Vergine Maria',
  '09-08': 'Natività della Beata Vergine Maria',
  '09-14': 'Esaltazione della Santa Croce',
  '09-15': 'Sette Dolori della Beata Vergine Maria',
  '10-02': 'Ss. Angeli Custodi',
  '10-07': 'Beata Vergine Maria del Rosario',
  '10-11': 'Divina Maternità della Beata Vergine Maria',
  '11-01': 'Tutti i Santi',
  '11-02': 'Commemorazione di tutti i Fedeli Defunti',
  '11-21': 'Presentazione della Beata Vergine Maria',
  '12-25': 'Natività di Nostro Signore Gesù Cristo',
  '12-28': 'Ss. Innocenti, Martiri',
  '01-07': '2º giorno nell’Ottava dell’Epifania',
  '01-08': '3º giorno nell’Ottava dell’Epifania',
  '01-09': '4º giorno nell’Ottava dell’Epifania',
  '01-10': '5º giorno nell’Ottava dell’Epifania',
  '01-11': '6º giorno nell’Ottava dell’Epifania',
  '01-12': '7º giorno nell’Ottava dell’Epifania',
  '12-28r': '4º giorno nell’Ottava di Natale',
  '01-24': 'S. Timoteo, Vescovo e Martire',
  '01-28': 'S. Pietro Nolasco, Confessore',
  '02-02': 'Purificazione della Beata Vergine Maria (Candelora)',
  '02-11': 'Apparizione della Beata Vergine Maria a Lourdes',
  '04-13': 'S. Ermenegildo, Martire',
  '05-01r': 'S. Giuseppe Artigiano',
  '05-11r': 'SS. Filippo e Giacomo, Apostoli',
  '05-31': 'Beata Vergine Maria Regina',
  '07-01': 'Preziosissimo Sangue di Nostro Signore Gesù Cristo',
  '07-03r': 'S. Ireneo, Vescovo e Martire',
  '08-06': 'Trasfigurazione di Nostro Signore Gesù Cristo',
  '08-14': 'Vigilia dell’Assunzione della Beata Vergine Maria',
  '09-24': 'Beata Vergine Maria della Mercede',
  '11-18r': 'Dedicazione delle Basiliche dei SS. Apostoli Pietro e Paolo',
  '12-13r': 'S. Lucia, Vergine e Martire',
};

export function sanctiItFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_IT[key];
  if (direct) return direct;
  if (!latin) return undefined;

  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_IT[epiOct[1].toLowerCase()];
    if (ord) return `${ord} giorno nell’Ottava dell’Epifania`;
  }

  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_IT[natOct[1].toLowerCase()];
    if (ord) return `${ord} giorno nell’Ottava di Natale`;
  }

  return autoTranslateLatinSaintToIt(latin);
}
