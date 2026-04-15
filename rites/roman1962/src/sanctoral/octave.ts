import type { OctaveInfo } from '../types/liturgical-day-1962';

/**
 * 1960 Rubricae §81 retained only three octaves (Christmas, Easter,
 * Pentecost) in the Universal Calendar. The movable two (Easter /
 * Pentecost) are M3's responsibility; the fixed Christmas octave has
 * its octave-day on 01-01 (Circumcision), which is the only entry M4
 * emits an `octave` block for.
 */
export function deriveFixedOctave(mmdd: string): OctaveInfo | undefined {
  if (mmdd === '01-01') {
    return {
      id: 'christmas',
      parentFeastId: 'nativity_of_our_lord_jesus_christ',
      day: 8,
      kind: 'octaveDay',
      rank: 'classII',
    };
  }
  return undefined;
}
