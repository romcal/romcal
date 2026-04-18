export type ColorValue = 'Red' | 'Rose' | 'Purple' | 'Green' | 'White' | 'Gold' | 'Black';

interface ColorContext {
  source: 'tempora' | 'sancti' | 'commune';
  fileKey: string;
  officium?: string;
}

const RE_RED = /(Martyr|Martyrum|Martyrium|Sanguinis|Apostol|Evangelist|Passion|Exalt.*Crucis|Inv.*Crucis)/i;
const RE_WHITE =
  /(Nativ|Epiphan|Jesu|Mariae|Virgin|Virginum|Confessor|Abbatis|Doctor|Joseph|Joannes\s+Baptistae|Angelorum|Archangel|Sanctissimi\s+Nominis|Transfigur|Assumptione|Conception|Annuntiat|Visitat|Purific|infra\s+Octavam|Dedicat|Corporis|Christi\s+Regis)/i;
const RE_PURPLE =
  /(Adventus|Quadragesim|Septuag|Sexag|Quinquag|Cinerum|Vigilia(?!\s+Nativ|\s+Pentecost|\s+Ascens|\s+Epiphan)|Rogat)/i;
const RE_BLACK = /(Defunct|Requiem)/i;

/**
 * Tempora color dispatch is by file-key prefix, not by officium regex: the
 * Latin officium text often names a season ("post Octavam Pentecostes") that
 * would match the wrong regex (`Octavam` → White, `Pentecostes` → Red) for
 * days that are actually ordinary time. File keys are unambiguous.
 */
function deriveTemporaColor(fileKey: string): ColorValue[] {
  // Christmas season and its octave.
  if (/^Nat/.test(fileKey)) return ['White'];
  // Advent, Lent, pre-Lent, Passiontide, Holy Week.
  if (/^Adv/.test(fileKey)) return ['Purple'];
  if (/^Quad/.test(fileKey)) return ['Purple'];
  // Sunday within Octave of Epiphany (Epi1-0a) and Holy Family (Epi1-0).
  if (/^Epi1-/.test(fileKey)) return ['White'];
  // Other Sundays after Epiphany and their ferias: the 1962 Missal colors
  // Time after Epiphany green, despite the "post Epiphaniam" naming.
  if (/^Epi/.test(fileKey)) return ['Green'];
  // Resumed post-Epiphany Sundays placed after Pentecost when needed.
  if (/^PentEpi/.test(fileKey)) return ['Green'];
  // Pentecost Vigil, Sunday, octave days, and Ember Days within the octave.
  if (fileKey === 'Pasc6-6' || fileKey === 'Pasc6-6r') return ['Red'];
  if (/^Pasc7/.test(fileKey)) return ['Red'];
  // Easter Octave and the Sundays through Ascension.
  if (/^Pasc/.test(fileKey)) return ['White'];
  // Trinity Sunday (Pent01-0, Pent01-0a) and Corpus Christi (Pent01-4).
  if (/^Pent01-0/.test(fileKey)) return ['White'];
  if (fileKey === 'Pent01-4') return ['White'];
  // Everything else in the Pentecost season is ordinary time.
  return ['Green'];
}

export function deriveColor(ctx: ColorContext): ColorValue[] {
  if (ctx.source === 'tempora') return deriveTemporaColor(ctx.fileKey);

  const text = [ctx.officium ?? '', ctx.fileKey].join(' ');
  if (RE_BLACK.test(text)) return ['Black'];
  if (RE_RED.test(text)) return ['Red'];
  if (RE_PURPLE.test(text)) return ['Purple'];
  if (RE_WHITE.test(text)) return ['White'];
  return ['White'];
}
