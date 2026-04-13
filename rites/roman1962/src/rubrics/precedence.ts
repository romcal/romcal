import type { Celebration1962 } from './types';

const CLASS_BASE: Record<1 | 2 | 3 | 4, number> = {
  1: 4000,
  2: 3000,
  3: 2000,
  4: 1000,
};

const TRIDUUM = new Set(['Quad6-4', 'Quad6-5', 'Quad6-6']);
const EASTER_PENTECOST = new Set(['Pasc0-0', 'Pasc7-0', 'Pent01-0']);
const SOLEMN_SUNDAYS = new Set([
  'Pasc1-0', // Low Sunday
  'Quad6-0', // Palm Sunday
]);

const LENT_FERIA = /^Quad[1-5]-[1-6]$/;
const LENT_SUNDAY = /^Quad[1-5]-0$/;
const ADVENT_SUNDAY = /^Adv[1-4]-0$/;
const HOLY_WEEK_FERIA = /^Quad6-[1-3]$/;
const EASTER_WEEK_FERIA = /^Pasc0-[1-6]$/;

const LORD_FEAST_NAME =
  /Domini|Christi|Jesu|Iesu|Trinitatis|Corporis Christi|Ss\. Cordis|Nativit|Circumcis|Epiphani|Pentecostes|Assumptione|Trinit/i;

function fineAdjustment(c: Celebration1962): number {
  if (c.kind === 'tempora') {
    if (TRIDUUM.has(c.key)) return 400;
    if (EASTER_PENTECOST.has(c.key)) return 380;
    if (ADVENT_SUNDAY.test(c.key) || LENT_SUNDAY.test(c.key) || SOLEMN_SUNDAYS.has(c.key)) {
      return 360;
    }
    if (c.key === 'Quadp3-3') return 340;
    if (HOLY_WEEK_FERIA.test(c.key)) return 320;
    if (EASTER_WEEK_FERIA.test(c.key)) return 300;
    if (c.key === 'Pasc6-6') return 280;
    if (c.classOf1962 === 2 && /-0a?$/.test(c.key)) return 150;
    if (LENT_FERIA.test(c.key)) return 100;
    return 0;
  }
  // Sancti: elevate feasts of the Lord within their class.
  if (c.classOf1962 <= 2 && LORD_FEAST_NAME.test(c.name)) return 200;
  return 0;
}

export function scorePrecedence(c: Celebration1962): number {
  return CLASS_BASE[c.classOf1962] + fineAdjustment(c) + (c.numericRank || 0) * 0.01;
}
