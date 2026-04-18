/**
 * Dutch name fallbacks for 1962 mass entries. divinum-officium's Dutch
 * horas ships full text vernacular but keeps most [Officium]/[Rank] title
 * fields in Latin, so this override layer supplies synthesized Dutch
 * names. Translations follow traditional Dutch missals (Volksmissaal).
 *
 * Applied during import; never overrides an existing names.nl from horas/
 * that already looks vernacular.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Maandag',
  '2': 'Dinsdag',
  '3': 'Woensdag',
  '4': 'Donderdag',
  '5': 'Vrijdag',
  '6': 'Zaterdag',
};

function weekdayFromFeriaIndex(n: string): string | undefined {
  return WEEKDAY[n];
}

export const TEMPORA_NL: Record<string, string> = {
  'Adv1-0': '1e Zondag van de Advent',
  'Adv2-0': '2e Zondag van de Advent',
  'Adv3-0': '3e Zondag van de Advent (Gaudete)',
  'Adv4-0': '4e Zondag van de Advent',
  'Quadp1-0': 'Zondag Septuagesima',
  'Quadp2-0': 'Zondag Sexagesima',
  'Quadp3-0': 'Zondag Quinquagesima',
  'Quadp3-3': 'Aswoensdag',
  'Quadp3-4': 'Donderdag na Aswoensdag',
  'Quadp3-5': 'Vrijdag na Aswoensdag',
  'Quadp3-6': 'Zaterdag na Aswoensdag',
  'Quad1-0': '1e Zondag van de Vasten',
  'Quad2-0': '2e Zondag van de Vasten',
  'Quad3-0': '3e Zondag van de Vasten',
  'Quad4-0': '4e Zondag van de Vasten (Laetare)',
  'Quad5-0': 'Passiezondag',
  'Quad6-0': 'Palmzondag',
  'Quad6-1': 'Maandag in de Goede Week',
  'Quad6-2': 'Dinsdag in de Goede Week',
  'Quad6-3': 'Woensdag in de Goede Week',
  'Quad6-4': 'Witte Donderdag',
  'Quad6-5': 'Goede Vrijdag',
  'Quad6-6': 'Paaszaterdag',
  'Pasc0-0': 'Paaszondag',
  'Pasc0-1': 'Paasmaandag',
  'Pasc0-2': 'Paasdinsdag',
  'Pasc0-3': 'Paaswoensdag',
  'Pasc0-4': 'Paasdonderdag',
  'Pasc0-5': 'Paasvrijdag',
  'Pasc0-6': 'Zaterdag in albis',
  'Pasc1-0': 'Beloken Pasen',
  'Pasc2-0': '2e Zondag na Pasen',
  'Pasc3-0': '3e Zondag na Pasen',
  'Pasc4-0': '4e Zondag na Pasen',
  'Pasc5-0': '5e Zondag na Pasen',
  'Pasc6-0': 'Zondag onder het Octaaf van Hemelvaart',
  'Pasc7-0': 'Pinksterzondag',
  'Pent01-0': 'Feest van de Heilige Drievuldigheid',
  'Pent01-4': 'Sacramentsdag',
};

export function temporaNlFromKey(key: string): string | undefined {
  const explicit = TEMPORA_NL[key];
  if (explicit) return explicit;

  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${nat[1]}e dag onder het Kerstoctaaf`;

  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${pentEpiSun[1]}e Zondag na Driekoningen (hernomen)`;

  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} in de ${pentEpi[1]}e week na Driekoningen (hernomen)`;
  }

  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${parseInt(pentSun[1], 10)}e Zondag na Pinksteren`;

  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} in de ${wk}e week na Pinksteren`;
  }

  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} onder het Paasoctaaf`;
  }

  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} na de ${pascN[1]}e Zondag na Pasen`;
  }

  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} in de ${quad[1]}e Vastenweek`;
  }

  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} in de Passieweek`;
  }

  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Septuagesima' : quadp[1] === '2' ? 'Sexagesima' : 'Quinquagesima';
    if (wd) return `${wd} in de week van ${label}`;
  }

  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} in de ${adv[1]}e week van de Advent`;
  }

  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${parseInt(epiSun[1], 10)}e Zondag na Driekoningen`;

  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} in de ${epi[1]}e week na Driekoningen`;
  }

  return undefined;
}

const ORDINAL_NL: Record<string, string> = {
  secunda: '2e',
  tertia: '3e',
  quarta: '4e',
  quinta: '5e',
  sexta: '6e',
  septima: '7e',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Bisschop en Belijder'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Bisschop en Martelaar'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Bisschop, Belijder en Kerkleraar'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Belijder en Kerkleraar'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Maagd en Martelares'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Paus en Belijder'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Paus en Martelaar'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abt en Belijder'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abt en Martelaar'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' en Gezellen, Martelaren'],
  [/,?\s+Viduae\s+et\s+Martyris$/i, ', Weduwe en Martelares'],
  [/,?\s+Viduae$/i, ', Weduwe'],
  [/,?\s+Evangelistae$/i, ', Evangelist'],
  [/,?\s+Archangeli$/i, ', Aartsengel'],
  [/,?\s+Episcoporum$/i, ', Bisschoppen'],
  [/,?\s+Episcopi$/i, ', Bisschop'],
  [/,?\s+Confessorum$/i, ', Belijders'],
  [/,?\s+Confessoris$/i, ', Belijder'],
  [/,?\s+Martyrum$/i, ', Martelaren'],
  [/,?\s+Martyris$/i, ', Martelaar'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Maagden en Martelaressen'],
  [/,?\s+Virginum$/i, ', Maagden'],
  [/,?\s+Virginis$/i, ', Maagd'],
  [/,?\s+Apostolorum$/i, ', Apostelen'],
  [/,?\s+Apostoli$/i, ', Apostel'],
  [/,?\s+Papae$/i, ', Paus'],
  [/,?\s+Reginae$/i, ', Koningin'],
  [/,?\s+Abbatis$/i, ', Abt'],
  [/,?\s+Abbatum$/i, ', Abten'],
  [/,?\s+Diaconi$/i, ', Diaken'],
  [/,?\s+Diaconorum$/i, ', Diakens'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Kerkleraar'],
  [/,?\s+Presbyteri$/i, ', Priester'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' en Gezellen, Martelaren'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum|Viduae|Evangelistae|Archangeli)$/i;

export function autoTranslateLatinSaintToNl(latin: string | undefined): string | undefined {
  if (!latin) return undefined;
  const raw = latin.trim();
  if (raw.length === 0) return undefined;

  let out = raw.replace(/æ/g, 'ae').replace(/œ/g, 'oe');
  out = out.replace(/\s+(secundo|tertio|quarto)$/i, '');
  if (!QUALIFIER_RE.test(out)) return undefined;

  for (const [pattern, replacement] of QUALIFIER_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = out.replace(/\bet\b/g, 'en');

  out = out
    .replace(/\bSs\.\s+/g, 'HH. ')
    .replace(/\bS\.\s+/g, 'H. ')
    .replace(/\bB\.\s+/g, 'Z. ')
    .replace(/\bBB\.\s+/g, 'Zz. ');

  return out;
}

export const SANCTI_NL: Record<string, string> = {
  '01-01': 'Besnijdenis van de Heer',
  '01-05': 'Vigilie van Driekoningen',
  '01-06': 'Driekoningen (Openbaring van de Heer)',
  '01-13': 'Octaafdag van Driekoningen',
  '03-25': 'Maria-Boodschap (Aankondiging van de Heer)',
  '06-29': 'HH. Petrus en Paulus, Apostelen',
  '07-02': 'Maria-Visitatie',
  '07-16': 'Onze-Lieve-Vrouw van de Berg Karmel',
  '08-15': 'Maria-Tenhemelopneming',
  '08-22': 'Onbevlekt Hart van Maria',
  '09-08': 'Maria-Geboorte',
  '09-14': 'Kruisverheffing',
  '09-15': 'Zeven Smarten van Maria',
  '10-02': 'HH. Engelbewaarders',
  '10-07': 'Onze-Lieve-Vrouw van de Rozenkrans',
  '10-11': 'Goddelijk Moederschap van Maria',
  '11-01': 'Allerheiligen',
  '11-02': 'Allerzielen',
  '11-21': 'Opdracht van Maria',
  '12-25': 'Geboorte van Onze Heer Jezus Christus',
  '12-28': 'HH. Onnozele Kinderen, Martelaren',
  '01-07': '2e dag onder het Octaaf van Driekoningen',
  '01-08': '3e dag onder het Octaaf van Driekoningen',
  '01-09': '4e dag onder het Octaaf van Driekoningen',
  '01-10': '5e dag onder het Octaaf van Driekoningen',
  '01-11': '6e dag onder het Octaaf van Driekoningen',
  '01-12': '7e dag onder het Octaaf van Driekoningen',
  '12-28r': '4e dag onder het Kerstoctaaf',
  '01-24': 'H. Timotheüs, Bisschop en Martelaar',
  '01-28': 'H. Petrus Nolascus, Belijder',
  '02-02': 'Opdracht van de Heer (Maria Lichtmis)',
  '02-11': 'Verschijning van de Heilige Maagd Maria te Lourdes',
  '04-13': 'H. Hermenegildus, Martelaar',
  '05-01r': 'H. Jozef de Arbeider',
  '05-11r': 'HH. Filippus en Jakobus, Apostelen',
  '05-31': 'Maria Koningin',
  '07-01': 'Kostbaar Bloed van Onze Heer Jezus Christus',
  '07-03r': 'H. Ireneüs, Bisschop en Martelaar',
  '08-06': 'Gedaanteverandering van Onze Heer Jezus Christus',
  '08-14': 'Vigilie van Maria-Tenhemelopneming',
  '09-24': 'Onze-Lieve-Vrouw van Barmhartigheid',
  '11-18r': 'Inwijding van de Basilieken van de HH. Apostelen Petrus en Paulus',
  '12-13r': 'H. Lucia, Maagd en Martelares',
};

export function sanctiNlFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_NL[key];
  if (direct) return direct;
  if (!latin) return undefined;

  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_NL[epiOct[1].toLowerCase()];
    if (ord) return `${ord} dag onder het Octaaf van Driekoningen`;
  }

  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_NL[natOct[1].toLowerCase()];
    if (ord) return `${ord} dag onder het Kerstoctaaf`;
  }

  return autoTranslateLatinSaintToNl(latin);
}
