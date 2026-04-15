/**
 * Portuguese name fallbacks for 1962 mass entries. divinum-officium's
 * Portuguese horas ships Sancti titles vernacular-first (mostly), but the
 * Tempora folder is nearly empty, so this override layer mainly supplies
 * weekday/season labels. Sancti auto-translator covers any long-tail
 * entries where horas was Latin.
 *
 * Translations follow European Portuguese traditional missal usage
 * (Missal Romano latino-português).
 *
 * Applied during import; never overrides an existing names.pt from horas/
 * that already looks vernacular.
 */

const WEEKDAY: Record<string, string> = {
  '1': 'Segunda-feira',
  '2': 'Terça-feira',
  '3': 'Quarta-feira',
  '4': 'Quinta-feira',
  '5': 'Sexta-feira',
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

export const TEMPORA_PT: Record<string, string> = {
  'Adv1-0': '1º Domingo do Advento',
  'Adv2-0': '2º Domingo do Advento',
  'Adv3-0': '3º Domingo do Advento (Gaudete)',
  'Adv4-0': '4º Domingo do Advento',
  'Quadp1-0': 'Domingo da Septuagésima',
  'Quadp2-0': 'Domingo da Sexagésima',
  'Quadp3-0': 'Domingo da Quinquagésima',
  'Quadp3-3': 'Quarta-feira de Cinzas',
  'Quadp3-4': 'Quinta-feira depois de Cinzas',
  'Quadp3-5': 'Sexta-feira depois de Cinzas',
  'Quadp3-6': 'Sábado depois de Cinzas',
  'Quad1-0': '1º Domingo da Quaresma',
  'Quad2-0': '2º Domingo da Quaresma',
  'Quad3-0': '3º Domingo da Quaresma',
  'Quad4-0': '4º Domingo da Quaresma (Laetare)',
  'Quad5-0': 'Domingo da Paixão',
  'Quad6-0': 'Domingo de Ramos',
  'Quad6-1': 'Segunda-feira Santa',
  'Quad6-2': 'Terça-feira Santa',
  'Quad6-3': 'Quarta-feira Santa',
  'Quad6-4': 'Quinta-feira Santa',
  'Quad6-5': 'Sexta-feira Santa',
  'Quad6-6': 'Sábado Santo',
  'Pasc0-0': 'Domingo de Páscoa',
  'Pasc0-1': 'Segunda-feira de Páscoa',
  'Pasc0-2': 'Terça-feira de Páscoa',
  'Pasc0-3': 'Quarta-feira de Páscoa',
  'Pasc0-4': 'Quinta-feira de Páscoa',
  'Pasc0-5': 'Sexta-feira de Páscoa',
  'Pasc0-6': 'Sábado in albis',
  'Pasc1-0': 'Domingo in albis',
  'Pasc2-0': '2º Domingo depois da Páscoa',
  'Pasc3-0': '3º Domingo depois da Páscoa',
  'Pasc4-0': '4º Domingo depois da Páscoa',
  'Pasc5-0': '5º Domingo depois da Páscoa',
  'Pasc6-0': 'Domingo dentro da Oitava da Ascensão',
  'Pasc7-0': 'Domingo de Pentecostes',
  'Pent01-0': 'Festa da Santíssima Trindade',
  'Pent01-4': 'Corpo de Deus (Corpus Christi)',
};

export function temporaPtFromKey(key: string): string | undefined {
  const explicit = TEMPORA_PT[key];
  if (explicit) return explicit;

  const nat = /^Nat0([2-6])$/.exec(key);
  if (nat) return `${ordinalMasc(parseInt(nat[1], 10))} dia da Oitava do Natal`;

  const pentEpiSun = /^PentEpi(\d+)-0$/.exec(key);
  if (pentEpiSun) return `${ordinalMasc(parseInt(pentEpiSun[1], 10))} Domingo depois da Epifania (retomado)`;

  const pentEpi = /^PentEpi(\d+)-([1-6])$/.exec(key);
  if (pentEpi) {
    const wd = weekdayFromFeriaIndex(pentEpi[2]);
    if (wd) return `${wd} da ${ordinalFem(parseInt(pentEpi[1], 10))} semana depois da Epifania (retomada)`;
  }

  const pentSun = /^Pent(\d{2})-0$/.exec(key);
  if (pentSun) return `${ordinalMasc(parseInt(pentSun[1], 10))} Domingo depois de Pentecostes`;

  const pent = /^Pent(\d{2})-([1-6])$/.exec(key);
  if (pent) {
    const wd = weekdayFromFeriaIndex(pent[2]);
    const wk = parseInt(pent[1], 10);
    if (wd) return `${wd} da ${ordinalFem(wk)} semana depois de Pentecostes`;
  }

  const pasc = /^Pasc1-([1-6])$/.exec(key);
  if (pasc) {
    const wd = weekdayFromFeriaIndex(pasc[1]);
    if (wd) return `${wd} na Oitava da Páscoa`;
  }

  const pascN = /^Pasc([2-6])-([1-6])$/.exec(key);
  if (pascN) {
    const wd = weekdayFromFeriaIndex(pascN[2]);
    if (wd) return `${wd} depois do ${ordinalMasc(parseInt(pascN[1], 10))} Domingo depois da Páscoa`;
  }

  const quad = /^Quad([1-4])-([1-6])$/.exec(key);
  if (quad) {
    const wd = weekdayFromFeriaIndex(quad[2]);
    if (wd) return `${wd} da ${ordinalFem(parseInt(quad[1], 10))} semana da Quaresma`;
  }

  const quad5 = /^Quad5-([1-6])$/.exec(key);
  if (quad5) {
    const wd = weekdayFromFeriaIndex(quad5[1]);
    if (wd) return `${wd} da semana da Paixão`;
  }

  const quadp = /^Quadp([1-3])-([1-6])$/.exec(key);
  if (quadp) {
    const wd = weekdayFromFeriaIndex(quadp[2]);
    const label = quadp[1] === '1' ? 'Septuagésima' : quadp[1] === '2' ? 'Sexagésima' : 'Quinquagésima';
    if (wd) return `${wd} depois do Domingo da ${label}`;
  }

  const adv = /^Adv([1-4])-([1-6])$/.exec(key);
  if (adv) {
    const wd = weekdayFromFeriaIndex(adv[2]);
    if (wd) return `${wd} da ${ordinalFem(parseInt(adv[1], 10))} semana do Advento`;
  }

  const epiSun = /^Epi(\d+)-0$/.exec(key);
  if (epiSun) return `${ordinalMasc(parseInt(epiSun[1], 10))} Domingo depois da Epifania`;

  const epi = /^Epi(\d+)-([1-6])$/.exec(key);
  if (epi) {
    const wd = weekdayFromFeriaIndex(epi[2]);
    if (wd) return `${wd} da ${ordinalFem(parseInt(epi[1], 10))} semana depois da Epifania`;
  }

  return undefined;
}

const ORDINAL_PT: Record<string, string> = {
  secunda: '2º',
  tertia: '3º',
  quarta: '4º',
  quinta: '5º',
  sexta: '6º',
  septima: '7º',
};

const QUALIFIER_REPLACEMENTS: [RegExp, string][] = [
  [/,?\s+Episcopi\s+et\s+Confessoris$/i, ', Bispo e Confessor'],
  [/,?\s+Episcopi\s+et\s+Martyris$/i, ', Bispo e Mártir'],
  [/,?\s+Episcopi\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Bispo, Confessor e Doutor da Igreja'],
  [/,?\s+Confessoris\s+et\s+Doctoris(\s+Ecclesiae)?$/i, ', Confessor e Doutor da Igreja'],
  [/,?\s+Virginis\s+et\s+Martyris$/i, ', Virgem e Mártir'],
  [/,?\s+Papae\s+et\s+Confessoris$/i, ', Papa e Confessor'],
  [/,?\s+Papae\s+et\s+Martyris$/i, ', Papa e Mártir'],
  [/,?\s+Abbatis\s+et\s+Confessoris$/i, ', Abade e Confessor'],
  [/,?\s+Abbatis\s+et\s+Martyris$/i, ', Abade e Mártir'],
  [/,?\s+et\s+Sociorum\s+Martyrum$/i, ' e Companheiros, Mártires'],
  [/,?\s+Viduae\s+et\s+Martyris$/i, ', Viúva e Mártir'],
  [/,?\s+Viduae$/i, ', Viúva'],
  [/,?\s+Evangelistae$/i, ', Evangelista'],
  [/,?\s+Archangeli$/i, ', Arcanjo'],
  [/,?\s+Episcoporum$/i, ', Bispos'],
  [/,?\s+Episcopi$/i, ', Bispo'],
  [/,?\s+Confessorum$/i, ', Confessores'],
  [/,?\s+Confessoris$/i, ', Confessor'],
  [/,?\s+Martyrum$/i, ', Mártires'],
  [/,?\s+Martyris$/i, ', Mártir'],
  [/,?\s+Virginum\s+et\s+Martyrum$/i, ', Virgens e Mártires'],
  [/,?\s+Virginum$/i, ', Virgens'],
  [/,?\s+Virginis$/i, ', Virgem'],
  [/,?\s+Apostolorum$/i, ', Apóstolos'],
  [/,?\s+Apostoli$/i, ', Apóstolo'],
  [/,?\s+Papae$/i, ', Papa'],
  [/,?\s+Reginae$/i, ', Rainha'],
  [/,?\s+Abbatis$/i, ', Abade'],
  [/,?\s+Abbatum$/i, ', Abades'],
  [/,?\s+Diaconi$/i, ', Diácono'],
  [/,?\s+Diaconorum$/i, ', Diáconos'],
  [/,?\s+Doctoris(\s+Ecclesiae)?$/i, ', Doutor da Igreja'],
  [/,?\s+Presbyteri$/i, ', Presbítero'],
  [/,?\s+Sociorumque\s+Martyrum$/i, ' e Companheiros, Mártires'],
];

const QUALIFIER_RE =
  /\b(?:Episcoporum|Episcopi|Confessorum|Confessoris|Martyrum|Martyris|Virginum|Virginis|Apostolorum|Apostoli|Papae|Reginae|Abbatum|Abbatis|Diaconorum|Diaconi|Doctoris|Presbyteri|Sociorum|Viduae|Evangelistae|Archangeli)$/i;

export function autoTranslateLatinSaintToPt(latin: string | undefined): string | undefined {
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
    .replace(/\bSs\.\s+/g, 'Ss. ')
    .replace(/\bS\.\s+/g, 'S. ')
    .replace(/\bB\.\s+/g, 'B. ')
    .replace(/\bBB\.\s+/g, 'BB. ');

  return out;
}

export const SANCTI_PT: Record<string, string> = {
  '01-01': 'Circuncisão do Senhor',
  '01-05': 'Vigília da Epifania',
  '01-06': 'Epifania do Senhor',
  '01-13': 'Oitava da Epifania',
  '03-25': 'Anunciação da Bem-aventurada Virgem Maria',
  '06-29': 'Ss. Pedro e Paulo, Apóstolos',
  '07-02': 'Visitação da Bem-aventurada Virgem Maria',
  '07-16': 'Nossa Senhora do Monte Carmelo',
  '08-15': 'Assunção da Bem-aventurada Virgem Maria',
  '08-22': 'Imaculado Coração da Bem-aventurada Virgem Maria',
  '09-08': 'Natividade da Bem-aventurada Virgem Maria',
  '09-14': 'Exaltação da Santa Cruz',
  '09-15': 'Sete Dores da Bem-aventurada Virgem Maria',
  '10-02': 'Ss. Anjos da Guarda',
  '10-07': 'Nossa Senhora do Rosário',
  '10-11': 'Divina Maternidade da Bem-aventurada Virgem Maria',
  '11-01': 'Todos os Santos',
  '11-02': 'Comemoração dos Fiéis Defuntos',
  '11-21': 'Apresentação da Bem-aventurada Virgem Maria',
  '12-25': 'Natividade de Nosso Senhor Jesus Cristo',
  '12-28': 'Ss. Inocentes, Mártires',
  '01-07': '2º dia da Oitava da Epifania',
  '01-08': '3º dia da Oitava da Epifania',
  '01-09': '4º dia da Oitava da Epifania',
  '01-10': '5º dia da Oitava da Epifania',
  '01-11': '6º dia da Oitava da Epifania',
  '01-12': '7º dia da Oitava da Epifania',
  '12-28r': '4º dia da Oitava do Natal',
  '01-24': 'S. Timóteo, Bispo e Mártir',
  '01-28': 'S. Pedro Nolasco, Confessor',
  '02-02': 'Purificação da Bem-aventurada Virgem Maria (Apresentação do Senhor)',
  '02-11': 'Aparição da Bem-aventurada Virgem Maria em Lourdes',
  '04-13': 'S. Hermenegildo, Mártir',
  '05-01r': 'S. José Operário',
  '05-11r': 'Ss. Filipe e Tiago, Apóstolos',
  '05-31': 'Realeza da Bem-aventurada Virgem Maria',
  '07-01': 'Preciosíssimo Sangue de Nosso Senhor Jesus Cristo',
  '07-03r': 'S. Ireneu, Bispo e Mártir',
  '08-06': 'Transfiguração de Nosso Senhor Jesus Cristo',
  '08-14': 'Vigília da Assunção da Bem-aventurada Virgem Maria',
  '09-24': 'Nossa Senhora das Mercês',
  '11-18r': 'Dedicação das Basílicas dos Ss. Apóstolos Pedro e Paulo',
  '12-13r': 'Sta. Luzia, Virgem e Mártir',
};

export function sanctiPtFromKeyOrLatin(key: string, latin: string | undefined): string | undefined {
  const direct = SANCTI_PT[key];
  if (direct) return direct;
  if (!latin) return undefined;

  const epiOct = /^(Secunda|Tertia|Quarta|Quinta|Sexta|Septima)\s+die\s+infra\s+Octavam\s+Epiphaniae/i.exec(latin);
  if (epiOct) {
    const ord = ORDINAL_PT[epiOct[1].toLowerCase()];
    if (ord) return `${ord} dia da Oitava da Epifania`;
  }

  const natOct = /^Die\s+(secunda|tertia|quarta|quinta|sexta|septima)\s+infra\s+octavam\s+Nativitatis/i.exec(latin);
  if (natOct) {
    const ord = ORDINAL_PT[natOct[1].toLowerCase()];
    if (ord) return `${ord} dia da Oitava do Natal`;
  }

  return autoTranslateLatinSaintToPt(latin);
}
