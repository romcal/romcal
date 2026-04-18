import { MONTHS, WEEKDAYS } from '@internal/rite-roman1969';

import { COLORS_1962, Colors1962 } from '../src/constants/colors-1962';
import { RANKS_1962, Rank1962Values } from '../src/constants/rank-1962';
import { SEASONS_1962, Seasons1962 } from '../src/constants/seasons-1962';
import { Romcal1962 } from '../src/romcal-1962';

describe('Romcal1962 — static constant accessors (1969 parity)', () => {
  test('MONTHS + WEEKDAYS are the shared @internal/rite-roman1969 identities', () => {
    // Reference-equal to the shared source (no accidental copies).
    expect(Romcal1962.MONTHS).toBe(MONTHS);
    expect(Romcal1962.WEEKDAYS).toBe(WEEKDAYS);
    expect(Romcal1962.MONTHS).toHaveLength(12);
    expect(Romcal1962.WEEKDAYS).toHaveLength(7);
    expect(Romcal1962.MONTHS[0]).toBe('january');
    expect(Romcal1962.WEEKDAYS[0]).toBe('sunday');
  });

  test('Colors + COLORS + isColor mirror 1962 palette', () => {
    expect(Romcal1962.Colors).toBe(Colors1962);
    expect(Romcal1962.COLORS).toBe(COLORS_1962);
    expect(Romcal1962.Colors.White).toBe('White');
    expect(Romcal1962.Colors.Violet).toBe('Violet');
    expect(Romcal1962.COLORS).toContain('Rose');
    expect(Romcal1962.COLORS).not.toContain('Gold'); // 1969-only
    expect(Romcal1962.isColor('White')).toBe(true);
    expect(Romcal1962.isColor('Gold')).toBe(false);
  });

  test('Ranks + RANKS match the 1962 class hierarchy', () => {
    expect(Romcal1962.Ranks).toBe(Rank1962Values);
    expect(Romcal1962.RANKS).toBe(RANKS_1962);
    expect(Romcal1962.Ranks.ClassI).toBe('ClassI');
    expect(Romcal1962.RANKS).toEqual(['ClassI', 'ClassII', 'ClassIII', 'ClassIV', 'Ferial']);
  });

  test('Seasons + SEASONS expose the 1962 Proper-of-Time season set', () => {
    expect(Romcal1962.Seasons).toBe(Seasons1962);
    expect(Romcal1962.SEASONS).toBe(SEASONS_1962);
    expect(Romcal1962.Seasons.Septuagesima).toBe('Septuagesima');
    expect(Romcal1962.Seasons.TimeAfterPentecost).toBe('TimeAfterPentecost');
    expect(Romcal1962.SEASONS).toContain('Passiontide'); // 1962-specific
  });
});
