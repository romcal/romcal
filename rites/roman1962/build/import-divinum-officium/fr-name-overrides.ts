/**
 * French name fallbacks for 1962 mass entries. divinum-officium's French
 * horas ships its text translated but keeps most [Officium]/[Rank] title
 * fields in Latin, so virtually every Sancti entry needs synthesis from
 * this override layer.
 *
 * Translations follow the traditional French missals (Dom Lefebvre,
 * Missel Romain Quotidien).
 *
 * Applied during import; never overrides an existing names.fr from horas/
 * that already looks vernacular.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Lundi',
  '2': 'Mardi',
  '3': 'Mercredi',
  '4': 'Jeudi',
  '5': 'Vendredi',
  '6': 'Samedi',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

function ordinal(n: number): string {
  return n === 1 ? '1er' : `${n}e`;
}

function ordinalFem(n: number): string {
  return n === 1 ? '1re' : `${n}e`;
}

export const TEMPORA_FR: Record<string, string> = {
  'Adv1-0': '1er Dimanche de l’Avent',
  'Adv2-0': '2e Dimanche de l’Avent',
  'Adv3-0': '3e Dimanche de l’Avent (Gaudete)',
  'Adv4-0': '4e Dimanche de l’Avent',
  'Quadp1-0': 'Dimanche de la Septuagésime',
  'Quadp2-0': 'Dimanche de la Sexagésime',
  'Quadp3-0': 'Dimanche de la Quinquagésime',
  'Quadp3-3': 'Mercredi des Cendres',
  'Quadp3-4': 'Jeudi après les Cendres',
  'Quadp3-5': 'Vendredi après les Cendres',
  'Quadp3-6': 'Samedi après les Cendres',
  'Quad1-0': '1er Dimanche de Carême',
  'Quad2-0': '2e Dimanche de Carême',
  'Quad3-0': '3e Dimanche de Carême',
  'Quad4-0': '4e Dimanche de Carême (Laetare)',
  'Quad5-0': 'Dimanche de la Passion',
  'Quad6-0': 'Dimanche des Rameaux',
  'Quad6-1': 'Lundi Saint',
  'Quad6-2': 'Mardi Saint',
  'Quad6-3': 'Mercredi Saint',
  'Quad6-4': 'Jeudi Saint',
  'Quad6-5': 'Vendredi Saint',
  'Quad6-6': 'Samedi Saint',
  'Pasc0-0': 'Dimanche de Pâques',
  'Pasc0-1': 'Lundi de Pâques',
  'Pasc0-2': 'Mardi de Pâques',
  'Pasc0-3': 'Mercredi de Pâques',
  'Pasc0-4': 'Jeudi de Pâques',
  'Pasc0-5': 'Vendredi de Pâques',
  'Pasc0-6': 'Samedi de Pâques',
  'Pasc1-0': 'Dimanche de Quasimodo',
  'Pasc2-0': '2e Dimanche après Pâques',
  'Pasc3-0': '3e Dimanche après Pâques',
  'Pasc4-0': '4e Dimanche après Pâques',
  'Pasc5-0': '5e Dimanche après Pâques',
  'Pasc6-0': 'Dimanche dans l’Octave de l’Ascension',
  'Pasc7-0': 'Dimanche de la Pentecôte',
  'Pent01-0': 'Fête de la Très Sainte Trinité',
  'Pent01-4': 'Fête-Dieu (Corpus Christi)',
};

export function temporaFrFromKey(key: string): string | undefined {
  const explicit = TEMPORA_FR[key];
  if (explicit) return explicit;

  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${ordinal(parseInt(nat[1], 10))} jour dans l’Octave de Noël`;

  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${ordinal(parseInt(pentEpiSun[1], 10))} Dimanche après l’Épiphanie (reporté)`;

  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(pentEpi[1], 10))} semaine après l’Épiphanie (reportée)`;
  }

  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${ordinal(parseInt(pentSun[1], 10))} Dimanche après la Pentecôte`;

  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} de la ${ordinalFem(wk)} semaine après la Pentecôte`;
  }

  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} de Quasimodo`;
  }

  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} après le ${ordinal(parseInt(pascN[1], 10))} Dimanche après Pâques`;
  }

  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(quad[1], 10))} semaine de Carême`;
  }

  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} de la Passion`;
  }

  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'la Septuagésime' : quadp[1] === '2' ? 'la Sexagésime' : 'la Quinquagésime';
    if (wd) return `${wd} de ${label}`;
  }

  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(adv[1], 10))} semaine de l’Avent`;
  }

  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${ordinal(parseInt(epiSun[1], 10))} Dimanche après l’Épiphanie`;

  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(epi[1], 10))} semaine après l’Épiphanie`;
  }

  return undefined;
}

const ORDINAL_FR: Record<string, string> = {
  secunda: '2e',
  tertia: '3e',
  quarta: '4e',
  quinta: '5e',
  sexta: '6e',
  septima: '7e',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Évêque et Confesseur'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Évêque et Martyr'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Évêque, Confesseur et Docteur de l’Église'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Confesseur et Docteur de l’Église'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Vierge et Martyre'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Pape et Confesseur'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Pape et Martyr'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abbé et Confesseur'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abbé et Martyr'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' et ses Compagnons, Martyrs'],
  [/,?\s+Viduae\s+et\s+Martyris$/i, ', Veuve et Martyre'],
  [/,?\s+Viduae$/i, ', Veuve'],
  [/,?\s+Evangelistae$/i, ', Évangéliste'],
  [/,?\s+Archangeli$/i, ', Archange'],
  [/,?\s+Episcoporum$/i, ', Évêques'],
  [/,?\s+Episcopi$/i, ', Évêque'],
  [/,?\s+Confessorum$/i, ', Confesseurs'],
  [/,?\s+Confessoris$/i, ', Confesseur'],
  [/,?\s+Martyrum$/i, ', Martyrs'],
  [/,?\s+Martyris$/i, ', Martyr'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Vierges et Martyres'],
  [/,?\s+Virginum$/i, ', Vierges'],
  [/,?\s+Virginis$/i, ', Vierge'],
  [/,?\s+Apostolorum$/i, ', Apôtres'],
  [/,?\s+Apostoli$/i, ', Apôtre'],
  [/,?\s+Papae$/i, ', Pape'],
  [/,?\s+Reginae$/i, ', Reine'],
  [/,?\s+Abbatis$/i, ', Abbé'],
  [/,?\s+Abbatum$/i, ', Abbés'],
  [/,?\s+Diaconi$/i, ', Diacre'],
  [/,?\s+Diaconorum$/i, ', Diacres'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Docteur de l’Église'],
  [/,?\s+Presbyteri$/i, ', Prêtre'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' et ses Compagnons, Martyrs'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum|Viduae|Evangelistae|Archangeli)$/i;

export function autoTranslateLatinSaintToFr(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  let out = raw.replace(/æ/g, 'ae').replace(/œ/g, 'oe');
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');
  if (!QUALIFIER_RE.test(out)) return undefined;

  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = out.replace(/\bet\b/g, 'et');

  out = out
    .replace(/\bSs\.\s+/g, 'Sts ')
    .replace(/\bS\.\s+/g, 'St ')
    .replace(/\bB\.\s+/g, 'Bx ')
    .replace(/\bBB\.\s+/g, 'Bx ');

  return out;
}

export const SANCTI_FR: Record<string, string> = {
  '01-01': 'La Circoncision du Seigneur',
  '01-05': 'Vigile de l’Épiphanie',
  '01-06': 'Épiphanie du Seigneur',
  '01-13': 'Octave de l’Épiphanie',
  '03-25': 'Annonciation de la Bienheureuse Vierge Marie',
  '06-29': 'Sts Pierre et Paul, Apôtres',
  '07-02': 'Visitation de la Bienheureuse Vierge Marie',
  '07-16': 'Notre-Dame du Mont Carmel',
  '08-15': 'Assomption de la Bienheureuse Vierge Marie',
  '08-22': 'Cœur Immaculé de la Bienheureuse Vierge Marie',
  '09-08': 'Nativité de la Bienheureuse Vierge Marie',
  '09-14': 'Exaltation de la Sainte Croix',
  '09-15': 'Sept Douleurs de la Bienheureuse Vierge Marie',
  '10-02': 'Sts Anges Gardiens',
  '10-07': 'Notre-Dame du Rosaire',
  '10-11': 'Maternité Divine de la Bienheureuse Vierge Marie',
  '11-01': 'Tous les Saints',
  '11-02': 'Commémoration des Fidèles Défunts',
  '11-21': 'Présentation de la Bienheureuse Vierge Marie',
  '12-25': 'Nativité de Notre Seigneur Jésus Christ',
  '12-28': 'Sts Innocents, Martyrs',
  '01-07': '2e jour dans l’Octave de l’Épiphanie',
  '01-08': '3e jour dans l’Octave de l’Épiphanie',
  '01-09': '4e jour dans l’Octave de l’Épiphanie',
  '01-10': '5e jour dans l’Octave de l’Épiphanie',
  '01-11': '6e jour dans l’Octave de l’Épiphanie',
  '01-12': '7e jour dans l’Octave de l’Épiphanie',
  '12-28r': '4e jour dans l’Octave de Noël',
  '01-24': 'St Timothée, Évêque et Martyr',
  '01-28': 'St Pierre Nolasque, Confesseur',
  '02-02': 'Purification de la Bienheureuse Vierge Marie (Chandeleur)',
  '02-11': 'Apparition de la Bienheureuse Vierge Marie à Lourdes',
  '04-13': 'St Herménégilde, Martyr',
  '05-01r': 'St Joseph Artisan',
  '05-11r': 'Sts Philippe et Jacques, Apôtres',
  '05-31': 'Royauté de la Bienheureuse Vierge Marie',
  '07-01': 'Très Précieux Sang de Notre Seigneur Jésus Christ',
  '07-03r': 'St Irénée, Évêque et Martyr',
  '08-06': 'Transfiguration de Notre Seigneur Jésus Christ',
  '08-14': 'Vigile de l’Assomption de la Bienheureuse Vierge Marie',
  '09-24': 'Notre-Dame de la Merci',
  '11-18r': 'Dédicace des Basiliques des Sts Apôtres Pierre et Paul',
  '12-13r': 'Ste Lucie, Vierge et Martyre',
};

export function sanctiFrFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_FR[key];
  if (direct) return direct;
  if (!latin) return undefined;

  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_FR[epiOct[1].toLowerCase()];
    if (ord) return `${ord} jour dans l’Octave de l’Épiphanie`;
  }

  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_FR[natOct[1].toLowerCase()];
    if (ord) return `${ord} jour dans l’Octave de Noël`;
  }

  return autoTranslateLatinSaintToFr(latin);
}
