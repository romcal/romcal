import type { RankInfo } from './types';

type Class1962 = RankInfo['class1962'];
type Rank1962 = RankInfo['rank1962'];

/**
 * Map the numeric rank from a divinum-officium `[Rank]` block to the 1960
 * Rubricae class (I–IV). The class text in divinum-officium still carries
 * pre-1960 vocabulary (Semiduplex, Simplex, Duplex majus, …) even inside
 * (rubrica 196)-tagged blocks, so the numeric field is the authoritative
 * 1960 signal. The class text is preserved as `classText` on RankInfo for
 * historical reference only.
 */
export function mapNumericToClass1962(n: number): Class1962 {
  if (n >= 6) return 1;
  if (n >= 5) return 2;
  if (n >= 3) return 3;
  return 4;
}

export function mapNumericToRank1962(n: number): Rank1962 {
  if (n >= 6) return 'ClassI';
  if (n >= 5) return 'ClassII';
  if (n >= 3) return 'ClassIII';
  if (n >= 2) return 'ClassIV';
  return 'Ferial';
}
