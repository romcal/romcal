/**
 * Spanish name fallbacks for 1962 mass entries. divinum-officium's Spanish
 * horas keeps most title fields in Latin, so this override layer supplies
 * synthesized Spanish names. Translations follow traditional Spanish
 * missals (Misal Romano Latino-Español).
 *
 * Applied during import; never overrides an existing names.es from horas/
 * that already looks vernacular.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Lunes',
  '2': 'Martes',
  '3': 'Miércoles',
  '4': 'Jueves',
  '5': 'Viernes',
  '6': 'Sábado',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

function ordinalFem(n: number): string {
  return `${n}ª`;
}

function ordinalMasc(n: number): string {
  return `${n}º`;
}

export const TEMPORA_ES: Record<string, string> = {
  'Adv1-0': '1er Domingo de Adviento',
  'Adv2-0': '2º Domingo de Adviento',
  'Adv3-0': '3er Domingo de Adviento (Gaudete)',
  'Adv4-0': '4º Domingo de Adviento',
  'Quadp1-0': 'Domingo de Septuagésima',
  'Quadp2-0': 'Domingo de Sexagésima',
  'Quadp3-0': 'Domingo de Quincuagésima',
  'Quadp3-3': 'Miércoles de Ceniza',
  'Quadp3-4': 'Jueves después de Ceniza',
  'Quadp3-5': 'Viernes después de Ceniza',
  'Quadp3-6': 'Sábado después de Ceniza',
  'Quad1-0': '1er Domingo de Cuaresma',
  'Quad2-0': '2º Domingo de Cuaresma',
  'Quad3-0': '3er Domingo de Cuaresma',
  'Quad4-0': '4º Domingo de Cuaresma (Laetare)',
  'Quad5-0': 'Domingo de Pasión',
  'Quad6-0': 'Domingo de Ramos',
  'Quad6-1': 'Lunes Santo',
  'Quad6-2': 'Martes Santo',
  'Quad6-3': 'Miércoles Santo',
  'Quad6-4': 'Jueves Santo',
  'Quad6-5': 'Viernes Santo',
  'Quad6-6': 'Sábado Santo',
  'Pasc0-0': 'Domingo de Pascua',
  'Pasc0-1': 'Lunes de Pascua',
  'Pasc0-2': 'Martes de Pascua',
  'Pasc0-3': 'Miércoles de Pascua',
  'Pasc0-4': 'Jueves de Pascua',
  'Pasc0-5': 'Viernes de Pascua',
  'Pasc0-6': 'Sábado de Pascua (in albis)',
  'Pasc1-0': 'Domingo in albis (Dominica in albis)',
  'Pasc2-0': '2º Domingo después de Pascua',
  'Pasc3-0': '3er Domingo después de Pascua',
  'Pasc4-0': '4º Domingo después de Pascua',
  'Pasc5-0': '5º Domingo después de Pascua',
  'Pasc6-0': 'Domingo dentro de la Octava de la Ascensión',
  'Pasc7-0': 'Domingo de Pentecostés',
  'Pent01-0': 'Fiesta de la Santísima Trinidad',
  'Pent01-4': 'Corpus Christi',
};

export function temporaEsFromKey(key: string): string | undefined {
  const explicit = TEMPORA_ES[key];
  if (explicit) return explicit;

  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${ordinalMasc(parseInt(nat[1], 10))} día de la Octava de Navidad`;

  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${ordinalMasc(parseInt(pentEpiSun[1], 10))} Domingo después de Epifanía (reanudado)`;

  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(pentEpi[1], 10))} semana después de Epifanía (reanudada)`;
  }

  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${ordinalMasc(parseInt(pentSun[1], 10))} Domingo después de Pentecostés`;

  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} de la ${ordinalFem(wk)} semana después de Pentecostés`;
  }

  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} en la Octava de Pascua`;
  }

  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} después del ${ordinalMasc(parseInt(pascN[1], 10))} Domingo después de Pascua`;
  }

  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(quad[1], 10))} semana de Cuaresma`;
  }

  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} de la semana de Pasión`;
  }

  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Septuagésima' : quadp[1] === '2' ? 'Sexagésima' : 'Quincuagésima';
    if (wd) return `${wd} después del Domingo de ${label}`;
  }

  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(adv[1], 10))} semana de Adviento`;
  }

  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${ordinalMasc(parseInt(epiSun[1], 10))} Domingo después de Epifanía`;

  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} de la ${ordinalFem(parseInt(epi[1], 10))} semana después de Epifanía`;
  }

  return undefined;
}

const ORDINAL_ES: Record<string, string> = {
  secunda: '2º',
  tertia: '3er',
  quarta: '4º',
  quinta: '5º',
  sexta: '6º',
  septima: '7º',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Obispo y Confesor'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Obispo y Mártir'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Obispo, Confesor y Doctor de la Iglesia'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Confesor y Doctor de la Iglesia'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Virgen y Mártir'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Papa y Confesor'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Papa y Mártir'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abad y Confesor'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abad y Mártir'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' y Compañeros, Mártires'],
  [/,?\s+Viduae\s+et\s+Martyris$/i, ', Viuda y Mártir'],
  [/,?\s+Viduae$/i, ', Viuda'],
  [/,?\s+Evangelistae$/i, ', Evangelista'],
  [/,?\s+Archangeli$/i, ', Arcángel'],
  [/,?\s+Episcoporum$/i, ', Obispos'],
  [/,?\s+Episcopi$/i, ', Obispo'],
  [/,?\s+Confessorum$/i, ', Confesores'],
  [/,?\s+Confessoris$/i, ', Confesor'],
  [/,?\s+Martyrum$/i, ', Mártires'],
  [/,?\s+Martyris$/i, ', Mártir'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Vírgenes y Mártires'],
  [/,?\s+Virginum$/i, ', Vírgenes'],
  [/,?\s+Virginis$/i, ', Virgen'],
  [/,?\s+Apostolorum$/i, ', Apóstoles'],
  [/,?\s+Apostoli$/i, ', Apóstol'],
  [/,?\s+Papae$/i, ', Papa'],
  [/,?\s+Reginae$/i, ', Reina'],
  [/,?\s+Abbatis$/i, ', Abad'],
  [/,?\s+Abbatum$/i, ', Abades'],
  [/,?\s+Diaconi$/i, ', Diácono'],
  [/,?\s+Diaconorum$/i, ', Diáconos'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Doctor de la Iglesia'],
  [/,?\s+Presbyteri$/i, ', Presbítero'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' y Compañeros, Mártires'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum|Viduae|Evangelistae|Archangeli)$/i;

export function autoTranslateLatinSaintToEs(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  let out = raw.replace(/æ/g, 'ae').replace(/œ/g, 'oe');
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');
  if (!QUALIFIER_RE.test(out)) return undefined;

  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = out.replace(/\bet\b/g, 'y');

  out = out
    .replace(/\bSs\.\s+/g, 'Sts. ')
    .replace(/\bS\.\s+/g, 'S. ')
    .replace(/\bB\.\s+/g, 'Bto. ')
    .replace(/\bBB\.\s+/g, 'Btos. ');

  return out;
}

export const SANCTI_ES: Record<string, string> = {
  '01-01': 'La Circuncisión del Señor',
  '01-05': 'Vigilia de la Epifanía',
  '01-06': 'Epifanía del Señor',
  '01-13': 'Octava de la Epifanía',
  '03-25': 'Anunciación de la Bienaventurada Virgen María',
  '06-29': 'Sts. Pedro y Pablo, Apóstoles',
  '07-02': 'Visitación de la Bienaventurada Virgen María',
  '07-16': 'Nuestra Señora del Carmen',
  '08-15': 'Asunción de la Bienaventurada Virgen María',
  '08-22': 'Inmaculado Corazón de la Bienaventurada Virgen María',
  '09-08': 'Natividad de la Bienaventurada Virgen María',
  '09-14': 'Exaltación de la Santa Cruz',
  '09-15': 'Siete Dolores de la Bienaventurada Virgen María',
  '10-02': 'Stos. Ángeles Custodios',
  '10-07': 'Nuestra Señora del Rosario',
  '10-11': 'Divina Maternidad de la Bienaventurada Virgen María',
  '11-01': 'Todos los Santos',
  '11-02': 'Conmemoración de los Fieles Difuntos',
  '11-21': 'Presentación de la Bienaventurada Virgen María',
  '12-25': 'Natividad de Nuestro Señor Jesucristo',
  '12-28': 'Stos. Inocentes, Mártires',
  '01-07': '2º día de la Octava de la Epifanía',
  '01-08': '3er día de la Octava de la Epifanía',
  '01-09': '4º día de la Octava de la Epifanía',
  '01-10': '5º día de la Octava de la Epifanía',
  '01-11': '6º día de la Octava de la Epifanía',
  '01-12': '7º día de la Octava de la Epifanía',
  '12-28r': '4º día de la Octava de Navidad',
  '01-24': 'S. Timoteo, Obispo y Mártir',
  '01-28': 'S. Pedro Nolasco, Confesor',
  '02-02': 'Purificación de la Bienaventurada Virgen María (La Candelaria)',
  '02-11': 'Aparición de la Bienaventurada Virgen María en Lourdes',
  '04-13': 'S. Hermenegildo, Mártir',
  '05-01r': 'S. José Obrero',
  '05-11r': 'Sts. Felipe y Santiago, Apóstoles',
  '05-31': 'Realeza de la Bienaventurada Virgen María',
  '07-01': 'Preciosísima Sangre de Nuestro Señor Jesucristo',
  '07-03r': 'S. Ireneo, Obispo y Mártir',
  '08-06': 'Transfiguración de Nuestro Señor Jesucristo',
  '08-14': 'Vigilia de la Asunción de la Bienaventurada Virgen María',
  '09-24': 'Ntra. Sra. de la Merced',
  '11-18r': 'Dedicación de las Basílicas de los Stos. Apóstoles Pedro y Pablo',
  '12-13r': 'Sta. Lucía, Virgen y Mártir',
};

export function sanctiEsFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_ES[key];
  if (direct) return direct;
  if (!latin) return undefined;

  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_ES[epiOct[1].toLowerCase()];
    if (ord) return `${ord} día de la Octava de la Epifanía`;
  }

  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_ES[natOct[1].toLowerCase()];
    if (ord) return `${ord} día de la Octava de Navidad`;
  }

  return autoTranslateLatinSaintToEs(latin);
}
