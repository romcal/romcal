export type ColorValue = 'Red' | 'Rose' | 'Purple' | 'Green' | 'White' | 'Gold' | 'Black';

interface ColorContext {
  source: 'tempora' | 'sancti' | 'commune';
  fileKey: string;
  officium?: string;
}

const RE_RED =
  /(Martyr|Martyrum|Martyrium|Pentecostes|Sanguinis|Apostol|Evangelist|Passion|Exalt.*Crucis|Inv.*Crucis)/i;
const RE_WHITE =
  /(Nativ|Epiphan|Jesu|Mariae|Virgin|Virginum|Confessor|Abbatis|Doctor|Joseph|Joannes\s+Baptistae|Angelorum|Archangel|Sanctissimi\s+Nominis|Transfigur|Assumptione|Conception|Annuntiat|Visitat|Purific|Octavam|infra\s+Octavam|Dedicat|Corporis|Christi\s+Regis)/i;
const RE_PURPLE =
  /(Adventus|Quadragesim|Septuag|Sexag|Quinquag|Cinerum|Vigilia(?!\s+Nativ|\s+Pentecost|\s+Ascens|\s+Epiphan)|Rogat)/i;
const RE_BLACK = /(Defunct|Requiem)/i;

export function deriveColor(ctx: ColorContext): ColorValue[] {
  const text = [ctx.officium ?? '', ctx.fileKey].join(' ');

  if (RE_BLACK.test(text)) return ['Black'];
  if (RE_RED.test(text)) return ['Red'];
  if (RE_PURPLE.test(text)) return ['Purple'];
  if (RE_WHITE.test(text)) return ['White'];

  if (ctx.source === 'tempora') {
    if (/^Pasc/.test(ctx.fileKey) || /^Pent/.test(ctx.fileKey)) return ['White'];
    if (/^Adv/.test(ctx.fileKey)) return ['Purple'];
    if (/^Quad/.test(ctx.fileKey) || /^Quadp/.test(ctx.fileKey)) return ['Purple'];
    if (/^Pasc0/.test(ctx.fileKey)) return ['White'];
    return ['Green'];
  }

  return ['White'];
}
